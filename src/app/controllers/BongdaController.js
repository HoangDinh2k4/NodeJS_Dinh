class BongdaController {
    //[GET] /bong-da
    index(req, res) {
        res.render('bongda');
    }
     
    //[GET] /bong-da/:slug
    show(req, res) {
        res.send('FOOTBALL DETAIL!!!');
    }
}

module.exports = new BongdaController;