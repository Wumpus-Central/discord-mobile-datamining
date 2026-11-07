// === Module 14976: useOnConnectToConsole ===

// Module 14976 (useOnConnectToConsole)
import dismissible_content from "dismissible_content" /* 4973 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 5170 */;
import XboxLinkModalActionCreatorsDefault from "XboxLinkModalActionCreators" /* 9811 */;
import beginConsoleTransfer from "beginConsoleTransfer" /* 12144 */;
import PlayStationLinkModalActionCreatorsDefault from "PlayStationLinkModalActionCreators" /* 14870 */;
import noop from "module_19" /* 19 */;

require = fn;
const Constants = fn(1072);
({ AnalyticsLocations: closure_4, PlatformTypes: hasOwnProperty } = Constants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/video_calls/native/useOnConnectToConsole.tsx");

export function onConnectToConsole(channel, found) {
  const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.DONUT_MOBILE_NUX);
  if (found.twoWayLink) {
    if (!found.revoked) {
      beginConsoleTransfer.beginConsoleTransfer(channel, found.type);
      const tmpResult = beginConsoleTransfer;
    }
  }
  const type = found.type;
  if (constants2.XBOX === type) {
    items = [constants.CHANNEL_CALL];
    return XboxLinkModalActionCreatorsDefault.showModal(items);
  } else {
    const items1 = [constants.CHANNEL_CALL];
    return PlayStationLinkModalActionCreatorsDefault.showModal(items1, found.type);
  }
}
export function useOnConnectToConsole(channel, account) {
  closure_0 = channel;
  items = [channel, account];
  return noop.useCallback(() => {
    const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.DONUT_MOBILE_NUX);
    if (account.twoWayLink) {
      if (!account.revoked) {
        beginConsoleTransfer.beginConsoleTransfer(closure_0, account.type);
        const tmp3Result = beginConsoleTransfer;
      }
    }
    const type = account.type;
    if (constants2.XBOX === type) {
      items = [constants.CHANNEL_CALL];
      XboxLinkModalActionCreatorsDefault.showModal(items);
    } else if (constants2.PLAYSTATION === type) {
      const items1 = [constants.CHANNEL_CALL];
      PlayStationLinkModalActionCreatorsDefault.showModal(items1, account.type);
    }
  }, items);
}