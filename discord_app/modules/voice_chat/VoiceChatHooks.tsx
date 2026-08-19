// === Module 8675: useIsConnectedToVoiceChannel ===

// Module 8675 (useIsConnectedToVoiceChannel)
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import updateVoiceState from "updateVoiceState" /* 4542 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/voice_chat/VoiceChatHooks.tsx");

export const useIsConnectedToVoiceChannel = function useIsConnectedToVoiceChannel(id) {
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  const items = [closure_3, closure_2];
  return id(589).useStateFromStores(items, () => closure_1_3.isInChannel(id, closure_1_2.getId()));
};
export const useIsConnectedToVoiceChannelForId = function useIsConnectedToVoiceChannelForId(arg0) {
  const _require = arg0;
  const items = [closure_3, closure_2];
  return _require(589).useStateFromStores(items, () => closure_1_3.isInChannel(id, closure_1_2.getId()));
};