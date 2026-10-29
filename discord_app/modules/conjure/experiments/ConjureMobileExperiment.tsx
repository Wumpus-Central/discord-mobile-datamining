// === Module 9631: ConjureMobileExperiment ===

// Module 9631 (ConjureMobileExperiment)
import ApexExperiment from "ApexExperiment" /* 1453 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let obj = { name: "2026-10-conjure-mobile", kind: "user", defaultConfig: { enabled: false }, variations: null };
const obj2 = { 1: null, 2: { enabled: false }, 3: { enabled: true, entryPoint: "you_bar" } };
obj2[3] = { enabled: true, entryPoint: "profile" };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/conjure/experiments/ConjureMobileExperiment.tsx");

export default apexExperiment;
export const useIsConjureMobileEnabled = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsConjureMobileEnabled(arg0, _location) {
  _require = arg0;
  dependencyMap = _location;
  const cResult = require("c").c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [tmp(1453).ApexExperimentStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    if (cResult[2] === _location) {
      let tmp5 = cResult[3];
      let tmp6 = cResult[4];
    }
    return tmp(504).useStateFromStores(first, tmp5, tmp6);
  }
  const fn = function u() {
    let enabled = closure_0;
    if (closure_0) {
      const obj = { location: _location };
      enabled = apexExperiment.getConfig(obj).enabled;
    }
    return enabled;
  };
  const items1 = [arg0, _location];
  cResult[1] = arg0;
  cResult[2] = _location;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp6 = items1;
  tmp5 = fn;
}) : (function useIsConjureMobileEnabled(arg0, _location) {
  _require = arg0;
  dependencyMap = _location;
  const items = [require("ApexExperiment").ApexExperimentStore];
  const items1 = [arg0, _location];
  return require("initialize").useStateFromStores(items, () => {
    let enabled = closure_0;
    if (closure_0) {
      const obj = { location: _location };
      enabled = apexExperiment.getConfig(obj).enabled;
    }
    return enabled;
  }, items1);
});
export function isConjureMobileEnabled(openConjureHomeScreen) {
  return apexExperiment.getConfig({ location: openConjureHomeScreen }).enabled;
}