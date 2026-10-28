// discord_app/modules/voice_calls/CampInDmExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

const obj = {
  kind: "user",
  name: "2026-10-camp-in-dm",
  defaultConfig: { disableIdleDisconnect: false },
  variations: null,
};
const obj2 = { 1: null };
obj2[1] = { disableIdleDisconnect: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/voice_calls/CampInDmExperiment.tsx");

export const CampInDmExperiment = apexExperiment;
export const shouldDisableCallIdleDisconnect = function shouldDisableCallIdleDisconnect() {
  return apexExperiment.getConfig({ location: "CallIdleManager" }).disableIdleDisconnect;
};
