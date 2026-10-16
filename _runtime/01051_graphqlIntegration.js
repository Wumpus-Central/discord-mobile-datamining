// === Module 1051: graphqlIntegration ===

// Module 1051 (graphqlIntegration)
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 901 */;

require = arg1;
const dependencyMap = arg6;

export const graphqlIntegration = function graphqlIntegration(endpoints) {
  return feedbackAsyncIntegration.graphqlClientIntegration({ endpoints: endpoints.endpoints });
};