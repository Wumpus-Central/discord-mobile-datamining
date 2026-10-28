// === Module 19202: InterestPickerExperiment ===

// Module 19202 (InterestPickerExperiment)
import c from "c" /* 576 */;
import noop from "module_19" /* 19 */;

require = fn;
const ApexExperiment = fn(1452);
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-10-interest-picker", kind: "user", defaultConfig: { enabled: false, gameList: "popular" }, variations: { 0: { enabled: false, gameList: "popular" }, 1: { enabled: true, gameList: "popular" }, 2: { enabled: true, gameList: "trending" }, 3: { enabled: true, gameList: "mobile" } } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/waterwheels/interest/InterestPickerExperiment.tsx");

export const InterestPickerExperiment = apexExperiment;
export const isInterestPickerExperimentEnabled = function isInterestPickerExperimentEnabled(nuf_interest_picker_step) {
  try {
    const obj = { location: nuf_interest_picker_step };
    return apexExperiment.getConfig(obj).enabled;
  } catch (err) {
    return false;
  }
};
export const useInterestPickerGameList = ReactCompilerGating.isReactCompilerEnabled() ? (function useInterestPickerGameList(location) {
  const cResult = c.c(2);
  try {
    if (cResult[0] !== location) {
      const obj2 = { location };
      const config = apexExperiment.getConfig(obj2, { autoTrackExposure: false });
      let tmp3 = config;
      cResult[0] = location;
      cResult[1] = config;
    } else {
      tmp3 = cResult[1];
    }
    return tmp3.gameList;
  } catch (err) {
  }
}) : (function useInterestPickerGameList(_location) {
  const items = [_location];
  return noop.useMemo(() => {
    try {
      const obj = { location: _location };
      return apexExperiment.getConfig(obj, { autoTrackExposure: false }).gameList;
    } catch (err) {
      return null;
    }
  }, items);
});