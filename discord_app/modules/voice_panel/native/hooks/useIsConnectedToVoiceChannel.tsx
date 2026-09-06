// discord_app/modules/voice_panel/native/hooks/useIsConnectedToVoiceChannel.tsx
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import RTCConnectionStore from "../../../../stores/RTCConnectionStore.tsx";
import VoiceStateStore from "../../../../stores/VoiceStateStore.tsx";

const require = fn;
const RTCConnectionStates = fn(1074).RTCConnectionStates;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useIsConnectedToVoiceChannel.tsx");

export default function useIsConnectedToVoiceChannel(arg0) {
  _require = arg0;
  const items = [RTCConnectionStore, VoiceStateStore, AuthenticationStore];
  return require("initialize").useStateFromStores(items, () => {
    const channelId = RTCConnectionStore.getChannelId();
    let tmp2 = closure_0;
    if (closure_0 == null) {
      tmp2 = channelId;
    }
    if (tmp2 !== channelId) {
      return false;
    } else if (VoiceStateStore.isInChannel(tmp2, AuthenticationStore.getId())) {
      return true;
    } else {
      const state = RTCConnectionStore.getState();
      if (RTCConnectionStates.DISCONNECTED !== state) {
        if (RTCConnectionStates.NO_ROUTE !== state) {
          return true;
        }
      }
      return false;
    }
  });
}
