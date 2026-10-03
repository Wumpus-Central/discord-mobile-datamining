// _runtime/01051_supabaseIntegration.js
import feedbackAsyncIntegration from "00900_feedbackAsyncIntegration.js";

require = arg1;
const dependencyMap = arg6;

export const supabaseIntegration = function supabaseIntegration(supabaseClient) {
  return feedbackAsyncIntegration.supabaseIntegration({ supabaseClient: supabaseClient.supabaseClient });
};
