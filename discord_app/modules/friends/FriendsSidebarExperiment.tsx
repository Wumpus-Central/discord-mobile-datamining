// discord_app/modules/friends/FriendsSidebarExperiment.tsx
import set from "../../../_runtime/00002_set.js";
import ApexExperiment from "../experiments/apex/index.tsx";

const apexExperiment = ApexExperiment.createApexExperiment({
  name: "2026-09-friends-sidebar",
  kind: "user",
  defaultConfig: { sidebarEnabled: false },
  variations: { 0: { sidebarEnabled: false }, 1: { sidebarEnabled: true } },
});
const result = set.fileFinishedImporting("modules/friends/FriendsSidebarExperiment.tsx");

export default apexExperiment;
