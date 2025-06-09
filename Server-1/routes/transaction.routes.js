import exprss from "express"
import { getTransaction, addTransaction , deleteTransaction } from "../controller/transaction.controller.js";

const router = exprss.Router()
router.route('/')
router.get("/gettransaction",getTransaction)
router.post("/addtransaction", addTransaction)
router.delete("/deletetransaction/:id",deleteTransaction)
export default router
