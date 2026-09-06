// === Module 17085: useSelfHasVideo ===

// Module 17085 (useSelfHasVideo)
import closure_2 from "getParticipants" /* 4576 */;
import closure_3 from "fetchFingerprint" /* 502 */;
import closure_4 from "_detectH265HardwareDecode" /* 1908 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/voice_panel/native/utils/useSelfHasVideo.tsx");

export default function useSelfHasVideo(arg0) {
  const _require = arg0;
  const items = [closure_2, closure_3, closure_4];
  return _require(504).useStateFromStores(items, () => {
    const participant = closure_1_2.getParticipant(callback, closure_1_3.getId());
    return callback(closure_1_1[4]).canRenderParticipantVideo(participant, closure_1_4);
  });
};