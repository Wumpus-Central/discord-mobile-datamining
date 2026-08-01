// === Module 1175: supabaseIntegration ===

// Module 1175 (supabaseIntegration)
const require = arg1;
const dependencyMap = arg6;
arg5.supabaseIntegration = function supabaseIntegration(supabaseClient) {
  let obj = require(1024) /* feedbackAsyncIntegration */;
  obj = { supabaseClient: supabaseClient.supabaseClient };
  return obj.supabaseIntegration(obj);
};