module.exports = {
    findOne: find_one
};

var users = {
    'mike': {
        username: 'mike',
        password: '1'
    },
    'r': {
        username: 'r',
        password: '1'
    }
};

function find_one(query, callback) {
    var user = users[query.username];
    if (!user) return callback('not found');
    user.validPassword = validPassword;
    return callback(null, user);
}

function validPassword(password) {
    return this.password === password;
}
