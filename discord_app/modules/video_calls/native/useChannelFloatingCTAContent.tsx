// === Module 15909: useChannelFloatingCTAContent ===

// Module 15909 (useChannelFloatingCTAContent)
import noop from "noop";
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import createRTCConnection from "createRTCConnection";

const require = arg1;
const result = require("createRTCConnection").fileFinishedImporting("modules/video_calls/native/useChannelFloatingCTAContent.tsx");

export default function useChannelFloatingCTAContent(arg0) {
  const _require = arg0;
  let items = [createRTCConnection];
  stateFromStores = _require(stateFromStores[3]).useStateFromStores(items, () => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      tmp2 = outer1_5.getChannelId() === tmp;
    }
    return tmp2;
  });
  let tmp2 = importDefault(stateFromStores[4])();
  importDefault = tmp2;
  const obj = _require(stateFromStores[3]);
  const items1 = [_detectH265HardwareDecode];
  const stateFromStores1 = _require(stateFromStores[3]).useStateFromStores(items1, () => anyLocalVideoAutoDisabled.isAnyLocalVideoAutoDisabled());
  const items2 = [stateFromStores1, tmp2, stateFromStores];
  return stateFromStores1.useMemo(() => {
    const items = [];
    if (stateFromStores1) {
      items.push(callback(stateFromStores[5]).DismissibleContent.VOICE_PANEL_BAD_CONNECTION_CTA);
      const tmp2 = stateFromStores;
    }
    if (stateFromStores) {
      items.push(callback(stateFromStores[5]).DismissibleContent.SOUNDBOARD_MOBILE_FLOATING_CTA);
    }
    if (tmp2.some((twoWayLink) => twoWayLink.twoWayLink)) {
      items.push(callback(stateFromStores[5]).DismissibleContent.DONUT_MOBILE_NUX);
    }
    return items;
  }, items2);
};