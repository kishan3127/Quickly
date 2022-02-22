import axios from 'axios'

export default axios.create({
  baseURL: `http://139.59.53.172/api/v1/`,
  accept: "application/json"
})