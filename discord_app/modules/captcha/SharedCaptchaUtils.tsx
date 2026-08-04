// discord_app/modules/captcha/SharedCaptchaUtils.tsx
import useCaptchaStore from "useCaptchaStore";
import { CAPTCHA_SERVE_VOLUME_DISTRIBUTION_AGGREGATION_WINDOW_MS as closure_3 } from "CAPTCHA_SERVE_VOLUME_DISTRIBUTION_AGGREGATION_WINDOW_MS";

let c0;
let closure_1;
let obj1;
({ incrementCaptchaServeVolume: c0, flushCaptchaServeVolume: closure_1, isCaptchaStoreVolumeEmpty: obj1 } = useCaptchaStore);
const prototype = function CaptchaCancelError() {
  tmp = new tmp("Captcha cancelled", new.target);
  // ThrowIfThisInitialized (0x7c)
  return tmp;
}.prototype;
class prototype extends Error {
}
const result = require("set").fileFinishedImporting("modules/captcha/SharedCaptchaUtils.tsx");

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