
import React, { useEffect, useState } from 'react';
import './CatList.css';

interface Pet {
  name: string;
  type: string;
}

interface Person {
  name: string;
  gender: string;
  age: number;
  pets: Pet[] | null;
}

const CatList: React.FC = () => {
  const [cats, setCats] = useState<{ [key: string]: string[] }>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://gist.githubusercontent.com/medibank-digital/a1fc81a93200a7b9d5f8b7eae0fac6f8/raw/de10a4fcf717e6c431e88c965072c784808fd6b2/people.json'); // Replace with your actual URL
        const data: Person[] = await response.json();

        const categorizedCats: { [key: string]: string[] } = {};

        data.forEach(person => {
          if (person.pets) {
            person.pets
              .filter(pet => pet.type === 'Cat')
              .forEach(cat => {
                if (!categorizedCats[person.gender]) {
                  categorizedCats[person.gender] = [];
                }
                categorizedCats[person.gender].push(cat.name);
              });
          }
        });

        for (const gender in categorizedCats) {
          categorizedCats[gender] = categorizedCats[gender].sort();
        }

        setCats(categorizedCats);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="cat-list-container">
      {Object.entries(cats).map(([gender, catNames]) => (
        <div className="cat-list-section" key={gender}>
          <h2>{gender}</h2>
          <ul>
            {catNames.map((catName, index) => (
              <li key={index}>{catName}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CatList;
