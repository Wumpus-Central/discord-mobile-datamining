// discord_app/modules/experiments/fetchExperiments.tsx
import { Endpoints } from "ME";

const result = require("set").fileFinishedImporting("modules/experiments/fetchExperiments.tsx");

export const fetchExperiments = function fetchExperiments(arg0) {
  let context;
  let headers;
  let withGuildExperiments;
  ({ withGuildExperiments, headers, context } = arg0);
  const HTTP = require("../../../discord_common/js/packages/http-utils/HTTPUtils.tsx") /* sendRequest */.HTTP;
  return HTTP.get({ url: Endpoints.EXPERIMENTS, query: { with_guild_experiments: withGuildExperiments }, headers, context, retries: 3, oldFormErrors: true, rejectWithError: false });
};