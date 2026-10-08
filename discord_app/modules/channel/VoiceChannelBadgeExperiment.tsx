// === Module 13319: VoiceChannelBadgeExperiment ===

// Module 13319 (VoiceChannelBadgeExperiment)
import c from "c" /* 576 */;
import ExperimentConstants from "ExperimentConstants" /* 4977 */;
import createExperiment from "module_4974" /* 4974 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj = { id: "2026-03_voice_badge", kind: "guild", commonTriggerPoint: ExperimentConstants.CommonTriggerPoints.VOICE_CALL, label: "Display Voice Channel Badge", defaultConfig: { enabled: false }, treatments: null };
const items = [{ id: 0, label: "Control", config: { enabled: false } }, { id: 1, label: "Show voice badges", config: { enabled: true } }];
obj.treatments = items;
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/channel/VoiceChannelBadgeExperiment.tsx");

export const VoiceChannelBadgeExperiment = experiment;
export const useVoiceChannelBadgeExperiment = ReactCompilerGating.isReactCompilerEnabled() ? (function useVoiceChannelBadgeExperiment(arg0) {
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
}) : (function useVoiceChannelBadgeExperiment(guildId) {
  return experiment.useExperiment({ guildId: guildId.guildId, location: guildId.location }, { autoTrackExposure: true });
});
export const getVoiceChannelBadgeExperiment = function getVoiceChannelBadgeExperiment(guildId) {
  return experiment.getCurrentConfig({ guildId: guildId.guildId, location: guildId.location }, { autoTrackExposure: true });
};