const bongdaRouter = require('./bongda');

function route(app) {
    app.get('/', (req, res) => {
        res.render('home');
    })

    app.use('/bong-da', bongdaRouter);

    app.get('/search-hoangdinh', (req, res) => {
        res.render('searchhh')
    })
}

module.exports = route;