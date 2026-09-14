// === Module 11411: SharedCaptchaUtils ===

// Module 11411 (SharedCaptchaUtils)
import CaptchaConstants from "CaptchaConstants" /* 11413 */;
import CaptchaStore from "CaptchaStore" /* 11412 */;
import size from "module_2" /* 2 */;

({ incrementCaptchaServeVolume: closure_0, flushCaptchaServeVolume: closure_1, isCaptchaStoreVolumeEmpty: c2 } = CaptchaStore);
let closure_3 = CaptchaConstants.CAPTCHA_SERVE_VOLUME_DISTRIBUTION_AGGREGATION_WINDOW_MS;
const prototype = function CaptchaCancelError() {
  return new tmp("Captcha cancelled", new.target);
}.prototype;
class prototype extends Error {
}
const result = size.fileFinishedImporting("modules/captcha/SharedCaptchaUtils.tsx");

export const CaptchaError = { CANCEL: "cancel", ERROR: "error", EXPIRED: "expired" };
export const extractCaptchaPropsFromResponse = function extractCaptchaPropsFromResponse(body) {
  const obj = { captchaService: body.captcha_service, sitekey: body.captcha_sitekey, captchaSessionId: body.captcha_session_id, options: null };
  const obj2 = { rqdata: body.captcha_rqdata, rqtoken: body.captcha_rqtoken, serveInvisible: null, userflow: null };
  let flag = body.should_serve_invisible;
  if (flag == null) {
    flag = false;
  }
  obj2.serveInvisible = flag;
  obj2.userflow = body.user_flow;
  obj.options = obj2;
  return obj;
};
export const emitCaptchaDistributionMetric = function emitCaptchaDistributionMetric(constants) {
  if (React2()) {
    const _setTimeout = setTimeout;
    const timerId = setTimeout(() => closure_1_1(), closure_3);
  }
  React(constants);
};
export const CaptchaCancelError = prototype;