// === Module 1039: graphqlIntegration ===

// Module 1039 (graphqlIntegration)
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 889 */;

require = arg1;
const dependencyMap = arg6;

export const graphqlIntegration = function graphqlIntegration(endpoints) {
  const obj = { endpoints: endpoints.endpoints };
  return obj.graphqlClientIntegration(obj);
};