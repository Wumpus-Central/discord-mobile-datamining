// === Module 9452: game_console/GameConsoleAlertUtils ===

// Module 9452 (game_console/GameConsoleAlertUtils)
import util from "util" /* 1114 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 4905 */;
import authorizeConnectionDefault from "authorizeConnection" /* 9252 */;
import noop from "module_19" /* 19 */;
import MediaEngineStore from "MediaEngineStore" /* 1908 */;

require = fn;
let closure_4 = fn(9233).GAME_CONSOLE_ALERT_MODAL_LOCATION;
const Constants = fn(1074);
({ InputModes: hasOwnProperty, PlatformTypes: metroRequire } = Constants);
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/game_console/native/GameConsoleAlertUtils.tsx");

export default {
  maybeShowPTTAlert(XBOX) {
    if (MediaEngineStore.getMode() === constants.PUSH_TO_TALK) {
      if (!obj2.UNSAFE_isDismissibleContentDismissed(require("dismissible_content").DismissibleContent.CONSOLE_PTT_DISABLE_ALERT)) {
        let obj = {};
        let intl = tmp10(1114).intl;
        obj[constants2.XBOX] = intl.string(tmp10(1114).t.bVZ7vy);
        const intl2 = tmp10(1114).intl;
        obj[constants2.PLAYSTATION] = intl2.string(tmp10(1114).t["6iqUsf"]);
        const intl3 = tmp10(1114).intl;
        obj[constants2.PLAYSTATION_STAGING] = intl3.string(tmp10(1114).t["6iqUsf"]);
        _require = tmp3;
        if (null == obj[XBOX]) {
          let resolved = Promise.resolve();
        } else {
          resolved = new Promise((arg0) => {
            title = arg0;
            const obj = { title, body: null, onConfirm: null };
            const intl = util.intl;
            obj.body = intl.string(util.t.bL21zs);
            obj.onConfirm = function onConfirm() {
              const result = closure_0(4380).UNSAFE_markDismissibleContentAsDismissed(closure_0(1943).DismissibleContent.CONSOLE_PTT_DISABLE_ALERT);
              closure_0();
            };
            obj.show(obj);
          });
        }
        return resolved;
      }
      obj2 = require("DismissibleContentUnsafeUtils");
    }
    return Promise.resolve();
  },
  showSelfDismissableAlert(reconnectPlatformType) {
    reconnectPlatformType = reconnectPlatformType.reconnectPlatformType;
    ({ title, body, errorCodeMessage } = reconnectPlatformType);
    let obj = { title, body: null, onConfirm: null };
    obj = { body, errorCodeMessage, dismissCallback: actions_AlertActionCreatorsDefault.close };
    obj.body = jsx(reconnectPlatformType(9453).SelfDismissibleAlertBody, { body, errorCodeMessage, dismissCallback: actions_AlertActionCreatorsDefault.close });
    obj.onConfirm = function onConfirm() {
      if (null != reconnectPlatformType) {
        const obj = { platformType: tmp, location: _location };
        authorizeConnectionDefault(obj);
      }
    };
    obj.show(obj);
  }
};