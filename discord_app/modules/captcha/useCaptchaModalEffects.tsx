// discord_app/modules/captcha/useCaptchaModalEffects.tsx
import noop from "noop";
import { AnalyticEvents } from "ME";

const require = arg1;
const result = require("useMountLayoutEffect").fileFinishedImporting("modules/captcha/useCaptchaModalEffects.tsx");

export default function useCaptchaModalEffects(arg0) {
  let analyticsType;
  let require;
  ({ onReject: require, analyticsType } = arg0);
  if (analyticsType === undefined) {
    analyticsType = "Guild Join Captcha";
  }
  let dependencyMap;
  dependencyMap = React.useRef(true);
  analyticsType(4681)(() => () => {
    if (ref.current) {
      if (closure_0 != null) {
        tmp(outer1_0(outer1_2[3]).CaptchaError.CANCEL);
      }
    }
  });
  const items = [analyticsType];
  const effect = React.useEffect(() => {
    let obj = analyticsType(table[4]);
    obj = { type: analyticsType };
    obj.track(outer1_4.OPEN_MODAL, obj);
    return () => {
      if (ref.current) {
        let obj = outer1_1(outer1_2[4]);
        obj = { type: null };
        obj[0] = closure_1;
        obj.track(outer1_4.MODAL_DISMISSED, obj);
      }
    };
  }, items);
  return () => {
    closure_2.current = false;
  };
};