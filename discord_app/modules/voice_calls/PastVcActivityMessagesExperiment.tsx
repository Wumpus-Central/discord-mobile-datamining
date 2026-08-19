// === Module 16549: experiment ===

// Module 16549 (experiment)
import obj132 from "obj132" /* 2 */;
import ExperimentBuckets from "ExperimentBuckets" /* 4289 */;
import createExperiment from "createExperiment" /* 4286 */;

const items = [{ id: 1, label: "Show past VC activity messages in system channel", config: { enabled: true } }];
const experiment = createExperiment.createExperiment({ kind: "guild", id: "2026-02_past_vc_activity_messages", label: "Past VC Activity Messages", commonTriggerPoint: ExperimentBuckets.CommonTriggerPoints.VOICE_CALL, defaultConfig: { enabled: false }, treatments: items });
const result = obj132.fileFinishedImporting("modules/voice_calls/PastVcActivityMessagesExperiment.tsx");

export default experiment;
export const isPastVcActivityMessagesEnabled = function isPastVcActivityMessagesEnabled(id, GuildSettingsModalOverview) {
  return experiment.getCurrentConfig({ guildId: id, location: GuildSettingsModalOverview }, { autoTrackExposure: true }).enabled;
};
export const useIsPastVcActivityMessagesEnabled = function useIsPastVcActivityMessagesEnabled(guildId, location) {
  return experiment.useExperiment({ guildId, location }, { autoTrackExposure: true }).enabled;
};