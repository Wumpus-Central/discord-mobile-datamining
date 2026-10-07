// _runtime/01050_graphqlIntegration.js
import feedbackAsyncIntegration from "00900_feedbackAsyncIntegration.js";

require = arg1;
const dependencyMap = arg6;

export const graphqlIntegration = function graphqlIntegration(endpoints) {
  return feedbackAsyncIntegration.graphqlClientIntegration({ endpoints: endpoints.endpoints });
};
