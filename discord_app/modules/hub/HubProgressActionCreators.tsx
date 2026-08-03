import createGuildRecordFromRust from "createGuildRecordFromRust";
import { HUB_PROGRESS_STEP_ORDER } from "items";
import { GuildFeatures } from "ME";

const require = arg1;
let result = require("ME").fileFinishedImporting("modules/hub/HubProgressActionCreators.tsx");

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
      const result = items(1355).updateUserGuildSettings(guildId, (hubProgress) => {
        let flag = false;
        for (const item10008 of closure_0) {
          let tmp = item10008;
          let tmp2 = callback;
          let tmp3 = outer1_1;
          let obj = callback(outer1_1[4]);
          if (!obj.hasFlag(arg0.hubProgress, item10008)) {
            let tmp2Result = tmp2(tmp3[4]);
            let tmp4 = item10008;
            arg0.hubProgress = tmp2Result.addFlag(arg0.hubProgress, tmp);
            flag = true;
          }
          continue;
        }
        return flag;
      }, items(1355).UserSettingsDelay.INFREQUENT_USER_ACTION);
      const obj = items(1355);
    }
  }
};
export const skipHubProgress = function skipHubProgress(id) {
  const _require = HUB_PROGRESS_STEP_ORDER;
  const result = _require(1355).updateUserGuildSettings(id, (hubProgress) => {
    let flag = false;
    for (const item10008 of closure_0) {
      let tmp = item10008;
      let tmp2 = callback;
      let tmp3 = outer1_1;
      let obj = callback(outer1_1[4]);
      if (!obj.hasFlag(arg0.hubProgress, item10008)) {
        let tmp2Result = tmp2(tmp3[4]);
        let tmp4 = item10008;
        arg0.hubProgress = tmp2Result.addFlag(arg0.hubProgress, tmp);
        flag = true;
      }
      continue;
    }
    return flag;
  }, _require(1355).UserSettingsDelay.INFREQUENT_USER_ACTION);
};