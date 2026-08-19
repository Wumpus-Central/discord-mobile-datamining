// === Module 16501: useCaptchaModalEffects ===

// Module 16501 (useCaptchaModalEffects)
import noop from "noop" /* 19 */;
import { AnalyticEvents } from "ME" /* 676 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/captcha/useCaptchaModalEffects.tsx");

export default function useCaptchaModalEffects(arg0) {
  ({ onReject: require, analyticsType } = arg0);
  if (analyticsType === undefined) {
    analyticsType = "Guild Join Captcha";
  }
  dependencyMap = React.useRef(true);
  analyticsType(4761)(() => () => {
    if (ref.current) {
      if (closure_0 != null) {
        tmp(closure_1_0(closure_1_2[3]).CaptchaError.CANCEL);
      }
    }
  });
  const items = [analyticsType];
  const effect = React.useEffect(() => {
    analyticsType(table[4]);
    let obj = { type: analyticsType };
    obj.track(AnalyticEvents.OPEN_MODAL, obj);
    return () => {
      if (ref.current) {
        analyticsType(closure_1_2[4]);
        const obj = { type: null };
        obj[0] = closure_1;
        obj.track(closure_1_4.MODAL_DISMISSED, obj);
      }
    };
  }, items);
  return () => {
    closure_2.current = false;
  };
};