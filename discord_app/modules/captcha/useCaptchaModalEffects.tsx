// === Module 17427: useCaptchaModalEffects ===

// Module 17427 (useCaptchaModalEffects)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap, onReject;

const AnalyticEvents = Constants.AnalyticEvents;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((onReject) => {
  let closure_2;
  let tmp3;
  let tmp5;
  let tmp6;
  let tmp8;
  const tmp = dependencyMap;
  let obj = onReject(576);
  const cResult = obj.c(6);
  onReject = onReject.onReject;
  const analyticsType = onReject.analyticsType;
  let str = "Guild Join Captcha";
  if (undefined !== analyticsType) {
    str = analyticsType;
  }
  dependencyMap = react.useRef(true);
  if (cResult[0] !== onReject) {
    const fn = function u() {
      let ref;
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
    tmp3 = fn;
  } else {
    tmp3 = cResult[1];
  }
  str(5590)(tmp3);
  if (cResult[2] !== str) {
    const fn2 = function o() {
      let ref;
      let type;
      let obj = AnalyticsUtilsDefault;
      let obj2 = { type: str };
      obj.track(AnalyticEvents.OPEN_MODAL, obj2);
      return () => {
        if (ref.current) {
          const obj2 = { type };
          const obj = str(ref[6]);
          obj.track(constants.MODAL_DISMISSED, obj2);
        }
      };
    };
    const items = [str];
    cResult[2] = str;
    cResult[3] = fn2;
    cResult[4] = items;
    tmp6 = items;
    tmp5 = fn2;
  } else {
    tmp5 = cResult[3];
    tmp6 = cResult[4];
  }
  const effect = react.useEffect(tmp5, tmp6);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const fn3 = function s() {
      closure_2.current = false;
    };
    cResult[5] = fn3;
    tmp8 = fn3;
  } else {
    tmp8 = cResult[5];
  }
  return tmp8;
}) : ((arg0) => {
  let analyticsType;
  let closure_2;
  ({ onReject: require, analyticsType } = arg0);
  if (analyticsType === undefined) {
    analyticsType = "Guild Join Captcha";
  }
  dependencyMap = react.useRef(true);
  const tmp = analyticsType(5590)(() => {
    let ref;
    return () => {
      if (ref.current) {
        if (closure_1_0 != null) {
          tmp(require("SharedCaptchaUtils").CaptchaError.CANCEL);
        }
      }
    };
  });
  const items = [analyticsType];
  const effect = react.useEffect(() => {
    let ref;
    let type;
    let obj = AnalyticsUtilsDefault;
    let obj2 = { type: analyticsType };
    obj.track(AnalyticEvents.OPEN_MODAL, obj2);
    return () => {
      if (ref.current) {
        const obj2 = { type };
        const obj = analyticsType(ref[6]);
        obj.track(constants.MODAL_DISMISSED, obj2);
      }
    };
  }, items);
  return () => {
    closure_2.current = false;
  };
});
const result = size.fileFinishedImporting("modules/captcha/useCaptchaModalEffects.tsx");

export default tmp2;