// _runtime/01174_graphqlIntegration.js
const require = arg1;
const dependencyMap = arg6;
arg5.graphqlIntegration = function graphqlIntegration(endpoints) {
  let obj = require(1024) /* feedbackAsyncIntegration */;
  obj = { endpoints: endpoints.endpoints };
  return obj.graphqlClientIntegration(obj);
};