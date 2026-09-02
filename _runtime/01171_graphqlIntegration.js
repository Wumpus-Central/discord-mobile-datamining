// === Module 1171: graphqlIntegration ===

// Module 1171 (graphqlIntegration)
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 1021 */;

require = arg1;
const dependencyMap = arg6;
arg5.graphqlIntegration = function graphqlIntegration(endpoints) {
  let obj = feedbackAsyncIntegration;
  obj = { endpoints: endpoints.endpoints };
  return obj.graphqlClientIntegration(obj);
};