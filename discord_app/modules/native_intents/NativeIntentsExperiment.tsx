// discord_app/modules/native_intents/NativeIntentsExperiment.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import createExperiment from "../experiments/index.tsx";

const items = [{ id: 1, label: "All enabled", config: { searchEnabled: true, clearEnabled: true, activityEnabled: true } }, { id: 2, label: "Clear Only", config: { searchEnabled: false, clearEnabled: true, activityEnabled: false } }, { id: 3, label: "Activities Only", config: { searchEnabled: false, clearEnabled: false, activityEnabled: true } }, { id: 4, label: "Activities and Clear", config: { searchEnabled: false, clearEnabled: true, activityEnabled: true } }];
const experiment = createExperiment.createExperiment({ kind: "user", id: "2025-06_native_intents", label: "Native Intents", defaultConfig: { searchEnabled: false, clearEnabled: false, activityEnabled: false }, treatments: items });
const result = obj132.fileFinishedImporting("modules/native_intents/NativeIntentsExperiment.tsx");

export default experiment;