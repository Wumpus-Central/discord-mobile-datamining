// discord_app/modules/experiments/fetchExperiments.tsx
import Constants from "../../Constants.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/experiments/fetchExperiments.tsx");

export const fetchExperiments = function fetchExperiments(arg0) {
  ({ withGuildExperiments, headers, context } = arg0);
  const HTTP = HTTPUtils.HTTP;
  const request = {
    url: Endpoints.EXPERIMENTS,
    query: { with_guild_experiments: withGuildExperiments },
    headers,
    context,
    retries: 3,
    oldFormErrors: true,
    rejectWithError: false,
  };
  return HTTP.get(request);
};
