// === Module 1051: supabaseIntegration ===

// Module 1051 (supabaseIntegration)
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 900 */;


export const supabaseIntegration = function supabaseIntegration(supabaseClient) {
  const obj = feedbackAsyncIntegration;
  const obj2 = { supabaseClient: supabaseClient.supabaseClient };
  return obj.supabaseIntegration(obj2);
};