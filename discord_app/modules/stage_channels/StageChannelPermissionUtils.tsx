// === Module 6704: StageChannelPermissionUtils ===

// Module 6704 (StageChannelPermissionUtils)
import BigFlagUtilsAll from "BigFlagUtils" /* 1084 */;
import StageChannelPermissions from "StageChannelPermissions" /* 4866 */;
import PermissionUtilsAll from "PermissionUtils" /* 4946 */;
import LurkingStore from "LurkingStore" /* 4942 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import GuildStore from "GuildStore" /* 4880 */;
import PermissionStore from "PermissionStore" /* 4941 */;
import StageInstanceStore from "StageInstanceStore" /* 4863 */;

const require = globalThis.__r;

require = fn;
const isGuildOwner = fn(4876).isGuildOwner;
const Constants = fn(1072);
({ GuildFeatures: c10, Permissions: closure_11 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/StageChannelPermissionUtils.tsx");

export function createModeratorOverwrite(id, MEMBER, arg2) {
  let tmp;
  if (arg2 != null) {
    tmp = arg2.permissionOverwrites[id];
  }
  const obj = { id, type: MEMBER, deny: null, allow: null };
  let deny;
  if (tmp != null) {
    deny = tmp.deny;
  }
  if (deny == null) {
    deny = PermissionUtilsAll.NONE;
  }
  obj.deny = BigFlagUtilsAll.remove(deny, StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS);
  let allow;
  if (tmp != null) {
    allow = tmp.allow;
  }
  if (allow == null) {
    allow = PermissionUtilsAll.NONE;
  }
  obj.allow = BigFlagUtilsAll.combine(StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS, allow);
  return obj;
}
export function createOrUpdateModeratorOverwrite(id, type, deny) {
  const obj = { id, type, deny: null, allow: null };
  deny = undefined;
  if (deny != null) {
    deny = deny.deny;
  }
  if (deny == null) {
    deny = PermissionUtilsAll.NONE;
  }
  obj.deny = BigFlagUtilsAll.remove(deny, StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS);
  let allow;
  if (deny != null) {
    allow = deny.allow;
  }
  if (allow == null) {
    allow = PermissionUtilsAll.NONE;
  }
  obj.allow = BigFlagUtilsAll.combine(StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS, allow);
  return obj;
}
export function removeModeratorOverwrite(id, MEMBER, name) {
  let tmp;
  if (name != null) {
    tmp = name.permissionOverwrites[id];
  }
  const obj = { id, type: MEMBER, deny: null, allow: null };
  let deny;
  if (tmp != null) {
    deny = tmp.deny;
  }
  if (deny == null) {
    deny = PermissionUtilsAll.NONE;
  }
  obj.deny = deny;
  let allow;
  if (tmp != null) {
    allow = tmp.allow;
  }
  if (allow == null) {
    allow = PermissionUtilsAll.NONE;
  }
  obj.allow = BigFlagUtilsAll.remove(allow, StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS);
  return obj;
}
export function isEmptyOverwrite(id) {
  ({ allow, deny } = id);
  let equalsResult = BigFlagUtilsAll.equals(allow, PermissionUtilsAll.NONE);
  if (equalsResult) {
    equalsResult = BigFlagUtilsAll.equals(deny, PermissionUtilsAll.NONE);
    const tmpResult = BigFlagUtilsAll;
  }
  return equalsResult;
}
export function useCanCreateStageChannelByGuild(guildId) {
  _require = guildId;
  const items = [PermissionStore, AuthenticationStore, GuildStore];
  const items1 = [guildId];
  return require("initialize").useStateFromStores(items, () => {
    const id = AuthenticationStore.getId();
    const guild = GuildStore.getGuild(closure_0);
    let tmp3 = null != guild;
    if (tmp3) {
      const features = guild.features;
      let hasItem = features.has(constants.COMMUNITY);
      if (hasItem) {
        let canResult = isGuildOwner(guild, id);
        if (!canResult) {
          canResult = PermissionStore.can(StageChannelPermissions.CREATE_STAGE_CHANNEL_PERMISSIONS, guild);
        }
        hasItem = canResult;
      }
      tmp3 = hasItem;
    }
    return tmp3;
  }, items1);
}
export function useCanUpdateStageChannelModerators(id) {
  _require = id;
  const items = [PermissionStore, GuildStore, ChannelStore];
  const items1 = [id];
  return require("initialize").useStateFromStores(items, () => {
    const channel = ChannelStore.getChannel(closure_0);
    let guildId;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    const canResult = PermissionStore.can(constants2.ADMINISTRATOR, GuildStore.getGuild(guildId));
    let tmp5 = !canResult;
    if (!canResult) {
      tmp5 = !PermissionStore.can(constants2.MANAGE_ROLES, channel, undefined, undefined, true);
    }
    let canResult1 = !tmp5;
    if (tmp5) {
      canResult1 = PermissionStore.can(StageChannelPermissions.UPDATE_STAGE_CHANNEL_MODERATOR_PERMISSIONS, channel);
    }
    return canResult1;
  }, items1);
}
export function useCanModerateRequestToSpeak(id) {
  _require = id;
  const items = [ChannelStore, PermissionStore];
  const items1 = [id];
  return require("initialize").useStateFromStores(items, () => {
    let canResult = null != closure_0;
    if (canResult) {
      canResult = PermissionStore.can(constants2.MUTE_MEMBERS, ChannelStore.getChannel(tmp));
    }
    return canResult;
  }, items1);
}
export function canLurkerListen(channel) {
  const tmp = null == channel || !channel.isGuildStageVoice();
  let tmp2 = !tmp;
  if (!tmp) {
    let isLurkingResult = LurkingStore.isLurking(channel.guild_id);
    if (isLurkingResult) {
      let canResult = StageInstanceStore.isPublic(channel.id);
      if (canResult) {
        canResult = PermissionStore.can(StageChannelPermissions.JOIN_VOCAL_CHANNEL_PERMISSIONS, channel);
      }
      isLurkingResult = canResult;
    }
    tmp2 = isLurkingResult;
  }
  return tmp2;
}