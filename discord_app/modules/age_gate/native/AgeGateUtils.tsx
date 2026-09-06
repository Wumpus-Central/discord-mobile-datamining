// discord_app/modules/age_gate/native/AgeGateUtils.tsx
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

const asyncRequireImpl = tmp(1896);
const AgeRestrictedContentSettingsUtils = tmp(9296);
require = fn;
const Constants = fn(1074);
const GuildNSFWContentLevel = Constants.GuildNSFWContentLevel;
const Permissions = Constants.Permissions;
const items = [,];
({ EXPLICIT: arr[0], AGE_RESTRICTED: arr[1] } = GuildNSFWContentLevel);
const set = new Set(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_gate/native/AgeGateUtils.tsx");

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
  let obj = PlatformUtils;
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
      tmp10 = null != GuildStore.getGuild(id);
    }
    let flag2 = !tmp10;
    if (!tmp10) {
      id = undefined;
      const obj2 = ModalActionCreatorsDefault;
      if (invite != null) {
        const guild3 = invite.guild;
        if (guild3 != null) {
          id = guild3.id;
        }
      }
      obj = { guildId: id };
      obj2.pushLazy(asyncRequireImpl(10295, tmp2.paths), obj);
      flag2 = true;
      const tmp12 = asyncRequireImpl(10295, tmp2.paths);
    }
    return flag2;
  } else {
    return false;
  }
  tmp2 = dependencyMap;
};
export const shouldNSFWGateGuild = function shouldNSFWGateGuild(guildId) {
  if (obj.isIOS()) {
    const guild = GuildStore.getGuild(guildId);
    const currentUser = UserStore.getCurrentUser();
    if (null != guild) {
      if (null != currentUser) {
        const tmp9 =
          PermissionStore.can(Permissions.ADMINISTRATOR, guild) ||
          PermissionStore.can(Permissions.MANAGE_GUILD, guild) ||
          PermissionStore.can(Permissions.KICK_MEMBERS, guild) ||
          PermissionStore.can(Permissions.BAN_MEMBERS, guild);
        let nsfwAllowed = currentUser.nsfwAllowed;
        if (nsfwAllowed) {
          nsfwAllowed = AgeRestrictedContentSettingsUtils.getViewNsfwGuildsOrDefault();
          const tmpResult = AgeRestrictedContentSettingsUtils;
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
  obj = PlatformUtils;
};
