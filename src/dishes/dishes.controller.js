const path = require("path"); // path is a helper library to resolve paths in different way, it is built into Node, prevents that ../../.. thing

// Use the existing dishes data
const dishes = require(path.resolve("src/data/dishes-data"));

// Use this function to assign ID's when necessary
const nextId = require("../utils/nextId");

// TODO: Implement the /dishes handlers needed to make the tests pass
function list(req, res, next) {
    res.json({ data: dishes });
};

module.exports = {
    list,
};