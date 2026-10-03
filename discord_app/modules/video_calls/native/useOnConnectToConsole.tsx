// === Module 9446: useOnConnectToConsole ===

// Module 9446 (useOnConnectToConsole)
import dismissible_content from "dismissible_content" /* 2036 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4698 */;
import XboxLinkModalActionCreatorsDefault from "XboxLinkModalActionCreators" /* 8733 */;
import PlayStationLinkModalActionCreatorsDefault from "PlayStationLinkModalActionCreators" /* 8764 */;
import beginConsoleTransfer from "beginConsoleTransfer" /* 9447 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Constants = fn(1085);
({ AnalyticsLocations: closure_4, PlatformTypes: hasOwnProperty } = Constants);
const ReactCompilerGating = fn(558);
function onConnectToConsole(channel, found) {
  const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.DONUT_MOBILE_NUX);
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
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/video_calls/native/useOnConnectToConsole.tsx");

export { onConnectToConsole };
export const useOnConnectToConsole = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  const twoWayLink = arg1;
  const cResult = require("c").c(3);
  if (cResult[0] === arg1) {
    if (cResult[1] === arg0) {
      let tmp2 = cResult[2];
    }
    return tmp2;
  }
  const fn = function s() {
    const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.DONUT_MOBILE_NUX);
    if (twoWayLink.twoWayLink) {
      if (!twoWayLink.revoked) {
        beginConsoleTransfer.beginConsoleTransfer(closure_0, twoWayLink.type);
        const tmp3Result = beginConsoleTransfer;
      }
    }
    const type = twoWayLink.type;
    if (constants2.XBOX === type) {
      const items = [constants.CHANNEL_CALL];
      XboxLinkModalActionCreatorsDefault.showModal(items);
    } else if (constants2.PLAYSTATION === type) {
      const items1 = [constants.CHANNEL_CALL];
      PlayStationLinkModalActionCreatorsDefault.showModal(items1, twoWayLink.type);
    }
  };
  cResult[0] = arg1;
  cResult[1] = arg0;
  cResult[2] = fn;
  tmp2 = fn;
}) : ((arg0, arg1) => {
  closure_0 = arg0;
  const twoWayLink = arg1;
  let items = [arg0, arg1];
  return noop.useCallback(() => {
    const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.DONUT_MOBILE_NUX);
    if (twoWayLink.twoWayLink) {
      if (!twoWayLink.revoked) {
        beginConsoleTransfer.beginConsoleTransfer(closure_0, twoWayLink.type);
        const tmp3Result = beginConsoleTransfer;
      }
    }
    const type = twoWayLink.type;
    if (constants2.XBOX === type) {
      const items = [constants.CHANNEL_CALL];
      XboxLinkModalActionCreatorsDefault.showModal(items);
    } else if (constants2.PLAYSTATION === type) {
      const items1 = [constants.CHANNEL_CALL];
      PlayStationLinkModalActionCreatorsDefault.showModal(items1, twoWayLink.type);
    }
  }, items);
});