// _runtime/01051_supabaseIntegration.js
import feedbackAsyncIntegration from "00900_feedbackAsyncIntegration.js";

export const supabaseIntegration = function supabaseIntegration(supabaseClient) {
  const obj = feedbackAsyncIntegration;
  const obj2 = { supabaseClient: supabaseClient.supabaseClient };
  return obj.supabaseIntegration(obj2);
};
