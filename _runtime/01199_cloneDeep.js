// === Module 1199: cloneDeep ===

// Module 1199 (cloneDeep)
import e from "e" /* 1172 */;
import TYPE from "TYPE" /* 1189 */;

require = arg1;
const dependencyMap = arg6;
function cloneDeep(arr) {
  _require = arr;
  if (Array.isArray(arr)) {
    let __spreadArrayResult = require("e").__spreadArray([], arr.map(cloneDeep), true);
    const obj = require("e");
  } else {
    __spreadArrayResult = arr;
    if (null !== arr) {
      __spreadArrayResult = arr;
      if (typeof arr === "object") {
        const _Object = Object;
        const keys = Object.keys(arr);
        __spreadArrayResult = keys.reduce((acc, item) => {
          if (Array.isArray(closure_1_0[item])) {
            let __spreadArrayResult = closure_2_0(closure_2_1[0]).__spreadArray([], arr.map(closure_2_2), true);
            let obj = closure_2_0(closure_2_1[0]);
          } else {
            __spreadArrayResult = arr;
            if (null !== arr) {
              __spreadArrayResult = arr;
              if (typeof arr === "object") {
                let _Object = Object;
                let keys = Object.keys(arr);
                __spreadArrayResult = keys.reduce((acc, item) => {
                  if (Array.isArray(closure_1_0[item])) {
                    let __spreadArrayResult = closure_2_0(closure_2_1[0]).__spreadArray([], arr.map(closure_2_2), true);
                    let obj = closure_2_0(closure_2_1[0]);
                  } else {
                    __spreadArrayResult = arr;
                    if (null !== arr) {
                      __spreadArrayResult = arr;
                      if (typeof arr === "object") {
                        let _Object = Object;
                        let keys = Object.keys(arr);
                        __spreadArrayResult = keys.reduce((acc, item) => {
                          if (Array.isArray(closure_1_0[item])) {
                            let __spreadArrayResult = closure_2_0(closure_2_1[0]).__spreadArray([], arr.map(closure_2_2), true);
                            let obj = closure_2_0(closure_2_1[0]);
                          } else {
                            __spreadArrayResult = arr;
                            if (null !== arr) {
                              __spreadArrayResult = arr;
                              if (typeof arr === "object") {
                                let _Object = Object;
                                let keys = Object.keys(arr);
                                __spreadArrayResult = keys.reduce((acc, item) => {
                                  if (Array.isArray(closure_1_0[item])) {
                                    let __spreadArrayResult = closure_2_0(closure_2_1[0]).__spreadArray([], arr.map(closure_2_2), true);
                                    let obj = closure_2_0(closure_2_1[0]);
                                  } else {
                                    __spreadArrayResult = arr;
                                    if (null !== arr) {
                                      __spreadArrayResult = arr;
                                      if (typeof arr === "object") {
                                        let _Object = Object;
                                        let keys = Object.keys(arr);
                                        __spreadArrayResult = keys.reduce(() => { ... }, {});
                                      }
                                    }
                                  }
                                  acc[item] = __spreadArrayResult;
                                  return acc;
                                }, {});
                              }
                            }
                          }
                          acc[item] = __spreadArrayResult;
                          return acc;
                        }, {});
                      }
                    }
                  }
                  acc[item] = __spreadArrayResult;
                  return acc;
                }, {});
              }
            }
          }
          acc[item] = __spreadArrayResult;
          return acc;
        }, {});
      }
    }
  }
  return __spreadArrayResult;
}
function hoistSelectors(arg0) {
  let arr;
  let tmp;
  let tmp2;
  let num = 0;
  if (0 < arg0.length) {
    while (true) {
      arr = arg0[num];
      tmp = _require;
      tmp2 = num;
      let isPluralElementResult = require("TYPE").isPluralElement(arr);
      if (!isPluralElementResult) {
        isPluralElementResult = tmp(tmp2[1]).isSelectElement(arr);
      }
      if (isPluralElementResult) {
        break;
      } else {
        if (tmp(tmp2[1]).isTagElement(arr)) {
          let items = [arr];
          if (items.find((children) => {
            let tmp4 = closure_1_0(closure_1_1[1]).isPluralElement(children) || closure_1_0(closure_1_1[1]).isSelectElement(children);
            if (!tmp4) {
              let isTagElementResult = closure_1_0(closure_1_1[1]).isTagElement(children);
              if (isTagElementResult) {
                children = children.children;
                isTagElementResult = children.find((children) => {
                  let tmp4 = closure_1_0(closure_1_1[1]).isPluralElement(children) || closure_1_0(closure_1_1[1]).isSelectElement(children);
                  if (!tmp4) {
                    let isTagElementResult = closure_1_0(closure_1_1[1]).isTagElement(children);
                    if (isTagElementResult) {
                      children = children.children;
                      isTagElementResult = children.find((children) => {
                        let tmp4 = closure_1_0(closure_1_1[1]).isPluralElement(children) || closure_1_0(closure_1_1[1]).isSelectElement(children);
                        if (!tmp4) {
                          let isTagElementResult = closure_1_0(closure_1_1[1]).isTagElement(children);
                          if (isTagElementResult) {
                            children = children.children;
                            isTagElementResult = children.find((children) => {
                              let tmp4 = closure_1_0(closure_1_1[1]).isPluralElement(children) || closure_1_0(closure_1_1[1]).isSelectElement(children);
                              if (!tmp4) {
                                let isTagElementResult = closure_1_0(closure_1_1[1]).isTagElement(children);
                                if (isTagElementResult) {
                                  children = children.children;
                                  isTagElementResult = children.find(() => { ... });
                                }
                                tmp4 = isTagElementResult;
                              }
                              return tmp4;
                            });
                          }
                          tmp4 = isTagElementResult;
                        }
                        return tmp4;
                      });
                    }
                    tmp4 = isTagElementResult;
                  }
                  return tmp4;
                });
              }
              tmp4 = isTagElementResult;
            }
            return tmp4;
          })) {
            let tmp5 = globalThis;
            let _Error = Error;
            let tmp6 = new.target;
            let str = "Cannot hoist plural/select within a tag element. Please put the tag element inside each plural/select option";
            let tmp7 = new.target;
            let error = new Error("Cannot hoist plural/select within a tag element. Please put the tag element inside each plural/select option");
            throw error;
          }
        }
        num = num + 1;
      }
    }
    _require = arg0;
    closure_129_0 = arr;
    const _Array = Array;
    if (Array.isArray(arr)) {
      let __spreadArrayResult = tmp(tmp2[0]).__spreadArray([], arr.map(options), true);
      const tmpResult = tmp(tmp2[0]);
    } else {
      __spreadArrayResult = arr;
      if (null !== arr) {
        __spreadArrayResult = arr;
        if (typeof arr === "object") {
          const _Object2 = Object;
          const keys = Object.keys(arr);
          __spreadArrayResult = keys.reduce((acc, item) => {
            if (Array.isArray(closure_1_0[item])) {
              let __spreadArrayResult = closure_2_0(closure_2_1[0]).__spreadArray([], arr.map(closure_2_2), true);
              let obj = closure_2_0(closure_2_1[0]);
            } else {
              __spreadArrayResult = arr;
              if (null !== arr) {
                __spreadArrayResult = arr;
                if (typeof arr === "object") {
                  let _Object = Object;
                  let keys = Object.keys(arr);
                  __spreadArrayResult = keys.reduce((acc, item) => {
                    if (Array.isArray(closure_1_0[item])) {
                      let __spreadArrayResult = closure_2_0(closure_2_1[0]).__spreadArray([], arr.map(closure_2_2), true);
                      let obj = closure_2_0(closure_2_1[0]);
                    } else {
                      __spreadArrayResult = arr;
                      if (null !== arr) {
                        __spreadArrayResult = arr;
                        if (typeof arr === "object") {
                          let _Object = Object;
                          let keys = Object.keys(arr);
                          __spreadArrayResult = keys.reduce((acc, item) => {
                            if (Array.isArray(closure_1_0[item])) {
                              let __spreadArrayResult = closure_2_0(closure_2_1[0]).__spreadArray([], arr.map(closure_2_2), true);
                              let obj = closure_2_0(closure_2_1[0]);
                            } else {
                              __spreadArrayResult = arr;
                              if (null !== arr) {
                                __spreadArrayResult = arr;
                                if (typeof arr === "object") {
                                  let _Object = Object;
                                  let keys = Object.keys(arr);
                                  __spreadArrayResult = keys.reduce((acc, item) => {
                                    if (Array.isArray(closure_1_0[item])) {
                                      let __spreadArrayResult = closure_2_0(closure_2_1[0]).__spreadArray([], arr.map(closure_2_2), true);
                                      let obj = closure_2_0(closure_2_1[0]);
                                    } else {
                                      __spreadArrayResult = arr;
                                      if (null !== arr) {
                                        __spreadArrayResult = arr;
                                        if (typeof arr === "object") {
                                          let _Object = Object;
                                          let keys = Object.keys(arr);
                                          __spreadArrayResult = keys.reduce(() => { ... }, {});
                                        }
                                      }
                                    }
                                    acc[item] = __spreadArrayResult;
                                    return acc;
                                  }, {});
                                }
                              }
                            }
                            acc[item] = __spreadArrayResult;
                            return acc;
                          }, {});
                        }
                      }
                    }
                    acc[item] = __spreadArrayResult;
                    return acc;
                  }, {});
                }
              }
            }
            acc[item] = __spreadArrayResult;
            return acc;
          }, {});
        }
      }
    }
    options = __spreadArrayResult.options;
    const _Object = Object;
    const keys1 = Object.keys(options);
    __spreadArrayResult.options = keys1.reduce((acc, item) => {
      const obj = e;
      const obj2 = e;
      const __spreadArrayResult = obj2.__spreadArray(e.__spreadArray([], closure_0.slice(0, num), true), options[item].value, true);
      acc[item] = { value: hoistSelectors(obj.__spreadArray(obj2.__spreadArray(e.__spreadArray([], closure_0.slice(0, num), true), options[item].value, true), closure_0.slice(num + 1), true)) };
      return acc;
    }, {});
    const items1 = [__spreadArrayResult];
    return items1;
  }
  return arg0;
}

export { hoistSelectors };
export const isStructurallySame = function isStructurallySame(arr, arr2) {
  const map = new Map();
  map1 = new Map();
  closure_129_0 = map;
  const item = arr.forEach((value) => {
    options = value;
    if (!options(dependencyMap[1]).isArgumentElement(value)) {
      if (!tmp(dependencyMap[1]).isDateElement(value)) {
        if (tmp4) {
          let result = options.set(value.value, value.type);
          let _Object = Object;
          let keys = Object.keys(value.options);
          let item = keys.forEach((item) => {
            let value = options.options[item].value;
            options = closure_2_0;
            item = value.forEach((value) => {
              options = value;
              if (!options(dependencyMap[1]).isArgumentElement(value)) {
                if (!tmp(dependencyMap[1]).isDateElement(value)) {
                  if (tmp4) {
                    let result = options.set(value.value, value.type);
                    let _Object = Object;
                    let keys = Object.keys(value.options);
                    let item = keys.forEach((item) => {
                      let value = options.options[item].value;
                      options = closure_2_0;
                      item = value.forEach(() => { ... });
                    });
                  }
                  if (tmp(dependencyMap[1]).isTagElement(value)) {
                    let result1 = options.set(value.value, value.type);
                    let children = value.children;
                    let item1 = children.forEach((value) => {
                      options = value;
                      if (!options(dependencyMap[1]).isArgumentElement(value)) {
                        if (!tmp(dependencyMap[1]).isDateElement(value)) {
                          if (tmp4) {
                            let result = options.set(value.value, value.type);
                            let _Object = Object;
                            let keys = Object.keys(value.options);
                            let item = keys.forEach(() => { ... });
                          }
                          if (tmp(dependencyMap[1]).isTagElement(value)) {
                            let result1 = options.set(value.value, value.type);
                            let children = value.children;
                            let item1 = children.forEach(() => { ... });
                          }
                          tmp4 = tmp(dependencyMap[1]).isPluralElement(value) || tmp(dependencyMap[1]).isSelectElement(value);
                        }
                      }
                      if (value.value in options) {
                        if (obj.get(value.value) !== value.type) {
                          let _Error = Error;
                          let concat = "Variable ".concat;
                          let error = new Error("Variable ".concat(value.value, " has conflicting types"));
                          throw error;
                        }
                      }
                      let result2 = obj.set(value.value, value.type);
                    });
                  }
                  tmp4 = tmp(dependencyMap[1]).isPluralElement(value) || tmp(dependencyMap[1]).isSelectElement(value);
                }
              }
              if (value.value in options) {
                if (obj.get(value.value) !== value.type) {
                  let _Error = Error;
                  let concat = "Variable ".concat;
                  let error = new Error("Variable ".concat(value.value, " has conflicting types"));
                  throw error;
                }
              }
              let result2 = obj.set(value.value, value.type);
            });
          });
        }
        if (tmp(dependencyMap[1]).isTagElement(value)) {
          let result1 = options.set(value.value, value.type);
          let children = value.children;
          let item1 = children.forEach((value) => {
            options = value;
            if (!options(dependencyMap[1]).isArgumentElement(value)) {
              if (!tmp(dependencyMap[1]).isDateElement(value)) {
                if (tmp4) {
                  let result = options.set(value.value, value.type);
                  let _Object = Object;
                  let keys = Object.keys(value.options);
                  let item = keys.forEach((item) => {
                    let value = options.options[item].value;
                    options = closure_2_0;
                    item = value.forEach((value) => {
                      options = value;
                      if (!options(dependencyMap[1]).isArgumentElement(value)) {
                        if (!tmp(dependencyMap[1]).isDateElement(value)) {
                          if (tmp4) {
                            let result = options.set(value.value, value.type);
                            let _Object = Object;
                            let keys = Object.keys(value.options);
                            let item = keys.forEach(() => { ... });
                          }
                          if (tmp(dependencyMap[1]).isTagElement(value)) {
                            let result1 = options.set(value.value, value.type);
                            let children = value.children;
                            let item1 = children.forEach(() => { ... });
                          }
                          tmp4 = tmp(dependencyMap[1]).isPluralElement(value) || tmp(dependencyMap[1]).isSelectElement(value);
                        }
                      }
                      if (value.value in options) {
                        if (obj.get(value.value) !== value.type) {
                          let _Error = Error;
                          let concat = "Variable ".concat;
                          let error = new Error("Variable ".concat(value.value, " has conflicting types"));
                          throw error;
                        }
                      }
                      let result2 = obj.set(value.value, value.type);
                    });
                  });
                }
                if (tmp(dependencyMap[1]).isTagElement(value)) {
                  let result1 = options.set(value.value, value.type);
                  let children = value.children;
                  let item1 = children.forEach((value) => {
                    options = value;
                    if (!options(dependencyMap[1]).isArgumentElement(value)) {
                      if (!tmp(dependencyMap[1]).isDateElement(value)) {
                        if (tmp4) {
                          let result = options.set(value.value, value.type);
                          let _Object = Object;
                          let keys = Object.keys(value.options);
                          let item = keys.forEach((item) => {
                            let value = options.options[item].value;
                            options = closure_2_0;
                            item = value.forEach(() => { ... });
                          });
                        }
                        if (tmp(dependencyMap[1]).isTagElement(value)) {
                          let result1 = options.set(value.value, value.type);
                          let children = value.children;
                          let item1 = children.forEach((value) => {
                            options = value;
                            if (!options(dependencyMap[1]).isArgumentElement(value)) {
                              if (!tmp(dependencyMap[1]).isDateElement(value)) {
                                if (tmp4) {
                                  let result = options.set(value.value, value.type);
                                  let _Object = Object;
                                  let keys = Object.keys(value.options);
                                  let item = keys.forEach(() => { ... });
                                }
                                if (tmp(dependencyMap[1]).isTagElement(value)) {
                                  let result1 = options.set(value.value, value.type);
                                  let children = value.children;
                                  let item1 = children.forEach(() => { ... });
                                }
                                tmp4 = tmp(dependencyMap[1]).isPluralElement(value) || tmp(dependencyMap[1]).isSelectElement(value);
                              }
                            }
                            if (value.value in options) {
                              if (obj.get(value.value) !== value.type) {
                                let _Error = Error;
                                let concat = "Variable ".concat;
                                let error = new Error("Variable ".concat(value.value, " has conflicting types"));
                                throw error;
                              }
                            }
                            let result2 = obj.set(value.value, value.type);
                          });
                        }
                        tmp4 = tmp(dependencyMap[1]).isPluralElement(value) || tmp(dependencyMap[1]).isSelectElement(value);
                      }
                    }
                    if (value.value in options) {
                      if (obj.get(value.value) !== value.type) {
                        let _Error = Error;
                        let concat = "Variable ".concat;
                        let error = new Error("Variable ".concat(value.value, " has conflicting types"));
                        throw error;
                      }
                    }
                    let result2 = obj.set(value.value, value.type);
                  });
                }
                tmp4 = tmp(dependencyMap[1]).isPluralElement(value) || tmp(dependencyMap[1]).isSelectElement(value);
              }
            }
            if (value.value in options) {
              if (obj.get(value.value) !== value.type) {
                let _Error = Error;
                let concat = "Variable ".concat;
                let error = new Error("Variable ".concat(value.value, " has conflicting types"));
                throw error;
              }
            }
            let result2 = obj.set(value.value, value.type);
          });
        }
        tmp4 = tmp(dependencyMap[1]).isPluralElement(value) || tmp(dependencyMap[1]).isSelectElement(value);
      }
    }
    if (value.value in options) {
      if (obj.get(value.value) !== value.type) {
        let _Error = Error;
        let concat = "Variable ".concat;
        let error = new Error("Variable ".concat(value.value, " has conflicting types"));
        throw error;
      }
    }
    let result2 = obj.set(value.value, value.type);
  });
  closure_130_0 = map1;
  const item1 = arr2.forEach((value) => {
    options = value;
    if (!options(dependencyMap[1]).isArgumentElement(value)) {
      if (!tmp(dependencyMap[1]).isDateElement(value)) {
        if (tmp4) {
          let result = options.set(value.value, value.type);
          let _Object = Object;
          let keys = Object.keys(value.options);
          let item = keys.forEach((item) => {
            let value = options.options[item].value;
            options = closure_2_0;
            item = value.forEach((value) => {
              options = value;
              if (!options(dependencyMap[1]).isArgumentElement(value)) {
                if (!tmp(dependencyMap[1]).isDateElement(value)) {
                  if (tmp4) {
                    let result = options.set(value.value, value.type);
                    let _Object = Object;
                    let keys = Object.keys(value.options);
                    let item = keys.forEach((item) => {
                      let value = options.options[item].value;
                      options = closure_2_0;
                      item = value.forEach(() => { ... });
                    });
                  }
                  if (tmp(dependencyMap[1]).isTagElement(value)) {
                    let result1 = options.set(value.value, value.type);
                    let children = value.children;
                    let item1 = children.forEach((value) => {
                      options = value;
                      if (!options(dependencyMap[1]).isArgumentElement(value)) {
                        if (!tmp(dependencyMap[1]).isDateElement(value)) {
                          if (tmp4) {
                            let result = options.set(value.value, value.type);
                            let _Object = Object;
                            let keys = Object.keys(value.options);
                            let item = keys.forEach(() => { ... });
                          }
                          if (tmp(dependencyMap[1]).isTagElement(value)) {
                            let result1 = options.set(value.value, value.type);
                            let children = value.children;
                            let item1 = children.forEach(() => { ... });
                          }
                          tmp4 = tmp(dependencyMap[1]).isPluralElement(value) || tmp(dependencyMap[1]).isSelectElement(value);
                        }
                      }
                      if (value.value in options) {
                        if (obj.get(value.value) !== value.type) {
                          let _Error = Error;
                          let concat = "Variable ".concat;
                          let error = new Error("Variable ".concat(value.value, " has conflicting types"));
                          throw error;
                        }
                      }
                      let result2 = obj.set(value.value, value.type);
                    });
                  }
                  tmp4 = tmp(dependencyMap[1]).isPluralElement(value) || tmp(dependencyMap[1]).isSelectElement(value);
                }
              }
              if (value.value in options) {
                if (obj.get(value.value) !== value.type) {
                  let _Error = Error;
                  let concat = "Variable ".concat;
                  let error = new Error("Variable ".concat(value.value, " has conflicting types"));
                  throw error;
                }
              }
              let result2 = obj.set(value.value, value.type);
            });
          });
        }
        if (tmp(dependencyMap[1]).isTagElement(value)) {
          let result1 = options.set(value.value, value.type);
          let children = value.children;
          let item1 = children.forEach((value) => {
            options = value;
            if (!options(dependencyMap[1]).isArgumentElement(value)) {
              if (!tmp(dependencyMap[1]).isDateElement(value)) {
                if (tmp4) {
                  let result = options.set(value.value, value.type);
                  let _Object = Object;
                  let keys = Object.keys(value.options);
                  let item = keys.forEach((item) => {
                    let value = options.options[item].value;
                    options = closure_2_0;
                    item = value.forEach((value) => {
                      options = value;
                      if (!options(dependencyMap[1]).isArgumentElement(value)) {
                        if (!tmp(dependencyMap[1]).isDateElement(value)) {
                          if (tmp4) {
                            let result = options.set(value.value, value.type);
                            let _Object = Object;
                            let keys = Object.keys(value.options);
                            let item = keys.forEach(() => { ... });
                          }
                          if (tmp(dependencyMap[1]).isTagElement(value)) {
                            let result1 = options.set(value.value, value.type);
                            let children = value.children;
                            let item1 = children.forEach(() => { ... });
                          }
                          tmp4 = tmp(dependencyMap[1]).isPluralElement(value) || tmp(dependencyMap[1]).isSelectElement(value);
                        }
                      }
                      if (value.value in options) {
                        if (obj.get(value.value) !== value.type) {
                          let _Error = Error;
                          let concat = "Variable ".concat;
                          let error = new Error("Variable ".concat(value.value, " has conflicting types"));
                          throw error;
                        }
                      }
                      let result2 = obj.set(value.value, value.type);
                    });
                  });
                }
                if (tmp(dependencyMap[1]).isTagElement(value)) {
                  let result1 = options.set(value.value, value.type);
                  let children = value.children;
                  let item1 = children.forEach((value) => {
                    options = value;
                    if (!options(dependencyMap[1]).isArgumentElement(value)) {
                      if (!tmp(dependencyMap[1]).isDateElement(value)) {
                        if (tmp4) {
                          let result = options.set(value.value, value.type);
                          let _Object = Object;
                          let keys = Object.keys(value.options);
                          let item = keys.forEach((item) => {
                            let value = options.options[item].value;
                            options = closure_2_0;
                            item = value.forEach(() => { ... });
                          });
                        }
                        if (tmp(dependencyMap[1]).isTagElement(value)) {
                          let result1 = options.set(value.value, value.type);
                          let children = value.children;
                          let item1 = children.forEach((value) => {
                            options = value;
                            if (!options(dependencyMap[1]).isArgumentElement(value)) {
                              if (!tmp(dependencyMap[1]).isDateElement(value)) {
                                if (tmp4) {
                                  let result = options.set(value.value, value.type);
                                  let _Object = Object;
                                  let keys = Object.keys(value.options);
                                  let item = keys.forEach(() => { ... });
                                }
                                if (tmp(dependencyMap[1]).isTagElement(value)) {
                                  let result1 = options.set(value.value, value.type);
                                  let children = value.children;
                                  let item1 = children.forEach(() => { ... });
                                }
                                tmp4 = tmp(dependencyMap[1]).isPluralElement(value) || tmp(dependencyMap[1]).isSelectElement(value);
                              }
                            }
                            if (value.value in options) {
                              if (obj.get(value.value) !== value.type) {
                                let _Error = Error;
                                let concat = "Variable ".concat;
                                let error = new Error("Variable ".concat(value.value, " has conflicting types"));
                                throw error;
                              }
                            }
                            let result2 = obj.set(value.value, value.type);
                          });
                        }
                        tmp4 = tmp(dependencyMap[1]).isPluralElement(value) || tmp(dependencyMap[1]).isSelectElement(value);
                      }
                    }
                    if (value.value in options) {
                      if (obj.get(value.value) !== value.type) {
                        let _Error = Error;
                        let concat = "Variable ".concat;
                        let error = new Error("Variable ".concat(value.value, " has conflicting types"));
                        throw error;
                      }
                    }
                    let result2 = obj.set(value.value, value.type);
                  });
                }
                tmp4 = tmp(dependencyMap[1]).isPluralElement(value) || tmp(dependencyMap[1]).isSelectElement(value);
              }
            }
            if (value.value in options) {
              if (obj.get(value.value) !== value.type) {
                let _Error = Error;
                let concat = "Variable ".concat;
                let error = new Error("Variable ".concat(value.value, " has conflicting types"));
                throw error;
              }
            }
            let result2 = obj.set(value.value, value.type);
          });
        }
        tmp4 = tmp(dependencyMap[1]).isPluralElement(value) || tmp(dependencyMap[1]).isSelectElement(value);
      }
    }
    if (value.value in options) {
      if (obj.get(value.value) !== value.type) {
        let _Error = Error;
        let concat = "Variable ".concat;
        let error = new Error("Variable ".concat(value.value, " has conflicting types"));
        throw error;
      }
    }
    let result2 = obj.set(value.value, value.type);
  });
  if (map.size !== map1.size) {
    let obj = { success: false, error: null };
    let _Error = Error;
    let concat = "Different number of variables: [".concat;
    const _Array2 = Array;
    let combined = "Different number of variables: [".concat(Array.from(map.keys()).join(", "), "] vs [");
    const _Array3 = Array;
    const arr3 = Array.from(map.keys());
    let error = new Error(combined.concat(Array.from(map1.keys()).join(", "), "]"));
    obj.error = error;
    return obj;
  } else {
    const _Array = Array;
    arr = Array.from(map.entries());
    return arr.reduce((success, item) => {
      let tmp = success;
      [tmp2, tmp3] = item;
      if (success.success) {
        value = map1.get(tmp2);
        if (null == value) {
          const obj = { success: false, error: null };
          const _Error = Error;
          const concat = "Missing variable ".concat;
          const error = new Error("Missing variable ".concat(tmp2, " in message"));
          obj.error = error;
          tmp = obj;
        } else if (value !== tmp3) {
          const obj2 = { success: false, error: null };
          const _Error2 = Error;
          const concat2 = "Variable ".concat;
          const combined = "Variable ".concat(tmp2, " has conflicting types: ");
          const combined1 = combined.concat(TYPE.TYPE[tmp3], " vs ");
          const error1 = new Error(combined1.concat(TYPE.TYPE[value]));
          obj2.error = error1;
          tmp = obj2;
        }
        return tmp;
      } else {
        return tmp;
      }
    }, { success: true });
  }
};