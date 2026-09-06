// === Module 17859: NativeIntentsExperiment ===

// Module 17859 (NativeIntentsExperiment)
import createExperiment from "module_4474" /* 4474 */;
import size from "module_2" /* 2 */;

const obj = { kind: "user", id: "2025-06_native_intents", label: "Native Intents", defaultConfig: { searchEnabled: false, clearEnabled: false, activityEnabled: false }, treatments: null };
const items = [{ id: 1, label: "All enabled", config: { searchEnabled: true, clearEnabled: true, activityEnabled: true } }, { id: 2, label: "Clear Only", config: { searchEnabled: false, clearEnabled: true, activityEnabled: false } }, { id: 3, label: "Activities Only", config: { searchEnabled: false, clearEnabled: false, activityEnabled: true } }, { id: 4, label: "Activities and Clear", config: { searchEnabled: false, clearEnabled: true, activityEnabled: true } }];
obj.treatments = items;
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/native_intents/NativeIntentsExperiment.tsx");

export default experiment;