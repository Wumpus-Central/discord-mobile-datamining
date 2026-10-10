// === Module 11593: ForwardFailedAlertModal ===

// Module 11593 (ForwardFailedAlertModal)
import ForwardModalUtils from "ForwardModalUtils" /* 11551 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/forwarding/native/ForwardFailedAlertModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ForwardFailedAlertModal(message) {
  const cResult = message(forwardOptions[3]).c(11);
  message = message.message;
  const failedDestinations = message.failedDestinations;
  forwardOptions = message.forwardOptions;
  if (cResult[0] === failedDestinations) {
    if (cResult[1] === forwardOptions) {
      if (cResult[2] === message) {
        let tmp4 = cResult[3];
      }
      const _Symbol = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(tmp2[5]).intl;
        const stringResult = intl.string(tmp(tmp2[5]).t["/OPIaM"]);
        cResult[4] = stringResult;
        let tmp6 = stringResult;
      } else {
        tmp6 = cResult[4];
      }
      if (cResult[5] !== failedDestinations.length) {
        const intl2 = tmp(tmp2[5]).intl;
        const obj2 = { count: failedDestinations.length };
        const formatToPlainStringResult = intl2.formatToPlainString(tmp(tmp2[5]).t.cn9vFb, obj2);
        cResult[5] = failedDestinations.length;
        cResult[6] = formatToPlainStringResult;
        let tmp8 = formatToPlainStringResult;
      } else {
        tmp8 = cResult[6];
      }
      if (cResult[7] === failedDestinations) {
        if (cResult[8] === tmp4) {
          if (cResult[9] === tmp8) {
            let tmp10 = cResult[10];
          }
          return tmp10;
        }
      }
      const obj3 = { title: tmp6, content: tmp8, failedDestinations, onRetry: tmp4 };
      const tmp13 = jsx(failedDestinations(tmp2[6]), { title: tmp6, content: tmp8, failedDestinations, onRetry: tmp4 });
      cResult[7] = failedDestinations;
      cResult[8] = tmp4;
      cResult[9] = tmp8;
      cResult[10] = tmp13;
      tmp10 = tmp13;
    }
  }
  const fn = function o() {
    ForwardModalUtils.openForwardModal({ message, source: "retry-modal", initialSelectedDestinations: failedDestinations, forwardOptions });
  };
  cResult[0] = failedDestinations;
  cResult[1] = forwardOptions;
  cResult[2] = message;
  cResult[3] = fn;
  tmp4 = fn;
  const obj = message(forwardOptions[3]);
}) : (function ForwardFailedAlertModal(message) {
  message = message.message;
  const failedDestinations = message.failedDestinations;
  const forwardOptions = message.forwardOptions;
  const items = [failedDestinations, message, forwardOptions];
  const callback = noop.useCallback(() => {
    ForwardModalUtils.openForwardModal({ message, source: "retry-modal", initialSelectedDestinations: failedDestinations, forwardOptions });
  }, items);
  const obj = { title: null, content: null, failedDestinations: null, onRetry: null };
  const intl = message(forwardOptions[5]).intl;
  obj.title = intl.string(message(forwardOptions[5]).t["/OPIaM"]);
  const intl2 = message(forwardOptions[5]).intl;
  obj.content = intl2.formatToPlainString(message(forwardOptions[5]).t.cn9vFb, { count: failedDestinations.length });
  obj.failedDestinations = failedDestinations;
  obj.onRetry = callback;
  return jsx(failedDestinations(forwardOptions[6]), { title: null, content: null, failedDestinations: null, onRetry: null });
});