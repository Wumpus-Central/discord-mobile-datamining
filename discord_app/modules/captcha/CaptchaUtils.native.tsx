// === Module 16626: ? ===

// Module 16626
import initialize from "initialize" /* 589 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4347 */;
import closure_3 from "setContent" /* 4090 */;
import { CAPTCHA_MODAL_KEY } from "CAPTCHA_SERVE_VOLUME_DISTRIBUTION_AGGREGATION_WINDOW_MS" /* 10536 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/captcha/CaptchaUtils.native.tsx");

export default {
  showCaptcha(options) {
    const _require = arg1;
    let obj = arg2;
    if (arg2 === undefined) {
      obj = {};
    }
    ({ sitekey, captchaService } = options);
    obj = {
      sitekey,
      captchaService,
      onCaptchaVerify(captcha_key, captcha_rqtoken) {
        return callback({ captcha_key, captcha_rqtoken });
      },
      close() {
        return callback2(table[3]).hideActionSheet(closure_4);
      }
    };
    const obj2 = ACTION_SHEET_HEIGHT_HALFDefault;
    const merged = Object.assign(obj);
    const merged1 = Object.assign(options.options);
    obj2.openLazy(_require(2009)(16627, dependencyMap.paths), CAPTCHA_MODAL_KEY, obj);
  },
  showCaptchaAsync(nextResult1) {
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    ({ sitekey: c1, captchaService: c2, captchaSessionId: c3, options: c4 } = nextResult1);
    return new Promise((arg0, arg1) => {
      closure_0 = arg0;
      closure_1 = arg1;
      obj = _undefined(_undefined2[3]);
      obj = {
        sitekey: closure_1,
        captchaService: _undefined2,
        onCaptchaVerify(captcha_key, captcha_rqtoken) {
          return callback({ captcha_key, captcha_rqtoken, captcha_session_id: closure_1_3 });
        },
        onReject(arg0) {
          if (arg0 === obj(10534).CaptchaError.CANCEL) {
            const captchaCancelError = new obj(10534).CaptchaCancelError();
            callback2(captchaCancelError);
          } else {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            error = new Error("Failed to display captcha for service " + closure_1_2 + ".");
            callback2(error);
          }
        },
        close() {
          return callback2(4347).hideActionSheet(closure_4);
        }
      };
      const merged = Object.assign(closure_0);
      const merged1 = Object.assign(c4);
      obj.openLazy(obj(_undefined2[5])(_undefined2[4], _undefined2.paths), c4, obj, "stack");
    });
  },
  useIsCaptchaModalOpen() {
    const items = [closure_3];
    return initialize.useStateFromStores(items, () => key.getKey() === closure_4);
  }
};