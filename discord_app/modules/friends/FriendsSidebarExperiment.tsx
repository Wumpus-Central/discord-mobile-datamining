// discord_app/modules/friends/FriendsSidebarExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

const apexExperiment = ApexExperiment.createApexExperiment({
  name: "2026-09-friends-sidebar",
  kind: "user",
  defaultConfig: { sidebarEnabled: false },
  variations: { 0: { sidebarEnabled: false }, 1: { sidebarEnabled: true } },
});
const result = size.fileFinishedImporting("modules/friends/FriendsSidebarExperiment.tsx");

export default apexExperiment;
