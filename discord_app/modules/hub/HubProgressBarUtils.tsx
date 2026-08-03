// === Module 11774: getHubProgressTitleForStep ===

// Module 11774 (getHubProgressTitleForStep)
import noop from "noop";
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed";
import set from "set";
import { HUB_PROGRESS_STEP_ORDER } from "items";
import { PlatformTypes } from "ME";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/hub/HubProgressBarUtils.tsx");

export const getHubProgressTitleForStep = function getHubProgressTitleForStep(nextHubProgressStep) {
  if (require(1306) /* create */.HubProgressStep.JOIN_GUILD === nextHubProgressStep) {
    const intl3 = tmp(1236).intl;
    return intl3.string(tmp(1236).t.iNR25n);
  } else if (tmp(1306).HubProgressStep.INVITE_USER === nextHubProgressStep) {
    const intl2 = tmp(1236).intl;
    return intl2.string(tmp(1236).t["3NlTYU"]);
  } else if (tmp(1306).HubProgressStep.CONTACT_SYNC === nextHubProgressStep) {
    const intl = tmp(1236).intl;
    return intl.string(tmp(1236).t.HFvFte);
  } else if (tmp(1306).HubProgressStep.NO_PROGRESS === nextHubProgressStep) {
    return null;
  } else {
    tmp(1351).assertNever(nextHubProgressStep);
  }
};
export const useHubProgressBarCompletedSteps = function useHubProgressBarCompletedSteps(guild) {
  let id;
  if (guild != null) {
    id = guild.id;
  }
  let memo = id;
  const items = [handleConnectionClosedOrResumed];
  const stateFromStores = memo(stateFromStores1[5]).useStateFromStores(items, () => {
    let num = 0;
    if (null != memo) {
      const guilds = outer1_3.settings.guilds;
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
  stateFromStores1 = stateFromStores;
  const items1 = [stateFromStores];
  memo = React.useMemo(() => (function convertHubProgressFlagSetToSet(stateFromStores1) {
    const set = new Set();
    for (const item10013 of closure_5) {
      let tmp2 = callback;
      let tmp3 = table;
      let tmp = item10013;
      let obj2 = callback(table[9]);
      if (obj2.hasFlag(arg0, item10013)) {
        let tmp4 = item10013;
        let addResult = set.add(tmp);
      }
      continue;
    }
    return set;
  })(stateFromStores1), items1);
  const obj = memo(stateFromStores1[5]);
  const items2 = [set];
  stateFromStores1 = memo(stateFromStores1[5]).useStateFromStores(items2, () => null != localAccount.getLocalAccount(constants.CONTACTS));
  const items3 = [memo, stateFromStores1];
  return React.useMemo(() => {
    if (stateFromStores1) {
      const _Set = Set;
      const set = new Set(memo);
      set.add(memo(stateFromStores1[6]).HubProgressStep.CONTACT_SYNC);
      return set;
    } else {
      return memo;
    }
  }, items3);
};
export const getNextHubProgressStep = function getNextHubProgressStep(hubProgressBarCompletedSteps) {
  for (const item10007 of HUB_PROGRESS_STEP_ORDER) {
    let tmp = item10007;
    if (arg0.has(item10007)) {
      continue;
    } else {
      let tmp2 = item10007;
      let tmp3 = obj;
      obj.return();
      return tmp;
    }
  }
  return null;
};