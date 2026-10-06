// === Module 1544: ? ===

// Module 1544
import _mod1545 from "module_1545" /* 1545 */;
import extractAll from "extract" /* 1546 */;
import _slicedToArray from "_slicedToArray" /* 1551 */;

let importAll, map, map1, segment, set;

function serializeParamValue(arg0) {

}
function getActiveRoute(index, screens, fn) {
  let tmp;
  if (typeof index.index === "number") {
    tmp = index.routes[index.index];
  } else {
    tmp = index.routes[index.routes.length - 1];
  }
  let tmp2;
  if (screens != null) {
    tmp2 = screens[tmp.name];
  }
  const tmp3 = fn(tmp, tmp2);
  if (tmp3) {
    screens = undefined;
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
  const f84362 = function(item) {
    let obj4;
    let tmp2;
    let tmp3;
    [tmp2, tmp3] = item;
    if (typeof tmp3 === "string") {
      let tmp24;
      const obj3 = _slicedToArray;
      const patternParts = obj3.getPatternParts(tmp3);
      const obj2 = { parts: null, ownParts: null };
      if (closure_1_0) {
        const items = [];
        HermesBuiltin.arraySpread(items, patternParts, HermesBuiltin.arraySpread(items, closure_1_0, 0));
        obj2.parts = items;
        obj2.ownParts = patternParts;
        tmp24 = obj2;
      } else {
        obj2.parts = patternParts;
        obj2.ownParts = patternParts;
        tmp24 = obj2;
      }
      obj4 = tmp24;
    } else {
      let patternParts1;
      let tmp7;
      if (tmp3.exact) {
        if (undefined === tmp3.path) {
          const _Error = Error;
          const self = this;
          const self2 = this;
          const error = new Error("A 'path' needs to be specified when specifying 'exact: true'. If you don't want this screen in the URL, specify it as empty string, e.g. `path: ''`.");
          throw error;
        }
      }
      if (tmp3.path) {
        const obj = _slicedToArray;
        patternParts1 = obj.getPatternParts(tmp3.path);
      } else {
        patternParts1 = [];
      }
      if (true !== tmp3.exact) {
        const items1 = [];
        const tmp8 = closure_1_0 || [];
        HermesBuiltin.arraySpread(items1, patternParts1, HermesBuiltin.arraySpread(items1, tmp8, 0));
        tmp7 = items1;
      } else if (patternParts1.length) {
        tmp7 = patternParts1;
      }
      let fromEntriesResult;
      if (tmp3.screens) {
        if (typeof createNormalizedConfigs === "function") {
          patternParts1 = tmp7;
          const _Object = Object;
          const _Object2 = Object;
          const entries = Object.entries(tmp16);
          fromEntriesResult = fromEntries(entries.map(f84362));
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      obj4 = { parts: tmp7, ownParts: patternParts1, stringify: tmp3.stringify, screens: fromEntriesResult };
    }
    const items2 = [tmp2, obj4];
    return items2;
  };
  if (null == state) {
    let _Error = Error;
    let _String = String;
    const _HermesInternal4 = HermesInternal;
    throw Error("Got '" + String(state) + "' for the navigation state. You must pass a valid state object.");
  } else {
    let obj;
    let screens1;
    if (screens != null) {
      screens1 = screens.screens;
    }
    if (screens1) {
      let screens2;
      const get = weakMap.get;
      if (screens != null) {
        screens2 = screens.screens;
      }
      obj = get(screens2);
      if (!obj) {
        if (typeof createNormalizedConfigs === "function") {
          let _Object = Object;
          let _Object2 = Object;
          let entries = Object.entries(tmp4);
          let fromEntriesResult = fromEntries(entries.map(f84362));
          let result = weakMap.set(screens.screens, fromEntriesResult);
          obj = fromEntriesResult;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
    } else {
      obj = {};
    }
    let tmp8 = globalThis;
    const _Map = Map;
    let self = this;
    let self2 = this;
    map = new Map();
    function getRouteState(tmp11Result, screens) {
      if (tmp11Result.state) {
        return tmp11Result.state;
      } else {
        let params = tmp11Result.params && "screen" in tmp11Result.params && typeof tmp11Result.params.screen === "string";
        if (params) {
          let tmp3;
          if (screens != null) {
            screens = screens.screens;
            if (screens != null) {
              tmp3 = screens[tmp11Result.params.screen];
            }
          }
          params = tmp3;
        }
        let params2 = tmp11Result.params && "state" in tmp11Result.params;
        if (params2) {
          let screens1;
          if (screens != null) {
            screens1 = screens.screens;
          }
          params2 = screens1;
        }
        let value;
        if (tmp11Result.params) {
          let screens2;
          if (screens != null) {
            screens2 = screens.screens;
          }
          if (screens2) {
            if (params) {
              if (!map.has(tmp11Result)) {
                set = map.set;
                const obj2 = _mod1545;
                const result = set(tmp11Result, obj2.getStateFromRouteParams(tmp11Result.params));
              }
              value = map.get(tmp11Result);
            }
          }
        }
        return value;
      }
    }
    if (typeof getActiveRoute === "function") {
      let tmp12;
      if (typeof state.index === "number") {
        tmp12 = state.routes[state.index];
      } else {
        tmp12 = state.routes[state.routes.length - 1];
      }
      let tmp13;
      if (obj != null) {
        tmp13 = obj[tmp12.name];
      }
      const routeState = getRouteState(tmp12, tmp13);
      let tmp15 = tmp12;
      if (routeState) {
        if (tmp13 != null) {
          screens = tmp13.screens;
        }
        if (typeof getActiveRoute === "function") {
          let tmp11Result;
          if (typeof routeState.index === "number") {
            tmp11Result = routeState.routes[routeState.index];
          } else {
            tmp11Result = routeState.routes[routeState.routes.length - 1];
          }
          let tmp17;
          if (screens != null) {
            tmp17 = screens[tmp11Result.name];
          }
          const routeState1 = getRouteState(tmp11Result, tmp17);
          if (routeState1) {
            let screens3;
            if (tmp17 != null) {
              screens3 = tmp17.screens;
            }
            tmp11Result = getActiveRoute(routeState1, screens3, getRouteState);
          }
          tmp15 = tmp11Result;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      let closure_2 = tmp15;
      let str = "/";
      let str4 = "/";
      let str5 = "/";
      let tmp21 = state;
      while (tmp21) {
        let sum;
        let text;
        let tmp23 = str4;
        let num3 = 0;
        if (typeof tmp21.index === "number") {
          num3 = tmp21.index;
        }
        let index = num3;
        let tmp24 = index;
        serializeParamValue = tmp21.routes[index];
        let _Map2 = Map;
        let self3 = this;
        let self4 = this;
        map1 = new Map();
        screens = obj;
        let closure_6 = [];
        let c7 = true;
        if (serializeParamValue.name in screens) {
          let tmp30 = c7;
          if (tmp30) {
            let tmp27Result = tmp27();
            let tmp32 = serializeParamValue;
            while (serializeParamValue.name in screens) {
              let tmp34 = c7;
              if (!tmp34) {
                break;
              }
            }
          }
        }
        let routeState2 = getRouteState(serializeParamValue, screens[serializeParamValue.name]);
        if (undefined !== screens[serializeParamValue.name]) {
          let joined;
          if (closure_130_0 != null) {
            let mapped = closure_130_0.map((segment) => {
              segment = segment.segment;
              if ("*" === segment) {
                return user.name;
              } else if (tmp) {
                let str;
                const value = map1.get(segment);
                if (undefined !== value) {
                  const _Array = Array;
                  const _String = String;
                  const arr = Array.from(String(value));
                  const mapped = arr.map((item) => {
                    let encodeURIComponentResult = item;
                    const obj = /[^A-Za-z0-9\-._~!$&'()*+,;=:@]/g;
                    if (obj.test(item)) {
                      const _encodeURIComponent = encodeURIComponent;
                      encodeURIComponentResult = encodeURIComponent(item);
                    }
                    return encodeURIComponentResult;
                  });
                  str = mapped.join("");
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
          sum = str4 + joined;
        } else {
          let _encodeURIComponent = encodeURIComponent;
          sum = str4 + encodeURIComponent(serializeParamValue.name);
        }
        let tmp44 = !importAll && tmp15.params;
        if (tmp44) {
          let _Object3 = Object;
          let _Object4 = Object;
          let fromEntries2 = Object.fromEntries;
          let entries1 = Object.entries(tmp15.params);
          importAll = fromEntries2(entries1.map((item) => {
            let arr;
            let tmp;
            [tmp, arr] = item;
            const items = [tmp, ];
            if (typeof serializeParamValue === "function") {
              let tmp2 = null;
              if (null !== arr) {
                let mapped;
                const _Array = Array;
                if (Array.isArray(arr)) {
                  const _String2 = String;
                  mapped = arr.map(String);
                } else {
                  const _String = String;
                  mapped = String(arr);
                }
                tmp2 = mapped;
              }
              items[1] = tmp2;
              return items;
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }));
        }
        if (routeState2) {
          text = `${tmp41}/`;
        } else {
          let tmp45 = importAll;
          text = sum;
          if (importAll) {
            for (const key10124 in tmp45) {
              if ("undefined" !== importAll[key10124]) {
                continue;
              } else {
                delete importAll[tmp57];
                continue;
              }
              continue;
            }
            let obj4 = extractAll;
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
        tmp21 = routeState2;
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