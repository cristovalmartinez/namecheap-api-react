import { Router } from "express"
import { domainAvailability } from "./controller.js"

const router = Router()

router.route("/domain").get(domainAvailability)

export default router
