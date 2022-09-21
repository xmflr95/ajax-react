import axios from 'axios';

export async function getUsers() {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users`
  );
  return response.data;
}

export async function getUser() {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return response.data;
}