// _runtime/01057_createIntegration.js
arg5.createIntegration = function createIntegration(name) {
  let fn = arg1;
  if (arg1 === undefined) {
    fn = function n() {};
  }
  return { name, setupOnce: fn };
};
