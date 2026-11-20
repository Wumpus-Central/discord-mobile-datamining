// === Module 1036: supabaseIntegration ===

// Module 1036 (supabaseIntegration)
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 886 */;

require = arg1;
const dependencyMap = arg6;

export function supabaseIntegration(supabaseClient) {
  return feedbackAsyncIntegration.supabaseIntegration({ supabaseClient: supabaseClient.supabaseClient });
}