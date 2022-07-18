const router = require("express").Router();
const controller = require("./dishes.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

// TODO: Implement the /dishes routes needed to make the tests pass
router
    .route("/") // because we are already at the end of the /dishes path already
    .get(controller.list)
    .all(methodNotAllowed);

router
    .route("/:dishId")
    .all(methodNotAllowed);

module.exports = router;
