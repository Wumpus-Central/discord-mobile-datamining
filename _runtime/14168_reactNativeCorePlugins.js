// === Module 14168: reactNativeCorePlugins ===

// Module 14168 (reactNativeCorePlugins)
import reactNativeCorePlugins from "module_14169" /* 14169 */;

let _exports;

let tmp;
let value;
let weakMap;
let closure_1 = {};
if (typeof WeakMap === "function") {
  const _WeakMap = WeakMap;
  const self = this;
  const self2 = this;
  weakMap = new WeakMap();
  const _WeakMap2 = WeakMap;
  const self3 = this;
  const weakMap1 = new WeakMap();
}
if (!reactNativeCorePlugins) {
  const merged = Object.assign({ default: null });
  merged[0] = reactNativeCorePlugins;
  value = merged;
  if (null !== reactNativeCorePlugins) {
    if (typeof reactNativeCorePlugins === "object") {
      if (!weakMap) {
        value = merged;
        const keys = Object.keys();
        if (keys !== undefined) {
          value = merged;
          while (keys[tmp] !== undefined) {
            let callResult = "default" !== tmp10;
            if (callResult) {
              let hasOwnProperty = {}.hasOwnProperty;
              callResult = hasOwnProperty.call(reactNativeCorePlugins, tmp10);
            }
            if (!callResult) {
              continue;
            } else {
              let _Object = Object;
              let ownPropertyDescriptor = defineProperty;
              if (ownPropertyDescriptor) {
                let _Object2 = Object;
                ownPropertyDescriptor = Object.getOwnPropertyDescriptor(reactNativeCorePlugins, tmp10);
              }
              if (!ownPropertyDescriptor) {
                merged[tmp10] = reactNativeCorePlugins[tmp10];
                continue;
              } else {
                let definePropertyResult1 = defineProperty(merged, tmp10, ownPropertyDescriptor);
                continue;
              }
              continue;
            }
            continue;
          }
        }
      } else if (weakMap.has(reactNativeCorePlugins)) {
        value = weakMap.get(reactNativeCorePlugins);
      } else {
        const result = weakMap.set(reactNativeCorePlugins, merged);
      }
    } else {
      value = merged;
    }
  }
} else {
  value = reactNativeCorePlugins;
}
let c2 = value;
const keys1 = Object.keys(value);
const item = keys1.forEach((item) => {
  _exports = item;
  const tmp = "default" !== item && "__esModule" !== item;
  if (tmp) {
    const _Object = Object;
    hasOwnProperty = Object.prototype.hasOwnProperty;
    let callResult = hasOwnProperty.call(closure_1, item);
    if (!callResult) {
      callResult = item in _exports && _exports[item] === value[item];
      const tmp4 = item in _exports && _exports[item] === value[item];
    }
    if (!callResult) {
      const _Object2 = Object;
      const obj = {
        enumerable: true,
        get() {
              return c2[item];
            }
      };
      Object.defineProperty(_exports, item, obj);
    }
  }
});

export default value.default;