class SiteController {
    // [GET]/new
    index(req, res) {
        res.render('home');
    }

    // [GET]/new/:slug
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
