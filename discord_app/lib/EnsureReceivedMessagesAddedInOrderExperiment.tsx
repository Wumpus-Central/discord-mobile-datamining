// === Module 4997: apexExperiment ===

// Module 4997 (apexExperiment)
import obj132 from "obj132" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-04-ensure-received-messages-added-in-order", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = obj132.fileFinishedImporting("lib/EnsureReceivedMessagesAddedInOrderExperiment.tsx");

export default apexExperiment;