// Client ID
// 77a84d4cbe63f07368eb
// Client Secret
// 630b23d0c96dc7f856cd1efe49e42dff46419d51
module.exports = {
    passport: {
        clientID: '77a84d4cbe63f07368eb',
        clientSecret: '630b23d0c96dc7f856cd1efe49e42dff46419d51',
        callbackUrl: 'http://localhost:3000/auth/github/callback'
    },
    pg: {
        host: 'localhost',
        port: 5432,
        database: 'digitalcrafts',
        users: 'digitalcrafts',
        password: ''
     }
}