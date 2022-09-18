import { Router } from "express"
import { domainAvailability } from "./controller.js"

const router = Router()

router.route("/domain").post(domainAvailability)

export default router
