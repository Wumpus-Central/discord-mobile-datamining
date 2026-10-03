// === Module 1050: graphqlIntegration ===

// Module 1050 (graphqlIntegration)
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 900 */;

require = arg1;
const dependencyMap = arg6;

export const graphqlIntegration = function graphqlIntegration(endpoints) {
  return feedbackAsyncIntegration.graphqlClientIntegration({ endpoints: endpoints.endpoints });
};