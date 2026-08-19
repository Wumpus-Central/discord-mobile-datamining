// discord_app/modules/video_calls/native/useOnConnectToConsole.tsx
import DismissibleContent from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import UNSAFE_isDismissibleContentDismissed from "../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import _modDef9750 from "../../user_settings/connections/native/two_way_link/xbox/XboxLinkModalActionCreators.tsx";
import _modDef9780 from "../../user_settings/connections/native/two_way_link/playstation/PlayStationLinkModalActionCreators.tsx";
import _beginConsoleTransfer from "../../game_console/native/beginConsoleTransfer.tsx";
import noop from "../../../../_runtime/00019_noop.js";
import ME from "../../../Constants.tsx";

require = fn;
({ AnalyticsLocations: c4, PlatformTypes: c5 } = ME);
let result = require("obj132").fileFinishedImporting("modules/video_calls/native/useOnConnectToConsole.tsx");

export const onConnectToConsole = function onConnectToConsole(channel, closure_0) {
  const result = UNSAFE_isDismissibleContentDismissed.UNSAFE_markDismissibleContentAsDismissed(DismissibleContent.DismissibleContent.DONUT_MOBILE_NUX);
  if (_require.twoWayLink) {
    if (!_require.revoked) {
      _beginConsoleTransfer.beginConsoleTransfer(channel, _require.type);
      const tmpResult = _beginConsoleTransfer;
    }
  }
  const type = _require.type;
  if (constants2.XBOX === type) {
    const items = [constants.CHANNEL_CALL];
    return _modDef9750.showModal(items);
  } else {
    const items1 = [constants.CHANNEL_CALL];
    return _modDef9780.showModal(items1, _require.type);
  }
};
export const useOnConnectToConsole = function useOnConnectToConsole(channel, account) {
  closure_0 = channel;
  closure_1 = account;
  let items = [channel, account];
  return React.useCallback(() => {
    const result = channel(dependencyMap[2]).UNSAFE_markDismissibleContentAsDismissed(channel(dependencyMap[3]).DismissibleContent.DONUT_MOBILE_NUX);
    if (account.twoWayLink) {
      if (!account.revoked) {
        channel(dependencyMap[6]).beginConsoleTransfer(channel, account.type);
        const tmp3Result = channel(dependencyMap[6]);
      }
    }
    const type = account.type;
    if (closure_1_5.XBOX === type) {
      const items = [closure_1_4.CHANNEL_CALL];
      account(dependencyMap[4]).showModal(items);
      const obj4 = account(dependencyMap[4]);
    } else if (closure_1_5.PLAYSTATION === type) {
      const items1 = [closure_1_4.CHANNEL_CALL];
      account(dependencyMap[5]).showModal(items1, account.type);
      const obj3 = account(dependencyMap[5]);
    }
    const obj = channel(dependencyMap[2]);
  }, items);
};