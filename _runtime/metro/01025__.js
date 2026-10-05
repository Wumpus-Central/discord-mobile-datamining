// _runtime/metro/01025__.js
import _mod693 from "00693__.js";
import _mod1018 from "01018__.js";
import _slicedToArray from "00032__slicedToArray.js";

function pickSplat(params) {
  return params.params["*"] || "";
}
function trimSlash(pathname) {
  let substr = pathname;
  if ("/" === pathname[pathname.length - 1]) {
    substr = pathname.slice(0, -1);
  }
  return substr;
}
function pathEndsWithWildcard(str) {
  return str.endsWith("*");
}
function pathIsWildcardAndHasChildren(str, route) {
  flag = str.endsWith("*");
  if (flag) {
    const children = route.route.children;
    let length;
    if (children != null) {
      length = children.length;
    }
    flag = length;
  }
  if (!flag) {
    flag = false;
  }
  return flag;
}
function routeIsDescendant(route) {
  let tmp = route.children || !route.element;
  if (!tmp) {
    const path = route.path;
    let endsWithResult;
    if (path != null) {
      endsWithResult = path.endsWith("/*");
    }
    tmp = !endsWithResult;
  }
  return !tmp;
}
function sendIndexPath(arg0, pathname, basename) {
  let arr = arg0;
  if (!arr) {
    let tmp3 = pathname;
    if (flag) {
      let tmp5 = pathname;
      if (basename) {
        tmp5 = pathname;
        if ("/" !== basename) {
          const formatted = pathname.toLowerCase();
          tmp5 = pathname;
          if (formatted.startsWith(basename.toLowerCase())) {
            let diff;
            let tmp9;
            if (basename.endsWith("/")) {
              diff = length - 1;
            } else {
              diff = length;
            }
            const charAtResult = pathname.charAt(diff);
            if (!charAtResult) {
              tmp9 = pathname.slice(diff) || "/";
              pathname.slice(diff) || "/";
            } else {
              tmp9 = pathname;
            }
            tmp5 = tmp9;
          }
        }
      }
      tmp3 = tmp5;
    }
    arr = tmp3;
  }
  let substr = arr;
  if ("/*" === arr.slice(-2)) {
    substr = arr.slice(0, -2);
  }
  let substr1 = substr;
  const tmp11 = substr.length > 1 && "/" === substr[substr.length - 1];
  if (tmp11) {
    substr1 = substr.slice(0, -1);
  }
  const items = [substr1, "route"];
  return items;
}
function getNumberOfUrlSegments(str) {
  const parts = str.split(/\\?\//);
  return parts.filter((item) => item.length > 0 && "," !== item).length;
}
function stripBasenameFromPathname(pathname, basename) {
  const tmp = basename;
  if (tmp) {
    if ("/" !== basename) {
      const formatted = pathname.toLowerCase();
      if (formatted.startsWith(basename.toLowerCase())) {
        let diff;
        let tmp5;
        if (basename.endsWith("/")) {
          diff = length - 1;
        } else {
          diff = length;
        }
        const charAtResult = pathname.charAt(diff);
        if (!charAtResult) {
          tmp5 = pathname.slice(diff) || "/";
          pathname.slice(diff) || "/";
        } else {
          tmp5 = pathname;
        }
        return tmp5;
      } else {
        return pathname;
      }
    }
  }
  return pathname;
}
function prefixWithSlash(combined) {
  if ("/" !== combined[0]) {
    const _HermesInternal = HermesInternal;
    combined = "/" + combined;
  }
  return combined;
}
function rebuildRoutePathFromAllRoutes(routes, _location) {
  function _loop(item10012) {
    routes = item10012;
    if (item10012.route.path) {
      if ("*" !== item10012.route.path) {
        let obj3;
        let str2 = arr;
        if ("*" === (item10012.route.path || "")[(item10012.route.path || "").length - 1]) {
          str2 = arr.slice(0, -1);
        }
        const pathnameBase = item10012.pathnameBase;
        let str5 = pathnameBase;
        if ("/" !== pathnameBase[0]) {
          const _HermesInternal = HermesInternal;
          str5 = "/" + pathnameBase;
        }
        let arr2 = str3;
        if (str5) {
          arr2 = str3;
          if ("/" !== str5) {
            const formatted = str3.toLowerCase();
            arr2 = str3;
            if (formatted.startsWith(str5.toLowerCase())) {
              let tmp6;
              const tmp3 = str5.endsWith("/") ? str5.length - 1 : str5.length;
              const charAtResult = pathname.pathname.charAt(tmp3);
              if (!charAtResult) {
                tmp6 = pathname.pathname.slice(tmp3) || "/";
                pathname.pathname.slice(tmp3) || "/";
              } else {
                tmp6 = str3;
              }
              arr2 = tmp6;
            }
          }
        }
        if (pathname.pathname === arr2) {
          let substr = arr2;
          if ("/" === arr2[arr2.length - 1]) {
            substr = arr2.slice(0, -1);
          }
          obj3 = { v: substr };
          const obj = { v: substr };
        } else {
          if (!str2) {
            str2 = "";
          }
          let substr1 = str2;
          if ("/" === str2[str2.length - 1]) {
            substr1 = str2.slice(0, -1);
          }
          const obj2 = { pathname: arr2 };
          const tmp11 = rebuildRoutePathFromAllRoutes(
            routes.filter((item) => item !== navigation.route),
            obj2,
          );
          let combined = tmp11;
          if ("/" !== tmp11[0]) {
            const _HermesInternal2 = HermesInternal;
            combined = "/" + tmp11;
          }
          const sum = substr1 + combined;
          let substr2 = sum;
          if ("/" === sum[sum.length - 1]) {
            substr2 = sum.slice(0, -1);
          }
          obj3 = { v: substr2 };
        }
        return obj3;
      }
    }
  }
  const pathname = _location;
  const arr = closure_2(routes, _location);
  if (arr) {
    if (0 !== arr.length) {
      for (const item10012 of arr) {
        let tmp3 = _loop(item10012);
        let tmp4 = tmp3;
        if (tmp4) {
          let v = tmp3.v;
          obj.return();
          return v;
        }
      }
      return "";
    }
  }
  return "";
}
function locationIsInsideDescendantRoute(_location, routes) {
  const tmp = React2(routes, _location);
  if (tmp) {
    for (const item10009 of tmp) {
      if (routeIsDescendant(item10009.route)) {
        if (pickSplat(item10009)) {
          obj.return();
          flag = true;
          return true;
        }
      }
      continue;
    }
  }
  return false;
}
function getFallbackTransactionName(pathname, basename) {
  let tmp;
  if (flag) {
    let tmp3 = str;
    if (basename) {
      tmp3 = str;
      if ("/" !== basename) {
        const formatted = str.toLowerCase();
        tmp3 = str;
        if (formatted.startsWith(basename.toLowerCase())) {
          let diff;
          let tmp7;
          if (basename.endsWith("/")) {
            diff = length - 1;
          } else {
            diff = length;
          }
          const charAtResult = pathname.pathname.charAt(diff);
          if (!charAtResult) {
            tmp7 = pathname.pathname.slice(diff) || "/";
            pathname.pathname.slice(diff) || "/";
          } else {
            tmp7 = str;
          }
          tmp3 = tmp7;
        }
      }
    }
    tmp = tmp3;
  } else {
    tmp = str || "";
  }
  return tmp;
}
function getNormalizedName(routes, pathname, items) {
  let str = basename;
  if (basename === undefined) {
    str = "";
  }
  if (routes) {
    if (0 !== routes.length) {
      const tmp42 = items;
      if (tmp42) {
        let str4 = "";
        const iter = items[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp7 = nextResult;
          let route = nextResult.route;
          let tmp8 = route;
          if (tmp8) {
            if (tmp8.index) {
              let tmp37 = sendIndexPath(``, nextResult.pathname, str);
              iter.return();
              return tmp37;
            } else {
              let path = tmp8.path;
              let tmp11 = path;
              if (tmp11) {
                if (!pathIsWildcardAndHasChildren(tmp11, tmp7)) {
                  if ("/" !== tmp11[0]) {
                    let combined;
                    if ("/" !== ``[``.length - 1]) {
                      let _HermesInternal = HermesInternal;
                      combined = "/" + tmp11;
                    }
                    let tmp19 = combined;
                    let tmp22 = trimSlash(str4);
                    str4 = tmp22 + prefixWithSlash(combined);
                    let tmp24 = trimSlash(pathname.pathname);
                    if (tmp24 === trimSlash(str + tmp7.pathname)) {
                      let tmp45 = getNumberOfUrlSegments(str4);
                      if (tmp45 !== getNumberOfUrlSegments(tmp7.pathname)) {
                        if (!pathEndsWithWildcard(str4)) {
                          let str6 = "";
                          if (!flag) {
                            str6 = str;
                          }
                          items = [str6 + tmp19];
                          let str7 = "route";
                          items[1] = "route";
                        }
                        iter.return();
                        return items;
                      }
                      if (pathIsWildcardAndHasChildren(str4, tmp7)) {
                        str4 = str4.slice(0, -1);
                      }
                      let str8 = "";
                      if (!flag) {
                        str8 = str;
                      }
                      let items1 = [str8 + str4];
                      let str9 = "route";
                      items1[1] = "route";
                      items = items1;
                    }
                  }
                  combined = path;
                }
              }
            }
          }
          continue;
        }
        const items2 = [getFallbackTransactionName(pathname, str), "url"];
        return items2;
      } else {
        const items3 = [getFallbackTransactionName(pathname, str), "url"];
        return items3;
      }
    }
  }
  if (flag) {
    pathname = stripBasenameFromPathname(pathname.pathname, str);
  } else {
    pathname = pathname.pathname;
  }
  const items4 = [pathname, "url"];
  return items4;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let flag = false;
let closure_5 = [];

export const clearNavigationContext = function clearNavigationContext(navigationContext) {
  let token;
  if (closure_5[closure_5.length - 1] != null) {
    token = tmp.token;
  }
  if (token === navigationContext) {
    closure_5.pop();
  }
};
export const getActiveRootSpan = function getActiveRootSpan() {
  const obj = _mod693;
  const activeSpan = obj.getActiveSpan();
  let rootSpan;
  if (activeSpan) {
    const tmpResult = _mod693;
    rootSpan = tmpResult.getRootSpan(activeSpan);
  }
  if (rootSpan) {
    let tmp5;
    const tmpResult2 = _mod693;
    const op = tmpResult2.spanToJSON(rootSpan).op;
    if ("navigation" === op) {
      tmp5 = rootSpan;
    }
    return tmp5;
  }
};
export const getNavigationContext = function getNavigationContext() {
  let tmp2 = null;
  if (closure_5.length > 0) {
    let tmp3 = tmp[length - 1];
    if (tmp3 == null) {
      tmp3 = null;
    }
    tmp2 = tmp3;
  }
  return tmp2;
};
export { getNormalizedName };
export { getNumberOfUrlSegments };
export function initializeRouterUtils(arg0) {
  if (flag === undefined) {
    flag = false;
  }
  let closure_1_2 = arg0;
}
export { locationIsInsideDescendantRoute };
export { pathEndsWithWildcard };
export { pathIsWildcardAndHasChildren };
export { prefixWithSlash };
export { rebuildRoutePathFromAllRoutes };
export const resolveRouteNameAndSource = function resolveRouteNameAndSource(_location, routes, routes2, items) {
  let str2;
  let tmp2;
  let str = basename;
  if (basename === undefined) {
    str = "";
  }
  const tmp = locationIsInsideDescendantRoute(_location, routes);
  str2 = "url";
  let pathname;
  if (tmp) {
    const tmp4 = rebuildRoutePathFromAllRoutes(routes, _location);
    let combined = tmp4;
    if ("/" !== tmp4[0]) {
      const _HermesInternal = HermesInternal;
      combined = "/" + tmp4;
    }
    str2 = "route";
    pathname = combined;
  }
  if (!tmp) {
    [tmp2, str2] = getNormalizedName(routes, _location, items, str);
    _slicedToArray(getNormalizedName(routes, _location, items, str), 2);
  }
  if (!pathname) {
    pathname = _location.pathname;
  }
  items = [pathname, str2];
  return items;
};
export { routeIsDescendant };
export const setNavigationContext = function setNavigationContext(path, activeRootSpan) {
  if (closure_5.length >= 10) {
    if (_mod1018.DEBUG_BUILD) {
      const debug = _mod693.debug;
      debug.warn("[React Router] Navigation context stack overflow - removing oldest context");
    }
    closure_5.shift();
  }
  const obj = {};
  const obj2 = { token: obj, targetPath: path, span: activeRootSpan };
  closure_5.push(obj2);
  return obj;
};
export const transactionNameHasWildcard = function transactionNameHasWildcard(description) {
  const hasItem = description.includes("/*") || description.endsWith("*");
  return hasItem;
};
