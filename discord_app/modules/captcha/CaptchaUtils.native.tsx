// === Module 17286: captcha/CaptchaUtils ===

// Module 17286 (captcha/CaptchaUtils)
import initialize from "initialize" /* 504 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import SharedCaptchaUtils from "SharedCaptchaUtils" /* 11277 */;
import ActionSheetStore from "ActionSheetStore" /* 4251 */;

require = fn;
const CAPTCHA_MODAL_KEY = fn(11279).CAPTCHA_MODAL_KEY;
const size = fn(2);
const result = size.fileFinishedImporting("modules/captcha/CaptchaUtils.native.tsx");

export default {
  showCaptcha(options, arg1) {
    _require = arg1;
    let obj = arg2;
    if (arg2 === undefined) {
      obj = {};
    }
    ({ sitekey, captchaService } = options);
    obj = {
      sitekey,
      captchaService,
      onCaptchaVerify(captcha_key, captcha_rqtoken) {
        return closure_0({ captcha_key, captcha_rqtoken });
      },
      close() {
        return ActionSheetActionCreatorsDefault.hideActionSheet(CAPTCHA_MODAL_KEY);
      }
    };
    const obj2 = ActionSheetActionCreatorsDefault;
    const merged = Object.assign(obj);
    const merged1 = Object.assign(options.options);
    obj2.openLazy(require("asyncRequireImpl")(17287, dependencyMap.paths), CAPTCHA_MODAL_KEY, obj);
  },
  showCaptchaAsync(nextResult1) {
    if (arg1 === undefined) {
      let obj = {};
    }
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    ({ sitekey: c1, captchaService: c2, captchaSessionId: c3, options: c4 } = nextResult1);
    return new Promise((arg0, arg1) => {
      closure_0 = arg0;
      sitekey = arg1;
      sitekey(captchaService[3]);
      obj = {
        sitekey,
        captchaService,
        onCaptchaVerify(captcha_key, captcha_rqtoken) {
          return closure_0({ captcha_key, captcha_rqtoken, captcha_session_id });
        },
        onReject(dependencyMap) {
          if (dependencyMap === SharedCaptchaUtils.CaptchaError.CANCEL) {
            const captchaCancelError = new SharedCaptchaUtils.CaptchaCancelError();
            closure_1(captchaCancelError);
          } else {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const error = new Error("Failed to display captcha for service " + c2 + ".");
            closure_1(error);
          }
        },
        close() {
          return closure_1(captchaService[3]).hideActionSheet(closure_1_4);
        }
      };
      const merged = Object.assign(closure_0);
      const merged1 = Object.assign(c4);
      obj.openLazy(obj(captchaService[5])(captchaService[4], captchaService.paths), c4, obj, "stack");
    });
  },
  useIsCaptchaModalOpen() {
    const items = [ActionSheetStore];
    return initialize.useStateFromStores(items, () => key.getKey() === CAPTCHA_MODAL_KEY);
  }
};