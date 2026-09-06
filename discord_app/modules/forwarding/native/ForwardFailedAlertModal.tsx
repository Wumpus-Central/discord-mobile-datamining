// discord_app/modules/forwarding/native/ForwardFailedAlertModal.tsx
import ForwardModalUtils from "ForwardModalUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

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
    const obj = { message, source: "retry-modal", initialSelectedDestinations: failedDestinations, forwardOptions };
    obj.openForwardModal(obj);
  }, items);
  let obj = { title: null, content: null, failedDestinations: null, onRetry: null };
  const intl = message(forwardOptions[4]).intl;
  obj.title = intl.string(message(forwardOptions[4]).t["/OPIaM"]);
  const intl2 = message(forwardOptions[4]).intl;
  obj = { count: failedDestinations.length };
  obj.content = intl2.formatToPlainString(message(forwardOptions[4]).t.cn9vFb, obj);
  obj.failedDestinations = failedDestinations;
  obj.onRetry = callback;
  return jsx(failedDestinations(forwardOptions[3]), { count: failedDestinations.length });
}
