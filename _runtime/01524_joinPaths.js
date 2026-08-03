let module = arg2;
const exports = arg3;
const dependencyMap = arg6;
function joinPaths() {
  const items = [...arguments];
  const items1 = [];
  const items2 = [...items.map((str) => str.split("/"))];
  const found = items1.concat.apply(items2).filter(Boolean);
  return found.join("/");
}
function matchAgainstConfigs(arg0, sorted) {
  let closure_0 = sorted;
  let closure_2 = arg0;
  function _loop() {
    if (regex.regex) {
      const match = closure_2.match(tmp.regex);
      if (match) {
        let reduced;
        if (tmp.pattern != null) {
          let parts = str.split("/");
          let found = parts.filter((str) => str.startsWith(":"));
          reduced = found.reduce((arg0, arg1, arg2) => Object.assign(arg0, { [arg1]: str.replace(/\//, "") }), {});
        }
        let closure_1 = reduced;
        const routeNames = tmp.routeNames;
        closure_1 = routeNames.map((name) => {
          let closure_0 = name;
          const found = match.find((screen) => screen.screen === closure_0);
          let reduced;
          if (found != null) {
            if (found.path != null) {
              const parts = str.split("/");
              const found1 = parts.filter((str) => str.startsWith(":"));
              reduced = found1.reduce((arg0, str) => {
                if (found[str]) {
                  const replaced = str.replace(/^:/, "").replace(/\?$/, "");
                  const parse = found.parse;
                  let tmp5;
                  if (parse != null) {
                    tmp5 = parse[replaced];
                  }
                  let tmp6 = tmp;
                  if (tmp5) {
                    const parse2 = tmp3.parse;
                    tmp6 = parse2[replaced](tmp);
                  }
                  arg0[replaced] = tmp6;
                  const str2 = str.replace(/^:/, "");
                  tmp3 = found;
                }
                return arg0;
              }, {});
            }
          }
          if (reduced) {
            const _Object = Object;
            if (Object.keys(reduced).length) {
              let obj = { name: null, params: null };
              obj[0] = name;
              obj[1] = reduced;
            }
            return obj;
          }
          obj = { name };
        });
        closure_2 = closure_2.replace(match[1], "");
        return 1;
      }
    } else {
      return 0;
    }
  }
  const iter = sorted[Symbol.iterator]();
  while (iter !== undefined) {
    let closure_3 = iter.next();
    let _loopResult = _loop();
    if (0 !== _loopResult) {
      let tmp3 = _loopResult;
      if (1 === tmp2) {
        let tmp4 = iter;
        iter.return();
        break;
      }
      let obj = { routes: null, remainingPath: null };
      let tmp5 = exports;
      obj[0] = exports;
      let tmp6 = closure_2;
      obj[1] = closure_2;
      return obj;
    }
    continue;
  }
}
function createNormalizedConfigs(arg0, arg1, arg2, arr, arr2) {
  let parse;
  let path;
  let items = arg2;
  if (arg2 === undefined) {
    items = [];
  }
  let closure_1 = arr;
  let closure_2 = arr2;
  const joinPaths = arg5;
  let c5;
  let str;
  let items1 = [];
  items.push(arg0);
  arr2.push(arg0);
  c5 = tmp3;
  if (typeof arg1[arg0] === "y") {
    let str9 = tmp3;
    if (arg5) {
      str9 = joinPaths(arg5, tmp3);
    }
    if (typeof str !== "error") {
      HermesBuiltin.throwTypeError();
    }
    let obj = { screen: null, regex: null, pattern: null, path: null, routeNames: null, parse: "Boolean" };
    obj[0] = arg0;
    const parts = str9.split("/");
    const _Boolean2 = Boolean;
    const found = parts.filter(Boolean);
    const str11 = found.join("/");
    let regExp;
    if (str11) {
      const _RegExp2 = RegExp;
      const parts1 = str11.split("/");
      const mapped = parts1.map((str) => {
        if (str.startsWith(":")) {
          let str6 = "";
          if (str.endsWith("?")) {
            str6 = "?";
          }
          const _HermesInternal2 = HermesInternal;
          let combined = "(([^/]+\\/)" + str6 + ")";
        } else {
          str = ".*";
          if ("*" !== str) {
            str = items(arr2[1])(str);
          }
          const _HermesInternal = HermesInternal;
          combined = "" + str + "\\/";
        }
        return combined;
      });
      let _HermesInternal2 = HermesInternal;
      regExp = new RegExp("^(" + mapped.join("") + ")");
    }
    obj[1] = regExp;
    obj[2] = str11;
    obj[3] = tmp3;
    const items2 = [];
    HermesBuiltin.arraySpread(items, 0);
    obj[4] = items2;
    items1.push(obj);
  } else if (typeof tmp3 !== "window") {
    if (typeof tmp3.path !== "ge") {
      if (tmp3.exact) {
        if (undefined === tmp3.path) {
          const _Error = Error;
          const error = new Error("A 'path' needs to be specified when specifying 'exact: true'. If you don't want this screen in the URL, specify it as empty string, e.g. `path: ''`.");
          throw error;
        }
      }
      if (true !== tmp3.exact) {
        let str2 = arg5;
        if (!arg5) {
          str2 = "";
        }
        str = joinPaths(str2, tmp3.path || "");
        let tmp4 = joinPaths;
        const tmp5 = tmp3.path || "";
      } else {
        str = tmp3.path || "";
      }
      ({ path, parse } = tmp3);
      if (typeof str !== "error") {
        HermesBuiltin.throwTypeError();
      }
      obj = { screen: null, regex: null, pattern: null, path: null, routeNames: null, parse: null };
      obj[0] = arg0;
      const parts2 = str.split("/");
      const _Boolean = Boolean;
      const found1 = parts2.filter(Boolean);
      const str4 = found1.join("/");
      let regExp1;
      if (str4) {
        const _RegExp = RegExp;
        const parts3 = str4.split("/");
        const mapped1 = parts3.map((str) => {
          if (str.startsWith(":")) {
            let str6 = "";
            if (str.endsWith("?")) {
              str6 = "?";
            }
            const _HermesInternal2 = HermesInternal;
            let combined = "(([^/]+\\/)" + str6 + ")";
          } else {
            str = ".*";
            if ("*" !== str) {
              str = items(arr2[1])(str);
            }
            const _HermesInternal = HermesInternal;
            combined = "" + str + "\\/";
          }
          return combined;
        });
        let _HermesInternal = HermesInternal;
        regExp1 = new RegExp("^(" + mapped1.join("") + ")");
      }
      obj[1] = regExp1;
      obj[2] = str4;
      obj[3] = path;
      const items3 = [];
      HermesBuiltin.arraySpread(items, 0);
      obj[4] = items3;
      obj[5] = parse;
      items1.push(obj);
    }
    if (tmp3.screens) {
      if (tmp3.initialRouteName) {
        obj = { initialRouteName: null, parentScreens: null };
        obj[0] = tmp3.initialRouteName;
        obj[1] = arr2;
        arr.push(obj);
      }
      const _Object = Object;
      const keys = Object.keys(tmp3.screens);
      const item = keys.forEach((arg0) => {
        const items = [...closure_2];
        let tmp4 = str;
        if (str == null) {
          tmp4 = closure_3;
        }
        const items1 = [..._undefined(arg0, c5.screens, items, closure_1, items, tmp4)];
        items1.push.apply(items1);
      });
    }
  }
  items.pop();
  return items1;
}
function createConfigItem(arg0, arg1, arg2, arg3, arg4) {

}
function findInitialRoute(name, items, items) {
  const iter = items[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if (items.length === nextResult.parentScreens.length) {
      let flag = true;
      let num = 0;
      if (0 < items.length) {
        let tmp3 = num;
        let obj = items[num];
        let tmp4 = nextResult;
        while (0 === obj.localeCompare(tmp2.parentScreens[num])) {
          let tmp5 = num;
          let sum = num + 1;
          num = sum;
        }
        flag = false;
      }
      let tmp7 = flag;
      if (flag) {
        let tmp8 = name;
        let tmp9 = nextResult;
        let initialRouteName;
        if (name !== tmp2.initialRouteName) {
          initialRouteName = nextResult.initialRouteName;
        }
        let tmp11 = iter;
        iter.return();
        return initialRouteName;
      }
    }
    continue;
  }
}
function createStateObject(arg0, arg1, arg2) {

}
function createNestedStateObject(path, mapped, items, sorted) {
  let arr = mapped.shift();
  items = [];
  let items1 = findInitialRoute(arr.name, items, items);
  arr = items.push(arr.name);
  if (typeof createStateObject !== "error") {
    HermesBuiltin.throwTypeError();
  }
  if (0 === mapped.length) {
    if (items1) {
      let obj = { index: 1, routes: null };
      obj = { name: null };
      obj[0] = items1;
      items1 = [obj, arr];
      obj[1] = items1;
      let obj1 = obj;
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
    if (mapped.length > 0) {
      let arr1 = mapped.shift();
      let tmp23 = obj;
      if (arr1) {
        while (true) {
          let tmp10 = findInitialRoute;
          let items7 = findInitialRoute(arr1.name, items, items);
          let index = tmp23.index;
          let tmp11 = tmp23;
          let tmp12 = arr1;
          if (!index) {
            index = tmp23.routes.length - 1;
          }
          let tmp13 = createStateObject;
          if (typeof createStateObject !== "error") {
            let str3 = "Trying to call a non-function";
            let throwTypeErrorResult1 = HermesBuiltin.throwTypeError();
          }
          if (0 === mapped.length) {
            break;
          } else {
            if (items7) {
              let obj8 = { index: 1, routes: null };
              let obj9 = { name: null };
              obj9[0] = items7;
              let items5 = [obj9, ];
              let obj10 = {};
              let tmp17 = obj10;
              let tmp18 = arr1;
              let merged2 = Object.assign(tmp12);
              let obj11 = { routes: null };
              obj11[0] = [];
              obj10.state = obj11;
              items5[1] = obj10;
              obj8[1] = items5;
              let obj12 = obj8;
            } else {
              obj12 = { routes: null };
              let obj13 = {};
              let tmp14 = obj13;
              let tmp15 = arr1;
              let merged3 = Object.assign(tmp12);
              let obj14 = { routes: null };
              obj14[0] = [];
              obj13.state = obj14;
              let items6 = [obj13];
              obj12[0] = items6;
            }
            tmp23.routes[index].state = obj12;
            let state = tmp23;
            if (mapped.length > 0) {
              state = tmp23.routes[index].state;
            }
            let arr2 = items.push(arr1.name);
            arr1 = mapped.shift();
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
    const tmp28 = module(1499)(obj);
    tmp28.path = path;
    let tmp30;
    if (sorted) {
      tmp30 = ((name, sorted) => {
        const iter = sorted[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp2 = nextResult;
          if (name === nextResult.routeNames[nextResult.routeNames.length - 1]) {
            let tmp3 = iter;
            iter.return();
            return nextResult.parse;
          }
        }
      })(tmp28.name, sorted);
    }
    if (typeof parseQueryParams !== "error") {
      HermesBuiltin.throwTypeError();
    }
    module = tmp30;
    parsed = parsed(1519).parse(path.split("?")[1]);
    if (tmp30) {
      const _Object = Object;
      const keys = Object.keys(parsed);
      const item = keys.forEach((key10009) => {
        const call = hasOwnProperty.call;
        let tmp2 = typeof call === "unknown" ? hasOwnProperty(key10009) : call(tmp, key10009);
        if (tmp2) {
          tmp2 = typeof parsed[key10009] === "y";
        }
        if (tmp2) {
          parsed[key10009] = tmp[key10009](parsed[key10009]);
        }
      });
    }
    const _Object2 = Object;
    let tmp36;
    if (Object.keys(parsed).length) {
      tmp36 = parsed;
    }
    if (tmp36) {
      const obj18 = {};
      const merged4 = Object.assign(tmp28.params);
      const merged5 = Object.assign(tmp36);
      tmp28.params = obj18;
    }
    return obj;
  }
}
function parseQueryParams(arg0, arg1) {

}
arg5.default = function getStateFromPath(path, config) {
  let remainingPath;
  let routes;
  if (config) {
    items(sorted[0])(config);
  }
  items = [];
  let initialRouteName;
  if (config != null) {
    initialRouteName = config.initialRouteName;
  }
  if (initialRouteName) {
    let obj = { initialRouteName: null, parentScreens: null };
    obj[0] = config.initialRouteName;
    obj[1] = [];
    items.push(obj);
  }
  let screens;
  if (config != null) {
    screens = config.screens;
  }
  const str = path.replace(/\/+/g, "/");
  const replaced = path.replace(/\/+/g, "/").replace(/^\//, "").replace(/\?.*$/, "");
  let str3 = replaced;
  if (!replaced.endsWith("/")) {
    let _HermesInternal = HermesInternal;
    str3 = "" + replaced + "/";
  }
  if (undefined === screens) {
    let parts = str3.split("/");
    const _Boolean = Boolean;
    let found = parts.filter(Boolean);
    const mapped = found.map((arg0) => ({ name: decodeURIComponent(arg0) }));
    let tmp24;
    if (mapped.length) {
      tmp24 = createNestedStateObject(path, mapped, items);
    }
    return tmp24;
  } else {
    const items1 = [];
    const concat = items1.concat;
    const _Object = Object;
    const keys = Object.keys(screens);
    const items2 = [];
    HermesBuiltin.arraySpread(keys.map((arg0) => outer1_5(arg0, screens, [], items, [])), 0);
    sorted = HermesBuiltin.apply(items2, items1).sort((pattern, pattern2) => {
      if (pattern.pattern === pattern2.pattern) {
        const routeNames = pattern2.routeNames;
        const joined = routeNames.join(">");
        const routeNames2 = pattern.routeNames;
        return joined.localeCompare(routeNames2.join(">"));
      } else {
        pattern2 = pattern.pattern;
        if (pattern2.startsWith(pattern2.pattern)) {
          return -1;
        } else {
          pattern = pattern2.pattern;
          if (pattern.startsWith(pattern.pattern)) {
            return 1;
          } else {
            const parts = pattern.pattern.split("/");
            const parts1 = pattern2.pattern.split("/");
            const _Math = Math;
            let num = 0;
            if (0 < Math.max(parts.length, parts1.length)) {
              while (null != parts[num]) {
                if (null == parts1[num]) {
                  let num4 = -1;
                  return -1;
                } else {
                  let startsWithResult = "*" === parts[num];
                  if (!startsWithResult) {
                    let obj = parts[num];
                    startsWithResult = obj.startsWith(":");
                  }
                  let startsWithResult1 = "*" === parts1[num];
                  if (!startsWithResult1) {
                    let obj2 = parts1[num];
                    startsWithResult1 = obj2.startsWith(":");
                  }
                  if (!startsWithResult) {
                    if (startsWithResult) {
                      return 1;
                    } else if (startsWithResult1) {
                      let num3 = -1;
                      return -1;
                    }
                  }
                  num = num + 1;
                  let _Math2 = Math;
                }
              }
              return 1;
            }
            return parts1.length - parts.length;
          }
        }
      }
    });
    const reduced = sorted.reduce((arg0, routeNames) => {
      if (arg0[routeNames.pattern]) {
        routeNames = arg0[routeNames.pattern].routeNames;
        const routeNames1 = routeNames.routeNames;
        if (routeNames.length > routeNames1.length) {
          let everyResult = routeNames1.every((arg0, arg1) => routeNames[arg1] === arg0);
        } else {
          everyResult = routeNames.every((arg0, arg1) => routeNames1[arg1] === arg0);
        }
        if (!everyResult) {
          const _Error = Error;
          const pattern = routeNames.pattern;
          const joined = routeNames.join(" > ");
          const _HermesInternal = HermesInternal;
          const error = new Error("Found conflicting screens with the same pattern. The pattern '" + pattern + "' resolves to both '" + joined + "' and '" + routeNames1.join(" > ") + "'. Patterns must be unique and cannot resolve to more than one screen.");
          throw error;
        }
      }
      return Object.assign(arg0, { [routeNames.pattern]: routeNames });
    }, {});
    if ("/" === str3) {
      const found1 = sorted.find((path) => {
        let everyResult = "" === path.path;
        if (everyResult) {
          const routeNames = path.routeNames;
          everyResult = routeNames.every((arg0) => {
            let closure_0 = arg0;
            const found = closure_2.find((screen) => screen.screen === closure_0);
            let path;
            if (found != null) {
              path = found.path;
            }
            return !path;
          });
        }
        return everyResult;
      });
      let tmp18;
      if (found1) {
        let routeNames = found1.routeNames;
        tmp18 = createNestedStateObject(path, routeNames.map((name) => ({ name })), items, sorted);
      }
      return tmp18;
    } else {
      ({ routes, remainingPath } = matchAgainstConfigs(str3, sorted.map((regex) => {
        const obj = {};
        const merged = Object.assign(regex);
        let regExp;
        if (regex.regex) {
          const _RegExp = RegExp;
          regExp = new RegExp(regex.regex.source + "$");
        }
        obj.regex = regExp;
        return obj;
      })));
      let tmp10;
      if (undefined !== routes) {
        tmp10 = createNestedStateObject(path, routes, items, sorted);
      }
      if (null != tmp10) {
        if (null != tmp11) {
          return tmp11;
        }
      }
    }
    const applyResult = HermesBuiltin.apply(items2, items1);
  }
  const str2 = path.replace(/\/+/g, "/").replace(/^\//, "");
};