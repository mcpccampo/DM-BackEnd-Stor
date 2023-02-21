const express = require('express')

const PORT = 8080
const app = express();

app.use(express.json())

app.listen(PORT, () => {
  console.log(`Node Server running on port# ${PORT}`)
})
