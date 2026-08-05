import { defineLazyObjectProperty } from "00049_defineLazyObjectProperty.js";
// _runtime/00123_polyfillObjectProperty.js
const global = arg0;
const require = arg1;
const dependencyMap = arg6;
arg5.polyfillObjectProperty = function polyfillObjectProperty(_navigator, product, arg2) {
  const ownPropertyDescriptor = Object.getOwnPropertyDescriptor(_navigator, product);
  let obj = ownPropertyDescriptor;
  if (!ownPropertyDescriptor) {
    obj = {};
  }
  const configurable = obj.configurable;
  if (!ownPropertyDescriptor) {
    obj = { get: null, enumerable: null, writable: null };
    obj[0] = arg2;
    obj[1] = false !== tmp2;
    obj[2] = false !== tmp3;
    defineLazyObjectProperty /* defineLazyObjectProperty */.default(_navigator, product, obj);
    const obj2 = defineLazyObjectProperty /* defineLazyObjectProperty */;
  } else {
    const _console = console;
    console.error(`Failed to set polyfill. ${product} is not configurable.`);
  }
};
arg5.polyfillGlobal = function polyfillGlobal(arg0, arg1) {
  const ownPropertyDescriptor = Object.getOwnPropertyDescriptor(global, arg0);
  let obj = ownPropertyDescriptor;
  if (!ownPropertyDescriptor) {
    obj = {};
  }
  const configurable = obj.configurable;
  if (!ownPropertyDescriptor) {
    obj = { get: null, enumerable: null, writable: null };
    obj[0] = arg1;
    obj[1] = false !== tmp3;
    obj[2] = false !== tmp4;
    defineLazyObjectProperty /* defineLazyObjectProperty */.default(global, arg0, obj);
    const obj2 = defineLazyObjectProperty /* defineLazyObjectProperty */;
  } else {
    const _console = console;
    console.error(`Failed to set polyfill. ${arg0} is not configurable.`);
  }
};