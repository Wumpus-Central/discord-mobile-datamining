// discord_app/modules/clips/GameEventsOnPlayerExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj2;
let obj = {
  kind: "user",
  name: "2026-07-clips-game-events-on-player",
  defaultConfig: { enableGameEventsOnPlayer: false },
  variations: obj2,
};
obj2 = { 1: null };
obj2[1] = { enableGameEventsOnPlayer: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/clips/GameEventsOnPlayerExperiment.tsx");

export default apexExperiment;
export const isGameEventsOnPlayerEnabled = function isGameEventsOnPlayerEnabled(getClipEventsTimeline) {
  const obj = { location: getClipEventsTimeline };
  return apexExperiment.getConfig(obj).enableGameEventsOnPlayer;
};
