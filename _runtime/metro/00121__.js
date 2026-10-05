// _runtime/metro/00121__.js
if (undefined === global.window) {
  global.window = global;
}
if (undefined === global.self) {
  global.self = global;
}
global.process = global.process || {};
let env = global.process.env;
const _process = global.process;
if (!env) {
  env = {};
}
_process.env = env;
if (!global.process.env.NODE_ENV) {
  global.process.env.NODE_ENV = "production";
}
