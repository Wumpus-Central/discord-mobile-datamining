// === Module 12669: HubProgressBarUtils ===

// Module 12669 (HubProgressBarUtils)
import preloaded_user_settings from "preloaded_user_settings" /* 1187 */;
import noop from "module_19" /* 19 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1221 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5281 */;

require = fn;
const HUB_PROGRESS_STEP_ORDER = fn(9831).HUB_PROGRESS_STEP_ORDER;
const PlatformTypes = fn(1074).PlatformTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/hub/HubProgressBarUtils.tsx");

export const getHubProgressTitleForStep = function getHubProgressTitleForStep(nextHubProgressStep) {
  if (preloaded_user_settings.HubProgressStep.JOIN_GUILD === nextHubProgressStep) {
    const intl3 = tmp(1114).intl;
    return intl3.string(tmp(1114).t.iNR25n);
  } else if (tmp(1187).HubProgressStep.INVITE_USER === nextHubProgressStep) {
    const intl2 = tmp(1114).intl;
    return intl2.string(tmp(1114).t["3NlTYU"]);
  } else if (tmp(1187).HubProgressStep.CONTACT_SYNC === nextHubProgressStep) {
    const intl = tmp(1114).intl;
    return intl.string(tmp(1114).t.HFvFte);
  } else if (tmp(1187).HubProgressStep.NO_PROGRESS === nextHubProgressStep) {
    return null;
  } else {
    tmp(1369).assertNever(nextHubProgressStep);
  }
};
export const useHubProgressBarCompletedSteps = function useHubProgressBarCompletedSteps(guild) {
  let id;
  if (guild != null) {
    id = guild.id;
  }
  closure_129_0 = id;
  const items = [UserSettingsProtoStore];
  const stateFromStores = memo(stateFromStores1[5]).useStateFromStores(items, () => {
    let num = 0;
    if (null != memo) {
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
  closure_129_1 = stateFromStores;
  const items1 = [stateFromStores];
  memo = noop.useMemo(() => (function convertHubProgressFlagSetToSet(stateFromStores1) {
    const set = new Set();
    for (const item10013 of closure_1_5) {
      let tmp = item10013;
      let obj2 = memo(stateFromStores1[9]);
      if (obj2.hasFlag(arg0, item10013)) {
        let addResult = set.add(tmp);
      }
      continue;
    }
    return set;
  })(stateFromStores1), items1);
  const obj = memo(stateFromStores1[5]);
  const items2 = [ConnectedAccountsStore];
  stateFromStores1 = memo(stateFromStores1[5]).useStateFromStores(items2, () => null != localAccount.getLocalAccount(constants.CONTACTS));
  const items3 = [memo, stateFromStores1];
  return noop.useMemo(() => {
    if (stateFromStores1) {
      const _Set = Set;
      const set = new Set(memo);
      set.add(preloaded_user_settings.HubProgressStep.CONTACT_SYNC);
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
      obj.return();
      return tmp;
    }
  }
  return null;
};