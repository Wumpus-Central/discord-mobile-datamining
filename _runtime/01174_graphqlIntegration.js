import { feedbackAsyncIntegration } from "01024_feedbackAsyncIntegration.js";
// _runtime/01174_graphqlIntegration.js
const require = arg1;
const dependencyMap = arg6;
arg5.graphqlIntegration = function graphqlIntegration(endpoints) {
  let obj = feedbackAsyncIntegration /* feedbackAsyncIntegration */;
  obj = { endpoints: endpoints.endpoints };
  return obj.graphqlClientIntegration(obj);
};