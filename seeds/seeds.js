const seedCategories = require('./category_seeds');
const seedProducts = require('./product_seeds');
const seedTags = require('./tag_seeds');
const seedProductTags = require('./tag_seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedCategories();
    await seedProducts();
    await seedTags();
    await seedProductTags();

    process.exit(0);
};

seedAll();