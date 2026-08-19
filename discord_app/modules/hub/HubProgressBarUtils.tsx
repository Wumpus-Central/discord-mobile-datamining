// discord_app/modules/hub/HubProgressBarUtils.tsx
import getSystemLocale from "../../intl/index.native.tsx";
import create from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import isDiscordFrontendDevelopment from "../../utils/GlobalUtils.tsx";
import noop from "../../../_runtime/00019_noop.js";
import handleConnectionClosedOrResumed from "../user_settings/UserSettingsProtoStore.tsx";
import set from "../../stores/ConnectedAccountsStore.tsx";
import { HUB_PROGRESS_STEP_ORDER } from "HubProgressBarConstants.tsx";
import { PlatformTypes } from "../../Constants.tsx";

require = fn;
const result = require("obj132").fileFinishedImporting("modules/hub/HubProgressBarUtils.tsx");

export const getHubProgressTitleForStep = function getHubProgressTitleForStep(nextHubProgressStep) {
  if (create.HubProgressStep.JOIN_GUILD === nextHubProgressStep) {
    const intl3 = getSystemLocale.intl;
    return intl3.string(getSystemLocale.t.iNR25n);
  } else if (create.HubProgressStep.INVITE_USER === nextHubProgressStep) {
    const intl2 = getSystemLocale.intl;
    return intl2.string(getSystemLocale.t["3NlTYU"]);
  } else if (create.HubProgressStep.CONTACT_SYNC === nextHubProgressStep) {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.HFvFte);
  } else if (create.HubProgressStep.NO_PROGRESS === nextHubProgressStep) {
    return null;
  } else {
    isDiscordFrontendDevelopment.assertNever(nextHubProgressStep);
    const tmpResult = isDiscordFrontendDevelopment;
  }
};
export const useHubProgressBarCompletedSteps = function useHubProgressBarCompletedSteps(guild) {
  let id;
  if (guild != null) {
    id = guild.id;
  }
  let memo = id;
  const items = [closure_3];
  const stateFromStores = memo(stateFromStores1[5]).useStateFromStores(items, () => {
    let num = 0;
    if (null != memo) {
      const guilds = closure_1_3.settings.guilds;
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
      let obj2 = callback(table[9]);
      if (obj2.hasFlag(arg0, item10013)) {
        let addResult = set.add(item10013);
      }
      continue;
    }
    return set;
  })(stateFromStores1), items1);
  const obj = memo(stateFromStores1[5]);
  const items2 = [closure_4];
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
    if (arg0.has(item10007)) {
      continue;
    } else {
      obj.return();
      return item10007;
    }
  }
  return null;
};