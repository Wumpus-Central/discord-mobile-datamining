// === Module 12441: MessageRequestRestrictionExperiment ===

// Module 12441 (MessageRequestRestrictionExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-06-non-friend-messages-requests-in-uk", kind: "user", defaultConfig: { enabled: false }, variations: null };
obj = { 1: null };
obj[1] = { enabled: true };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/message_request/MessageRequestRestrictionExperiment.tsx");

export default apexExperiment;