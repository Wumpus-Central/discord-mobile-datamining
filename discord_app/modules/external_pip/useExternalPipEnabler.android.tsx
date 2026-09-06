// discord_app/modules/external_pip/useExternalPipEnabler.android.tsx
import ExternalPipEnablerState from "ExternalPipEnablerState.tsx";
import ChannelRTCStore from "../calls/ChannelRTCStore.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import RTCConnectionStore from "../../stores/RTCConnectionStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/external_pip/useExternalPipEnabler.android.tsx");

export default function useExternalPIPEnabler(disabled) {
  disabled = disabled.disabled;
  const items = [ChannelRTCStore, RTCConnectionStore, AuthenticationStore];
  const items1 = [disabled];
  return disabled(504).useStateFromStoresObject(
    items,
    () => {
      const channelId = RTCConnectionStore.getChannelId();
      if (null != channelId) {
        if (!disabled) {
          let obj = ChannelRTCStore;
          const videoParticipants = ChannelRTCStore.getVideoParticipants(channelId);
          let tmp2 =
            videoParticipants.filter((localVideoDisabled) => !localVideoDisabled.localVideoDisabled).length > 0;
          if (!tmp2) {
            const streamParticipants = obj.getStreamParticipants(channelId);
            const found = streamParticipants.filter((user) => user.user.id !== id.getId());
            tmp2 = null != found.find((streamId) => null != streamId.streamId);
          }
          obj = {};
          const merged = Object.assign(ExternalPipEnablerState.DEFAULT_STATE);
          obj.externalPipEnabled = tmp2;
          return obj;
        }
      }
      return ExternalPipEnablerState.DEFAULT_STATE;
    },
    items1,
  );
}
