// === Module 18681: InterestPickerExperiment ===

// Module 18681 (InterestPickerExperiment)
import noop from "module_19" /* 19 */;

const ApexExperiment = fn(1449);
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-10-interest-picker", kind: "user", defaultConfig: { enabled: false, gameList: "popular" }, variations: { 0: { enabled: false, gameList: "popular" }, 1: { enabled: true, gameList: "popular" }, 2: { enabled: true, gameList: "trending" }, 3: { enabled: true, gameList: "mobile" } } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/waterwheels/interest/InterestPickerExperiment.tsx");

export const InterestPickerExperiment = apexExperiment;
export function isInterestPickerExperimentEnabled(nuf_interest_picker_step) {
  try {
    const obj = { location: nuf_interest_picker_step };
    return apexExperiment.getConfig(obj).enabled;
  } catch (err) {
    return false;
  }
}
export function useInterestPickerGameList(_location) {
  noop = _location;
  items = [_location];
  return noop.useMemo(() => {
    try {
      const obj = { location: _location };
      return apexExperiment.getConfig(obj, { autoTrackExposure: false }).gameList;
    } catch (err) {
      return null;
    }
  }, items);
}