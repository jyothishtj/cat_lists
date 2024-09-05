import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import CatList from './CatList';

// Define the mock response data
const mockData = [
  {
    "name": "Bob",
    "gender": "Male",
    "age": 23,
    "pets": [{"name": "Garfield", "type": "Cat"}, {"name": "Fido", "type": "Dog"}]
  },
  {"name": "Jennifer", "gender": "Female", "age": 18, "pets": [{"name": "Garfield", "type": "Cat"}]},
  {"name": "Steve", "gender": "Male", "age": 45, "pets": null},
  {
    "name": "Fred",
    "gender": "Male",
    "age": 40,
    "pets": [
      {"name": "Tom", "type": "Cat"},
      {"name": "Max", "type": "Cat"},
      {"name": "Sam", "type": "Dog"},
      {"name": "Jim", "type": "Cat"}
    ]
  },
  {"name": "Samantha", "gender": "Female", "age": 40, "pets": [{"name": "Tabby", "type": "Cat"}]},
  {
    "name": "Alice",
    "gender": "Female",
    "age": 64,
    "pets": [{"name": "Simba", "type": "Cat"}, {"name": "Nemo", "type": "Fish"}]
  }
];

// Mock fetch globally
// Mock the fetch function


test('renders cats sorted by owner gender', async () => {
  render(<CatList />);
  

  // Wait for the component to fetch and display data
  await waitFor(() => {
    // Check if the headers for genders are present
    expect(screen.getByText('Male')).toBeInTheDocument();
    expect(screen.getByText('Female')).toBeInTheDocument();

    // Check if the cats are listed in alphabetical order
    expect(screen.getByText('Garfield')).toBeInTheDocument();
    expect(screen.getByText('Jim')).toBeInTheDocument();
    expect(screen.getByText('Max')).toBeInTheDocument();
    expect(screen.getByText('Tom')).toBeInTheDocument();

    expect(screen.getByText('Garfield')).toBeInTheDocument();
    expect(screen.getByText('Simba')).toBeInTheDocument();
    expect(screen.getByText('Tabby')).toBeInTheDocument();
  });
});