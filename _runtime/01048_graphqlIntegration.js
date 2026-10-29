// === Module 1048: graphqlIntegration ===

// Module 1048 (graphqlIntegration)
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 898 */;

require = arg1;
const dependencyMap = arg6;

export function graphqlIntegration(endpoints) {
  return feedbackAsyncIntegration.graphqlClientIntegration({ endpoints: endpoints.endpoints });
}