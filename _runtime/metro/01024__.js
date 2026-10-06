// === Module 1024: ? ===

// Module 1024
import _mod693 from "module_693" /* 693 */;
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 900 */;
import _mod1018 from "module_1018" /* 1018 */;
import _mod1025 from "module_1025" /* 1025 */;
import _mod1026 from "module_1026" /* 1026 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;

const require = globalThis.__r;
let _require, c1, closure_4, closure_5, closure_6, closure_7, closure_8, createElement, dependencyMap;

const f82983 = (children) => {
  const f82984 = function(children) {
    if (set === undefined) {
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set();
    }
    if (!set.has(children)) {
      set.add(children);
      const tmp3 = children.children && !children.index;
      if (tmp3) {
        children = children.children;
        const item = children.forEach(f82984);
      }
    }
    const item1 = set.forEach((item) => {
      set.add(item);
    });
  };
  set = new Set();
  if (!set.has(children)) {
    const addResult = set.add(children);
    const tmp2 = children.children && !children.index;
    if (tmp2) {
      children = children.children;
      let item = children.forEach(f82984);
    }
  }
  let item1 = set.forEach((item) => {
    set.add(item);
  });
};
function computeLocationKey(_location) {
  let pathname;
  let search;
  ({ search, pathname } = _location);
  if (!search) {
    search = "";
  }
  const tmp = _location.hash || "";
  return "" + pathname + search + tmp;
}
function shouldSkipNavigation(locationKey, locationKey2, arr, timestamp) {
  const tmp = locationKey;
  if (tmp) {
    if (locationKey.locationKey === locationKey) {
      let result = locationKey.routeName;
      if (result) {
        const obj = _mod1025;
        result = obj.transactionNameHasWildcard(locationKey.routeName);
      }
      const obj2 = _mod1025;
      const result1 = obj2.transactionNameHasWildcard(arr);
      let routeName3 = locationKey.routeName;
      if (routeName3) {
        const routeName = locationKey.routeName;
        const hasItem = routeName.includes(":") || routeName.includes("*");
        routeName3 = hasItem;
      }
      const hasItem1 = arr.includes(":") || arr.includes("*");
      if (result) {
        result = !result1;
      }
      let tmp15 = arr !== locationKey.routeName;
      const tmp14 = !routeName3 && hasItem1;
      if (tmp15) {
        const routeName1 = locationKey.routeName;
        num = undefined;
        const length = arr.length;
        if (routeName1 != null) {
          num = routeName1.length;
        }
        if (!num) {
          num = 0;
        }
        tmp15 = length > num;
      }
      if (tmp15) {
        tmp15 = !result1;
      }
      const routeName2 = locationKey.routeName;
      let tmp17 = !routeName2;
      if (routeName2) {
        if (!result) {
          result = tmp14;
        }
        if (!result) {
          result = tmp15;
        }
        tmp17 = !result;
      }
      return { skip: true, shouldUpdate: !tmp17 };
    }
    return { skip: false, shouldUpdate: false };
  } else {
    return { skip: false, shouldUpdate: false };
  }
}
function processResolvedRoutes(arr, children, arg2) {
  let activeRootSpan;
  let obj5;
  let tmp2 = arg2;
  if (arg2 === undefined) {
    tmp2 = null;
  }
  const item = arr.forEach((item) => {
    set.add(item);
    if (closure_1_10) {
      const obj = require("module_1026");
      const result = obj.checkRouteForAsyncHandler(item, processResolvedRoutes);
    }
  });
  if (children) {
    const tmp4 = children.children || [];
    let closure_0 = tmp4;
    const found = arr.filter((item) => {
      closure_0 = item;
      return !closure_0.some((path) => {
        let tmp2 = path === user;
        if (!tmp2) {
          tmp2 = user.path && path.path === user.path;
        }
        if (!tmp2) {
          tmp2 = user.id && path.id === user.id;
        }
        return tmp2;
      });
    });
    if (found.length > 0) {
      const items = [];
      HermesBuiltin.arraySpread(items, found, HermesBuiltin.arraySpread(items, tmp4, 0));
      children.children = items;
    }
  }
  if (activeRootSpan == null) {
    let obj = _mod1025;
    activeRootSpan = obj.getActiveRootSpan();
  }
  if (activeRootSpan) {
    const obj2 = _mod693;
    const spanToJSONResult = obj2.spanToJSON(activeRootSpan);
    if (spanToJSONResult.timestamp) {
      if (_mod1018.DEBUG_BUILD) {
        const debug = _mod693.debug;
        debug.warn("[React Router] Lazy handler resolved after span ended - skipping update");
      }
    } else {
      const op = spanToJSONResult.op;
      let tmp16 = tmp2;
      if (!tmp16) {
        tmp16 = tmp2;
        if (!activeRootSpan) {
          tmp16 = tmp2;
          if (undefined !== feedbackAsyncIntegration.WINDOW) {
            const _location = feedbackAsyncIntegration.WINDOW.location;
            let pathname;
            if (_location != null) {
              pathname = _location.pathname;
            }
            tmp16 = tmp2;
            if (pathname) {
              tmp16 = { pathname: _location.pathname };
              const obj3 = { pathname: _location.pathname };
            }
          }
        }
      }
      if (tmp16) {
        if ("pageload" === op) {
          const obj4 = { activeRootSpan, location: obj5, routes: Array.from(set), allRoutes: Array.from(set) };
          const _Array = Array;
          const _Array2 = Array;
          obj5 = { pathname: tmp16.pathname };
          updatePageloadTransaction(obj4);
        } else if ("navigation" === op) {
          const _Array3 = Array;
          updateNavigationSpan(activeRootSpan, tmp16, Array.from(set), false, closure_8);
        }
      }
    }
  }
}
function updateNavigationSpan(activeRootSpan, _location, routes) {
  let tmp18;
  let tmp19;
  const obj = _mod693;
  const spanToJSONResult = obj.spanToJSON(activeRootSpan);
  const description = spanToJSONResult.description;
  let prop;
  if (activeRootSpan != null) {
    prop = activeRootSpan.__sentry_navigation_name_set__;
  }
  let result = description;
  if (result) {
    const tmpResult = _mod1025;
    result = tmpResult.transactionNameHasWildcard(description);
  }
  if (!spanToJSONResult.timestamp) {
    let tmp20;
    const tmp9 = fn(routes, _location);
    let items = tmp9;
    const resolveRouteNameAndSource = _mod1025.resolveRouteNameAndSource;
    const tmpResult4 = _mod1025;
    if (!tmp9) {
      items = [];
    }
    [tmp18, tmp19] = resolveRouteNameAndSource(_location, routes, routes, items, "");
    const data = spanToJSONResult.data;
    _slicedToArray(resolveRouteNameAndSource(_location, routes, routes, items, ""), 2);
    if (data != null) {
      tmp20 = data[_mod693.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
    }
    let tmp21 = tmp18;
    if (tmp21) {
      let tmp22 = !description;
      if (description) {
        let tmp23 = !prop;
        if (tmp23) {
          tmp23 = "route" !== tmp20 || "route" === tmp19;
        }
        tmp22 = tmp23;
      }
      if (!tmp22) {
        tmp22 = "route" !== tmp20 && "route" === tmp19;
      }
      if (!tmp22) {
        tmp22 = "route" === tmp20 && "route" === tmp19 && result;
      }
      tmp21 = tmp22;
    }
    if (tmp21) {
      activeRootSpan.updateName(tmp18);
      const attr = activeRootSpan.setAttribute(_mod693.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, tmp19);
      const tmpResult5 = _mod1025;
      const result1 = tmpResult5.transactionNameHasWildcard(tmp18) || "route" !== tmp19;
      if (!result1) {
        const tmpResult6 = _mod693;
        const result2 = tmpResult6.addNonEnumerableProperty(activeRootSpan, "__sentry_navigation_name_set__", true);
      }
    }
  }
}
function setupRouterSubscription(subscribe, routes, arg2, basename, activeRootSpan) {
  let closure_1;
  _require = routes;
  dependencyMap = arg2;
  let c3 = false;
  let tmp = activeRootSpan;
  if (tmp) {
    let obj = require("module_693");
    tmp = "pageload" === obj.spanToJSON(activeRootSpan).op;
  }
  closure_4 = tmp;
  let c5 = false;
  let c6 = null;
  closure_7 = null;
  const subscription = subscribe.subscribe((historyAction) => {
    let pathname;
    let search;
    routes = historyAction;
    const tmp = c3;
    if (!tmp) {
      let c4;
      let obj = routes(version[4]);
      const activeRootSpan = obj.getActiveRootSpan();
      if (activeRootSpan) {
        const obj2 = routes(version[6]);
        if ("pageload" === obj2.spanToJSON(activeRootSpan).op) {
          c4 = true;
        }
      }
      const tmp7 = c4;
      if (tmp7) {
        if ("POP" === historyAction.historyAction) {
          const tmp8 = c5;
          if (!tmp8) {
            c5 = true;
          }
        }
        c3 = true;
      }
    }
    if ("PUSH" === historyAction.historyAction) {
      const _location = historyAction.location;
      ({ search, pathname } = _location);
      if (!search) {
        search = "";
      }
      const _HermesInternal = HermesInternal;
      const tmp9 = _location.hash || "";
      let combined = "" + pathname + search + tmp9;
      if ("idle" !== historyAction.navigation.state) {
        let animationFrame;
        if (combined !== combined) {
          combined = null;
        }
        if (null !== c6) {
          const WINDOW3 = routes(version[3]).WINDOW;
          let _cancelAnimationFrame;
          const tmp22 = routes;
          if (WINDOW3 != null) {
            _cancelAnimationFrame = WINDOW3.cancelAnimationFrame;
          }
          if (_cancelAnimationFrame) {
            const WINDOW4 = tmp22(version[3]).WINDOW;
            WINDOW4.cancelAnimationFrame(c6);
          } else {
            const _clearTimeout2 = clearTimeout;
            clearTimeout(c6);
          }
        }
        const WINDOW5 = routes(version[3]).WINDOW;
        let prop;
        if (WINDOW5 != null) {
          prop = WINDOW5.requestAnimationFrame;
        }
        function navigationHandler() {
          if (closure_7 !== combined) {
            closure_7 = combined;
            c6 = null;
            const _Array = Array;
            const obj = { location: routes.location, routes, navigationType: routes.historyAction, version, basename, allRoutes: Array.from(set) };
            handleNavigation(obj);
          }
        }
        if (prop) {
          const WINDOW6 = routes(version[3]).WINDOW;
          animationFrame = WINDOW6.requestAnimationFrame(navigationHandler);
        } else {
          const _setTimeout = setTimeout;
          animationFrame = setTimeout(navigationHandler, 0);
        }
        c6 = animationFrame;
      } else {
        if (null !== c6) {
          const WINDOW = routes(version[3]).WINDOW;
          let _cancelAnimationFrame1;
          const tmp12 = routes;
          if (WINDOW != null) {
            _cancelAnimationFrame1 = WINDOW.cancelAnimationFrame;
          }
          if (_cancelAnimationFrame1) {
            const WINDOW2 = tmp12(version[3]).WINDOW;
            WINDOW2.cancelAnimationFrame(c6);
          } else {
            const _clearTimeout = clearTimeout;
            clearTimeout(c6);
          }
          c6 = null;
        }
        if (combined !== combined) {
          c6 = null;
          let _Array = Array;
          const obj3 = { location: historyAction.location, routes, navigationType: historyAction.historyAction, version: combined, basename, allRoutes: Array.from(set) };
          handleNavigation(obj3);
        }
      }
    }
  });
}
function wrapPatchRoutesOnNavigation(basename, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let obj = basename;
  let closure_1;
  let patchRoutesOnNavigation;
  if (basename) {
    let str = "patchRoutesOnNavigation";
    if ("patchRoutesOnNavigation" in obj) {
      if (typeof obj.patchRoutesOnNavigation === "function") {
        patchRoutesOnNavigation = obj.patchRoutesOnNavigation;
        let obj2 = {
          patchRoutesOnNavigation(arg0) {
                  return closure_1(...arguments);
                }
        };
        const tmp = obj2;
        let tmp2 = obj;
        const merged = Object.assign(obj);
        const tmp4 = patchRoutesOnNavigation;
        closure_1 = patchRoutesOnNavigation(function*(arg0) {
          let tmp2;
          let value;
          function trackLazyRouteLoad(activeRootSpan, promise) {
            closure_0 = activeRootSpan;
            closure_1 = promise;
            let value = closure_15.get(activeRootSpan);
            if (!value) {
              const _Set = Set;
              const self = this;
              const self2 = this;
              set = new Set();
              const result = closure_15.set(activeRootSpan, set);
              value = set;
            }
            value.add(promise);
            promise.finally(() => {
              const value = closure_2_15.get(activeRootSpan);
              if (value) {
                value.delete(promise);
              }
            });
          }
          let closure_0 = arg0;
          if (c1 === 2) {
            c1 = 3;
            const str = "Generator functions may not be called on executing generators";
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp2 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              let obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              c1 = 2;
              if (arg0 === 1) {
                c1 = 3;
                throw value;
              } else if (arg0 === 2) {
                c1 = 3;
                let obj3 = { value, done: true };
                return obj3;
              } else {
                let path;
                if (closure_0 != null) {
                  path = closure_0.path;
                }
                let obj = closure_0(c1[4]);
                let activeRootSpan = obj.getActiveRootSpan();
                if (!flag) {
                  let patch;
                  if (closure_0 != null) {
                    patch = closure_0.patch;
                  }
                  if (patch) {
                    closure_0.patch = (arg0, arr) => {
                      let item = arr.forEach(f82983);
                      const obj = closure_0(path[4]);
                      activeRootSpan = obj.getActiveRootSpan();
                      let tmp6 = path && activeRootSpan;
                      if (tmp6) {
                        const tmp2Result = closure_0(path[6]);
                        tmp6 = "navigation" === tmp2Result.spanToJSON(activeRootSpan).op;
                      }
                      if (tmp6) {
                        const _Array = Array;
                        const obj2 = { pathname: path, search: "", hash: "", state: null, key: "default" };
                        closure_3_19(activeRootSpan, obj2, Array.from(closure_3_14), true, closure_3_8);
                      }
                      return patch(arg0, arr);
                    };
                  }
                }
                const tmp10 = patchRoutesOnNavigation(function*() {
                  let closure_2;
                  if (c5 === 2) {
                    c5 = 3;
                    throw new TypeError("Generator functions may not be called on executing generators");
                  } else if (tmp3 === 3) {
                    if (arg0 === 1) {
                      throw value;
                    } else if (arg0 === 2) {
                      const obj2 = { value, done: true };
                      return obj2;
                    } else {
                      return { value: "IconComponent", done: null };
                    }
                  } else {
                    let c3;
                    try {
                      let spanToJSON;
                      let pathname;
                      let navigationContext;
                      c5 = 2;
                      if (0 === c4) {
                        if (arg0 === 1) {
                          c5 = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          c5 = 3;
                          const obj4 = { value, done: true };
                          return obj4;
                        } else {
                          spanToJSON = undefined;
                          pathname = undefined;
                          const obj6 = spanToJSON(path[4]);
                          navigationContext = obj6.setNavigationContext(path, activeRootSpan);
                          c3 = 1;
                          spanToJSON = tmp44(spanToJSON);
                          c4 = 2;
                          c5 = 1;
                          const obj7 = { value: spanToJSON, done: false };
                          return obj7;
                        }
                      } else if (1 === tmp4) {
                        c3 = 0;
                        const obj5 = spanToJSON(path[4]);
                        spanToJSON = obj5.clearNavigationContext(navigationContext);
                        throw tmp44;
                      } else if (arg0 === 1) {
                        c5 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c3 = 0;
                        const obj3 = spanToJSON(path[4]);
                        const result = obj3.clearNavigationContext(navigationContext);
                        c5 = 3;
                        const obj8 = { value, done: true };
                        return obj8;
                      } else {
                        spanToJSON = value;
                        c3 = 0;
                        const obj10 = spanToJSON(path[4]);
                        const result1 = obj10.clearNavigationContext(navigationContext);
                        const obj11 = spanToJSON(path[4]);
                        spanToJSON = obj11.getActiveRootSpan();
                        const tmp62 = spanToJSON;
                        if (tmp62) {
                          const tmp9 = spanToJSON(path[6]);
                          spanToJSON = tmp9.spanToJSON;
                          if ("navigation" === spanToJSON(spanToJSON).op) {
                            let tmp11;
                            spanToJSON = closure_129_1;
                            if (spanToJSON) {
                              tmp11 = spanToJSON;
                            } else {
                              tmp11 = spanToJSON;
                              if (!tmp11) {
                                const _location = spanToJSON(path[3]).WINDOW.location;
                                pathname = undefined;
                                if (_location != null) {
                                  pathname = _location.pathname;
                                }
                                tmp11 = pathname;
                              }
                            }
                            pathname = tmp11;
                            const tmp15 = pathname;
                            if (tmp15) {
                              const obj = { pathname, search: "", hash: "", state: null, key: "default" };
                              const _Array = Array;
                              spanToJSON = closure_2_14;
                              closure_2_19(spanToJSON, obj, Array.from(closure_2_14), false, closure_2_8);
                            }
                          }
                        }
                        c5 = 3;
                        const obj9 = { value: spanToJSON, done: true };
                        return obj9;
                      }
                    } catch (tmp44) {
                      if (0 === c3) {
                        c5 = 3;
                        throw tmp44;
                      } else {
                        c4 = 1;
                      }
                    }
                  }
                })();
                if (activeRootSpan) {
                  let tmp11 = trackLazyRouteLoad(activeRootSpan, tmp10);
                }
                c1 = 3;
                let obj4 = { value: tmp10, done: true };
                return obj4;
              }
            } catch (tmp12) {
              c1 = 3;
              throw tmp12;
            }
          }
        });
        return obj2;
      }
    }
  }
  if (!obj) {
    obj = {};
  }
  return obj;
}
function handleNavigation(version) {
  let _location;
  let allRoutes;
  let basename;
  let matches;
  let navigationType;
  let obj3;
  let obj6;
  let routes;
  let tmp20;
  let tmp21;
  ({ location: _location, routes, navigationType, matches, basename, allRoutes } = version);
  version = version.version;
  let tmp = matches;
  if (!Array.isArray(matches)) {
    const tmp3 = allRoutes || routes;
    tmp = closure_8(tmp3, _location, basename);
  }
  const obj = _mod693;
  const client = obj.getClient();
  if (client) {
    if (weakSet.has(client)) {
      const tmp4Result = _mod1025;
      const activeRootSpan = tmp4Result.getActiveRootSpan();
      if (activeRootSpan) {
        _mod693;
      }
      if ("PUSH" === navigationType) {
        if (tmp) {
          let tmp10 = allRoutes;
          const resolveRouteNameAndSource = _mod1025.resolveRouteNameAndSource;
          const tmp4Result7 = _mod1025;
          if (!allRoutes) {
            tmp10 = routes;
          }
          [tmp20, tmp21] = resolveRouteNameAndSource(_location, tmp10, allRoutes || routes, tmp, basename);
          _slicedToArray(resolveRouteNameAndSource(_location, tmp10, allRoutes || routes, tmp, basename), 2);
          const tmp23 = computeLocationKey(_location);
          const value = weakMap.get(client);
          let isPlaceholder = !value;
          if (value) {
            isPlaceholder = value.isPlaceholder;
          }
          let timestamp = !isPlaceholder;
          if (timestamp) {
            const tmp4Result8 = _mod693;
            timestamp = tmp4Result8.spanToJSON(value.span).timestamp;
          }
          const tmp25Result = shouldSkipNavigation(value, tmp23, tmp20, timestamp);
          if (tmp25Result.skip) {
            if (tmp25Result.shouldUpdate) {
              if (value) {
                const routeName = value.routeName;
                if (value.isPlaceholder) {
                  value.routeName = tmp20;
                  if (_mod1018.DEBUG_BUILD) {
                    const debug3 = _mod693.debug;
                    const _HermesInternal4 = HermesInternal;
                    debug3.log("[Tracing] Updated placeholder navigation name from \"" + routeName + "\" to \"" + tmp20 + "\" (will apply to real span)");
                  }
                } else {
                  const span = value.span;
                  span.updateName(tmp20);
                  const span2 = value.span;
                  const attr = span2.setAttribute(_mod693.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, tmp21);
                  const tmp4Result9 = _mod693;
                  const result = tmp4Result9.addNonEnumerableProperty(value.span, "__sentry_navigation_name_set__", true);
                  value.routeName = tmp20;
                  if (_mod1018.DEBUG_BUILD) {
                    const debug2 = _mod693.debug;
                    const _HermesInternal3 = HermesInternal;
                    debug2.log("[Tracing] Updated navigation span name from \"" + routeName + "\" to \"" + tmp20 + "\"");
                  }
                }
              }
            }
            if (_mod1018.DEBUG_BUILD) {
              const debug = _mod693.debug;
              const _HermesInternal2 = HermesInternal;
              debug.log("[Tracing] Skipping duplicate navigation for location: " + tmp23);
            }
          } else {
            const obj2 = { span: obj3, routeName: tmp20, pathname: _location.pathname, locationKey: tmp23, isPlaceholder: true };
            obj3 = {
              end() {

                        }
            };
            const result1 = weakMap.set(client, obj2);
            try {
              const obj5 = { name: obj2.routeName, attributes: obj6 };
              obj6 = {};
              const startBrowserTracingNavigationSpan = feedbackAsyncIntegration.startBrowserTracingNavigationSpan;
              obj6[_mod693.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = tmp21;
              obj6[_mod693.SEMANTIC_ATTRIBUTE_SENTRY_OP] = "navigation";
              const _HermesInternal = HermesInternal;
              feedbackAsyncIntegration;
              obj6[_mod693.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.navigation.react.reactrouter_v" + version;
              const result2 = startBrowserTracingNavigationSpan(client, obj5);
              const tmp35 = result2;
              if (tmp35) {
                const obj7 = { span: result2, routeName: obj2.routeName, pathname: _location.pathname, locationKey: tmp23 };
                const result3 = weakMap.set(client, obj7);
                patchSpanEnd(result2, _location, routes, basename, allRoutes, "navigation");
              } else {
                weakMap.delete(client);
              }
            } catch (tmp45) {
              weakMap.delete(client);
              throw tmp45;
            }
          }
        }
      }
    }
  }
}
function addRoutesToAllRoutes(arr) {
  const item = arr.forEach(f82983);
}
function updatePageloadTransaction(arg0) {
  let _location;
  let activeRootSpan;
  let allRoutes;
  let basename;
  let matches;
  let routes;
  let tmp17;
  let tmp18;
  ({ activeRootSpan, location: _location, routes, matches, basename, allRoutes } = arg0);
  let tmp = matches;
  if (!Array.isArray(matches)) {
    const tmp3 = allRoutes || routes;
    tmp = closure_8(tmp3, _location, basename);
  }
  if (tmp) {
    let tmp7 = allRoutes;
    const resolveRouteNameAndSource = activeRootSpan(_location[4]).resolveRouteNameAndSource;
    const tmp6 = activeRootSpan(_location[4]);
    if (!allRoutes) {
      tmp7 = routes;
    }
    [tmp17, tmp18] = basename(resolveRouteNameAndSource(_location, tmp7, allRoutes || routes, tmp, basename), 2);
    basename(resolveRouteNameAndSource(_location, tmp7, allRoutes || routes, tmp, basename), 2);
    const tmp4Result = activeRootSpan(_location[6]);
    const currentScope = tmp4Result.getCurrentScope();
    let str = tmp17;
    const setTransactionName = currentScope.setTransactionName;
    if (!tmp17) {
      str = "/";
    }
    setTransactionName(str);
    if (activeRootSpan) {
      activeRootSpan.updateName(tmp17);
      const attr = activeRootSpan.setAttribute(activeRootSpan(_location[6]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, tmp18);
      const pageload = "pageload";
      closure_6 = undefined;
      let c7;
      const _HermesInternal = HermesInternal;
      const combined = "__sentry_" + "pageload" + "_end_patched__";
      let tmp25;
      if (activeRootSpan != null) {
        tmp25 = activeRootSpan[combined];
      }
      if (!tmp25) {
        if (activeRootSpan.end) {
          if (allRoutes) {
            const _Set = Set;
            const self = this;
            const self2 = this;
            new Set(allRoutes);
          }
          const end = activeRootSpan.end;
          closure_6 = end.bind(activeRootSpan);
          c7 = false;
          activeRootSpan.end = function patchedEnd() {
            let data;
            let description;
            const f134864 = (arg0) => setTimeout(arg0, closure_1_11);
            const items = [...arguments];
            let first;
            let cleanupNavigationSpan;
            const tmp = c7;
            if (!tmp) {
              c7 = true;
              if (items.length > 0) {
                first = items[0];
              } else {
                const _Date = Date;
                first = Date.now() / 1000;
              }
              let obj = result2(_location[6]);
              let tmp6 = first;
              let spanToJSONResult = obj.spanToJSON(first);
              ({ description, data } = spanToJSONResult);
              if (data != null) {
                let tmp9 = data[result2(undefined, _location[6]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
              }
              cleanupNavigationSpan = function cleanupNavigationSpan() {

              };
              let value = weakMap1.get(tmp6);
              if (value) {
                if (value.size > 0) {
                  if (description) {
                    const tmp4Result = result2(_location[4]);
                    if (0 === num) {
                      tryUpdateSpanNameBeforeEnd(tmp6, spanToJSONResult, description, cleanupNavigationSpan, closure_2, closure_3, closure_4, set);
                      const tmp4Result3 = result2(_location[6]);
                      let client = tmp4Result3.getClient();
                      if (client) {
                        if ("navigation" === closure_4) {
                          const value3 = weakMap.get(client);
                          const tmp46 = value3 && value3.span === tmp6;
                          if (tmp46) {
                            weakMap.delete(client);
                          }
                        }
                      }
                      closure_6(first);
                    } else {
                      const allSettledResult = Promise.allSettled(value);
                      const nextPromise = allSettledResult.then(() => {

                      });
                      let raceResult = nextPromise;
                      if (num !== Infinity) {
                        const items1 = [nextPromise, ];
                        const self = this;
                        const self2 = this;
                        items1[1] = new Promise(f134864);
                        const promise = new Promise(f134864);
                        raceResult = race(items1);
                      }
                      const nextPromise1 = raceResult.then(() => {
                        const obj = _mod693;
                        const spanToJSONResult = obj.spanToJSON(result2);
                        tryUpdateSpanNameBeforeEnd(result2, spanToJSONResult, spanToJSONResult.description, _location, routes, basename, navigation, set);
                        if (typeof cleanupNavigationSpan === "function") {
                          const tmpResult = _mod693;
                          const client = tmpResult.getClient();
                          if (client) {
                            if ("navigation" === navigation) {
                              const value = weakMap.get(client);
                              const tmp9 = value && value.span === result2;
                              if (tmp9) {
                                weakMap.delete(client);
                              }
                            }
                          }
                          closure_6(first);
                        } else {
                          throw new TypeError("Trying to call a non-function");
                        }
                      });
                      nextPromise1.catch(() => {
                        if (typeof cleanupNavigationSpan === "function") {
                          const obj = _mod693;
                          const client = obj.getClient();
                          if (client) {
                            if ("navigation" === navigation) {
                              const value = weakMap.get(client);
                              const tmp6 = value && value.span === result2;
                              if (tmp6) {
                                weakMap.delete(client);
                              }
                            }
                          }
                          closure_6(first);
                        } else {
                          throw new TypeError("Trying to call a non-function");
                        }
                      });
                    }
                  }
                }
              }
              tryUpdateSpanNameBeforeEnd(tmp6, spanToJSONResult, description, cleanupNavigationSpan, closure_2, closure_3, closure_4, set);
              const tmp4Result4 = result2(_location[6]);
              const client1 = tmp4Result4.getClient();
              if (client1) {
                if ("navigation" === closure_4) {
                  const value4 = weakMap.get(client1);
                  const tmp25 = value4 && value4.span === tmp6;
                  if (tmp25) {
                    weakMap.delete(client1);
                  }
                }
              }
              closure_6(first);
            }
          };
          const tmp4Result2 = activeRootSpan(_location[6]);
          const result = tmp4Result2.addNonEnumerableProperty(activeRootSpan, combined, true);
        }
      }
    }
  }
}
function tryUpdateSpanNameBeforeEnd(updateName, spanToJSONResult, description, _location, routes, basename, navigation, set) {
  let first;
  function shouldUpdateWildcardSpanName(description, arg1, description2, arg3, arg4) {
    let flag = arg4;
    if (arg4 === undefined) {
      flag = false;
    }
    let tmp = description;
    if (tmp) {
      let tmp5 = !tmp3;
      if (description || !flag) {
        let result = !description;
        if (description) {
          const obj = require("module_1025");
          result = !obj.transactionNameHasWildcard(description);
        }
        if (!result) {
          result = "route" !== arg3;
        }
        if (!result) {
          const obj2 = require("module_1025");
          result = obj2.transactionNameHasWildcard(description);
        }
        tmp5 = !result;
      }
      if (!tmp5) {
        tmp5 = "route" !== arg1 && "route" === arg3;
      }
      tmp = tmp5;
    }
    return tmp;
  }
  try {
    let tmp = spanToJSONResult;
    const data = spanToJSONResult.data;
    let tmp3;
    if (data != null) {
      tmp3 = data[_mod693.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
    }
    const tmp9 = tmp3;
    if ("route" === tmp3) {
      if (description) {
        let obj = _mod1025;
      }
    }
    let tmp14 = routes;
    const _Array = Array;
    const arr = Array.from(set);
    if (arr.length > 0) {
      tmp14 = arr;
    }
    const tmp22 = closure_8(tmp14, _location, basename);
    if (tmp22) {
      let obj2 = _mod1025;
      [first] = obj2.resolveRouteNameAndSource(_location, tmp14, tmp14, tmp23, basename);
      let flag = true;
      let tmp45 = shouldUpdateWildcardSpanName(description, tmp9, first, tmp39, true);
      const tmp46 = "pageload" === navigation || !spanToJSONResult.timestamp;
      if (tmp45) {
        tmp45 = tmp46;
      }
      if (tmp45) {
        updateName.updateName(first);
        const attr = updateName.setAttribute(_mod693.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, tmp39);
      }
    }
  } catch (tmp53) {
    if (_mod1018.DEBUG_BUILD) {
      const debug = _mod693.debug;
      const _HermesInternal = HermesInternal;
      debug.warn("Error updating span details before ending: " + tmp53);
    }
  }
}
function patchSpanEnd(result2, _location, routes, basename, allRoutes, navigation) {
  _require = result2;
  dependencyMap = _location;
  let closure_2 = routes;
  let closure_3 = basename;
  closure_4 = navigation;
  const combined = "__sentry_" + navigation + "_end_patched__";
  let tmp2;
  if (result2 != null) {
    tmp2 = result2[combined];
  }
  if (!tmp2) {
    if (result2.end) {
      const tmp3 = allRoutes;
      if (tmp3) {
        const _Set = Set;
        let self = this;
        let self2 = this;
        set = new Set(allRoutes);
      }
      const end = result2.end;
      closure_6 = end.bind(result2);
      let c7 = false;
      result2.end = function patchedEnd() {
        let data;
        let description;
        const f134864 = (arg0) => setTimeout(arg0, closure_1_11);
        const items = [...arguments];
        let first;
        let cleanupNavigationSpan;
        const tmp = c7;
        if (!tmp) {
          c7 = true;
          if (items.length > 0) {
            first = items[0];
          } else {
            const _Date = Date;
            first = Date.now() / 1000;
          }
          let obj = result2(_location[6]);
          let tmp6 = first;
          let spanToJSONResult = obj.spanToJSON(first);
          ({ description, data } = spanToJSONResult);
          if (data != null) {
            let tmp9 = data[result2(undefined, _location[6]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
          }
          cleanupNavigationSpan = function cleanupNavigationSpan() {

          };
          let value = weakMap1.get(tmp6);
          if (value) {
            if (value.size > 0) {
              if (description) {
                const tmp4Result = result2(_location[4]);
                if (0 === num) {
                  tryUpdateSpanNameBeforeEnd(tmp6, spanToJSONResult, description, cleanupNavigationSpan, closure_2, closure_3, closure_4, set);
                  const tmp4Result3 = result2(_location[6]);
                  let client = tmp4Result3.getClient();
                  if (client) {
                    if ("navigation" === closure_4) {
                      const value3 = weakMap.get(client);
                      const tmp46 = value3 && value3.span === tmp6;
                      if (tmp46) {
                        weakMap.delete(client);
                      }
                    }
                  }
                  closure_6(first);
                } else {
                  const allSettledResult = Promise.allSettled(value);
                  const nextPromise = allSettledResult.then(() => {

                  });
                  let raceResult = nextPromise;
                  if (num !== Infinity) {
                    const items1 = [nextPromise, ];
                    const self = this;
                    const self2 = this;
                    items1[1] = new Promise(f134864);
                    const promise = new Promise(f134864);
                    raceResult = race(items1);
                  }
                  const nextPromise1 = raceResult.then(() => {
                    const obj = _mod693;
                    const spanToJSONResult = obj.spanToJSON(result2);
                    tryUpdateSpanNameBeforeEnd(result2, spanToJSONResult, spanToJSONResult.description, _location, routes, basename, navigation, set);
                    if (typeof cleanupNavigationSpan === "function") {
                      const tmpResult = _mod693;
                      const client = tmpResult.getClient();
                      if (client) {
                        if ("navigation" === navigation) {
                          const value = weakMap.get(client);
                          const tmp9 = value && value.span === result2;
                          if (tmp9) {
                            weakMap.delete(client);
                          }
                        }
                      }
                      closure_6(first);
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                  });
                  nextPromise1.catch(() => {
                    if (typeof cleanupNavigationSpan === "function") {
                      const obj = _mod693;
                      const client = obj.getClient();
                      if (client) {
                        if ("navigation" === navigation) {
                          const value = weakMap.get(client);
                          const tmp6 = value && value.span === result2;
                          if (tmp6) {
                            weakMap.delete(client);
                          }
                        }
                      }
                      closure_6(first);
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                  });
                }
              }
            }
          }
          tryUpdateSpanNameBeforeEnd(tmp6, spanToJSONResult, description, cleanupNavigationSpan, closure_2, closure_3, closure_4, set);
          const tmp4Result4 = result2(_location[6]);
          const client1 = tmp4Result4.getClient();
          if (client1) {
            if ("navigation" === closure_4) {
              const value4 = weakMap.get(client1);
              const tmp25 = value4 && value4.span === tmp6;
              if (tmp25) {
                weakMap.delete(client1);
              }
            }
          }
          closure_6(first);
        }
      };
      let tmp6 = _require;
      let obj = require("module_693");
      const result = obj.addNonEnumerableProperty(result2, combined, true);
    }
  }
}
let _asyncToGenerator = _asyncToGenerator_mod;
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_10 = false;
let num = 3000;
const weakSet = new WeakSet();
const weakMap = new WeakMap();
let set = new Set();
const weakMap1 = new WeakMap();
const allRoutes_export = set;

export const addResolvedRoutesToParent = function addResolvedRoutesToParent(arr, children) {
  const tmp2 = children.children || [];
  let closure_0 = tmp2;
  const found = arr.filter((item) => {
    closure_0 = item;
    return !closure_0.some((path) => {
      let tmp2 = path === user;
      if (!tmp2) {
        tmp2 = user.path && path.path === user.path;
      }
      if (!tmp2) {
        tmp2 = user.id && path.id === user.id;
      }
      return tmp2;
    });
  });
  if (found.length > 0) {
    const items = [];
    HermesBuiltin.arraySpread(items, found, HermesBuiltin.arraySpread(items, tmp2, 0));
    children.children = items;
  }
};
export { addRoutesToAllRoutes };
export { allRoutes_export as allRoutes };
export { computeLocationKey };
export const createReactRouterV6CompatibleTracingIntegration = function createReactRouterV6CompatibleTracingIntegration(instrumentPageLoad, _6) {
  let closure_1;
  let enableAsyncRouteHandlers;
  _require = instrumentPageLoad;
  dependencyMap = _6;
  let obj = { instrumentPageLoad: false, instrumentNavigation: false };
  const browserTracingIntegration = require("feedbackAsyncIntegration").browserTracingIntegration;
  require("feedbackAsyncIntegration");
  const merged = Object.assign(instrumentPageLoad);
  const result = browserTracingIntegration(obj);
  _asyncToGenerator = result;
  ({ useEffect: _slicedToArray, useLocation: closure_4, useNavigationType: closure_5, createRoutesFromChildren: closure_6, matchRoutes: closure_7, stripBasename: closure_8, enableAsyncRouteHandlers } = instrumentPageLoad);
  let closure_9 = undefined !== enableAsyncRouteHandlers && enableAsyncRouteHandlers;
  instrumentPageLoad = instrumentPageLoad.instrumentPageLoad;
  closure_10 = undefined === instrumentPageLoad || instrumentPageLoad;
  const instrumentNavigation = instrumentPageLoad.instrumentNavigation;
  let closure_11 = undefined === instrumentNavigation || instrumentNavigation;
  const lazyRouteTimeout = instrumentPageLoad.lazyRouteTimeout;
  let obj2 = {
    setup(arg0) {
      _asyncToGenerator.setup(arg0);
      num = instrumentPageLoad.finalTimeout;
      if (num == null) {
        num = 30000;
      }
      let num2 = instrumentPageLoad.idleTimeout;
      if (num2 == null) {
        num2 = 1000;
      }
      _asyncToGenerator = 3 * num2;
      let tmp4 = lazyRouteTimeout;
      if (lazyRouteTimeout == null) {
        tmp4 = _asyncToGenerator;
      }
      if (tmp4 === Infinity) {
        if (_mod1018.DEBUG_BUILD) {
          const debug3 = _mod693.debug;
          debug3.log("[React Router] lazyRouteTimeout set to Infinity, capping at finalTimeout:", num, "ms to prevent indefinite hangs");
        }
      } else {
        const _Number = Number;
        if (Number.isNaN(tmp4)) {
          if (_mod1018.DEBUG_BUILD) {
            const debug2 = _mod693.debug;
            debug2.warn("[React Router] lazyRouteTimeout must be a number, falling back to default:", _asyncToGenerator);
          }
          num = _asyncToGenerator;
        } else if (tmp4 < 0) {
          if (_mod1018.DEBUG_BUILD) {
            const debug = _mod693.debug;
            debug.warn("[React Router] lazyRouteTimeout must be non-negative or Infinity, got:", tmp4, "falling back to:", _asyncToGenerator);
          }
          num = _asyncToGenerator;
        } else {
          num = tmp4;
        }
      }
      closure_4 = _slicedToArray;
      closure_5 = closure_1_4;
      closure_6 = closure_1_5;
      closure_8 = closure_1_7;
      closure_7 = closure_1_6;
      closure_10 = closure_9;
      let flag = closure_1_8;
      const initializeRouterUtils = _mod1025.initializeRouterUtils;
      _mod1025;
      if (!closure_1_8) {
        flag = false;
      }
      const result1 = initializeRouterUtils(closure_1_7, flag);
    },
    afterAllSetup(f134854) {
      let obj2;
      _asyncToGenerator.afterAllSetup(f134854);
      const _location = feedbackAsyncIntegration.WINDOW.location;
      let pathname;
      if (_location != null) {
        pathname = _location.pathname;
      }
      const tmp5 = closure_10 && pathname;
      if (tmp5) {
        const obj = { name: pathname, attributes: obj2 };
        obj2 = {};
        const startBrowserTracingPageLoadSpan = feedbackAsyncIntegration.startBrowserTracingPageLoadSpan;
        obj2[_mod693.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = "url";
        obj2[_mod693.SEMANTIC_ATTRIBUTE_SENTRY_OP] = "pageload";
        const _HermesInternal = HermesInternal;
        feedbackAsyncIntegration;
        obj2[_mod693.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.pageload.react.reactrouter_v" + closure_1;
        _asyncToGenerator = startBrowserTracingPageLoadSpan(f134854, obj);
      }
      if (closure_11) {
        weakSet.add(f134854);
      }
    }
  };
  const merged1 = Object.assign(result);
  return obj2;
};
export const createV6CompatibleWithSentryReactRouterRouting = function createV6CompatibleWithSentryReactRouterRouting(arg0, _6) {
  let closure_0;
  let closure_1;
  let obj;
  _require = arg0;
  dependencyMap = _6;
  if (closure_4) {
    if (closure_5) {
      if (closure_6) {
        if (closure_7) {
          if (closure_8) {
            class SentryRoutes {
              constructor(arg0) {
                closure_0 = arg0;
                closure_1 = closure_1_9.useRef(true);
                tmp = closure_1_5();
                closure_2 = tmp;
                tmp2 = closure_1_6();
                closure_3 = tmp2;
                items = [, ];
                items[0] = tmp;
                items[1] = tmp2;
                tmp3 = closure_1_4(() => { /* body not rendered: F134867 */ }, items);
                obj = {};
                createElement = closure_1_9.createElement;
                merged = Object.assign(arg0);
                return createElement(closure_0, obj);
              }
            }
            let obj2 = require("module_1016");
            obj2.hoistNonReactStatics(SentryRoutes, arg0);
            return SentryRoutes;
          }
        }
      }
    }
  }
  if (require("module_1018").DEBUG_BUILD) {
    class SentryRoutes {
      constructor(arg0) {
        closure_0 = arg0;
        closure_1 = closure_1_9.useRef(true);
        tmp = closure_1_5();
        closure_2 = tmp;
        tmp2 = closure_1_6();
        closure_3 = tmp2;
        items = [, ];
        items[0] = tmp;
        items[1] = tmp2;
        tmp3 = closure_1_4(() => { /* body not rendered: F134867 */ }, items);
        obj = {};
        createElement = closure_1_9.createElement;
        merged = Object.assign(arg0);
        return createElement(closure_0, obj);
      }
    }
    const _HermesInternal = HermesInternal;
    obj.warn("reactRouterV6Instrumentation was unable to wrap Routes because of one or more missing parameters.\n      useEffect: " + closure_4 + ". useLocation: " + closure_5 + ". useNavigationType: " + closure_6 + ".\n      createRoutesFromChildren: " + closure_7 + ". matchRoutes: " + closure_8 + ".");
  }
  return arg0;
};
export const createV6CompatibleWrapCreateBrowserRouter = function createV6CompatibleWrapCreateBrowserRouter(arg0, _6) {
  let closure_0;
  let closure_1;
  let fn;
  _require = arg0;
  dependencyMap = _6;
  if (closure_4) {
    if (closure_5) {
      if (closure_6) {
        if (closure_8) {
          fn = (routes, basename) => {
            addRoutesToAllRoutes(routes);
            if (closure_10) {
              const tmp4 = routes[Symbol.iterator]();
              while (tmp4 !== undefined) {
                let obj = _mod1026;
                let result = obj.checkRouteForAsyncHandler(tmp6, processResolvedRoutes);
                continue;
              }
            }
            const tmp12 = closure_0(routes, wrapPatchRoutesOnNavigation(basename));
            basename = undefined;
            if (basename != null) {
              basename = basename.basename;
            }
            const obj2 = _mod1025;
            const activeRootSpan = obj2.getActiveRootSpan();
            const tmp15 = "POP" === tmp12.state.historyAction && activeRootSpan;
            if (tmp15) {
              const _Array = Array;
              const obj3 = { activeRootSpan, location: tmp12.state.location, routes, basename, allRoutes: Array.from(set) };
              updatePageloadTransaction(obj3);
            }
            setupRouterSubscription(tmp12, routes, closure_1, basename, activeRootSpan);
            return tmp12;
          };
        }
        return fn;
      }
    }
  }
  const tmp6 = dependencyMap;
  fn = arg0;
  const tmp5 = _require;
  if (require("module_1018").DEBUG_BUILD) {
    const debug = tmp5(693).debug;
    const _HermesInternal = HermesInternal;
    debug.warn("reactRouterV" + _6 + "Instrumentation was unable to wrap the `createRouter` function because of one or more missing parameters.");
    fn = arg0;
  }
};
export const createV6CompatibleWrapCreateMemoryRouter = function createV6CompatibleWrapCreateMemoryRouter(arg0, _6) {
  let closure_0;
  let closure_1;
  let fn;
  _require = arg0;
  dependencyMap = _6;
  if (closure_4) {
    if (closure_5) {
      if (closure_6) {
        if (closure_8) {
          fn = (routes, basename) => {
            let _location;
            let first;
            addRoutesToAllRoutes(routes);
            if (closure_10) {
              const tmp4 = routes[Symbol.iterator]();
              while (tmp4 !== undefined) {
                let obj = _mod1026;
                let result = obj.checkRouteForAsyncHandler(tmp6, processResolvedRoutes);
                continue;
              }
            }
            const tmp12 = closure_0(routes, wrapPatchRoutesOnNavigation(basename, true));
            basename = undefined;
            if (basename != null) {
              basename = basename.basename;
            }
            let initialEntries;
            if (basename != null) {
              initialEntries = basename.initialEntries;
            }
            let initialIndex;
            if (basename != null) {
              initialIndex = basename.initialIndex;
            }
            const tmp16 = initialEntries && 1 === initialEntries.length;
            const tmp17 = undefined !== initialIndex && initialEntries && initialEntries[initialIndex];
            if (tmp16) {
              first = initialEntries[0];
            } else if (tmp17) {
              first = initialEntries[initialIndex];
            }
            if (first) {
              let tmp19 = first;
              if (typeof first === "string") {
                tmp19 = { pathname: first };
                const obj3 = { pathname: first };
              }
              _location = tmp19;
            } else {
              _location = tmp12.state.location;
            }
            const obj2 = _mod1025;
            const activeRootSpan = obj2.getActiveRootSpan();
            const tmp21 = "POP" === tmp12.state.historyAction && activeRootSpan;
            if (tmp21) {
              const _Array = Array;
              const obj4 = { activeRootSpan, location: _location, routes, basename, allRoutes: Array.from(set) };
              updatePageloadTransaction(obj4);
            }
            setupRouterSubscription(tmp12, routes, closure_1, basename, activeRootSpan);
            return tmp12;
          };
        }
        return fn;
      }
    }
  }
  const tmp6 = dependencyMap;
  fn = arg0;
  const tmp5 = _require;
  if (require("module_1018").DEBUG_BUILD) {
    const debug = tmp5(693).debug;
    const _HermesInternal = HermesInternal;
    debug.warn("reactRouterV" + _6 + "Instrumentation was unable to wrap the `createMemoryRouter` function because of one or more missing parameters.");
    fn = arg0;
  }
};
export const createV6CompatibleWrapUseRoutes = function createV6CompatibleWrapUseRoutes(arg0, _6) {
  let closure_0;
  let closure_1;
  _require = arg0;
  dependencyMap = _6;
  if (closure_4) {
    if (closure_5) {
      if (closure_6) {
        if (closure_8) {
          function SentryRoutes(routes) {
            let version;
            const ref = React.useRef(true);
            routes = routes.routes;
            let locationArg = routes.locationArg;
            const tmp = ref(routes, locationArg);
            let tmp2 = closure_1_5();
            const tmp3 = closure_1_6();
            const navigationType = tmp3;
            if (typeof locationArg === "string") {
              tmp2 = locationArg;
            } else {
              let pathname;
              if (locationArg != null) {
                pathname = locationArg.pathname;
              }
            }
            locationArg = tmp2;
            const items = [tmp3, tmp2];
            closure_1_4(() => {
              let obj3;
              let tmp2 = locationArg;
              if (typeof locationArg === "string") {
                tmp2 = { pathname: tmp };
                const obj2 = { pathname: tmp };
              }
              if (ref.current) {
                const item = routes.forEach(f82983);
                const obj4 = { activeRootSpan: obj3.getActiveRootSpan(), location: tmp2, routes, allRoutes: Array.from(set) };
                const _Array2 = Array;
                obj3 = _mod1025;
                updatePageloadTransaction(obj4);
                tmp3.current = false;
              } else {
                const _Array = Array;
                const obj = { location: tmp2, routes, navigationType, version, allRoutes: Array.from(set) };
                handleNavigation(obj);
              }
            }, items);
            return tmp;
          }
          return (routes, locationArg) => <SentryRoutes routes={routes} locationArg={locationArg} />;
        }
      }
    }
  }
  const tmp5 = _require;
  if (require("module_1018").DEBUG_BUILD) {
    const debug = tmp5(693).debug;
    debug.warn("reactRouterV6Instrumentation was unable to wrap `useRoutes` because of one or more missing parameters.");
  }
  return arg0;
};
export { handleNavigation };
export { processResolvedRoutes };
export { shouldSkipNavigation };
export { updateNavigationSpan };