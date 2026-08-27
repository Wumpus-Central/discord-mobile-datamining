// discord_app/modules/video_calls/native/useOnConnectToConsole.tsx
import DismissibleContent from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import UNSAFE_isDismissibleContentDismissed from "../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import _modDef9221 from "../../user_settings/connections/native/two_way_link/xbox/XboxLinkModalActionCreators.tsx";
import _modDef9249 from "../../user_settings/connections/native/two_way_link/playstation/PlayStationLinkModalActionCreators.tsx";
import _beginConsoleTransfer from "../../game_console/native/beginConsoleTransfer.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";
import ME from "../../../Constants.tsx";

require = arg1;
({ AnalyticsLocations: c4, PlatformTypes: c5 } = ME);
let result = require("set").fileFinishedImporting("modules/video_calls/native/useOnConnectToConsole.tsx");

export const onConnectToConsole = function onConnectToConsole(channel, closure_0) {
  const result = UNSAFE_isDismissibleContentDismissed.UNSAFE_markDismissibleContentAsDismissed(DismissibleContent.DismissibleContent.DONUT_MOBILE_NUX);
  if (closure_0.twoWayLink) {
    if (!closure_0.revoked) {
      _beginConsoleTransfer.beginConsoleTransfer(channel, closure_0.type);
    }
  }
  const type = closure_0.type;
  if (constants2.XBOX === type) {
    const items = [constants.CHANNEL_CALL];
    return _modDef9221.showModal(items);
  } else {
    const items1 = [constants.CHANNEL_CALL];
    return _modDef9249.showModal(items1, closure_0.type);
  }
  const obj = UNSAFE_isDismissibleContentDismissed;
  const tmp = require;
};
export const useOnConnectToConsole = function useOnConnectToConsole(channel, account) {
  closure_0 = channel;
  closure_1 = account;
  let items = [channel, account];
  return React.useCallback(() => {
    const result = channel(closure_1_2[2]).UNSAFE_markDismissibleContentAsDismissed(channel(closure_1_2[3]).DismissibleContent.DONUT_MOBILE_NUX);
    if (account.twoWayLink) {
      if (!tmp2.revoked) {
        channel(tmp4[6]).beginConsoleTransfer(channel, tmp2.type);
        const tmp3Result = channel(tmp4[6]);
      }
    }
    const type = tmp2.type;
    if (closure_1_5.XBOX === type) {
      const items = [closure_1_4.CHANNEL_CALL];
      account(tmp4[4]).showModal(items);
      const obj4 = account(tmp4[4]);
    } else if (tmp7.PLAYSTATION === type) {
      const items1 = [closure_1_4.CHANNEL_CALL];
      account(tmp4[5]).showModal(items1, tmp2.type);
      const obj3 = account(tmp4[5]);
    }
  }, items);
};