const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const path = require('path')
const indexRoutes = require('./routes/index.routes')
const PORT = process.env.PORT || 3000

// Express config
app.set('views', path.join(__dirname, 'views'))
app.engine('hbs', exphbs({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs'
}))
app.set('view engine', 'hbs')

// routes
app.use(indexRoutes)

// statics files
app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, () => {
  console.log(`Server on PORT ${PORT}`)
})
