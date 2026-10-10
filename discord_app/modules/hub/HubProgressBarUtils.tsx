// === Module 12393: HubProgressBarUtils ===

// Module 12393 (HubProgressBarUtils)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1209 */;
import GlobalUtils from "GlobalUtils" /* 1388 */;
import FlagUtils from "FlagUtils" /* 1403 */;
import noop from "module_19" /* 19 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1244 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5761 */;

require = fn;
function convertHubProgressFlagSetToSet(stateFromStores) {
  const set = new Set();
  for (const item10013 of HUB_PROGRESS_STEP_ORDER) {
    let obj2 = FlagUtils;
    if (obj2.hasFlag(arg0, item10013)) {
      let addResult = set.add(item10013);
    }
    continue;
  }
  return set;
}
const HUB_PROGRESS_STEP_ORDER = fn(8695).HUB_PROGRESS_STEP_ORDER;
const PlatformTypes = fn(1085).PlatformTypes;
let ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? (function useContactSyncEverEnabled() {
  const cResult = c.c(2);
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
  return initialize.useStateFromStores(tmp4, tmp5);
}) : (function useContactSyncEverEnabled() {
  const items = [ConnectedAccountsStore];
  return initialize.useStateFromStores(items, () => null != localAccount.getLocalAccount(constants.CONTACTS));
});
ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCompletedStepsFromSettings(arg0) {
  _require = arg0;
  const cResult = require("c").c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserSettingsProtoStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function n() {
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
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
  if (cResult[3] !== stateFromStores) {
    const tmp10 = convertHubProgressFlagSetToSet(stateFromStores);
    cResult[3] = stateFromStores;
    cResult[4] = tmp10;
    let tmp8 = tmp10;
  } else {
    tmp8 = cResult[4];
  }
  return tmp8;
}) : (function useCompletedStepsFromSettings(arg0) {
  _require = arg0;
  const items = [UserSettingsProtoStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => {
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
  return noop.useMemo(() => convertHubProgressFlagSetToSet(stateFromStores), items1);
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/hub/HubProgressBarUtils.tsx");

export const getHubProgressTitleForStep = function getHubProgressTitleForStep(nextHubProgressStep) {
  if (preloaded_user_settings.HubProgressStep.JOIN_GUILD === nextHubProgressStep) {
    const intl3 = util.intl;
    return intl3.string(util.t.iNR25n);
  } else if (preloaded_user_settings.HubProgressStep.INVITE_USER === nextHubProgressStep) {
    const intl2 = util.intl;
    return intl2.string(util.t["3NlTYU"]);
  } else if (preloaded_user_settings.HubProgressStep.CONTACT_SYNC === nextHubProgressStep) {
    const intl = util.intl;
    return intl.string(util.t.HFvFte);
  } else if (preloaded_user_settings.HubProgressStep.NO_PROGRESS === nextHubProgressStep) {
    return null;
  } else {
    GlobalUtils.assertNever(nextHubProgressStep);
    const tmpResult = GlobalUtils;
  }
};
export const useHubProgressBarCompletedSteps = ReactCompilerGating.isReactCompilerEnabled() ? (function useHubProgressBarCompletedSteps(id) {
  const cResult = c.c(2);
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  const tmp4Result = closure_9(id);
  if (!closure_7()) {
    return tmp4Result;
  } else if (cResult[0] !== tmp4Result) {
    const _Set = Set;
    const set = new Set(tmp4Result);
    set.add(preloaded_user_settings.HubProgressStep.CONTACT_SYNC);
    cResult[0] = tmp4Result;
    cResult[1] = set;
  }
}) : (function useHubProgressBarCompletedSteps(id) {
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  const tmpResult = closure_9(id);
  closure_0 = tmpResult;
  const tmp4 = closure_7();
  closure_1 = tmp4;
  const items = [tmpResult, tmp4];
  return noop.useMemo(() => {
    if (closure_1) {
      const _Set = Set;
      const set = new Set(closure_0);
      set.add(preloaded_user_settings.HubProgressStep.CONTACT_SYNC);
      return set;
    } else {
      return closure_0;
    }
  }, items);
});
export const getNextHubProgressStep = function getNextHubProgressStep(hubProgressBarCompletedSteps) {
  for (const item10007 of HUB_PROGRESS_STEP_ORDER) {
    if (arg0.has(item10007)) {
      continue;
    } else {
      obj.return();
      return item10007;
    }
  }
  return null;
};