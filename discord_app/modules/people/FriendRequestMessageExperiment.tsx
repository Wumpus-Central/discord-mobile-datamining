// === Module 13316: apexExperiment ===

// Module 13316 (apexExperiment)
import obj132 from "obj132" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-03-friend-request-message", defaultConfig: { enabled: false }, variations: obj });
const result = obj132.fileFinishedImporting("modules/people/FriendRequestMessageExperiment.tsx");

export default apexExperiment;