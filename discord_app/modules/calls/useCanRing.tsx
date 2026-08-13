// discord_app/modules/calls/useCanRing.tsx
import fetchFingerprint from "fetchFingerprint";
import callConnect from "callConnect";
import ensureGuildLoaded from "ensureGuildLoaded";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import recomputeGuild from "recomputeGuild";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import sortActivity from "sortActivity";
import markAllUserIdListsStale from "markAllUserIdListsStale";
import updateVoiceState from "updateVoiceState";
import ME from "ME";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";
import { getChannelRoleSubscriptionStatus } from "../guild_role_subscriptions/useChannelRoleSubscriptionStatus.tsx";
import { experiment } from "../voice_calls/GuildVoiceRingingExperiment.tsx";

let closure_12;
let closure_14;
let map1;
const require = arg1;
function useCanRingToGuildVoiceChannel(user, DisconnectedUserRow, stateFromStores) {
  const _require = user;
  let str = DisconnectedUserRow;
  if (DisconnectedUserRow === undefined) {
    str = "useCanRingToGuildVoiceChannel";
  }
  const importDefault = stateFromStores;
  const items = [getUncachedChannelPermissions];
  stateFromStores = _initialize.useStateFromStores(items, () => {
    let tmp2 = null != stateFromStores;
    if (tmp2) {
      tmp2 = stateFromStores(outer1_2[12])(tmp, outer1_8);
    }
    return tmp2;
  });
  const obj = _initialize;
  const items1 = [trackCommunicationDisabled, recomputeGuild];
  const stateFromStores1 = _initialize.useStateFromStores(items1, () => {
    let guild_id;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    if (null == guild_id) {
      return false;
    } else {
      let canChat = null != outer1_6.getMember(guild_id, user.id);
      if (canChat) {
        canChat = outer1_7.getCheck(guild_id).canChat;
      }
      return canChat;
    }
  });
  let id;
  const obj2 = _initialize;
  const tmp4 = importDefault;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const tmp5 = getChannelRoleSubscriptionStatus;
  let guild_id;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  let enabled = tmp4(9285).useExperiment({ guildId: guild_id, location: str }).enabled;
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
const result = require("ensureGuildLoaded").fileFinishedImporting("modules/calls/useCanRing.tsx");

export const useCanRing = function useCanRing(user, DisconnectedUserRow, selectedVoiceChannelId) {
  const _require = user;
  let str = DisconnectedUserRow;
  if (DisconnectedUserRow === undefined) {
    str = "useCanRing";
  }
  let closure_1 = selectedVoiceChannelId;
  let stateFromStores;
  const items = [ensureGuildLoaded];
  stateFromStores = _require(stateFromStores[10]).useStateFromStores(items, () => outer1_5.getChannel(closure_1));
  const obj = _require(stateFromStores[10]);
  const items1 = [fetchFingerprint];
  const stateFromStores1 = _require(stateFromStores[10]).useStateFromStores(items1, () => outer1_3.getId() === user.id);
  const obj2 = _require(stateFromStores[10]);
  const items2 = [markAllUserIdListsStale];
  let stateFromStores2 = _require(stateFromStores[10]).useStateFromStores(items2, () => outer1_10.isFriend(user.id));
  const obj3 = _require(stateFromStores[10]);
  const items3 = [sortActivity];
  let type;
  const stateFromStores3 = _require(stateFromStores[10]).useStateFromStores(items3, () => {
    let tmp = outer1_9.getStatus(user.id) === outer1_14.DND;
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
    let obj = experiment;
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