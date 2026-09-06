// === Module 9815: usePrivacyLevelHelpText ===

// Module 9815 (usePrivacyLevelHelpText)
import BigFlagUtilsAll from "BigFlagUtils" /* 1086 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2024 */;
import PermissionUtilsAll from "PermissionUtils" /* 4204 */;
import PermissionStore from "PermissionStore" /* 4199 */;

const require = fn;
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const constants = fn(1963).GuildScheduledEventPrivacyLevel;
const Permissions = fn(1085).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/usePrivacyLevelHelpText.tsx");

export default function useStagePrivacyLevelSettings(channel, privacy_level, arg2) {
  _require = channel;
  let obj = require("initialize");
  const items = [PermissionStore];
  const stateFromStores = obj.useStateFromStores(items, () => PermissionStore.can(Permissions.CREATE_INSTANT_INVITE, closure_0));
  const obj2 = PermissionUtilsAll;
  const canEveryoneRoleResult = obj2.canEveryoneRole(BigFlagUtilsAll.combine(Permissions.VIEW_CHANNEL, Permissions.CONNECT), channel);
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
      if (arg2 === constants.PUBLIC) {
        const intl3 = tmp(1114).intl;
        obj = { articleURL: HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.STAGE_CHANNEL_GUIDELINES) };
        formatResult = intl3.format(tmp(1114).t["ew/Jq4"], obj);
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
  obj.guildOnlyDisabled = privacy_level1 === constants.PUBLIC;
  let tmp15 = !stateFromStores;
  if (stateFromStores) {
    tmp15 = !canEveryoneRoleResult;
  }
  obj.publicDisabled = tmp15;
  return obj;
};