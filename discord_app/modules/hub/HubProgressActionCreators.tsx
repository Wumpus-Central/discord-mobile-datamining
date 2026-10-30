// === Module 9111: HubProgressActionCreators ===

// Module 9111 (HubProgressActionCreators)
import FlagUtils from "FlagUtils" /* 1397 */;
import GuildStore from "GuildStore" /* 4880 */;

const require = globalThis.__r;

require = fn;
const HUB_PROGRESS_STEP_ORDER = fn(9112).HUB_PROGRESS_STEP_ORDER;
const GuildFeatures = fn(1072).GuildFeatures;
const size = fn(2);
let result = size.fileFinishedImporting("modules/hub/HubProgressActionCreators.tsx");

export function setHubProgressActionComplete(guildId, JOIN_GUILD) {
  if (null != guildId) {
    const guild = GuildStore.getGuild(guildId);
    let hasItem = null != guild;
    if (hasItem) {
      const features = guild.features;
      hasItem = features.has(GuildFeatures.HUB);
    }
    if (hasItem) {
      const items = [JOIN_GUILD];
      const result = items(4839).updateUserGuildSettings(guildId, (hubProgress) => {
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
      }, items(4839).UserSettingsDelay.INFREQUENT_USER_ACTION);
      const obj = items(4839);
    }
  }
}
export function skipHubProgress(id) {
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
}