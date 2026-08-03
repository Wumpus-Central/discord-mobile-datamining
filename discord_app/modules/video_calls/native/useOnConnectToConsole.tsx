import noop from "noop";
import ME from "ME";

let c4;
let c5;
const require = arg1;
({ AnalyticsLocations: c4, PlatformTypes: c5 } = ME);
let result = require("UNSAFE_isDismissibleContentDismissed").fileFinishedImporting("modules/video_calls/native/useOnConnectToConsole.tsx");

export const onConnectToConsole = function onConnectToConsole(channel, closure_0) {
  const result = require(4009) /* UNSAFE_isDismissibleContentDismissed */.UNSAFE_markDismissibleContentAsDismissed(require(1358) /* DismissibleContent */.DismissibleContent.DONUT_MOBILE_NUX);
  if (closure_0.twoWayLink) {
    if (!closure_0.revoked) {
      tmp(9047).beginConsoleTransfer(channel, closure_0.type);
    }
  }
  const type = closure_0.type;
  if (constants2.XBOX === type) {
    const items = [constants.CHANNEL_CALL];
    return importDefault(8940).showModal(items);
  } else {
    const items1 = [constants.CHANNEL_CALL];
    return importDefault(8975).showModal(items1, closure_0.type);
  }
  const obj = require(4009) /* UNSAFE_isDismissibleContentDismissed */;
  tmp = require;
};
export const useOnConnectToConsole = function useOnConnectToConsole(channel, account) {
  let closure_0 = channel;
  let closure_1 = account;
  let items = [channel, account];
  return React.useCallback(() => {
    const result = channel(outer1_2[2]).UNSAFE_markDismissibleContentAsDismissed(channel(outer1_2[3]).DismissibleContent.DONUT_MOBILE_NUX);
    if (account.twoWayLink) {
      if (!tmp2.revoked) {
        channel(tmp4[6]).beginConsoleTransfer(channel, tmp2.type);
        const tmp3Result = channel(tmp4[6]);
      }
    }
    const type = tmp2.type;
    if (outer1_5.XBOX === type) {
      const items = [outer1_4.CHANNEL_CALL];
      account(tmp4[4]).showModal(items);
      const obj4 = account(tmp4[4]);
    } else if (tmp7.PLAYSTATION === type) {
      const items1 = [outer1_4.CHANNEL_CALL];
      account(tmp4[5]).showModal(items1, tmp2.type);
      const obj3 = account(tmp4[5]);
    }
  }, items);
};