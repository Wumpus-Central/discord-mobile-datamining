// === Module 10054: game_console/GameConsoleAlertUtils ===

// Module 10054 (game_console/GameConsoleAlertUtils)
import util from "util" /* 1115 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5110 */;
import authorizeConnectionDefault from "authorizeConnection" /* 9347 */;
import noop from "module_19" /* 19 */;
import MediaEngineStore from "MediaEngineStore" /* 1992 */;

const require = globalThis.__r;

require = fn;
let closure_4 = fn(9364).GAME_CONSOLE_ALERT_MODAL_LOCATION;
const Constants = fn(1074);
({ InputModes: hasOwnProperty, PlatformTypes: metroRequire } = Constants);
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/game_console/native/GameConsoleAlertUtils.tsx");

export default {
  maybeShowPTTAlert(XBOX) {
    if (MediaEngineStore.getMode() === constants.PUSH_TO_TALK) {
      if (!obj2.UNSAFE_isDismissibleContentDismissed(require("dismissible_content").DismissibleContent.CONSOLE_PTT_DISABLE_ALERT)) {
        const obj = {};
        let intl = tmp10(1115).intl;
        obj[constants2.XBOX] = intl.string(tmp10(1115).t.bVZ7vy);
        const intl2 = tmp10(1115).intl;
        obj[constants2.PLAYSTATION] = intl2.string(tmp10(1115).t["6iqUsf"]);
        const intl3 = tmp10(1115).intl;
        obj[constants2.PLAYSTATION_STAGING] = intl3.string(tmp10(1115).t["6iqUsf"]);
        _require = tmp3;
        if (null == obj[XBOX]) {
          let resolved = Promise.resolve();
        } else {
          resolved = new Promise((arg0) => {
            title = arg0;
            const obj2 = { title, body: null, onConfirm: null, isDismissable: false };
            const intl = util.intl;
            obj2.body = intl.string(util.t.bL21zs);
            obj2.onConfirm = function onConfirm() {
              const result = closure_0(4577).UNSAFE_markDismissibleContentAsDismissed(closure_0(2028).DismissibleContent.CONSOLE_PTT_DISABLE_ALERT);
              closure_0();
            };
            actions_AlertActionCreatorsDefault.show(obj2);
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
    const obj2 = { title, body: null, onConfirm: null, isDismissable: false };
    let obj = actions_AlertActionCreatorsDefault;
    obj2.body = jsx(reconnectPlatformType(10055).SelfDismissibleAlertBody, { body, errorCodeMessage, dismissCallback: actions_AlertActionCreatorsDefault.close });
    obj2.onConfirm = function onConfirm() {
      if (null != reconnectPlatformType) {
        const obj = { platformType: tmp, location: _location };
        authorizeConnectionDefault(obj);
      }
    };
    obj.show(obj2);
  }
};