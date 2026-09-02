// === Module 16817: useExternalPIPEnabler ===

// Module 16817 (useExternalPIPEnabler)
import closure_2 from "getParticipants" /* 4494 */;
import closure_3 from "fetchFingerprint" /* 1215 */;
import closure_4 from "createRTCConnection" /* 4554 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/external_pip/useExternalPipEnabler.android.tsx");

export default function useExternalPIPEnabler(disabled) {
  disabled = disabled.disabled;
  const items = [closure_2, closure_4, closure_3];
  const items1 = [disabled];
  return disabled(586).useStateFromStoresObject(items, () => {
    const channelId = closure_1_4.getChannelId();
    if (null != channelId) {
      if (!disabled) {
        let obj = closure_1_2;
        const videoParticipants = closure_1_2.getVideoParticipants(channelId);
        let tmp2 = videoParticipants.filter((localVideoDisabled) => !localVideoDisabled.localVideoDisabled).length > 0;
        if (!tmp2) {
          const streamParticipants = obj.getStreamParticipants(channelId);
          const found = streamParticipants.filter((user) => user.user.id !== id.getId());
          tmp2 = null != found.find((streamId) => null != streamId.streamId);
        }
        obj = {};
        const merged = Object.assign(disabled(closure_1_1[4]).DEFAULT_STATE);
        obj.externalPipEnabled = tmp2;
        return obj;
      }
    }
    return disabled(closure_1_1[4]).DEFAULT_STATE;
  }, items1);
};