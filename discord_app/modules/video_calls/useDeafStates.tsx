// discord_app/modules/video_calls/useDeafStates.tsx
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import MediaEngineStore from "../../stores/MediaEngineStore.tsx";
import VoiceStateStore from "../../stores/VoiceStateStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

function getDeafStates(channel) {
  let flag;
  let tmp = VoiceStateStore;
  if (VoiceStateStore === undefined) {
    tmp = VoiceStateStore;
  }
  let obj = MediaEngineStore;
  if (MediaEngineStore === undefined) {
    obj = MediaEngineStore;
  }
  let obj2 = AuthenticationStore;
  if (AuthenticationStore === undefined) {
    obj2 = AuthenticationStore;
  }
  let voiceState = null;
  if (null != channel) {
    const getVoiceState = tmp.getVoiceState;
    const guildId = channel.getGuildId();
    voiceState = getVoiceState(guildId, obj2.getId());
  }
  const obj3 = { selfDeaf: obj.isSelfDeaf(), deaf: flag };
  flag = undefined;
  if (voiceState != null) {
    flag = voiceState.deaf;
  }
  if (flag == null) {
    flag = false;
  }
  return obj3;
}
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let first;
      let tmp8;
      let tmp9;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(4);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [VoiceStateStore, MediaEngineStore, AuthenticationStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function o() {
          let flag;
          if (VoiceStateStore !== undefined) {
            if (MediaEngineStore !== undefined) {
              if (AuthenticationStore !== undefined) {
                let voiceState = null;
                if (null != guildId) {
                  const getVoiceState = VoiceStateStore.getVoiceState;
                  guildId = guildId.getGuildId();
                  voiceState = getVoiceState(guildId, AuthenticationStore.getId());
                }
                const obj4 = { selfDeaf: MediaEngineStore.isSelfDeaf(), deaf: flag };
                flag = undefined;
                if (voiceState != null) {
                  flag = voiceState.deaf;
                }
                if (flag == null) {
                  flag = false;
                }
                return obj4;
              }
            }
          }
        };
        const items1 = [arg0];
        cResult[1] = arg0;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp9 = items1;
        tmp8 = fn;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStoresObject(first, tmp8, tmp9);
    }
  : (arg0) => {
      _require = arg0;
      const items = [VoiceStateStore, MediaEngineStore, AuthenticationStore];
      const items1 = [arg0];
      const obj = require("get initialized");
      return obj.useStateFromStoresObject(
        items,
        () => {
          let flag;
          if (VoiceStateStore !== undefined) {
            if (MediaEngineStore !== undefined) {
              if (AuthenticationStore !== undefined) {
                let voiceState = null;
                if (null != guildId) {
                  const getVoiceState = VoiceStateStore.getVoiceState;
                  guildId = guildId.getGuildId();
                  voiceState = getVoiceState(guildId, AuthenticationStore.getId());
                }
                const obj4 = { selfDeaf: MediaEngineStore.isSelfDeaf(), deaf: flag };
                flag = undefined;
                if (voiceState != null) {
                  flag = voiceState.deaf;
                }
                if (flag == null) {
                  flag = false;
                }
                return obj4;
              }
            }
          }
        },
        items1,
      );
    };
const result = size.fileFinishedImporting("modules/video_calls/useDeafStates.tsx");

export default tmp2;
export { getDeafStates };
