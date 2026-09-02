// === Module 9887: useCanRingToGuildVoiceChannel ===

// Module 9887 (useCanRingToGuildVoiceChannel)
import getChannelRoleSubscriptionStatusDefault from "getChannelRoleSubscriptionStatus" /* 4960 */;
import experimentDefault from "experiment" /* 9888 */;
import closure_3 from "fetchFingerprint" /* 1215 */;
import closure_4 from "callConnect" /* 5230 */;
import closure_5 from "ensureGuildLoaded" /* 1386 */;
import closure_6 from "trackCommunicationDisabled" /* 1991 */;
import closure_7 from "recomputeGuild" /* 5365 */;
import closure_8 from "getUncachedChannelPermissions" /* 4120 */;
import closure_9 from "sortActivity" /* 4569 */;
import closure_10 from "markAllUserIdListsStale" /* 4130 */;
import closure_11 from "updateVoiceState" /* 4497 */;
import ME from "ME" /* 673 */;

const require = arg1;
function useCanRingToGuildVoiceChannel(user, DisconnectedUserRow, stateFromStores) {
  const _require = user;
  let str = DisconnectedUserRow;
  if (DisconnectedUserRow === undefined) {
    str = "useCanRingToGuildVoiceChannel";
  }
  importDefault = stateFromStores;
  const items = [closure_8];
  stateFromStores = _require(586).useStateFromStores(items, () => {
    let tmp2 = null != stateFromStores;
    if (tmp2) {
      tmp2 = stateFromStores(closure_1_2[12])(tmp, closure_1_8);
    }
    return tmp2;
  });
  const obj = _require(586);
  const items1 = [closure_6, closure_7];
  const stateFromStores1 = _require(586).useStateFromStores(items1, () => {
    let guild_id;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    if (null == guild_id) {
      return false;
    } else {
      let canChat = null != closure_1_6.getMember(guild_id, user.id);
      if (canChat) {
        canChat = closure_1_7.getCheck(guild_id).canChat;
      }
      return canChat;
    }
  });
  let id;
  const obj2 = _require(586);
  const tmp4 = importDefault;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const tmp5 = getChannelRoleSubscriptionStatusDefault;
  let guild_id;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  let enabled = experimentDefault.useExperiment({ guildId: guild_id, location: str }).enabled;
  if (stateFromStores != null) {
    const type = stateFromStores.type;
  }
  if (enabled) {
    enabled = type === constants.GUILD_VOICE;
  }
  if (enabled) {
    enabled = stateFromStores1;
  }
  if (enabled) {
    enabled = stateFromStores;
  }
  if (enabled) {
    enabled = !tmp5(id).needSubscriptionToAccess;
  }
  return enabled;
}
({ ChannelTypes: closure_12, ChannelTypesSets: map1, StatusTypes: closure_14 } = ME);
const result = require("set").fileFinishedImporting("modules/calls/useCanRing.tsx");

export const useCanRing = function useCanRing(user, DisconnectedUserRow, selectedVoiceChannelId) {
  const _require = user;
  let str = DisconnectedUserRow;
  if (DisconnectedUserRow === undefined) {
    str = "useCanRing";
  }
  closure_1 = selectedVoiceChannelId;
  let stateFromStores;
  const items = [closure_5];
  stateFromStores = _require(stateFromStores[10]).useStateFromStores(items, () => closure_1_5.getChannel(closure_1));
  const obj = _require(stateFromStores[10]);
  const items1 = [closure_3];
  const stateFromStores1 = _require(stateFromStores[10]).useStateFromStores(items1, () => closure_1_3.getId() === user.id);
  const obj2 = _require(stateFromStores[10]);
  const items2 = [closure_10];
  let stateFromStores2 = _require(stateFromStores[10]).useStateFromStores(items2, () => closure_1_10.isFriend(user.id));
  const obj3 = _require(stateFromStores[10]);
  const items3 = [closure_9];
  let type;
  const stateFromStores3 = _require(stateFromStores[10]).useStateFromStores(items3, () => {
    let tmp = closure_1_9.getStatus(user.id) === closure_1_14.DND;
    if (tmp) {
      let guild_id;
      if (stateFromStores != null) {
        guild_id = stateFromStores.guild_id;
      }
      tmp = null != guild_id;
    }
    return tmp;
  });
  if (stateFromStores != null) {
    type = stateFromStores.type;
  }
  let hasItem = null != type;
  if (hasItem) {
    const CALLABLE = constants2.CALLABLE;
    hasItem = CALLABLE.has(type);
  }
  let tmp8 = useCanRingToGuildVoiceChannel(user, str, stateFromStores);
  if (stateFromStores2) {
    stateFromStores2 = !stateFromStores3;
  }
  if (stateFromStores2) {
    stateFromStores2 = !stateFromStores1;
  }
  if (stateFromStores2) {
    stateFromStores2 = !user.bot;
  }
  if (stateFromStores2) {
    stateFromStores2 = !user.system;
  }
  if (stateFromStores2) {
    stateFromStores2 = !user.isProvisional;
  }
  if (stateFromStores2) {
    if (!tmp8) {
      tmp8 = hasItem;
    }
    stateFromStores2 = tmp8;
  }
  return stateFromStores2;
};
export const canRingUsersInChannel = function canRingUsersInChannel(channel) {
  const CALLABLE = constants2.CALLABLE;
  if (CALLABLE.has(channel.type)) {
    call = call.getCall(channel.id);
    return null != call && null != call.messageId && !call.isCallUnavailable(channel.id);
  } else if (tmp === tmp2) {
    let obj = experimentDefault;
    obj = { guildId: null, location: "ring" };
    obj[0] = channel.guild_id;
    let enabled = obj.getCurrentConfig(obj).enabled;
    voiceState = voiceState.getVoiceState(channel.guild_id, id.getId());
    if (enabled) {
      enabled = null != voiceState;
    }
    if (enabled) {
      enabled = voiceState.channelId === channel.id;
    }
    return enabled;
  } else {
    return false;
  }
};
export { useCanRingToGuildVoiceChannel };