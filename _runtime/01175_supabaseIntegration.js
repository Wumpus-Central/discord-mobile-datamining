// _runtime/01175_supabaseIntegration.js
const require = arg1;
const dependencyMap = arg6;
arg5.supabaseIntegration = function supabaseIntegration(supabaseClient) {
  let obj = require("01024_feedbackAsyncIntegration.js") /* feedbackAsyncIntegration */;
  obj = { supabaseClient: supabaseClient.supabaseClient };
  return obj.supabaseIntegration(obj);
};