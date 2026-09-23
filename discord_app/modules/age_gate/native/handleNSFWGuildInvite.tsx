// === Module 10117: handleNSFWGuildInvite ===

// Module 10117 (handleNSFWGuildInvite)
import PlatformUtils from "PlatformUtils" /* 1364 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5030 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5726 */;
import TinyBroncoExperiment from "TinyBroncoExperiment" /* 10122 */;
import NsfwServerInviteWarningAlert from "NsfwServerInviteWarningAlert" /* 10123 */;
import GuildStore from "GuildStore" /* 2064 */;

const require = globalThis.__r;

require = fn;
const GuildNSFWContentLevel = fn(1074).GuildNSFWContentLevel;
let closure_5 = fn(10118).TINY_BRONCO_NSFW_SERVER_LOCATION;
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
      if (obj7.isIOS()) {
        const obj = { guildId: id };
        ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(10119, dependencyMap.paths), obj);
        if (onCancel != null) {
          onCancel();
        }
        return true;
      } else {
        if (tmp10Result.hasAgeGatedFeatures()) {
          if (tmp10Result3.isTinyBroncoEnabled(closure_5)) {
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
            const result = NsfwServerInviteWarningAlert.showNsfwServerInviteWarningAlert(obj2);
            return true;
          } else {
            return false;
          }
          tmp10Result3 = TinyBroncoExperiment;
        } else {
          return false;
        }
        tmp10Result = RegionalFeatureConfigUtils;
      }
      obj7 = PlatformUtils;
    }
  }
  return false;
};