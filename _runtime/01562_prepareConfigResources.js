// _runtime/01562_prepareConfigResources.js
import findFocusedRoute from "01527_findFocusedRoute.js";
import validateArrayFormatSeparatorAll from "01556_validateArrayFormatSeparator.js";
import arrayStartsWith from "01565_arrayStartsWith.js";
import _slicedToArray from "metro/00032__slicedToArray.js";

require = arg1;
function prepareConfigResources(screens) {
  const initialRoutes = (function getInitialRoutes(initialRouteName) {
    initialRouteName = undefined;
    if (initialRouteName != null) {
      initialRouteName = initialRouteName.initialRouteName;
    }
    const items = [];
    if (initialRouteName) {
      const obj = { initialRouteName: null, parentScreens: null };
      obj[0] = initialRouteName.initialRouteName;
      obj[1] = [];
      items.push(obj);
    }
    return items;
  })(screens);
  screens = undefined;
  if (screens != null) {
    screens = screens.screens;
  }
  const configs = (function getSortedNormalizedConfigs(initialRoutes, screens) {
    closure_0 = initialRoutes;
    let obj = screens;
    if (screens === undefined) {
      obj = {};
    }
    const items = [];
    const keys = Object.keys(obj);
    const items1 = [...keys.map((item, index) => closure_1_13(item, obj, closure_0, [], [], []))];
    const mapped = items.concat.apply(items1).map((item, index) => {
      obj = {};
      const merged = Object.assign(item);
      obj.order = index;
      return obj;
    });
    return mapped.sort((segments, segments2) => {
      if (obj.isArrayEqual(segments.segments, segments2.segments)) {
        if (segments.routeNames.length <= segments2.routeNames.length) {
          if (segments2.routeNames.length <= segments.routeNames.length) {
            let num10 = segments.routeNames.length - segments2.routeNames.length || segments.order - segments2.order;
          } else {
            initialRoutes(table[3]);
            num10 = 1;
          }
          let num9 = num10;
        } else {
          initialRoutes(table[3]);
          num9 = -1;
        }
        return num9;
      } else {
        if (tmpResult1.arrayStartsWith(segments.segments, segments2.segments)) {
          return -1;
        } else {
          if (tmpResult2.arrayStartsWith(segments2.segments, segments.segments)) {
            return 1;
          } else {
            const _Math = Math;
            let num = 0;
            if (0 < Math.max(segments.segments.length, segments2.segments.length)) {
              while (null != segments.segments[num]) {
                if (null == segments2.segments[num]) {
                  return -1;
                } else {
                  let obj8 = segments.segments[num];
                  let startsWithResult = obj8.startsWith(":");
                  let obj9 = segments2.segments[num];
                  let startsWithResult1 = obj9.startsWith(":");
                  let hasItem = startsWithResult;
                  if (startsWithResult) {
                    let obj4 = segments.segments[num];
                    hasItem = obj4.includes("(");
                  }
                  let hasItem1 = startsWithResult1;
                  if (startsWithResult1) {
                    let obj5 = segments2.segments[num];
                    hasItem1 = obj5.includes("(");
                  }
                  let tmp8 = "*" === segments.segments[num];
                  let tmp9 = "*" === segments2.segments[num];
                  if (!tmp8) {
                    if (!hasItem) {
                      if (tmp8) {
                        if (!tmp9) {
                          return 1;
                        }
                      }
                      if (tmp9) {
                        if (!tmp8) {
                          return -1;
                        }
                      }
                      if (startsWithResult) {
                        if (!startsWithResult1) {
                          return 1;
                        }
                      }
                      if (startsWithResult1) {
                        if (!startsWithResult) {
                          return -1;
                        }
                      }
                      if (hasItem) {
                        if (!hasItem1) {
                          return -1;
                        }
                      }
                      if (hasItem1) {
                        if (!hasItem) {
                          return 1;
                        }
                      }
                    }
                  }
                  num = num + 1;
                  let _Math2 = Math;
                }
              }
              return 1;
            }
            return segments.segments.length - segments2.segments.length;
          }
          tmpResult2 = initialRoutes(table[3]);
        }
        tmpResult1 = initialRoutes(table[3]);
      }
      obj = initialRoutes(table[2]);
    });
  })(initialRoutes, screens);
  let replaced;
  if (screens != null) {
    if (screens.path != null) {
      replaced = str.replace(/^\//, "");
    }
  }
  let prefixRegex;
  if (replaced) {
    let str4 = replaced;
    if (!replaced.endsWith("/")) {
      const _HermesInternal = HermesInternal;
      str4 = "" + replaced + "/";
    }
    const parts = str4.split("/");
    let mapped = parts.map(getStaticSegmentPattern);
    const _RegExp = RegExp;
    const _HermesInternal2 = HermesInternal;
    prefixRegex = new RegExp("^" + mapped.join("/"));
  }
  const configsByScreen = {};
  const map = new Map();
  const iter = configs[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp12 = nextResult;
    let screen = nextResult.screen;
    let arr2 = configsByScreen[screen];
    if (arr2 == null) {
      let items = [];
      configsByScreen[screen] = items;
      arr2 = items;
    }
    let arr = arr2.push(tmp12);
    let segments = tmp12.segments;
    let joined = segments.join("/");
    let tmp17 = checkForDuplicatedConfigs(map.get(joined), tmp12, joined);
    let result = map.set(joined, tmp12);
    continue;
  }
  return { initialRoutes, configs, configsByScreen, prefixRegex };
}
function checkForDuplicatedConfigs(map, routeNames2, joined) {
  if (map) {
    const routeNames = map.routeNames;
    const routeNames1 = routeNames2.routeNames;
    if (routeNames.length > routeNames1.length) {
      let arrayStartsWithResult = arrayStartsWith.arrayStartsWith(routeNames, routeNames1);
    } else {
      arrayStartsWithResult = arrayStartsWith.arrayStartsWith(routeNames1, routeNames);
    }
    if (!arrayStartsWithResult) {
      const _Error = Error;
      joined = routeNames.join(" > ");
      const _HermesInternal = HermesInternal;
      error = new Error("Found conflicting screens with the same pattern. The pattern '" + joined + "' resolves to both '" + joined + "' and '" + routeNames1.join(" > ") + "'. Patterns must be unique and cannot resolve to more than one screen.");
      throw error;
    }
  }
}
let closure_5 = ["screen", "params", "initial", "path", "merge", "pop"];
function getStaticSegmentPattern(arg0) {
  return Array.from(arg0, (str) => {
    let encodeURIComponentResult = encodeURIComponent(str);
    if (encodeURIComponentResult === str) {
      str = str.charCodeAt(0);
      str = str.toString(16);
      const _HermesInternal = HermesInternal;
      encodeURIComponentResult = "%" + str.padStart(2, "0").toUpperCase();
      const str3 = str.padStart(2, "0");
    }
    return "(?:" + callback(1563)(str) + "|" + callback(1563)(encodeURIComponentResult) + ")";
  }).join("");
}
function getExplicitParamNames(parse) {
  let obj = parse;
  if (parse == null) {
    obj = {};
  }
  const entries = Object.entries(obj);
  let set;
  const mapped = entries.map((item, index) => {
    [tmp] = item;
    return tmp;
  });
  if (mapped.length) {
    const _Set = Set;
    set = new Set(mapped);
  }
  return set;
}
const weakMap = new WeakMap();
function matchAgainstConfigs(arg0, arg1, arg2, configs, configsByScreen) {
  closure_0 = arg1;
  closure_1 = arg2;
  closure_2 = configsByScreen;
  closure_5 = arg0;
  function _loop(iter) {
    closure_0 = iter;
    if (iter.regex) {
      if (canMatchFirstSegment(iter.segments[0], closure_0, closure_1)) {
        const match = closure_5.match(iter.regex);
        if (match) {
          const items = [];
          let flag = false;
          const routeNames = iter.routeNames;
          iter = routeNames[Symbol.iterator]();
          const nextResult = iter.next();
          while (iter !== undefined) {
            let tmp12 = nextResult;
            let arr1 = table[nextResult];
            let found;
            if (arr1 != null) {
              found = arr1.find((item, index) => iter(items[3]).arrayStartsWith(iter.segments, item.segments));
            }
            let tmp15 = found;
            let fromEntriesResult;
            if (found) {
              if (match.groups) {
                let items1 = [];
                let params = tmp15.params;
                for (const item10051 of params) {
                  if (item10051.screen === tmp12) {
                    let _HermesInternal = HermesInternal;
                    let tmp55 = match.groups["param_" + item10051.index];
                    let tmp56 = tmp55;
                    if (null != tmp55) {
                      let _decodeURIComponent = decodeURIComponent;
                      let decodeURIComponentResult = decodeURIComponent(tmp56);
                      if (item10051.regex) {
                        if (tmp56 !== decodeURIComponentResult) {
                          let regex = item10051.regex;
                          if (!regex.test(decodeURIComponentResult)) {
                            flag = true;
                            obj.return();
                            break;
                          }
                        }
                      }
                      let parse = tmp15.parse;
                      let tmp34;
                      if (parse != null) {
                        tmp34 = parse[item10051.name];
                      }
                      let items2 = [item10051.name, ];
                      if (tmp34) {
                        let tmp36Result = tmp36(decodeURIComponentResult);
                      } else {
                        tmp36Result = decodeURIComponentResult;
                      }
                      items2[1] = tmp36Result;
                      items2 = items1.push(items2);
                    } else {
                      let items3 = [item10051.name, undefined];
                      let arr = items1.push(items3);
                    }
                  }
                  continue;
                }
                while (true) {
                  if (flag) {
                    iter.return();
                    break label0;
                  } else if (items1.length) {
                    let _Object = Object;
                    fromEntriesResult = Object.fromEntries(items1);
                  }
                  break label0;
                }
              }
              let num3 = 0;
              if (!flag) {
                closure_4 = iter;
                closure_5 = closure_5.replace(match[0], "");
                num3 = 1;
              }
              return num3;
            }
            if (fromEntriesResult) {
              let _Object2 = Object;
              if (Object.keys(fromEntriesResult).length) {
                let obj = { name: null, params: null };
                obj[0] = tmp12;
                obj[1] = fromEntriesResult;
                arr = items.push(obj);
                continue;
              }
            }
            obj = { name: null };
            obj[0] = tmp12;
            arr1 = items.push(obj);
          }
        }
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  }
  let iter = configs[Symbol.iterator]();
  while (iter !== undefined) {
    let _loopResult = _loop(iter.next());
    if (0 !== _loopResult) {
      if (1 === tmp2) {
        iter.return();
        break;
      }
      let obj = { routes: null, remainingPath: null, config: null };
      obj[0] = dependencyMap;
      obj[1] = closure_5;
      obj[2] = closure_4;
      return obj;
    }
    continue;
  }
}
function canMatchFirstSegment(str, closure_0, closure_1) {
  let tmp = undefined === closure_0;
  if (!tmp) {
    let tmp3 = undefined !== str;
    if (tmp3) {
      let tmp4 = "*" !== str;
      if (tmp4) {
        tmp4 = !str.startsWith(":");
      }
      let tmp5 = !tmp4;
      if (tmp4) {
        let tmp6 = str === closure_0;
        if (!tmp6) {
          tmp6 = str === closure_1;
        }
        tmp5 = tmp6;
      }
      tmp3 = tmp5;
    }
    tmp = tmp3;
  }
  return tmp;
}
function createNormalizedConfigs(screen, arg1, arr, arr2, arr3, arr4) {
  closure_0 = arr;
  closure_1 = arr2;
  closure_2 = arr3;
  closure_3 = arr4;
  let items = [];
  arr4.push(screen);
  arr = arr3.push(screen);
  if (typeof arg1[screen] === "string") {
    let obj = { screen: null, path: null };
    obj[0] = screen;
    obj[1] = tmp3;
    arr2.push(obj);
    let items1 = [];
    HermesBuiltin.arraySpread(arr4, 0);
    let items2 = [];
    HermesBuiltin.arraySpread(arr2, 0);
    arr2 = items.push(createConfigItem(screen, items1, items2));
  } else if (typeof tmp3 === "object") {
    const screens = tmp3.screens;
    if (typeof tmp3.path === "string") {
      if (tmp3.exact) {
        if (null == tmp3.path) {
          const _Error2 = Error;
          const _HermesInternal2 = HermesInternal;
          error = new Error("Screen '" + screen + "' doesn't specify a 'path'. A 'path' needs to be specified when specifying 'exact: true'. If you don't want this screen in the URL, specify it as empty string, e.g. `path: ''`.");
          throw error;
        }
      }
      const items3 = [];
      if (tmp3.alias) {
        let alias = tmp3.alias;
        for (const item10023 of alias) {
          if (typeof item10023 === "string") {
            let items4 = [];
            let arraySpreadResult1 = HermesBuiltin.arraySpread(arg5, 0);
            let items5 = [];
            obj = { screen: null, path: null };
            obj[0] = arg0;
            obj[1] = item10023;
            items5[HermesBuiltin.arraySpread(arg3, 0)] = obj;
            arr3 = items3.push(createConfigItem(arg0, items4, items5, tmp3.parse, tmp5));
          } else if (typeof item10023 === "object") {
            let items6 = [];
            let arraySpreadResult2 = HermesBuiltin.arraySpread(arg5, 0);
            obj = { screen: null, path: null };
            let items7 = [];
            if (item10023.exact) {
              obj[0] = arg0;
              obj[1] = item10023.path;
              items7[0] = obj;
              let tmp12 = items7;
            } else {
              obj[0] = arg0;
              obj[1] = item10023.path;
              items7[HermesBuiltin.arraySpread(arg3, 0)] = obj;
              tmp12 = items7;
            }
            arr4 = items3.push(createConfigItem(arg0, items6, tmp12, item10023.parse, tmp5));
          }
          continue;
        }
      }
      if (tmp3.exact) {
        arr2.length = 0;
      }
      obj1 = { screen: null, path: null };
      obj1[0] = screen;
      obj1[1] = tmp3.path;
      arr2.push(obj1);
      const items8 = [];
      HermesBuiltin.arraySpread(arr4, 0);
      const items9 = [];
      HermesBuiltin.arraySpread(arr2, 0);
      items.push(createConfigItem(screen, items8, items9, tmp3.parse, !tmp76));
      const push = items.push;
      const items10 = [];
      HermesBuiltin.arraySpread(items3, 0);
      HermesBuiltin.apply(items10, items);
    }
    if (typeof tmp3 !== "string") {
      if (typeof tmp3.path !== "string") {
        alias = tmp3.alias;
        let length;
        if (alias != null) {
          length = alias.length;
        }
        if (length) {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const error1 = new Error("Screen '" + screen + "' doesn't specify a 'path'. A 'path' needs to be specified in order to use 'alias'.");
          throw error1;
        }
      }
    }
    if (screens) {
      if (tmp3.initialRouteName) {
        const obj2 = { initialRouteName: null, parentScreens: null };
        obj2[0] = tmp3.initialRouteName;
        obj2[1] = arr3;
        arr.push(obj2);
      }
      const _Object = Object;
      const keys = Object.keys(screens);
      const item = keys.forEach((item, index) => {
        items = [...closure_1];
        const items1 = [...closure_2];
        const items2 = [...closure_1_13(item, screens, closure_0, items, items1, closure_3)];
        items.push.apply(items2);
      });
    }
  }
  arr4.pop();
  return items;
}
function createConfigItem(screen, items1, items2, parse, arg4) {
  let flag = arg4;
  if (arg4 === undefined) {
    flag = false;
  }
  let path;
  let items = [];
  function _loop2(screen) {
    items = screen;
    const patternParts = items(dependencyMap[4]).getPatternParts(path);
    items = [
      ...patternParts.map((item, index) => {
        const obj = {};
        const merged = Object.assign(item);
        obj.screen = closure_0;
        return obj;
      })
    ];
    items.push.apply(items);
  }
  const iter = items2[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    path = nextResult.path;
    let _loop2Result = _loop2(nextResult.screen);
    continue;
  }
  let regExp;
  if (items.length) {
    const _RegExp = RegExp;
    const mapped = items.map((item, index) => {
      if (item.param) {
        let str5 = "[^/]+";
        if (item.regex) {
          const _HermesInternal2 = HermesInternal;
          str5 = "(?:" + item.regex + ")|(?=[^/]*%[0-9A-F]{2})[^/]+";
        }
        let str8 = "";
        if (item.optional) {
          str8 = "?";
        }
        const _HermesInternal3 = HermesInternal;
        let str = "(((?<param_" + index + ">" + str5 + ")\\/)" + str8 + ")";
      } else {
        str = ".*\\/";
        if ("*" !== item.segment) {
          if (typeof closure_6 !== "function") {
            HermesBuiltin.throwTypeError();
          }
          const _Array = Array;
          let _HermesInternal = HermesInternal;
          str = "" + Array.from(item.segment, (str) => {
            let encodeURIComponentResult = encodeURIComponent(str);
            if (encodeURIComponentResult === str) {
              str = str.charCodeAt(0);
              str = str.toString(16);
              const _HermesInternal = HermesInternal;
              encodeURIComponentResult = "%" + str.padStart(2, "0").toUpperCase();
              const str3 = str.padStart(2, "0");
            }
            return "(?:" + callback(1563)(str) + "|" + callback(1563)(encodeURIComponentResult) + ")";
          }).join("") + "\\/";
          const arr = Array.from(item.segment, (str) => {
            let encodeURIComponentResult = encodeURIComponent(str);
            if (encodeURIComponentResult === str) {
              str = str.charCodeAt(0);
              str = str.toString(16);
              const _HermesInternal = HermesInternal;
              encodeURIComponentResult = "%" + str.padStart(2, "0").toUpperCase();
              const str3 = str.padStart(2, "0");
            }
            return "(?:" + callback(1563)(str) + "|" + callback(1563)(encodeURIComponentResult) + ")";
          });
        }
      }
      return str;
    });
    let _HermesInternal = HermesInternal;
    regExp = new RegExp("^(" + mapped.join("") + ")$");
  }
  items1 = [];
  const mapped1 = items.map((item, index) => item.segment);
  const set = new Set();
  const entries = items.entries();
  while (tmp9 !== undefined) {
    let tmp12 = callback(tmp10, 2);
    [tmp13, tmp14] = tmp12;
    if (tmp14.param) {
      let obj = { index: null, screen: null, name: null, regex: null };
      obj[0] = tmp13;
      ({ screen: obj3[1], param: obj3[2] } = tmp14);
      let regExp1;
      if (tmp14.regex) {
        let _RegExp2 = RegExp;
        let _HermesInternal2 = HermesInternal;
        regExp1 = new RegExp("^(?:" + tmp14.regex + ")$");
      }
      obj[3] = regExp1;
      let arr = items1.push(obj);
      if (tmp14.screen === screen) {
        let addResult = set.add(tmp14.param);
      }
    }
    continue;
  }
  obj = { screen, regex: regExp, segments: mapped1, params: items1, routeNames: items1, parse, explicitParamNames: getExplicitParamNames(parse), pathParamNames: set, hasNestedScreens: flag };
  return obj;
}
function findInitialRoute(name, items, initialRoutes) {
  const iter = initialRoutes[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if (items.length === nextResult.parentScreens.length) {
      let flag = true;
      let num = 0;
      if (0 < items.length) {
        let obj = items[num];
        while (0 === obj.localeCompare(tmp2.parentScreens[num])) {
          let sum = num + 1;
          num = sum;
        }
        flag = false;
      }
      if (flag) {
        let initialRouteName;
        if (name !== tmp2.initialRouteName) {
          initialRouteName = nextResult.initialRouteName;
        }
        iter.return();
        return initialRouteName;
      }
    }
    continue;
  }
}
function createStateObject(arg0, arg1, arg2) {

}
function createNestedStateObject(str, items, initialRoutes, config) {
  let arr = items.shift();
  items = [];
  let items1 = findInitialRoute(arr.name, items, initialRoutes);
  arr = items.push(arr.name);
  if (typeof createStateObject !== "function") {
    HermesBuiltin.throwTypeError();
  }
  if (0 === items.length) {
    if (items1) {
      let obj = { name: null };
      obj[0] = items1;
      items1 = [obj, arr];
      obj[1] = items1;
      obj1 = obj;
    } else {
      obj1 = { routes: null };
      const items2 = [arr];
      obj1[0] = items2;
    }
  } else {
    if (items1) {
      const obj2 = { index: 1, routes: null };
      const obj3 = { name: null };
      obj3[0] = items1;
      const items3 = [obj3, ];
      const obj4 = {};
      const merged = Object.assign(arr);
      const obj5 = { routes: null };
      obj5[0] = [];
      obj4.state = obj5;
      items3[1] = obj4;
      obj2[1] = items3;
      obj = obj2;
    } else {
      obj = { routes: null };
      const obj6 = {};
      const merged1 = Object.assign(arr);
      const obj7 = { routes: null };
      obj7[0] = [];
      obj6.state = obj7;
      const items4 = [obj6];
      obj[0] = items4;
    }
    if (items.length > 0) {
      let arr1 = items.shift();
      let tmp23 = obj;
      if (arr1) {
        while (true) {
          let items7 = findInitialRoute(arr1.name, items, initialRoutes);
          let index = tmp23.index;
          let tmp11 = arr1;
          if (!index) {
            index = tmp23.routes.length - 1;
          }
          if (typeof createStateObject !== "function") {
            let throwTypeErrorResult1 = HermesBuiltin.throwTypeError();
          }
          if (0 === items.length) {
            break;
          } else {
            if (items7) {
              let obj8 = { index: 1, routes: null };
              let obj9 = { name: null };
              obj9[0] = items7;
              let items5 = [obj9, ];
              let obj10 = {};
              let merged2 = Object.assign(tmp11);
              let obj11 = { routes: null };
              obj11[0] = [];
              obj10.state = obj11;
              items5[1] = obj10;
              obj8[1] = items5;
              let obj12 = obj8;
            } else {
              obj12 = { routes: null };
              let obj13 = {};
              let merged3 = Object.assign(tmp11);
              let obj14 = { routes: null };
              obj14[0] = [];
              obj13.state = obj14;
              let items6 = [obj13];
              obj12[0] = items6;
            }
            tmp23.routes[index].state = obj12;
            let state = tmp23;
            if (items.length > 0) {
              state = tmp23.routes[index].state;
            }
            let arr2 = items.push(arr1.name);
            arr1 = items.shift();
            tmp23 = state;
          }
        }
        if (items7) {
          const obj15 = { index: 1, routes: null };
          const obj16 = { name: null };
          obj16[0] = items7;
          items7 = [obj16, arr1];
          obj15[1] = items7;
          let obj17 = obj15;
        } else {
          obj17 = { routes: null };
          const items8 = [arr1];
          obj17[0] = items8;
        }
      }
    }
    const findFocusedRouteResult = findFocusedRoute.findFocusedRoute(obj);
    findFocusedRouteResult.path = "".replace(/\/$/, "");
    let parse;
    if (config != null) {
      parse = config.parse;
    }
    let pathParamNames;
    if (config != null) {
      pathParamNames = config.pathParamNames;
    }
    let explicitParamNames;
    if (config != null) {
      explicitParamNames = config.explicitParamNames;
    }
    let hasNestedScreens;
    if (config != null) {
      hasNestedScreens = config.hasNestedScreens;
    }
    const tmp29Result = parseQueryParams("", parse, pathParamNames, explicitParamNames, hasNestedScreens, findFocusedRouteResult.params);
    if (tmp29Result) {
      const obj18 = {};
      const merged4 = Object.assign(findFocusedRouteResult.params);
      const merged5 = Object.assign(tmp29Result);
      findFocusedRouteResult.params = obj18;
    }
    return obj;
  }
}
function parseQueryParams(arr, parse, pathParamNames, explicitParamNames, hasNestedScreens, params) {
  closure_0 = parse;
  let set = pathParamNames;
  if (pathParamNames === undefined) {
    const _Set = Set;
    set = new Set();
  }
  let parsed;
  const index = arr.indexOf("?");
  let substr;
  if (-1 !== index) {
    substr = arr.slice(index + 1);
  }
  if (substr) {
    parsed = validateArrayFormatSeparatorAll.parse(substr);
  } else {
    parsed = {};
  }
  set[Symbol.iterator]();
}

export const getStateFromPath = function getStateFromPath(str, screens) {
  ({ initialRoutes, configs, configsByScreen, prefixRegex } = (function getConfigResources(screens) {
    if (screens) {
      const value = store.get(screens);
      if (value) {
        return value;
      } else {
        const tmp4 = callback(screens);
        const result = store.set(screens, tmp4);
        return tmp4;
      }
    } else {
      return callback();
    }
  })(screens));
  screens = undefined;
  if (screens != null) {
    screens = screens.screens;
  }
  str = str.replace(/\/+/g, "/");
  const tmp = (function getConfigResources(screens) {
    if (screens) {
      const value = store.get(screens);
      if (value) {
        return value;
      } else {
        const tmp4 = callback(screens);
        const result = store.set(screens, tmp4);
        return tmp4;
      }
    } else {
      return callback();
    }
  })(screens);
  const str2 = str.replace(/^\//, "");
  const replaced = str.replace(/^\//, "").replace(/\?.*$/, "").replace(/%[0-9a-f]{2}/gi, (str) => str.toUpperCase());
  let str4 = replaced;
  if (!replaced.endsWith("/")) {
    const _HermesInternal = HermesInternal;
    str4 = "" + replaced + "/";
  }
  let str5 = str4;
  if (prefixRegex) {
    const match = str4.match(prefixRegex);
    if (null != match) {
      str5 = str4.slice(match[0].length);
    }
  }
  if (undefined === screens) {
    const items = [];
    const parts = str5.split("/");
    const iter = parts[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      if (nextResult) {
        let obj = { name: null };
        let _decodeURIComponent2 = decodeURIComponent;
        obj[0] = decodeURIComponent(tmp33);
        let arr = items.push(obj);
      }
      continue;
    }
    let tmp36;
    if (items.length) {
      tmp36 = createNestedStateObject(str, items, initialRoutes);
    }
    return tmp36;
  } else if ("/" === str5) {
    const found = configs.find((item, index) => {
      const segments = item.segments;
      return "" === segments.join("/");
    });
    let tmp22;
    if (found) {
      const routeNames = found.routeNames;
      tmp22 = createNestedStateObject(str, routeNames.map((item, index) => ({ name: item })), initialRoutes, found);
    }
    return tmp22;
  } else {
    const first = str5.split("/")[0];
    try {
      let decodeURIComponentResult;
      if (null != first) {
        const _decodeURIComponent = decodeURIComponent;
        decodeURIComponentResult = decodeURIComponent(first);
      }
      ({ routes, config } = matchAgainstConfigs(str5, decodeURIComponentResult, first, configs, configsByScreen));
      if (undefined !== routes) {
        if (undefined !== config) {
          return createNestedStateObject(str, routes, initialRoutes, config);
        }
      }
      const tmp15 = matchAgainstConfigs(str5, decodeURIComponentResult, first, configs, configsByScreen);
    } catch (err) {
    }
  }
  const str3 = str.replace(/^\//, "").replace(/\?.*$/, "");
};