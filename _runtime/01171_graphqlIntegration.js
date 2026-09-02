// _runtime/01171_graphqlIntegration.js
import feedbackAsyncIntegration from "01021_feedbackAsyncIntegration.js";

require = arg1;
const dependencyMap = arg6;
arg5.graphqlIntegration = function graphqlIntegration(endpoints) {
  let obj = feedbackAsyncIntegration;
  obj = { endpoints: endpoints.endpoints };
  return obj.graphqlClientIntegration(obj);
};
