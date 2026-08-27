// === Module 16530: useIsConnectedToVoiceChannel ===

// Module 16530 (useIsConnectedToVoiceChannel)
import closure_2 from "fetchFingerprint" /* 1218 */;
import closure_3 from "createRTCConnection" /* 4519 */;
import closure_4 from "updateVoiceState" /* 4464 */;
import { RTCConnectionStates } from "ME" /* 676 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/voice_panel/native/hooks/useIsConnectedToVoiceChannel.tsx");

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
      const state = obj.getState();
      if (closure_1_5.DISCONNECTED !== state) {
        if (closure_1_5.NO_ROUTE !== state) {
          return true;
        }
      }
      return false;
    }
    obj = closure_1_3;
  });
};