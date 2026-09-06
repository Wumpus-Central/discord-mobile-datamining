// discord_app/modules/hub/HubProgressBarUtils.tsx
import util from "../../intl/index.native.tsx";
import preloaded_user_settings from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import GlobalUtils from "../../utils/GlobalUtils.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import UserSettingsProtoStore from "../user_settings/UserSettingsProtoStore.tsx";
import ConnectedAccountsStore from "../../stores/ConnectedAccountsStore.tsx";

require = fn;
const HUB_PROGRESS_STEP_ORDER = fn(9831).HUB_PROGRESS_STEP_ORDER;
const PlatformTypes = fn(1074).PlatformTypes;
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
  memo = noop.useMemo(
    () =>
      (function convertHubProgressFlagSetToSet(stateFromStores1) {
        const set = new Set();
        for (const item10013 of closure_1_5) {
          let obj2 = memo(stateFromStores1[9]);
          if (obj2.hasFlag(arg0, item10013)) {
            let addResult = set.add(item10013);
          }
          continue;
        }
        return set;
      })(stateFromStores1),
    items1,
  );
  const obj = memo(stateFromStores1[5]);
  const items2 = [ConnectedAccountsStore];
  stateFromStores1 = memo(stateFromStores1[5]).useStateFromStores(
    items2,
    () => null != localAccount.getLocalAccount(constants.CONTACTS),
  );
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
    if (arg0.has(item10007)) {
      continue;
    } else {
      obj.return();
      return item10007;
    }
  }
  return null;
};
