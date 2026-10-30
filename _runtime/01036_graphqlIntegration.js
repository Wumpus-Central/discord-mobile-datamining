// _runtime/01036_graphqlIntegration.js
import feedbackAsyncIntegration from "00886_feedbackAsyncIntegration.js";

require = arg1;
const dependencyMap = arg6;

export function graphqlIntegration(endpoints) {
  return feedbackAsyncIntegration.graphqlClientIntegration({ endpoints: endpoints.endpoints });
}
