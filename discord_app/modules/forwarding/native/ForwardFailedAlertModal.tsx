// === Module 11264: ForwardFailedAlertModal ===

// Module 11264 (ForwardFailedAlertModal)
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/forwarding/native/ForwardFailedAlertModal.tsx");

export default function ForwardFailedAlertModal(message) {
  message = message.message;
  const failedDestinations = message.failedDestinations;
  const forwardOptions = message.forwardOptions;
  const items = [failedDestinations, message, forwardOptions];
  const callback = React.useCallback(() => {
    let obj = message(forwardOptions[2]);
    obj = { message, source: "retry-modal", initialSelectedDestinations: failedDestinations, forwardOptions };
    obj.openForwardModal(obj);
  }, items);
  let obj = { title: null, content: null, failedDestinations: null, onRetry: null };
  const intl = message(forwardOptions[4]).intl;
  obj[0] = intl.string(message(forwardOptions[4]).t["/OPIaM"]);
  const intl2 = message(forwardOptions[4]).intl;
  obj = { count: failedDestinations.length };
  obj[1] = intl2.formatToPlainString(message(forwardOptions[4]).t.cn9vFb, obj);
  obj[2] = failedDestinations;
  obj[3] = callback;
  return jsx(failedDestinations(forwardOptions[3]), { count: failedDestinations.length });
};