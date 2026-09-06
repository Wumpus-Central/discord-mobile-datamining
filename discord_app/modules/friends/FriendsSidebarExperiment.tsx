// === Module 7283: apexExperiment ===

// Module 7283 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1433 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-09-friends-sidebar", kind: "user", defaultConfig: { sidebarEnabled: false }, variations: { 0: { sidebarEnabled: false }, 1: { sidebarEnabled: true } } });
const result = set.fileFinishedImporting("modules/friends/FriendsSidebarExperiment.tsx");

export default apexExperiment;