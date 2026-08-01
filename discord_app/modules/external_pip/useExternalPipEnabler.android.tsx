// === Module 15849: useExternalPIPEnabler ===

// Module 15849 (useExternalPIPEnabler)
import getParticipants from "getParticipants";
import fetchFingerprint from "fetchFingerprint";
import createRTCConnection from "createRTCConnection";

const require = arg1;
const result = require("createRTCConnection").fileFinishedImporting("modules/external_pip/useExternalPipEnabler.android.tsx");

export default function useExternalPIPEnabler(disabled) {
  disabled = disabled.disabled;
  const items = [getParticipants, createRTCConnection, fetchFingerprint];
  const items1 = [disabled];
  return disabled(589).useStateFromStoresObject(items, () => {
    const channelId = outer1_4.getChannelId();
    if (null != channelId) {
      if (!disabled) {
        let obj = outer1_2;
        const videoParticipants = outer1_2.getVideoParticipants(channelId);
        let tmp2 = videoParticipants.filter((localVideoDisabled) => !localVideoDisabled.localVideoDisabled).length > 0;
        if (!tmp2) {
          const streamParticipants = obj.getStreamParticipants(channelId);
          const found = streamParticipants.filter((user) => user.user.id !== id.getId());
          tmp2 = null != found.find((streamId) => null != streamId.streamId);
        }
        obj = {};
        const merged = Object.assign(disabled(outer1_1[4]).DEFAULT_STATE);
        obj.externalPipEnabled = tmp2;
        return obj;
      }
    }
    return disabled(outer1_1[4]).DEFAULT_STATE;
  }, items1);
};