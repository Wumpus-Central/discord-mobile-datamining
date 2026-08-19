// === Module 13554: fetchExperiments ===

// Module 13554 (fetchExperiments)
import obj132 from "obj132" /* 2 */;
import sendRequest from "sendRequest" /* 530 */;
import ME from "ME" /* 676 */;

const Endpoints = ME.Endpoints;
const result = obj132.fileFinishedImporting("modules/experiments/fetchExperiments.tsx");

export const fetchExperiments = function fetchExperiments(arg0) {
  ({ withGuildExperiments, headers, context } = arg0);
  const HTTP = sendRequest.HTTP;
  return HTTP.get({ url: Endpoints.EXPERIMENTS, query: { with_guild_experiments: withGuildExperiments }, headers, context, retries: 3, oldFormErrors: true, rejectWithError: false });
};