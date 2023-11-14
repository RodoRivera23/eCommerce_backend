const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongs to Category
Product.belongsTo(Category, {
    foreignKey: 'category_id',
});

// Categories have many Products
Category.hasMany(Product, {
    foreignKey: 'category_id',
});

// Products belongs to many Tags (through ProductTag)
Product.belongsToMany(Tag, {
    through: ProductTag,
    foreignKey: 'product_id',
});

// Tags belongs to many Products (through ProductTag)
Tag.belongsToMany(Product, {
    through: ProductTag,
    foreignKey: 'tag_id',
});

module.exports = {
    Product,
    Category,
    Tag,
    ProductTag,
};