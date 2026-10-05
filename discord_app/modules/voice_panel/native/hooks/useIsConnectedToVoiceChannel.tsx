// discord_app/modules/voice_panel/native/hooks/useIsConnectedToVoiceChannel.tsx
import Constants from "../../../../Constants.tsx";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import RTCConnectionStore from "../../../../stores/RTCConnectionStore.tsx";
import VoiceStateStore from "../../../../stores/VoiceStateStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const RTCConnectionStates = Constants.RTCConnectionStates;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp8;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(3);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [RTCConnectionStore, VoiceStateStore, AuthenticationStore];
        cResult[0] = items;
        first = items;
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
            const state = RTCConnectionStore.getState();
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
        tmp8 = fn;
      } else {
        tmp8 = cResult[2];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStores(first, tmp8);
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      const items = [RTCConnectionStore, VoiceStateStore, AuthenticationStore];
      const obj = require("get initialized");
      return obj.useStateFromStores(items, () => {
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
          const state = RTCConnectionStore.getState();
          if (RTCConnectionStates.DISCONNECTED !== state) {
            if (RTCConnectionStates.NO_ROUTE !== state) {
              return true;
            }
          }
          return false;
        }
      });
    };
const result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useIsConnectedToVoiceChannel.tsx");

export default tmp2;
