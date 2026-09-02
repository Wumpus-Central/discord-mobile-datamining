// === Module 14056: fetchExperiments ===

// Module 14056 (fetchExperiments)
import set from "set" /* 2 */;
import sendRequest from "sendRequest" /* 527 */;
import ME from "ME" /* 673 */;

const Endpoints = ME.Endpoints;
const result = set.fileFinishedImporting("modules/experiments/fetchExperiments.tsx");

export const fetchExperiments = function fetchExperiments(arg0) {
  ({ withGuildExperiments, headers, context } = arg0);
  const HTTP = sendRequest.HTTP;
  return HTTP.get({ url: Endpoints.EXPERIMENTS, query: { with_guild_experiments: withGuildExperiments }, headers, context, retries: 3, oldFormErrors: true, rejectWithError: false });
};