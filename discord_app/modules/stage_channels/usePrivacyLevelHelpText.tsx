// === Module 8653: usePrivacyLevelHelpText ===

// Module 8653 (usePrivacyLevelHelpText)
import BigFlagUtilsAll from "BigFlagUtils" /* 1097 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2127 */;
import PermissionUtilsAll from "PermissionUtils" /* 4712 */;
import PermissionStore from "PermissionStore" /* 4707 */;

const require = globalThis.__r;

const require = fn;
const HelpdeskArticles = fn(1085).HelpdeskArticles;
const constants = fn(2069).GuildScheduledEventPrivacyLevel;
const Permissions = fn(1096).Permissions;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/usePrivacyLevelHelpText.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useStagePrivacyLevelSettings(channel, arg1, arg2) {
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
    class E {
      constructor() {
        return closure_4.can(Permissions.CREATE_INSTANT_INVITE, closure_0);
      }
    }
    cResult[1] = channel;
    cResult[2] = E;
  } else {
    class E {
      constructor() {
        return closure_4.can(Permissions.CREATE_INSTANT_INVITE, closure_0);
      }
    }
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, E);
  if (cResult[3] !== channel) {
    class E {
      constructor() {
        return closure_4.can(Permissions.CREATE_INSTANT_INVITE, closure_0);
      }
    }
    const obj3 = PermissionUtilsAll;
    const canEveryoneRoleResult = obj3.canEveryoneRole(BigFlagUtilsAll.combine(Permissions.VIEW_CHANNEL, Permissions.CONNECT), channel);
    cResult[3] = channel;
    cResult[4] = canEveryoneRoleResult;
  } else {
    class E {
      constructor() {
        return closure_4.can(Permissions.CREATE_INSTANT_INVITE, closure_0);
      }
    }
  }
  if (cResult[5] === tmp8) {
    class E {
      constructor() {
        return closure_4.can(Permissions.CREATE_INSTANT_INVITE, closure_0);
      }
    }
  }
  if (arg1 != null) {
    class E {
      constructor() {
        return closure_4.can(Permissions.CREATE_INSTANT_INVITE, closure_0);
      }
    }
  }
  if (undefined === constants.PUBLIC) {
    class E {
      constructor() {
        return closure_4.can(Permissions.CREATE_INSTANT_INVITE, closure_0);
      }
    }
    const stringResult = obj5.string(tmp(1126).t.GFq5Rg);
  } else {
    class E {
      constructor() {
        return closure_4.can(Permissions.CREATE_INSTANT_INVITE, closure_0);
      }
    }
  }
  cResult[5] = tmp8;
  cResult[6] = stateFromStores;
  cResult[7] = arg2;
  if (arg1 != null) {
    class E {
      constructor() {
        return closure_4.can(Permissions.CREATE_INSTANT_INVITE, closure_0);
      }
    }
  }
  cResult[8] = undefined;
  cResult[9] = stringResult;
  const tmpResult = require("initialize");
}) : (function useStagePrivacyLevelSettings(channel, privacy_level, arg2) {
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