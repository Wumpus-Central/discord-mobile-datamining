// === Module 14767: RequestToStreamNewEntryPointExperiment ===

// Module 14767 (RequestToStreamNewEntryPointExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1454 */;

const obj = { kind: "user", name: "2026-09-request-to-stream-new-entry-point", defaultConfig: { showReminderPanel: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { showReminderPanel: true };
obj.variations = obj2;
const size = fn(2);
const result = size.fileFinishedImporting("modules/request_to_stream/RequestToStreamNewEntryPointExperiment.tsx");

export default apex_ApexExperimentDefault(obj);