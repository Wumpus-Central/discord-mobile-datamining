// === Module 8138: ExpressiveModalV2Experiment ===

// Module 8138 (ExpressiveModalV2Experiment)
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import SafetyHubUtils from "SafetyHubUtils" /* 8125 */;
import SafetyHubStore from "SafetyHubStore" /* 8139 */;
import ApexExperiment from "ApexExperiment" /* 1440 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { kind: "user", name: "2026-07-expressive-modal-v2", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null, 2: { enabled: true } };
obj2[2] = { enabled: true };
let closure_3 = ApexExperiment.createApexExperiment(obj);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((location) => {
  let isExpressiveModalV2Enabled;
  let tmp5;
  let tmp6;
  let tmp9;
  const obj = react;
  const cResult = obj.c(4);
  const obj2 = SafetyHubUtils;
  const isSuspendedUser = obj2.useIsSuspendedUser();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SafetyHubStore];
    const fn = function l() {
      return isExpressiveModalV2Enabled.getIsExpressiveModalV2Enabled();
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
}) : ((location) => {
  let isExpressiveModalV2Enabled;
  const obj = SafetyHubUtils;
  const isSuspendedUser = obj.useIsSuspendedUser();
  const items = [SafetyHubStore];
  const obj2 = get_initialized;
  const obj3 = { location };
  const stateFromStores = obj2.useStateFromStores(items, () => isExpressiveModalV2Enabled.getIsExpressiveModalV2Enabled());
  let enabled = closure_3.useConfig(obj3).enabled;
  if (isSuspendedUser) {
    enabled = stateFromStores;
  }
  return enabled;
});
const result = size.fileFinishedImporting("modules/age_assurance/ExpressiveModalV2Experiment.tsx");
const isExpressiveModalV2Enabled_export = function isExpressiveModalV2Enabled(AUTOMATED_UNDERAGE_APPEALS) {
  let enabled;
  const obj = SafetyHubUtils;
  if (obj.isCurrentUserSuspended()) {
    enabled = SafetyHubStore.getIsExpressiveModalV2Enabled();
  } else {
    const obj2 = { location: AUTOMATED_UNDERAGE_APPEALS };
    enabled = closure_3.getConfig(obj2).enabled;
  }
  return enabled;
};

export const useIsExpressiveModalV2Enabled = tmp2;
export { isExpressiveModalV2Enabled_export as isExpressiveModalV2Enabled };