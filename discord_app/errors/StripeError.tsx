// === Module 4477: StripeError ===

// Module 4477 (StripeError)
import BillingError from "BillingError" /* 4253 */;

const prototype = function StripeError(error) {
  error = error.error;
  if (null != error.param) {
    let obj = { body: null };
    obj = {};
    ({ param, message } = error);
    const items = [message];
    obj[param] = items;
    obj.body = obj;
    tmp = new tmp(obj, message, param, items);
  } else {
    tmp = new tmp(error.message, tmp3, tmp2, error);
  }
  return tmp;
}.prototype;
class prototype extends tmp2 {
}
const size = fn(2);
const result = size.fileFinishedImporting("errors/StripeError.tsx");

export default prototype;