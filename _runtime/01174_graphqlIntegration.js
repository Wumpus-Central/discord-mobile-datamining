// _runtime/01174_graphqlIntegration.js
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 1024 */;

require = arg1;
const dependencyMap = arg6;
arg5.graphqlIntegration = function graphqlIntegration(endpoints) {
  let obj = feedbackAsyncIntegration;
  obj = { endpoints: endpoints.endpoints };
  return obj.graphqlClientIntegration(obj);
};