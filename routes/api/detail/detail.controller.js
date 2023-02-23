const axios = require('axios')
const { API_KEY } = require('../../../global')

exports.GetDetail = async (req, res) => {
    try {
        const { id: place_id } = req.params
        const { param } = req.query
        const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&fields=${param}&key=${API_KEY}`
        const response = await axios.get(url)
        res.send(response.data.result)
    } catch (e) {
        console.log(e)
        res.status(500).send('Internal Server Error')
    }
}

exports.GetPhoto = async (req, res) => {
    try {
        const { width, height, reference } = req.query
        const url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${width}&maxheight=${height}&photo_reference=${reference}&key=${API_KEY}`
        const { data: stream } = await axios.get(url, {
            responseType: 'stream'
        })
        
        return new Promise((resolve, reject) => {
            stream.on('error', reject)
            stream.on('close', resolve)

            stream.pipe(res)
        })
    } catch (e) {
        console.log(e)
        res.status(500).send('Internal Server Error')
    }
}