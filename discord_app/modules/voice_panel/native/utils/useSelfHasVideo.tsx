// === Module 16304: useSelfHasVideo ===

// Module 16304 (useSelfHasVideo)
import getParticipants from "getParticipants" /* 4773 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import _detectH265HardwareDecode from "_detectH265HardwareDecode" /* 4497 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/voice_panel/native/utils/useSelfHasVideo.tsx");

export default function useSelfHasVideo(arg0) {
  const _require = arg0;
  const items = [closure_2, closure_3, closure_4];
  return _require(589).useStateFromStores(items, () => {
    const participant = closure_1_2.getParticipant(callback, closure_1_3.getId());
    return callback(dependencyMap[4]).canRenderParticipantVideo(participant, closure_1_4);
  });
};