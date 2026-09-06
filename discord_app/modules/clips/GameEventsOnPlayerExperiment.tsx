// discord_app/modules/clips/GameEventsOnPlayerExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj = {
  kind: "user",
  name: "2026-07-clips-game-events-on-player",
  defaultConfig: { enableGameEventsOnPlayer: false },
  variations: null,
};
obj = { 1: null };
obj[1] = { enableGameEventsOnPlayer: true };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/clips/GameEventsOnPlayerExperiment.tsx");

export default apexExperiment;
export const isGameEventsOnPlayerEnabled = function isGameEventsOnPlayerEnabled(getClipEventsTimeline) {
  return apexExperiment.getConfig({ location: getClipEventsTimeline }).enableGameEventsOnPlayer;
};
