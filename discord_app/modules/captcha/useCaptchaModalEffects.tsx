// discord_app/modules/captcha/useCaptchaModalEffects.tsx
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import noop from "../../../_runtime/metro/00019__.js";

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
  analyticsType(5077)(() => () => {
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
}
