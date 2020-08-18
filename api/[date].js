const axios = require('axios');

const getMedia = (url) => axios.get(url)
  .then(res => res.data)

module.exports = async (req, res) => {
  try {
    const { query: { date } } = req
    const baseUrl = 'https://api.nasa.gov/planetary/'
    const APOD_API_KEY = process.env.APOD_API_KEY
    const url = `${baseUrl}apod?api_key=${APOD_API_KEY}&date=${date}`
    let data = await getMedia(url)
    res.json(data);
  } catch (error) {
    let e = {"errorMsg": "Media not available"}
    res.json(e)
  }
}
