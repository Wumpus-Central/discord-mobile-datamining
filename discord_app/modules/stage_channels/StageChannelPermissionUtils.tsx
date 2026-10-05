// === Module 5572: StageChannelPermissionUtils ===

// Module 5572 (StageChannelPermissionUtils)
import BigFlagUtilsAll from "BigFlagUtils" /* 1097 */;
import StageChannelPermissions from "StageChannelPermissions" /* 2060 */;
import GuildRecord from "GuildRecord" /* 2070 */;
import PermissionUtilsAll from "PermissionUtils" /* 4514 */;
import LurkingStore from "LurkingStore" /* 4510 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2074 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import StageInstanceStore from "StageInstanceStore" /* 2056 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, tmp10, tmp6;

let c10;
let unpackModuleId;
const isGuildOwner = GuildRecord.isGuildOwner;
({ GuildFeatures: c10, Permissions: unpackModuleId } = Constants);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp9;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(4);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore, AuthenticationStore, GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    class E {
      constructor() {
        id = closure_5.getId();
        guild = closure_7.getGuild(closure_0);
        tmp3 = null != guild;
        if (tmp3) {
          features = guild.features;
          tmp4 = GuildFeatures;
          tmp5 = features.has(GuildFeatures.COMMUNITY);
          if (tmp5) {
            tmp6 = isGuildOwner;
            tmp7 = isGuildOwner(guild, id);
            if (!tmp7) {
              tmp8 = closure_8;
              tmp9 = closure_0;
              tmp10 = closure_2;
              tmp7 = closure_8.can(closure_0(closure_2[10]).CREATE_STAGE_CHANNEL_PERMISSIONS, guild);
            }
            tmp5 = tmp7;
          }
          tmp3 = tmp5;
        }
        return tmp3;
      }
    }
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = E;
    cResult[3] = items1;
    tmp9 = items1;
  } else {
    class E {
      constructor() {
        id = closure_5.getId();
        guild = closure_7.getGuild(closure_0);
        tmp3 = null != guild;
        if (tmp3) {
          features = guild.features;
          tmp4 = GuildFeatures;
          tmp5 = features.has(GuildFeatures.COMMUNITY);
          if (tmp5) {
            tmp6 = isGuildOwner;
            tmp7 = isGuildOwner(guild, id);
            if (!tmp7) {
              tmp8 = closure_8;
              tmp9 = closure_0;
              tmp10 = closure_2;
              tmp7 = closure_8.can(closure_0(closure_2[10]).CREATE_STAGE_CHANNEL_PERMISSIONS, guild);
            }
            tmp5 = tmp7;
          }
          tmp3 = tmp5;
        }
        return tmp3;
      }
    }
    tmp9 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, E, tmp9);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  const items = [PermissionStore, AuthenticationStore, GuildStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const id = AuthenticationStore.getId();
    const guild = GuildStore.getGuild(closure_0);
    let tmp3 = null != guild;
    if (tmp3) {
      const features = guild.features;
      let hasItem = features.has(constants.COMMUNITY);
      if (hasItem) {
        hasItem = isGuildOwner(guild, id) || PermissionStore.can(StageChannelPermissions.CREATE_STAGE_CHANNEL_PERMISSIONS, guild);
        const canResult = isGuildOwner(guild, id) || PermissionStore.can(StageChannelPermissions.CREATE_STAGE_CHANNEL_PERMISSIONS, guild);
      }
      tmp3 = hasItem;
    }
    return tmp3;
  }, items1);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp8;
  let tmp9;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(4);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore, GuildStore, ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      const channel = ChannelStore.getChannel(closure_0);
      let guildId;
      const getGuild = GuildStore.getGuild;
      if (channel != null) {
        guildId = channel.getGuildId();
      }
      let tmp5 = !PermissionStore.can(unpackModuleId.ADMINISTRATOR, getGuild(guildId));
      PermissionStore.can(unpackModuleId.ADMINISTRATOR, getGuild(guildId));
      if (tmp5) {
        tmp5 = !PermissionStore.can(unpackModuleId.MANAGE_ROLES, channel, undefined, undefined, true);
      }
      let canResult1 = !tmp5;
      if (tmp5) {
        canResult1 = PermissionStore.can(StageChannelPermissions.UPDATE_STAGE_CHANNEL_MODERATOR_PERMISSIONS, channel);
      }
      return canResult1;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp9 = items1;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp8, tmp9);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  const items = [PermissionStore, GuildStore, ChannelStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const channel = ChannelStore.getChannel(closure_0);
    let guildId;
    const getGuild = GuildStore.getGuild;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    let tmp5 = !PermissionStore.can(unpackModuleId.ADMINISTRATOR, getGuild(guildId));
    PermissionStore.can(unpackModuleId.ADMINISTRATOR, getGuild(guildId));
    if (tmp5) {
      tmp5 = !PermissionStore.can(unpackModuleId.MANAGE_ROLES, channel, undefined, undefined, true);
    }
    let canResult1 = !tmp5;
    if (tmp5) {
      canResult1 = PermissionStore.can(StageChannelPermissions.UPDATE_STAGE_CHANNEL_MODERATOR_PERMISSIONS, channel);
    }
    return canResult1;
  }, items1);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp7;
  let tmp8;
  _require = arg0;
  const tmp = _require;
  const obj = require("react");
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore, PermissionStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      const canResult = null != closure_0 && PermissionStore.can(unpackModuleId.MUTE_MEMBERS, ChannelStore.getChannel(tmp));
      return canResult;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp7, tmp8);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  const items = [ChannelStore, PermissionStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const canResult = null != closure_0 && PermissionStore.can(unpackModuleId.MUTE_MEMBERS, ChannelStore.getChannel(tmp));
    return canResult;
  }, items1);
});
function createOrUpdateModeratorOverwrite(id, type, deny) {
  let MODERATE_STAGE_CHANNEL_PERMISSIONS;
  let allow;
  let combine;
  let remove;
  const obj = { id, type, deny: remove(deny, StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS), allow: combine(MODERATE_STAGE_CHANNEL_PERMISSIONS, allow) };
  deny = undefined;
  remove = BigFlagUtilsAll.remove;
  BigFlagUtilsAll;
  if (deny != null) {
    deny = deny.deny;
  }
  if (deny == null) {
    deny = PermissionUtilsAll.NONE;
  }
  combine = BigFlagUtilsAll.combine;
  allow = undefined;
  BigFlagUtilsAll;
  MODERATE_STAGE_CHANNEL_PERMISSIONS = StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS;
  if (deny != null) {
    allow = deny.allow;
  }
  if (allow == null) {
    allow = PermissionUtilsAll.NONE;
  }
  return obj;
}
const result = size.fileFinishedImporting("modules/stage_channels/StageChannelPermissionUtils.tsx");

export const createModeratorOverwrite = function createModeratorOverwrite(id, MEMBER, arg2) {
  let MODERATE_STAGE_CHANNEL_PERMISSIONS;
  let allow;
  let combine;
  let deny;
  let remove;
  let tmp;
  if (arg2 != null) {
    tmp = arg2.permissionOverwrites[id];
  }
  const obj = { id, type: MEMBER, deny: remove(deny, StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS), allow: combine(MODERATE_STAGE_CHANNEL_PERMISSIONS, allow) };
  deny = undefined;
  remove = BigFlagUtilsAll.remove;
  BigFlagUtilsAll;
  if (tmp != null) {
    deny = tmp.deny;
  }
  if (deny == null) {
    deny = PermissionUtilsAll.NONE;
  }
  combine = BigFlagUtilsAll.combine;
  allow = undefined;
  BigFlagUtilsAll;
  MODERATE_STAGE_CHANNEL_PERMISSIONS = StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS;
  if (tmp != null) {
    allow = tmp.allow;
  }
  if (allow == null) {
    allow = PermissionUtilsAll.NONE;
  }
  return obj;
};
export { createOrUpdateModeratorOverwrite };
export const removeModeratorOverwrite = function removeModeratorOverwrite(id, MEMBER, id2) {
  let allow;
  let deny;
  let remove;
  let tmp;
  if (id != null) {
    tmp = id.permissionOverwrites[id];
  }
  const obj = { id, type: MEMBER, deny, allow: remove(allow, StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS) };
  deny = undefined;
  if (tmp != null) {
    deny = tmp.deny;
  }
  if (deny == null) {
    deny = PermissionUtilsAll.NONE;
  }
  allow = undefined;
  remove = BigFlagUtilsAll.remove;
  BigFlagUtilsAll;
  if (tmp != null) {
    allow = tmp.allow;
  }
  if (allow == null) {
    allow = PermissionUtilsAll.NONE;
  }
  return obj;
};
export const isEmptyOverwrite = function isEmptyOverwrite(id) {
  let allow;
  let deny;
  ({ allow, deny } = id);
  const obj = BigFlagUtilsAll;
  let equalsResult = obj.equals(allow, PermissionUtilsAll.NONE);
  if (equalsResult) {
    const tmpResult = BigFlagUtilsAll;
    equalsResult = tmpResult.equals(deny, PermissionUtilsAll.NONE);
  }
  return equalsResult;
};
export const useCanCreateStageChannelByGuild = tmp3;
export const useCanUpdateStageChannelModerators = tmp4;
export const useCanModerateRequestToSpeak = tmp5;
export const canLurkerListen = function canLurkerListen(channel) {
  let tmp2 = !(null == channel || !channel.isGuildStageVoice());
  null == channel || !channel.isGuildStageVoice();
  if (tmp2) {
    let isLurkingResult = LurkingStore.isLurking(channel.guild_id);
    if (isLurkingResult) {
      isLurkingResult = StageInstanceStore.isPublic(channel.id) && PermissionStore.can(StageChannelPermissions.JOIN_VOCAL_CHANNEL_PERMISSIONS, channel);
      const canResult = StageInstanceStore.isPublic(channel.id) && PermissionStore.can(StageChannelPermissions.JOIN_VOCAL_CHANNEL_PERMISSIONS, channel);
    }
    tmp2 = isLurkingResult;
  }
  return tmp2;
};