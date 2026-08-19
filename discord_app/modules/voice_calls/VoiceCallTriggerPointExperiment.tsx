// === Module 16550: experiment ===

// Module 16550 (experiment)
import obj132 from "obj132" /* 2 */;
import ExperimentBuckets from "ExperimentBuckets" /* 4289 */;
import createExperiment from "createExperiment" /* 4286 */;

const items = [{ id: 1, label: "Treatment", config: { enabled: true } }];
const experiment = createExperiment.createExperiment({ kind: "guild", id: "2026-04_voice_call_trigger_point", label: "Voice Call Trigger Point Experiment", commonTriggerPoint: ExperimentBuckets.CommonTriggerPoints.VOICE_CALL, defaultConfig: { enabled: false }, treatments: items });
const result = obj132.fileFinishedImporting("modules/voice_calls/VoiceCallTriggerPointExperiment.tsx");

export default experiment;