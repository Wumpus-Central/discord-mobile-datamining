// === Module 686: ? ===

// Module 686
import __SENTRY_DEBUG__ from "__SENTRY_DEBUG__" /* 687 */;
import consoleSandbox from "consoleSandbox" /* 688 */;
import _mod691 from "module_691" /* 691 */;
import _htmlElementAsString from "_htmlElementAsString" /* 692 */;

require = arg1;
const dependencyMap = arg6;
function addNonEnumerableProperty(activeRootSpan, __sentry_may_have_lazy_routes__, host) {
  try {
    const _Object = Object;
    const obj = { value: host, writable: true, configurable: true };
    Object.defineProperty(activeRootSpan, __sentry_may_have_lazy_routes__, obj);
  } catch (err) {
    if (__SENTRY_DEBUG__.DEBUG_BUILD) {
      const debug = consoleSandbox.debug;
      const _HermesInternal = HermesInternal;
      debug.log("Failed to add non-enumerable property \"" + tmp2 + "\" to object", tmp);
    }
  }
}
function markFunctionWrapped(sentryWrapped, __sentry_wrapped__) {
  try {
    let prototype = __sentry_wrapped__.prototype;
    if (!prototype) {
      prototype = {};
    }
    __sentry_wrapped__.prototype = prototype;
    sentryWrapped.prototype = prototype;
    addNonEnumerableProperty(sentryWrapped, "__sentry_original__", __sentry_wrapped__);
  } catch (err) {
  }
}
function convertToPlainObject(type) {
  if (obj.isError(type)) {
    const error = { message: null, name: null, stack: null };
    ({ message: obj6.message, name: obj6.name, stack: obj6.stack } = type);
    if (typeof type === "object") {
      if (null !== type) {
        const obj2 = {};
        let obj3 = obj2;
        const keys = Object.keys();
        if (keys !== undefined) {
          obj3 = obj2;
          while (keys[tmp] !== undefined) {
            let _Object2 = Object;
            let call2 = hasOwnProperty2.call;
            if (!(typeof call2 === "unknown" ? hasOwnProperty2(tmp17) : call2(type, tmp17))) {
              continue;
            } else {
              obj2[tmp17] = type[tmp17];
              continue;
            }
            continue;
          }
        }
      }
      const merged = Object.assign(obj3);
      return error;
    }
    obj3 = {};
  } else {
    if (tmp2Result.isEvent(type)) {
      const obj4 = { type: type.type, target: serializeEventTarget(type.target), currentTarget: serializeEventTarget(type.currentTarget) };
      if (typeof type === "object") {
        if (null !== type) {
          const obj5 = {};
          let obj7 = obj5;
          const keys1 = Object.keys();
          if (keys1 !== undefined) {
            obj7 = obj5;
            while (keys1[tmp] !== undefined) {
              let _Object = Object;
              hasOwnProperty = Object.prototype.hasOwnProperty;
              let call = hasOwnProperty.call;
              if (!(typeof call === "unknown" ? hasOwnProperty(tmp8) : call(type, tmp8))) {
                continue;
              } else {
                obj5[tmp8] = type[tmp8];
                continue;
              }
              continue;
            }
          }
        }
        const merged1 = Object.assign(obj7);
        let isInstanceOfResult = typeof globalThis.CustomEvent !== "undefined";
        if (typeof globalThis.CustomEvent !== "undefined") {
          isInstanceOfResult = _mod691.isInstanceOf(type, globalThis.CustomEvent);
          const tmp2Result2 = _mod691;
        }
        if (isInstanceOfResult) {
          obj4.detail = type.detail;
        }
        return obj4;
      }
      obj7 = {};
    } else {
      return type;
    }
    tmp2Result = _mod691;
  }
  obj = _mod691;
}
function serializeEventTarget(currentTarget) {
  try {
    if (obj.isElement(currentTarget)) {
      let htmlTreeAsStringResult = _htmlElementAsString.htmlTreeAsString(currentTarget);
      const tmp2Result = _htmlElementAsString;
    } else {
      const _Object = Object;
      const call = toString.call;
      if (typeof call === "unknown") {
        htmlTreeAsStringResult = toString();
      } else {
        htmlTreeAsStringResult = call(currentTarget);
      }
    }
    return htmlTreeAsStringResult;
  } catch (err) {
    return "<unknown>";
  }
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export { addNonEnumerableProperty };
export { convertToPlainObject };
export function dropUndefinedKeys(_Object) {
  const map = new Map();
  closure_0 = _Object;
  items = undefined;
  let obj;
  value = _Object;
  if (null !== _Object) {
    value = _Object;
    if (typeof _Object === "object") {
      value = map.get(_Object);
      if (undefined === value) {
        const _Array = Array;
        if (Array.isArray(_Object)) {
          items = [];
          const result = map.set(_Object, items);
          const item = _Object.forEach((item) => {
            closure_0 = item;
            items = undefined;
            let obj2;
            let value = item;
            if (null !== item) {
              value = item;
              if (typeof item === "object") {
                value = obj.get(item);
                if (undefined === value) {
                  const _Array = Array;
                  if (Array.isArray(item)) {
                    items = [];
                    const result = obj.set(item, items);
                    item = item.forEach((item) => {
                      closure_0 = item;
                      items = undefined;
                      let obj2;
                      let value = item;
                      if (null !== item) {
                        value = item;
                        if (typeof item === "object") {
                          value = obj.get(item);
                          if (undefined === value) {
                            const _Array = Array;
                            if (Array.isArray(item)) {
                              items = [];
                              const result = obj.set(item, items);
                              item = item.forEach((item) => {
                                closure_0 = item;
                                items = undefined;
                                let obj2;
                                let value = item;
                                if (null !== item) {
                                  value = item;
                                  if (typeof item === "object") {
                                    value = obj.get(item);
                                    if (undefined === value) {
                                      const _Array = Array;
                                      if (Array.isArray(item)) {
                                        items = [];
                                        const result = obj.set(item, items);
                                        item = item.forEach((item) => {
                                          closure_0 = item;
                                          items = undefined;
                                          let obj2;
                                          let value = item;
                                          if (null !== item) {
                                            value = item;
                                            if (typeof item === "object") {
                                              value = obj.get(item);
                                              if (undefined === value) {
                                                const _Array = Array;
                                                if (Array.isArray(item)) {
                                                  items = [];
                                                  const result = obj.set(item, items);
                                                  item = item.forEach(/* F79422 */ function() { ... });
                                                  value = items;
                                                } else {
                                                  const constructor = item.constructor;
                                                  const _Object = Object;
                                                  value = item;
                                                  if (tmp3) {
                                                    obj2 = {};
                                                    const result1 = obj.set(item, obj2);
                                                    const _Object2 = Object;
                                                    const keys = Object.keys(item);
                                                    const item1 = keys.forEach(/* F79423 */ function() { ... });
                                                    value = obj2;
                                                  }
                                                  tmp3 = constructor === Object || undefined === constructor;
                                                }
                                              }
                                            }
                                          }
                                          items.push(value);
                                        });
                                        value = items;
                                      } else {
                                        const constructor = item.constructor;
                                        const _Object = Object;
                                        value = item;
                                        if (tmp3) {
                                          obj2 = {};
                                          const result1 = obj.set(item, obj2);
                                          const _Object2 = Object;
                                          const keys = Object.keys(item);
                                          const item1 = keys.forEach((item) => {
                                            if (undefined !== closure_1_0[item]) {
                                              closure_1 = closure_1_1;
                                              let value = arr;
                                              if (null !== arr) {
                                                value = arr;
                                                if (typeof arr === "object") {
                                                  value = closure_1_1.get(arr);
                                                  if (undefined === value) {
                                                    let _Array = Array;
                                                    if (!Array.isArray(arr)) {
                                                      let constructor = arr.constructor;
                                                      let _Object = Object;
                                                      value = arr;
                                                      if (tmp) {
                                                        obj = {};
                                                        let result = closure_1_1.set(arr, obj);
                                                        let _Object2 = Object;
                                                        let keys = Object.keys(arr);
                                                        item = keys.forEach(/* F79423 */ function() { ... });
                                                        value = obj;
                                                      }
                                                      tmp = constructor === Object || undefined === constructor;
                                                    }
                                                  }
                                                  items = [];
                                                  let result1 = closure_1_1.set(arr, items);
                                                  let item1 = arr.forEach(/* F79422 */ function() { ... });
                                                  value = items;
                                                }
                                              }
                                              closure_1_3[item] = value;
                                            }
                                          });
                                          value = obj2;
                                        }
                                        tmp3 = constructor === Object || undefined === constructor;
                                      }
                                    }
                                  }
                                }
                                items.push(value);
                              });
                              value = items;
                            } else {
                              const constructor = item.constructor;
                              const _Object = Object;
                              value = item;
                              if (tmp3) {
                                obj2 = {};
                                const result1 = obj.set(item, obj2);
                                const _Object2 = Object;
                                const keys = Object.keys(item);
                                const item1 = keys.forEach((item) => {
                                  if (undefined !== closure_1_0[item]) {
                                    closure_1 = closure_1_1;
                                    let value = arr;
                                    if (null !== arr) {
                                      value = arr;
                                      if (typeof arr === "object") {
                                        value = closure_1_1.get(arr);
                                        if (undefined === value) {
                                          let _Array = Array;
                                          if (!Array.isArray(arr)) {
                                            let constructor = arr.constructor;
                                            let _Object = Object;
                                            value = arr;
                                            if (tmp) {
                                              obj = {};
                                              let result = closure_1_1.set(arr, obj);
                                              let _Object2 = Object;
                                              let keys = Object.keys(arr);
                                              item = keys.forEach((item) => {
                                                if (undefined !== closure_1_0[item]) {
                                                  closure_1 = closure_1_1;
                                                  let value = arr;
                                                  if (null !== arr) {
                                                    value = arr;
                                                    if (typeof arr === "object") {
                                                      value = closure_1_1.get(arr);
                                                      if (undefined === value) {
                                                        let _Array = Array;
                                                        if (!Array.isArray(arr)) {
                                                          let constructor = arr.constructor;
                                                          let _Object = Object;
                                                          value = arr;
                                                          if (tmp) {
                                                            obj = {};
                                                            let result = closure_1_1.set(arr, obj);
                                                            let _Object2 = Object;
                                                            let keys = Object.keys(arr);
                                                            item = keys.forEach(/* F79423 */ function() { ... });
                                                            value = obj;
                                                          }
                                                          tmp = constructor === Object || undefined === constructor;
                                                        }
                                                      }
                                                      items = [];
                                                      let result1 = closure_1_1.set(arr, items);
                                                      let item1 = arr.forEach(/* F79422 */ function() { ... });
                                                      value = items;
                                                    }
                                                  }
                                                  closure_1_3[item] = value;
                                                }
                                              });
                                              value = obj;
                                            }
                                            tmp = constructor === Object || undefined === constructor;
                                          }
                                        }
                                        items = [];
                                        let result1 = closure_1_1.set(arr, items);
                                        let item1 = arr.forEach((item) => {
                                          closure_0 = item;
                                          items = undefined;
                                          let obj2;
                                          let value = item;
                                          if (null !== item) {
                                            value = item;
                                            if (typeof item === "object") {
                                              value = obj.get(item);
                                              if (undefined === value) {
                                                const _Array = Array;
                                                if (Array.isArray(item)) {
                                                  items = [];
                                                  const result = obj.set(item, items);
                                                  item = item.forEach(/* F79422 */ function() { ... });
                                                  value = items;
                                                } else {
                                                  const constructor = item.constructor;
                                                  const _Object = Object;
                                                  value = item;
                                                  if (tmp3) {
                                                    obj2 = {};
                                                    const result1 = obj.set(item, obj2);
                                                    const _Object2 = Object;
                                                    const keys = Object.keys(item);
                                                    const item1 = keys.forEach(/* F79423 */ function() { ... });
                                                    value = obj2;
                                                  }
                                                  tmp3 = constructor === Object || undefined === constructor;
                                                }
                                              }
                                            }
                                          }
                                          items.push(value);
                                        });
                                        value = items;
                                      }
                                    }
                                    closure_1_3[item] = value;
                                  }
                                });
                                value = obj2;
                              }
                              tmp3 = constructor === Object || undefined === constructor;
                            }
                          }
                        }
                      }
                      items.push(value);
                    });
                    value = items;
                  } else {
                    const constructor = item.constructor;
                    const _Object = Object;
                    value = item;
                    if (tmp3) {
                      obj2 = {};
                      const result1 = obj.set(item, obj2);
                      const _Object2 = Object;
                      const keys = Object.keys(item);
                      const item1 = keys.forEach((item) => {
                        if (undefined !== closure_1_0[item]) {
                          closure_1 = closure_1_1;
                          let value = arr;
                          if (null !== arr) {
                            value = arr;
                            if (typeof arr === "object") {
                              value = closure_1_1.get(arr);
                              if (undefined === value) {
                                let _Array = Array;
                                if (!Array.isArray(arr)) {
                                  let constructor = arr.constructor;
                                  let _Object = Object;
                                  value = arr;
                                  if (tmp) {
                                    obj = {};
                                    let result = closure_1_1.set(arr, obj);
                                    let _Object2 = Object;
                                    let keys = Object.keys(arr);
                                    item = keys.forEach((item) => {
                                      if (undefined !== closure_1_0[item]) {
                                        closure_1 = closure_1_1;
                                        let value = arr;
                                        if (null !== arr) {
                                          value = arr;
                                          if (typeof arr === "object") {
                                            value = closure_1_1.get(arr);
                                            if (undefined === value) {
                                              let _Array = Array;
                                              if (!Array.isArray(arr)) {
                                                let constructor = arr.constructor;
                                                let _Object = Object;
                                                value = arr;
                                                if (tmp) {
                                                  obj = {};
                                                  let result = closure_1_1.set(arr, obj);
                                                  let _Object2 = Object;
                                                  let keys = Object.keys(arr);
                                                  item = keys.forEach((item) => {
                                                    if (undefined !== closure_1_0[item]) {
                                                      closure_1 = closure_1_1;
                                                      let value = arr;
                                                      if (null !== arr) {
                                                        value = arr;
                                                        if (typeof arr === "object") {
                                                          value = closure_1_1.get(arr);
                                                          if (undefined === value) {
                                                            let _Array = Array;
                                                            if (!Array.isArray(arr)) {
                                                              let constructor = arr.constructor;
                                                              let _Object = Object;
                                                              value = arr;
                                                              if (tmp) {
                                                                obj = {};
                                                                let result = closure_1_1.set(arr, obj);
                                                                let _Object2 = Object;
                                                                let keys = Object.keys(arr);
                                                                item = keys.forEach(/* F79423 */ function() { ... });
                                                                value = obj;
                                                              }
                                                              tmp = constructor === Object || undefined === constructor;
                                                            }
                                                          }
                                                          items = [];
                                                          let result1 = closure_1_1.set(arr, items);
                                                          let item1 = arr.forEach(/* F79422 */ function() { ... });
                                                          value = items;
                                                        }
                                                      }
                                                      closure_1_3[item] = value;
                                                    }
                                                  });
                                                  value = obj;
                                                }
                                                tmp = constructor === Object || undefined === constructor;
                                              }
                                            }
                                            items = [];
                                            let result1 = closure_1_1.set(arr, items);
                                            let item1 = arr.forEach((item) => {
                                              closure_0 = item;
                                              items = undefined;
                                              let obj2;
                                              let value = item;
                                              if (null !== item) {
                                                value = item;
                                                if (typeof item === "object") {
                                                  value = obj.get(item);
                                                  if (undefined === value) {
                                                    const _Array = Array;
                                                    if (Array.isArray(item)) {
                                                      items = [];
                                                      const result = obj.set(item, items);
                                                      item = item.forEach(/* F79422 */ function() { ... });
                                                      value = items;
                                                    } else {
                                                      const constructor = item.constructor;
                                                      const _Object = Object;
                                                      value = item;
                                                      if (tmp3) {
                                                        obj2 = {};
                                                        const result1 = obj.set(item, obj2);
                                                        const _Object2 = Object;
                                                        const keys = Object.keys(item);
                                                        const item1 = keys.forEach(/* F79423 */ function() { ... });
                                                        value = obj2;
                                                      }
                                                      tmp3 = constructor === Object || undefined === constructor;
                                                    }
                                                  }
                                                }
                                              }
                                              items.push(value);
                                            });
                                            value = items;
                                          }
                                        }
                                        closure_1_3[item] = value;
                                      }
                                    });
                                    value = obj;
                                  }
                                  tmp = constructor === Object || undefined === constructor;
                                }
                              }
                              items = [];
                              let result1 = closure_1_1.set(arr, items);
                              let item1 = arr.forEach((item) => {
                                closure_0 = item;
                                items = undefined;
                                let obj2;
                                let value = item;
                                if (null !== item) {
                                  value = item;
                                  if (typeof item === "object") {
                                    value = obj.get(item);
                                    if (undefined === value) {
                                      const _Array = Array;
                                      if (Array.isArray(item)) {
                                        items = [];
                                        const result = obj.set(item, items);
                                        item = item.forEach((item) => {
                                          closure_0 = item;
                                          items = undefined;
                                          let obj2;
                                          let value = item;
                                          if (null !== item) {
                                            value = item;
                                            if (typeof item === "object") {
                                              value = obj.get(item);
                                              if (undefined === value) {
                                                const _Array = Array;
                                                if (Array.isArray(item)) {
                                                  items = [];
                                                  const result = obj.set(item, items);
                                                  item = item.forEach(/* F79422 */ function() { ... });
                                                  value = items;
                                                } else {
                                                  const constructor = item.constructor;
                                                  const _Object = Object;
                                                  value = item;
                                                  if (tmp3) {
                                                    obj2 = {};
                                                    const result1 = obj.set(item, obj2);
                                                    const _Object2 = Object;
                                                    const keys = Object.keys(item);
                                                    const item1 = keys.forEach(/* F79423 */ function() { ... });
                                                    value = obj2;
                                                  }
                                                  tmp3 = constructor === Object || undefined === constructor;
                                                }
                                              }
                                            }
                                          }
                                          items.push(value);
                                        });
                                        value = items;
                                      } else {
                                        const constructor = item.constructor;
                                        const _Object = Object;
                                        value = item;
                                        if (tmp3) {
                                          obj2 = {};
                                          const result1 = obj.set(item, obj2);
                                          const _Object2 = Object;
                                          const keys = Object.keys(item);
                                          const item1 = keys.forEach((item) => {
                                            if (undefined !== closure_1_0[item]) {
                                              closure_1 = closure_1_1;
                                              let value = arr;
                                              if (null !== arr) {
                                                value = arr;
                                                if (typeof arr === "object") {
                                                  value = closure_1_1.get(arr);
                                                  if (undefined === value) {
                                                    let _Array = Array;
                                                    if (!Array.isArray(arr)) {
                                                      let constructor = arr.constructor;
                                                      let _Object = Object;
                                                      value = arr;
                                                      if (tmp) {
                                                        obj = {};
                                                        let result = closure_1_1.set(arr, obj);
                                                        let _Object2 = Object;
                                                        let keys = Object.keys(arr);
                                                        item = keys.forEach(/* F79423 */ function() { ... });
                                                        value = obj;
                                                      }
                                                      tmp = constructor === Object || undefined === constructor;
                                                    }
                                                  }
                                                  items = [];
                                                  let result1 = closure_1_1.set(arr, items);
                                                  let item1 = arr.forEach(/* F79422 */ function() { ... });
                                                  value = items;
                                                }
                                              }
                                              closure_1_3[item] = value;
                                            }
                                          });
                                          value = obj2;
                                        }
                                        tmp3 = constructor === Object || undefined === constructor;
                                      }
                                    }
                                  }
                                }
                                items.push(value);
                              });
                              value = items;
                            }
                          }
                          closure_1_3[item] = value;
                        }
                      });
                      value = obj2;
                    }
                    tmp3 = constructor === Object || undefined === constructor;
                  }
                }
              }
            }
            items.push(value);
          });
          value = items;
        } else {
          const constructor = _Object.constructor;
          _Object = Object;
          value = _Object;
          if (tmp2) {
            obj = {};
            const result1 = map.set(_Object, obj);
            const _Object2 = Object;
            const keys = Object.keys(_Object);
            const item1 = keys.forEach((item) => {
              if (undefined !== closure_1_0[item]) {
                closure_1 = closure_1_1;
                let value = arr;
                if (null !== arr) {
                  value = arr;
                  if (typeof arr === "object") {
                    value = closure_1_1.get(arr);
                    if (undefined === value) {
                      let _Array = Array;
                      if (!Array.isArray(arr)) {
                        let constructor = arr.constructor;
                        let _Object = Object;
                        value = arr;
                        if (tmp) {
                          obj = {};
                          let result = closure_1_1.set(arr, obj);
                          let _Object2 = Object;
                          let keys = Object.keys(arr);
                          item = keys.forEach((item) => {
                            if (undefined !== closure_1_0[item]) {
                              closure_1 = closure_1_1;
                              let value = arr;
                              if (null !== arr) {
                                value = arr;
                                if (typeof arr === "object") {
                                  value = closure_1_1.get(arr);
                                  if (undefined === value) {
                                    let _Array = Array;
                                    if (!Array.isArray(arr)) {
                                      let constructor = arr.constructor;
                                      let _Object = Object;
                                      value = arr;
                                      if (tmp) {
                                        obj = {};
                                        let result = closure_1_1.set(arr, obj);
                                        let _Object2 = Object;
                                        let keys = Object.keys(arr);
                                        item = keys.forEach((item) => {
                                          if (undefined !== closure_1_0[item]) {
                                            closure_1 = closure_1_1;
                                            let value = arr;
                                            if (null !== arr) {
                                              value = arr;
                                              if (typeof arr === "object") {
                                                value = closure_1_1.get(arr);
                                                if (undefined === value) {
                                                  let _Array = Array;
                                                  if (!Array.isArray(arr)) {
                                                    let constructor = arr.constructor;
                                                    let _Object = Object;
                                                    value = arr;
                                                    if (tmp) {
                                                      obj = {};
                                                      let result = closure_1_1.set(arr, obj);
                                                      let _Object2 = Object;
                                                      let keys = Object.keys(arr);
                                                      item = keys.forEach((item) => {
                                                        if (undefined !== closure_1_0[item]) {
                                                          closure_1 = closure_1_1;
                                                          let value = arr;
                                                          if (null !== arr) {
                                                            value = arr;
                                                            if (typeof arr === "object") {
                                                              value = closure_1_1.get(arr);
                                                              if (undefined === value) {
                                                                let _Array = Array;
                                                                if (!Array.isArray(arr)) {
                                                                  let constructor = arr.constructor;
                                                                  let _Object = Object;
                                                                  value = arr;
                                                                  if (tmp) {
                                                                    obj = {};
                                                                    let result = closure_1_1.set(arr, obj);
                                                                    let _Object2 = Object;
                                                                    let keys = Object.keys(arr);
                                                                    item = keys.forEach(/* F79423 */ function() { ... });
                                                                    value = obj;
                                                                  }
                                                                  tmp = constructor === Object || undefined === constructor;
                                                                }
                                                              }
                                                              items = [];
                                                              let result1 = closure_1_1.set(arr, items);
                                                              let item1 = arr.forEach(/* F79422 */ function() { ... });
                                                              value = items;
                                                            }
                                                          }
                                                          closure_1_3[item] = value;
                                                        }
                                                      });
                                                      value = obj;
                                                    }
                                                    tmp = constructor === Object || undefined === constructor;
                                                  }
                                                }
                                                items = [];
                                                let result1 = closure_1_1.set(arr, items);
                                                let item1 = arr.forEach((item) => {
                                                  closure_0 = item;
                                                  items = undefined;
                                                  let obj2;
                                                  let value = item;
                                                  if (null !== item) {
                                                    value = item;
                                                    if (typeof item === "object") {
                                                      value = obj.get(item);
                                                      if (undefined === value) {
                                                        const _Array = Array;
                                                        if (Array.isArray(item)) {
                                                          items = [];
                                                          const result = obj.set(item, items);
                                                          item = item.forEach(/* F79422 */ function() { ... });
                                                          value = items;
                                                        } else {
                                                          const constructor = item.constructor;
                                                          const _Object = Object;
                                                          value = item;
                                                          if (tmp3) {
                                                            obj2 = {};
                                                            const result1 = obj.set(item, obj2);
                                                            const _Object2 = Object;
                                                            const keys = Object.keys(item);
                                                            const item1 = keys.forEach(/* F79423 */ function() { ... });
                                                            value = obj2;
                                                          }
                                                          tmp3 = constructor === Object || undefined === constructor;
                                                        }
                                                      }
                                                    }
                                                  }
                                                  items.push(value);
                                                });
                                                value = items;
                                              }
                                            }
                                            closure_1_3[item] = value;
                                          }
                                        });
                                        value = obj;
                                      }
                                      tmp = constructor === Object || undefined === constructor;
                                    }
                                  }
                                  items = [];
                                  let result1 = closure_1_1.set(arr, items);
                                  let item1 = arr.forEach((item) => {
                                    closure_0 = item;
                                    items = undefined;
                                    let obj2;
                                    let value = item;
                                    if (null !== item) {
                                      value = item;
                                      if (typeof item === "object") {
                                        value = obj.get(item);
                                        if (undefined === value) {
                                          const _Array = Array;
                                          if (Array.isArray(item)) {
                                            items = [];
                                            const result = obj.set(item, items);
                                            item = item.forEach((item) => {
                                              closure_0 = item;
                                              items = undefined;
                                              let obj2;
                                              let value = item;
                                              if (null !== item) {
                                                value = item;
                                                if (typeof item === "object") {
                                                  value = obj.get(item);
                                                  if (undefined === value) {
                                                    const _Array = Array;
                                                    if (Array.isArray(item)) {
                                                      items = [];
                                                      const result = obj.set(item, items);
                                                      item = item.forEach(/* F79422 */ function() { ... });
                                                      value = items;
                                                    } else {
                                                      const constructor = item.constructor;
                                                      const _Object = Object;
                                                      value = item;
                                                      if (tmp3) {
                                                        obj2 = {};
                                                        const result1 = obj.set(item, obj2);
                                                        const _Object2 = Object;
                                                        const keys = Object.keys(item);
                                                        const item1 = keys.forEach(/* F79423 */ function() { ... });
                                                        value = obj2;
                                                      }
                                                      tmp3 = constructor === Object || undefined === constructor;
                                                    }
                                                  }
                                                }
                                              }
                                              items.push(value);
                                            });
                                            value = items;
                                          } else {
                                            const constructor = item.constructor;
                                            const _Object = Object;
                                            value = item;
                                            if (tmp3) {
                                              obj2 = {};
                                              const result1 = obj.set(item, obj2);
                                              const _Object2 = Object;
                                              const keys = Object.keys(item);
                                              const item1 = keys.forEach((item) => {
                                                if (undefined !== closure_1_0[item]) {
                                                  closure_1 = closure_1_1;
                                                  let value = arr;
                                                  if (null !== arr) {
                                                    value = arr;
                                                    if (typeof arr === "object") {
                                                      value = closure_1_1.get(arr);
                                                      if (undefined === value) {
                                                        let _Array = Array;
                                                        if (!Array.isArray(arr)) {
                                                          let constructor = arr.constructor;
                                                          let _Object = Object;
                                                          value = arr;
                                                          if (tmp) {
                                                            obj = {};
                                                            let result = closure_1_1.set(arr, obj);
                                                            let _Object2 = Object;
                                                            let keys = Object.keys(arr);
                                                            item = keys.forEach(/* F79423 */ function() { ... });
                                                            value = obj;
                                                          }
                                                          tmp = constructor === Object || undefined === constructor;
                                                        }
                                                      }
                                                      items = [];
                                                      let result1 = closure_1_1.set(arr, items);
                                                      let item1 = arr.forEach(/* F79422 */ function() { ... });
                                                      value = items;
                                                    }
                                                  }
                                                  closure_1_3[item] = value;
                                                }
                                              });
                                              value = obj2;
                                            }
                                            tmp3 = constructor === Object || undefined === constructor;
                                          }
                                        }
                                      }
                                    }
                                    items.push(value);
                                  });
                                  value = items;
                                }
                              }
                              closure_1_3[item] = value;
                            }
                          });
                          value = obj;
                        }
                        tmp = constructor === Object || undefined === constructor;
                      }
                    }
                    items = [];
                    let result1 = closure_1_1.set(arr, items);
                    let item1 = arr.forEach((item) => {
                      closure_0 = item;
                      items = undefined;
                      let obj2;
                      let value = item;
                      if (null !== item) {
                        value = item;
                        if (typeof item === "object") {
                          value = obj.get(item);
                          if (undefined === value) {
                            const _Array = Array;
                            if (Array.isArray(item)) {
                              items = [];
                              const result = obj.set(item, items);
                              item = item.forEach((item) => {
                                closure_0 = item;
                                items = undefined;
                                let obj2;
                                let value = item;
                                if (null !== item) {
                                  value = item;
                                  if (typeof item === "object") {
                                    value = obj.get(item);
                                    if (undefined === value) {
                                      const _Array = Array;
                                      if (Array.isArray(item)) {
                                        items = [];
                                        const result = obj.set(item, items);
                                        item = item.forEach((item) => {
                                          closure_0 = item;
                                          items = undefined;
                                          let obj2;
                                          let value = item;
                                          if (null !== item) {
                                            value = item;
                                            if (typeof item === "object") {
                                              value = obj.get(item);
                                              if (undefined === value) {
                                                const _Array = Array;
                                                if (Array.isArray(item)) {
                                                  items = [];
                                                  const result = obj.set(item, items);
                                                  item = item.forEach(/* F79422 */ function() { ... });
                                                  value = items;
                                                } else {
                                                  const constructor = item.constructor;
                                                  const _Object = Object;
                                                  value = item;
                                                  if (tmp3) {
                                                    obj2 = {};
                                                    const result1 = obj.set(item, obj2);
                                                    const _Object2 = Object;
                                                    const keys = Object.keys(item);
                                                    const item1 = keys.forEach(/* F79423 */ function() { ... });
                                                    value = obj2;
                                                  }
                                                  tmp3 = constructor === Object || undefined === constructor;
                                                }
                                              }
                                            }
                                          }
                                          items.push(value);
                                        });
                                        value = items;
                                      } else {
                                        const constructor = item.constructor;
                                        const _Object = Object;
                                        value = item;
                                        if (tmp3) {
                                          obj2 = {};
                                          const result1 = obj.set(item, obj2);
                                          const _Object2 = Object;
                                          const keys = Object.keys(item);
                                          const item1 = keys.forEach((item) => {
                                            if (undefined !== closure_1_0[item]) {
                                              closure_1 = closure_1_1;
                                              let value = arr;
                                              if (null !== arr) {
                                                value = arr;
                                                if (typeof arr === "object") {
                                                  value = closure_1_1.get(arr);
                                                  if (undefined === value) {
                                                    let _Array = Array;
                                                    if (!Array.isArray(arr)) {
                                                      let constructor = arr.constructor;
                                                      let _Object = Object;
                                                      value = arr;
                                                      if (tmp) {
                                                        obj = {};
                                                        let result = closure_1_1.set(arr, obj);
                                                        let _Object2 = Object;
                                                        let keys = Object.keys(arr);
                                                        item = keys.forEach(/* F79423 */ function() { ... });
                                                        value = obj;
                                                      }
                                                      tmp = constructor === Object || undefined === constructor;
                                                    }
                                                  }
                                                  items = [];
                                                  let result1 = closure_1_1.set(arr, items);
                                                  let item1 = arr.forEach(/* F79422 */ function() { ... });
                                                  value = items;
                                                }
                                              }
                                              closure_1_3[item] = value;
                                            }
                                          });
                                          value = obj2;
                                        }
                                        tmp3 = constructor === Object || undefined === constructor;
                                      }
                                    }
                                  }
                                }
                                items.push(value);
                              });
                              value = items;
                            } else {
                              const constructor = item.constructor;
                              const _Object = Object;
                              value = item;
                              if (tmp3) {
                                obj2 = {};
                                const result1 = obj.set(item, obj2);
                                const _Object2 = Object;
                                const keys = Object.keys(item);
                                const item1 = keys.forEach((item) => {
                                  if (undefined !== closure_1_0[item]) {
                                    closure_1 = closure_1_1;
                                    let value = arr;
                                    if (null !== arr) {
                                      value = arr;
                                      if (typeof arr === "object") {
                                        value = closure_1_1.get(arr);
                                        if (undefined === value) {
                                          let _Array = Array;
                                          if (!Array.isArray(arr)) {
                                            let constructor = arr.constructor;
                                            let _Object = Object;
                                            value = arr;
                                            if (tmp) {
                                              obj = {};
                                              let result = closure_1_1.set(arr, obj);
                                              let _Object2 = Object;
                                              let keys = Object.keys(arr);
                                              item = keys.forEach((item) => {
                                                if (undefined !== closure_1_0[item]) {
                                                  closure_1 = closure_1_1;
                                                  let value = arr;
                                                  if (null !== arr) {
                                                    value = arr;
                                                    if (typeof arr === "object") {
                                                      value = closure_1_1.get(arr);
                                                      if (undefined === value) {
                                                        let _Array = Array;
                                                        if (!Array.isArray(arr)) {
                                                          let constructor = arr.constructor;
                                                          let _Object = Object;
                                                          value = arr;
                                                          if (tmp) {
                                                            obj = {};
                                                            let result = closure_1_1.set(arr, obj);
                                                            let _Object2 = Object;
                                                            let keys = Object.keys(arr);
                                                            item = keys.forEach(/* F79423 */ function() { ... });
                                                            value = obj;
                                                          }
                                                          tmp = constructor === Object || undefined === constructor;
                                                        }
                                                      }
                                                      items = [];
                                                      let result1 = closure_1_1.set(arr, items);
                                                      let item1 = arr.forEach(/* F79422 */ function() { ... });
                                                      value = items;
                                                    }
                                                  }
                                                  closure_1_3[item] = value;
                                                }
                                              });
                                              value = obj;
                                            }
                                            tmp = constructor === Object || undefined === constructor;
                                          }
                                        }
                                        items = [];
                                        let result1 = closure_1_1.set(arr, items);
                                        let item1 = arr.forEach((item) => {
                                          closure_0 = item;
                                          items = undefined;
                                          let obj2;
                                          let value = item;
                                          if (null !== item) {
                                            value = item;
                                            if (typeof item === "object") {
                                              value = obj.get(item);
                                              if (undefined === value) {
                                                const _Array = Array;
                                                if (Array.isArray(item)) {
                                                  items = [];
                                                  const result = obj.set(item, items);
                                                  item = item.forEach(/* F79422 */ function() { ... });
                                                  value = items;
                                                } else {
                                                  const constructor = item.constructor;
                                                  const _Object = Object;
                                                  value = item;
                                                  if (tmp3) {
                                                    obj2 = {};
                                                    const result1 = obj.set(item, obj2);
                                                    const _Object2 = Object;
                                                    const keys = Object.keys(item);
                                                    const item1 = keys.forEach(/* F79423 */ function() { ... });
                                                    value = obj2;
                                                  }
                                                  tmp3 = constructor === Object || undefined === constructor;
                                                }
                                              }
                                            }
                                          }
                                          items.push(value);
                                        });
                                        value = items;
                                      }
                                    }
                                    closure_1_3[item] = value;
                                  }
                                });
                                value = obj2;
                              }
                              tmp3 = constructor === Object || undefined === constructor;
                            }
                          }
                        }
                      }
                      items.push(value);
                    });
                    value = items;
                  }
                }
                closure_1_3[item] = value;
              }
            });
            value = obj;
          }
          tmp2 = constructor === Object || undefined === constructor;
        }
      }
    }
  }
  return value;
}
export function extractExceptionKeysForMessage(error) {
  const keys = Object.keys(convertToPlainObject(error));
  const sorted = keys.sort();
  let str = "[object has no keys]";
  if (keys[0]) {
    str = keys.join(", ");
  }
  return str;
}
export function fill(__sentry_wrapped__, fetch, fn) {
  if (fetch in __sentry_wrapped__) {
    if (typeof __sentry_wrapped__[fetch] === "function") {
      const tmp10 = fn(tmp4);
      if (typeof tmp10 === "function") {
        markFunctionWrapped(tmp10, tmp4);
      }
      try {
        __sentry_wrapped__[fetch] = tmp10;
      } catch (err) {
        if (__SENTRY_DEBUG__.DEBUG_BUILD) {
          const debug = consoleSandbox.debug;
          const _HermesInternal = HermesInternal;
          debug.log("Failed to replace method \"" + tmp3 + "\" in object", tmp2);
        }
      }
    }
  }
}
export function getOriginalFunction(__sentry_original__) {
  return __sentry_original__.__sentry_original__;
}
export { markFunctionWrapped };
export function objectify(item) {
  if (null == item === true) {
    const _String = String;
    let string = new String(item);
  } else {
    let tmp = typeof item === "symbol";
    if (typeof item !== "symbol") {
      tmp = typeof item === "bigint";
    }
    if (tmp === true) {
      const _Object = Object;
      string = Object(item);
    } else {
      string = item;
      if (obj.isPrimitive(item) === true) {
        string = new item.constructor(item);
      }
      obj = _mod691;
    }
  }
  return string;
}