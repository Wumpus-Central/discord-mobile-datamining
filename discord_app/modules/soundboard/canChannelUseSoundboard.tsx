// === Module 6228: canChannelUseSoundboard ===

// Module 6228 (canChannelUseSoundboard)
import closure_2 from "ensureGuildLoaded" /* 1386 */;
import closure_3 from "getUncachedChannelPermissions" /* 4120 */;
import closure_4 from "handleConnectionOpen" /* 1980 */;
import ME from "ME" /* 673 */;

const require = arg1;
({ ChannelTypesSets: c5, Permissions: closure_6 } = ME);
const result = require("set").fileFinishedImporting("modules/soundboard/canChannelUseSoundboard.tsx");

export default function canChannelUseSoundboard(type) {
  if (null == type) {
    return false;
  } else {
    const CALLABLE = constants.CALLABLE;
    if (CALLABLE.has(type.type)) {
      return true;
    } else {
      const canResult = closure_3.can(constants2.USE_SOUNDBOARD, type);
      const canResult1 = closure_3.can(constants2.SPEAK, type);
      return type.isGuildVoiceOrThread() && canResult && closure_3.can(constants2.SPEAK, type);
    }
  }
};
export const canSelectedVoiceChannelUseSoundboard = function canSelectedVoiceChannelUseSoundboard() {
  channel = channel.getChannel(voiceChannelId.getVoiceChannelId());
  let flag = false;
  if (null != channel) {
    const CALLABLE = constants.CALLABLE;
    flag = true;
    if (!CALLABLE.has(channel.type)) {
      const canResult = closure_3.can(constants2.USE_SOUNDBOARD, channel);
      const canResult1 = closure_3.can(constants2.SPEAK, channel);
      flag = channel.isGuildVoiceOrThread() && canResult && closure_3.can(constants2.SPEAK, channel);
      const tmp6 = channel.isGuildVoiceOrThread() && canResult && closure_3.can(constants2.SPEAK, channel);
    }
  }
  return flag;
};
export const useCanChannelUseSoundboard = function useCanChannelUseSoundboard(arg0) {
  const _require = arg0;
  const items = [closure_3];
  const items1 = [arg0];
  return _require(586).useStateFromStores(items, () => {
    let flag = false;
    if (null != closure_0) {
      const CALLABLE = closure_1_5.CALLABLE;
      flag = true;
      if (!CALLABLE.has(obj.type)) {
        const canResult = closure_1_3.can(closure_1_6.USE_SOUNDBOARD, obj);
        const canResult1 = closure_1_3.can(closure_1_6.SPEAK, obj);
        flag = obj.isGuildVoiceOrThread() && canResult && closure_1_3.can(closure_1_6.SPEAK, obj);
        const tmp6 = obj.isGuildVoiceOrThread() && canResult && closure_1_3.can(closure_1_6.SPEAK, obj);
      }
    }
    return flag;
  }, items1);
};