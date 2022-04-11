import axios from 'axios'

const baseUrl = process.env.REACT_APP_SERVICE_BASE_URL

export const getRepos = ({q}) =>
  axios.get(`${baseUrl}/search/repositories?q=${q}`)
