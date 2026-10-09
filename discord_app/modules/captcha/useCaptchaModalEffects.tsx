// === Module 17890: useCaptchaModalEffects ===

// Module 17890 (useCaptchaModalEffects)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const AnalyticEvents = fn(1085).AnalyticEvents;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/captcha/useCaptchaModalEffects.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useCaptchaModalEffects(onReject) {
  const cResult = onReject(576).c(6);
  onReject = onReject.onReject;
  const analyticsType = onReject.analyticsType;
  let str = "Guild Join Captcha";
  if (undefined !== analyticsType) {
    str = analyticsType;
  }
  dependencyMap = noop.useRef(true);
  if (cResult[0] !== onReject) {
    const fn = function u() {
      return () => {
        if (ref.current) {
          if (closure_1_0 != null) {
            tmp(onReject(ref[4]).CaptchaError.CANCEL);
          }
        }
      };
    };
    cResult[0] = onReject;
    cResult[1] = fn;
    let tmp3 = fn;
  } else {
    tmp3 = cResult[1];
  }
  str(5393)(tmp3);
  if (cResult[2] !== str) {
    const fn2 = function o() {
      AnalyticsUtilsDefault.track(AnalyticEvents.OPEN_MODAL, { type: str });
      return () => {
        if (ref.current) {
          const obj2 = { type };
          str(ref[6]).track(constants.MODAL_DISMISSED, obj2);
          const obj = str(ref[6]);
        }
      };
    };
    const items = [str];
    cResult[2] = str;
    cResult[3] = fn2;
    cResult[4] = items;
    let tmp6 = items;
    let tmp5 = fn2;
  } else {
    tmp5 = cResult[3];
    tmp6 = cResult[4];
  }
  const effect = noop.useEffect(tmp5, tmp6);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    function onCaptchaAttempted() {
      closure_2.current = false;
    }
    cResult[5] = onCaptchaAttempted;
    let tmp8 = onCaptchaAttempted;
  } else {
    tmp8 = cResult[5];
  }
  return tmp8;
}) : (function useCaptchaModalEffects(arg0) {
  ({ onReject: require, analyticsType } = arg0);
  if (analyticsType === undefined) {
    analyticsType = "Guild Join Captcha";
  }
  dependencyMap = noop.useRef(true);
  analyticsType(5393)(() => () => {
    if (ref.current) {
      if (closure_1_0 != null) {
        tmp(require("SharedCaptchaUtils").CaptchaError.CANCEL);
      }
    }
  });
  const items = [analyticsType];
  const effect = noop.useEffect(() => {
    AnalyticsUtilsDefault.track(AnalyticEvents.OPEN_MODAL, { type: analyticsType });
    return () => {
      if (ref.current) {
        const obj2 = { type };
        analyticsType(ref[6]).track(constants.MODAL_DISMISSED, obj2);
        const obj = analyticsType(ref[6]);
      }
    };
  }, items);
  return function onCaptchaAttempted() {
    closure_2.current = false;
  };
});