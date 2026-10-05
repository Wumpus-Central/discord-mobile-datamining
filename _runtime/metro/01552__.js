// _runtime/metro/01552__.js
import findFocusedRoute from "../01517_findFocusedRoute.js";
import extractAll from "../01546_extract.js";
import _slicedToArray2 from "01551__slicedToArray.js";
import arrayStartsWith from "../01555_arrayStartsWith.js";
import _slicedToArray from "00032__slicedToArray.js";

let closure_5, hasOwnProperty, set;

function prepareConfigResources(screens) {
  function getInitialRoutes(initialRouteName) {
    initialRouteName = undefined;
    if (initialRouteName != null) {
      initialRouteName = initialRouteName.initialRouteName;
    }
    const items = [];
    if (initialRouteName) {
      const obj = { initialRouteName: initialRouteName.initialRouteName, parentScreens: [] };
      items.push(obj);
    }
    return items;
  }
  function getSortedNormalizedConfigs(initialRoutes) {
    let obj = screens;
    if (screens === undefined) {
      obj = {};
    }
    const items = [];
    const concat = items.concat;
    const keys = Object.keys(obj);
    const items1 = [...keys.map((item) => createNormalizedConfigs(item, obj, initialRoutes, [], [], []))];
    const applyResult = concat.apply(items1);
    const mapped = applyResult.map((item, order) => {
      obj = { order };
      const merged = Object.assign(item);
      return obj;
    });
    return mapped.sort((segments, segments2) => {
      obj = initialRoutes(closure_1_3[2]);
      if (obj.isArrayEqual(segments.segments, segments2.segments)) {
        let num9;
        if (segments.routeNames.length <= segments2.routeNames.length) {
          let num10;
          if (segments2.routeNames.length <= segments.routeNames.length) {
            num10 = segments.routeNames.length - segments2.routeNames.length || segments.order - segments2.order;
          } else {
            initialRoutes(closure_1_3[3]);
            num10 = 1;
          }
          num9 = num10;
        } else {
          initialRoutes(closure_1_3[3]);
          num9 = -1;
        }
        return num9;
      } else {
        const tmpResult5 = initialRoutes(closure_1_3[3]);
        if (tmpResult5.arrayStartsWith(segments.segments, segments2.segments)) {
          return -1;
        } else {
          const tmpResult6 = initialRoutes(closure_1_3[3]);
          if (tmpResult6.arrayStartsWith(segments2.segments, segments.segments)) {
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
                  let tmp11 = segments.segments[num];
                  let tmp12 = segments2.segments[num];
                  let startsWithResult = obj8.startsWith(":");
                  let obj9 = segments2.segments[num];
                  let startsWithResult1 = obj9.startsWith(":");
                  let hasItem = startsWithResult;
                  if (hasItem) {
                    let obj4 = segments.segments[num];
                    hasItem = obj4.includes("(");
                  }
                  let hasItem1 = startsWithResult1;
                  if (hasItem1) {
                    let obj5 = segments2.segments[num];
                    hasItem1 = obj5.includes("(");
                  }
                  let tmp8 = "*" === tmp11;
                  let tmp9 = "*" === tmp12;
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
        }
      }
    });
  }
  const initialRoutes = getInitialRoutes(screens);
  screens = undefined;
  if (screens != null) {
    screens = screens.screens;
  }
  const configs = getSortedNormalizedConfigs(initialRoutes, screens);
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
    let tmp8 = globalThis;
    const _RegExp = RegExp;
    const _HermesInternal2 = HermesInternal;
    const self = this;
    const self2 = this;
    prefixRegex = new RegExp("^" + mapped.join("/"));
  }
  let obj = {};
  map = new Map();
  const iter = configs[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp10 = nextResult;
    let screen = nextResult.screen;
    let arr2 = obj[screen];
    if (arr2 == null) {
      let items = [];
      obj[screen] = items;
      arr2 = items;
    }
    let tmp11 = nextResult;
    let arr = arr2.push(tmp10);
    let segments = tmp10.segments;
    let joined = segments.join("/");
    let tmp15 = checkForDuplicatedConfigs(map.get(joined), tmp10, joined);
    let result = map.set(joined, tmp10);
    continue;
  }
  return { initialRoutes, configs, configsByScreen: obj, prefixRegex };
}
function checkForDuplicatedConfigs(map, routeNames2, joined) {
  const tmp = map;
  if (tmp) {
    let arrayStartsWithResult;
    const routeNames = map.routeNames;
    const routeNames1 = routeNames2.routeNames;
    if (routeNames.length > routeNames1.length) {
      const obj2 = arrayStartsWith;
      arrayStartsWithResult = obj2.arrayStartsWith(routeNames, routeNames1);
    } else {
      const obj = arrayStartsWith;
      arrayStartsWithResult = obj.arrayStartsWith(routeNames1, routeNames);
    }
    if (!arrayStartsWithResult) {
      const _Error = Error;
      joined = routeNames.join(" > ");
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const error = new Error(
        "Found conflicting screens with the same pattern. The pattern '" +
          joined +
          "' resolves to both '" +
          joined +
          "' and '" +
          routeNames1.join(" > ") +
          "'. Patterns must be unique and cannot resolve to more than one screen.",
      );
      throw error;
    }
  }
}
let remainingPath = ["screen", "params", "initial", "path", "merge", "pop"];
function getStaticSegmentPattern(arg0) {
  const arr = Array.from(arg0, (str) => {
    let encodeURIComponentResult = encodeURIComponent(str);
    if (encodeURIComponentResult === str) {
      str = str.charCodeAt(0);
      const _HermesInternal = HermesInternal;
      const str1 = str.toString(16);
      const str3 = str1.padStart(2, "0");
      encodeURIComponentResult = "%" + str3.toUpperCase();
    }
    const tmp2 = path(closure_1_3[1])(str);
    return "(?:" + tmp2 + "|" + path(closure_1_3[1])(encodeURIComponentResult) + ")";
  });
  return arr.join("");
}
function getExplicitParamNames(parse) {
  let obj = parse;
  const _Object = Object;
  if (parse == null) {
    obj = {};
  }
  const entries1 = entries(obj);
  set = undefined;
  const mapped = entries1.map((item) => {
    let tmp;
    [tmp] = item;
    return tmp;
  });
  if (mapped.length) {
    const _Set = Set;
    const self = this;
    const self2 = this;
    set = new Set(mapped);
  }
  return set;
}
const weakMap = new WeakMap();
function matchAgainstConfigs(arg0, arg1, arg2, configs, configsByScreen) {
  let items;
  let closure_0 = arg1;
  let closure_1 = arg2;
  remainingPath = arg0;
  function _loop(iter) {
    closure_0 = iter;
    if (iter.regex) {
      if (canMatchFirstSegment(iter.segments[0], closure_0, closure_1)) {
        const match = closure_5.match(iter.regex);
        if (match) {
          items = [];
          let flag = false;
          const routeNames = iter.routeNames;
          iter = routeNames[Symbol.iterator]();
          const nextResult = iter.next();
          label0: while (iter !== undefined) {
            let tmp12 = nextResult;
            let arr2 = configsByScreen[nextResult];
            let found;
            if (arr2 != null) {
              found = arr2.find((segments) => {
                const obj = closure_2_0(items[3]);
                return obj.arrayStartsWith(segments.segments, segments.segments);
              });
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
                    let tmp56 = match.groups["param_" + item10051.index];
                    let tmp57 = tmp56;
                    if (null != tmp56) {
                      let tmp36Result;
                      let _decodeURIComponent = decodeURIComponent;
                      let decodeURIComponentResult = decodeURIComponent(tmp57);
                      if (item10051.regex) {
                        if (tmp57 !== decodeURIComponentResult) {
                          let regex = item10051.regex;
                          if (!regex.test(decodeURIComponentResult)) {
                            flag = true;
                            obj.return();
                            break;
                          }
                          while (true) {
                            let tmp43 = flag;
                            if (tmp43) {
                              iter.return();
                              break label0;
                            } else if (items1.length) {
                              let _Object = Object;
                              fromEntriesResult = Object.fromEntries(items1);
                            }
                            break label0;
                          }
                        }
                      }
                      let parse = tmp15.parse;
                      let tmp34;
                      if (parse != null) {
                        tmp34 = parse[item10051.name];
                      }
                      let items2 = [item10051.name];
                      let push = items1.push;
                      if (tmp34) {
                        tmp36Result = tmp36(decodeURIComponentResult);
                      } else {
                        tmp36Result = decodeURIComponentResult;
                      }
                      items2[1] = tmp36Result;
                      let arr = push(items2);
                    } else {
                      let items3 = [item10051.name, undefined];
                      let arr3 = items1.push(items3);
                    }
                  }
                  continue;
                }
              }
              let num3 = 0;
              if (!flag) {
                let closure_1_4 = iter;
                let str2 = "";
                closure_5 = closure_5.replace(match[0], "");
                num3 = 1;
              }
              return num3;
            }
            let tmp46 = fromEntriesResult;
            if (tmp46) {
              let _Object2 = Object;
              if (Object.keys(fromEntriesResult).length) {
                let obj2 = { name: tmp12, params: fromEntriesResult };
                let arr4 = items.push(obj2);
                continue;
              }
            }
            let obj3 = { name: tmp12 };
            let arr5 = items.push(obj3);
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
      let obj = { routes: items, remainingPath, config: _slicedToArray };
      return obj;
    }
    continue;
  }
}
function canMatchFirstSegment(str, iter, arg2) {
  let tmp = undefined === iter;
  if (!tmp) {
    let tmp3 = undefined !== str;
    if (tmp3) {
      const tmp4 = "*" !== str && !str.startsWith(":");
      let tmp5 = !tmp4;
      if (tmp4) {
        tmp5 = str === iter || str === arg2;
        const tmp6 = str === iter || str === arg2;
      }
      tmp3 = tmp5;
    }
    tmp = tmp3;
  }
  return tmp;
}
function createNormalizedConfigs(screen, arg1, arr, arr2, parentScreens, arr3) {
  let closure_0 = arr;
  const args = arr2;
  let closure_3 = arr3;
  let items = [];
  arr = arr3.push(screen);
  arr2 = parentScreens.push(screen);
  if (typeof arg1[screen] === "string") {
    const obj2 = { screen, path: arg1[screen] };
    arr3 = arr2.push(obj2);
    let items1 = [];
    const push4 = items.push;
    HermesBuiltin.arraySpread(items1, arr3, 0);
    let items2 = [];
    HermesBuiltin.arraySpread(items2, arr2, 0);
    push4(createConfigItem(screen, items1, items2));
  } else if (typeof arg1[screen] === "object") {
    const screens = tmp4.screens;
    if (typeof arg1[screen].path === "string") {
      if (arg1[screen].exact) {
        if (null == arg1[screen].path) {
          const _Error2 = Error;
          const _HermesInternal2 = HermesInternal;
          const self3 = this;
          const self4 = this;
          const error = new Error(
            "Screen '" +
              screen +
              "' doesn't specify a 'path'. A 'path' needs to be specified when specifying 'exact: true'. If you don't want this screen in the URL, specify it as empty string, e.g. `path: ''`.",
          );
          throw error;
        }
      }
      const items3 = [];
      if (arg1[screen].alias) {
        const alias = tmp4.alias;
        for (const item10023 of alias) {
          if (typeof item10023 === "string") {
            let items4 = [];
            let push = items3.push;
            let arraySpreadResult8 = HermesBuiltin.arraySpread(items4, arr3, 0);
            let items5 = [];
            let obj = { screen, path: item10023 };
            items5[HermesBuiltin.arraySpread(items5, arr2, 0)] = obj;
            let arr4 = push(createConfigItem(screen, items4, items5, tmp4.parse, tmp6));
          } else if (typeof item10023 === "object") {
            let tmp13;
            let items6 = [];
            let push5 = items3.push;
            let arraySpreadResult9 = HermesBuiltin.arraySpread(items6, arr3, 0);
            let obj3 = { screen: null, path: null };
            let items7 = [];
            if (item10023.exact) {
              obj3.screen = screen;
              obj3.path = item10023.path;
              items7[0] = obj3;
              tmp13 = items7;
            } else {
              obj3.screen = screen;
              obj3.path = item10023.path;
              items7[HermesBuiltin.arraySpread(items7, arr2, 0)] = obj3;
              tmp13 = items7;
            }
            let push5Result = push5(createConfigItem(screen, items6, tmp13, item10023.parse, tmp6));
          }
          continue;
        }
      }
      if (arg1[screen].exact) {
        arr2.length = 0;
      }
      const obj4 = { screen, path: arg1[screen].path };
      arr2.push(obj4);
      const items8 = [];
      const push2 = items.push;
      HermesBuiltin.arraySpread(items8, arr3, 0);
      const items9 = [];
      HermesBuiltin.arraySpread(items9, arr2, 0);
      push2(createConfigItem(screen, items8, items9, arg1[screen].parse, !tmp73));
      const push3 = items.push;
      const items10 = [];
      HermesBuiltin.arraySpread(items10, items3, 0);
      HermesBuiltin.apply(push3, items10, items);
    }
    if (typeof arg1[screen] !== "string") {
      if (typeof arg1[screen].path !== "string") {
        const alias1 = tmp4.alias;
        let length;
        if (alias1 != null) {
          length = alias1.length;
        }
        if (length) {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const self = this;
          const self2 = this;
          const error1 = new Error(
            "Screen '" + screen + "' doesn't specify a 'path'. A 'path' needs to be specified in order to use 'alias'.",
          );
          throw error1;
        }
      }
    }
    if (screens) {
      if (arg1[screen].initialRouteName) {
        const obj5 = { initialRouteName: arg1[screen].initialRouteName, parentScreens };
        arr.push(obj5);
      }
      const _Object = Object;
      const keys = Object.keys(screens);
      const item = keys.forEach((item) => {
        items = [...closure_1];
        const items1 = [...closure_2];
        const items2 = [...createNormalizedConfigs(item, screens, closure_0, items, items1, closure_3)];
        items.push.apply(items2);
      });
    }
  }
  arr3.pop();
  return items;
}
function createConfigItem(screen, items1, items2, parse, arg4) {
  let regExp1;
  let tmp11;
  let tmp12;
  let flag = arg4;
  if (arg4 === undefined) {
    flag = false;
  }
  let path;
  let items = [];
  function _loop2(screen) {
    let closure_0 = screen;
    const push = items.push;
    let obj = _slicedToArray2;
    const patternParts = obj.getPatternParts(path);
    items = [
      ...patternParts.map((item) => {
        const obj = { screen };
        const merged = Object.assign(item);
        return obj;
      }),
    ];
    push.apply(items);
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
    const mapped = items.map((param, index) => {
      let str;
      let tmp2;
      if (param.param) {
        let str5 = "[^/]+";
        if (param.regex) {
          const _HermesInternal2 = HermesInternal;
          str5 = "(?:" + param.regex + ")|(?=[^/]*%[0-9A-F]{2})[^/]+";
        }
        let str8 = "";
        if (param.optional) {
          str8 = "?";
        }
        const _HermesInternal3 = HermesInternal;
        str = "(((?<param_" + index + ">" + str5 + ")\\/)" + str8 + ")";
      } else {
        str = ".*\\/";
        if ("*" !== param.segment) {
          if (typeof getStaticSegmentPattern === "function") {
            const _Array = Array;
            let str3 = "";
            let _HermesInternal = HermesInternal;
            const arr = Array.from(tmp2, (str) => {
              let encodeURIComponentResult = encodeURIComponent(str);
              if (encodeURIComponentResult === str) {
                str = str.charCodeAt(0);
                const _HermesInternal = HermesInternal;
                const str1 = str.toString(16);
                const str3 = str1.padStart(2, "0");
                encodeURIComponentResult = "%" + str3.toUpperCase();
              }
              const tmp2 = path(closure_1_3[1])(str);
              return "(?:" + tmp2 + "|" + path(closure_1_3[1])(encodeURIComponentResult) + ")";
            });
            str = "" + arr.join("") + "\\/";
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
      }
      return str;
    });
    let str = "";
    let _HermesInternal = HermesInternal;
    const str2 = ")$";
    let str3 = "^(";
    const self = this;
    const self2 = this;
    regExp = new RegExp("^(" + mapped.join("") + ")$");
  }
  items1 = [];
  const mapped1 = items.map((segment) => segment.segment);
  set = new Set();
  const entries = items.entries();
  const tmp7 = entries[Symbol.iterator]();
  while (tmp7 !== undefined) {
    let tmp10 = _slicedToArray(tmp8, 2);
    [tmp11, tmp12] = tmp10;
    if (tmp12.param) {
      let obj = { index: tmp11, screen: null, name: null, regex: regExp1 };
      ({ screen: obj3.screen, param: obj3.name } = tmp12);
      regExp1 = undefined;
      let push = items1.push;
      if (tmp12.regex) {
        let _RegExp2 = RegExp;
        let _HermesInternal2 = HermesInternal;
        let self3 = this;
        let self4 = this;
        regExp1 = new RegExp("^(?:" + tmp12.regex + ")$");
      }
      let arr = push(obj);
      if (tmp12.screen === screen) {
        let addResult = set.add(tmp12.param);
      }
    }
    continue;
  }
  const obj2 = {
    screen,
    regex: regExp,
    segments: mapped1,
    params: items1,
    routeNames: items1,
    parse,
    explicitParamNames: getExplicitParamNames(parse),
    pathParamNames: set,
    hasNestedScreens: flag,
  };
  return obj2;
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
      let tmp7 = flag;
      if (tmp7) {
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
function createStateObject(arg0, arg1, arg2) {}
function createNestedStateObject(arr, items, initialRoutes, config) {
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let obj10;
  let obj17;
  let obj20;
  let obj8;
  arr = items.shift();
  items = [];
  const tmp2 = findInitialRoute(arr.name, items, initialRoutes);
  items.push(arr.name);
  if (typeof createStateObject === "function") {
    let obj;
    if (0 === items.length) {
      let obj4;
      if (tmp2) {
        const obj2 = { index: 1, routes: items1 };
        items1 = [{ name: tmp2 }, arr];
        obj4 = obj2;
        const obj3 = { name: tmp2 };
      } else {
        obj4 = { routes: items2 };
        items2 = [arr];
      }
      obj = obj4;
    } else if (tmp2) {
      const obj5 = { index: 1, routes: items3 };
      items3 = [{ name: tmp2 }];
      const obj6 = { name: tmp2 };
      const obj7 = { state: obj8 };
      const merged = Object.assign(arr);
      obj8 = { routes: [] };
      items3[1] = obj7;
      obj = obj5;
    } else {
      obj = { routes: items4 };
      const obj9 = { state: obj10 };
      const merged1 = Object.assign(arr);
      items4 = [obj9];
      obj10 = { routes: [] };
    }
    if (items.length > 0) {
      let arr3 = items.shift();
      let tmp25 = obj;
      if (arr3) {
        while (true) {
          let tmp11 = findInitialRoute(arr3.name, items, initialRoutes);
          let index = tmp25.index;
          let tmp12 = arr3;
          if (!index) {
            index = tmp25.routes.length - 1;
          }
          if (typeof createStateObject !== "function") {
            break;
          } else {
            let obj18;
            if (0 === tmp16) {
              let obj13;
              if (tmp11) {
                let obj11 = { index: 1, routes: items5 };
                let obj12 = { name: tmp11 };
                items5 = [obj12, arr3];
                obj13 = obj11;
              } else {
                obj13 = { routes: items6 };
                items6 = [arr3];
              }
              obj18 = obj13;
            } else if (tmp11) {
              let obj14 = { index: 1, routes: items7 };
              let obj15 = { name: tmp11 };
              items7 = [obj15];
              let obj16 = { state: obj17 };
              let merged2 = Object.assign(tmp12);
              obj17 = { routes: [] };
              items7[1] = obj16;
              obj18 = obj14;
            } else {
              obj18 = { routes: items8 };
              let obj19 = { state: obj20 };
              let merged3 = Object.assign(tmp12);
              obj20 = { routes: [] };
              items8 = [obj19];
            }
            tmp14.state = obj18;
            let state = tmp25;
            if (items.length > 0) {
              state = tmp25.routes[index].state;
            }
            let arr4 = items.push(arr3.name);
            arr3 = items.shift();
            tmp25 = state;
          }
        }
        throw new TypeError("Trying to call a non-function");
      }
    }
    const obj21 = findFocusedRoute;
    const findFocusedRouteResult = obj21.findFocusedRoute(obj);
    findFocusedRouteResult.path = arr.replace(/\/$/, "");
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
    const tmp31Result = parseQueryParams(
      arr,
      parse,
      pathParamNames,
      explicitParamNames,
      hasNestedScreens,
      findFocusedRouteResult.params,
    );
    if (tmp31Result) {
      const obj22 = {};
      const merged4 = Object.assign(findFocusedRouteResult.params);
      const merged5 = Object.assign(tmp31Result);
      findFocusedRouteResult.params = obj22;
    }
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
function parseQueryParams(arr, parse) {
  let closure_0 = parse;
  set = pathParamNames;
  if (pathParamNames === undefined) {
    const _Set = Set;
    const self = this;
    const self2 = this;
    set = new Set();
  }
  let flag = hasNestedScreens;
  if (hasNestedScreens === undefined) {
    flag = false;
  }
  let parsed;
  const index = arr.indexOf("?");
  let substr;
  if (-1 !== index) {
    substr = arr.slice(index + 1);
  }
  if (substr) {
    const obj2 = extractAll;
    parsed = obj2.parse(substr);
  } else {
    parsed = {};
  }
  for (const item10028 of set) {
    delete obj[item10028];
    continue;
  }
  if (parse) {
    const _Object = Object;
    const keys = Object.keys(parsed);
    const item = keys.forEach((item) => {
      hasOwnProperty = Object.hasOwnProperty;
      const callResult = hasOwnProperty.call(closure_0, item) && typeof parsed[item] === "string";
      if (callResult) {
        parsed[item] = closure_0[item](parsed[item]);
      }
    });
  }
  if (flag) {
    let hasItem;
    if (has != null) {
      hasItem = has.has("screen");
    }
    if (!hasItem) {
      if (typeof parsed.screen === "string") {
        for (const item10050 of remainingPath) {
          let hasItem1;
          if (has != null) {
            hasItem1 = has.has(tmp15);
          }
          if (!hasItem1) {
            delete obj[item10050];
          }
          continue;
        }
      } else {
        let screen;
        if (screen != null) {
          screen = screen.screen;
        }
      }
    }
  }
  let tmp18;
  if (Object.keys(parsed).length) {
    tmp18 = parsed;
  }
  return tmp18;
}

export const getStateFromPath = function getStateFromPath(arr, screens) {
  let config;
  let configs;
  let configsByScreen;
  let initialRoutes;
  let prefixRegex;
  let routes;
  function getConfigResources(screens) {
    const tmp = screens;
    if (tmp) {
      const value = weakMap.get(screens);
      if (value) {
        return value;
      } else {
        const tmp5 = prepareConfigResources(screens);
        const result = weakMap.set(screens, tmp5);
        return tmp5;
      }
    } else {
      return prepareConfigResources();
    }
  }
  let tmp = getConfigResources(screens);
  ({ initialRoutes, configs, configsByScreen, prefixRegex } = tmp);
  screens = undefined;
  if (screens != null) {
    screens = screens.screens;
  }
  const str = arr.replace(/\/+/g, "/");
  const str2 = str.replace(/^\//, "");
  const str3 = str2.replace(/\?.*$/, "");
  const replaced = str3.replace(/%[0-9a-f]{2}/gi, (str) => str.toUpperCase());
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
        let obj = { name: decodeURIComponent(tmp33) };
        let _decodeURIComponent2 = decodeURIComponent;
        let push = items.push;
        arr = push(obj);
      }
      continue;
    }
    let tmp36;
    if (items.length) {
      tmp36 = createNestedStateObject(arr, items, initialRoutes);
    }
    return tmp36;
  } else if ("/" === str5) {
    const found = configs.find((segments) => {
      segments = segments.segments;
      return "" === segments.join("/");
    });
    let tmp22;
    if (found) {
      const routeNames = found.routeNames;
      tmp22 = createNestedStateObject(
        arr,
        routeNames.map((name) => ({ name })),
        initialRoutes,
        found,
      );
    }
    return tmp22;
  } else {
    const first = str5.split("/")[0];
    try {
      if (null != first) {
        const _decodeURIComponent = decodeURIComponent;
        decodeURIComponent(first);
      }
    } catch (err) {}
    ({ routes, config } = matchAgainstConfigs(str5, tmp8, first, configs, configsByScreen));
    matchAgainstConfigs(str5, tmp8, first, configs, configsByScreen);
    if (undefined !== routes) {
      if (undefined !== config) {
        return createNestedStateObject(arr, routes, initialRoutes, config);
      }
    }
  }
};
