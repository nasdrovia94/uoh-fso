import axios from "axios";

const URL = "http://localhost:3001/persons";

const getAll = () => {
  return axios.get(URL).then((response) => response.data);
};

const create = (person) => {
  return axios.post(URL, person).then((response) => response.data);
};

const update = (id, updatedPerson) => {
  return axios
    .put(`${URL}/${id}`, updatedPerson)
    .then((response) => response.data);
};

const remove = (id) => {
  return axios.delete(`${URL}/${id}`).then((response) => response.data);
};

export default {
  getAll,
  create,
  update,
  remove,
};
