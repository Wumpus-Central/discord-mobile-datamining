// === Module 8651: useStagePrivacyLevelSettings ===

// Module 8651 (useStagePrivacyLevelSettings)
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import { HelpdeskArticles } from "ME";
import { GuildScheduledEventPrivacyLevel as closure_6 } from "GUILD_EVENT_MAX_NAME_LENGTH";
import { Permissions } from "sum";

const require = arg1;
const result = require("GUILD_EVENT_MAX_NAME_LENGTH").fileFinishedImporting("modules/stage_channels/usePrivacyLevelHelpText.tsx");

export default function useStagePrivacyLevelSettings(channel, privacy_level) {
  const _require = channel;
  let obj = _require(589);
  const items = [getUncachedChannelPermissions];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.can(outer1_7.CREATE_INSTANT_INVITE, closure_0));
  const obj2 = importAll(3888);
  const canEveryoneRoleResult = obj2.canEveryoneRole(importAll(506).combine(Permissions.VIEW_CHANNEL, Permissions.CONNECT), channel);
  privacy_level = undefined;
  if (privacy_level != null) {
    privacy_level = privacy_level.privacy_level;
  }
  if (privacy_level === constants.PUBLIC) {
    const intl4 = tmp(1236).intl;
    let stringResult = intl4.string(tmp(1236).t.GFq5Rg);
  } else if (stateFromStores) {
    if (canEveryoneRoleResult) {
      let formatResult = null;
      if (arg2 === tmp6.PUBLIC) {
        const intl3 = tmp(1236).intl;
        obj = { articleURL: null };
        obj[0] = importDefault(1945).getArticleURL(HelpdeskArticles.STAGE_CHANNEL_GUIDELINES);
        formatResult = intl3.format(tmp(1236).t["ew/Jq4"], obj);
        const obj5 = importDefault(1945);
      }
      let stringResult1 = formatResult;
    } else {
      const intl2 = tmp(1236).intl;
      stringResult1 = intl2.string(tmp(1236).t.E5T7a3);
    }
  } else {
    const intl = tmp(1236).intl;
    stringResult = intl.string(tmp(1236).t.BOjr7t);
  }
  obj = { helpText: stringResult, guildOnlyDisabled: null, publicDisabled: null };
  let privacy_level1;
  if (privacy_level != null) {
    privacy_level1 = privacy_level.privacy_level;
  }
  obj[1] = privacy_level1 === constants.PUBLIC;
  let tmp15 = !stateFromStores;
  if (stateFromStores) {
    tmp15 = !canEveryoneRoleResult;
  }
  obj[2] = tmp15;
  return obj;
};