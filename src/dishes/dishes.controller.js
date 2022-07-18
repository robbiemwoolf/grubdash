const path = require("path"); // path is a helper library to resolve paths in different way, it is built into Node, prevents that ../../.. thing

// Use the existing dishes data
const dishes = require(path.resolve("src/data/dishes-data"));

// Use this function to assign ID's when necessary
const nextId = require("../utils/nextId");

// TODO: Implement the /dishes handlers needed to make the tests pass

// get dishes
function list(req, res, next) {
    res.json({ data: dishes });
};

// post a new dish
function bodyHasData(propertyName) {
    return function (req, res, next) {
        const { data = {} } = req.body;
        if (data[propertyName]) {
            return next();
        }
        next({ status: 400, message: `Must includa a ${propertyName}` });
    };
};

function validPriceCheck() {
    return function (req, res, next) {
        const { data } = req.body;
        if (data.price <= 0) {
            return next();
        }
        next({ status: 400, message: "Dish must have a price that is an integer greater than 0"})
    }
}

function create(req, res, next) {
    let lastDishId = dishes.reduce((maxId, dish) => Math.max(maxId, dish.id), 0);
    
    const { data: { name, description, price, image_url } = {} } = req.body;
    const newDish = {
        id: ++lastDishId,
        name,
        description,
        price,
        image_url,
    };
    dishes.push(newDish);
    res.status(201).json({ data: newDish });
};

// read

// function read(req, res) {
//     const { dishId } = req.params;
//     const foundDish = dishes.find((dish) => dish.id === Number(dishId));
//     res.json({ data: foundDish });
// };

// function update(req, res, next) {

// };


module.exports = {
    create: [
        bodyHasData('name'),
        bodyHasData('description'),
        bodyHasData('price'),
        bodyHasData('image_url'),
        validPriceCheck,
        create,
    ],
    list,
    // read: [
    //     read
    // ],
    // update,
};