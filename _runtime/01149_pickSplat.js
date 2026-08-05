// _runtime/01149_pickSplat.js
import _slicedToArray from "_slicedToArray";
import { registerSpanErrorInstrumentation } from "00817_registerSpanErrorInstrumentation.js";
import { __SENTRY_DEBUG__ } from "metro/01142___SENTRY_DEBUG__.js";

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
  let flag = str.endsWith("*");
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
  if (!arg0) {
    let tmp3 = pathname;
    if (c4) {
      let tmp5 = pathname;
      if (basename) {
        tmp5 = pathname;
        if ("/" !== basename) {
          const formatted = pathname.toLowerCase();
          tmp5 = pathname;
          if (formatted.startsWith(basename.toLowerCase())) {
            if (basename.endsWith("/")) {
              let diff = length - 1;
            } else {
              diff = length;
            }
            const charAtResult = pathname.charAt(diff);
            if (!charAtResult) {
              let tmp9 = pathname.slice(diff) || "/";
              const tmp10 = pathname.slice(diff) || "/";
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
  let tmp11 = substr.length > 1;
  if (tmp11) {
    tmp11 = "/" === substr[substr.length - 1];
  }
  let substr1 = substr;
  if (tmp11) {
    substr1 = substr.slice(0, -1);
  }
  const items = [substr1, "route"];
  return items;
}
function getNumberOfUrlSegments(str) {
  const parts = str.split(/\\?\//);
  return parts.filter((arg0) => {
    let tmp = arg0.length > 0;
    if (tmp) {
      tmp = "," !== arg0;
    }
    return tmp;
  }).length;
}
function stripBasenameFromPathname(pathname, basename) {
  if (basename) {
    if ("/" !== basename) {
      const formatted = pathname.toLowerCase();
      if (formatted.startsWith(basename.toLowerCase())) {
        if (basename.endsWith("/")) {
          let diff = length - 1;
        } else {
          diff = length;
        }
        const charAtResult = pathname.charAt(diff);
        if (!charAtResult) {
          let tmp4 = pathname.slice(diff) || "/";
          const tmp5 = pathname.slice(diff) || "/";
        } else {
          tmp4 = pathname;
        }
        return tmp4;
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
function rebuildRoutePathFromAllRoutes(arg0, _location) {
  let closure_0 = arg0;
  let closure_1 = _location;
  const arr = callback(arg0, _location);
  if (arr) {
    if (0 !== arr.length) {
      for (const item10012 of arr) {
        let tmp3 = (function _loop(item10012) {
          let closure_0 = item10012;
          if (item10012.route.path) {
            if ("*" !== item10012.route.path) {
              let str2 = arr;
              if ("*" === item10012.route.path || ""[item10012.route.path || "".length - 1]) {
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
                    const tmp3 = str5.endsWith("/") ? str5.length - 1 : str5.length;
                    const charAtResult = str3.charAt(tmp3);
                    if (!charAtResult) {
                      let tmp6 = str3.slice(tmp3) || "/";
                      const tmp7 = str3.slice(tmp3) || "/";
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
                let obj = { v: null };
                obj[0] = substr;
                let obj1 = obj;
              } else {
                if (!str2) {
                  str2 = "";
                }
                let substr1 = str2;
                if ("/" === str2[str2.length - 1]) {
                  substr1 = str2.slice(0, -1);
                }
                obj = { pathname: null };
                obj[0] = arr2;
                const tmp11 = outer1_15(closure_0.filter((arg0) => arg0 !== item10012.route), obj);
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
                obj1 = { v: null };
                obj1[0] = substr2;
              }
              return obj1;
            }
          }
        })(item10012);
        let tmp4 = tmp3;
        if (tmp3) {
          let tmp5 = obj;
          obj.return();
          return tmp3.v;
        }
      }
      return "";
    }
  }
  return "";
}
function locationIsInsideDescendantRoute(_location, arg1) {
  const tmp = callback(arg1, _location);
  if (tmp) {
    for (const item10009 of tmp) {
      let tmp5 = routeIsDescendant;
      let tmp4 = item10009;
      if (routeIsDescendant(item10009.route)) {
        let tmp6 = pickSplat;
        let tmp7 = item10009;
        if (pickSplat(tmp4)) {
          let tmp8 = obj;
          obj.return();
          let flag = true;
          return true;
        }
      }
      continue;
    }
  }
  return false;
}
function getFallbackTransactionName(pathname, basename) {
  if (c4) {
    let tmp2 = str;
    if (basename) {
      tmp2 = str;
      if ("/" !== basename) {
        const formatted = str.toLowerCase();
        tmp2 = str;
        if (formatted.startsWith(basename.toLowerCase())) {
          if (basename.endsWith("/")) {
            let diff = length - 1;
          } else {
            diff = length;
          }
          const charAtResult = str.charAt(diff);
          if (!charAtResult) {
            let tmp6 = str.slice(diff) || "/";
            const tmp7 = str.slice(diff) || "/";
          } else {
            tmp6 = str;
          }
          tmp2 = tmp6;
        }
      }
    }
    let str2 = tmp2;
  } else {
    str2 = str;
    if (!str) {
      str2 = "";
    }
  }
  return str2;
}
function getNormalizedName(arg0, pathname, items, basename) {
  let str = basename;
  if (basename === undefined) {
    str = "";
  }
  if (arg0) {
    if (0 !== arg0.length) {
      if (items) {
        let str4 = "";
        const iter = items[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp7 = nextResult;
          let route = nextResult.route;
          let tmp8 = route;
          if (route) {
            let tmp9 = route;
            if (tmp8.index) {
              let tmp36 = sendIndexPath;
              let tmp38 = iter;
              let tmp37 = sendIndexPath(``, nextResult.pathname, str);
              iter.return();
              return tmp37;
            } else {
              let tmp10 = route;
              let path = tmp8.path;
              let tmp11 = path;
              if (path) {
                let tmp13 = path;
                let tmp14 = nextResult;
                let tmp12 = pathIsWildcardAndHasChildren;
                if (!pathIsWildcardAndHasChildren(tmp11, tmp7)) {
                  let tmp15 = path;
                  if ("/" !== tmp11[0]) {
                    let tmp16 = str4;
                    if ("/" !== ``[``.length - 1]) {
                      let tmp17 = path;
                      let _HermesInternal = HermesInternal;
                      let combined = "/" + tmp11;
                    }
                    let tmp20 = trimSlash;
                    let tmp21 = str4;
                    let tmp19 = combined;
                    let tmp23 = prefixWithSlash;
                    let tmp22 = trimSlash(str4);
                    str4 = tmp22 + prefixWithSlash(combined);
                    let tmp25 = nextResult;
                    let tmp24 = trimSlash(pathname.pathname);
                    if (tmp24 === trimSlash(str + tmp7.pathname)) {
                      let tmp42 = getNumberOfUrlSegments;
                      let tmp43 = str4;
                      let tmp45 = nextResult;
                      let tmp44 = getNumberOfUrlSegments(str4);
                      if (tmp44 !== getNumberOfUrlSegments(tmp7.pathname)) {
                        let tmp26 = pathEndsWithWildcard;
                        let tmp27 = str4;
                        if (!pathEndsWithWildcard(str4)) {
                          let tmp28 = c4;
                          let str6 = "";
                          if (!c4) {
                            str6 = str;
                          }
                          let tmp29 = combined;
                          items = [str6 + tmp19, ];
                          let str7 = "route";
                          items[1] = "route";
                        }
                        let tmp35 = iter;
                        iter.return();
                        return items;
                      }
                      let tmp30 = str4;
                      let tmp31 = nextResult;
                      if (tmp12(str4, tmp7)) {
                        let tmp32 = str4;
                        let num3 = -1;
                        str4 = str4.slice(0, -1);
                      }
                      let tmp33 = c4;
                      let str8 = "";
                      if (!c4) {
                        str8 = str;
                      }
                      let tmp34 = str4;
                      let items1 = [str8 + str4, ];
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
  if (c4) {
    pathname = stripBasenameFromPathname(pathname.pathname, str);
  } else {
    pathname = pathname.pathname;
  }
  const items4 = [pathname, "url"];
  return items4;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let c4 = false;
let closure_5 = [];

export const clearNavigationContext = function clearNavigationContext(c1) {
  let arr = closure_5;
  let token;
  if (closure_5[closure_5.length - 1] != null) {
    token = tmp.token;
  }
  if (token === c1) {
    arr = arr.pop();
  }
};
export const getActiveRootSpan = function getActiveRootSpan() {
  const activeSpan = registerSpanErrorInstrumentation.getActiveSpan();
  let rootSpan;
  if (activeSpan) {
    let tmpResult = tmp(817);
    rootSpan = tmpResult.getRootSpan(activeSpan);
  }
  if (rootSpan) {
    tmpResult = tmp(817);
    const op = tmpResult.spanToJSON(rootSpan).op;
    if ("navigation" === op) {
      const tmp5 = rootSpan;
    }
    return tmp5;
  }
  const obj = registerSpanErrorInstrumentation;
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
export function initializeRouterUtils(arg0, flag) {
  if (flag === undefined) {
    flag = false;
  }
  let closure_2 = arg0;
}
export { locationIsInsideDescendantRoute };
export { pathEndsWithWildcard };
export { pathIsWildcardAndHasChildren };
export { prefixWithSlash };
export { rebuildRoutePathFromAllRoutes };
export const resolveRouteNameAndSource = function resolveRouteNameAndSource(_location, arg1, arg2, items, basename) {
  let str2;
  let tmp2;
  let str = basename;
  if (basename === undefined) {
    str = "";
  }
  const tmp = locationIsInsideDescendantRoute(_location, arg2);
  str2 = "url";
  let pathname;
  if (tmp) {
    const tmp4 = rebuildRoutePathFromAllRoutes(arg2, _location);
    let combined = tmp4;
    if ("/" !== tmp4[0]) {
      const _HermesInternal = HermesInternal;
      combined = "/" + tmp4;
    }
    str2 = "route";
    pathname = combined;
  }
  if (!tmp) {
    [tmp2, str2] = _slicedToArray(getNormalizedName(arg1, _location, items, str), 2);
    const tmp13 = _slicedToArray(getNormalizedName(arg1, _location, items, str), 2);
  }
  if (!pathname) {
    pathname = _location.pathname;
  }
  items = [pathname, str2];
  return items;
};
export { routeIsDescendant };
export const setNavigationContext = function setNavigationContext(outer1_1, outer1_2) {
  let arr = closure_5;
  if (closure_5.length >= 10) {
    if (__SENTRY_DEBUG__.DEBUG_BUILD) {
      const debug = tmp(817).debug;
      debug.warn("[React Router] Navigation context stack overflow - removing oldest context");
    }
    arr = arr.shift();
    tmp = require;
  }
  let obj = {};
  obj = { token: obj, targetPath: outer1_1, span: outer1_2 };
  arr = arr.push(obj);
  return obj;
};
export const transactionNameHasWildcard = function transactionNameHasWildcard(description) {
  let hasItem = description.includes("/*");
  if (!hasItem) {
    hasItem = description.endsWith("*");
  }
  return hasItem;
};