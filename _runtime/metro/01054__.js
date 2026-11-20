// _runtime/metro/01054__.js

export function createIntegration(name) {
  let fn = arg1;
  if (arg1 === undefined) {
    fn = function n() {};
  }
  return { name, setupOnce: fn };
}
