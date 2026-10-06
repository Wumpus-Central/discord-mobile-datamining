// === Module 9389: SecureFramesDeeplinkExperiment ===

// Module 9389 (SecureFramesDeeplinkExperiment)
import react from "react" /* 576 */;
import createExperimentDefault from "createExperiment" /* 4781 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let items;
let obj = { kind: "user", id: "2024-09_secure_frames_deeplink", label: "Secure Frames Deeplinks", defaultConfig: { enabled: false }, treatments: items };
items = [{ id: 1, label: "Enabled.", config: { enabled: true } }];
let closure_2 = createExperimentDefault(obj);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((location) => {
  let tmp2;
  let tmp3;
  const obj = react;
  const cResult = obj.c(3);
  const _location = location.location;
  if (cResult[0] !== _location) {
    const obj2 = { location: _location };
    cResult[0] = _location;
    cResult[1] = obj2;
    tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { autoTrackExposure: true };
    cResult[2] = obj3;
    tmp3 = obj3;
  } else {
    tmp3 = cResult[2];
  }
  return closure_2.useExperiment(tmp2, tmp3);
}) : ((location) => {
  const obj = { location: location.location };
  return closure_2.useExperiment(obj, { autoTrackExposure: true });
});
const result = size.fileFinishedImporting("modules/rtc/SecureFramesDeeplinkExperiment.tsx");

export const useSecureFramesDeeplinkExperiment = tmp2;
export const getSecureFramesDeeplinkExperiment = function getSecureFramesDeeplinkExperiment(location) {
  const obj = { location: location.location };
  return closure_2.getCurrentConfig(obj, { autoTrackExposure: true });
};