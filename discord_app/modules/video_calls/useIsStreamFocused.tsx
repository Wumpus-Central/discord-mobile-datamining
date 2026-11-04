// === Module 12041: useIsStreamFocused ===

// Module 12041 (useIsStreamFocused)
import ChannelRTCStore from "ChannelRTCStore" /* 6978 */;

const require = globalThis.__r;

const require = fn;
const isStreamParticipant = fn(5815).isStreamParticipant;
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/useIsStreamFocused.tsx");

export function useIsStreamFocused(id) {
  _require = id;
  items = [ChannelRTCStore];
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
}