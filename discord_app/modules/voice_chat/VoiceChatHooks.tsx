// discord_app/modules/voice_chat/VoiceChatHooks.tsx
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import VoiceStateStore from "../../stores/VoiceStateStore.tsx";

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
  return require("initialize").useStateFromStores(items, () =>
    VoiceStateStore.isInChannel(id, AuthenticationStore.getId()),
  );
};
