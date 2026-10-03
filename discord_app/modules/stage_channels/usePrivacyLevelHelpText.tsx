// === Module 9476: usePrivacyLevelHelpText ===

// Module 9476 (usePrivacyLevelHelpText)
import BigFlagUtilsAll from "BigFlagUtils" /* 1097 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2115 */;
import PermissionUtilsAll from "PermissionUtils" /* 4514 */;
import PermissionStore from "PermissionStore" /* 4509 */;

const require = globalThis.__r;

const require = fn;
const HelpdeskArticles = fn(1085).HelpdeskArticles;
const constants = fn(2057).GuildScheduledEventPrivacyLevel;
const Permissions = fn(1096).Permissions;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/usePrivacyLevelHelpText.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((channel, privacy_level, arg2) => {
  _require = channel;
  const cResult = require("c").c(14);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel) {
    const fn = function _() {
      return PermissionStore.can(Permissions.CREATE_INSTANT_INVITE, closure_0);
    };
    cResult[1] = channel;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
  if (cResult[3] !== channel) {
    const obj3 = PermissionUtilsAll;
    const canEveryoneRoleResult = obj3.canEveryoneRole(BigFlagUtilsAll.combine(Permissions.VIEW_CHANNEL, Permissions.CONNECT), channel);
    cResult[3] = channel;
    cResult[4] = canEveryoneRoleResult;
    let tmp8 = canEveryoneRoleResult;
  } else {
    tmp8 = cResult[4];
  }
  if (cResult[5] === tmp8) {
    if (cResult[6] === stateFromStores) {
      if (cResult[7] === arg2) {
        privacy_level = undefined;
        if (privacy_level != null) {
          privacy_level = privacy_level.privacy_level;
        }
        if (cResult[8] === privacy_level) {
          let tmp14 = cResult[9];
        }
        let privacy_level1;
        if (privacy_level != null) {
          privacy_level1 = privacy_level.privacy_level;
        }
        let tmp26 = !stateFromStores;
        if (stateFromStores) {
          tmp26 = !tmp8;
        }
        if (cResult[10] === tmp14) {
          if (cResult[11] === tmp27) {
            if (cResult[12] === tmp26) {
              let tmp28 = cResult[13];
            }
            return tmp28;
          }
        }
        const obj2 = { helpText: tmp14, guildOnlyDisabled: privacy_level1 === constants.PUBLIC, publicDisabled: tmp26 };
        cResult[10] = tmp14;
        cResult[11] = privacy_level1 === constants.PUBLIC;
        cResult[12] = tmp26;
        cResult[13] = obj2;
        tmp28 = obj2;
      }
    }
  }
  let privacy_level2;
  if (privacy_level != null) {
    privacy_level2 = privacy_level.privacy_level;
  }
  let formatResult = constants;
  if (privacy_level2 === constants.PUBLIC) {
    const intl4 = tmp(1126).intl;
    let stringResult = intl4.string(tmp(1126).t.GFq5Rg);
  } else if (stateFromStores) {
    if (tmp8) {
      formatResult = null;
      if (arg2 === formatResult.PUBLIC) {
        const intl3 = tmp(1126).intl;
        const obj5 = { articleURL: HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.STAGE_CHANNEL_GUIDELINES) };
        formatResult = intl3.format(tmp(1126).t["ew/Jq4"], obj5);
      }
      let stringResult1 = formatResult;
    } else {
      const intl2 = tmp(1126).intl;
      stringResult1 = intl2.string(tmp(1126).t.E5T7a3);
    }
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
  tmp14 = stringResult;
  const tmpResult = require("initialize");
}) : ((channel, privacy_level, arg2) => {
  _require = channel;
  const items = [PermissionStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => PermissionStore.can(Permissions.CREATE_INSTANT_INVITE, closure_0));
  const obj = require("initialize");
  const obj2 = PermissionUtilsAll;
  const canEveryoneRoleResult = obj2.canEveryoneRole(BigFlagUtilsAll.combine(Permissions.VIEW_CHANNEL, Permissions.CONNECT), channel);
  privacy_level = undefined;
  if (privacy_level != null) {
    privacy_level = privacy_level.privacy_level;
  }
  if (privacy_level === constants.PUBLIC) {
    const intl4 = tmp(1126).intl;
    let stringResult = intl4.string(tmp(1126).t.GFq5Rg);
  } else if (stateFromStores) {
    if (canEveryoneRoleResult) {
      let formatResult = null;
      if (arg2 === constants.PUBLIC) {
        const intl3 = tmp(1126).intl;
        const obj4 = { articleURL: HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.STAGE_CHANNEL_GUIDELINES) };
        formatResult = intl3.format(tmp(1126).t["ew/Jq4"], obj4);
      }
      let stringResult1 = formatResult;
    } else {
      const intl2 = tmp(1126).intl;
      stringResult1 = intl2.string(tmp(1126).t.E5T7a3);
    }
  } else {
    const intl = tmp(1126).intl;
    stringResult = intl.string(tmp(1126).t.BOjr7t);
  }
  const obj6 = { helpText: stringResult, guildOnlyDisabled: null, publicDisabled: null };
  let privacy_level1;
  if (privacy_level != null) {
    privacy_level1 = privacy_level.privacy_level;
  }
  obj6.guildOnlyDisabled = privacy_level1 === constants.PUBLIC;
  let tmp15 = !stateFromStores;
  if (stateFromStores) {
    tmp15 = !canEveryoneRoleResult;
  }
  obj6.publicDisabled = tmp15;
  return obj6;
});