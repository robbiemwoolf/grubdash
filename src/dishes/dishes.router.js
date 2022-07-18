const router = require("express").Router();
const controller = require("./dishes.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

// TODO: Implement the /dishes routes needed to make the tests pass
router
    .route("/") // because we are already at the end of the /dishes path already
    .get(controller.list)
    .post(controller.create)
    .all(methodNotAllowed);

router
    .route("/:dishId")
    //.put(controller.update)
    //.get(controller.read)
    .all(methodNotAllowed);

module.exports = router;
