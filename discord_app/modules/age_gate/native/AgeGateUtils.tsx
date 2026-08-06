// discord_app/modules/age_gate/native/AgeGateUtils.tsx
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";
import set from "mergeGuildAvatar";
import { ModalActionCreators } from "../../../actions/ModalActionCreators.tsx";
import { set } from "../../../utils/PlatformUtils.tsx";

const require = arg1;
const GuildNSFWContentLevel = ME.GuildNSFWContentLevel;
const Permissions = ME.Permissions;
const items = [, ];
({ EXPLICIT: arr[0], AGE_RESTRICTED: arr[1] } = GuildNSFWContentLevel);
let set = new Set(items);
const result = set.fileFinishedImporting("modules/age_gate/native/AgeGateUtils.tsx");

export const isNSFWInvite = function isNSFWInvite(guild) {
  let nsfw_level;
  if (guild != null) {
    guild = guild.guild;
    if (guild != null) {
      nsfw_level = guild.nsfw_level;
    }
  }
  if (nsfw_level == null) {
    nsfw_level = GuildNSFWContentLevel.DEFAULT;
  }
  return set.has(nsfw_level);
};
export const handleNSFWGuildInvite = function handleNSFWGuildInvite(invite) {
  let obj = set;
  if (obj.isIOS()) {
    let nsfw_level;
    if (invite != null) {
      const guild = invite.guild;
      if (guild != null) {
        nsfw_level = guild.nsfw_level;
      }
    }
    if (nsfw_level == null) {
      nsfw_level = GuildNSFWContentLevel.DEFAULT;
    }
    const hasItem = set.has(nsfw_level);
    if (invite != null) {
      const guild2 = invite.guild;
      if (guild2 != null) {
        let id = guild2.id;
      }
    }
    let tmp10 = !hasItem;
    if (hasItem) {
      tmp10 = null != store.getGuild(id);
    }
    let flag2 = !tmp10;
    if (!tmp10) {
      id = undefined;
      const obj2 = ModalActionCreators;
      if (invite != null) {
        const guild3 = invite.guild;
        if (guild3 != null) {
          id = guild3.id;
        }
      }
      obj = { guildId: null };
      obj[0] = id;
      obj2.pushLazy(tmp(1988)(8603, tmp2.paths), obj);
      flag2 = true;
      const tmp12 = tmp(1988)(8603, tmp2.paths);
    }
    return flag2;
  } else {
    return false;
  }
  tmp = require;
  tmp2 = dependencyMap;
};
export const shouldNSFWGateGuild = function shouldNSFWGateGuild(guildId) {
  if (obj.isIOS()) {
    const guild = store.getGuild(guildId);
    currentUser = currentUser.getCurrentUser();
    if (null != guild) {
      if (null != currentUser) {
        const tmp9 = getUncachedChannelPermissions.can(Permissions.ADMINISTRATOR, guild) || getUncachedChannelPermissions.can(Permissions.MANAGE_GUILD, guild) || getUncachedChannelPermissions.can(Permissions.KICK_MEMBERS, guild) || getUncachedChannelPermissions.can(Permissions.BAN_MEMBERS, guild);
        let nsfwAllowed = currentUser.nsfwAllowed;
        if (nsfwAllowed) {
          nsfwAllowed = tmp(8268).getViewNsfwGuildsOrDefault();
          const tmpResult = tmp(8268);
        }
        let tmp11 = !tmp9;
        if (!tmp9) {
          let tmp12 = guild.nsfwLevel === GuildNSFWContentLevel.EXPLICIT;
          if (!tmp12) {
            tmp12 = guild.nsfwLevel === GuildNSFWContentLevel.AGE_RESTRICTED && !nsfwAllowed;
            const tmp13 = guild.nsfwLevel === GuildNSFWContentLevel.AGE_RESTRICTED && !nsfwAllowed;
          }
          tmp11 = tmp12;
        }
        return tmp11;
      }
    }
    return false;
  } else {
    return false;
  }
  obj = set;
  tmp = require;
};