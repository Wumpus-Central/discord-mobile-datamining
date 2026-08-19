// discord_app/modules/video_calls/useDeafStates.tsx
import fetchFingerprint from "../../stores/AuthenticationStore.tsx";
import _detectH265HardwareDecode from "../../stores/MediaEngineStore.tsx";
import updateVoiceState from "../../stores/VoiceStateStore.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/video_calls/useDeafStates.tsx");

export default function useDeafStates(arg0) {
  const _require = arg0;
  const items = [closure_4, closure_3, closure_2];
  const items1 = [arg0];
  return require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStoresObject(items, () => {
    let obj = closure_0;
    if (closure_1_4 !== undefined) {
      if (closure_1_3 !== undefined) {
        if (closure_1_2 !== undefined) {
          let voiceState = null;
          if (null != obj) {
            const guildId = obj.getGuildId();
            voiceState = closure_1_4.getVoiceState(guildId, closure_1_2.getId());
          }
          obj = { selfDeaf: null, deaf: null };
          obj[0] = closure_1_3.isSelfDeaf();
          let flag;
          if (voiceState != null) {
            flag = voiceState.deaf;
          }
          if (flag == null) {
            flag = false;
          }
          obj[1] = flag;
          return obj;
        }
      }
    }
  }, items1);
};
export const getDeafStates = function getDeafStates(channel, closure_1_12, closure_1_9, callback3) {
  let obj = closure_1_12;
  if (closure_1_12 === undefined) {
    obj = closure_4;
  }
  let obj2 = closure_1_9;
  if (closure_1_9 === undefined) {
    obj2 = closure_3;
  }
  let obj3 = callback3;
  if (callback3 === undefined) {
    obj3 = closure_2;
  }
  let voiceState = null;
  if (null != channel) {
    const guildId = channel.getGuildId();
    voiceState = obj.getVoiceState(guildId, obj3.getId());
  }
  obj = { selfDeaf: obj2.isSelfDeaf(), deaf: null };
  let flag;
  if (voiceState != null) {
    flag = voiceState.deaf;
  }
  if (flag == null) {
    flag = false;
  }
  obj[1] = flag;
  return obj;
};