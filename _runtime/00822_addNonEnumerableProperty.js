// === Module 822: addNonEnumerableProperty ===

// Module 822 (addNonEnumerableProperty)
import __SENTRY_DEBUG__ from "__SENTRY_DEBUG__" /* 823 */;
import consoleSandbox from "consoleSandbox" /* 824 */;
import isInstanceOf from "isInstanceOf" /* 827 */;
import _htmlElementAsString from "_htmlElementAsString" /* 828 */;

require = arg1;
const dependencyMap = arg6;
function addNonEnumerableProperty(arg0, arg1, arg2) {
  try {
    const _Object = Object;
    const obj = { value: null, writable: true, configurable: true };
    obj[0] = arg2;
    Object.defineProperty(arg0, arg1, obj);
  } catch (err) {
    if (__SENTRY_DEBUG__.DEBUG_BUILD) {
      const debug = consoleSandbox.debug;
      const _HermesInternal = HermesInternal;
      debug.log("Failed to add non-enumerable property \"" + tmp2 + "\" to object", tmp);
    }
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
  let obj = isInstanceOf;
  if (obj.isError(type)) {
    obj = { message: null, name: null, stack: null };
    ({ message: obj6[0], name: obj6[1], stack: obj6[2] } = type);
    if (typeof type === "object") {
      if (null !== type) {
        obj = {};
        obj1 = obj;
        const keys = Object.keys();
        if (keys !== undefined) {
          obj1 = obj;
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
      const merged = Object.assign(obj1);
      return obj;
    }
    obj1 = {};
  } else {
    let tmp2Result = isInstanceOf;
    if (tmp2Result.isEvent(type)) {
      const obj2 = { type: null, target: null, currentTarget: null };
      obj2[0] = type.type;
      obj2[1] = serializeEventTarget(type.target);
      obj2[2] = serializeEventTarget(type.currentTarget);
      if (typeof type === "object") {
        if (null !== type) {
          const obj3 = {};
          let obj4 = obj3;
          const keys1 = Object.keys();
          if (keys1 !== undefined) {
            obj4 = obj3;
            while (keys1[tmp] !== undefined) {
              let _Object = Object;
              let call = hasOwnProperty.call;
              if (!(typeof call === "unknown" ? hasOwnProperty(tmp8) : call(type, tmp8))) {
                continue;
              } else {
                obj3[tmp8] = type[tmp8];
                continue;
              }
              continue;
            }
          }
        }
        const merged1 = Object.assign(obj4);
        let isInstanceOfResult = typeof globalThis.CustomEvent !== "undefined";
        if (typeof globalThis.CustomEvent !== "undefined") {
          tmp2Result = isInstanceOf;
          isInstanceOfResult = tmp2Result.isInstanceOf(type, globalThis.CustomEvent);
        }
        if (isInstanceOfResult) {
          obj2.detail = type.detail;
        }
        return obj2;
      }
      obj4 = {};
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
arg5.addNonEnumerableProperty = addNonEnumerableProperty;
arg5.convertToPlainObject = convertToPlainObject;
arg5.dropUndefinedKeys = function dropUndefinedKeys(obj) {
  const map = new Map();
  closure_0 = obj;
  let items;
  obj = undefined;
  let value = obj;
  if (null !== obj) {
    value = obj;
    if (typeof obj === "object") {
      value = map.get(obj);
      if (undefined === value) {
        const _Array = Array;
        if (Array.isArray(obj)) {
          items = [];
          const result = map.set(obj, items);
          const item = obj.forEach((item, index) => {
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
                    item = item.forEach((item, index) => {
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
                              item = item.forEach((item, index) => {
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
                                        item = item.forEach((item, index) => {
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
                                          const item1 = keys.forEach((item, index) => {
                                            arr = arr[item];
                                            if (undefined !== arr) {
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
                                              obj[item] = value;
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
                                const item1 = keys.forEach((item, index) => {
                                  arr = arr[item];
                                  if (undefined !== arr) {
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
                                              item = keys.forEach((item, index) => {
                                                arr = arr[item];
                                                if (undefined !== arr) {
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
                                                  obj[item] = value;
                                                }
                                              });
                                              value = obj;
                                            }
                                            tmp = constructor === Object || undefined === constructor;
                                          }
                                        }
                                        items = [];
                                        let result1 = obj2.set(arr, items);
                                        let item1 = arr.forEach((item, index) => {
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
                                    obj[item] = value;
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
                      const item1 = keys.forEach((item, index) => {
                        arr = arr[item];
                        if (undefined !== arr) {
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
                                    item = keys.forEach((item, index) => {
                                      arr = arr[item];
                                      if (undefined !== arr) {
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
                                                  item = keys.forEach((item, index) => {
                                                    arr = arr[item];
                                                    if (undefined !== arr) {
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
                                                      obj[item] = value;
                                                    }
                                                  });
                                                  value = obj;
                                                }
                                                tmp = constructor === Object || undefined === constructor;
                                              }
                                            }
                                            items = [];
                                            let result1 = obj2.set(arr, items);
                                            let item1 = arr.forEach((item, index) => {
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
                                        obj[item] = value;
                                      }
                                    });
                                    value = obj;
                                  }
                                  tmp = constructor === Object || undefined === constructor;
                                }
                              }
                              items = [];
                              let result1 = obj2.set(arr, items);
                              let item1 = arr.forEach((item, index) => {
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
                                        item = item.forEach((item, index) => {
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
                                          const item1 = keys.forEach((item, index) => {
                                            arr = arr[item];
                                            if (undefined !== arr) {
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
                                              obj[item] = value;
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
                          obj[item] = value;
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
            const item1 = keys.forEach((item, index) => {
              arr = arr[item];
              if (undefined !== arr) {
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
                          item = keys.forEach((item, index) => {
                            arr = arr[item];
                            if (undefined !== arr) {
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
                                        item = keys.forEach((item, index) => {
                                          arr = arr[item];
                                          if (undefined !== arr) {
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
                                                      item = keys.forEach((item, index) => {
                                                        arr = arr[item];
                                                        if (undefined !== arr) {
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
                                                          obj[item] = value;
                                                        }
                                                      });
                                                      value = obj;
                                                    }
                                                    tmp = constructor === Object || undefined === constructor;
                                                  }
                                                }
                                                items = [];
                                                let result1 = obj2.set(arr, items);
                                                let item1 = arr.forEach((item, index) => {
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
                                            obj[item] = value;
                                          }
                                        });
                                        value = obj;
                                      }
                                      tmp = constructor === Object || undefined === constructor;
                                    }
                                  }
                                  items = [];
                                  let result1 = obj2.set(arr, items);
                                  let item1 = arr.forEach((item, index) => {
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
                                            item = item.forEach((item, index) => {
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
                                              const item1 = keys.forEach((item, index) => {
                                                arr = arr[item];
                                                if (undefined !== arr) {
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
                                                  obj[item] = value;
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
                              obj[item] = value;
                            }
                          });
                          value = obj;
                        }
                        tmp = constructor === Object || undefined === constructor;
                      }
                    }
                    items = [];
                    let result1 = obj2.set(arr, items);
                    let item1 = arr.forEach((item, index) => {
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
                              item = item.forEach((item, index) => {
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
                                        item = item.forEach((item, index) => {
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
                                          const item1 = keys.forEach((item, index) => {
                                            arr = arr[item];
                                            if (undefined !== arr) {
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
                                              obj[item] = value;
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
                                const item1 = keys.forEach((item, index) => {
                                  arr = arr[item];
                                  if (undefined !== arr) {
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
                                              item = keys.forEach((item, index) => {
                                                arr = arr[item];
                                                if (undefined !== arr) {
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
                                                  obj[item] = value;
                                                }
                                              });
                                              value = obj;
                                            }
                                            tmp = constructor === Object || undefined === constructor;
                                          }
                                        }
                                        items = [];
                                        let result1 = obj2.set(arr, items);
                                        let item1 = arr.forEach((item, index) => {
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
                                    obj[item] = value;
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
                obj[item] = value;
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
arg5.extractExceptionKeysForMessage = function extractExceptionKeysForMessage(arg0) {
  const keys = Object.keys(convertToPlainObject(arg0));
  const sorted = keys.sort();
  let str = "[object has no keys]";
  if (keys[0]) {
    str = keys.join(", ");
  }
  return str;
};
arg5.fill = function fill(closure_0, arg1, fn) {
  if (arg1 in _require) {
    if (typeof _require[arg1] === "function") {
      const tmp10 = fn(tmp4);
      if (typeof tmp10 === "function") {
        markFunctionWrapped(tmp10, tmp4);
      }
      try {
        _require[arg1] = tmp10;
      } catch (err) {
        if (__SENTRY_DEBUG__.DEBUG_BUILD) {
          const debug = consoleSandbox.debug;
          const _HermesInternal = HermesInternal;
          debug.log("Failed to replace method \"" + tmp3 + "\" in object", tmp2);
        }
      }
    }
  }
};
arg5.getOriginalFunction = function getOriginalFunction(__sentry_original__) {
  return __sentry_original__.__sentry_original__;
};
arg5.markFunctionWrapped = markFunctionWrapped;
arg5.objectify = function objectify(arg0) {
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
      obj = isInstanceOf;
    }
  }
  return string;
};