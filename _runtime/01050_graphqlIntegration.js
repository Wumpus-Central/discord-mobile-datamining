// _runtime/01050_graphqlIntegration.js
import feedbackAsyncIntegration from "00900_feedbackAsyncIntegration.js";

export const graphqlIntegration = function graphqlIntegration(endpoints) {
  const obj = feedbackAsyncIntegration;
  const obj2 = { endpoints: endpoints.endpoints };
  return obj.graphqlClientIntegration(obj2);
};
