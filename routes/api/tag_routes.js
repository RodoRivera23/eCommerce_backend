const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// get all tags
router.get('/', async (req, res) => {
    try {
        const tags = await Tag.findAll({
            include: [{ model: Product }],
        });
        res.status(200).json(tags);
    } catch (err) {
        res.status(500).json(err);
    }
});

// get tag by id
router.get('/:id', async (req, res) => {
    try {
        const tag = await Tag.findByPk(req.params.id, {
            include: [{ model: Product }],
        });

        if (!tag) {
            res.status(404).json({ message: 'No tag found with this id' });
            return;
        }

        res.status(200).json(tag);
    } catch (err) {
        res.status(500).json(err);
    }
});

// create new tag
router.post('/', async (req, res) => {
    try {
        const newTag = await Tag.create(req.body);
        res.status(200).json(newTag);
    } catch (err) {
        res.status(500).json(err);
    }
});

// update tag by id
router.put('/:id', async (req, res) => {
    try {
        const updatedTag = await Tag.update(
            { tag_name: req.body.tag_name },
            { where: { id: req.params.id } }
        );
        res.status(200).json(updatedTag);
    } catch (err) {
        res.status(500).json(err);
    }
});

// delete tag by id
router.delete('/:id', async (req, res) => {
    try {
        const deletedTag = await Tag.destroy({
            where: { id: req.params.id },
        });
        res.status(200).json(deletedTag);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;