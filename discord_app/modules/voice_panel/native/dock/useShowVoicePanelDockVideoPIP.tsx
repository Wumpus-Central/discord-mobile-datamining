// === Module 20059: useShowVoicePanelDockVideoPIP ===

// Module 20059 (useShowVoicePanelDockVideoPIP)
import ChannelRTCStore from "ChannelRTCStore" /* 7016 */;
import MediaEngineStore from "MediaEngineStore" /* 2133 */;
import VoicePanelDockPIPWatchPromptStore from "VoicePanelDockPIPWatchPromptStore" /* 20058 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/dock/useShowVoicePanelDockVideoPIP.tsx");

export default function useShowVoicePanelDockVideoPIP(arg0) {
  _require = arg0;
  items = [ChannelRTCStore, MediaEngineStore, VoicePanelDockPIPWatchPromptStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    const isVideoPIPDismissedResult = VoicePanelDockPIPWatchPromptStore.isVideoPIPDismissed();
    let someResult = !isVideoPIPDismissedResult;
    if (!isVideoPIPDismissedResult) {
      const videoParticipants = ChannelRTCStore.getVideoParticipants(closure_0);
      someResult = videoParticipants.some((item) => closure_1_0(closure_1_1[4]).canRenderParticipantVideo(item, closure_1_3));
    }
    return someResult;
  }, items1);
};