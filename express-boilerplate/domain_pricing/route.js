import { Router } from "express"
import { domainPricing } from "./controller.js"

const router = Router()

router.route("/domain-pricing").get(domainPricing)

export default router
