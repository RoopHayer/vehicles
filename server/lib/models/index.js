require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const userModel = require('../auth/model/users');
const listingModel = require('./listing');
const Collection = require('./collection');

const DATABASE_URL = process.env.DATABASE_URL || 'sqlite::memory:';

const DATABASE_CONFIG =
  process.env.NODE_ENV === 'production'
    ? {
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        },
      }
    : {};

const sequelize = new Sequelize(DATABASE_URL, DATABASE_CONFIG);
const users = userModel(sequelize, DataTypes);

const listing = listingModel(sequelize, DataTypes);

users.hasMany(listing, { foreignKey: 'userId', sourceKey: 'id' });
listing.belongsTo(users, { foreignKey: 'userId', targetKey: 'id' });

module.exports = {
  db: sequelize,
  users,
  listing: new Collection(listing),
};
