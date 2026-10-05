// === Module 179: ? ===

// Module 179
import defineLazyObjectProperty from "defineLazyObjectProperty" /* 123 */;
import NativeMicrotasksCxx from "NativeMicrotasksCxx" /* 180 */;
import _mod181 from "module_181" /* 181 */;
import NativeIdleCallbacksCxx from "NativeIdleCallbacksCxx" /* 182 */;
import _mod183 from "module_183" /* 183 */;

const require = globalThis.__r;

const f80333 = () => _mod183.default[cancelIdleCallback_str];
if (true === global.RN$Bridgeless) {
  global.RN$enableMicrotasksInReact = true;
  const _module = defineLazyObjectProperty;
  _module.polyfillGlobal("queueMicrotask", () => NativeMicrotasksCxx.default.queueMicrotask);
  const _module1 = defineLazyObjectProperty;
  _module1.polyfillGlobal("setImmediate", () => _mod181.setImmediate);
  const _module2 = defineLazyObjectProperty;
  _module2.polyfillGlobal("clearImmediate", () => _mod181.clearImmediate);
  const _module3 = defineLazyObjectProperty;
  _module3.polyfillGlobal("requestIdleCallback", () => NativeIdleCallbacksCxx.default.requestIdleCallback);
  const _module4 = defineLazyObjectProperty;
  _module4.polyfillGlobal("cancelIdleCallback", () => NativeIdleCallbacksCxx.default.cancelIdleCallback);
} else {
  const setTimeout_str = "setTimeout";
  const _module5 = defineLazyObjectProperty;
  _module5.polyfillGlobal("setTimeout", f80333);
  const clearTimeout_str = "clearTimeout";
  const _module6 = defineLazyObjectProperty;
  _module6.polyfillGlobal("clearTimeout", f80333);
  const setInterval_str = "setInterval";
  const _module7 = defineLazyObjectProperty;
  _module7.polyfillGlobal("setInterval", f80333);
  const clearInterval_str = "clearInterval";
  const _module8 = defineLazyObjectProperty;
  _module8.polyfillGlobal("clearInterval", f80333);
  const requestAnimationFrame_str = "requestAnimationFrame";
  const _module9 = defineLazyObjectProperty;
  _module9.polyfillGlobal("requestAnimationFrame", f80333);
  const cancelAnimationFrame_str = "cancelAnimationFrame";
  const _module10 = defineLazyObjectProperty;
  _module10.polyfillGlobal("cancelAnimationFrame", f80333);
  const _module11 = defineLazyObjectProperty;
  _module11.polyfillGlobal("requestIdleCallback", f80333);
  const cancelIdleCallback_str = "cancelIdleCallback";
  const _module12 = defineLazyObjectProperty;
  _module12.polyfillGlobal("cancelIdleCallback", f80333);
  const _module13 = defineLazyObjectProperty;
  _module13.polyfillGlobal("queueMicrotask", () => require("queueMicrotask").default);
  const _module14 = defineLazyObjectProperty;
  _module14.polyfillGlobal("setImmediate", () => _mod183.default.queueReactNativeMicrotask);
  const _module15 = defineLazyObjectProperty;
  _module15.polyfillGlobal("clearImmediate", () => _mod183.default.clearReactNativeMicrotask);
}