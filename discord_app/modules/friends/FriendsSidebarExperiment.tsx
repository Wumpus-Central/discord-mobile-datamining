// === Module 7283: FriendsSidebarExperiment ===

// Module 7283 (FriendsSidebarExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-09-friends-sidebar", kind: "user", defaultConfig: { sidebarEnabled: false }, variations: { 0: { sidebarEnabled: false }, 1: { sidebarEnabled: true } } });
const result = size.fileFinishedImporting("modules/friends/FriendsSidebarExperiment.tsx");

export default apexExperiment;