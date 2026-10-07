// discord_app/modules/voice_calls/VoiceCallTriggerPointExperiment.tsx
import ExperimentConstants from "../experiments/ExperimentConstants.tsx";
import createExperiment from "../experiments/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

const obj = {
  kind: "guild",
  id: "2026-04_voice_call_trigger_point",
  label: "Voice Call Trigger Point Experiment",
  commonTriggerPoint: ExperimentConstants.CommonTriggerPoints.VOICE_CALL,
  defaultConfig: { enabled: false },
  treatments: null,
};
const items = [{ id: 1, label: "Treatment", config: { enabled: true } }];
obj.treatments = items;
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/voice_calls/VoiceCallTriggerPointExperiment.tsx");

export default experiment;
