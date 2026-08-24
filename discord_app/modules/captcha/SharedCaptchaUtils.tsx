// discord_app/modules/captcha/SharedCaptchaUtils.tsx
import set from "../../../_runtime/00002_set.js";
import CAPTCHA_SERVE_VOLUME_DISTRIBUTION_AGGREGATION_WINDOW_MS from "CaptchaConstants.tsx";
import useCaptchaStore from "CaptchaStore.tsx";

({ incrementCaptchaServeVolume: c0, flushCaptchaServeVolume: closure_1, isCaptchaStoreVolumeEmpty: obj1 } = useCaptchaStore);
let closure_3 = CAPTCHA_SERVE_VOLUME_DISTRIBUTION_AGGREGATION_WINDOW_MS.CAPTCHA_SERVE_VOLUME_DISTRIBUTION_AGGREGATION_WINDOW_MS;
const prototype = function CaptchaCancelError() {
  tmp = new tmp("Captcha cancelled", new.target);
  // ThrowIfThisInitialized (0x7c)
  return tmp;
}.prototype;
class prototype extends Error {
}
const result = set.fileFinishedImporting("modules/captcha/SharedCaptchaUtils.tsx");

export const CaptchaError = { CANCEL: "cancel", ERROR: "error", EXPIRED: "expired" };
export const extractCaptchaPropsFromResponse = function extractCaptchaPropsFromResponse(body) {
  let obj = { captchaService: body.captcha_service, sitekey: body.captcha_sitekey, captchaSessionId: body.captcha_session_id, options: null };
  obj = { rqdata: body.captcha_rqdata, rqtoken: body.captcha_rqtoken, serveInvisible: null, userflow: null };
  let flag = body.should_serve_invisible;
  if (flag == null) {
    flag = false;
  }
  obj[2] = flag;
  obj[3] = body.user_flow;
  obj[3] = obj;
  return obj;
};
export const emitCaptchaDistributionMetric = function emitCaptchaDistributionMetric(closure_7) {
  if (callback2()) {
    const _setTimeout = setTimeout;
    const timerId = setTimeout(() => callback(), closure_3);
  }
  callback(closure_7);
};
export const CaptchaCancelError = prototype;