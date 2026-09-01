// discord_app/modules/voice_calls/VoiceCallTriggerPointExperiment.tsx
import set from "../../../_runtime/00002_set.js";
import ExperimentBuckets from "../experiments/ExperimentConstants.tsx";
import createExperiment from "../experiments/index.tsx";

const items = [{ id: 1, label: "Treatment", config: { enabled: true } }];
const experiment = createExperiment.createExperiment({
  kind: "guild",
  id: "2026-04_voice_call_trigger_point",
  label: "Voice Call Trigger Point Experiment",
  commonTriggerPoint: ExperimentBuckets.CommonTriggerPoints.VOICE_CALL,
  defaultConfig: { enabled: false },
  treatments: items,
});
const obj = {
  kind: "guild",
  id: "2026-04_voice_call_trigger_point",
  label: "Voice Call Trigger Point Experiment",
  commonTriggerPoint: ExperimentBuckets.CommonTriggerPoints.VOICE_CALL,
  defaultConfig: { enabled: false },
  treatments: items,
};
const result = set.fileFinishedImporting("modules/voice_calls/VoiceCallTriggerPointExperiment.tsx");

export default experiment;
