// === Module 17151: experiment ===

// Module 17151 (experiment)
import set from "set" /* 2 */;
import ExperimentBuckets from "ExperimentBuckets" /* 4392 */;
import createExperiment from "createExperiment" /* 4389 */;

const items = [{ id: 1, label: "Treatment", config: { enabled: true } }];
const experiment = createExperiment.createExperiment({ kind: "guild", id: "2026-04_voice_call_trigger_point", label: "Voice Call Trigger Point Experiment", commonTriggerPoint: ExperimentBuckets.CommonTriggerPoints.VOICE_CALL, defaultConfig: { enabled: false }, treatments: items });
const obj = { kind: "guild", id: "2026-04_voice_call_trigger_point", label: "Voice Call Trigger Point Experiment", commonTriggerPoint: ExperimentBuckets.CommonTriggerPoints.VOICE_CALL, defaultConfig: { enabled: false }, treatments: items };
const result = set.fileFinishedImporting("modules/voice_calls/VoiceCallTriggerPointExperiment.tsx");

export default experiment;