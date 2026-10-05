// discord_app/modules/voice_chat/VoiceChatHooks.tsx
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import VoiceStateStore from "../../stores/VoiceStateStore.tsx";
import ReactCompilerGating_mod from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp7;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(3);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [VoiceStateStore, AuthenticationStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function c() {
          return VoiceStateStore.isInChannel(closure_0, AuthenticationStore.getId());
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStores(first, tmp7);
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      const items = [VoiceStateStore, AuthenticationStore];
      const obj = require("get initialized");
      return obj.useStateFromStores(items, () => VoiceStateStore.isInChannel(closure_0, AuthenticationStore.getId()));
    };
let closure_4 = tmp3;
let fn = (channel) => {
  let id;
  if (channel != null) {
    id = channel.id;
  }
  return closure_4(id);
};
const result1 = size.fileFinishedImporting("modules/voice_chat/VoiceChatHooks.tsx");

export const useIsConnectedToVoiceChannel = fn;
export const useIsConnectedToVoiceChannelForId = tmp3;
