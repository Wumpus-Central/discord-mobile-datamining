// === Module 13022: VoiceChannelBadgeExperiment ===

// Module 13022 (VoiceChannelBadgeExperiment)
import react from "react" /* 576 */;
import ExperimentConstants from "ExperimentConstants" /* 4777 */;
import createExperiment from "module_4774" /* 4774 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let items;
const CommonTriggerPoints = ExperimentConstants.CommonTriggerPoints;
let obj = { id: "2026-03_voice_badge", kind: "guild", commonTriggerPoint: CommonTriggerPoints.VOICE_CALL, label: "Display Voice Channel Badge", defaultConfig: { enabled: false }, treatments: items };
items = [{ id: 0, label: "Control", config: { enabled: false } }, { id: 1, label: "Show voice badges", config: { enabled: true } }];
const experiment = createExperiment.createExperiment(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let _location;
  let guildId;
  const obj = react;
  const cResult = obj.c(4);
  ({ guildId, location: _location } = arg0);
  if (cResult[0] === guildId) {
    let tmp2;
    let tmp4;
    if (cResult[1] === _location) {
      tmp2 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { autoTrackExposure: true };
      cResult[3] = obj2;
      tmp4 = obj2;
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
}) : ((guildId) => {
  const obj = { guildId: guildId.guildId, location: guildId.location };
  return experiment.useExperiment(obj, { autoTrackExposure: true });
});
const result = size.fileFinishedImporting("modules/channel/VoiceChannelBadgeExperiment.tsx");

export const VoiceChannelBadgeExperiment = experiment;
export const useVoiceChannelBadgeExperiment = tmp3;
export const getVoiceChannelBadgeExperiment = function getVoiceChannelBadgeExperiment(guildId) {
  const obj = { guildId: guildId.guildId, location: guildId.location };
  return experiment.getCurrentConfig(obj, { autoTrackExposure: true });
};