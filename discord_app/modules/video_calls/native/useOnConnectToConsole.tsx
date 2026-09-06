// discord_app/modules/video_calls/native/useOnConnectToConsole.tsx
import dismissible_content from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentUnsafeUtils from "../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import XboxLinkModalActionCreatorsDefault from "../../user_settings/connections/native/two_way_link/xbox/XboxLinkModalActionCreators.tsx";
import PlayStationLinkModalActionCreatorsDefault from "../../user_settings/connections/native/two_way_link/playstation/PlayStationLinkModalActionCreators.tsx";
import beginConsoleTransfer from "../../game_console/native/beginConsoleTransfer.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const Constants = fn(1074);
({ AnalyticsLocations: closure_4, PlatformTypes: hasOwnProperty } = Constants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/video_calls/native/useOnConnectToConsole.tsx");

export const onConnectToConsole = function onConnectToConsole(channel, found) {
  const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(
    dismissible_content.DismissibleContent.DONUT_MOBILE_NUX,
  );
  if (found.twoWayLink) {
    if (!found.revoked) {
      beginConsoleTransfer.beginConsoleTransfer(channel, found.type);
      const tmpResult = beginConsoleTransfer;
    }
  }
  const type = found.type;
  if (constants2.XBOX === type) {
    const items = [constants.CHANNEL_CALL];
    return XboxLinkModalActionCreatorsDefault.showModal(items);
  } else {
    const items1 = [constants.CHANNEL_CALL];
    return PlayStationLinkModalActionCreatorsDefault.showModal(items1, found.type);
  }
};
export const useOnConnectToConsole = function useOnConnectToConsole(channel, account) {
  closure_0 = channel;
  let items = [channel, account];
  return noop.useCallback(() => {
    const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(
      dismissible_content.DismissibleContent.DONUT_MOBILE_NUX,
    );
    if (account.twoWayLink) {
      if (!account.revoked) {
        beginConsoleTransfer.beginConsoleTransfer(closure_0, account.type);
        const tmp3Result = beginConsoleTransfer;
      }
    }
    const type = account.type;
    if (constants2.XBOX === type) {
      const items = [constants.CHANNEL_CALL];
      XboxLinkModalActionCreatorsDefault.showModal(items);
    } else if (constants2.PLAYSTATION === type) {
      const items1 = [constants.CHANNEL_CALL];
      PlayStationLinkModalActionCreatorsDefault.showModal(items1, account.type);
    }
  }, items);
};
