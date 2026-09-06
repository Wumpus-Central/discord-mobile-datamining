// discord_app/modules/search/experiments/SearchResultsFeedbackExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let obj = {
  name: "2025-05-search-results-feedback",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: null,
};
obj = { 1: null };
obj[1] = { enabled: true };
obj.variations = obj;
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/search/experiments/SearchResultsFeedbackExperiment.tsx");

export const useIsSearchResultsFeedbackExperimentEnabled = function useIsSearchResultsFeedbackExperimentEnabled(
  location,
) {
  return closure_0.useConfig({ location: location.location }).enabled;
};
export const getIsSearchResultsFeedbackExperimentEnabled = function getIsSearchResultsFeedbackExperimentEnabled(
  location,
) {
  return closure_0.getConfig({ location: location.location }).enabled;
};
