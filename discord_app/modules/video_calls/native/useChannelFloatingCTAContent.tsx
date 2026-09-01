// === Module 16639: useChannelFloatingCTAContent ===

// Module 16639 (useChannelFloatingCTAContent)
import closure_3 from "noop" /* 19 */;
import closure_4 from "_detectH265HardwareDecode" /* 4529 */;
import closure_5 from "createRTCConnection" /* 4554 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/video_calls/native/useChannelFloatingCTAContent.tsx");

export default function useChannelFloatingCTAContent(arg0) {
  const _require = arg0;
  let items = [closure_5];
  stateFromStores = _require(stateFromStores[3]).useStateFromStores(items, () => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      tmp2 = closure_1_5.getChannelId() === tmp;
    }
    return tmp2;
  });
  let tmp2 = importDefault(stateFromStores[4])();
  importDefault = tmp2;
  const obj = _require(stateFromStores[3]);
  const items1 = [closure_4];
  const stateFromStores1 = _require(stateFromStores[3]).useStateFromStores(items1, () => anyLocalVideoAutoDisabled.isAnyLocalVideoAutoDisabled());
  const items2 = [stateFromStores1, tmp2, stateFromStores];
  return stateFromStores1.useMemo(() => {
    const items = [];
    if (stateFromStores1) {
      items.push(callback(stateFromStores[5]).DismissibleContent.VOICE_PANEL_BAD_CONNECTION_CTA);
    }
    if (stateFromStores) {
      items.push(callback(stateFromStores[5]).DismissibleContent.SOUNDBOARD_MOBILE_FLOATING_CTA);
    }
    if (closure_1.some((twoWayLink) => twoWayLink.twoWayLink)) {
      items.push(callback(stateFromStores[5]).DismissibleContent.DONUT_MOBILE_NUX);
    }
    return items;
  }, items2);
};