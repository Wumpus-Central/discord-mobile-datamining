import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { allowChannelAccess } from "../../../utils/ChannelUtils.tsx";
import { shouldShowAgeGateForVoiceChannel } from "../../age_gate/AgeGateUtils.tsx";
import { canJoinVoiceChannel } from "../../channel/canJoinVoiceChannel.tsx";
// discord_app/modules/go_live/utils/StreamPermissionUtils.tsx
import set from "set";
import { ChannelRecordBase } from "createChannelRecord";
import { GUILD_VOCAL_CHANNELS_KEY } from "comparator";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import updateVoiceState from "updateVoiceState";
import { Permissions } from "ME";

const require = arg1;
function canStreamInChannel(channel, closure_2, set, arg3) {
  let flag = arg3;
  if (arg3 === undefined) {
    flag = true;
  }
  if (channel.isPrivate()) {
    return true;
  } else {
    const guild = closure_2.getGuild(channel.getGuildId());
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
        flag = !canJoinVoiceChannel(channel, set);
      }
      let tmp9 = !flag;
      if (!flag) {
        let canResult = set.can(Permissions.STREAM, channel);
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
function canWatchStream(basicChannel1, closure_17, closure_12, closure_14, updateVoiceState) {
  if (null == basicChannel1) {
    const items = [false, obj.NO_PERMISSION];
    return items;
  } else {
    let isInChannelResult = closure_17.isInChannel(basicChannel1.id);
    let isChannelFullResult = basicChannel1 instanceof ChannelRecordBase;
    if (isChannelFullResult) {
      obj = allowChannelAccess /* allowChannelAccess */;
      isChannelFullResult = obj.isChannelFull(basicChannel1, closure_17, closure_12);
    }
    let tmp9 = canJoinVoiceChannel(basicChannel1, closure_14);
    const tmp10 = null != updateVoiceState.getAwaitingRemoteSessionInfo() || null != updateVoiceState.getRemoteSessionId();
    let result = shouldShowAgeGateForVoiceChannel /* shouldShowAgeGateForVoiceChannel */.shouldAgeVerifyForAgeGate();
    if (result) {
      result = shouldShowAgeGateForVoiceChannel /* shouldShowAgeGateForVoiceChannel */.shouldShowAgeGateForChannelId(basicChannel1.id);
      const tmp11Result = shouldShowAgeGateForVoiceChannel /* shouldShowAgeGateForVoiceChannel */;
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
let result = require("comparator").fileFinishedImporting("modules/go_live/utils/StreamPermissionUtils.tsx");

export { canStreamInChannel };
export const getStreamCTAString = function getStreamCTAString(arg0) {
  if (obj.REMOTE_MODE === arg0) {
    const intl5 = getSystemLocale /* getSystemLocale */.intl;
    return intl5.string(getSystemLocale /* getSystemLocale */.t["1i3tSY"]);
  } else if (tmp.CHANNEL_FULL === arg0) {
    const intl4 = getSystemLocale /* getSystemLocale */.intl;
    return intl4.string(getSystemLocale /* getSystemLocale */.t.elyVbv);
  } else if (tmp.NO_PERMISSION === arg0) {
    const intl3 = getSystemLocale /* getSystemLocale */.intl;
    return intl3.string(getSystemLocale /* getSystemLocale */.t.pgUTZC);
  } else if (tmp.AGE_RESTRICTED === arg0) {
    const intl2 = getSystemLocale /* getSystemLocale */.intl;
    return intl2.string(getSystemLocale /* getSystemLocale */.t.b5FqhF);
  } else {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t["7Xq/nV"]);
  }
};
export const getStreamCTAAriaLabel = function getStreamCTAAriaLabel(arg0) {
  if (obj.REMOTE_MODE === arg0) {
    const intl7 = getSystemLocale /* getSystemLocale */.intl;
    const intl8 = getSystemLocale /* getSystemLocale */.intl;
    const _HermesInternal4 = HermesInternal;
    return "" + intl7.string(getSystemLocale /* getSystemLocale */.t["7Xq/nV"]) + ": " + intl8.string(getSystemLocale /* getSystemLocale */.t["1i3tSY"]);
  } else if (tmp.CHANNEL_FULL === arg0) {
    const intl5 = getSystemLocale /* getSystemLocale */.intl;
    const intl6 = getSystemLocale /* getSystemLocale */.intl;
    const _HermesInternal3 = HermesInternal;
    return "" + intl5.string(getSystemLocale /* getSystemLocale */.t["7Xq/nV"]) + ": " + intl6.string(getSystemLocale /* getSystemLocale */.t.elyVbv);
  } else if (tmp.NO_PERMISSION === arg0) {
    const intl3 = getSystemLocale /* getSystemLocale */.intl;
    const intl4 = getSystemLocale /* getSystemLocale */.intl;
    const _HermesInternal2 = HermesInternal;
    return "" + intl3.string(getSystemLocale /* getSystemLocale */.t["7Xq/nV"]) + ": " + intl4.string(getSystemLocale /* getSystemLocale */.t.pgUTZC);
  } else if (tmp.AGE_RESTRICTED === arg0) {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    const intl2 = getSystemLocale /* getSystemLocale */.intl;
    const _HermesInternal = HermesInternal;
    return "" + intl.string(getSystemLocale /* getSystemLocale */.t["7Xq/nV"]) + ": " + intl2.string(getSystemLocale /* getSystemLocale */.t.b5FqhF);
  } else {
    const intl9 = getSystemLocale /* getSystemLocale */.intl;
    const intl10 = getSystemLocale /* getSystemLocale */.intl;
    const _HermesInternal5 = HermesInternal;
    return "" + intl9.string(getSystemLocale /* getSystemLocale */.t["7Xq/nV"]) + ": " + intl10.string(getSystemLocale /* getSystemLocale */.t["9C444m"]);
  }
};
export const StreamUnavailableReasons = obj;
export { canWatchStream };
export const useCanWatchStream = function useCanWatchStream(stateFromStores) {
  const _require = stateFromStores;
  const items = [updateVoiceState, createGuildRecordFromRust, getUncachedChannelPermissions, set];
  return _initialize.useStateFromStoresArray(items, () => outer1_12(closure_0, outer1_8, outer1_6, outer1_7, outer1_3));
};
export const getStreamEligibleChannels = function getStreamEligibleChannels(arg0, closure_2, set) {
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