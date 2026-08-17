// _runtime/01175_supabaseIntegration.js
import feedbackAsyncIntegration from "01024_feedbackAsyncIntegration.js";

require = arg1;
const dependencyMap = arg6;
arg5.supabaseIntegration = function supabaseIntegration(supabaseClient) {
  let obj = feedbackAsyncIntegration;
  obj = { supabaseClient: supabaseClient.supabaseClient };
  return obj.supabaseIntegration(obj);
};