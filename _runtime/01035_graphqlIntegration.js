// === Module 1035: graphqlIntegration ===

// Module 1035 (graphqlIntegration)
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 886 */;

require = arg1;
const dependencyMap = arg6;

export function graphqlIntegration(endpoints) {
  return feedbackAsyncIntegration.graphqlClientIntegration({ endpoints: endpoints.endpoints });
}