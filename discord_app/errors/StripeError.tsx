// === Module 4542: StripeError ===

// Module 4542 (StripeError)
import BillingError from "BillingError" /* 4319 */;

const prototype = function StripeError(error) {
  error = error.error;
  if (null != error.param) {
    const obj = { body: null };
    const obj2 = {};
    ({ param, message } = error);
    const items = [message];
    obj2[param] = items;
    obj.body = obj2;
    let tmp8 = new tmp(obj, message, param, items);
  } else {
    tmp8 = new tmp(error.message, tmp3, tmp2, error);
  }
  return tmp8;
}.prototype;
class prototype extends tmp2 {
}
const size = fn(2);
const result = size.fileFinishedImporting("errors/StripeError.tsx");

export default prototype;