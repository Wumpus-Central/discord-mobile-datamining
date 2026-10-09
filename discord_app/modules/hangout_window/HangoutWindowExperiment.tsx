// === Module 17466: HangoutWindowExperiment ===

// Module 17466 (HangoutWindowExperiment)
import c from "c" /* 576 */;
import ExperimentConstants from "ExperimentConstants" /* 4978 */;
import createExperiment from "module_4975" /* 4975 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj = { kind: "guild", id: "2026-02_hangout_window", label: "Hangout Window", defaultConfig: { enableHangoutWindow: false }, commonTriggerPoint: ExperimentConstants.CommonTriggerPoints.VOICE_CALL, treatments: null };
const items = [{ id: 1, label: "Enable Hangout Window", config: { enableHangoutWindow: true } }];
obj.treatments = items;
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/hangout_window/HangoutWindowExperiment.tsx");

export const HangoutWindowExperiment = experiment;
export const useHangoutWindowExperiment = ReactCompilerGating.isReactCompilerEnabled() ? (function useHangoutWindowExperiment(arg0) {
  const cResult = c.c(4);
  ({ guildId, location: _location } = arg0);
  if (cResult[0] === guildId) {
    if (cResult[1] === _location) {
      let tmp2 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { autoTrackExposure: true };
      cResult[3] = obj2;
      let tmp4 = obj2;
    } else {
      tmp4 = cResult[3];
    }
    return experiment.useExperiment(tmp2, tmp4);
  }
  const obj3 = { guildId, location: _location };
  cResult[0] = guildId;
  cResult[1] = _location;
  cResult[2] = obj3;
  tmp2 = obj3;
}) : (function useHangoutWindowExperiment(guildId) {
  return experiment.useExperiment({ guildId: guildId.guildId, location: guildId.location }, { autoTrackExposure: true });
});
export const getHangoutWindowExperiment = function getHangoutWindowExperiment(guildId) {
  return experiment.getCurrentConfig({ guildId: guildId.guildId, location: guildId.location }, { autoTrackExposure: true });
};