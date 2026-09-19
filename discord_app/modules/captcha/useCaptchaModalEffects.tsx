// === Module 17695: useCaptchaModalEffects ===

// Module 17695 (useCaptchaModalEffects)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/captcha/useCaptchaModalEffects.tsx");

export default function useCaptchaModalEffects(arg0) {
  ({ onReject: require, analyticsType } = arg0);
  if (analyticsType === undefined) {
    analyticsType = "Guild Join Captcha";
  }
  dependencyMap = noop.useRef(true);
  analyticsType(5203)(() => () => {
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
        analyticsType(ref[4]).track(constants.MODAL_DISMISSED, obj2);
        const obj = analyticsType(ref[4]);
      }
    };
  }, items);
  return () => {
    closure_2.current = false;
  };
};