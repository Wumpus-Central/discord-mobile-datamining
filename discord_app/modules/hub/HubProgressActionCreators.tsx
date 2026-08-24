// === Module 11554: setHubProgressActionComplete ===

// Module 11554 (setHubProgressActionComplete)
import closure_2 from "createGuildRecordFromRust" /* 1910 */;
import { HUB_PROGRESS_STEP_ORDER } from "items" /* 11555 */;
import { GuildFeatures } from "ME" /* 676 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/hub/HubProgressActionCreators.tsx");

export const setHubProgressActionComplete = function setHubProgressActionComplete(guildId, JOIN_GUILD) {
  if (null != guildId) {
    guild = guild.getGuild(guildId);
    let hasItem = null != guild;
    if (hasItem) {
      const features = guild.features;
      hasItem = features.has(GuildFeatures.HUB);
    }
    if (hasItem) {
      const items = [JOIN_GUILD];
      const result = items(1374).updateUserGuildSettings(guildId, (hubProgress) => {
        let flag = false;
        for (const item10008 of closure_0) {
          let tmp = item10008;
          let tmp2 = callback;
          let tmp3 = closure_1_1;
          let obj = callback(closure_1_1[4]);
          if (!obj.hasFlag(arg0.hubProgress, item10008)) {
            let tmp2Result = tmp2(tmp3[4]);
            let tmp4 = item10008;
            arg0.hubProgress = tmp2Result.addFlag(arg0.hubProgress, tmp);
            flag = true;
          }
          continue;
        }
        return flag;
      }, items(1374).UserSettingsDelay.INFREQUENT_USER_ACTION);
      const obj = items(1374);
    }
  }
};
export const skipHubProgress = function skipHubProgress(id) {
  const _require = HUB_PROGRESS_STEP_ORDER;
  const result = _require(1374).updateUserGuildSettings(id, (hubProgress) => {
    let flag = false;
    for (const item10008 of closure_0) {
      let tmp = item10008;
      let tmp2 = callback;
      let tmp3 = closure_1_1;
      let obj = callback(closure_1_1[4]);
      if (!obj.hasFlag(arg0.hubProgress, item10008)) {
        let tmp2Result = tmp2(tmp3[4]);
        let tmp4 = item10008;
        arg0.hubProgress = tmp2Result.addFlag(arg0.hubProgress, tmp);
        flag = true;
      }
      continue;
    }
    return flag;
  }, _require(1374).UserSettingsDelay.INFREQUENT_USER_ACTION);
};