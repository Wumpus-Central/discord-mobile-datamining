// === Module 17401: captcha/CaptchaUtils ===

// Module 17401 (captcha/CaptchaUtils)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import SharedCaptchaUtils from "SharedCaptchaUtils" /* 5407 */;
import ActionSheetStore from "ActionSheetStore" /* 4561 */;

require = fn;
const CAPTCHA_MODAL_KEY = fn(5415).CAPTCHA_MODAL_KEY;
let obj = {
  showCaptcha(options, arg1) {
    _require = arg1;
    let obj = arg2;
    if (arg2 === undefined) {
      obj = {};
    }
    ({ sitekey, captchaService } = options);
    const obj2 = ActionSheetActionCreatorsDefault;
    const obj3 = {
      sitekey,
      captchaService,
      onCaptchaVerify(captcha_key, captcha_rqtoken) {
        return closure_0({ captcha_key, captcha_rqtoken });
      },
      close() {
        return ActionSheetActionCreatorsDefault.hideActionSheet(CAPTCHA_MODAL_KEY);
      }
    };
    const merged = Object.assign(obj);
    const merged1 = Object.assign(options.options);
    obj2.openLazy(require("asyncRequireImpl")(17402, dependencyMap.paths), CAPTCHA_MODAL_KEY, obj3);
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
      obj = sitekey(captchaService[5]);
      const merged = Object.assign(closure_0);
      const merged1 = Object.assign(c4);
      obj.openLazy(obj(captchaService[7])(captchaService[6], captchaService.paths), c4, {
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
          return closure_1(captchaService[5]).hideActionSheet(closure_1_4);
        }
      }, "stack");
    });
  },
  useIsCaptchaModalOpen: null
};
const ReactCompilerGating = fn(558);
obj.useIsCaptchaModalOpen = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ActionSheetStore];
    const fn = function n() {
      return key.getKey() === CAPTCHA_MODAL_KEY;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return initialize.useStateFromStores(tmp4, tmp5);
}) : (() => {
  const items = [ActionSheetStore];
  return initialize.useStateFromStores(items, () => key.getKey() === CAPTCHA_MODAL_KEY);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/captcha/CaptchaUtils.native.tsx");

export default obj;