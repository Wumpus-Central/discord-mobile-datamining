// === Module 12160: handleNSFWGuildInvite ===

// Module 12160 (handleNSFWGuildInvite)
import Constants from "Constants" /* 1071 */;
import PlatformUtils from "PlatformUtils" /* 1379 */;
import GuildRecord from "GuildRecord" /* 4910 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5705 */;
import AgeNoticeConstants from "AgeNoticeConstants" /* 6836 */;
import AgeNoticeExperiment from "AgeNoticeExperiment" /* 6837 */;
import AgeRestrictedContentSettingsUtils from "AgeRestrictedContentSettingsUtils" /* 7570 */;
import NsfwGateGuildAlert from "NsfwGateGuildAlert" /* 12161 */;
import NsfwServerInviteWarningAlert from "NsfwServerInviteWarningAlert" /* 12162 */;
import GuildStore from "GuildStore" /* 4914 */;
import UserStore from "UserStore" /* 1387 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const isGuildLurker = GuildRecord.isGuildLurker;
const GuildNSFWContentLevel = Constants.GuildNSFWContentLevel;
let closure_6 = AgeNoticeConstants.AGE_NOTICE_NSFW_SERVER_LOCATION;
const items = [, ];
({ EXPLICIT: arr[0], AGE_RESTRICTED: arr[1] } = GuildNSFWContentLevel);
const set = new Set(items);
let result = size.fileFinishedImporting("modules/age_gate/native/handleNSFWGuildInvite.tsx");

export function isNSFWInvite(guild) {
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
}
export function handleNSFWGuildInvite(invite, arg1) {
  ({ onConfirm: require, onCancel } = arg1);
  c2 = undefined;
  if (invite != null) {
    guild = invite.guild;
    if (guild != null) {
      const id = guild.id;
    }
  }
  let nsfw_level;
  if (invite != null) {
    const guild2 = invite.guild;
    if (guild2 != null) {
      nsfw_level = guild2.nsfw_level;
    }
  }
  if (nsfw_level == null) {
    nsfw_level = GuildNSFWContentLevel.DEFAULT;
  }
  if (set.has(nsfw_level)) {
    const guild1 = GuildStore.getGuild(id);
    const currentUser = UserStore.getCurrentUser();
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    let viewNsfwGuildsOrDefault = true === nsfwAllowed;
    if (viewNsfwGuildsOrDefault) {
      viewNsfwGuildsOrDefault = AgeRestrictedContentSettingsUtils.getViewNsfwGuildsOrDefault();
    }
    if (obj2.isIOS()) {
      if (!viewNsfwGuildsOrDefault) {
        let tmp14 = null != guild1;
        if (tmp14) {
          tmp14 = !isGuildLurker(guild1);
        }
        let flag3 = !tmp14;
        if (!tmp14) {
          const result = NsfwGateGuildAlert.showNsfwGateGuildAlert(id);
          flag3 = true;
          if (onCancel != null) {
            onCancel();
            flag3 = true;
          }
          const tmp12Result = NsfwGateGuildAlert;
        }
        return flag3;
      }
    }
    if (null != guild1) {
      return false;
    } else {
      if (tmp12Result4.hasAgeGatedFeatures()) {
        if (tmp12Result5.isAgeNoticeEnabled(closure_6)) {
          c2 = false;
          const obj3 = {
            onConfirm() {
                      c2 = true;
                      require();
                    },
            onDismiss() {
                      if (!c2) {
                        if (onCancel != null) {
                          tmp();
                        }
                      }
                    }
          };
          const result1 = NsfwServerInviteWarningAlert.showNsfwServerInviteWarningAlert(obj3);
          return true;
        } else {
          return false;
        }
        tmp12Result5 = AgeNoticeExperiment;
      } else {
        return false;
      }
      tmp12Result4 = RegionalFeatureConfigUtils;
    }
    obj2 = PlatformUtils;
  } else {
    return false;
  }
}