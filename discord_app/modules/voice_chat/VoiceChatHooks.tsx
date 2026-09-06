// === Module 9471: VoiceChatHooks ===

// Module 9471 (VoiceChatHooks)
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import VoiceStateStore from "VoiceStateStore" /* 4579 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_chat/VoiceChatHooks.tsx");

export const useIsConnectedToVoiceChannel = function useIsConnectedToVoiceChannel(id) {
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  const items = [VoiceStateStore, AuthenticationStore];
  return id(504).useStateFromStores(items, () => VoiceStateStore.isInChannel(id, AuthenticationStore.getId()));
};
export const useIsConnectedToVoiceChannelForId = function useIsConnectedToVoiceChannelForId(arg0) {
  _require = arg0;
  const items = [VoiceStateStore, AuthenticationStore];
  return require("initialize").useStateFromStores(items, () => VoiceStateStore.isInChannel(id, AuthenticationStore.getId()));
};