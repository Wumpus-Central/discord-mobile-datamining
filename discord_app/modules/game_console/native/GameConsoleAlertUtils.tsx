// discord_app/modules/game_console/native/GameConsoleAlertUtils.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import _modDef4656 from "../../../actions/native/AlertActionCreators.tsx";
import authorizeConnectionDefault from "../../connections/authorizeConnection.native.tsx";
import _detectH265HardwareDecode from "../../../stores/MediaEngineStore.tsx";
import { GAME_CONSOLE_ALERT_MODAL_LOCATION as closure_4 } from "../GameConsoleConstants.tsx";
import ME from "../../../Constants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import { UNSAFE_isDismissibleContentDismissed } from "../../dismissible_content/DismissibleContentUnsafeUtils.tsx";

const require = fn;
noopAll;
({ InputModes: c5, PlatformTypes: closure_6 } = ME);
let result = require("obj132").fileFinishedImporting("modules/game_console/native/GameConsoleAlertUtils.tsx");

export default {
  maybeShowPTTAlert(XBOX) {
    if (mode.getMode() === constants.PUSH_TO_TALK) {
      if (!obj2.UNSAFE_isDismissibleContentDismissed(require("../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx").DismissibleContent.CONSOLE_PTT_DISABLE_ALERT)) {
        let obj = {};
        let intl = tmp10(1236).intl;
        obj[constants2.XBOX] = intl.string(tmp10(1236).t.bVZ7vy);
        const intl2 = tmp10(1236).intl;
        obj[constants2.PLAYSTATION] = intl2.string(tmp10(1236).t["6iqUsf"]);
        const intl3 = tmp10(1236).intl;
        obj[constants2.PLAYSTATION_STAGING] = intl3.string(tmp10(1236).t["6iqUsf"]);
        _require = tmp3;
        if (null == obj[XBOX]) {
          let resolved = Promise.resolve();
        } else {
          resolved = new Promise((arg0) => {
            const callback = arg0;
            const obj = { title: callback, body: null, onConfirm: null };
            const intl = callback(dependencyMap[7]).intl;
            obj[1] = intl.string(callback(dependencyMap[7]).t.bL21zs);
            obj[2] = function onConfirm() {
              const result = callback(closure_1_2[5]).UNSAFE_markDismissibleContentAsDismissed(callback(closure_1_2[6]).DismissibleContent.CONSOLE_PTT_DISABLE_ALERT);
              callback();
            };
            obj.show(obj);
          });
        }
        return resolved;
      }
      obj2 = UNSAFE_isDismissibleContentDismissed;
    }
    return Promise.resolve();
  },
  showSelfDismissableAlert(reconnectPlatformType) {
    reconnectPlatformType = reconnectPlatformType.reconnectPlatformType;
    ({ title, body, errorCodeMessage } = reconnectPlatformType);
    let obj = { body, errorCodeMessage, dismissCallback: _modDef4656.close };
    obj[1] = jsx(reconnectPlatformType(9850).SelfDismissibleAlertBody, { body, errorCodeMessage, dismissCallback: _modDef4656.close });
    obj[2] = function onConfirm() {
      if (null != reconnectPlatformType) {
        const obj = { platformType: null, location: null };
        obj[0] = tmp;
        obj[1] = closure_1_4;
        authorizeConnectionDefault(obj);
      }
    };
    obj.show(obj);
  }
};