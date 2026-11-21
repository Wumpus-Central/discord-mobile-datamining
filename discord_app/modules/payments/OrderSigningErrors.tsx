// === Module 6863: OrderSigningErrors ===

// Module 6863 (OrderSigningErrors)
import PaymentConstants from "PaymentConstants" /* 5630 */;
import BillingErrorDefault from "BillingError" /* 6351 */;
import OrderConstants from "OrderConstants" /* 6861 */;
import size from "module_2" /* 2 */;

const ConstraintReasonCode = OrderConstants.ConstraintReasonCode;
const OrderClientErrorCode = PaymentConstants.OrderClientErrorCode;
const result = size.fileFinishedImporting("modules/payments/OrderSigningErrors.tsx");

export function getOrderSigningError(body2) {
  const unsatisfied_constraints = body2.unsatisfied_constraints;
  let someResult;
  if (unsatisfied_constraints != null) {
    someResult = unsatisfied_constraints.some((reason_code) => reason_code.reason_code === constants.PURCHASE_RESTRICTED);
  }
  if (someResult) {
    const tmp102 = new BillingErrorDefault("", BillingErrorDefault.ErrorCodes.BILLING_PURCHASE_BLOCKED_BY_RESTRICTION);
    return tmp102;
  } else {
    const error = body2.error;
    let tmp2 = null;
    if (null != error) {
      tmp2 = null;
      if (error.code !== OrderClientErrorCode.UNKNOWN_ERROR_CODE) {
        tmp2 = new BillingErrorDefault(error.message, error.billing_error_code);
      }
    }
    return tmp2;
  }
}