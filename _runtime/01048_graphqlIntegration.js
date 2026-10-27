// _runtime/01048_graphqlIntegration.js
import feedbackAsyncIntegration from "00898_feedbackAsyncIntegration.js";

require = arg1;
const dependencyMap = arg6;

export const graphqlIntegration = function graphqlIntegration(endpoints) {
  return feedbackAsyncIntegration.graphqlClientIntegration({ endpoints: endpoints.endpoints });
};
