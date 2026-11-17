// discord_app/modules/payments/OrderSigningErrors.tsx
import BillingErrorDefault from "../../errors/BillingError.tsx";
import PaymentConstants from "PaymentConstants.tsx";
import OrderConstants from "OrderConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const ConstraintReasonCode = OrderConstants.ConstraintReasonCode;
const OrderClientErrorCode = PaymentConstants.OrderClientErrorCode;
const result = size.fileFinishedImporting("modules/payments/OrderSigningErrors.tsx");

export function getOrderSigningError(unsatisfied_constraints) {
  unsatisfied_constraints = unsatisfied_constraints.unsatisfied_constraints;
  let someResult;
  if (unsatisfied_constraints != null) {
    someResult = unsatisfied_constraints.some(
      (reason_code) => reason_code.reason_code === constants.PURCHASE_RESTRICTED,
    );
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
