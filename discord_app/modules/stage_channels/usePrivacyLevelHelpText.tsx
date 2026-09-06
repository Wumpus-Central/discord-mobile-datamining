// === Module 9815: useStagePrivacyLevelSettings ===

// Module 9815 (useStagePrivacyLevelSettings)
import fromStringAll from "fromString" /* 1086 */;
import combinedDefault from "combined" /* 2024 */;
import applyOverwritesAll from "applyOverwrites" /* 4204 */;
import closure_4 from "getUncachedChannelPermissions" /* 4199 */;
import { HelpdeskArticles } from "ME" /* 1074 */;
import { GuildScheduledEventPrivacyLevel as closure_6 } from "GUILD_EVENT_MAX_NAME_LENGTH" /* 1963 */;
import { Permissions } from "sum" /* 1085 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/stage_channels/usePrivacyLevelHelpText.tsx");

export default function useStagePrivacyLevelSettings(channel, privacy_level) {
  const _require = channel;
  let obj = _require(504);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_4.can(closure_1_7.CREATE_INSTANT_INVITE, closure_0));
  const obj2 = applyOverwritesAll;
  const canEveryoneRoleResult = obj2.canEveryoneRole(fromStringAll.combine(Permissions.VIEW_CHANNEL, Permissions.CONNECT), channel);
  privacy_level = undefined;
  if (privacy_level != null) {
    privacy_level = privacy_level.privacy_level;
  }
  if (privacy_level === constants.PUBLIC) {
    const intl4 = tmp(1114).intl;
    let stringResult = intl4.string(tmp(1114).t.GFq5Rg);
  } else if (stateFromStores) {
    if (canEveryoneRoleResult) {
      let formatResult = null;
      if (arg2 === tmp6.PUBLIC) {
        const intl3 = tmp(1114).intl;
        obj = { articleURL: null };
        obj[0] = combinedDefault.getArticleURL(HelpdeskArticles.STAGE_CHANNEL_GUIDELINES);
        formatResult = intl3.format(tmp(1114).t["ew/Jq4"], obj);
        const obj5 = combinedDefault;
      }
      let stringResult1 = formatResult;
    } else {
      const intl2 = tmp(1114).intl;
      stringResult1 = intl2.string(tmp(1114).t.E5T7a3);
    }
  } else {
    const intl = tmp(1114).intl;
    stringResult = intl.string(tmp(1114).t.BOjr7t);
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