// discord_app/modules/video_calls/native/useOnConnectToConsole.tsx
import dismissible_content from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentUnsafeUtils from "../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import XboxLinkModalActionCreatorsDefault from "../../user_settings/connections/native/two_way_link/xbox/XboxLinkModalActionCreators.tsx";
import PlayStationLinkModalActionCreatorsDefault from "../../user_settings/connections/native/two_way_link/playstation/PlayStationLinkModalActionCreators.tsx";
import beginConsoleTransfer from "../../game_console/native/beginConsoleTransfer.tsx";
import react from "../../../../_runtime/00019_react.js";
import Constants from "../../../Constants.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

let closure_4;
let hasOwnProperty;
({ AnalyticsLocations: closure_4, PlatformTypes: hasOwnProperty } = Constants);
function onConnectToConsole(channel, found) {
  const obj = DismissibleContentUnsafeUtils;
  const result = obj.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.DONUT_MOBILE_NUX);
  if (found.twoWayLink) {
    if (!found.revoked) {
      const tmpResult = beginConsoleTransfer;
      tmpResult.beginConsoleTransfer(channel, found.type);
    }
  }
  const type = found.type;
  if (hasOwnProperty.XBOX === type) {
    const items = [constants.CHANNEL_CALL];
    const obj4 = XboxLinkModalActionCreatorsDefault;
    return obj4.showModal(items);
  } else {
    const items1 = [constants.CHANNEL_CALL];
    const obj3 = PlayStationLinkModalActionCreatorsDefault;
    return obj3.showModal(items1, found.type);
  }
}
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let closure_0;
      _require = arg0;
      const twoWayLink = arg1;
      let obj = require("react");
      const cResult = obj.c(3);
      if (cResult[0] === arg1) {
        let tmp2;
        if (cResult[1] === arg0) {
          tmp2 = cResult[2];
        }
        return tmp2;
      }
      const fn = function s() {
        const obj = DismissibleContentUnsafeUtils;
        const result = obj.UNSAFE_markDismissibleContentAsDismissed(
          dismissible_content.DismissibleContent.DONUT_MOBILE_NUX,
        );
        if (twoWayLink.twoWayLink) {
          if (!twoWayLink.revoked) {
            const tmp3Result = beginConsoleTransfer;
            tmp3Result.beginConsoleTransfer(closure_0, twoWayLink.type);
          }
        }
        const type = twoWayLink.type;
        if (hasOwnProperty.XBOX === type) {
          const items = [constants.CHANNEL_CALL];
          const obj4 = XboxLinkModalActionCreatorsDefault;
          obj4.showModal(items);
        } else if (hasOwnProperty.PLAYSTATION === type) {
          const items1 = [constants.CHANNEL_CALL];
          const obj3 = PlayStationLinkModalActionCreatorsDefault;
          obj3.showModal(items1, twoWayLink.type);
        }
      };
      cResult[0] = arg1;
      cResult[1] = arg0;
      cResult[2] = fn;
      tmp2 = fn;
    }
  : (arg0, arg1) => {
      let closure_0 = arg0;
      const twoWayLink = arg1;
      let items = [arg0, arg1];
      return react.useCallback(() => {
        const obj = DismissibleContentUnsafeUtils;
        const result = obj.UNSAFE_markDismissibleContentAsDismissed(
          dismissible_content.DismissibleContent.DONUT_MOBILE_NUX,
        );
        if (twoWayLink.twoWayLink) {
          if (!twoWayLink.revoked) {
            const tmp3Result = beginConsoleTransfer;
            tmp3Result.beginConsoleTransfer(closure_0, twoWayLink.type);
          }
        }
        const type = twoWayLink.type;
        if (hasOwnProperty.XBOX === type) {
          const items = [constants.CHANNEL_CALL];
          const obj4 = XboxLinkModalActionCreatorsDefault;
          obj4.showModal(items);
        } else if (hasOwnProperty.PLAYSTATION === type) {
          const items1 = [constants.CHANNEL_CALL];
          const obj3 = PlayStationLinkModalActionCreatorsDefault;
          obj3.showModal(items1, twoWayLink.type);
        }
      }, items);
    };
let result = size.fileFinishedImporting("modules/video_calls/native/useOnConnectToConsole.tsx");

export { onConnectToConsole };
export const useOnConnectToConsole = tmp3;
