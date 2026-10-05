// === Module 9676: WindowsEffectsExperiment ===

// Module 9676 (WindowsEffectsExperiment)
import ApexExperimentStore from "ApexExperimentStore" /* 1246 */;
import ApexExperiment from "ApexExperiment" /* 1440 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj3;
let obj = { preferSystemEffects: false };
const obj2 = { name: "2025-12-windows-audio-effects", kind: "user", defaultConfig: obj, variations: obj3 };
obj3 = { 1: null };
const createApexExperiment = ApexExperiment.createApexExperiment;
const obj4 = { preferSystemEffects: true };
const merged = Object.assign(obj);
obj3[1] = obj4;
const config = createApexExperiment(obj2);
function getWindowsAudioEffectsExperimentConfig(location) {
  const obj = { location: location.location };
  return config.getConfig(obj);
}
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((location) => {
  let _location;
  let first;
  let tmp6;
  let obj = _location(576);
  const cResult = obj.c(3);
  const tmp = _location;
  _location = location.location;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ApexExperimentStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== _location) {
    const fn = function f() {
      const obj = { location: _location };
      return config.getConfig(obj);
    };
    cResult[1] = _location;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp6);
}) : ((location) => {
  location = location.location;
  let obj = location(504);
  const items = [ApexExperimentStore];
  return obj.useStateFromStores(items, () => {
    const obj = { location };
    return config.getConfig(obj);
  });
});
const result = size.fileFinishedImporting("modules/noise_cancellation/WindowsEffectsExperiment.tsx");

export { getWindowsAudioEffectsExperimentConfig };
export const useWindowsAudioEffectsExperimentConfig = tmp4;