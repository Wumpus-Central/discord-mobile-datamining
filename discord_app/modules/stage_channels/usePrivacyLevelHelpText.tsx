// === Module 9489: usePrivacyLevelHelpText ===

// Module 9489 (usePrivacyLevelHelpText)
import Constants from "Constants" /* 1085 */;
import Constants2 from "Constants" /* 1096 */;
import BigFlagUtilsAll from "BigFlagUtils" /* 1097 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 2057 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2115 */;
import PermissionUtilsAll from "PermissionUtils" /* 4520 */;
import PermissionStore from "PermissionStore" /* 4515 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const HelpdeskArticles = Constants.HelpdeskArticles;
const constants = GuildScheduledEventsConstants.GuildScheduledEventPrivacyLevel;
const Permissions = Constants2.Permissions;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel, privacy_level, arg2) => {
  let first;
  let obj5;
  let stringResult;
  let tmp6;
  let tmp8;
  _require = channel;
  const obj = require("react");
  const cResult = obj.c(14);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel) {
    const fn = function _() {
      return PermissionStore.can(Permissions.CREATE_INSTANT_INVITE, channel);
    };
    cResult[1] = channel;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = require("get initialized");
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] !== channel) {
    const canEveryoneRole = PermissionUtilsAll.canEveryoneRole;
    PermissionUtilsAll;
    const obj3 = BigFlagUtilsAll;
    const canEveryoneRoleResult = canEveryoneRole(obj3.combine(Permissions.VIEW_CHANNEL, Permissions.CONNECT), channel);
    cResult[3] = channel;
    cResult[4] = canEveryoneRoleResult;
    tmp8 = canEveryoneRoleResult;
  } else {
    tmp8 = cResult[4];
  }
  if (cResult[5] === tmp8) {
    if (cResult[6] === stateFromStores) {
      if (cResult[7] === arg2) {
        let tmp16;
        privacy_level = undefined;
        const tmp13 = cResult[8];
        if (privacy_level != null) {
          privacy_level = privacy_level.privacy_level;
        }
        if (tmp13 === privacy_level) {
          tmp16 = cResult[9];
        }
        let privacy_level1;
        if (privacy_level != null) {
          privacy_level1 = privacy_level.privacy_level;
        }
        let tmp29 = !stateFromStores;
        const PUBLIC = constants.PUBLIC;
        if (stateFromStores) {
          tmp29 = !tmp8;
        }
        if (cResult[10] === tmp16) {
          if (cResult[11] === privacy_level1 === PUBLIC) {
            let tmp31;
            if (cResult[12] === tmp29) {
              tmp31 = cResult[13];
            }
            return tmp31;
          }
        }
        const obj2 = { helpText: tmp16, guildOnlyDisabled: privacy_level1 === PUBLIC, publicDisabled: tmp29 };
        cResult[10] = tmp16;
        cResult[11] = privacy_level1 === PUBLIC;
        cResult[12] = tmp29;
        cResult[13] = obj2;
        tmp31 = obj2;
      }
    }
  }
  let privacy_level2;
  if (privacy_level != null) {
    privacy_level2 = privacy_level.privacy_level;
  }
  if (privacy_level2 === constants.PUBLIC) {
    const intl4 = tmp(1126).intl;
    stringResult = intl4.string(tmp(1126).t.GFq5Rg);
  } else if (stateFromStores) {
    let stringResult1;
    if (tmp8) {
      let formatResult = null;
      if (arg2 === tmp18.PUBLIC) {
        const intl3 = tmp(1126).intl;
        const format = intl3.format;
        const obj4 = { articleURL: obj5.getArticleURL(HelpdeskArticles.STAGE_CHANNEL_GUIDELINES) };
        const prop = tmp(1126).t["ew/Jq4"];
        obj5 = HelpdeskUtilsDefault;
        formatResult = format(prop, obj4);
      }
      stringResult1 = formatResult;
    } else {
      const intl2 = tmp(1126).intl;
      stringResult1 = intl2.string(tmp(1126).t.E5T7a3);
    }
    stringResult = stringResult1;
  } else {
    const intl = tmp(1126).intl;
    stringResult = intl.string(tmp(1126).t.BOjr7t);
  }
  cResult[5] = tmp8;
  cResult[6] = stateFromStores;
  cResult[7] = arg2;
  let privacy_level3;
  if (privacy_level != null) {
    privacy_level3 = privacy_level.privacy_level;
  }
  cResult[8] = privacy_level3;
  cResult[9] = stringResult;
  tmp16 = stringResult;
}) : ((channel, privacy_level, arg2) => {
  let obj4;
  let privacy_level1;
  let stringResult;
  let tmp16;
  _require = channel;
  const items = [PermissionStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => PermissionStore.can(Permissions.CREATE_INSTANT_INVITE, channel));
  const canEveryoneRole = PermissionUtilsAll.canEveryoneRole;
  PermissionUtilsAll;
  const obj2 = BigFlagUtilsAll;
  const canEveryoneRoleResult = canEveryoneRole(obj2.combine(Permissions.VIEW_CHANNEL, Permissions.CONNECT), channel);
  privacy_level = undefined;
  if (privacy_level != null) {
    privacy_level = privacy_level.privacy_level;
  }
  if (privacy_level === constants.PUBLIC) {
    const intl4 = tmp(1126).intl;
    stringResult = intl4.string(tmp(1126).t.GFq5Rg);
  } else if (stateFromStores) {
    let stringResult1;
    if (canEveryoneRoleResult) {
      let formatResult = null;
      if (arg2 === constants.PUBLIC) {
        const intl3 = tmp(1126).intl;
        const format = intl3.format;
        const obj3 = { articleURL: obj4.getArticleURL(HelpdeskArticles.STAGE_CHANNEL_GUIDELINES) };
        const prop = tmp(1126).t["ew/Jq4"];
        obj4 = HelpdeskUtilsDefault;
        formatResult = format(prop, obj3);
      }
      stringResult1 = formatResult;
    } else {
      const intl2 = tmp(1126).intl;
      stringResult1 = intl2.string(tmp(1126).t.E5T7a3);
    }
    stringResult = stringResult1;
  } else {
    const intl = tmp(1126).intl;
    stringResult = intl.string(tmp(1126).t.BOjr7t);
  }
  const obj5 = { helpText: stringResult, guildOnlyDisabled: privacy_level1 === constants.PUBLIC, publicDisabled: tmp16 };
  privacy_level1 = undefined;
  if (privacy_level != null) {
    privacy_level1 = privacy_level.privacy_level;
  }
  tmp16 = !stateFromStores;
  if (stateFromStores) {
    tmp16 = !canEveryoneRoleResult;
  }
  return obj5;
});
const result = size.fileFinishedImporting("modules/stage_channels/usePrivacyLevelHelpText.tsx");

export default tmp2;