// === Module 16497: apexExperiment ===

// Module 16497 (apexExperiment)
import obj132 from "obj132" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const obj = { 1: null };
obj[1] = { sampleRate: 0.0001 };
const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-04-http-request-sample", defaultConfig: { sampleRate: 0 }, variations: obj });
const result = obj132.fileFinishedImporting("modules/telemetry_ring/HttpRequestSampleExperiment.tsx");

export default apexExperiment;
export const getHttpRequestSampleRate = function getHttpRequestSampleRate() {
  return apexExperiment.getConfig({ location: "track_http_request" }).sampleRate;
};