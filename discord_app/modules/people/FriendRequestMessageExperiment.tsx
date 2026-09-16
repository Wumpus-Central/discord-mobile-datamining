// === Module 13963: FriendRequestMessageExperiment ===

// Module 13963 (FriendRequestMessageExperiment)
import ApexExperiment from "ApexExperiment" /* 1434 */;
import size from "module_2" /* 2 */;

const obj = { kind: "user", name: "2026-03-friend-request-message", defaultConfig: { enabled: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/people/FriendRequestMessageExperiment.tsx");

export default apexExperiment;