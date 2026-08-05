// discord_app/modules/stage_channels/StageChannelPermissionUtils.tsx
import initialize from "initialize";
import { isGuildOwner } from "GuildNSFWContentLevel";
import fetchFingerprint from "fetchFingerprint";
import ensureGuildLoaded from "ensureGuildLoaded";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import handleStageInstanceCreateOrUpdate from "handleStageInstanceCreateOrUpdate";
import ME from "ME";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";
import { Permissions } from "StageChannelPermissions.tsx";

let c10;
let unpackModuleId;
const require = arg1;
({ GuildFeatures: c10, Permissions: unpackModuleId } = ME);
const result = require("fetchFingerprint").fileFinishedImporting("modules/stage_channels/StageChannelPermissionUtils.tsx");

export const createModeratorOverwrite = function createModeratorOverwrite(id, MEMBER, c0) {
  let tmp;
  if (c0 != null) {
    tmp = c0.permissionOverwrites[id];
  }
  const obj = { id, type: MEMBER, deny: null, allow: null };
  let deny;
  if (tmp != null) {
    deny = tmp.deny;
  }
  if (deny == null) {
    deny = tmp2(3918).NONE;
  }
  obj[2] = importAll(506).remove(deny, Permissions /* Permissions */.MODERATE_STAGE_CHANNEL_PERMISSIONS);
  const obj2 = importAll(506);
  let allow;
  if (tmp != null) {
    allow = tmp.allow;
  }
  if (allow == null) {
    allow = tmp2(3918).NONE;
  }
  obj[3] = importAll(506).combine(Permissions /* Permissions */.MODERATE_STAGE_CHANNEL_PERMISSIONS, allow);
  return obj;
};
export const createOrUpdateModeratorOverwrite = function createOrUpdateModeratorOverwrite(id, type, deny) {
  const obj = { id, type, deny: null, allow: null };
  deny = undefined;
  if (deny != null) {
    deny = deny.deny;
  }
  if (deny == null) {
    deny = tmp(3918).NONE;
  }
  obj[2] = importAll(506).remove(deny, Permissions /* Permissions */.MODERATE_STAGE_CHANNEL_PERMISSIONS);
  const obj2 = importAll(506);
  let allow;
  if (deny != null) {
    allow = deny.allow;
  }
  if (allow == null) {
    allow = tmp(3918).NONE;
  }
  obj[3] = importAll(506).combine(Permissions /* Permissions */.MODERATE_STAGE_CHANNEL_PERMISSIONS, allow);
  return obj;
};
export const removeModeratorOverwrite = function removeModeratorOverwrite(id, MEMBER, closure_0) {
  let tmp;
  if (closure_0 != null) {
    tmp = closure_0.permissionOverwrites[id];
  }
  const obj = { id, type: MEMBER, deny: null, allow: null };
  let deny;
  if (tmp != null) {
    deny = tmp.deny;
  }
  if (deny == null) {
    deny = importAll(3918).NONE;
  }
  obj[2] = deny;
  let allow;
  if (tmp != null) {
    allow = tmp.allow;
  }
  if (allow == null) {
    allow = importAll(3918).NONE;
  }
  obj[3] = importAll(506).remove(allow, Permissions /* Permissions */.MODERATE_STAGE_CHANNEL_PERMISSIONS);
  return obj;
};
export const isEmptyOverwrite = function isEmptyOverwrite(c2) {
  let allow;
  let deny;
  ({ allow, deny } = c2);
  let equalsResult = importAll(506).equals(allow, importAll(3918).NONE);
  if (equalsResult) {
    equalsResult = tmp(506).equals(deny, tmp(3918).NONE);
    const tmpResult = tmp(506);
  }
  return equalsResult;
};
export const useCanCreateStageChannelByGuild = function useCanCreateStageChannelByGuild(guildId) {
  const _require = guildId;
  const items = [getUncachedChannelPermissions, fetchFingerprint, createGuildRecordFromRust];
  const items1 = [guildId];
  return _initialize.useStateFromStores(items, () => {
    const id = outer1_5.getId();
    const guild = outer1_7.getGuild(guildId);
    let tmp3 = null != guild;
    if (tmp3) {
      const features = guild.features;
      let hasItem = features.has(outer1_10.COMMUNITY);
      if (hasItem) {
        let canResult = outer1_4(guild, id);
        if (!canResult) {
          canResult = outer1_8.can(guildId(outer1_2[10]).CREATE_STAGE_CHANNEL_PERMISSIONS, guild);
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
  const items = [getUncachedChannelPermissions, createGuildRecordFromRust, ensureGuildLoaded];
  const items1 = [id];
  return _initialize.useStateFromStores(items, () => {
    const channel = outer1_6.getChannel(id);
    let guildId;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    let canResult = outer1_8.can(outer1_11.ADMINISTRATOR, outer1_7.getGuild(guildId));
    let tmp5 = !canResult;
    if (!canResult) {
      tmp5 = !obj2.can(outer1_11.MANAGE_ROLES, channel, undefined, undefined, true);
    }
    canResult = !tmp5;
    if (tmp5) {
      canResult = obj2.can(id(outer1_2[10]).UPDATE_STAGE_CHANNEL_MODERATOR_PERMISSIONS, channel);
    }
    return canResult;
  }, items1);
};
export const useCanModerateRequestToSpeak = function useCanModerateRequestToSpeak(id) {
  const _require = id;
  const items = [ensureGuildLoaded, getUncachedChannelPermissions];
  const items1 = [id];
  return _initialize.useStateFromStores(items, () => {
    let canResult = null != closure_0;
    if (canResult) {
      canResult = outer1_8.can(outer1_11.MUTE_MEMBERS, outer1_6.getChannel(tmp));
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
        canResult = getUncachedChannelPermissions.can(Permissions /* Permissions */.JOIN_VOCAL_CHANNEL_PERMISSIONS, channel);
      }
      isLurkingResult = canResult;
    }
    tmp2 = isLurkingResult;
  }
  return tmp2;
};