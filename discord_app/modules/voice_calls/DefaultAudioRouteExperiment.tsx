// discord_app/modules/voice_calls/DefaultAudioRouteExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj = {
  name: "2026-02-default-audio-route",
  kind: "user",
  defaultConfig: { defaultSpeakerForGuildCall: false, defaultSpeakerForDMCall: false },
  variations: null,
};
obj = { 1: null, 2: { defaultSpeakerForGuildCall: true, defaultSpeakerForDMCall: false } };
obj[2] = { defaultSpeakerForGuildCall: true, defaultSpeakerForDMCall: true };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/voice_calls/DefaultAudioRouteExperiment.tsx");

export default apexExperiment;
