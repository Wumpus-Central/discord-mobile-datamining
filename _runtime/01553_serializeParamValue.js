// === Module 1553: serializeParamValue ===

// Module 1553 (serializeParamValue)
const require = arg1;
const exports = arg3;
const dependencyMap = arg6;
function serializeParamValue(arg0) {

}
function getActiveRoute(index) {
  if (typeof index.index === "number") {
    let tmp = index.routes[index.index];
  } else {
    tmp = index.routes[index.routes.length - 1];
  }
  let tmp2;
  if (arg1 != null) {
    tmp2 = arg1[tmp.name];
  }
  const tmp3 = arg2(tmp, tmp2);
  if (tmp3) {
    let screens;
    if (tmp2 != null) {
      screens = tmp2.screens;
    }
    tmp = getActiveRoute(tmp3, screens, arg2);
    const tmp4 = getActiveRoute;
  }
  return tmp;
}
const weakMap = new WeakMap();
function createNormalizedConfigs(arg0, arg1) {

}
arg5.getPathFromState = function getPathFromState(index, screens) {
  let routeState2;
  if (null == index) {
    const _Error = Error;
    let _String = String;
    const _HermesInternal4 = HermesInternal;
    throw Error("Got '" + String(index) + "' for the navigation state. You must pass a valid state object.");
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
      obj = obj.get(screens1);
      if (!obj) {
        if (typeof closure_6 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        let _Object = Object;
        let _Object2 = Object;
        let entries = Object.entries(screens.screens);
        let fromEntriesResult = Object.fromEntries(entries.map((arg0) => {
          [tmp, tmp2] = arg0;
          if (typeof tmp2 === "string") {
            let patternParts = closure_1_0(closure_1_2[2]).getPatternParts(tmp2);
            let obj = { parts: null, ownParts: null };
            if (tmp3) {
              let items = [];
              HermesBuiltin.arraySpread(patternParts, HermesBuiltin.arraySpread(tmp3, 0));
              obj[0] = items;
              obj[1] = patternParts;
              let tmp23 = obj;
            } else {
              obj[0] = patternParts;
              obj[1] = patternParts;
              tmp23 = obj;
            }
            let obj3 = closure_1_0(closure_1_2[2]);
          } else {
            if (tmp2.exact) {
              if (undefined === tmp2.path) {
                let _Error = Error;
                let error = new Error("A 'path' needs to be specified when specifying 'exact: true'. If you don't want this screen in the URL, specify it as empty string, e.g. `path: ''`.");
                throw error;
              }
            }
            if (tmp2.path) {
              obj = closure_1_0(closure_1_2[2]);
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
              if (typeof closure_1_6 !== "function") {
                HermesBuiltin.throwTypeError();
              }
              patternParts1 = tmp6;
              let _Object = Object;
              let _Object2 = Object;
              let entries = Object.entries(tmp2.screens);
              fromEntriesResult = Object.fromEntries(entries.map((arg0) => {
                [tmp, tmp2] = arg0;
                if (typeof tmp2 === "string") {
                  let patternParts = closure_1_0(closure_1_2[2]).getPatternParts(tmp2);
                  let obj = { parts: null, ownParts: null };
                  if (tmp3) {
                    let items = [];
                    HermesBuiltin.arraySpread(patternParts, HermesBuiltin.arraySpread(tmp3, 0));
                    obj[0] = items;
                    obj[1] = patternParts;
                    let tmp23 = obj;
                  } else {
                    obj[0] = patternParts;
                    obj[1] = patternParts;
                    tmp23 = obj;
                  }
                  let obj3 = closure_1_0(closure_1_2[2]);
                } else {
                  if (tmp2.exact) {
                    if (undefined === tmp2.path) {
                      let _Error = Error;
                      let error = new Error("A 'path' needs to be specified when specifying 'exact: true'. If you don't want this screen in the URL, specify it as empty string, e.g. `path: ''`.");
                      throw error;
                    }
                  }
                  if (tmp2.path) {
                    obj = closure_1_0(closure_1_2[2]);
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
                    if (typeof closure_1_6 !== "function") {
                      HermesBuiltin.throwTypeError();
                    }
                    patternParts1 = tmp6;
                    let _Object = Object;
                    let _Object2 = Object;
                    let entries = Object.entries(tmp2.screens);
                    fromEntriesResult = Object.fromEntries(entries.map((arg0) => {
                      [tmp, tmp2] = arg0;
                      if (typeof tmp2 === "string") {
                        let patternParts = closure_1_0(closure_1_2[2]).getPatternParts(tmp2);
                        let obj = { parts: null, ownParts: null };
                        if (tmp3) {
                          let items = [];
                          HermesBuiltin.arraySpread(patternParts, HermesBuiltin.arraySpread(tmp3, 0));
                          obj[0] = items;
                          obj[1] = patternParts;
                          let tmp23 = obj;
                        } else {
                          obj[0] = patternParts;
                          obj[1] = patternParts;
                          tmp23 = obj;
                        }
                        let obj3 = closure_1_0(closure_1_2[2]);
                      } else {
                        if (tmp2.exact) {
                          if (undefined === tmp2.path) {
                            let _Error = Error;
                            let error = new Error("A 'path' needs to be specified when specifying 'exact: true'. If you don't want this screen in the URL, specify it as empty string, e.g. `path: ''`.");
                            throw error;
                          }
                        }
                        if (tmp2.path) {
                          obj = closure_1_0(closure_1_2[2]);
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
                          if (typeof closure_1_6 !== "function") {
                            HermesBuiltin.throwTypeError();
                          }
                          patternParts1 = tmp6;
                          let _Object = Object;
                          let _Object2 = Object;
                          let entries = Object.entries(tmp2.screens);
                          fromEntriesResult = Object.fromEntries(entries.map((arg0) => {
                            [tmp, tmp2] = arg0;
                            if (typeof tmp2 === "string") {
                              let patternParts = closure_1_0(closure_1_2[2]).getPatternParts(tmp2);
                              let obj = { parts: null, ownParts: null };
                              if (tmp3) {
                                let items = [];
                                HermesBuiltin.arraySpread(patternParts, HermesBuiltin.arraySpread(tmp3, 0));
                                obj[0] = items;
                                obj[1] = patternParts;
                                let tmp23 = obj;
                              } else {
                                obj[0] = patternParts;
                                obj[1] = patternParts;
                                tmp23 = obj;
                              }
                              let obj3 = closure_1_0(closure_1_2[2]);
                            } else {
                              if (tmp2.exact) {
                                if (undefined === tmp2.path) {
                                  let _Error = Error;
                                  let error = new Error("A 'path' needs to be specified when specifying 'exact: true'. If you don't want this screen in the URL, specify it as empty string, e.g. `path: ''`.");
                                  throw error;
                                }
                              }
                              if (tmp2.path) {
                                obj = closure_1_0(closure_1_2[2]);
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
                                if (typeof closure_1_6 !== "function") {
                                  HermesBuiltin.throwTypeError();
                                }
                                patternParts1 = tmp6;
                                let _Object = Object;
                                let _Object2 = Object;
                                let entries = Object.entries(tmp2.screens);
                                fromEntriesResult = Object.fromEntries(entries.map(() => { ... }));
                              }
                              obj = { parts: null, ownParts: null, stringify: null, screens: null };
                              obj[0] = tmp6;
                              obj[1] = patternParts1;
                              obj[2] = tmp2.stringify;
                              obj[3] = fromEntriesResult;
                              let items3 = [tmp, obj];
                              return items3;
                            }
                          }));
                        }
                        obj = { parts: null, ownParts: null, stringify: null, screens: null };
                        obj[0] = tmp6;
                        obj[1] = patternParts1;
                        obj[2] = tmp2.stringify;
                        obj[3] = fromEntriesResult;
                        let items3 = [tmp, obj];
                        return items3;
                      }
                    }));
                  }
                  obj = { parts: null, ownParts: null, stringify: null, screens: null };
                  obj[0] = tmp6;
                  obj[1] = patternParts1;
                  obj[2] = tmp2.stringify;
                  obj[3] = fromEntriesResult;
                  let items3 = [tmp, obj];
                  return items3;
                }
              }));
            }
            obj = { parts: null, ownParts: null, stringify: null, screens: null };
            obj[0] = tmp6;
            obj[1] = patternParts1;
            obj[2] = tmp2.stringify;
            obj[3] = fromEntriesResult;
            let items3 = [tmp, obj];
            return items3;
          }
        }));
        let result = obj2.set(screens.screens, fromEntriesResult);
        obj = fromEntriesResult;
      }
      obj2 = obj;
    } else {
      obj = {};
    }
    const _Map = Map;
    const map = new Map();
    function getRouteState(closure_3, screens) {
      if (closure_3.state) {
        return closure_3.state;
      } else {
        let params = closure_3.params;
        if (params) {
          params = "screen" in closure_3.params;
        }
        if (params) {
          params = typeof closure_3.params.screen === "string";
        }
        if (params) {
          let tmp3;
          if (screens != null) {
            screens = screens.screens;
            if (screens != null) {
              tmp3 = screens[closure_3.params.screen];
            }
          }
          params = tmp3;
        }
        let params2 = closure_3.params;
        if (params2) {
          params2 = "state" in closure_3.params;
        }
        if (params2) {
          screens = undefined;
          if (screens != null) {
            screens = screens.screens;
          }
          params2 = screens;
        }
        let value;
        if (closure_3.params) {
          let screens1;
          if (screens != null) {
            screens1 = screens.screens;
          }
          if (screens1) {
            if (params) {
              if (!map.has(closure_3)) {
                const result = obj.set(closure_3, map(num3[0]).getStateFromRouteParams(closure_3.params));
                const obj2 = map(num3[0]);
              }
              value = obj.get(closure_3);
            }
          }
        }
        return value;
      }
    }
    let _exports = getRouteState;
    if (typeof map1 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    if (typeof index.index === "number") {
      let tmp15 = index.routes[index.index];
    } else {
      tmp15 = index.routes[index.routes.length - 1];
    }
    let tmp16;
    if (obj != null) {
      tmp16 = obj[tmp15.name];
    }
    const routeState = getRouteState(tmp15, tmp16);
    let tmp18 = tmp15;
    if (routeState) {
      let screens2;
      if (tmp16 != null) {
        screens2 = tmp16.screens;
      }
      if (typeof tmp14 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      if (typeof routeState.index === "number") {
        let tmp14Result = routeState.routes[routeState.index];
      } else {
        tmp14Result = routeState.routes[routeState.routes.length - 1];
      }
      let tmp21;
      if (screens2 != null) {
        tmp21 = screens2[tmp14Result.name];
      }
      const routeState1 = getRouteState(tmp14Result, tmp21);
      if (routeState1) {
        let screens3;
        if (tmp21 != null) {
          screens3 = tmp21.screens;
        }
        tmp14Result = tmp14(routeState1, screens3, getRouteState);
      }
      tmp18 = tmp14Result;
    }
    let num3 = tmp18;
    let str4 = "/";
    let str5 = "/";
    let tmp25 = index;
    if (index) {
      do {
        let tmp26 = tmp25;
        let tmp27 = str4;
        num3 = 0;
        if (typeof tmp25.index === "number") {
          num3 = tmp25.index;
        }
        let tmp28 = num3;
        serializeParamValue = tmp25.routes[num3];
        let _Map2 = Map;
        let tmp29 = new.target;
        let tmp30 = new.target;
        map1 = new Map();
        let tmp32 = map1;
        closure_6 = [];
        c7 = true;
        let tmp34 = serializeParamValue;
        let tmp35 = obj;
        if (serializeParamValue.name in obj) {
          let tmp36 = c7;
          if (c7) {
            let tmp33Result = tmp33();
            let tmp38 = serializeParamValue;
            let tmp39 = obj;
            while (serializeParamValue.name in obj) {
              let tmp40 = c7;
              if (!c7) {
                break;
              }
            }
          }
        }
        let tmp41 = serializeParamValue;
        let tmp42 = obj;
        routeState2 = getRouteState(serializeParamValue, obj[serializeParamValue.name]);
        let tmp44 = obj;
        let tmp45 = serializeParamValue;
        if (undefined !== obj[serializeParamValue.name]) {
          let arr2 = map;
          let joined;
          if (map != null) {
            let mapped = arr2.map((segment) => {
              segment = segment.segment;
              if ("*" === segment) {
                return user.name;
              } else if (tmp) {
                const value = map1.get(segment);
                if (undefined !== value) {
                  const _Array = Array;
                  const _String = String;
                  const mapped = Array.from(String(value)).map((arg0) => {
                    let encodeURIComponentResult = arg0;
                    if (obj.test(arg0)) {
                      const _encodeURIComponent = encodeURIComponent;
                      encodeURIComponentResult = encodeURIComponent(arg0);
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
          let tmp46 = serializeParamValue;
          sum = str4 + encodeURIComponent(serializeParamValue.name);
        }
        let tmp49 = _exports;
        let params = !_exports;
        if (!_exports) {
          params = tmp18.params;
        }
        if (params) {
          let _Object3 = Object;
          let _Object4 = Object;
          let entries1 = Object.entries(tmp18.params);
          _exports = Object.fromEntries(entries1.map((arg0) => {
            [tmp, arr] = arg0;
            const items = [tmp, ];
            if (typeof closure_3 !== "function") {
              HermesBuiltin.throwTypeError();
            }
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
          }));
        }
        if (routeState2) {
          let text = `${tmp47}/`;
        } else {
          let tmp50 = _exports;
          text = sum;
          if (_exports) {
            let tmp52 = tmp50;
            for (const key10124 in tmp50) {
              let tmp66 = key10124;
              let tmp67 = _exports;
              if ("undefined" !== _exports[key10124]) {
                continue;
              } else {
                let tmp53 = _exports;
                delete tmp[tmp2];
                continue;
              }
              continue;
            }
            let tmp54 = _exports;
            let tmp55 = num3;
            let obj4 = _exports(num3[1]);
            let tmp56 = _exports;
            let json = obj4.stringify(_exports, { sort: false });
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
  }
};