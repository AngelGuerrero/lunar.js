class HomeController {
  constructor () {
    console.log('HomeController')
  }

  index (req, res) {
    return res.json({ greeting: 'hello world!' })
  }
}

module.exports = HomeController
