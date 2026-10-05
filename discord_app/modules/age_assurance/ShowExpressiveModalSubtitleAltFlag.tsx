// discord_app/modules/age_assurance/ShowExpressiveModalSubtitleAltFlag.tsx
import get_initialized from "../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../_runtime/00576_react.js";
import SafetyHubUtils from "../safety_hub/SafetyHubUtils.tsx";
import SafetyHubStore from "../safety_hub/SafetyHubStore.tsx";
import ApexExperiment from "../experiments/apex/index.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj2;
let obj = {
  kind: "user",
  name: "2026-08-show-expressive-modal-subtitle-alt",
  defaultConfig: { enabled: false },
  variations: obj2,
};
obj2 = { 1: null };
obj2[1] = { enabled: true };
let closure_3 = ApexExperiment.createApexExperiment(obj);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (location) => {
      let showExpressiveModalSubtitleAlt;
      let tmp5;
      let tmp6;
      let tmp9;
      const obj = react;
      const cResult = obj.c(4);
      const obj2 = SafetyHubUtils;
      const isSuspendedUser = obj2.useIsSuspendedUser();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SafetyHubStore];
        const fn = function n() {
          return showExpressiveModalSubtitleAlt.getShowExpressiveModalSubtitleAlt();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
      if (cResult[2] !== location) {
        const obj3 = { location };
        cResult[2] = location;
        cResult[3] = obj3;
        tmp9 = obj3;
      } else {
        tmp9 = cResult[3];
      }
      let enabled = closure_3.useConfig(tmp9).enabled;
      if (isSuspendedUser) {
        enabled = stateFromStores;
      }
      return enabled;
    }
  : (location) => {
      let showExpressiveModalSubtitleAlt;
      const obj = SafetyHubUtils;
      const isSuspendedUser = obj.useIsSuspendedUser();
      const items = [SafetyHubStore];
      const obj2 = get_initialized;
      const obj3 = { location };
      const stateFromStores = obj2.useStateFromStores(items, () =>
        showExpressiveModalSubtitleAlt.getShowExpressiveModalSubtitleAlt(),
      );
      let enabled = closure_3.useConfig(obj3).enabled;
      if (isSuspendedUser) {
        enabled = stateFromStores;
      }
      return enabled;
    };
const result = size.fileFinishedImporting("modules/age_assurance/ShowExpressiveModalSubtitleAltFlag.tsx");

export const useShouldShowExpressiveModalSubtitleAlt = tmp2;
export const shouldShowExpressiveModalSubtitleAlt = function shouldShowExpressiveModalSubtitleAlt(location) {
  let enabled;
  const obj = SafetyHubUtils;
  if (obj.isCurrentUserSuspended()) {
    enabled = SafetyHubStore.getShowExpressiveModalSubtitleAlt();
  } else {
    const obj2 = { location };
    enabled = closure_3.getConfig(obj2).enabled;
  }
  return enabled;
};
