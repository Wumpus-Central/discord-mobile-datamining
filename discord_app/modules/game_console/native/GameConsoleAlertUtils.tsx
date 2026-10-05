// === Module 9452: game_console/GameConsoleAlertUtils ===

// Module 9452 (game_console/GameConsoleAlertUtils)
import Fragment from "Fragment" /* 21 */;
import intl4 from "intl" /* 1126 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5708 */;
import authorizeConnectionDefault from "authorizeConnection" /* 8732 */;
import GameConsoleConstants from "GameConsoleConstants" /* 8749 */;
import react from "react" /* 19 */;
import MediaEngineStore from "MediaEngineStore" /* 1999 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let hasOwnProperty;
let metroRequire;
let closure_4 = GameConsoleConstants.GAME_CONSOLE_ALERT_MODAL_LOCATION;
({ InputModes: hasOwnProperty, PlatformTypes: metroRequire } = Constants);
const jsx = Fragment.jsx;
let obj = {
  maybeShowPTTAlert(XBOX) {
    if (MediaEngineStore.getMode() === constants.PUSH_TO_TALK) {
      const obj2 = require("DismissibleContentUnsafeUtils");
      if (!obj2.UNSAFE_isDismissibleContentDismissed(require("dismissible_content").DismissibleContent.CONSOLE_PTT_DISABLE_ALERT)) {
        let resolved;
        let obj = {};
        XBOX = constants2.XBOX;
        let intl = tmp8(1126).intl;
        obj[XBOX] = intl.string(require("intl").t.bVZ7vy);
        const PLAYSTATION = constants2.PLAYSTATION;
        const intl2 = tmp8(1126).intl;
        obj[PLAYSTATION] = intl2.string(require("intl").t["6iqUsf"]);
        const PLAYSTATION_STAGING = constants2.PLAYSTATION_STAGING;
        const intl3 = tmp8(1126).intl;
        obj[PLAYSTATION_STAGING] = intl3.string(require("intl").t["6iqUsf"]);
        _require = tmp3;
        if (null == obj[XBOX]) {
          resolved = Promise.resolve();
        } else {
          const self = this;
          const self2 = this;
          resolved = new Promise((arg0) => {
            let intl;
            title = arg0;
            let obj = {
              title,
              body: intl.string(intl4.t.bL21zs),
              onConfirm() {
                const obj = title(closure_2_2[5]);
                const result = obj.UNSAFE_markDismissibleContentAsDismissed(title(closure_2_2[6]).DismissibleContent.CONSOLE_PTT_DISABLE_ALERT);
                closure_0();
              },
              isDismissable: false
            };
            const show = actions_AlertActionCreatorsDefault.show;
            actions_AlertActionCreatorsDefault;
            intl = intl4.intl;
            show(obj);
          });
        }
        return resolved;
      }
    }
    return Promise.resolve();
  },
  showSelfDismissableAlert(reconnectPlatformType) {
    let _location;
    let body;
    let errorCodeMessage;
    let title;
    reconnectPlatformType = reconnectPlatformType.reconnectPlatformType;
    ({ title, body, errorCodeMessage } = reconnectPlatformType);
    const tmp = actions_AlertActionCreatorsDefault;
    let obj = {
      title,
      body: null,
      onConfirm() {
        if (null != reconnectPlatformType) {
          const obj = { platformType: tmp, location: _location };
          authorizeConnectionDefault(obj);
        }
      },
      isDismissable: false
    };
    const show = tmp.show;
    ({ body, errorCodeMessage, dismissCallback: actions_AlertActionCreatorsDefault.close });
    const SelfDismissibleAlertBody = reconnectPlatformType(9453).SelfDismissibleAlertBody;
    show(obj);
  }
};
let result = size.fileFinishedImporting("modules/game_console/native/GameConsoleAlertUtils.tsx");

export default obj;