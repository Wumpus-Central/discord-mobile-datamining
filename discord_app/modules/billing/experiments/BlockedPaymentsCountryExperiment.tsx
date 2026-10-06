// === Module 6936: BlockedPaymentsCountryExperiment ===

// Module 6936 (BlockedPaymentsCountryExperiment)
import react from "react" /* 576 */;
import ApexExperiment from "ApexExperiment" /* 1440 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2026-03-block-purchases", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
let closure_3 = ApexExperiment.createApexExperiment(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  const obj = react;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: "c519a9_1" };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const enabled = closure_3.useConfig(first).enabled || "RU" === tmp3;
  return enabled;
}) : (() => {
  const enabled = closure_3.useConfig({ location: "c519a9_1" }).enabled || "RU" === tmp;
  return enabled;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  const obj = react;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: "dc120b_3" };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  return closure_3.useConfig(first).enabled;
}) : (() => closure_3.useConfig({ location: "dc120b_3" }).enabled);
const result = size.fileFinishedImporting("modules/billing/experiments/BlockedPaymentsCountryExperiment.tsx");

export const useBlockedPaymentsConfig = tmp2;
export const useIsPaymentsBlocked = tmp3;
export const getIsPaymentsBlocked = function getIsPaymentsBlocked() {
  return closure_3.getConfig({ location: "1ee357_1" }).enabled;
};