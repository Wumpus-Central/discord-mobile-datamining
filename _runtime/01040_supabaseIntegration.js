// === Module 1040: supabaseIntegration ===

// Module 1040 (supabaseIntegration)
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 889 */;

require = arg1;
const dependencyMap = arg6;
arg5.supabaseIntegration = function supabaseIntegration(supabaseClient) {
  let obj = feedbackAsyncIntegration;
  obj = { supabaseClient: supabaseClient.supabaseClient };
  return obj.supabaseIntegration(obj);
};