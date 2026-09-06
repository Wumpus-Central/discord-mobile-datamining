// discord_app/modules/telemetry_ring/HttpRequestSampleExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj = { kind: "user", name: "2026-04-http-request-sample", defaultConfig: { sampleRate: 0 }, variations: null };
obj = { 1: null };
obj[1] = { sampleRate: 0.0001 };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/telemetry_ring/HttpRequestSampleExperiment.tsx");

export default apexExperiment;
export const getHttpRequestSampleRate = function getHttpRequestSampleRate() {
  return apexExperiment.getConfig({ location: "track_http_request" }).sampleRate;
};
