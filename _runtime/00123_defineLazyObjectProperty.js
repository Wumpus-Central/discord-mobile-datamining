// === Module 123: defineLazyObjectProperty ===

// Module 123 (defineLazyObjectProperty)
import defineLazyObjectProperty from "defineLazyObjectProperty" /* 49 */;


export const polyfillObjectProperty = function polyfillObjectProperty(_navigator, product, get) {
  const ownPropertyDescriptor = Object.getOwnPropertyDescriptor(_navigator, product);
  const configurable = (ownPropertyDescriptor || {}).configurable;
  if (!ownPropertyDescriptor) {
    const obj2 = { get, enumerable: false !== tmp3, writable: false !== tmp4 };
    const obj = defineLazyObjectProperty;
    obj.default(_navigator, product, obj2);
  } else {
    const _console = console;
    console.error(`Failed to set polyfill. ${product} is not configurable.`);
  }
};
export const polyfillGlobal = function polyfillGlobal(cancelIdleCallback, get) {
  const ownPropertyDescriptor = Object.getOwnPropertyDescriptor(global, cancelIdleCallback);
  const configurable = (ownPropertyDescriptor || {}).configurable;
  if (!ownPropertyDescriptor) {
    const obj2 = { get, enumerable: false !== tmp4, writable: false !== tmp5 };
    const obj = defineLazyObjectProperty;
    obj.default(global, cancelIdleCallback, obj2);
  } else {
    const _console = console;
    console.error(`Failed to set polyfill. ${cancelIdleCallback} is not configurable.`);
  }
};