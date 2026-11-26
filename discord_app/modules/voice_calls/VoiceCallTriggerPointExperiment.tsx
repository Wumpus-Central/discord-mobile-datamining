// === Module 19684: VoiceCallTriggerPointExperiment ===

// Module 19684 (VoiceCallTriggerPointExperiment)
import ExperimentConstants from "ExperimentConstants" /* 5661 */;
import createExperiment from "module_6044" /* 6044 */;
import size from "module_2" /* 2 */;

const obj = { kind: "guild", id: "2026-04_voice_call_trigger_point", label: "Voice Call Trigger Point Experiment", commonTriggerPoint: ExperimentConstants.CommonTriggerPoints.VOICE_CALL, defaultConfig: { enabled: false }, treatments: null };
const items = [{ id: 1, label: "Treatment", config: { enabled: true } }];
obj.treatments = items;
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/voice_calls/VoiceCallTriggerPointExperiment.tsx");

export default experiment;