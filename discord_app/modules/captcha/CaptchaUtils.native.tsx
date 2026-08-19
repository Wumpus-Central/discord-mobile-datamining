// discord_app/modules/captcha/CaptchaUtils.native.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import ACTION_SHEET_HEIGHT_HALFDefault from "../action_sheet/native/ActionSheetActionCreators.tsx";
import setContent from "../action_sheet/native/ActionSheetStore.tsx";
import { CAPTCHA_MODAL_KEY } from "CaptchaConstants.tsx";
import { asyncRequireImpl } from "../../../_runtime/02007_asyncRequireImpl.js";

require = fn;
const result = require("obj132").fileFinishedImporting("modules/captcha/CaptchaUtils.native.tsx");

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
    obj2.openLazy(asyncRequireImpl(16500, dependencyMap.paths), CAPTCHA_MODAL_KEY, obj);
  },
  showCaptchaAsync(nextResult1) {
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    ({ sitekey: c1, captchaService: c2, captchaSessionId: c3, options: c4 } = nextResult1);
    return new Promise((arg0, arg1) => {
      closure_0 = arg0;
      closure_1 = arg1;
      _undefined(_undefined2[3]);
      obj = {
        sitekey: closure_1,
        captchaService: _undefined2,
        onCaptchaVerify(captcha_key, captcha_rqtoken) {
          return callback({ captcha_key, captcha_rqtoken, captcha_session_id: closure_1_3 });
        },
        onReject(dependencyMap) {
          if (dependencyMap === obj(10478).CaptchaError.CANCEL) {
            const captchaCancelError = new obj(10478).CaptchaCancelError();
            callback2(captchaCancelError);
          } else {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            error = new Error("Failed to display captcha for service " + closure_1_2 + ".");
            callback2(error);
          }
        },
        close() {
          return callback2(4342).hideActionSheet(closure_4);
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