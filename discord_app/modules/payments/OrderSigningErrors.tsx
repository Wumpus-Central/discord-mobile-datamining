// === Module 7268: OrderSigningErrors ===

// Module 7268 (OrderSigningErrors)
import BillingErrorDefault from "BillingError" /* 5130 */;
import PaymentConstants from "PaymentConstants" /* 6044 */;
import OrderConstants from "OrderConstants" /* 7266 */;
import size from "module_2" /* 2 */;

const ConstraintReasonCode = OrderConstants.ConstraintReasonCode;
const OrderClientErrorCode = PaymentConstants.OrderClientErrorCode;
const result = size.fileFinishedImporting("modules/payments/OrderSigningErrors.tsx");

export function getOrderSigningError(unsatisfied_constraints) {
  unsatisfied_constraints = unsatisfied_constraints.unsatisfied_constraints;
  let someResult;
  if (unsatisfied_constraints != null) {
    someResult = unsatisfied_constraints.some((reason_code) => reason_code.reason_code === constants.PURCHASE_RESTRICTED);
  }
  if (someResult) {
    const tmp102 = new BillingErrorDefault("", BillingErrorDefault.ErrorCodes.BILLING_PURCHASE_BLOCKED_BY_RESTRICTION);
    return tmp102;
  } else {
    const error = unsatisfied_constraints.error;
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