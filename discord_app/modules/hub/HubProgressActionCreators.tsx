// discord_app/modules/hub/HubProgressActionCreators.tsx
import createGuildRecordFromRust from "../../stores/GuildStore.tsx";
import { HUB_PROGRESS_STEP_ORDER } from "HubProgressBarConstants.tsx";
import { GuildFeatures } from "../../Constants.tsx";

const require = fn;
let result = require("obj132").fileFinishedImporting("modules/hub/HubProgressActionCreators.tsx");

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
          let obj = callback(dependencyMap[4]);
          if (!obj.hasFlag(arg0.hubProgress, item10008)) {
            let tmp2Result = callback(dependencyMap[4]);
            arg0.hubProgress = tmp2Result.addFlag(arg0.hubProgress, item10008);
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
  const result = require("../user_settings/UserSettingsProtoActionCreators.tsx").updateUserGuildSettings(id, (hubProgress) => {
    let flag = false;
    for (const item10008 of closure_0) {
      let obj = callback(dependencyMap[4]);
      if (!obj.hasFlag(arg0.hubProgress, item10008)) {
        let tmp2Result = callback(dependencyMap[4]);
        arg0.hubProgress = tmp2Result.addFlag(arg0.hubProgress, item10008);
        flag = true;
      }
      continue;
    }
    return flag;
  }, require("../user_settings/UserSettingsProtoActionCreators.tsx").UserSettingsDelay.INFREQUENT_USER_ACTION);
};