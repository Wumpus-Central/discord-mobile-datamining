// discord_app/errors/StripeError.tsx
import BillingError from "BillingError.tsx";

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
class prototype extends tmp2 {}
const size = fn(2);
const result = size.fileFinishedImporting("errors/StripeError.tsx");

export default prototype;
