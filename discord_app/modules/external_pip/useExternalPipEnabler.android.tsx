// discord_app/modules/external_pip/useExternalPipEnabler.android.tsx
import getParticipants from "../calls/ChannelRTCStore.tsx";
import fetchFingerprint from "../../stores/AuthenticationStore.tsx";
import createRTCConnection from "../../stores/RTCConnectionStore.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/external_pip/useExternalPipEnabler.android.tsx");

export default function useExternalPIPEnabler(disabled) {
  disabled = disabled.disabled;
  const items = [closure_2, closure_4, closure_3];
  const items1 = [disabled];
  return disabled(589).useStateFromStoresObject(items, () => {
    const channelId = closure_1_4.getChannelId();
    if (null != channelId) {
      if (!disabled) {
        let obj = closure_1_2;
        const videoParticipants = closure_1_2.getVideoParticipants(channelId);
        let tmp2 = videoParticipants.filter((item, index) => !item.localVideoDisabled).length > 0;
        if (!tmp2) {
          const streamParticipants = obj.getStreamParticipants(channelId);
          const found = streamParticipants.filter((item, index) => item.user.id !== id.getId());
          tmp2 = null != found.find((item, index) => null != item.streamId);
        }
        obj = {};
        const merged = Object.assign(disabled(dependencyMap[4]).DEFAULT_STATE);
        obj.externalPipEnabled = tmp2;
        return obj;
      }
    }
    return disabled(dependencyMap[4]).DEFAULT_STATE;
  }, items1);
};