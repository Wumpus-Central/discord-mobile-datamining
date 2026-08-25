// discord_app/modules/go_live/utils/StreamPermissionUtils.tsx
import getSystemLocale from "../../../intl/index.native.tsx";
import allowChannelAccess from "../../../utils/ChannelUtils.tsx";
import shouldShowAgeGateForVoiceChannel from "../../age_gate/AgeGateUtils.tsx";
import canJoinVoiceChannelDefault from "../../channel/canJoinVoiceChannel.tsx";
import closure_3 from "../../game_console/GameConsoleStore.tsx";
import { ChannelRecordBase } from "../../../records/ChannelRecord.tsx";
import { GUILD_VOCAL_CHANNELS_KEY } from "../../../stores/GuildChannelStore.tsx";
import closure_6 from "../../../stores/GuildStore.tsx";
import closure_7 from "../../../stores/PermissionStore.tsx";
import closure_8 from "../../../stores/VoiceStateStore.tsx";
import { Permissions } from "../../../Constants.tsx";

require = arg1;
function canStreamInChannel(channel, closure_1_2, closure_1_3, arg3) {
  let flag = arg3;
  if (arg3 === undefined) {
    flag = true;
  }
  if (channel.isPrivate()) {
    return true;
  } else {
    const guild = closure_1_2.getGuild(channel.getGuildId());
    let num;
    if (guild != null) {
      num = guild.maxStageVideoChannelUsers;
    }
    if (num == null) {
      num = 0;
    }
    let isGuildStageVoiceResult = channel.isGuildStageVoice();
    if (isGuildStageVoiceResult) {
      isGuildStageVoiceResult = num <= 0;
    }
    let tmp5 = !isGuildStageVoiceResult;
    if (!isGuildStageVoiceResult) {
      if (flag) {
        flag = !canJoinVoiceChannelDefault(channel, closure_1_3);
      }
      let tmp9 = !flag;
      if (!flag) {
        let canResult = closure_1_3.can(Permissions.STREAM, channel);
        if (canResult) {
          canResult = null != guild && guild.afkChannelId !== channel.id;
          const tmp12 = null != guild && guild.afkChannelId !== channel.id;
        }
        tmp9 = canResult;
      }
      tmp5 = tmp9;
    }
    return tmp5;
  }
}
function canWatchStream(basicChannel1, closure_17, closure_12, closure_14, closure_8) {
  if (null == basicChannel1) {
    const items = [false, obj.NO_PERMISSION];
    return items;
  } else {
    let isInChannelResult = closure_17.isInChannel(basicChannel1.id);
    let isChannelFullResult = basicChannel1 instanceof ChannelRecordBase;
    if (isChannelFullResult) {
      obj = allowChannelAccess;
      isChannelFullResult = obj.isChannelFull(basicChannel1, closure_17, closure_12);
    }
    let tmp9 = canJoinVoiceChannelDefault(basicChannel1, closure_14);
    const tmp10 = null != closure_8.getAwaitingRemoteSessionInfo() || null != closure_8.getRemoteSessionId();
    let result = shouldShowAgeGateForVoiceChannel.shouldAgeVerifyForAgeGate();
    if (result) {
      result = shouldShowAgeGateForVoiceChannel.shouldShowAgeGateForChannelId(basicChannel1.id);
      const tmp11Result = shouldShowAgeGateForVoiceChannel;
    }
    if (tmp10) {
      let CHANNEL_FULL = obj.REMOTE_MODE;
    } else if (result) {
      CHANNEL_FULL = obj.AGE_RESTRICTED;
    } else {
      if (!tmp9) {
        if (!isInChannelResult) {
          CHANNEL_FULL = obj.NO_PERMISSION;
        }
      }
      let tmp14 = isChannelFullResult;
      if (isChannelFullResult) {
        tmp14 = !isInChannelResult;
      }
      if (tmp14) {
        CHANNEL_FULL = obj.CHANNEL_FULL;
      }
    }
    let tmp18 = !tmp10;
    if (!tmp10) {
      tmp18 = !result;
    }
    if (tmp18) {
      if (!isInChannelResult) {
        if (tmp9) {
          tmp9 = !isChannelFullResult;
        }
        isInChannelResult = tmp9;
      }
      tmp18 = isInChannelResult;
    }
    const items1 = [tmp18, CHANNEL_FULL];
    return items1;
  }
}
let obj = { REMOTE_MODE: 0, [0]: "REMOTE_MODE", CHANNEL_FULL: 1, [1]: "CHANNEL_FULL", NO_PERMISSION: 2, [2]: "NO_PERMISSION", AGE_RESTRICTED: 3, [3]: "AGE_RESTRICTED" };
let result = require("set").fileFinishedImporting("modules/go_live/utils/StreamPermissionUtils.tsx");

export { canStreamInChannel };
export const getStreamCTAString = function getStreamCTAString(arg0) {
  if (obj.REMOTE_MODE === arg0) {
    const intl5 = getSystemLocale.intl;
    return intl5.string(getSystemLocale.t["1i3tSY"]);
  } else if (tmp.CHANNEL_FULL === arg0) {
    const intl4 = getSystemLocale.intl;
    return intl4.string(getSystemLocale.t.elyVbv);
  } else if (tmp.NO_PERMISSION === arg0) {
    const intl3 = getSystemLocale.intl;
    return intl3.string(getSystemLocale.t.pgUTZC);
  } else if (tmp.AGE_RESTRICTED === arg0) {
    const intl2 = getSystemLocale.intl;
    return intl2.string(getSystemLocale.t.b5FqhF);
  } else {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["7Xq/nV"]);
  }
};
export const getStreamCTAAriaLabel = function getStreamCTAAriaLabel(arg0) {
  if (obj.REMOTE_MODE === arg0) {
    const intl7 = getSystemLocale.intl;
    const intl8 = getSystemLocale.intl;
    const _HermesInternal4 = HermesInternal;
    return "" + intl7.string(getSystemLocale.t["7Xq/nV"]) + ": " + intl8.string(getSystemLocale.t["1i3tSY"]);
  } else if (tmp.CHANNEL_FULL === arg0) {
    const intl5 = getSystemLocale.intl;
    const intl6 = getSystemLocale.intl;
    const _HermesInternal3 = HermesInternal;
    return "" + intl5.string(getSystemLocale.t["7Xq/nV"]) + ": " + intl6.string(getSystemLocale.t.elyVbv);
  } else if (tmp.NO_PERMISSION === arg0) {
    const intl3 = getSystemLocale.intl;
    const intl4 = getSystemLocale.intl;
    const _HermesInternal2 = HermesInternal;
    return "" + intl3.string(getSystemLocale.t["7Xq/nV"]) + ": " + intl4.string(getSystemLocale.t.pgUTZC);
  } else if (tmp.AGE_RESTRICTED === arg0) {
    const intl = getSystemLocale.intl;
    const intl2 = getSystemLocale.intl;
    const _HermesInternal = HermesInternal;
    return "" + intl.string(getSystemLocale.t["7Xq/nV"]) + ": " + intl2.string(getSystemLocale.t.b5FqhF);
  } else {
    const intl9 = getSystemLocale.intl;
    const intl10 = getSystemLocale.intl;
    const _HermesInternal5 = HermesInternal;
    return "" + intl9.string(getSystemLocale.t["7Xq/nV"]) + ": " + intl10.string(getSystemLocale.t["9C444m"]);
  }
};
export const StreamUnavailableReasons = obj;
export { canWatchStream };
export const useCanWatchStream = function useCanWatchStream(stateFromStores) {
  const _require = stateFromStores;
  const items = [closure_8, closure_6, closure_7, closure_3];
  return require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStoresArray(items, () => closure_1_12(closure_0, closure_1_8, closure_1_6, closure_1_7, closure_1_3));
};
export const getStreamEligibleChannels = function getStreamEligibleChannels(arg0, closure_1_2, closure_1_3) {
  const items = [];
  for (const item10011 of tmp) {
    let channel = item10011.channel;
    let tmp3 = canStreamInChannel;
    let tmp2 = channel;
    if (canStreamInChannel(channel, arg1, arg2)) {
      let tmp4 = channel;
      let arr = items.push(tmp2);
    }
    continue;
  }
  return items;
};