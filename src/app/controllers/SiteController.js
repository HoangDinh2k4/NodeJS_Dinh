class SiteController {
    //[GET] /
    home(req, res) {
        res.render('home');
    }
     
    //[GET] /search
    show(req, res) {
        res.send('searchhh');
    }
}

module.exports = new BongdaController;