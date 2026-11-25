// === Module 9543: age_gate/AgeGateUtils ===

// Module 9543 (age_gate/AgeGateUtils)
import PlatformUtils from "PlatformUtils" /* 1378 */;
import AgeRestrictedContentSettingsUtils from "AgeRestrictedContentSettingsUtils" /* 7539 */;
import GuildStore from "GuildStore" /* 4883 */;
import PermissionStore from "PermissionStore" /* 4944 */;
import UserStore from "UserStore" /* 1386 */;

require = fn;
const Constants = fn(1071);
({ GuildNSFWContentLevel: hasOwnProperty, Permissions: closure_6 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_gate/native/AgeGateUtils.tsx");

export function shouldNSFWGateGuild(guildId) {
  if (obj.isIOS()) {
    guild = GuildStore.getGuild(guildId);
    const currentUser = UserStore.getCurrentUser();
    if (null != guild) {
      if (null != currentUser) {
        const tmp9 = PermissionStore.can(constants2.ADMINISTRATOR, guild) || PermissionStore.can(constants2.MANAGE_GUILD, guild) || PermissionStore.can(constants2.KICK_MEMBERS, guild) || PermissionStore.can(constants2.BAN_MEMBERS, guild);
        let nsfwAllowed = currentUser.nsfwAllowed;
        if (nsfwAllowed) {
          nsfwAllowed = AgeRestrictedContentSettingsUtils.getViewNsfwGuildsOrDefault();
          const tmpResult = AgeRestrictedContentSettingsUtils;
        }
        let tmp11 = !tmp9;
        if (!tmp9) {
          let tmp12 = guild.nsfwLevel === constants.EXPLICIT;
          if (!tmp12) {
            tmp12 = guild.nsfwLevel === constants.AGE_RESTRICTED && !nsfwAllowed;
            const tmp13 = guild.nsfwLevel === constants.AGE_RESTRICTED && !nsfwAllowed;
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
}