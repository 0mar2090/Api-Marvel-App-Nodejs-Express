
module.exports = function (app) {
    
    app.get('/', (req, res) => res.render('profile'));
    app.get('/search/character', (req, res) => res.render('character'));
    app.get('/search/comicbook', (req, res) => res.render('comicbook'));
    app.get('/view/character', (req, res) => res.render('pcharacter'));
    app.get('/view/comics', (req, res) => res.render('pcomics'));
};
