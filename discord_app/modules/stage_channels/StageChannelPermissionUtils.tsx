// === Module 4986: createModeratorOverwrite ===

// Module 4986 (createModeratorOverwrite)
import fromStringAll from "fromString" /* 506 */;
import Permissions from "Permissions" /* 1399 */;
import applyOverwritesAll from "applyOverwrites" /* 4026 */;
import initialize from "initialize" /* 4022 */;
import { isGuildOwner } from "GuildNSFWContentLevel" /* 1434 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import getUncachedChannelPermissions from "getUncachedChannelPermissions" /* 4021 */;
import handleStageInstanceCreateOrUpdate from "handleStageInstanceCreateOrUpdate" /* 1396 */;
import ME from "ME" /* 676 */;

require = fn;
({ GuildFeatures: c10, Permissions: unpackModuleId } = ME);
const result = require("obj132").fileFinishedImporting("modules/stage_channels/StageChannelPermissionUtils.tsx");

export const createModeratorOverwrite = function createModeratorOverwrite(id, MEMBER, c0) {
  let tmp;
  if (_require != null) {
    tmp = _require.permissionOverwrites[id];
  }
  const obj = { id, type: MEMBER, deny: null, allow: null };
  let deny;
  if (tmp != null) {
    deny = tmp.deny;
  }
  if (deny == null) {
    deny = applyOverwritesAll.NONE;
  }
  obj[2] = fromStringAll.remove(deny, Permissions.MODERATE_STAGE_CHANNEL_PERMISSIONS);
  let allow;
  if (tmp != null) {
    allow = tmp.allow;
  }
  if (allow == null) {
    allow = applyOverwritesAll.NONE;
  }
  obj[3] = fromStringAll.combine(Permissions.MODERATE_STAGE_CHANNEL_PERMISSIONS, allow);
  return obj;
};
export const createOrUpdateModeratorOverwrite = function createOrUpdateModeratorOverwrite(id, type, deny) {
  const obj = { id, type, deny: null, allow: null };
  deny = undefined;
  if (deny != null) {
    deny = deny.deny;
  }
  if (deny == null) {
    deny = applyOverwritesAll.NONE;
  }
  obj[2] = fromStringAll.remove(deny, Permissions.MODERATE_STAGE_CHANNEL_PERMISSIONS);
  let allow;
  if (deny != null) {
    allow = deny.allow;
  }
  if (allow == null) {
    allow = applyOverwritesAll.NONE;
  }
  obj[3] = fromStringAll.combine(Permissions.MODERATE_STAGE_CHANNEL_PERMISSIONS, allow);
  return obj;
};
export const removeModeratorOverwrite = function removeModeratorOverwrite(id, MEMBER, closure_0) {
  let tmp;
  if (_require != null) {
    tmp = _require.permissionOverwrites[id];
  }
  const obj = { id, type: MEMBER, deny: null, allow: null };
  let deny;
  if (tmp != null) {
    deny = tmp.deny;
  }
  if (deny == null) {
    deny = applyOverwritesAll.NONE;
  }
  obj[2] = deny;
  let allow;
  if (tmp != null) {
    allow = tmp.allow;
  }
  if (allow == null) {
    allow = applyOverwritesAll.NONE;
  }
  obj[3] = fromStringAll.remove(allow, Permissions.MODERATE_STAGE_CHANNEL_PERMISSIONS);
  return obj;
};
export const isEmptyOverwrite = function isEmptyOverwrite(c2) {
  ({ allow, deny } = c2);
  let equalsResult = fromStringAll.equals(allow, applyOverwritesAll.NONE);
  if (equalsResult) {
    equalsResult = fromStringAll.equals(deny, applyOverwritesAll.NONE);
    const tmpResult = fromStringAll;
  }
  return equalsResult;
};
export const useCanCreateStageChannelByGuild = function useCanCreateStageChannelByGuild(guildId) {
  const _require = guildId;
  const items = [closure_8, closure_5, closure_7];
  const items1 = [guildId];
  return _require(589).useStateFromStores(items, () => {
    const id = closure_1_5.getId();
    const guild = closure_1_7.getGuild(guildId);
    let tmp3 = null != guild;
    if (tmp3) {
      const features = guild.features;
      let hasItem = features.has(closure_1_10.COMMUNITY);
      if (hasItem) {
        let canResult = isGuildOwner(guild, id);
        if (!canResult) {
          canResult = closure_1_8.can(guildId(dependencyMap[10]).CREATE_STAGE_CHANNEL_PERMISSIONS, guild);
        }
        hasItem = canResult;
      }
      tmp3 = hasItem;
    }
    return tmp3;
  }, items1);
};
export const useCanUpdateStageChannelModerators = function useCanUpdateStageChannelModerators(id) {
  const _require = id;
  const items = [closure_8, closure_7, closure_6];
  const items1 = [id];
  return _require(589).useStateFromStores(items, () => {
    const channel = closure_1_6.getChannel(id);
    let guildId;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    let canResult = closure_1_8.can(closure_1_11.ADMINISTRATOR, closure_1_7.getGuild(guildId));
    let tmp5 = !canResult;
    if (!canResult) {
      tmp5 = !closure_1_8.can(closure_1_11.MANAGE_ROLES, channel, undefined, undefined, true);
    }
    canResult = !tmp5;
    if (tmp5) {
      canResult = closure_1_8.can(id(dependencyMap[10]).UPDATE_STAGE_CHANNEL_MODERATOR_PERMISSIONS, channel);
    }
    return canResult;
  }, items1);
};
export const useCanModerateRequestToSpeak = function useCanModerateRequestToSpeak(id) {
  const _require = id;
  const items = [closure_6, closure_8];
  const items1 = [id];
  return _require(589).useStateFromStores(items, () => {
    let canResult = null != closure_0;
    if (canResult) {
      canResult = closure_1_8.can(closure_1_11.MUTE_MEMBERS, closure_1_6.getChannel(tmp));
    }
    return canResult;
  }, items1);
};
export const canLurkerListen = function canLurkerListen(channel) {
  const tmp = null == channel || !channel.isGuildStageVoice();
  let tmp2 = !tmp;
  if (!tmp) {
    let isLurkingResult = lurking.isLurking(channel.guild_id);
    if (isLurkingResult) {
      let canResult = _public.isPublic(channel.id);
      if (canResult) {
        canResult = closure_8.can(Permissions.JOIN_VOCAL_CHANNEL_PERMISSIONS, channel);
      }
      isLurkingResult = canResult;
    }
    tmp2 = isLurkingResult;
  }
  return tmp2;
};