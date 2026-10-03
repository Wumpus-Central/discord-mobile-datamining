// discord_app/modules/hub/HubProgressBarUtils.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../_runtime/00576_c.js";
import util from "../../intl/index.native.tsx";
import preloaded_user_settings from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import GlobalUtils from "../../utils/GlobalUtils.tsx";
import FlagUtils from "../../../discord_common/js/shared/utils/FlagUtils.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import UserSettingsProtoStore from "../user_settings/UserSettingsProtoStore.tsx";
import ConnectedAccountsStore from "../../stores/ConnectedAccountsStore.tsx";

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
const HUB_PROGRESS_STEP_ORDER = fn(9492).HUB_PROGRESS_STEP_ORDER;
const PlatformTypes = fn(1085).PlatformTypes;
let ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
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
    }
  : () => {
      const items = [ConnectedAccountsStore];
      return initialize.useStateFromStores(items, () => null != localAccount.getLocalAccount(constants.CONTACTS));
    };
ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
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
    }
  : (arg0) => {
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
    };
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
export const useHubProgressBarCompletedSteps = ReactCompilerGating.isReactCompilerEnabled()
  ? (id) => {
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
    }
  : (id) => {
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
