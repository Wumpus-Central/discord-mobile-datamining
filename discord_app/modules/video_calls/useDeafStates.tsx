// === Module 10926: useDeafStates ===

// Module 10926 (useDeafStates)
import fetchFingerprint from "fetchFingerprint";
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import updateVoiceState from "updateVoiceState";

const require = arg1;
const result = require("updateVoiceState").fileFinishedImporting("modules/video_calls/useDeafStates.tsx");

export default function useDeafStates(arg0) {
  const _require = arg0;
  const items = [updateVoiceState, _detectH265HardwareDecode, fetchFingerprint];
  const items1 = [arg0];
  return _require(589).useStateFromStoresObject(items, () => {
    let obj = closure_0;
    if (outer1_4 !== undefined) {
      if (obj3 !== undefined) {
        if (obj4 !== undefined) {
          let voiceState = null;
          if (null != obj) {
            const guildId = obj.getGuildId();
            voiceState = outer1_4.getVoiceState(guildId, obj4.getId());
          }
          obj = { selfDeaf: null, deaf: null };
          obj[0] = obj3.isSelfDeaf();
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
export const getDeafStates = function getDeafStates(channel, outer1_12, outer1_9, callback3) {
  let obj = outer1_12;
  if (outer1_12 === undefined) {
    obj = updateVoiceState;
  }
  let obj2 = outer1_9;
  if (outer1_9 === undefined) {
    obj2 = _detectH265HardwareDecode;
  }
  let obj3 = callback3;
  if (callback3 === undefined) {
    obj3 = fetchFingerprint;
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