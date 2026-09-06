// _runtime/01039_graphqlIntegration.js
import feedbackAsyncIntegration from "00889_feedbackAsyncIntegration.js";

require = arg1;
const dependencyMap = arg6;

export const graphqlIntegration = function graphqlIntegration(endpoints) {
  const obj = { endpoints: endpoints.endpoints };
  return obj.graphqlClientIntegration(obj);
};
