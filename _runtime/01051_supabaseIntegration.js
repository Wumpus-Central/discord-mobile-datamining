// === Module 1051: supabaseIntegration ===

// Module 1051 (supabaseIntegration)
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 900 */;

require = arg1;
const dependencyMap = arg6;

export const supabaseIntegration = function supabaseIntegration(supabaseClient) {
  return feedbackAsyncIntegration.supabaseIntegration({ supabaseClient: supabaseClient.supabaseClient });
};