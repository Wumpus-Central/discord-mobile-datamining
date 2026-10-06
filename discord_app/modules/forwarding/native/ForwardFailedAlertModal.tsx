// === Module 11345: ForwardFailedAlertModal ===

// Module 11345 (ForwardFailedAlertModal)
import Fragment from "Fragment" /* 21 */;
import ForwardModalUtils from "ForwardModalUtils" /* 11319 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let message;

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((message) => {
  let forwardOptions;
  let obj = message(forwardOptions[3]);
  const cResult = obj.c(11);
  message = message.message;
  const failedDestinations = message.failedDestinations;
  forwardOptions = message.forwardOptions;
  if (cResult[0] === failedDestinations) {
    if (cResult[1] === forwardOptions) {
      let tmp4;
      let tmp6;
      let tmp8;
      if (cResult[2] === message) {
        tmp4 = cResult[3];
      }
      const _Symbol = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(tmp2[5]).intl;
        const stringResult = intl.string(message(forwardOptions[5]).t["/OPIaM"]);
        cResult[4] = stringResult;
        tmp6 = stringResult;
      } else {
        tmp6 = cResult[4];
      }
      if (cResult[5] !== failedDestinations.length) {
        const intl2 = tmp(tmp2[5]).intl;
        let obj2 = { count: failedDestinations.length };
        const formatToPlainStringResult = intl2.formatToPlainString(message(forwardOptions[5]).t.cn9vFb, obj2);
        cResult[5] = failedDestinations.length;
        cResult[6] = formatToPlainStringResult;
        tmp8 = formatToPlainStringResult;
      } else {
        tmp8 = cResult[6];
      }
      if (cResult[7] === failedDestinations) {
        if (cResult[8] === tmp4) {
          let tmp10;
          if (cResult[9] === tmp8) {
            tmp10 = cResult[10];
          }
          return tmp10;
        }
      }
      const tmp13 = jsx(failedDestinations(forwardOptions[6]), { title: tmp6, content: tmp8, failedDestinations, onRetry: tmp4 });
      cResult[7] = failedDestinations;
      cResult[8] = tmp4;
      cResult[9] = tmp8;
      cResult[10] = tmp13;
      tmp10 = tmp13;
    }
  }
  const fn = function o() {
    const obj = ForwardModalUtils;
    const obj2 = { message, source: "retry-modal", initialSelectedDestinations: failedDestinations, forwardOptions };
    obj.openForwardModal(obj2);
  };
  cResult[0] = failedDestinations;
  cResult[1] = forwardOptions;
  cResult[2] = message;
  cResult[3] = fn;
  tmp4 = fn;
}) : ((message) => {
  message = message.message;
  const failedDestinations = message.failedDestinations;
  const forwardOptions = message.forwardOptions;
  const items = [failedDestinations, message, forwardOptions];
  const callback = react.useCallback(() => {
    const obj = ForwardModalUtils;
    const obj2 = { message, source: "retry-modal", initialSelectedDestinations: failedDestinations, forwardOptions };
    obj.openForwardModal(obj2);
  }, items);
  failedDestinations(forwardOptions[6]);
  const intl = message(forwardOptions[5]).intl;
  const intl2 = message(forwardOptions[5]).intl;
  let obj2 = { count: failedDestinations.length };
  return <tmp2 title={intl.string(message(forwardOptions[5]).t["/OPIaM"])} content={intl2.formatToPlainString(message(forwardOptions[5]).t.cn9vFb, obj2)} failedDestinations={failedDestinations} onRetry={callback} />;
});
const result = size.fileFinishedImporting("modules/forwarding/native/ForwardFailedAlertModal.tsx");

export default tmp2;