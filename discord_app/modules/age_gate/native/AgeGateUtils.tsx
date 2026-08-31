// === Module 9092: GuildNSFWContentLevel ===

// Module 9092 (GuildNSFWContentLevel)
import set2 from "set" /* 500 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4691 from "module_4691" /* 4691 */;
import resolveNsfwTogglesWithDefaults from "resolveNsfwTogglesWithDefaults" /* 8120 */;
import closure_3 from "createGuildRecordFromRust" /* 1909 */;
import closure_4 from "getUncachedChannelPermissions" /* 4091 */;
import closure_5 from "mergeGuildAvatar" /* 1922 */;
import ME from "ME" /* 676 */;
import set from "set" /* 2 */;

require = arg1;
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
  let obj = set2;
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
      const obj2 = _modDef4691;
      if (invite != null) {
        const guild3 = invite.guild;
        if (guild3 != null) {
          id = guild3.id;
        }
      }
      obj = { guildId: null };
      obj[0] = id;
      obj2.pushLazy(asyncRequireImpl(9093, tmp2.paths), obj);
      flag2 = true;
      const tmp12 = asyncRequireImpl(9093, tmp2.paths);
    }
    return flag2;
  } else {
    return false;
  }
  const tmp = require;
  tmp2 = dependencyMap;
};
export const shouldNSFWGateGuild = function shouldNSFWGateGuild(guildId) {
  if (obj.isIOS()) {
    const guild = store.getGuild(guildId);
    currentUser = currentUser.getCurrentUser();
    if (null != guild) {
      if (null != currentUser) {
        const tmp9 = closure_4.can(Permissions.ADMINISTRATOR, guild) || closure_4.can(Permissions.MANAGE_GUILD, guild) || closure_4.can(Permissions.KICK_MEMBERS, guild) || closure_4.can(Permissions.BAN_MEMBERS, guild);
        let nsfwAllowed = currentUser.nsfwAllowed;
        if (nsfwAllowed) {
          nsfwAllowed = resolveNsfwTogglesWithDefaults.getViewNsfwGuildsOrDefault();
          const tmpResult = resolveNsfwTogglesWithDefaults;
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
  obj = set2;
  const tmp = require;
};