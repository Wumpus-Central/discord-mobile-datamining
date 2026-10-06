// discord_app/modules/game_console/native/GameConsoleAlertUtils.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import intl4 from "../../../intl/index.native.tsx";
import actions_AlertActionCreatorsDefault from "../../../actions/native/AlertActionCreators.tsx";
import authorizeConnectionDefault from "../../connections/authorizeConnection.native.tsx";
import GameConsoleConstants from "../GameConsoleConstants.tsx";
import react from "../../../../_runtime/00019_react.js";
import MediaEngineStore from "../../../stores/MediaEngineStore.tsx";
import Constants from "../../../Constants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
      if (
        !obj2.UNSAFE_isDismissibleContentDismissed(
          require("dismissible_content").DismissibleContent.CONSOLE_PTT_DISABLE_ALERT,
        )
      ) {
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
                const result = obj.UNSAFE_markDismissibleContentAsDismissed(
                  title(closure_2_2[6]).DismissibleContent.CONSOLE_PTT_DISABLE_ALERT,
                );
                closure_0();
              },
              isDismissable: false,
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
      isDismissable: false,
    };
    const show = tmp.show;
    ({ body, errorCodeMessage, dismissCallback: actions_AlertActionCreatorsDefault.close });
    const SelfDismissibleAlertBody = reconnectPlatformType(9466).SelfDismissibleAlertBody;
    show(obj);
  },
};
let result = size.fileFinishedImporting("modules/game_console/native/GameConsoleAlertUtils.tsx");

export default obj;
