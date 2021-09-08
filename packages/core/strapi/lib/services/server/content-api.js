'use strict';

const { createAPI } = require('./api');

const createContentAPI = strapi => {
  const opts = {
    prefix: strapi.config.get('api.prefix', '/api'),
    type: 'content-api',
  };

  return createAPI(strapi, opts);
};

module.exports = {
  createContentAPI,
};
