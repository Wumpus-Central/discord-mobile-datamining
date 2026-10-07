// === Module 17183: useExternalPipEnabler ===

// Module 17183 (useExternalPipEnabler)
import ExternalPipEnablerState from "ExternalPipEnablerState" /* 17184 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4912 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4919 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/external_pip/useExternalPipEnabler.android.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((disabled) => {
  const cResult = disabled(576).c(4);
  disabled = disabled.disabled;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelRTCStore, RTCConnectionStore, AuthenticationStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== disabled) {
    const fn = function o() {
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
    };
    const items1 = [disabled];
    cResult[1] = disabled;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp9 = items1;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const obj = disabled(576);
  return disabled(504).useStateFromStoresObject(first, tmp8, tmp9);
}) : ((disabled) => {
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
});