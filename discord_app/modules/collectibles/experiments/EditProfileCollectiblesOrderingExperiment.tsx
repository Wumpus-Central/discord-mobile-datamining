// === Module 13303: EditProfileCollectiblesOrderingExperiment ===

// Module 13303 (EditProfileCollectiblesOrderingExperiment)
import c from "c" /* 576 */;
import ApexExperiment from "ApexExperiment" /* 1452 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_2 = ApexExperiment.createApexExperiment({ name: "2026-09-edit-profile-collectibles-ordering", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = size.fileFinishedImporting("modules/collectibles/experiments/EditProfileCollectiblesOrderingExperiment.tsx");

export const useIsEditProfileCollectiblesOrderingEnabled = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsEditProfileCollectiblesOrderingEnabled(location) {
  const cResult = c.c(2);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    let tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return closure_2.useConfig(tmp2).enabled;
}) : (function useIsEditProfileCollectiblesOrderingEnabled(location) {
  return closure_2.useConfig({ location }).enabled;
});