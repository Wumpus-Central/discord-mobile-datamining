// === Module 5414: SharedCaptchaUtils ===

// Module 5414 (SharedCaptchaUtils)
import CaptchaConstants from "CaptchaConstants" /* 5422 */;
import CaptchaStore from "CaptchaStore" /* 5415 */;
import size from "module_2" /* 2 */;

let _window;
let c2;
let map;
({ incrementCaptchaServeVolume: _window, flushCaptchaServeVolume: map, isCaptchaStoreVolumeEmpty: c2 } = CaptchaStore);
let closure_3 = CaptchaConstants.CAPTCHA_SERVE_VOLUME_DISTRIBUTION_AGGREGATION_WINDOW_MS;
class CaptchaCancelError extends Error {
  constructor() {
    const tmp2 = new tmp("Captcha cancelled", new.target);
    return tmp2;
  }
}
const result = size.fileFinishedImporting("modules/captcha/SharedCaptchaUtils.tsx");

export const CaptchaError = { CANCEL: "cancel", ERROR: "error", EXPIRED: "expired" };
export const extractCaptchaPropsFromResponse = function extractCaptchaPropsFromResponse(body) {
  let flag;
  let obj2;
  const obj = { captchaService: body.captcha_service, sitekey: body.captcha_sitekey, captchaSessionId: body.captcha_session_id, options: obj2 };
  obj2 = { rqdata: body.captcha_rqdata, rqtoken: body.captcha_rqtoken, serveInvisible: flag, userflow: body.user_flow };
  flag = body.should_serve_invisible;
  if (flag == null) {
    flag = false;
  }
  return obj;
};
export const emitCaptchaDistributionMetric = function emitCaptchaDistributionMetric(userflow) {
  if (React2()) {
    const _setTimeout = setTimeout;
    const timerId = setTimeout(() => closure_1_1(), closure_3);
  }
  React(userflow);
};
export { CaptchaCancelError };