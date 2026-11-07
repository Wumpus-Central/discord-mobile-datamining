// === Module 19557: useSelfHasVideo ===

// Module 19557 (useSelfHasVideo)
import participantHasVideo from "participantHasVideo" /* 11368 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6898 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 2130 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/utils/useSelfHasVideo.tsx");

export default function useSelfHasVideo(arg0) {
  _require = arg0;
  items = [ChannelRTCStore, AuthenticationStore, MediaEngineStore];
  return require("initialize").useStateFromStores(items, () => {
    const participant = ChannelRTCStore.getParticipant(closure_0, AuthenticationStore.getId());
    return participantHasVideo.canRenderParticipantVideo(participant, MediaEngineStore);
  });
};