// === Module 17429: PastVcActivityMessagesExperiment ===

// Module 17429 (PastVcActivityMessagesExperiment)
import ExperimentConstants from "ExperimentConstants" /* 4522 */;
import createExperiment from "module_4519" /* 4519 */;
import size from "module_2" /* 2 */;

const obj = { kind: "guild", id: "2026-02_past_vc_activity_messages", label: "Past VC Activity Messages", commonTriggerPoint: ExperimentConstants.CommonTriggerPoints.VOICE_CALL, defaultConfig: { enabled: false }, treatments: null };
const items = [{ id: 1, label: "Show past VC activity messages in system channel", config: { enabled: true } }];
obj.treatments = items;
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/voice_calls/PastVcActivityMessagesExperiment.tsx");

export default experiment;
export const isPastVcActivityMessagesEnabled = function isPastVcActivityMessagesEnabled(id, GuildSettingsModalOverview) {
  return experiment.getCurrentConfig({ guildId: id, location: GuildSettingsModalOverview }, { autoTrackExposure: true }).enabled;
};
export const useIsPastVcActivityMessagesEnabled = function useIsPastVcActivityMessagesEnabled(guildId, location) {
  return experiment.useExperiment({ guildId, location }, { autoTrackExposure: true }).enabled;
};