// discord_app/modules/captcha/CaptchaUtils.native.tsx
import setContent from "setContent";
import { CAPTCHA_MODAL_KEY } from "CAPTCHA_SERVE_VOLUME_DISTRIBUTION_AGGREGATION_WINDOW_MS";
import { asyncRequireImpl } from "../../../_runtime/02007_asyncRequireImpl.js";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";
import { ACTION_SHEET_HEIGHT_HALF } from "../action_sheet/native/ActionSheetActionCreators.tsx";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/captcha/CaptchaUtils.native.tsx");

export default {
  showCaptcha(options) {
    let captchaService;
    let sitekey;
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
    const obj2 = ACTION_SHEET_HEIGHT_HALF;
    const merged = Object.assign(obj);
    const merged1 = Object.assign(options.options);
    obj2.openLazy(_asyncRequireImpl(16430, dependencyMap.paths), CAPTCHA_MODAL_KEY, obj);
  },
  showCaptchaAsync(nextResult1) {
    let c1;
    let c2;
    let c3;
    let c4;
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
      let closure_0 = arg0;
      let closure_1 = arg1;
      let obj = _undefined(_undefined2[3]);
      obj = {
        sitekey: closure_1,
        captchaService: _undefined2,
        onCaptchaVerify(captcha_key, captcha_rqtoken) {
          return callback({ captcha_key, captcha_rqtoken, captcha_session_id: outer1_3 });
        },
        onReject(arg0) {
          if (arg0 === obj(10509).CaptchaError.CANCEL) {
            const captchaCancelError = new obj(10509).CaptchaCancelError();
            callback2(captchaCancelError);
          } else {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const error = new Error("Failed to display captcha for service " + outer1_2 + ".");
            callback2(error);
          }
        },
        close() {
          return callback2(4312).hideActionSheet(closure_4);
        }
      };
      const merged = Object.assign(closure_0);
      const merged1 = Object.assign(c4);
      obj.openLazy(obj(_undefined2[5])(_undefined2[4], _undefined2.paths), c4, obj, "stack");
    });
  },
  useIsCaptchaModalOpen() {
    const items = [setContent];
    return initialize.useStateFromStores(items, () => key.getKey() === closure_4);
  }
};