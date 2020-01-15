const Visit = require('./models/visit');

// counting visits
const countVisits = (req, res, next) => {
    const url = req.originalUrl;

    Visit.findOne({ page: url, method: req.method }, (err, visit) => {
        if(visit === null) {
            const newPage = new Visit({
                page: url,
                method: req.method,
                count: 1
            });
        
            newPage.save()
                .catch(err => console.log('Update error: ' + err));
        } else {
            visit.count += 1;
            visit.save()
                .catch(err => console.log('Update error: ' + err));
        }
    });

    next();
};

module.exports = countVisits;