// _runtime/01049_supabaseIntegration.js
import feedbackAsyncIntegration from "00898_feedbackAsyncIntegration.js";

require = arg1;
const dependencyMap = arg6;

export function supabaseIntegration(supabaseClient) {
  return feedbackAsyncIntegration.supabaseIntegration({ supabaseClient: supabaseClient.supabaseClient });
}
