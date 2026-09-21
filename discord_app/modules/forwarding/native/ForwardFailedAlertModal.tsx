// === Module 11955: ForwardFailedAlertModal ===

// Module 11955 (ForwardFailedAlertModal)
import ForwardModalUtils from "ForwardModalUtils" /* 11932 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/forwarding/native/ForwardFailedAlertModal.tsx");

export default function ForwardFailedAlertModal(message) {
  message = message.message;
  const failedDestinations = message.failedDestinations;
  const forwardOptions = message.forwardOptions;
  const items = [failedDestinations, message, forwardOptions];
  const callback = noop.useCallback(() => {
    ForwardModalUtils.openForwardModal({ message, source: "retry-modal", initialSelectedDestinations: failedDestinations, forwardOptions });
  }, items);
  const obj = { title: null, content: null, failedDestinations: null, onRetry: null };
  const intl = message(forwardOptions[4]).intl;
  obj.title = intl.string(message(forwardOptions[4]).t["/OPIaM"]);
  const intl2 = message(forwardOptions[4]).intl;
  obj.content = intl2.formatToPlainString(message(forwardOptions[4]).t.cn9vFb, { count: failedDestinations.length });
  obj.failedDestinations = failedDestinations;
  obj.onRetry = callback;
  return jsx(failedDestinations(forwardOptions[3]), { title: null, content: null, failedDestinations: null, onRetry: null });
};