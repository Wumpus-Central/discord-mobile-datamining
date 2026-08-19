// === Module 9749: onConnectToConsole ===

// Module 9749 (onConnectToConsole)
import DismissibleContent from "DismissibleContent" /* 1377 */;
import UNSAFE_isDismissibleContentDismissed from "UNSAFE_isDismissibleContentDismissed" /* 4196 */;
import _modDef9750 from "module_9750" /* 9750 */;
import _modDef9780 from "module_9780" /* 9780 */;
import _beginConsoleTransfer from "_beginConsoleTransfer" /* 9844 */;
import noop from "noop" /* 19 */;
import ME from "ME" /* 676 */;

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