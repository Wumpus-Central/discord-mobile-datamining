// === Module 9389: SecureFramesDeeplinkExperiment ===

// Module 9389 (SecureFramesDeeplinkExperiment)
import c from "c" /* 576 */;
import createExperimentDefault from "createExperiment" /* 4781 */;

require = fn;
const obj = { kind: "user", id: "2024-09_secure_frames_deeplink", label: "Secure Frames Deeplinks", defaultConfig: { enabled: false }, treatments: null };
const items = [{ id: 1, label: "Enabled.", config: { enabled: true } }];
obj.treatments = items;
let closure_2 = createExperimentDefault(obj);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/rtc/SecureFramesDeeplinkExperiment.tsx");

export const useSecureFramesDeeplinkExperiment = ReactCompilerGating.isReactCompilerEnabled() ? ((location) => {
  const cResult = c.c(3);
  const _location = location.location;
  if (cResult[0] !== _location) {
    const obj2 = { location: _location };
    cResult[0] = _location;
    cResult[1] = obj2;
    let tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { autoTrackExposure: true };
    cResult[2] = obj3;
    let tmp3 = obj3;
  } else {
    tmp3 = cResult[2];
  }
  return closure_2.useExperiment(tmp2, tmp3);
}) : ((location) => closure_2.useExperiment({ location: location.location }, { autoTrackExposure: true }));
export const getSecureFramesDeeplinkExperiment = function getSecureFramesDeeplinkExperiment(location) {
  return closure_2.getCurrentConfig({ location: location.location }, { autoTrackExposure: true });
};