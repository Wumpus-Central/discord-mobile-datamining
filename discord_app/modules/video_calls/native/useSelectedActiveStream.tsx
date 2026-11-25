// === Module 14296: useSelectedActiveStream ===

// Module 14296 (useSelectedActiveStream)
import ChannelRTCStore from "ChannelRTCStore" /* 6902 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6782 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/useSelectedActiveStream.tsx");

export default function useSelectedActiveStream(arg0) {
  _require = arg0;
  items = [ChannelRTCStore, ApplicationStreamingStore];
  return require("initialize").useStateFromStores(items, () => {
    const selectedParticipantId = ChannelRTCStore.getSelectedParticipantId(id.id);
    let activeStreamForStreamKey = null;
    if (null != selectedParticipantId) {
      activeStreamForStreamKey = ApplicationStreamingStore.getActiveStreamForStreamKey(selectedParticipantId);
    }
    return activeStreamForStreamKey;
  });
};