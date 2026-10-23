// === Module 18734: VoiceCallTriggerPointExperiment ===

// Module 18734 (VoiceCallTriggerPointExperiment)
import ExperimentConstants from "ExperimentConstants" /* 5189 */;
import createExperiment from "module_5186" /* 5186 */;
import size from "module_2" /* 2 */;

const obj = { kind: "guild", id: "2026-04_voice_call_trigger_point", label: "Voice Call Trigger Point Experiment", commonTriggerPoint: ExperimentConstants.CommonTriggerPoints.VOICE_CALL, defaultConfig: { enabled: false }, treatments: null };
const items = [{ id: 1, label: "Treatment", config: { enabled: true } }];
obj.treatments = items;
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/voice_calls/VoiceCallTriggerPointExperiment.tsx");

export default experiment;