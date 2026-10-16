// discord_app/modules/request_to_stream/RequestToStreamNonGamesExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

const obj = {
  name: "2026-10-request-to-stream-non-games",
  kind: "guild",
  defaultConfig: { enabled: false },
  variations: null,
};
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/request_to_stream/RequestToStreamNonGamesExperiment.tsx");

export default apexExperiment;
