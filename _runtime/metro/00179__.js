// === Module 179: ? ===

// Module 179
import polyfillObjectProperty from "polyfillObjectProperty" /* 123 */;

if (true === global.RN$Bridgeless) {
  global.RN$enableMicrotasksInReact = true;
  const _module = polyfillObjectProperty;
  _module.polyfillGlobal("queueMicrotask", () => cancelIdleCallback(180).default.queueMicrotask);
  const _module1 = polyfillObjectProperty;
  _module1.polyfillGlobal("setImmediate", () => cancelIdleCallback(181).setImmediate);
  const _module2 = polyfillObjectProperty;
  _module2.polyfillGlobal("clearImmediate", () => cancelIdleCallback(181).clearImmediate);
  const _module3 = polyfillObjectProperty;
  _module3.polyfillGlobal("requestIdleCallback", () => cancelIdleCallback(182).default.requestIdleCallback);
  const _module4 = polyfillObjectProperty;
  _module4.polyfillGlobal("cancelIdleCallback", () => cancelIdleCallback(182).default.cancelIdleCallback);
} else {
  const _module5 = polyfillObjectProperty;
  _module5.polyfillGlobal("setTimeout", () => _cancelIdleCallback(183).default[cancelIdleCallback]);
  const _module6 = polyfillObjectProperty;
  _module6.polyfillGlobal("clearTimeout", () => _cancelIdleCallback(183).default[cancelIdleCallback]);
  const _module7 = polyfillObjectProperty;
  _module7.polyfillGlobal("setInterval", () => _cancelIdleCallback(183).default[cancelIdleCallback]);
  const _module8 = polyfillObjectProperty;
  _module8.polyfillGlobal("clearInterval", () => _cancelIdleCallback(183).default[cancelIdleCallback]);
  const _module9 = polyfillObjectProperty;
  _module9.polyfillGlobal("requestAnimationFrame", () => _cancelIdleCallback(183).default[cancelIdleCallback]);
  const _module10 = polyfillObjectProperty;
  _module10.polyfillGlobal("cancelAnimationFrame", () => _cancelIdleCallback(183).default[cancelIdleCallback]);
  const _module11 = polyfillObjectProperty;
  _module11.polyfillGlobal("requestIdleCallback", () => _cancelIdleCallback(183).default[cancelIdleCallback]);
  const _module12 = polyfillObjectProperty;
  _module12.polyfillGlobal("cancelIdleCallback", () => _cancelIdleCallback(183).default[cancelIdleCallback]);
  const _module13 = polyfillObjectProperty;
  _module13.polyfillGlobal("queueMicrotask", () => cancelIdleCallback(187).default);
  const _module14 = polyfillObjectProperty;
  _module14.polyfillGlobal("setImmediate", () => cancelIdleCallback(183).default.queueReactNativeMicrotask);
  const _module15 = polyfillObjectProperty;
  _module15.polyfillGlobal("clearImmediate", () => cancelIdleCallback(183).default.clearReactNativeMicrotask);
}