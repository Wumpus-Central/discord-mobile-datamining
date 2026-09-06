// _runtime/00123_polyfillObjectProperty.js
import defineLazyObjectProperty from "00049_defineLazyObjectProperty.js";

const global = arg0;
require = arg1;
const dependencyMap = arg6;

export const polyfillObjectProperty = function polyfillObjectProperty(_navigator, product, get) {
  const ownPropertyDescriptor = Object.getOwnPropertyDescriptor(_navigator, product);
  let obj = ownPropertyDescriptor;
  if (!ownPropertyDescriptor) {
    obj = {};
  }
  const configurable = obj.configurable;
  if (!ownPropertyDescriptor) {
    obj = { get, enumerable: false !== tmp2, writable: false !== tmp3 };
    defineLazyObjectProperty.default(_navigator, product, obj);
  } else {
    const _console = console;
    console.error(`Failed to set polyfill. ${product} is not configurable.`);
  }
};
export const polyfillGlobal = function polyfillGlobal(arg0, get) {
  const ownPropertyDescriptor = Object.getOwnPropertyDescriptor(global, arg0);
  let obj = ownPropertyDescriptor;
  if (!ownPropertyDescriptor) {
    obj = {};
  }
  const configurable = obj.configurable;
  if (!ownPropertyDescriptor) {
    obj = { get, enumerable: false !== tmp3, writable: false !== tmp4 };
    defineLazyObjectProperty.default(global, arg0, obj);
  } else {
    const _console = console;
    console.error(`Failed to set polyfill. ${arg0} is not configurable.`);
  }
};
