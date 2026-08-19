// === Module 12673: useSelectedActiveStream ===

// Module 12673 (useSelectedActiveStream)
import getParticipants from "getParticipants" /* 4773 */;
import reset from "reset" /* 4652 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/video_calls/native/useSelectedActiveStream.tsx");

export default function useSelectedActiveStream(arg0) {
  const _require = arg0;
  const items = [closure_2, closure_3];
  return _require(589).useStateFromStores(items, () => {
    const selectedParticipantId = closure_1_2.getSelectedParticipantId(id.id);
    let activeStreamForStreamKey = null;
    if (null != selectedParticipantId) {
      activeStreamForStreamKey = closure_1_3.getActiveStreamForStreamKey(selectedParticipantId);
    }
    return activeStreamForStreamKey;
  });
};