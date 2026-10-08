// === Module 17500: useIsConnectedToVoiceChannel ===

// Module 17500 (useIsConnectedToVoiceChannel)
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5108 */;
import VoiceStateStore from "VoiceStateStore" /* 5111 */;

const require = globalThis.__r;

const require = fn;
const RTCConnectionStates = fn(1085).RTCConnectionStates;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useIsConnectedToVoiceChannel.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useIsConnectedToVoiceChannel(arg0) {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [RTCConnectionStore, VoiceStateStore, AuthenticationStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
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
        state = RTCConnectionStore.getState();
        if (RTCConnectionStates.DISCONNECTED !== state) {
          if (RTCConnectionStates.NO_ROUTE !== state) {
            return true;
          }
        }
        return false;
      }
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp8);
}) : (function useIsConnectedToVoiceChannel(arg0) {
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
      state = RTCConnectionStore.getState();
      if (RTCConnectionStates.DISCONNECTED !== state) {
        if (RTCConnectionStates.NO_ROUTE !== state) {
          return true;
        }
      }
      return false;
    }
  });
});