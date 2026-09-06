// discord_app/modules/go_live/utils/StreamPermissionUtils.tsx
import ChannelUtils from "../../../utils/ChannelUtils.tsx";
import AgeGateUtils from "../../age_gate/AgeGateUtils.tsx";
import canJoinVoiceChannelDefault from "../../channel/canJoinVoiceChannel.tsx";
import GameConsoleStore from "../../game_console/GameConsoleStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import VoiceStateStore from "../../../stores/VoiceStateStore.tsx";

require = fn;
function canStreamInChannel(channel, GuildStore, PermissionStore, arg3) {
  let flag = arg3;
  if (arg3 === undefined) {
    flag = true;
  }
  if (channel.isPrivate()) {
    return true;
  } else {
    const guild = GuildStore.getGuild(channel.getGuildId());
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
        flag = !canJoinVoiceChannelDefault(channel, PermissionStore);
      }
      let tmp9 = !flag;
      if (!flag) {
        let canResult = PermissionStore.can(Permissions.STREAM, channel);
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
function canWatchStream(basicChannel1, VoiceStateStore, GuildStore, PermissionStore, GameConsoleStore) {
  if (null == basicChannel1) {
    const items = [false, obj.NO_PERMISSION];
    return items;
  } else {
    let isInChannelResult = VoiceStateStore.isInChannel(basicChannel1.id);
    let isChannelFullResult = basicChannel1 instanceof ChannelRecordBase;
    if (isChannelFullResult) {
      obj = ChannelUtils;
      isChannelFullResult = obj.isChannelFull(basicChannel1, VoiceStateStore, GuildStore);
    }
    let tmp9 = canJoinVoiceChannelDefault(basicChannel1, PermissionStore);
    const tmp10 =
      null != GameConsoleStore.getAwaitingRemoteSessionInfo() || null != GameConsoleStore.getRemoteSessionId();
    let result = AgeGateUtils.shouldAgeVerifyForAgeGate();
    if (result) {
      result = AgeGateUtils.shouldShowAgeGateForChannelId(basicChannel1.id);
      const tmp11Result = AgeGateUtils;
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
const ChannelRecordBase = fn(1961).ChannelRecordBase;
const GUILD_VOCAL_CHANNELS_KEY = fn(2012).GUILD_VOCAL_CHANNELS_KEY;
const Permissions = fn(1074).Permissions;
const StreamUnavailableReasons = {
  REMOTE_MODE: 0,
  [0]: "REMOTE_MODE",
  CHANNEL_FULL: 1,
  [1]: "CHANNEL_FULL",
  NO_PERMISSION: 2,
  [2]: "NO_PERMISSION",
  AGE_RESTRICTED: 3,
  [3]: "AGE_RESTRICTED",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/go_live/utils/StreamPermissionUtils.tsx");

export { canStreamInChannel };
export { StreamUnavailableReasons };
export { canWatchStream };
export const useCanWatchStream = function useCanWatchStream(stateFromStores) {
  _require = stateFromStores;
  const items = [VoiceStateStore, GuildStore, PermissionStore, GameConsoleStore];
  return require("initialize").useStateFromStoresArray(items, () =>
    canWatchStream(closure_0, VoiceStateStore, GuildStore, PermissionStore, GameConsoleStore),
  );
};
export const getStreamEligibleChannels = function getStreamEligibleChannels(arg0, GuildStore, PermissionStore) {
  const items = [];
  for (const item10011 of tmp) {
    let channel = item10011.channel;
    let tmp2 = channel;
    if (canStreamInChannel(channel, arg1, arg2)) {
      let arr = items.push(tmp2);
    }
    continue;
  }
  return items;
};
