// === Module 14190: fetchExperiments ===

// Module 14190 (fetchExperiments)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import sendRequest from "sendRequest" /* 1272 */;

const Endpoints = ME.Endpoints;
const result = set.fileFinishedImporting("modules/experiments/fetchExperiments.tsx");

export const fetchExperiments = function fetchExperiments(arg0) {
  ({ withGuildExperiments, headers, context } = arg0);
  const HTTP = sendRequest.HTTP;
  return HTTP.get({ url: Endpoints.EXPERIMENTS, query: { with_guild_experiments: withGuildExperiments }, headers, context, retries: 3, oldFormErrors: true, rejectWithError: false });
};