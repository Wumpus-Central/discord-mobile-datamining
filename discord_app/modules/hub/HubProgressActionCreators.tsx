// === Module 8670: HubProgressActionCreators ===

// Module 8670 (HubProgressActionCreators)
import FlagUtils from "FlagUtils" /* 1402 */;
import GuildStore from "GuildStore" /* 2086 */;

const require = globalThis.__r;

require = fn;
const HUB_PROGRESS_STEP_ORDER = fn(8671).HUB_PROGRESS_STEP_ORDER;
const GuildFeatures = fn(1085).GuildFeatures;
const size = fn(2);
let result = size.fileFinishedImporting("modules/hub/HubProgressActionCreators.tsx");

export const setHubProgressActionComplete = function setHubProgressActionComplete(guildId, INVITE_USER) {
  if (null != guildId) {
    guild = GuildStore.getGuild(guildId);
    let hasItem = null != guild;
    if (hasItem) {
      const features = guild.features;
      hasItem = features.has(GuildFeatures.HUB);
    }
    if (hasItem) {
      const items = [INVITE_USER];
      const result = items(2045).updateUserGuildSettings(guildId, (hubProgress) => {
        let flag = false;
        for (const item10008 of closure_0) {
          let obj = FlagUtils;
          if (!obj.hasFlag(arg0.hubProgress, item10008)) {
            let tmp2Result = FlagUtils;
            arg0.hubProgress = tmp2Result.addFlag(arg0.hubProgress, item10008);
            flag = true;
          }
          continue;
        }
        return flag;
      }, items(2045).UserSettingsDelay.INFREQUENT_USER_ACTION);
      const obj = items(2045);
    }
  }
};
export const skipHubProgress = function skipHubProgress(id) {
  _require = HUB_PROGRESS_STEP_ORDER;
  const result = require("UserSettingsProtoActionCreators").updateUserGuildSettings(id, (hubProgress) => {
    let flag = false;
    for (const item10008 of closure_0) {
      let obj = FlagUtils;
      if (!obj.hasFlag(arg0.hubProgress, item10008)) {
        let tmp2Result = FlagUtils;
        arg0.hubProgress = tmp2Result.addFlag(arg0.hubProgress, item10008);
        flag = true;
      }
      continue;
    }
    return flag;
  }, require("UserSettingsProtoActionCreators").UserSettingsDelay.INFREQUENT_USER_ACTION);
};