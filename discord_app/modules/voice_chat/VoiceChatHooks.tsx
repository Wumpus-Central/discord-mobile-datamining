// === Module 9471: useIsConnectedToVoiceChannel ===

// Module 9471 (useIsConnectedToVoiceChannel)
import closure_2 from "fetchFingerprint" /* 502 */;
import closure_3 from "updateVoiceState" /* 4579 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/voice_chat/VoiceChatHooks.tsx");

export const useIsConnectedToVoiceChannel = function useIsConnectedToVoiceChannel(id) {
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  const items = [closure_3, closure_2];
  return id(504).useStateFromStores(items, () => closure_1_3.isInChannel(id, closure_1_2.getId()));
};
export const useIsConnectedToVoiceChannelForId = function useIsConnectedToVoiceChannelForId(arg0) {
  const _require = arg0;
  const items = [closure_3, closure_2];
  return _require(504).useStateFromStores(items, () => closure_1_3.isInChannel(id, closure_1_2.getId()));
};