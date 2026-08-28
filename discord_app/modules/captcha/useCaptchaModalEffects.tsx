// === Module 16797: useCaptchaModalEffects ===

// Module 16797 (useCaptchaModalEffects)
import closure_3 from "noop" /* 19 */;
import { AnalyticEvents } from "ME" /* 676 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/captcha/useCaptchaModalEffects.tsx");

export default function useCaptchaModalEffects(arg0) {
  ({ onReject: require, analyticsType } = arg0);
  if (analyticsType === undefined) {
    analyticsType = "Guild Join Captcha";
  }
  dependencyMap = undefined;
  dependencyMap = React.useRef(true);
  analyticsType(4910)(() => () => {
    if (ref.current) {
      if (closure_0 != null) {
        tmp(closure_1_0(closure_1_2[3]).CaptchaError.CANCEL);
      }
    }
  });
  const items = [analyticsType];
  const effect = React.useEffect(() => {
    let obj = analyticsType(table[4]);
    obj = { type: analyticsType };
    obj.track(closure_1_4.OPEN_MODAL, obj);
    return () => {
      if (ref.current) {
        let obj = closure_1_1(closure_1_2[4]);
        obj = { type: null };
        obj[0] = closure_1;
        obj.track(closure_1_4.MODAL_DISMISSED, obj);
      }
    };
  }, items);
  return () => {
    closure_2.current = false;
  };
};