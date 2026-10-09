// === Module 9591: handleNSFWGuildInvite ===

// Module 9591 (handleNSFWGuildInvite)
import Constants from "Constants" /* 1085 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import GuildRecord from "GuildRecord" /* 2082 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5919 */;
import TinyBroncoConstants from "TinyBroncoConstants" /* 5934 */;
import TinyBroncoExperiment from "TinyBroncoExperiment" /* 5935 */;
import NsfwGateGuildAlert from "NsfwGateGuildAlert" /* 9592 */;
import NsfwServerInviteWarningAlert from "NsfwServerInviteWarningAlert" /* 9593 */;
import GuildStore from "GuildStore" /* 2086 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const isGuildLurker = GuildRecord.isGuildLurker;
const GuildNSFWContentLevel = Constants.GuildNSFWContentLevel;
let closure_5 = TinyBroncoConstants.TINY_BRONCO_NSFW_SERVER_LOCATION;
const items = [, ];
({ EXPLICIT: arr[0], AGE_RESTRICTED: arr[1] } = GuildNSFWContentLevel);
const set = new Set(items);
let result = size.fileFinishedImporting("modules/age_gate/native/handleNSFWGuildInvite.tsx");

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
export const handleNSFWGuildInvite = function handleNSFWGuildInvite(invite, arg1) {
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
    if (obj.isIOS()) {
      let tmp10 = null != guild1;
      if (tmp10) {
        tmp10 = !isGuildLurker(guild1);
      }
      let flag6 = !tmp10;
      if (!tmp10) {
        const result = NsfwGateGuildAlert.showNsfwGateGuildAlert(id);
        flag6 = true;
        if (onCancel != null) {
          onCancel();
          flag6 = true;
        }
        const tmp6Result = NsfwGateGuildAlert;
      }
      return flag6;
    } else if (null != guild1) {
      return false;
    } else {
      if (tmp6Result4.hasAgeGatedFeatures()) {
        if (tmp6Result5.isTinyBroncoEnabled(closure_5)) {
          c2 = false;
          const obj2 = {
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
          const result1 = NsfwServerInviteWarningAlert.showNsfwServerInviteWarningAlert(obj2);
          return true;
        } else {
          return false;
        }
        tmp6Result5 = TinyBroncoExperiment;
      } else {
        return false;
      }
      tmp6Result4 = RegionalFeatureConfigUtils;
    }
    obj = PlatformUtils;
  } else {
    return false;
  }
};