// _runtime/metro/01057__.js

export function createIntegration(name) {
  let fn = arg1;
  if (arg1 === undefined) {
    fn = function n() {};
  }
  return { name, setupOnce: fn };
}
