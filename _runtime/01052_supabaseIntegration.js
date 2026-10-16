// === Module 1052: supabaseIntegration ===

// Module 1052 (supabaseIntegration)
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 901 */;

require = arg1;
const dependencyMap = arg6;

export const supabaseIntegration = function supabaseIntegration(supabaseClient) {
  return feedbackAsyncIntegration.supabaseIntegration({ supabaseClient: supabaseClient.supabaseClient });
};