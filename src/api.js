import axios from 'axios';


export const addCounter = (title) => (
  axios.post('/api/v1/counter', { title })
);

export const decrementCounter = (id) => (
  axios.post('/api/v1/counter/dec', { id })
);

export const deleteCounter = (id) => (
  axios.delete('/api/v1/counter', { data: { id } })
);

export const getCounters = () => (
  axios.get('/api/v1/counters')
);

export const incrementCounter = (id) => (
  axios.post('/api/v1/counter/inc', { id })
);