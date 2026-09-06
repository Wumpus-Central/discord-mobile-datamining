// discord_app/modules/captcha/useCaptchaModalEffects.tsx
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import noop from "../../../_runtime/metro/00019__.js";

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
  analyticsType(4992)(() => () => {
    if (ref.current) {
      if (closure_1_0 != null) {
        tmp(require("SharedCaptchaUtils").CaptchaError.CANCEL);
      }
    }
  });
  const items = [analyticsType];
  const effect = noop.useEffect(() => {
    let obj = { type: analyticsType };
    obj.track(AnalyticEvents.OPEN_MODAL, obj);
    return () => {
      if (ref.current) {
        analyticsType(ref[4]);
        const obj = { type };
        obj.track(constants.MODAL_DISMISSED, obj);
      }
    };
  }, items);
  return () => {
    closure_2.current = false;
  };
}
