// === Module 687: ? ===

// Module 687
import _mod688 from "module_688" /* 688 */;
import _mod692 from "module_692" /* 692 */;
import _htmlElementAsString from "_htmlElementAsString" /* 693 */;

require = arg1;
const dependencyMap = arg6;
function addNonEnumerableProperty(arg0, arg1, value) {
  try {
    const _Object = Object;
    const obj = { value, writable: true, configurable: true };
    Object.defineProperty(arg0, arg1, obj);
  } catch (err) {
    if (_mod688.DEBUG_BUILD) {
      const debug = tmp6(689).debug;
      const _HermesInternal = HermesInternal;
      debug.log("Failed to add non-enumerable property \"" + tmp2 + "\" to object", tmp);
    }
    tmp6 = require;
  }
}
function markFunctionWrapped(arg0, arg1) {
  try {
    let prototype = arg1.prototype;
    if (!prototype) {
      prototype = {};
    }
    arg1.prototype = prototype;
    arg0.prototype = prototype;
    addNonEnumerableProperty(arg0, "__sentry_original__", arg1);
  } catch (err) {
  }
}
function convertToPlainObject(type) {
  let obj = _mod692;
  if (obj.isError(type)) {
    const error = { message: null, name: null, stack: null };
    ({ message: obj6.message, name: obj6.name, stack: obj6.stack } = type);
    if (typeof type === "object") {
      if (null !== type) {
        obj = {};
        const keys = Object.keys();
        if (keys !== undefined) {
          while (keys[tmp] !== undefined) {
            let _Object2 = Object;
            let call2 = hasOwnProperty2.call;
            if (!(typeof call2 === "unknown" ? hasOwnProperty2(tmp17) : call2(type, tmp17))) {
              continue;
            } else {
              obj[tmp17] = type[tmp17];
              continue;
            }
            continue;
          }
        }
      }
      const merged = Object.assign(obj);
      return error;
    }
    obj = {};
  } else {
    let tmp2Result = tmp2(692);
    if (tmp2Result.isEvent(type)) {
      const obj1 = { type: type.type, target: serializeEventTarget(type.target), currentTarget: serializeEventTarget(type.currentTarget) };
      if (typeof type === "object") {
        if (null !== type) {
          const obj2 = {};
          let obj3 = obj2;
          const keys1 = Object.keys();
          if (keys1 !== undefined) {
            obj3 = obj2;
            while (keys1[tmp] !== undefined) {
              let _Object = Object;
              hasOwnProperty = Object.prototype.hasOwnProperty;
              let call = hasOwnProperty.call;
              if (!(typeof call === "unknown" ? hasOwnProperty(tmp8) : call(type, tmp8))) {
                continue;
              } else {
                obj2[tmp8] = type[tmp8];
                continue;
              }
              continue;
            }
          }
        }
        const merged1 = Object.assign(obj3);
        let isInstanceOfResult = typeof globalThis.CustomEvent !== "undefined";
        if (typeof globalThis.CustomEvent !== "undefined") {
          tmp2Result = tmp2(692);
          isInstanceOfResult = tmp2Result.isInstanceOf(type, globalThis.CustomEvent);
        }
        if (isInstanceOfResult) {
          obj1.detail = type.detail;
        }
        return obj1;
      }
      obj3 = {};
    } else {
      return type;
    }
  }
}
function serializeEventTarget(arg0) {
  try {
    if (obj.isElement(arg0)) {
      let htmlTreeAsStringResult = _htmlElementAsString.htmlTreeAsString(arg0);
      const tmp2Result = _htmlElementAsString;
    } else {
      const _Object = Object;
      const call = toString.call;
      if (typeof call === "unknown") {
        htmlTreeAsStringResult = toString();
      } else {
        htmlTreeAsStringResult = call(arg0);
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
export const dropUndefinedKeys = function dropUndefinedKeys(obj) {
  const map = new Map();
  closure_0 = obj;
  let items;
  obj = undefined;
  value = obj;
  if (null !== obj) {
    value = obj;
    if (typeof obj === "object") {
      value = map.get(obj);
      if (undefined === value) {
        const _Array = Array;
        if (Array.isArray(obj)) {
          items = [];
          const result = map.set(obj, items);
          const item = obj.forEach((item) => {
            closure_0 = item;
            items = undefined;
            obj = undefined;
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
                      obj = undefined;
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
                                obj = undefined;
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
                                          obj = undefined;
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
                                                  item = item.forEach(() => { ... });
                                                  value = items;
                                                } else {
                                                  const constructor = item.constructor;
                                                  const _Object = Object;
                                                  value = item;
                                                  if (tmp3) {
                                                    obj = {};
                                                    const result1 = obj.set(item, obj);
                                                    const _Object2 = Object;
                                                    const keys = Object.keys(item);
                                                    const item1 = keys.forEach(() => { ... });
                                                    value = obj;
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
                                          obj = {};
                                          const result1 = obj.set(item, obj);
                                          const _Object2 = Object;
                                          const keys = Object.keys(item);
                                          const item1 = keys.forEach((item) => {
                                            arr = closure_1_0[item];
                                            if (undefined !== arr) {
                                              closure_1 = closure_1_1;
                                              let value = arr;
                                              if (null !== arr) {
                                                value = arr;
                                                if (typeof arr === "object") {
                                                  value = obj2.get(arr);
                                                  if (undefined === value) {
                                                    let _Array = Array;
                                                    if (!Array.isArray(arr)) {
                                                      let constructor = arr.constructor;
                                                      let _Object = Object;
                                                      value = arr;
                                                      if (tmp) {
                                                        obj = {};
                                                        let result = obj2.set(arr, obj);
                                                        let _Object2 = Object;
                                                        let keys = Object.keys(arr);
                                                        item = keys.forEach(() => { ... });
                                                        value = obj;
                                                      }
                                                      tmp = constructor === Object || undefined === constructor;
                                                    }
                                                  }
                                                  items = [];
                                                  let result1 = obj2.set(arr, items);
                                                  let item1 = arr.forEach(() => { ... });
                                                  value = items;
                                                }
                                              }
                                              closure_1_3[item] = value;
                                            }
                                          });
                                          value = obj;
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
                                obj = {};
                                const result1 = obj.set(item, obj);
                                const _Object2 = Object;
                                const keys = Object.keys(item);
                                const item1 = keys.forEach((item) => {
                                  arr = closure_1_0[item];
                                  if (undefined !== arr) {
                                    closure_1 = closure_1_1;
                                    let value = arr;
                                    if (null !== arr) {
                                      value = arr;
                                      if (typeof arr === "object") {
                                        value = obj2.get(arr);
                                        if (undefined === value) {
                                          let _Array = Array;
                                          if (!Array.isArray(arr)) {
                                            let constructor = arr.constructor;
                                            let _Object = Object;
                                            value = arr;
                                            if (tmp) {
                                              obj = {};
                                              let result = obj2.set(arr, obj);
                                              let _Object2 = Object;
                                              let keys = Object.keys(arr);
                                              item = keys.forEach((item) => {
                                                arr = closure_1_0[item];
                                                if (undefined !== arr) {
                                                  closure_1 = closure_1_1;
                                                  let value = arr;
                                                  if (null !== arr) {
                                                    value = arr;
                                                    if (typeof arr === "object") {
                                                      value = obj2.get(arr);
                                                      if (undefined === value) {
                                                        let _Array = Array;
                                                        if (!Array.isArray(arr)) {
                                                          let constructor = arr.constructor;
                                                          let _Object = Object;
                                                          value = arr;
                                                          if (tmp) {
                                                            obj = {};
                                                            let result = obj2.set(arr, obj);
                                                            let _Object2 = Object;
                                                            let keys = Object.keys(arr);
                                                            item = keys.forEach(() => { ... });
                                                            value = obj;
                                                          }
                                                          tmp = constructor === Object || undefined === constructor;
                                                        }
                                                      }
                                                      items = [];
                                                      let result1 = obj2.set(arr, items);
                                                      let item1 = arr.forEach(() => { ... });
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
                                        let result1 = obj2.set(arr, items);
                                        let item1 = arr.forEach((item) => {
                                          closure_0 = item;
                                          items = undefined;
                                          obj = undefined;
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
                                                  item = item.forEach(() => { ... });
                                                  value = items;
                                                } else {
                                                  const constructor = item.constructor;
                                                  const _Object = Object;
                                                  value = item;
                                                  if (tmp3) {
                                                    obj = {};
                                                    const result1 = obj.set(item, obj);
                                                    const _Object2 = Object;
                                                    const keys = Object.keys(item);
                                                    const item1 = keys.forEach(() => { ... });
                                                    value = obj;
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
                      obj = {};
                      const result1 = obj.set(item, obj);
                      const _Object2 = Object;
                      const keys = Object.keys(item);
                      const item1 = keys.forEach((item) => {
                        arr = closure_1_0[item];
                        if (undefined !== arr) {
                          closure_1 = closure_1_1;
                          let value = arr;
                          if (null !== arr) {
                            value = arr;
                            if (typeof arr === "object") {
                              value = obj2.get(arr);
                              if (undefined === value) {
                                let _Array = Array;
                                if (!Array.isArray(arr)) {
                                  let constructor = arr.constructor;
                                  let _Object = Object;
                                  value = arr;
                                  if (tmp) {
                                    obj = {};
                                    let result = obj2.set(arr, obj);
                                    let _Object2 = Object;
                                    let keys = Object.keys(arr);
                                    item = keys.forEach((item) => {
                                      arr = closure_1_0[item];
                                      if (undefined !== arr) {
                                        closure_1 = closure_1_1;
                                        let value = arr;
                                        if (null !== arr) {
                                          value = arr;
                                          if (typeof arr === "object") {
                                            value = obj2.get(arr);
                                            if (undefined === value) {
                                              let _Array = Array;
                                              if (!Array.isArray(arr)) {
                                                let constructor = arr.constructor;
                                                let _Object = Object;
                                                value = arr;
                                                if (tmp) {
                                                  obj = {};
                                                  let result = obj2.set(arr, obj);
                                                  let _Object2 = Object;
                                                  let keys = Object.keys(arr);
                                                  item = keys.forEach((item) => {
                                                    arr = closure_1_0[item];
                                                    if (undefined !== arr) {
                                                      closure_1 = closure_1_1;
                                                      let value = arr;
                                                      if (null !== arr) {
                                                        value = arr;
                                                        if (typeof arr === "object") {
                                                          value = obj2.get(arr);
                                                          if (undefined === value) {
                                                            let _Array = Array;
                                                            if (!Array.isArray(arr)) {
                                                              let constructor = arr.constructor;
                                                              let _Object = Object;
                                                              value = arr;
                                                              if (tmp) {
                                                                obj = {};
                                                                let result = obj2.set(arr, obj);
                                                                let _Object2 = Object;
                                                                let keys = Object.keys(arr);
                                                                item = keys.forEach(() => { ... });
                                                                value = obj;
                                                              }
                                                              tmp = constructor === Object || undefined === constructor;
                                                            }
                                                          }
                                                          items = [];
                                                          let result1 = obj2.set(arr, items);
                                                          let item1 = arr.forEach(() => { ... });
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
                                            let result1 = obj2.set(arr, items);
                                            let item1 = arr.forEach((item) => {
                                              closure_0 = item;
                                              items = undefined;
                                              obj = undefined;
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
                                                      item = item.forEach(() => { ... });
                                                      value = items;
                                                    } else {
                                                      const constructor = item.constructor;
                                                      const _Object = Object;
                                                      value = item;
                                                      if (tmp3) {
                                                        obj = {};
                                                        const result1 = obj.set(item, obj);
                                                        const _Object2 = Object;
                                                        const keys = Object.keys(item);
                                                        const item1 = keys.forEach(() => { ... });
                                                        value = obj;
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
                              let result1 = obj2.set(arr, items);
                              let item1 = arr.forEach((item) => {
                                closure_0 = item;
                                items = undefined;
                                obj = undefined;
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
                                          obj = undefined;
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
                                                  item = item.forEach(() => { ... });
                                                  value = items;
                                                } else {
                                                  const constructor = item.constructor;
                                                  const _Object = Object;
                                                  value = item;
                                                  if (tmp3) {
                                                    obj = {};
                                                    const result1 = obj.set(item, obj);
                                                    const _Object2 = Object;
                                                    const keys = Object.keys(item);
                                                    const item1 = keys.forEach(() => { ... });
                                                    value = obj;
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
                                          obj = {};
                                          const result1 = obj.set(item, obj);
                                          const _Object2 = Object;
                                          const keys = Object.keys(item);
                                          const item1 = keys.forEach((item) => {
                                            arr = closure_1_0[item];
                                            if (undefined !== arr) {
                                              closure_1 = closure_1_1;
                                              let value = arr;
                                              if (null !== arr) {
                                                value = arr;
                                                if (typeof arr === "object") {
                                                  value = obj2.get(arr);
                                                  if (undefined === value) {
                                                    let _Array = Array;
                                                    if (!Array.isArray(arr)) {
                                                      let constructor = arr.constructor;
                                                      let _Object = Object;
                                                      value = arr;
                                                      if (tmp) {
                                                        obj = {};
                                                        let result = obj2.set(arr, obj);
                                                        let _Object2 = Object;
                                                        let keys = Object.keys(arr);
                                                        item = keys.forEach(() => { ... });
                                                        value = obj;
                                                      }
                                                      tmp = constructor === Object || undefined === constructor;
                                                    }
                                                  }
                                                  items = [];
                                                  let result1 = obj2.set(arr, items);
                                                  let item1 = arr.forEach(() => { ... });
                                                  value = items;
                                                }
                                              }
                                              closure_1_3[item] = value;
                                            }
                                          });
                                          value = obj;
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
                    tmp3 = constructor === Object || undefined === constructor;
                  }
                }
              }
            }
            items.push(value);
          });
          value = items;
        } else {
          const constructor = obj.constructor;
          const _Object = Object;
          value = obj;
          if (tmp2) {
            obj = {};
            const result1 = map.set(obj, obj);
            const _Object2 = Object;
            const keys = Object.keys(obj);
            const item1 = keys.forEach((item) => {
              arr = closure_1_0[item];
              if (undefined !== arr) {
                closure_1 = closure_1_1;
                let value = arr;
                if (null !== arr) {
                  value = arr;
                  if (typeof arr === "object") {
                    value = obj2.get(arr);
                    if (undefined === value) {
                      let _Array = Array;
                      if (!Array.isArray(arr)) {
                        let constructor = arr.constructor;
                        let _Object = Object;
                        value = arr;
                        if (tmp) {
                          obj = {};
                          let result = obj2.set(arr, obj);
                          let _Object2 = Object;
                          let keys = Object.keys(arr);
                          item = keys.forEach((item) => {
                            arr = closure_1_0[item];
                            if (undefined !== arr) {
                              closure_1 = closure_1_1;
                              let value = arr;
                              if (null !== arr) {
                                value = arr;
                                if (typeof arr === "object") {
                                  value = obj2.get(arr);
                                  if (undefined === value) {
                                    let _Array = Array;
                                    if (!Array.isArray(arr)) {
                                      let constructor = arr.constructor;
                                      let _Object = Object;
                                      value = arr;
                                      if (tmp) {
                                        obj = {};
                                        let result = obj2.set(arr, obj);
                                        let _Object2 = Object;
                                        let keys = Object.keys(arr);
                                        item = keys.forEach((item) => {
                                          arr = closure_1_0[item];
                                          if (undefined !== arr) {
                                            closure_1 = closure_1_1;
                                            let value = arr;
                                            if (null !== arr) {
                                              value = arr;
                                              if (typeof arr === "object") {
                                                value = obj2.get(arr);
                                                if (undefined === value) {
                                                  let _Array = Array;
                                                  if (!Array.isArray(arr)) {
                                                    let constructor = arr.constructor;
                                                    let _Object = Object;
                                                    value = arr;
                                                    if (tmp) {
                                                      obj = {};
                                                      let result = obj2.set(arr, obj);
                                                      let _Object2 = Object;
                                                      let keys = Object.keys(arr);
                                                      item = keys.forEach((item) => {
                                                        arr = closure_1_0[item];
                                                        if (undefined !== arr) {
                                                          closure_1 = closure_1_1;
                                                          let value = arr;
                                                          if (null !== arr) {
                                                            value = arr;
                                                            if (typeof arr === "object") {
                                                              value = obj2.get(arr);
                                                              if (undefined === value) {
                                                                let _Array = Array;
                                                                if (!Array.isArray(arr)) {
                                                                  let constructor = arr.constructor;
                                                                  let _Object = Object;
                                                                  value = arr;
                                                                  if (tmp) {
                                                                    obj = {};
                                                                    let result = obj2.set(arr, obj);
                                                                    let _Object2 = Object;
                                                                    let keys = Object.keys(arr);
                                                                    item = keys.forEach(() => { ... });
                                                                    value = obj;
                                                                  }
                                                                  tmp = constructor === Object || undefined === constructor;
                                                                }
                                                              }
                                                              items = [];
                                                              let result1 = obj2.set(arr, items);
                                                              let item1 = arr.forEach(() => { ... });
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
                                                let result1 = obj2.set(arr, items);
                                                let item1 = arr.forEach((item) => {
                                                  closure_0 = item;
                                                  items = undefined;
                                                  obj = undefined;
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
                                                          item = item.forEach(() => { ... });
                                                          value = items;
                                                        } else {
                                                          const constructor = item.constructor;
                                                          const _Object = Object;
                                                          value = item;
                                                          if (tmp3) {
                                                            obj = {};
                                                            const result1 = obj.set(item, obj);
                                                            const _Object2 = Object;
                                                            const keys = Object.keys(item);
                                                            const item1 = keys.forEach(() => { ... });
                                                            value = obj;
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
                                  let result1 = obj2.set(arr, items);
                                  let item1 = arr.forEach((item) => {
                                    closure_0 = item;
                                    items = undefined;
                                    obj = undefined;
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
                                              obj = undefined;
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
                                                      item = item.forEach(() => { ... });
                                                      value = items;
                                                    } else {
                                                      const constructor = item.constructor;
                                                      const _Object = Object;
                                                      value = item;
                                                      if (tmp3) {
                                                        obj = {};
                                                        const result1 = obj.set(item, obj);
                                                        const _Object2 = Object;
                                                        const keys = Object.keys(item);
                                                        const item1 = keys.forEach(() => { ... });
                                                        value = obj;
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
                                              obj = {};
                                              const result1 = obj.set(item, obj);
                                              const _Object2 = Object;
                                              const keys = Object.keys(item);
                                              const item1 = keys.forEach((item) => {
                                                arr = closure_1_0[item];
                                                if (undefined !== arr) {
                                                  closure_1 = closure_1_1;
                                                  let value = arr;
                                                  if (null !== arr) {
                                                    value = arr;
                                                    if (typeof arr === "object") {
                                                      value = obj2.get(arr);
                                                      if (undefined === value) {
                                                        let _Array = Array;
                                                        if (!Array.isArray(arr)) {
                                                          let constructor = arr.constructor;
                                                          let _Object = Object;
                                                          value = arr;
                                                          if (tmp) {
                                                            obj = {};
                                                            let result = obj2.set(arr, obj);
                                                            let _Object2 = Object;
                                                            let keys = Object.keys(arr);
                                                            item = keys.forEach(() => { ... });
                                                            value = obj;
                                                          }
                                                          tmp = constructor === Object || undefined === constructor;
                                                        }
                                                      }
                                                      items = [];
                                                      let result1 = obj2.set(arr, items);
                                                      let item1 = arr.forEach(() => { ... });
                                                      value = items;
                                                    }
                                                  }
                                                  closure_1_3[item] = value;
                                                }
                                              });
                                              value = obj;
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
                    let result1 = obj2.set(arr, items);
                    let item1 = arr.forEach((item) => {
                      closure_0 = item;
                      items = undefined;
                      obj = undefined;
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
                                obj = undefined;
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
                                          obj = undefined;
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
                                                  item = item.forEach(() => { ... });
                                                  value = items;
                                                } else {
                                                  const constructor = item.constructor;
                                                  const _Object = Object;
                                                  value = item;
                                                  if (tmp3) {
                                                    obj = {};
                                                    const result1 = obj.set(item, obj);
                                                    const _Object2 = Object;
                                                    const keys = Object.keys(item);
                                                    const item1 = keys.forEach(() => { ... });
                                                    value = obj;
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
                                          obj = {};
                                          const result1 = obj.set(item, obj);
                                          const _Object2 = Object;
                                          const keys = Object.keys(item);
                                          const item1 = keys.forEach((item) => {
                                            arr = closure_1_0[item];
                                            if (undefined !== arr) {
                                              closure_1 = closure_1_1;
                                              let value = arr;
                                              if (null !== arr) {
                                                value = arr;
                                                if (typeof arr === "object") {
                                                  value = obj2.get(arr);
                                                  if (undefined === value) {
                                                    let _Array = Array;
                                                    if (!Array.isArray(arr)) {
                                                      let constructor = arr.constructor;
                                                      let _Object = Object;
                                                      value = arr;
                                                      if (tmp) {
                                                        obj = {};
                                                        let result = obj2.set(arr, obj);
                                                        let _Object2 = Object;
                                                        let keys = Object.keys(arr);
                                                        item = keys.forEach(() => { ... });
                                                        value = obj;
                                                      }
                                                      tmp = constructor === Object || undefined === constructor;
                                                    }
                                                  }
                                                  items = [];
                                                  let result1 = obj2.set(arr, items);
                                                  let item1 = arr.forEach(() => { ... });
                                                  value = items;
                                                }
                                              }
                                              closure_1_3[item] = value;
                                            }
                                          });
                                          value = obj;
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
                                obj = {};
                                const result1 = obj.set(item, obj);
                                const _Object2 = Object;
                                const keys = Object.keys(item);
                                const item1 = keys.forEach((item) => {
                                  arr = closure_1_0[item];
                                  if (undefined !== arr) {
                                    closure_1 = closure_1_1;
                                    let value = arr;
                                    if (null !== arr) {
                                      value = arr;
                                      if (typeof arr === "object") {
                                        value = obj2.get(arr);
                                        if (undefined === value) {
                                          let _Array = Array;
                                          if (!Array.isArray(arr)) {
                                            let constructor = arr.constructor;
                                            let _Object = Object;
                                            value = arr;
                                            if (tmp) {
                                              obj = {};
                                              let result = obj2.set(arr, obj);
                                              let _Object2 = Object;
                                              let keys = Object.keys(arr);
                                              item = keys.forEach((item) => {
                                                arr = closure_1_0[item];
                                                if (undefined !== arr) {
                                                  closure_1 = closure_1_1;
                                                  let value = arr;
                                                  if (null !== arr) {
                                                    value = arr;
                                                    if (typeof arr === "object") {
                                                      value = obj2.get(arr);
                                                      if (undefined === value) {
                                                        let _Array = Array;
                                                        if (!Array.isArray(arr)) {
                                                          let constructor = arr.constructor;
                                                          let _Object = Object;
                                                          value = arr;
                                                          if (tmp) {
                                                            obj = {};
                                                            let result = obj2.set(arr, obj);
                                                            let _Object2 = Object;
                                                            let keys = Object.keys(arr);
                                                            item = keys.forEach(() => { ... });
                                                            value = obj;
                                                          }
                                                          tmp = constructor === Object || undefined === constructor;
                                                        }
                                                      }
                                                      items = [];
                                                      let result1 = obj2.set(arr, items);
                                                      let item1 = arr.forEach(() => { ... });
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
                                        let result1 = obj2.set(arr, items);
                                        let item1 = arr.forEach((item) => {
                                          closure_0 = item;
                                          items = undefined;
                                          obj = undefined;
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
                                                  item = item.forEach(() => { ... });
                                                  value = items;
                                                } else {
                                                  const constructor = item.constructor;
                                                  const _Object = Object;
                                                  value = item;
                                                  if (tmp3) {
                                                    obj = {};
                                                    const result1 = obj.set(item, obj);
                                                    const _Object2 = Object;
                                                    const keys = Object.keys(item);
                                                    const item1 = keys.forEach(() => { ... });
                                                    value = obj;
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
};
export const extractExceptionKeysForMessage = function extractExceptionKeysForMessage(arg0) {
  const keys = Object.keys(convertToPlainObject(arg0));
  const sorted = keys.sort();
  let str = "[object has no keys]";
  if (keys[0]) {
    str = keys.join(", ");
  }
  return str;
};
export const fill = function fill(arg0, arg1, fn) {
  if (arg1 in arg0) {
    if (typeof arg0[arg1] === "function") {
      const tmp10 = fn(tmp4);
      if (typeof tmp10 === "function") {
        markFunctionWrapped(tmp10, tmp4);
      }
      try {
        arg0[arg1] = tmp10;
      } catch (err) {
        if (_mod688.DEBUG_BUILD) {
          const debug = tmp5(689).debug;
          const _HermesInternal = HermesInternal;
          debug.log("Failed to replace method \"" + tmp3 + "\" in object", tmp2);
        }
        tmp5 = require;
      }
    }
  }
};
export const getOriginalFunction = function getOriginalFunction(__sentry_original__) {
  return __sentry_original__.__sentry_original__;
};
export { markFunctionWrapped };
export const objectify = function objectify(arg0) {
  if (null == arg0 === true) {
    const _String = String;
    let string = new String(arg0);
  } else {
    let tmp = typeof arg0 === "symbol";
    if (typeof arg0 !== "symbol") {
      tmp = typeof arg0 === "bigint";
    }
    if (tmp === true) {
      const _Object = Object;
      string = Object(arg0);
    } else {
      string = arg0;
      if (obj.isPrimitive(arg0) === true) {
        string = new arg0.constructor(arg0);
      }
      obj = _mod692;
    }
  }
  return string;
};