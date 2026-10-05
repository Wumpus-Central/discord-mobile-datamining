// === Module 9420: handleNSFWGuildInvite ===

// Module 9420 (handleNSFWGuildInvite)
import Constants from "Constants" /* 1085 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5580 */;
import TinyBroncoConstants from "TinyBroncoConstants" /* 9421 */;
import NsfwGateGuildAlert from "NsfwGateGuildAlert" /* 9422 */;
import TinyBroncoExperiment from "TinyBroncoExperiment" /* 9424 */;
import NsfwServerInviteWarningAlert from "NsfwServerInviteWarningAlert" /* 9425 */;
import GuildStore from "GuildStore" /* 2074 */;
import size from "module_2" /* 2 */;

const GuildNSFWContentLevel = Constants.GuildNSFWContentLevel;
let closure_4 = TinyBroncoConstants.TINY_BRONCO_NSFW_SERVER_LOCATION;
const items = [, ];
({ EXPLICIT: arr[0], AGE_RESTRICTED: arr[1] } = GuildNSFWContentLevel);
const set = new Set(items);
let result = size.fileFinishedImporting("modules/age_gate/native/handleNSFWGuildInvite.tsx");

export const isNSFWInvite = function isNSFWInvite(guild) {
  let nsfw_level;
  const has = set.has;
  if (guild != null) {
    guild = guild.guild;
    if (guild != null) {
      nsfw_level = guild.nsfw_level;
    }
  }
  if (nsfw_level == null) {
    nsfw_level = GuildNSFWContentLevel.DEFAULT;
  }
  return has(nsfw_level);
};
export const handleNSFWGuildInvite = function handleNSFWGuildInvite(invite, arg1) {
  let closure_129_0;
  let id;
  let onCancel;
  ({ onConfirm: closure_129_0, onCancel } = arg1);
  let c2;
  if (invite != null) {
    const guild = invite.guild;
    if (guild != null) {
      id = guild.id;
    }
  }
  let nsfw_level;
  const has = set.has;
  if (invite != null) {
    const guild2 = invite.guild;
    if (guild2 != null) {
      nsfw_level = guild2.nsfw_level;
    }
  }
  if (nsfw_level == null) {
    nsfw_level = GuildNSFWContentLevel.DEFAULT;
  }
  if (has(nsfw_level)) {
    if (null == GuildStore.getGuild(id)) {
      const obj6 = PlatformUtils;
      if (obj6.isIOS()) {
        const tmp9Result = NsfwGateGuildAlert;
        const result = tmp9Result.showNsfwGateGuildAlert(id);
        if (onCancel != null) {
          onCancel();
        }
        return true;
      } else {
        const tmp9Result4 = RegionalFeatureConfigUtils;
        if (tmp9Result4.hasAgeGatedFeatures()) {
          const tmp9Result5 = TinyBroncoExperiment;
          if (tmp9Result5.isTinyBroncoEnabled(closure_4)) {
            c2 = false;
            const obj = {
              onConfirm() {
                          c2 = true;
                          closure_1_0();
                        },
              onDismiss() {
                          if (!c2) {
                            if (onCancel != null) {
                              tmp2();
                            }
                          }
                        }
            };
            const tmp9Result6 = NsfwServerInviteWarningAlert;
            const result1 = tmp9Result6.showNsfwServerInviteWarningAlert(obj);
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      }
    }
  }
  return false;
};