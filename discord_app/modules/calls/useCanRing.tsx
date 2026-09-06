// discord_app/modules/calls/useCanRing.tsx
import useChannelRoleSubscriptionStatusDefault from "../guild_role_subscriptions/useChannelRoleSubscriptionStatus.tsx";
import canJoinVoiceChannelDefault from "../channel/canJoinVoiceChannel.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import CallStore from "../../stores/CallStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildMemberStore from "../../stores/GuildMemberStore.tsx";
import GuildVerificationStore from "../../stores/GuildVerificationStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import PresenceStore from "../../stores/PresenceStore.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";
import VoiceStateStore from "../../stores/VoiceStateStore.tsx";

const GuildVoiceRingingExperimentDefault = tmp4(9175);
const require = fn;
function useCanRingToGuildVoiceChannel(user, useCanRing, stateFromStores) {
  _require = user;
  let str = useCanRing;
  if (useCanRing === undefined) {
    str = "useCanRingToGuildVoiceChannel";
  }
  importDefault = stateFromStores;
  const items = [PermissionStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => {
    let tmp2 = null != closure_1;
    if (tmp2) {
      tmp2 = canJoinVoiceChannelDefault(tmp, PermissionStore);
    }
    return tmp2;
  });
  const obj = require("initialize");
  const items1 = [GuildMemberStore, GuildVerificationStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => {
    let guild_id;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    if (null == guild_id) {
      return false;
    } else {
      let canChat = null != GuildMemberStore.getMember(guild_id, user.id);
      if (canChat) {
        canChat = GuildVerificationStore.getCheck(guild_id).canChat;
      }
      return canChat;
    }
  });
  let id;
  const obj2 = require("initialize");
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const tmp5 = useChannelRoleSubscriptionStatusDefault;
  let guild_id;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  let enabled = GuildVoiceRingingExperimentDefault.useExperiment({ guildId: guild_id, location: str }).enabled;
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
const Constants = fn(1074);
({ ChannelTypes: closure_12, ChannelTypesSets: map1, StatusTypes: closure_14 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/calls/useCanRing.tsx");

export const useCanRing = function useCanRing(user, DisconnectedUserRow, selectedVoiceChannelId) {
  _require = user;
  let str = DisconnectedUserRow;
  if (DisconnectedUserRow === undefined) {
    str = "useCanRing";
  }
  closure_1 = selectedVoiceChannelId;
  let stateFromStores;
  const items = [ChannelStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => ChannelStore.getChannel(closure_1));
  const obj = require("initialize");
  const items1 = [AuthenticationStore];
  const stateFromStores1 = require("initialize").useStateFromStores(
    items1,
    () => AuthenticationStore.getId() === user.id,
  );
  const obj2 = require("initialize");
  const items2 = [RelationshipStore];
  let stateFromStores2 = require("initialize").useStateFromStores(items2, () => RelationshipStore.isFriend(user.id));
  const obj3 = require("initialize");
  const items3 = [PresenceStore];
  let type;
  const stateFromStores3 = require("initialize").useStateFromStores(items3, () => {
    let tmp = PresenceStore.getStatus(user.id) === constants3.DND;
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
    const call = CallStore.getCall(channel.id);
    return null != call && null != call.messageId && !CallStore.isCallUnavailable(channel.id);
  } else if (tmp === tmp2) {
    const obj = { guildId: channel.guild_id, location: "ring" };
    let enabled = obj.getCurrentConfig(obj).enabled;
    const voiceState = VoiceStateStore.getVoiceState(channel.guild_id, AuthenticationStore.getId());
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
