// === Module 12320: HubProgressBarUtils ===

// Module 12320 (HubProgressBarUtils)
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import intl4 from "intl" /* 1126 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1197 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import FlagUtils from "FlagUtils" /* 1390 */;
import HubProgressBarConstants from "HubProgressBarConstants" /* 9492 */;
import react from "react" /* 19 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5440 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, set;

function convertHubProgressFlagSetToSet(stateFromStores) {
  set = new Set();
  for (const item10013 of HUB_PROGRESS_STEP_ORDER) {
    let obj2 = FlagUtils;
    if (obj2.hasFlag(stateFromStores, item10013)) {
      let addResult = set.add(item10013);
    }
    continue;
  }
  return set;
}
const HUB_PROGRESS_STEP_ORDER = HubProgressBarConstants.HUB_PROGRESS_STEP_ORDER;
const PlatformTypes = Constants.PlatformTypes;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let localAccount;
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConnectedAccountsStore];
    const fn = function s() {
      return null != localAccount.getLocalAccount(constants.CONTACTS);
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStores(tmp4, tmp5);
}) : (() => {
  let localAccount;
  const items = [ConnectedAccountsStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => null != localAccount.getLocalAccount(constants.CONTACTS));
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp6;
  let tmp8;
  _require = arg0;
  const tmp = _require;
  const obj = require("react");
  const cResult = obj.c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserSettingsProtoStore];
    let num = 0;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      let num = 0;
      if (null != closure_0) {
        const guilds = UserSettingsProtoStore.settings.guilds;
        let num2;
        if (guilds != null) {
          if (guilds.guilds[tmp] != null) {
            num2 = tmp3.hubProgress;
          }
        }
        if (num2 == null) {
          num2 = 0;
        }
        num = num2;
      }
      return num;
    };
    let num2 = 1;
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] !== stateFromStores) {
    const tmp10 = convertHubProgressFlagSetToSet(stateFromStores);
    cResult[3] = stateFromStores;
    cResult[4] = tmp10;
    tmp8 = tmp10;
  } else {
    tmp8 = cResult[4];
  }
  return tmp8;
}) : ((arg0) => {
  let closure_0;
  let stateFromStores;
  _require = arg0;
  const items = [UserSettingsProtoStore];
  const obj = require("get initialized");
  stateFromStores = obj.useStateFromStores(items, () => {
    let num = 0;
    if (null != closure_0) {
      const guilds = UserSettingsProtoStore.settings.guilds;
      let num2;
      if (guilds != null) {
        if (guilds.guilds[tmp] != null) {
          num2 = tmp3.hubProgress;
        }
      }
      if (num2 == null) {
        num2 = 0;
      }
      num = num2;
    }
    return num;
  });
  const items1 = [stateFromStores];
  return react.useMemo(() => convertHubProgressFlagSetToSet(stateFromStores), items1);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function(id) {
  const obj = react2;
  const cResult = obj.c(2);
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  const tmp4Result = closure_9(id);
  let tmp7 = tmp4Result;
  if (closure_7()) {
    let tmp8;
    if (cResult[0] !== tmp4Result) {
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set(tmp4Result);
      set.add(preloaded_user_settings.HubProgressStep.CONTACT_SYNC);
      cResult[0] = tmp4Result;
      cResult[1] = set;
      tmp8 = set;
    } else {
      tmp8 = cResult[1];
    }
    tmp7 = tmp8;
  }
  return tmp7;
}) : ((id) => {
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  const tmpResult = closure_9(id);
  let closure_0 = tmpResult;
  const tmp4 = closure_7();
  let closure_1 = tmp4;
  const items = [tmpResult, tmp4];
  return react.useMemo(function() {
    if (closure_1) {
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set(closure_0);
      set.add(preloaded_user_settings.HubProgressStep.CONTACT_SYNC);
      return set;
    } else {
      return closure_0;
    }
  }, items);
});
const result = size.fileFinishedImporting("modules/hub/HubProgressBarUtils.tsx");

export const getHubProgressTitleForStep = function getHubProgressTitleForStep(nextHubProgressStep) {
  if (preloaded_user_settings.HubProgressStep.JOIN_GUILD === nextHubProgressStep) {
    const intl3 = intl4.intl;
    return intl3.string(intl4.t.iNR25n);
  } else if (preloaded_user_settings.HubProgressStep.INVITE_USER === nextHubProgressStep) {
    const intl2 = intl4.intl;
    return intl2.string(intl4.t["3NlTYU"]);
  } else if (preloaded_user_settings.HubProgressStep.CONTACT_SYNC === nextHubProgressStep) {
    const intl = intl4.intl;
    return intl.string(intl4.t.HFvFte);
  } else if (preloaded_user_settings.HubProgressStep.NO_PROGRESS === nextHubProgressStep) {
    return null;
  } else {
    const tmpResult = GlobalUtils;
    tmpResult.assertNever(nextHubProgressStep);
  }
};
export const useHubProgressBarCompletedSteps = tmp2;
export const getNextHubProgressStep = function getNextHubProgressStep(hubProgressBarCompletedSteps) {
  for (const item10007 of HUB_PROGRESS_STEP_ORDER) {
    if (hubProgressBarCompletedSteps.has(item10007)) {
      continue;
    } else {
      obj.return();
      return item10007;
    }
  }
  return null;
};