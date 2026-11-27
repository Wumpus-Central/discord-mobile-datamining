// === Module 9586: age_gate/AgeGateUtils ===

// Module 9586 (age_gate/AgeGateUtils)
import PlatformUtils from "PlatformUtils" /* 1379 */;
import AgeRestrictedContentSettingsUtils from "AgeRestrictedContentSettingsUtils" /* 7570 */;
import GuildStore from "GuildStore" /* 4914 */;
import PermissionStore from "PermissionStore" /* 4975 */;
import UserStore from "UserStore" /* 1387 */;

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
        let tmp11 = guild.nsfwLevel === constants.AGE_RESTRICTED || guild.nsfwLevel === tmp10.EXPLICIT;
        let nsfwAllowed = currentUser.nsfwAllowed;
        if (nsfwAllowed) {
          nsfwAllowed = AgeRestrictedContentSettingsUtils.getViewNsfwGuildsOrDefault();
          const tmpResult = AgeRestrictedContentSettingsUtils;
        }
        let tmp12 = !tmp9;
        if (!tmp9) {
          if (tmp11) {
            tmp11 = !nsfwAllowed;
          }
          tmp12 = tmp11;
        }
        return tmp12;
      }
    }
    return false;
  } else {
    return false;
  }
  obj = PlatformUtils;
}