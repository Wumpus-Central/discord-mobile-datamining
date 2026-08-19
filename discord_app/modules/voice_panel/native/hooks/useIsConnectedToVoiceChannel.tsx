// === Module 16256: useIsConnectedToVoiceChannel ===

// Module 16256 (useIsConnectedToVoiceChannel)
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import createRTCConnection from "createRTCConnection" /* 4539 */;
import updateVoiceState from "updateVoiceState" /* 4542 */;
import { RTCConnectionStates } from "ME" /* 676 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/voice_panel/native/hooks/useIsConnectedToVoiceChannel.tsx");

export default function useIsConnectedToVoiceChannel(arg0) {
  const _require = arg0;
  const items = [closure_3, closure_4, closure_2];
  return _require(589).useStateFromStores(items, () => {
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