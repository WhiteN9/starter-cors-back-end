const router = require("express").Router();
const controller = require("./cors-enabled.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");
const cors = require("cors");

// const corsDelete = cors({methods: "DELETE"});

router
  .route("/:corsId")
  .all(cors())
  .get(controller.read)
  .put(controller.update)
  // .delete(cors(), controller.delete)

  // .delete(corsDelete, controller.delete)
  // .options(corsDelete)

  .delete(controller.delete)
  .all(methodNotAllowed);

router
  .route("/")
  // .get(controller.list)
  .get(cors(), controller.list)
  .post(controller.create)
  .all(methodNotAllowed);

module.exports = router;
