'use serever';

import { User, FetchUserResponse } from '@/types/User';

const users: User[] = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
  { id: 3, name: 'Michael Johnson', email: 'michael.johnson@example.com' },
  { id: 4, name: 'Emily Davis', email: 'emily.davis@example.com' },
  { id: 5, name: 'David Brown', email: 'david.brown@example.com' },
  { id: 6, name: 'Sarah Wilson', email: 'sarah.wilson@example.com' },
  {
    id: 7,
    name: 'Christopher Anderson',
    email: 'christopher.anderson@example.com',
  },
  { id: 8, name: 'Olivia Thompson', email: 'olivia.thompson@example.com' },
  { id: 9, name: 'Daniel Martinez', email: 'daniel.martinez@example.com' },
  {
    id: 10,
    name: 'Isabella Hernandez',
    email: 'isabella.hernandez@example.com',
  },
  { id: 11, name: 'Matthew Gonzalez', email: 'matthew.gonzalez@example.com' },
  { id: 12, name: 'Avery Morales', email: 'avery.morales@example.com' },
  { id: 13, name: 'Jacob Ramirez', email: 'jacob.ramirez@example.com' },
  { id: 14, name: 'Emma Diaz', email: 'emma.diaz@example.com' },
  { id: 15, name: 'Ethan Reyes', email: 'ethan.reyes@example.com' },
  { id: 16, name: 'Ava Flores', email: 'ava.flores@example.com' },
  {
    id: 17,
    name: 'Alexander Castillo',
    email: 'alexander.castillo@example.com',
  },
  { id: 18, name: 'Abigail Gutierrez', email: 'abigail.gutierrez@example.com' },
  { id: 19, name: 'William Jimenez', email: 'william.jimenez@example.com' },
  { id: 20, name: 'Isabella Quintana', email: 'isabella.quintana@example.com' },
  { id: 21, name: 'Joshua Navarro', email: 'joshua.navarro@example.com' },
  { id: 22, name: 'Mia Cortez', email: 'mia.cortez@example.com' },
  { id: 23, name: 'Benjamin Delgado', email: 'benjamin.delgado@example.com' },
  { id: 24, name: 'Sophia Salazar', email: 'sophia.salazar@example.com' },
  { id: 25, name: 'Andrew Soto', email: 'andrew.soto@example.com' },
  { id: 26, name: 'Isabella Trevino', email: 'isabella.trevino@example.com' },
  { id: 27, name: 'Daniel Vargas', email: 'daniel.vargas@example.com' },
  { id: 28, name: 'Olivia Zamora', email: 'olivia.zamora@example.com' },
  { id: 29, name: 'Lucas Aleman', email: 'lucas.aleman@example.com' },
  { id: 30, name: 'Abigail Benitez', email: 'abigail.benitez@example.com' },
  { id: 31, name: 'Jacob Cardenas', email: 'jacob.cardenas@example.com' },
];

export const fetchUsers = async (
  page: number,
  limit: number
): Promise<FetchUserResponse> => {
  // Simulating API call
  await new Promise((resolve) => setTimeout(resolve, 500));
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  return {
    users: users.slice(startIndex, endIndex),
    hasMore: endIndex < users.length - 1,
  };
};
