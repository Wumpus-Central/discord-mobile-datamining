// === Module 17167: useSelfHasVideo ===

// Module 17167 (useSelfHasVideo)
import participantHasVideo from "participantHasVideo" /* 9713 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4622 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 1908 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/utils/useSelfHasVideo.tsx");

export default function useSelfHasVideo(arg0) {
  _require = arg0;
  const items = [ChannelRTCStore, AuthenticationStore, MediaEngineStore];
  return require("initialize").useStateFromStores(items, () => {
    const participant = ChannelRTCStore.getParticipant(closure_0, AuthenticationStore.getId());
    return participantHasVideo.canRenderParticipantVideo(participant, MediaEngineStore);
  });
};