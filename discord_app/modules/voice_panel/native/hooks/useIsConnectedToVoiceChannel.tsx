// discord_app/modules/voice_panel/native/hooks/useIsConnectedToVoiceChannel.tsx
import fetchFingerprint from "../../../../stores/AuthenticationStore.tsx";
import createRTCConnection from "../../../../stores/RTCConnectionStore.tsx";
import updateVoiceState from "../../../../stores/VoiceStateStore.tsx";
import { RTCConnectionStates } from "../../../../Constants.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/voice_panel/native/hooks/useIsConnectedToVoiceChannel.tsx");

export default function useIsConnectedToVoiceChannel(arg0) {
  const _require = arg0;
  const items = [closure_3, closure_4, closure_2];
  return require("../../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    const channelId = closure_1_3.getChannelId();
    let tmp2 = closure_0;
    if (closure_0 == null) {
      tmp2 = channelId;
    }
    if (tmp2 !== channelId) {
      return false;
    } else if (closure_1_4.isInChannel(tmp2, closure_1_2.getId())) {
      return true;
    } else {
      const state = closure_1_3.getState();
      if (RTCConnectionStates.DISCONNECTED !== state) {
        if (RTCConnectionStates.NO_ROUTE !== state) {
          return true;
        }
      }
      return false;
    }
  });
};