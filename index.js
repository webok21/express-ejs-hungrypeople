const fs = require('fs')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const menuData = require('./menu.json')
const selectionData = require('./selection.json')

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))




app.get('/', (req, res) => {
    res.render('index', { title: "Home" })
})
app.get('/about', (req, res) => {
    res.render('about', { title: "About" })
})
app.get('/team', (req, res) => {
    res.render('team', { title: "Team" })
})
app.get('/booking', (req, res) => {
    res.render('booking', { title: "Booking" })
})
app.get('/menu', (req, res) => {
    res.render('menu', { title: "Menu", selection: selectionData, menu: menuData })
})
app.get('/galerie', (req, res) => {
    res.render('galerie', { title: "Galerie" })
})
app.get('/events', (req, res) => {
    res.render('events', { title: "Events" })
})
app.get('/contact', (req, res) => {
    res.render('contact', { title: "Contact" })
})
app.get('/feedback', (req, res) => {
    res.render('feedback', { title: "Feedback" })
})
app.use((req, res) => {
    res.status(404).render('404', { title: 404 })
})


app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
