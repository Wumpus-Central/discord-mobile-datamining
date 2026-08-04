const require = arg1;
const dependencyMap = arg6;
function addNonEnumerableProperty(arg0, arg1, arg2) {
  try {
    const _Object = Object;
    const obj = { value: null, writable: true, configurable: true };
    obj[0] = arg2;
    Object.defineProperty(arg0, arg1, obj);
  } catch (err) {
    if (require(823) /* __SENTRY_DEBUG__ */.DEBUG_BUILD) {
      const debug = tmp6(824).debug;
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
function convertToPlainObject(obj) {
  obj = require(827) /* isInstanceOf */;
  if (obj.isError(obj)) {
    obj = { message: null, name: null, stack: null };
    ({ message: obj6[0], name: obj6[1], stack: obj6[2] } = obj);
    if (typeof obj === "object") {
      if (null !== obj) {
        obj = {};
        let obj1 = obj;
        const keys = Object.keys();
        if (keys !== undefined) {
          obj1 = obj;
          while (keys[tmp] !== undefined) {
            let tmp24 = tmp17;
            let _Object2 = Object;
            let call2 = hasOwnProperty2.call;
            if (!(typeof call2 === "unknown" ? hasOwnProperty2(tmp17) : call2(obj, tmp17))) {
              continue;
            } else {
              obj[tmp17] = obj[tmp17];
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
    let tmp2Result = tmp2(827);
    if (tmp2Result.isEvent(obj)) {
      const obj2 = { type: null, target: null, currentTarget: null };
      obj2[0] = obj.type;
      obj2[1] = serializeEventTarget(obj.target);
      obj2[2] = serializeEventTarget(obj.currentTarget);
      if (typeof obj === "object") {
        if (null !== obj) {
          const obj3 = {};
          let obj4 = obj3;
          const keys1 = Object.keys();
          if (keys1 !== undefined) {
            obj4 = obj3;
            while (keys1[tmp] !== undefined) {
              let tmp22 = tmp8;
              let _Object = Object;
              let call = hasOwnProperty.call;
              if (!(typeof call === "unknown" ? hasOwnProperty(tmp8) : call(obj, tmp8))) {
                continue;
              } else {
                obj3[tmp8] = obj[tmp8];
                continue;
              }
              continue;
            }
          }
        }
        const merged1 = Object.assign(obj4);
        let isInstanceOfResult = typeof globalThis.CustomEvent !== "undefined";
        if (typeof globalThis.CustomEvent !== "undefined") {
          tmp2Result = tmp2(827);
          isInstanceOfResult = tmp2Result.isInstanceOf(obj, globalThis.CustomEvent);
        }
        if (isInstanceOfResult) {
          obj2.detail = obj.detail;
        }
        return obj2;
      }
      obj4 = {};
    } else {
      return obj;
    }
  }
}
function serializeEventTarget(arg0) {
  try {
    if (obj.isElement(arg0)) {
      let htmlTreeAsStringResult = require(828) /* _htmlElementAsString */.htmlTreeAsString(arg0);
      const tmp2Result = require(828) /* _htmlElementAsString */;
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
  let closure_0 = obj;
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
          const item = obj.forEach((obj) => {
            obj = closure_1;
            let closure_0 = obj;
            let items;
            obj = undefined;
            let value = obj;
            if (null !== obj) {
              value = obj;
              if (typeof obj === "object") {
                value = obj.get(obj);
                if (undefined === value) {
                  const _Array = Array;
                  if (Array.isArray(obj)) {
                    items = [];
                    const result = obj.set(obj, items);
                    const item = obj.forEach((obj) => {
                      obj = closure_1;
                      let closure_0 = obj;
                      let items;
                      obj = undefined;
                      let value = obj;
                      if (null !== obj) {
                        value = obj;
                        if (typeof obj === "object") {
                          value = obj.get(obj);
                          if (undefined === value) {
                            const _Array = Array;
                            if (Array.isArray(obj)) {
                              items = [];
                              const result = obj.set(obj, items);
                              const item = obj.forEach((obj) => {
                                obj = closure_1;
                                let closure_0 = obj;
                                let items;
                                obj = undefined;
                                let value = obj;
                                if (null !== obj) {
                                  value = obj;
                                  if (typeof obj === "object") {
                                    value = obj.get(obj);
                                    if (undefined === value) {
                                      const _Array = Array;
                                      if (Array.isArray(obj)) {
                                        items = [];
                                        const result = obj.set(obj, items);
                                        const item = obj.forEach((obj) => {
                                          obj = closure_1;
                                          let closure_0 = obj;
                                          let items;
                                          obj = undefined;
                                          let value = obj;
                                          if (null !== obj) {
                                            value = obj;
                                            if (typeof obj === "object") {
                                              value = obj.get(obj);
                                              if (undefined === value) {
                                                const _Array = Array;
                                                if (Array.isArray(obj)) {
                                                  items = [];
                                                  const result = obj.set(obj, items);
                                                  const item = obj.forEach(() => { ... });
                                                  value = items;
                                                } else {
                                                  const constructor = obj.constructor;
                                                  const _Object = Object;
                                                  value = obj;
                                                  if (tmp3) {
                                                    obj = {};
                                                    const result1 = obj.set(obj, obj);
                                                    const _Object2 = Object;
                                                    const keys = Object.keys(obj);
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
                                        const constructor = obj.constructor;
                                        const _Object = Object;
                                        value = obj;
                                        if (tmp3) {
                                          obj = {};
                                          const result1 = obj.set(obj, obj);
                                          const _Object2 = Object;
                                          const keys = Object.keys(obj);
                                          const item1 = keys.forEach((arg0) => {
                                            arr = arr[arg0];
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
                                                        let obj = {};
                                                        let result = obj2.set(arr, obj);
                                                        let _Object2 = Object;
                                                        let keys = Object.keys(arr);
                                                        let item = keys.forEach(() => { ... });
                                                        value = obj;
                                                      }
                                                      tmp = constructor === Object || undefined === constructor;
                                                    }
                                                  }
                                                  let items = [];
                                                  let result1 = obj2.set(arr, items);
                                                  let item1 = arr.forEach(() => { ... });
                                                  value = items;
                                                }
                                              }
                                              obj[arg0] = value;
                                              let tmp7 = obj;
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
                              if (tmp3) {
                                obj = {};
                                const result1 = obj.set(obj, obj);
                                const _Object2 = Object;
                                const keys = Object.keys(obj);
                                const item1 = keys.forEach((arg0) => {
                                  arr = arr[arg0];
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
                                              let obj = {};
                                              let result = obj2.set(arr, obj);
                                              let _Object2 = Object;
                                              let keys = Object.keys(arr);
                                              let item = keys.forEach((arg0) => {
                                                arr = arr[arg0];
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
                                                            let obj = {};
                                                            let result = obj2.set(arr, obj);
                                                            let _Object2 = Object;
                                                            let keys = Object.keys(arr);
                                                            let item = keys.forEach(() => { ... });
                                                            value = obj;
                                                          }
                                                          tmp = constructor === Object || undefined === constructor;
                                                        }
                                                      }
                                                      let items = [];
                                                      let result1 = obj2.set(arr, items);
                                                      let item1 = arr.forEach(() => { ... });
                                                      value = items;
                                                    }
                                                  }
                                                  obj[arg0] = value;
                                                  let tmp7 = obj;
                                                }
                                              });
                                              value = obj;
                                            }
                                            tmp = constructor === Object || undefined === constructor;
                                          }
                                        }
                                        let items = [];
                                        let result1 = obj2.set(arr, items);
                                        let item1 = arr.forEach((obj) => {
                                          obj = closure_1;
                                          let closure_0 = obj;
                                          let items;
                                          obj = undefined;
                                          let value = obj;
                                          if (null !== obj) {
                                            value = obj;
                                            if (typeof obj === "object") {
                                              value = obj.get(obj);
                                              if (undefined === value) {
                                                const _Array = Array;
                                                if (Array.isArray(obj)) {
                                                  items = [];
                                                  const result = obj.set(obj, items);
                                                  const item = obj.forEach(() => { ... });
                                                  value = items;
                                                } else {
                                                  const constructor = obj.constructor;
                                                  const _Object = Object;
                                                  value = obj;
                                                  if (tmp3) {
                                                    obj = {};
                                                    const result1 = obj.set(obj, obj);
                                                    const _Object2 = Object;
                                                    const keys = Object.keys(obj);
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
                                    obj[arg0] = value;
                                    let tmp7 = obj;
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
                    if (tmp3) {
                      obj = {};
                      const result1 = obj.set(obj, obj);
                      const _Object2 = Object;
                      const keys = Object.keys(obj);
                      const item1 = keys.forEach((arg0) => {
                        arr = arr[arg0];
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
                                    let obj = {};
                                    let result = obj2.set(arr, obj);
                                    let _Object2 = Object;
                                    let keys = Object.keys(arr);
                                    let item = keys.forEach((arg0) => {
                                      arr = arr[arg0];
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
                                                  let obj = {};
                                                  let result = obj2.set(arr, obj);
                                                  let _Object2 = Object;
                                                  let keys = Object.keys(arr);
                                                  let item = keys.forEach((arg0) => {
                                                    arr = arr[arg0];
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
                                                                let obj = {};
                                                                let result = obj2.set(arr, obj);
                                                                let _Object2 = Object;
                                                                let keys = Object.keys(arr);
                                                                let item = keys.forEach(() => { ... });
                                                                value = obj;
                                                              }
                                                              tmp = constructor === Object || undefined === constructor;
                                                            }
                                                          }
                                                          let items = [];
                                                          let result1 = obj2.set(arr, items);
                                                          let item1 = arr.forEach(() => { ... });
                                                          value = items;
                                                        }
                                                      }
                                                      obj[arg0] = value;
                                                      let tmp7 = obj;
                                                    }
                                                  });
                                                  value = obj;
                                                }
                                                tmp = constructor === Object || undefined === constructor;
                                              }
                                            }
                                            let items = [];
                                            let result1 = obj2.set(arr, items);
                                            let item1 = arr.forEach((obj) => {
                                              obj = closure_1;
                                              let closure_0 = obj;
                                              let items;
                                              obj = undefined;
                                              let value = obj;
                                              if (null !== obj) {
                                                value = obj;
                                                if (typeof obj === "object") {
                                                  value = obj.get(obj);
                                                  if (undefined === value) {
                                                    const _Array = Array;
                                                    if (Array.isArray(obj)) {
                                                      items = [];
                                                      const result = obj.set(obj, items);
                                                      const item = obj.forEach(() => { ... });
                                                      value = items;
                                                    } else {
                                                      const constructor = obj.constructor;
                                                      const _Object = Object;
                                                      value = obj;
                                                      if (tmp3) {
                                                        obj = {};
                                                        const result1 = obj.set(obj, obj);
                                                        const _Object2 = Object;
                                                        const keys = Object.keys(obj);
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
                                        obj[arg0] = value;
                                        let tmp7 = obj;
                                      }
                                    });
                                    value = obj;
                                  }
                                  tmp = constructor === Object || undefined === constructor;
                                }
                              }
                              let items = [];
                              let result1 = obj2.set(arr, items);
                              let item1 = arr.forEach((obj) => {
                                obj = closure_1;
                                let closure_0 = obj;
                                let items;
                                obj = undefined;
                                let value = obj;
                                if (null !== obj) {
                                  value = obj;
                                  if (typeof obj === "object") {
                                    value = obj.get(obj);
                                    if (undefined === value) {
                                      const _Array = Array;
                                      if (Array.isArray(obj)) {
                                        items = [];
                                        const result = obj.set(obj, items);
                                        const item = obj.forEach((obj) => {
                                          obj = closure_1;
                                          let closure_0 = obj;
                                          let items;
                                          obj = undefined;
                                          let value = obj;
                                          if (null !== obj) {
                                            value = obj;
                                            if (typeof obj === "object") {
                                              value = obj.get(obj);
                                              if (undefined === value) {
                                                const _Array = Array;
                                                if (Array.isArray(obj)) {
                                                  items = [];
                                                  const result = obj.set(obj, items);
                                                  const item = obj.forEach(() => { ... });
                                                  value = items;
                                                } else {
                                                  const constructor = obj.constructor;
                                                  const _Object = Object;
                                                  value = obj;
                                                  if (tmp3) {
                                                    obj = {};
                                                    const result1 = obj.set(obj, obj);
                                                    const _Object2 = Object;
                                                    const keys = Object.keys(obj);
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
                                        const constructor = obj.constructor;
                                        const _Object = Object;
                                        value = obj;
                                        if (tmp3) {
                                          obj = {};
                                          const result1 = obj.set(obj, obj);
                                          const _Object2 = Object;
                                          const keys = Object.keys(obj);
                                          const item1 = keys.forEach((arg0) => {
                                            arr = arr[arg0];
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
                                                        let obj = {};
                                                        let result = obj2.set(arr, obj);
                                                        let _Object2 = Object;
                                                        let keys = Object.keys(arr);
                                                        let item = keys.forEach(() => { ... });
                                                        value = obj;
                                                      }
                                                      tmp = constructor === Object || undefined === constructor;
                                                    }
                                                  }
                                                  let items = [];
                                                  let result1 = obj2.set(arr, items);
                                                  let item1 = arr.forEach(() => { ... });
                                                  value = items;
                                                }
                                              }
                                              obj[arg0] = value;
                                              let tmp7 = obj;
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
                          obj[arg0] = value;
                          let tmp7 = obj;
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
            const item1 = keys.forEach((arg0) => {
              arr = arr[arg0];
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
                          let obj = {};
                          let result = obj2.set(arr, obj);
                          let _Object2 = Object;
                          let keys = Object.keys(arr);
                          let item = keys.forEach((arg0) => {
                            arr = arr[arg0];
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
                                        let obj = {};
                                        let result = obj2.set(arr, obj);
                                        let _Object2 = Object;
                                        let keys = Object.keys(arr);
                                        let item = keys.forEach((arg0) => {
                                          arr = arr[arg0];
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
                                                      let obj = {};
                                                      let result = obj2.set(arr, obj);
                                                      let _Object2 = Object;
                                                      let keys = Object.keys(arr);
                                                      let item = keys.forEach((arg0) => {
                                                        arr = arr[arg0];
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
                                                                    let obj = {};
                                                                    let result = obj2.set(arr, obj);
                                                                    let _Object2 = Object;
                                                                    let keys = Object.keys(arr);
                                                                    let item = keys.forEach(() => { ... });
                                                                    value = obj;
                                                                  }
                                                                  tmp = constructor === Object || undefined === constructor;
                                                                }
                                                              }
                                                              let items = [];
                                                              let result1 = obj2.set(arr, items);
                                                              let item1 = arr.forEach(() => { ... });
                                                              value = items;
                                                            }
                                                          }
                                                          obj[arg0] = value;
                                                          let tmp7 = obj;
                                                        }
                                                      });
                                                      value = obj;
                                                    }
                                                    tmp = constructor === Object || undefined === constructor;
                                                  }
                                                }
                                                let items = [];
                                                let result1 = obj2.set(arr, items);
                                                let item1 = arr.forEach((obj) => {
                                                  obj = closure_1;
                                                  let closure_0 = obj;
                                                  let items;
                                                  obj = undefined;
                                                  let value = obj;
                                                  if (null !== obj) {
                                                    value = obj;
                                                    if (typeof obj === "object") {
                                                      value = obj.get(obj);
                                                      if (undefined === value) {
                                                        const _Array = Array;
                                                        if (Array.isArray(obj)) {
                                                          items = [];
                                                          const result = obj.set(obj, items);
                                                          const item = obj.forEach(() => { ... });
                                                          value = items;
                                                        } else {
                                                          const constructor = obj.constructor;
                                                          const _Object = Object;
                                                          value = obj;
                                                          if (tmp3) {
                                                            obj = {};
                                                            const result1 = obj.set(obj, obj);
                                                            const _Object2 = Object;
                                                            const keys = Object.keys(obj);
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
                                            obj[arg0] = value;
                                            let tmp7 = obj;
                                          }
                                        });
                                        value = obj;
                                      }
                                      tmp = constructor === Object || undefined === constructor;
                                    }
                                  }
                                  let items = [];
                                  let result1 = obj2.set(arr, items);
                                  let item1 = arr.forEach((obj) => {
                                    obj = closure_1;
                                    let closure_0 = obj;
                                    let items;
                                    obj = undefined;
                                    let value = obj;
                                    if (null !== obj) {
                                      value = obj;
                                      if (typeof obj === "object") {
                                        value = obj.get(obj);
                                        if (undefined === value) {
                                          const _Array = Array;
                                          if (Array.isArray(obj)) {
                                            items = [];
                                            const result = obj.set(obj, items);
                                            const item = obj.forEach((obj) => {
                                              obj = closure_1;
                                              let closure_0 = obj;
                                              let items;
                                              obj = undefined;
                                              let value = obj;
                                              if (null !== obj) {
                                                value = obj;
                                                if (typeof obj === "object") {
                                                  value = obj.get(obj);
                                                  if (undefined === value) {
                                                    const _Array = Array;
                                                    if (Array.isArray(obj)) {
                                                      items = [];
                                                      const result = obj.set(obj, items);
                                                      const item = obj.forEach(() => { ... });
                                                      value = items;
                                                    } else {
                                                      const constructor = obj.constructor;
                                                      const _Object = Object;
                                                      value = obj;
                                                      if (tmp3) {
                                                        obj = {};
                                                        const result1 = obj.set(obj, obj);
                                                        const _Object2 = Object;
                                                        const keys = Object.keys(obj);
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
                                            const constructor = obj.constructor;
                                            const _Object = Object;
                                            value = obj;
                                            if (tmp3) {
                                              obj = {};
                                              const result1 = obj.set(obj, obj);
                                              const _Object2 = Object;
                                              const keys = Object.keys(obj);
                                              const item1 = keys.forEach((arg0) => {
                                                arr = arr[arg0];
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
                                                            let obj = {};
                                                            let result = obj2.set(arr, obj);
                                                            let _Object2 = Object;
                                                            let keys = Object.keys(arr);
                                                            let item = keys.forEach(() => { ... });
                                                            value = obj;
                                                          }
                                                          tmp = constructor === Object || undefined === constructor;
                                                        }
                                                      }
                                                      let items = [];
                                                      let result1 = obj2.set(arr, items);
                                                      let item1 = arr.forEach(() => { ... });
                                                      value = items;
                                                    }
                                                  }
                                                  obj[arg0] = value;
                                                  let tmp7 = obj;
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
                              obj[arg0] = value;
                              let tmp7 = obj;
                            }
                          });
                          value = obj;
                        }
                        tmp = constructor === Object || undefined === constructor;
                      }
                    }
                    let items = [];
                    let result1 = obj2.set(arr, items);
                    let item1 = arr.forEach((obj) => {
                      obj = closure_1;
                      let closure_0 = obj;
                      let items;
                      obj = undefined;
                      let value = obj;
                      if (null !== obj) {
                        value = obj;
                        if (typeof obj === "object") {
                          value = obj.get(obj);
                          if (undefined === value) {
                            const _Array = Array;
                            if (Array.isArray(obj)) {
                              items = [];
                              const result = obj.set(obj, items);
                              const item = obj.forEach((obj) => {
                                obj = closure_1;
                                let closure_0 = obj;
                                let items;
                                obj = undefined;
                                let value = obj;
                                if (null !== obj) {
                                  value = obj;
                                  if (typeof obj === "object") {
                                    value = obj.get(obj);
                                    if (undefined === value) {
                                      const _Array = Array;
                                      if (Array.isArray(obj)) {
                                        items = [];
                                        const result = obj.set(obj, items);
                                        const item = obj.forEach((obj) => {
                                          obj = closure_1;
                                          let closure_0 = obj;
                                          let items;
                                          obj = undefined;
                                          let value = obj;
                                          if (null !== obj) {
                                            value = obj;
                                            if (typeof obj === "object") {
                                              value = obj.get(obj);
                                              if (undefined === value) {
                                                const _Array = Array;
                                                if (Array.isArray(obj)) {
                                                  items = [];
                                                  const result = obj.set(obj, items);
                                                  const item = obj.forEach(() => { ... });
                                                  value = items;
                                                } else {
                                                  const constructor = obj.constructor;
                                                  const _Object = Object;
                                                  value = obj;
                                                  if (tmp3) {
                                                    obj = {};
                                                    const result1 = obj.set(obj, obj);
                                                    const _Object2 = Object;
                                                    const keys = Object.keys(obj);
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
                                        const constructor = obj.constructor;
                                        const _Object = Object;
                                        value = obj;
                                        if (tmp3) {
                                          obj = {};
                                          const result1 = obj.set(obj, obj);
                                          const _Object2 = Object;
                                          const keys = Object.keys(obj);
                                          const item1 = keys.forEach((arg0) => {
                                            arr = arr[arg0];
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
                                                        let obj = {};
                                                        let result = obj2.set(arr, obj);
                                                        let _Object2 = Object;
                                                        let keys = Object.keys(arr);
                                                        let item = keys.forEach(() => { ... });
                                                        value = obj;
                                                      }
                                                      tmp = constructor === Object || undefined === constructor;
                                                    }
                                                  }
                                                  let items = [];
                                                  let result1 = obj2.set(arr, items);
                                                  let item1 = arr.forEach(() => { ... });
                                                  value = items;
                                                }
                                              }
                                              obj[arg0] = value;
                                              let tmp7 = obj;
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
                              if (tmp3) {
                                obj = {};
                                const result1 = obj.set(obj, obj);
                                const _Object2 = Object;
                                const keys = Object.keys(obj);
                                const item1 = keys.forEach((arg0) => {
                                  arr = arr[arg0];
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
                                              let obj = {};
                                              let result = obj2.set(arr, obj);
                                              let _Object2 = Object;
                                              let keys = Object.keys(arr);
                                              let item = keys.forEach((arg0) => {
                                                arr = arr[arg0];
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
                                                            let obj = {};
                                                            let result = obj2.set(arr, obj);
                                                            let _Object2 = Object;
                                                            let keys = Object.keys(arr);
                                                            let item = keys.forEach(() => { ... });
                                                            value = obj;
                                                          }
                                                          tmp = constructor === Object || undefined === constructor;
                                                        }
                                                      }
                                                      let items = [];
                                                      let result1 = obj2.set(arr, items);
                                                      let item1 = arr.forEach(() => { ... });
                                                      value = items;
                                                    }
                                                  }
                                                  obj[arg0] = value;
                                                  let tmp7 = obj;
                                                }
                                              });
                                              value = obj;
                                            }
                                            tmp = constructor === Object || undefined === constructor;
                                          }
                                        }
                                        let items = [];
                                        let result1 = obj2.set(arr, items);
                                        let item1 = arr.forEach((obj) => {
                                          obj = closure_1;
                                          let closure_0 = obj;
                                          let items;
                                          obj = undefined;
                                          let value = obj;
                                          if (null !== obj) {
                                            value = obj;
                                            if (typeof obj === "object") {
                                              value = obj.get(obj);
                                              if (undefined === value) {
                                                const _Array = Array;
                                                if (Array.isArray(obj)) {
                                                  items = [];
                                                  const result = obj.set(obj, items);
                                                  const item = obj.forEach(() => { ... });
                                                  value = items;
                                                } else {
                                                  const constructor = obj.constructor;
                                                  const _Object = Object;
                                                  value = obj;
                                                  if (tmp3) {
                                                    obj = {};
                                                    const result1 = obj.set(obj, obj);
                                                    const _Object2 = Object;
                                                    const keys = Object.keys(obj);
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
                                    obj[arg0] = value;
                                    let tmp7 = obj;
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
                obj[arg0] = value;
                let tmp7 = obj;
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
arg5.fill = function fill(arg0, arg1, arg2) {
  if (arg1 in arg0) {
    if (typeof arg0[arg1] === "function") {
      const tmp10 = arg2(tmp4);
      if (typeof tmp10 === "function") {
        markFunctionWrapped(tmp10, tmp4);
      }
      try {
        arg0[arg1] = tmp10;
      } catch (err) {
        if (require(823) /* __SENTRY_DEBUG__ */.DEBUG_BUILD) {
          const debug = tmp5(824).debug;
          const _HermesInternal = HermesInternal;
          debug.log("Failed to replace method \"" + tmp3 + "\" in object", tmp2);
        }
        tmp5 = require;
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
      obj = require(827) /* isInstanceOf */;
    }
  }
  return string;
};