// discord_app/modules/experiments/fetchExperiments.tsx
import set from "../../../_runtime/00002_set.js";
import sendRequest from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import ME from "../../Constants.tsx";

const Endpoints = ME.Endpoints;
const result = set.fileFinishedImporting("modules/experiments/fetchExperiments.tsx");

export const fetchExperiments = function fetchExperiments(arg0) {
  ({ withGuildExperiments, headers, context } = arg0);
  const HTTP = sendRequest.HTTP;
  return HTTP.get({
    url: Endpoints.EXPERIMENTS,
    query: { with_guild_experiments: withGuildExperiments },
    headers,
    context,
    retries: 3,
    oldFormErrors: true,
    rejectWithError: false,
  });
};
