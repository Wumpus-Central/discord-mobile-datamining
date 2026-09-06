// _runtime/01537_serializeParamValue.js
import _mod1538 from "metro/01538__.js";

require = arg1;
let importAll = arg3;
const dependencyMap = arg6;
function serializeParamValue(arg0) {

}
function getActiveRoute(index, arg1, fn) {
  if (typeof index.index === "number") {
    let tmp = index.routes[index.index];
  } else {
    tmp = index.routes[index.routes.length - 1];
  }
  let tmp2;
  if (arg1 != null) {
    tmp2 = arg1[tmp.name];
  }
  const tmp3 = fn(tmp, tmp2);
  if (tmp3) {
    let screens;
    if (tmp2 != null) {
      screens = tmp2.screens;
    }
    tmp = getActiveRoute(tmp3, screens, fn);
  }
  return tmp;
}
const weakMap = new WeakMap();
function createNormalizedConfigs(arg0, arg1) {

}

export const getPathFromState = function getPathFromState(state, screens) {
  let routeState2;
  if (null == state) {
    const _Error = Error;
    let _String = String;
    const _HermesInternal4 = HermesInternal;
    throw Error("Got '" + String(state) + "' for the navigation state. You must pass a valid state object.");
  } else {
    screens = undefined;
    if (screens != null) {
      screens = screens.screens;
    }
    if (screens) {
      let screens1;
      if (screens != null) {
        screens1 = screens.screens;
      }
      let obj = screens.get(screens1);
      if (!obj) {
        if (typeof closure_6 === "function") {
          let _Object = Object;
          let _Object2 = Object;
          let entries = Object.entries(tmp6);
          let fromEntriesResult = Object.fromEntries(entries.map((item) => {
            [tmp, tmp2] = item;
            if (typeof tmp2 === "string") {
              let patternParts = closure_2_0(closure_2_2[2]).getPatternParts(tmp2);
              let obj = { parts: null, ownParts: null };
              if (tmp3) {
                let items = [];
                HermesBuiltin.arraySpread(patternParts, HermesBuiltin.arraySpread(tmp3, 0));
                obj.parts = items;
                obj.ownParts = patternParts;
              } else {
                obj.parts = patternParts;
                obj.ownParts = patternParts;
              }
              let obj3 = closure_2_0(closure_2_2[2]);
            } else {
              if (tmp2.exact) {
                if (undefined === tmp2.path) {
                  let _Error = Error;
                  let error = new Error("A 'path' needs to be specified when specifying 'exact: true'. If you don't want this screen in the URL, specify it as empty string, e.g. `path: ''`.");
                  throw error;
                }
              }
              if (tmp2.path) {
                obj = closure_2_0(closure_2_2[2]);
                patternParts1 = obj.getPatternParts(tmp2.path);
              } else {
                patternParts1 = [];
              }
              if (true !== tmp2.exact) {
                let items1 = tmp3;
                if (!tmp3) {
                  items1 = [];
                }
                let items2 = [];
                HermesBuiltin.arraySpread(patternParts1, HermesBuiltin.arraySpread(items1, 0));
                let tmp6 = items2;
              } else if (patternParts1.length) {
                tmp6 = patternParts1;
              }
              let fromEntriesResult;
              if (tmp2.screens) {
                if (typeof closure_2_6 === "function") {
                  patternParts1 = tmp6;
                  let _Object = Object;
                  let _Object2 = Object;
                  let entries = Object.entries(tmp14);
                  fromEntriesResult = Object.fromEntries(entries.map((item) => {
                    [tmp, tmp2] = item;
                    if (typeof tmp2 === "string") {
                      let patternParts = closure_2_0(closure_2_2[2]).getPatternParts(tmp2);
                      let obj = { parts: null, ownParts: null };
                      if (tmp3) {
                        let items = [];
                        HermesBuiltin.arraySpread(patternParts, HermesBuiltin.arraySpread(tmp3, 0));
                        obj.parts = items;
                        obj.ownParts = patternParts;
                      } else {
                        obj.parts = patternParts;
                        obj.ownParts = patternParts;
                      }
                      let obj3 = closure_2_0(closure_2_2[2]);
                    } else {
                      if (tmp2.exact) {
                        if (undefined === tmp2.path) {
                          let _Error = Error;
                          let error = new Error("A 'path' needs to be specified when specifying 'exact: true'. If you don't want this screen in the URL, specify it as empty string, e.g. `path: ''`.");
                          throw error;
                        }
                      }
                      if (tmp2.path) {
                        obj = closure_2_0(closure_2_2[2]);
                        patternParts1 = obj.getPatternParts(tmp2.path);
                      } else {
                        patternParts1 = [];
                      }
                      if (true !== tmp2.exact) {
                        let items1 = tmp3;
                        if (!tmp3) {
                          items1 = [];
                        }
                        let items2 = [];
                        HermesBuiltin.arraySpread(patternParts1, HermesBuiltin.arraySpread(items1, 0));
                        let tmp6 = items2;
                      } else if (patternParts1.length) {
                        tmp6 = patternParts1;
                      }
                      let fromEntriesResult;
                      if (tmp2.screens) {
                        if (typeof closure_2_6 === "function") {
                          patternParts1 = tmp6;
                          let _Object = Object;
                          let _Object2 = Object;
                          let entries = Object.entries(tmp14);
                          fromEntriesResult = Object.fromEntries(entries.map((item) => {
                            [tmp, tmp2] = item;
                            if (typeof tmp2 === "string") {
                              let patternParts = closure_2_0(closure_2_2[2]).getPatternParts(tmp2);
                              let obj = { parts: null, ownParts: null };
                              if (tmp3) {
                                let items = [];
                                HermesBuiltin.arraySpread(patternParts, HermesBuiltin.arraySpread(tmp3, 0));
                                obj.parts = items;
                                obj.ownParts = patternParts;
                              } else {
                                obj.parts = patternParts;
                                obj.ownParts = patternParts;
                              }
                              let obj3 = closure_2_0(closure_2_2[2]);
                            } else {
                              if (tmp2.exact) {
                                if (undefined === tmp2.path) {
                                  let _Error = Error;
                                  let error = new Error("A 'path' needs to be specified when specifying 'exact: true'. If you don't want this screen in the URL, specify it as empty string, e.g. `path: ''`.");
                                  throw error;
                                }
                              }
                              if (tmp2.path) {
                                obj = closure_2_0(closure_2_2[2]);
                                patternParts1 = obj.getPatternParts(tmp2.path);
                              } else {
                                patternParts1 = [];
                              }
                              if (true !== tmp2.exact) {
                                let items1 = tmp3;
                                if (!tmp3) {
                                  items1 = [];
                                }
                                let items2 = [];
                                HermesBuiltin.arraySpread(patternParts1, HermesBuiltin.arraySpread(items1, 0));
                                let tmp6 = items2;
                              } else if (patternParts1.length) {
                                tmp6 = patternParts1;
                              }
                              let fromEntriesResult;
                              if (tmp2.screens) {
                                if (typeof closure_2_6 === "function") {
                                  patternParts1 = tmp6;
                                  let _Object = Object;
                                  let _Object2 = Object;
                                  let entries = Object.entries(tmp14);
                                  fromEntriesResult = Object.fromEntries(entries.map((item) => {
                                    [tmp, tmp2] = item;
                                    if (typeof tmp2 === "string") {
                                      let patternParts = closure_2_0(closure_2_2[2]).getPatternParts(tmp2);
                                      let obj = { parts: null, ownParts: null };
                                      if (tmp3) {
                                        let items = [];
                                        HermesBuiltin.arraySpread(patternParts, HermesBuiltin.arraySpread(tmp3, 0));
                                        obj.parts = items;
                                        obj.ownParts = patternParts;
                                      } else {
                                        obj.parts = patternParts;
                                        obj.ownParts = patternParts;
                                      }
                                      let obj3 = closure_2_0(closure_2_2[2]);
                                    } else {
                                      if (tmp2.exact) {
                                        if (undefined === tmp2.path) {
                                          let _Error = Error;
                                          let error = new Error("A 'path' needs to be specified when specifying 'exact: true'. If you don't want this screen in the URL, specify it as empty string, e.g. `path: ''`.");
                                          throw error;
                                        }
                                      }
                                      if (tmp2.path) {
                                        obj = closure_2_0(closure_2_2[2]);
                                        patternParts1 = obj.getPatternParts(tmp2.path);
                                      } else {
                                        patternParts1 = [];
                                      }
                                      if (true !== tmp2.exact) {
                                        let items1 = tmp3;
                                        if (!tmp3) {
                                          items1 = [];
                                        }
                                        let items2 = [];
                                        HermesBuiltin.arraySpread(patternParts1, HermesBuiltin.arraySpread(items1, 0));
                                        let tmp6 = items2;
                                      } else if (patternParts1.length) {
                                        tmp6 = patternParts1;
                                      }
                                      let fromEntriesResult;
                                      if (tmp2.screens) {
                                        if (typeof closure_2_6 === "function") {
                                          patternParts1 = tmp6;
                                          let _Object = Object;
                                          let _Object2 = Object;
                                          let entries = Object.entries(tmp14);
                                          fromEntriesResult = Object.fromEntries(entries.map(() => { ... }));
                                        } else {
                                          throw new TypeError("Trying to call a non-function");
                                        }
                                      }
                                      obj = { parts: tmp6, ownParts: patternParts1, stringify: tmp2.stringify, screens: fromEntriesResult };
                                      let items3 = [tmp, obj];
                                      return items3;
                                    }
                                  }));
                                } else {
                                  throw new TypeError("Trying to call a non-function");
                                }
                              }
                              obj = { parts: tmp6, ownParts: patternParts1, stringify: tmp2.stringify, screens: fromEntriesResult };
                              let items3 = [tmp, obj];
                              return items3;
                            }
                          }));
                        } else {
                          throw new TypeError("Trying to call a non-function");
                        }
                      }
                      obj = { parts: tmp6, ownParts: patternParts1, stringify: tmp2.stringify, screens: fromEntriesResult };
                      let items3 = [tmp, obj];
                      return items3;
                    }
                  }));
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              }
              obj = { parts: tmp6, ownParts: patternParts1, stringify: tmp2.stringify, screens: fromEntriesResult };
              let items3 = [tmp, obj];
              return items3;
            }
          }));
          let result = obj2.set(screens.screens, fromEntriesResult);
          obj = fromEntriesResult;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      obj2 = screens;
    } else {
      obj = {};
    }
    const _Map = Map;
    const map = new Map();
    closure_129_0 = map;
    function getRouteState(tmp15Result, screens) {
      if (tmp15Result.state) {
        return tmp15Result.state;
      } else {
        let params = tmp15Result.params;
        if (params) {
          params = "screen" in tmp15Result.params;
        }
        if (params) {
          params = typeof tmp15Result.params.screen === "string";
        }
        if (params) {
          let tmp3;
          if (screens != null) {
            screens = screens.screens;
            if (screens != null) {
              tmp3 = screens[tmp15Result.params.screen];
            }
          }
          params = tmp3;
        }
        let params2 = tmp15Result.params;
        if (params2) {
          params2 = "state" in tmp15Result.params;
        }
        if (params2) {
          screens = undefined;
          if (screens != null) {
            screens = screens.screens;
          }
          params2 = screens;
        }
        value = undefined;
        if (tmp15Result.params) {
          let screens1;
          if (screens != null) {
            screens1 = screens.screens;
          }
          if (screens1) {
            if (params) {
              if (!set.has(tmp15Result)) {
                const result = obj.set(tmp15Result, _mod1538.getStateFromRouteParams(tmp15Result.params));
              }
              value = obj.get(tmp15Result);
            }
          }
        }
        return value;
      }
    }
    closure_129_1 = getRouteState;
    if (typeof map1 === "function") {
      if (typeof state.index === "number") {
        let tmp16 = state.routes[state.index];
      } else {
        tmp16 = state.routes[state.routes.length - 1];
      }
      let tmp17;
      if (obj != null) {
        tmp17 = obj[tmp16.name];
      }
      const routeState = getRouteState(tmp16, tmp17);
      let tmp19 = tmp16;
      if (routeState) {
        if (tmp17 != null) {
          screens = tmp17.screens;
        }
        if (typeof tmp15 === "function") {
          if (typeof routeState.index === "number") {
            let tmp15Result = routeState.routes[routeState.index];
          } else {
            tmp15Result = routeState.routes[routeState.routes.length - 1];
          }
          let tmp21;
          if (screens != null) {
            tmp21 = screens[tmp15Result.name];
          }
          const routeState1 = getRouteState(tmp15Result, tmp21);
          if (routeState1) {
            let screens2;
            if (tmp21 != null) {
              screens2 = tmp21.screens;
            }
            tmp15Result = tmp15(routeState1, screens2, getRouteState);
          }
          tmp19 = tmp15Result;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      closure_129_2 = tmp19;
      let str4 = "/";
      let str5 = "/";
      let tmp25 = state;
      if (state) {
        do {
          let num3 = 0;
          if (typeof tmp25.index === "number") {
            num3 = tmp25.index;
          }
          let index = num3;
          serializeParamValue = tmp25.routes[index];
          let _Map2 = Map;
          let tmp29 = new.target;
          let tmp30 = new.target;
          map1 = new Map();
          screens = obj;
          closure_6 = [];
          c7 = true;
          if (serializeParamValue.name in screens) {
            if (c7) {
              let tmp33Result = tmp33();
              while (serializeParamValue.name in screens) {
                if (!c7) {
                  break;
                }
              }
            }
          }
          routeState2 = getRouteState(serializeParamValue, screens[serializeParamValue.name]);
          if (undefined !== screens[serializeParamValue.name]) {
            let arr2 = require;
            let joined;
            if (require != null) {
              let mapped = arr2.map((segment) => {
                segment = segment.segment;
                if ("*" === segment) {
                  return user.name;
                } else if (tmp) {
                  value = map1.get(segment);
                  if (undefined !== value) {
                    const _Array = Array;
                    const _String = String;
                    const mapped = Array.from(String(value)).map((item) => {
                      let encodeURIComponentResult = item;
                      if (obj.test(item)) {
                        const _encodeURIComponent = encodeURIComponent;
                        encodeURIComponentResult = encodeURIComponent(item);
                      }
                      return encodeURIComponentResult;
                    });
                    let str = mapped.join("");
                    const arr = Array.from(String(value));
                  } else {
                    str = "";
                  }
                  return str;
                } else {
                  let _encodeURIComponent = encodeURIComponent;
                  return encodeURIComponent(segment);
                }
              });
              joined = mapped.join("/");
            }
            let sum = str4 + joined;
          } else {
            let _encodeURIComponent = encodeURIComponent;
            sum = str4 + encodeURIComponent(serializeParamValue.name);
          }
          let params = !importAll;
          if (!importAll) {
            params = tmp19.params;
          }
          if (params) {
            let _Object3 = Object;
            let _Object4 = Object;
            let entries1 = Object.entries(tmp19.params);
            importAll = Object.fromEntries(entries1.map((item) => {
              [tmp, arr] = item;
              const items = [tmp, ];
              if (typeof closure_3 === "function") {
                if (null === arr) {
                  items[1] = null;
                  return items;
                } else {
                  let _String = globalThis;
                  const _Array = Array;
                  if (Array.isArray(arr)) {
                    _String = _String.String;
                    let mapped = arr.map(_String);
                  } else {
                    const _String2 = String;
                    mapped = String(arr);
                  }
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }));
          }
          if (routeState2) {
            let text = `${tmp47}/`;
          } else {
            let tmp50 = importAll;
            text = sum;
            if (importAll) {
              for (const key10124 in tmp50) {
                if ("undefined" !== importAll[key10124]) {
                  continue;
                } else {
                  delete tmp[tmp2];
                  continue;
                }
                continue;
              }
              let obj4 = require("validateArrayFormatSeparator");
              let json = obj4.stringify(importAll, { sort: false });
              text = sum;
              if (json) {
                let _HermesInternal = HermesInternal;
                text = sum + "?" + json;
              }
            }
          }
          str4 = text;
          str5 = text;
          tmp25 = routeState2;
        } while (routeState2);
      }
      let path;
      if (screens != null) {
        path = screens.path;
      }
      let str6 = str5;
      if (path) {
        const _HermesInternal2 = HermesInternal;
        str6 = "" + screens.path + "/" + str5;
      }
      const replaced = str6.replace(/\/+/g, "/");
      let replaced1 = replaced;
      if (replaced.length > 1) {
        replaced1 = replaced.replace(/\/$/, "");
      }
      let combined = replaced1;
      if (!replaced1.startsWith("/")) {
        const _HermesInternal3 = HermesInternal;
        combined = "/" + replaced1;
      }
      return combined;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
};