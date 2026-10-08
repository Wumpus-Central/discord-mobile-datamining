// === Module 10755: useIsStreamFocused ===

// Module 10755 (useIsStreamFocused)
import ChannelRTCStore from "ChannelRTCStore" /* 6041 */;

const require = globalThis.__r;

const require = fn;
const isStreamParticipant = fn(5113).isStreamParticipant;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/useIsStreamFocused.tsx");

export const useIsStreamFocused = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsStreamFocused(arg0) {
  _require = arg0;
  const cResult = require("c").c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelRTCStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function n() {
      let selectedParticipant = null;
      if (null != closure_0) {
        selectedParticipant = ChannelRTCStore.getSelectedParticipant(tmp);
      }
      return selectedParticipant;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
  if (cResult[3] !== stateFromStores) {
    let tmp10 = null != stateFromStores;
    if (tmp10) {
      tmp10 = isStreamParticipant(stateFromStores);
    }
    cResult[3] = stateFromStores;
    cResult[4] = tmp10;
    let tmp8 = tmp10;
  } else {
    tmp8 = cResult[4];
  }
  return tmp8;
}) : (function useIsStreamFocused(arg0) {
  _require = arg0;
  const items = [ChannelRTCStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    let selectedParticipant = null;
    if (null != closure_0) {
      selectedParticipant = ChannelRTCStore.getSelectedParticipant(tmp);
    }
    return selectedParticipant;
  });
  let tmp2 = null != stateFromStores;
  if (tmp2) {
    tmp2 = isStreamParticipant(stateFromStores);
  }
  return tmp2;
});