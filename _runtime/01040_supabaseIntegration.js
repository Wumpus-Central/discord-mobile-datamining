// _runtime/01040_supabaseIntegration.js
import feedbackAsyncIntegration from "00889_feedbackAsyncIntegration.js";

require = arg1;
const dependencyMap = arg6;

export const supabaseIntegration = function supabaseIntegration(supabaseClient) {
  const obj = { supabaseClient: supabaseClient.supabaseClient };
  return obj.supabaseIntegration(obj);
};
