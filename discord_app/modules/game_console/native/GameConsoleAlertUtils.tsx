import "noop";
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import { GAME_CONSOLE_ALERT_MODAL_LOCATION as closure_4 } from "XBOX_URL_BASE";
import ME from "ME";
import { jsx } from "jsxProd";

let c5;
let closure_6;
let require = arg1;
({ InputModes: c5, PlatformTypes: closure_6 } = ME);
let result = require("XBOX_URL_BASE").fileFinishedImporting("modules/game_console/native/GameConsoleAlertUtils.tsx");

export default {
  maybeShowPTTAlert(XBOX) {
    if (mode.getMode() === constants.PUSH_TO_TALK) {
      if (!obj2.UNSAFE_isDismissibleContentDismissed(require(1358) /* DismissibleContent */.DismissibleContent.CONSOLE_PTT_DISABLE_ALERT)) {
        let obj = {};
        let intl = tmp10(1236).intl;
        obj[constants2.XBOX] = intl.string(tmp10(1236).t.bVZ7vy);
        const intl2 = tmp10(1236).intl;
        obj[constants2.PLAYSTATION] = intl2.string(tmp10(1236).t["6iqUsf"]);
        const intl3 = tmp10(1236).intl;
        obj[constants2.PLAYSTATION_STAGING] = intl3.string(tmp10(1236).t["6iqUsf"]);
        require = tmp3;
        if (null == obj[XBOX]) {
          let resolved = Promise.resolve();
        } else {
          resolved = new Promise((arg0) => {
            let obj = outer1_1(outer1_2[8]);
            obj = { title: tmp3, body: null, onConfirm: null };
            const intl = tmp3(outer1_2[7]).intl;
            obj[1] = intl.string(arg0(outer1_2[7]).t.bL21zs);
            obj[2] = function onConfirm() {
              const result = callback(outer1_2[5]).UNSAFE_markDismissibleContentAsDismissed(callback(outer1_2[6]).DismissibleContent.CONSOLE_PTT_DISABLE_ALERT);
              callback();
            };
            obj.show(obj);
          });
        }
        return resolved;
      }
      obj2 = require(4101) /* UNSAFE_isDismissibleContentDismissed */;
    }
    return Promise.resolve();
  },
  showSelfDismissableAlert(reconnectPlatformType) {
    let body;
    let errorCodeMessage;
    let title;
    reconnectPlatformType = reconnectPlatformType.reconnectPlatformType;
    ({ title, body, errorCodeMessage } = reconnectPlatformType);
    let obj = importDefault(4624);
    obj = { title, body: null, onConfirm: null };
    obj = { body, errorCodeMessage, dismissCallback: null };
    obj[2] = importDefault(4624).close;
    obj[1] = jsx(reconnectPlatformType(10778).SelfDismissibleAlertBody, { body, errorCodeMessage, dismissCallback: null });
    obj[2] = function onConfirm() {
      if (null != reconnectPlatformType) {
        const obj = { platformType: null, location: null };
        obj[0] = tmp;
        obj[1] = outer1_4;
        outer1_1(outer1_2[10])(obj);
      }
    };
    obj.show(obj);
  }
};