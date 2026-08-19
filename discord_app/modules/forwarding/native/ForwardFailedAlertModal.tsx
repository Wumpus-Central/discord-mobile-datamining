// === Module 12045: ForwardFailedAlertModal ===

// Module 12045 (ForwardFailedAlertModal)
import noop from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/forwarding/native/ForwardFailedAlertModal.tsx");

export default function ForwardFailedAlertModal(message) {
  message = message.message;
  const failedDestinations = message.failedDestinations;
  const forwardOptions = message.forwardOptions;
  const items = [failedDestinations, message, forwardOptions];
  const callback = React.useCallback(() => {
    message(forwardOptions[2]);
    const obj = { message, source: "retry-modal", initialSelectedDestinations: failedDestinations, forwardOptions };
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