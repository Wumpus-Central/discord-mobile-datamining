// === Module 6867: ConjureUserExperiment ===

// Module 6867 (ConjureUserExperiment)
import c from "c" /* 576 */;
import ApexExperiment from "ApexExperiment" /* 1453 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_2 = ApexExperiment.createApexExperiment({ name: "2026-07-vibegrations-user", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = size.fileFinishedImporting("modules/conjure/experiments/ConjureUserExperiment.tsx");

export const useIsConjureUserEnabled = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsConjureUserEnabled(location) {
  const cResult = c.c(2);
  const _location = location.location;
  if (cResult[0] !== _location) {
    const obj2 = { location: _location };
    cResult[0] = _location;
    cResult[1] = obj2;
    let tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return closure_2.useConfig(tmp2).enabled;
}) : (function useIsConjureUserEnabled(location) {
  return closure_2.useConfig({ location: location.location }).enabled;
});
export function isConjureUserEnabled(location, arg1) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let autoTrackExposure = obj.autoTrackExposure;
  if (autoTrackExposure === undefined) {
    autoTrackExposure = true;
  }
  return closure_2.getConfig({ location: location.location }, { autoTrackExposure }).enabled;
}