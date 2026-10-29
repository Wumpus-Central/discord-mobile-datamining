// === Module 1049: supabaseIntegration ===

// Module 1049 (supabaseIntegration)
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 898 */;

require = arg1;
const dependencyMap = arg6;

export function supabaseIntegration(supabaseClient) {
  return feedbackAsyncIntegration.supabaseIntegration({ supabaseClient: supabaseClient.supabaseClient });
}