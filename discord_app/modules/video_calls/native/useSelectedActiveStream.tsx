// === Module 13620: useSelectedActiveStream ===

// Module 13620 (useSelectedActiveStream)
import ChannelRTCStore from "ChannelRTCStore" /* 4912 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4918 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((id) => {
  let first;
  let tmp7;
  _require = id;
  const obj = require("react");
  const cResult = obj.c(3);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelRTCStore, ApplicationStreamingStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== id.id) {
    const fn = function u() {
      const selectedParticipantId = ChannelRTCStore.getSelectedParticipantId(id.id);
      let activeStreamForStreamKey = null;
      if (null != selectedParticipantId) {
        activeStreamForStreamKey = ApplicationStreamingStore.getActiveStreamForStreamKey(selectedParticipantId);
      }
      return activeStreamForStreamKey;
    };
    cResult[1] = id.id;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp7);
}) : ((arg0) => {
  let id;
  _require = arg0;
  const items = [ChannelRTCStore, ApplicationStreamingStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const selectedParticipantId = ChannelRTCStore.getSelectedParticipantId(id.id);
    let activeStreamForStreamKey = null;
    if (null != selectedParticipantId) {
      activeStreamForStreamKey = ApplicationStreamingStore.getActiveStreamForStreamKey(selectedParticipantId);
    }
    return activeStreamForStreamKey;
  });
});
const result = size.fileFinishedImporting("modules/video_calls/native/useSelectedActiveStream.tsx");

export default tmp2;