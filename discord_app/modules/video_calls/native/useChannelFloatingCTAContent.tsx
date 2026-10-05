// === Module 17225: useChannelFloatingCTAContent ===

// Module 17225 (useChannelFloatingCTAContent)
import dismissible_content from "dismissible_content" /* 2036 */;
import useGameConsoleAccountsDefault from "useGameConsoleAccounts" /* 9444 */;
import react from "react" /* 19 */;
import MediaEngineStore from "MediaEngineStore" /* 1999 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4913 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let anyLocalVideoAutoDisabled;
  let closure_0;
  let first;
  let tmp6;
  let tmp8;
  let tmp9;
  _require = arg0;
  const tmp = _require;
  const obj = require("react");
  const cResult = obj.c(9);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [RTCConnectionStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
      const tmp2 = null != closure_0 && RTCConnectionStore.getChannelId() === tmp;
      return tmp2;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(573);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  const obj3 = useGameConsoleAccountsDefault();
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [MediaEngineStore];
    class C {
      constructor() {
        return anyLocalVideoAutoDisabled.isAnyLocalVideoAutoDisabled();
      }
    }
    cResult[3] = items1;
    cResult[4] = C;
    tmp9 = C;
    tmp8 = items1;
  } else {
    tmp8 = cResult[3];
    tmp9 = cResult[4];
  }
  const tmpResult2 = tmp(573);
  const stateFromStores1 = tmpResult2.useStateFromStores(tmp8, tmp9);
  if (cResult[5] === obj3) {
    if (cResult[6] === stateFromStores1) {
      let tmp12;
      if (cResult[7] === stateFromStores) {
        tmp12 = cResult[8];
      }
      return tmp12;
    }
  }
  const items2 = [];
  if (stateFromStores1) {
    items2.push(tmp(2036).DismissibleContent.VOICE_PANEL_BAD_CONNECTION_CTA);
  }
  if (stateFromStores) {
    items2.push(tmp(2036).DismissibleContent.SOUNDBOARD_MOBILE_FLOATING_CTA);
  }
  if (obj3.some((twoWayLink) => twoWayLink.twoWayLink)) {
    items2.push(tmp(2036).DismissibleContent.DONUT_MOBILE_NUX);
  }
  cResult[5] = obj3;
  cResult[6] = stateFromStores1;
  cResult[7] = stateFromStores;
  cResult[8] = items2;
  tmp12 = items2;
}) : ((arg0) => {
  let anyLocalVideoAutoDisabled;
  let closure_0;
  let closure_1;
  let stateFromStores;
  _require = arg0;
  let items = [RTCConnectionStore];
  const obj = require("useStateFromStores");
  stateFromStores = obj.useStateFromStores(items, () => {
    const tmp2 = null != closure_0 && RTCConnectionStore.getChannelId() === tmp;
    return tmp2;
  });
  let tmp2 = require("useGameConsoleAccounts")();
  importDefault = tmp2;
  const items1 = [MediaEngineStore];
  const obj2 = require("useStateFromStores");
  const stateFromStores1 = obj2.useStateFromStores(items1, () => anyLocalVideoAutoDisabled.isAnyLocalVideoAutoDisabled());
  const items2 = [stateFromStores1, tmp2, stateFromStores];
  return stateFromStores1.useMemo(() => {
    const items = [];
    if (stateFromStores1) {
      items.push(dismissible_content.DismissibleContent.VOICE_PANEL_BAD_CONNECTION_CTA);
    }
    if (stateFromStores) {
      items.push(dismissible_content.DismissibleContent.SOUNDBOARD_MOBILE_FLOATING_CTA);
    }
    if (closure_1.some((twoWayLink) => twoWayLink.twoWayLink)) {
      items.push(dismissible_content.DismissibleContent.DONUT_MOBILE_NUX);
    }
    return items;
  }, items2);
});
const result = size.fileFinishedImporting("modules/video_calls/native/useChannelFloatingCTAContent.tsx");

export default tmp2;