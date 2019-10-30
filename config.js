const development = {
 host: 'localhost',
 port: 4000,
 env: 'development'
};

const config = process.env.NODE_ENV || development;

module.exports = {
 config
};
