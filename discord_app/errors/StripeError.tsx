// === Module 5321: StripeError ===

// Module 5321 (StripeError)
import BillingError from "BillingError" /* 4556 */;
import size from "module_2" /* 2 */;

class StripeError extends BillingError {
  constructor(error) {
    let message;
    let obj2;
    let param;
    let tmp6;
    error = error.error;
    if (null != error.param) {
      const obj = { body: obj2 };
      obj2 = {};
      ({ param, message } = error);
      const items = [message];
      obj2[param] = items;
      const self3 = this;
      const self4 = this;
      tmp6 = new tmp(obj, message, param, items);
    } else {
      const self = this;
      const self2 = this;
      tmp6 = new tmp(error.message, tmp3, tmp2, error);
    }
    return tmp6;
  }
}
const result = size.fileFinishedImporting("errors/StripeError.tsx");

export default StripeError;