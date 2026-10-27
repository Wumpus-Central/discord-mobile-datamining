// discord_app/modules/age_assurance/ShowExpressiveModalSubtitleAltFlag.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../_runtime/00576_c.js";
import SafetyHubUtils from "../safety_hub/SafetyHubUtils.tsx";
import SafetyHubStore from "../safety_hub/SafetyHubStore.tsx";

require = fn;
const ApexExperiment = fn(1452);
let obj2 = {
  kind: "user",
  name: "2026-08-show-expressive-modal-subtitle-alt",
  defaultConfig: { enabled: false },
  variations: null,
};
let obj3 = { 1: null };
obj3[1] = { enabled: true };
obj2.variations = obj3;
let closure_3 = ApexExperiment.createApexExperiment(obj2);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_assurance/ShowExpressiveModalSubtitleAltFlag.tsx");

export const useShouldShowExpressiveModalSubtitleAlt = ReactCompilerGating.isReactCompilerEnabled()
  ? function useShouldShowExpressiveModalSubtitleAlt(location) {
      const cResult = c.c(4);
      const isSuspendedUser = SafetyHubUtils.useIsSuspendedUser();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SafetyHubStore];
        const fn = function u() {
          return showExpressiveModalSubtitleAlt.getShowExpressiveModalSubtitleAlt();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const stateFromStores = initialize.useStateFromStores(tmp5, tmp6);
      if (cResult[2] !== location) {
        const obj3 = { location };
        cResult[2] = location;
        cResult[3] = obj3;
        let tmp9 = obj3;
      } else {
        tmp9 = cResult[3];
      }
      let enabled = closure_3.useConfig(tmp9).enabled;
      if (isSuspendedUser) {
        enabled = stateFromStores;
      }
      return enabled;
    }
  : function useShouldShowExpressiveModalSubtitleAlt(location) {
      const isSuspendedUser = SafetyHubUtils.useIsSuspendedUser();
      const items = [SafetyHubStore];
      const stateFromStores = initialize.useStateFromStores(items, () =>
        showExpressiveModalSubtitleAlt.getShowExpressiveModalSubtitleAlt(),
      );
      let enabled = closure_3.useConfig({ location }).enabled;
      if (isSuspendedUser) {
        enabled = stateFromStores;
      }
      return enabled;
    };
export const shouldShowExpressiveModalSubtitleAlt = function shouldShowExpressiveModalSubtitleAlt(location) {
  if (obj.isCurrentUserSuspended()) {
    let enabled = SafetyHubStore.getShowExpressiveModalSubtitleAlt();
  } else {
    const obj2 = { location };
    enabled = closure_3.getConfig(obj2).enabled;
  }
  return enabled;
};
