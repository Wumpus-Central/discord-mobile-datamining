// === Module 9395: handleNSFWGuildInvite ===

// Module 9395 (handleNSFWGuildInvite)
import PlatformUtils from "PlatformUtils" /* 1364 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5902 */;
import NsfwGateGuildAlert from "NsfwGateGuildAlert" /* 9397 */;
import TinyBroncoExperiment from "TinyBroncoExperiment" /* 9399 */;
import NsfwServerInviteWarningAlert from "NsfwServerInviteWarningAlert" /* 9400 */;
import GuildStore from "GuildStore" /* 2067 */;

const require = globalThis.__r;

require = fn;
const GuildNSFWContentLevel = fn(1074).GuildNSFWContentLevel;
let closure_4 = fn(9396).TINY_BRONCO_NSFW_SERVER_LOCATION;
const items = [, ];
({ EXPLICIT: arr[0], AGE_RESTRICTED: arr[1] } = GuildNSFWContentLevel);
const set = new Set(items);
const size = fn(2);
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
    const guild = invite.guild;
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
    if (null == GuildStore.getGuild(id)) {
      if (obj6.isIOS()) {
        const result = NsfwGateGuildAlert.showNsfwGateGuildAlert(id);
        if (onCancel != null) {
          onCancel();
        }
        return true;
      } else {
        if (tmp9Result4.hasAgeGatedFeatures()) {
          if (tmp9Result5.isTinyBroncoEnabled(closure_4)) {
            c2 = false;
            const obj = {
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
            const result1 = NsfwServerInviteWarningAlert.showNsfwServerInviteWarningAlert(obj);
            return true;
          } else {
            return false;
          }
          tmp9Result5 = TinyBroncoExperiment;
        } else {
          return false;
        }
        tmp9Result4 = RegionalFeatureConfigUtils;
      }
      obj6 = PlatformUtils;
    }
  }
  return false;
};