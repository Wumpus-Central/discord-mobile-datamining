if (true === global.RN$Bridgeless) {
  global.RN$enableMicrotasksInReact = true;
  const _module = require("polyfillObjectProperty");
  _module.polyfillGlobal("queueMicrotask", () => cancelIdleCallback(180).default.queueMicrotask);
  const _module1 = require("polyfillObjectProperty");
  _module1.polyfillGlobal("setImmediate", () => cancelIdleCallback(181).setImmediate);
  const _module2 = require("polyfillObjectProperty");
  _module2.polyfillGlobal("clearImmediate", () => cancelIdleCallback(181).clearImmediate);
  const _module3 = require("polyfillObjectProperty");
  _module3.polyfillGlobal("requestIdleCallback", () => cancelIdleCallback(182).default.requestIdleCallback);
  const _module4 = require("polyfillObjectProperty");
  _module4.polyfillGlobal("cancelIdleCallback", () => cancelIdleCallback(182).default.cancelIdleCallback);
} else {
  const _module5 = require("polyfillObjectProperty");
  _module5.polyfillGlobal("setTimeout", () => cancelIdleCallback(183).default[cancelIdleCallback]);
  const _module6 = require("polyfillObjectProperty");
  _module6.polyfillGlobal("clearTimeout", () => cancelIdleCallback(183).default[cancelIdleCallback]);
  const _module7 = require("polyfillObjectProperty");
  _module7.polyfillGlobal("setInterval", () => cancelIdleCallback(183).default[cancelIdleCallback]);
  const _module8 = require("polyfillObjectProperty");
  _module8.polyfillGlobal("clearInterval", () => cancelIdleCallback(183).default[cancelIdleCallback]);
  const _module9 = require("polyfillObjectProperty");
  _module9.polyfillGlobal("requestAnimationFrame", () => cancelIdleCallback(183).default[cancelIdleCallback]);
  const _module10 = require("polyfillObjectProperty");
  _module10.polyfillGlobal("cancelAnimationFrame", () => cancelIdleCallback(183).default[cancelIdleCallback]);
  const _module11 = require("polyfillObjectProperty");
  _module11.polyfillGlobal("requestIdleCallback", () => cancelIdleCallback(183).default[cancelIdleCallback]);
  const _module12 = require("polyfillObjectProperty");
  _module12.polyfillGlobal("cancelIdleCallback", () => cancelIdleCallback(183).default[cancelIdleCallback]);
  const _module13 = require("polyfillObjectProperty");
  _module13.polyfillGlobal("queueMicrotask", () => cancelIdleCallback(187).default);
  const _module14 = require("polyfillObjectProperty");
  _module14.polyfillGlobal("setImmediate", () => cancelIdleCallback(183).default.queueReactNativeMicrotask);
  const _module15 = require("polyfillObjectProperty");
  _module15.polyfillGlobal("clearImmediate", () => cancelIdleCallback(183).default.clearReactNativeMicrotask);
}