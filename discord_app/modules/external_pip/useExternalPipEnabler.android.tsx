// === Module 17376: useExternalPipEnabler ===

// Module 17376 (useExternalPipEnabler)
import ExternalPipEnablerState from "ExternalPipEnablerState" /* 17377 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4738 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4745 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/external_pip/useExternalPipEnabler.android.tsx");

export default function useExternalPIPEnabler(disabled) {
  disabled = disabled.disabled;
  const items = [ChannelRTCStore, RTCConnectionStore, AuthenticationStore];
  const items1 = [disabled];
  return disabled(504).useStateFromStoresObject(items, () => {
    const channelId = RTCConnectionStore.getChannelId();
    if (null != channelId) {
      if (!disabled) {
        const videoParticipants = ChannelRTCStore.getVideoParticipants(channelId);
        let tmp2 = videoParticipants.filter((localVideoDisabled) => !localVideoDisabled.localVideoDisabled).length > 0;
        if (!tmp2) {
          const streamParticipants = ChannelRTCStore.getStreamParticipants(channelId);
          const found = streamParticipants.filter((user) => user.user.id !== id.getId());
          tmp2 = null != found.find((streamId) => null != streamId.streamId);
        }
        const obj2 = {};
        const merged = Object.assign(ExternalPipEnablerState.DEFAULT_STATE);
        obj2.externalPipEnabled = tmp2;
        return obj2;
      }
    }
    return ExternalPipEnablerState.DEFAULT_STATE;
  }, items1);
};