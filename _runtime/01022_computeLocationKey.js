// === Module 1022: computeLocationKey ===

// Module 1022 (computeLocationKey)
import _mod693 from "module_693" /* 693 */;
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 898 */;
import _mod1016 from "module_1016" /* 1016 */;
import pickSplat from "pickSplat" /* 1023 */;
import _mod1024 from "module_1024" /* 1024 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

function computeLocationKey(_location) {
  ({ search, pathname } = _location);
  if (!search) {
    search = "";
  }
  return "" + pathname + search + _location.hash || "";
}
function shouldSkipNavigation(locationKey, locationKey, arr, timestamp) {
  if (locationKey) {
    if (locationKey.locationKey === locationKey) {
      let result = locationKey.routeName;
      if (result) {
        result = pickSplat.transactionNameHasWildcard(locationKey.routeName);
      }
      const result1 = pickSplat.transactionNameHasWildcard(arr);
      let routeName3 = locationKey.routeName;
      if (routeName3) {
        const routeName = locationKey.routeName;
        let hasItem = routeName.includes(":");
        if (!hasItem) {
          hasItem = routeName.includes("*");
        }
        routeName3 = hasItem;
      }
      let hasItem1 = arr.includes(":");
      if (!hasItem1) {
        hasItem1 = arr.includes("*");
      }
      if (result) {
        result = !result1;
      }
      let tmp13 = !routeName3;
      if (!routeName3) {
        tmp13 = hasItem1;
      }
      let tmp14 = arr !== locationKey.routeName;
      if (tmp14) {
        const routeName1 = locationKey.routeName;
        num = undefined;
        if (routeName1 != null) {
          num = routeName1.length;
        }
        if (!num) {
          num = 0;
        }
        tmp14 = arr.length > num;
      }
      if (tmp14) {
        tmp14 = !result1;
      }
      const routeName2 = locationKey.routeName;
      let tmp16 = !routeName2;
      if (routeName2) {
        if (!result) {
          result = tmp13;
        }
        if (!result) {
          result = tmp14;
        }
        tmp16 = !result;
      }
      const obj3 = { skip: true, shouldUpdate: !tmp16 };
      return obj3;
    }
    return { skip: false, shouldUpdate: false };
  } else {
    return { skip: false, shouldUpdate: false };
  }
}
function trackLazyRouteLoad(arg0, promise) {
  closure_0 = arg0;
  closure_1 = promise;
  value = weakMap1.get(arg0);
  if (!value) {
    const _Set = Set;
    set = new Set();
    const result = weakMap1.set(arg0, set);
    value = set;
  }
  value.add(promise);
  promise.finally(() => {
    value = weakMap1.get(closure_0);
    if (value) {
      value.delete(dependencyMap);
    }
  });
}
function createDeferredLazyRoutePromise(activeRootSpan) {
  closure_0 = activeRootSpan;
  const promise = new Promise((arg0) => {
    const result = weakMap2.set(closure_0, arg0);
  });
  closure_129_0 = activeRootSpan;
  closure_129_1 = promise;
  value = weakMap1.get(activeRootSpan);
  if (!value) {
    const _Set = Set;
    set = new Set();
    let result = weakMap1.set(activeRootSpan, set);
    value = set;
  }
  value.add(promise);
  promise.finally(() => {
    value = weakMap1.get(closure_0);
    if (value) {
      value.delete(dependencyMap);
    }
  });
}
function processResolvedRoutes(arr, children, arg2) {
  let tmp = arg2;
  if (arg2 === undefined) {
    tmp = null;
  }
  const item = arr.forEach((item) => {
    set.add(item);
    if (closure_1_10) {
      const result = closure_0(dependencyMap[5]).checkRouteForAsyncHandler(item, processResolvedRoutes);
      const obj = closure_0(dependencyMap[5]);
    }
  });
  if (children) {
    const tmp3 = children.children || [];
    closure_0 = tmp3;
    const found = arr.filter((item) => !item.some((path) => {
      let tmp2 = path === item;
      if (!tmp2) {
        tmp2 = item.path && path.path === item.path;
        const tmp3 = item.path && path.path === item.path;
      }
      if (!tmp2) {
        tmp2 = item.id && path.id === item.id;
        const tmp4 = item.id && path.id === item.id;
      }
      return tmp2;
    }));
    if (found.length > 0) {
      const items = [];
      HermesBuiltin.arraySpread(found, HermesBuiltin.arraySpread(tmp3, 0));
      children.children = items;
    }
  }
  if (activeRootSpan == null) {
    activeRootSpan = pickSplat.getActiveRootSpan();
  }
  if (activeRootSpan) {
    const spanToJSONResult = _mod693.spanToJSON(activeRootSpan);
    if (spanToJSONResult.timestamp) {
      if (_mod1016.DEBUG_BUILD) {
        const debug = _mod693.debug;
        debug.warn("[React Router] Lazy handler resolved after span ended - skipping update");
      }
    } else {
      const op = spanToJSONResult.op;
      let tmp15 = tmp;
      if (!tmp) {
        tmp15 = tmp;
        if (!activeRootSpan) {
          tmp15 = tmp;
          if (undefined !== feedbackAsyncIntegration.WINDOW) {
            const _location = feedbackAsyncIntegration.WINDOW.location;
            let pathname;
            if (_location != null) {
              pathname = _location.pathname;
            }
            tmp15 = tmp;
            if (pathname) {
              const obj3 = { pathname: _location.pathname };
              tmp15 = obj3;
            }
          }
        }
      }
      if (tmp15) {
        if ("pageload" === op) {
          const obj4 = { activeRootSpan, location: null, routes: null, allRoutes: null };
          const obj5 = { pathname: tmp15.pathname };
          obj4.location = obj5;
          const _Array = Array;
          obj4.routes = Array.from(set);
          const _Array2 = Array;
          obj4.allRoutes = Array.from(set);
          updatePageloadTransaction(obj4);
        } else if ("navigation" === op) {
          const _Array3 = Array;
          updateNavigationSpan(activeRootSpan, tmp15, Array.from(set), false, closure_8);
        }
      }
    }
  }
}
function updateNavigationSpan(activeRootSpan, _location, routes) {
  const spanToJSONResult = _mod693.spanToJSON(activeRootSpan);
  const description = spanToJSONResult.description;
  let prop;
  if (activeRootSpan != null) {
    prop = activeRootSpan.__sentry_navigation_name_set__;
  }
  let result = description;
  if (description) {
    result = pickSplat.transactionNameHasWildcard(description);
    const tmpResult = pickSplat;
  }
  if (!spanToJSONResult.timestamp) {
    const tmp9 = fn(routes, _location);
    const tmpResult4 = pickSplat;
    let items = tmp9;
    if (!tmp9) {
      items = [];
    }
    [tmp17, tmp18] = tmpResult4.resolveRouteNameAndSource(_location, routes, routes, items, "");
    const data = spanToJSONResult.data;
    if (data != null) {
      const tmp19 = data[_mod693.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
    }
    let tmp20 = tmp17;
    if (tmp17) {
      let tmp21 = !description;
      if (description) {
        let tmp22 = !prop;
        if (!prop) {
          tmp22 = "route" !== tmp19 || "route" === tmp18;
          const tmp23 = "route" !== tmp19 || "route" === tmp18;
        }
        tmp21 = tmp22;
      }
      if (!tmp21) {
        tmp21 = "route" !== tmp19 && "route" === tmp18;
        const tmp24 = "route" !== tmp19 && "route" === tmp18;
      }
      if (!tmp21) {
        tmp21 = "route" === tmp19 && "route" === tmp18 && result;
        const tmp25 = "route" === tmp19 && "route" === tmp18 && result;
      }
      tmp20 = tmp21;
    }
    if (tmp20) {
      activeRootSpan.updateName(tmp17);
      const attr = activeRootSpan.setAttribute(_mod693.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, tmp18);
      let result1 = pickSplat.transactionNameHasWildcard(tmp17);
      if (!result1) {
        result1 = "route" !== tmp18;
      }
      if (!result1) {
        const result2 = _mod693.addNonEnumerableProperty(activeRootSpan, "__sentry_navigation_name_set__", true);
        const tmpResult6 = _mod693;
      }
      const tmpResult5 = pickSplat;
    }
    const tmp16 = _slicedToArray(tmpResult4.resolveRouteNameAndSource(_location, routes, routes, items, ""), 2);
  }
}
function setupRouterSubscription(subscribe, routes, arg2, basename, activeRootSpan) {
  _require = routes;
  dependencyMap = arg2;
  c3 = false;
  let tmp = activeRootSpan;
  if (tmp) {
    tmp = "pageload" === require("module_693").spanToJSON(activeRootSpan).op;
    let obj = require("module_693");
  }
  closure_4 = tmp;
  c5 = false;
  c6 = null;
  closure_7 = null;
  const subscription = subscribe.subscribe((historyAction) => {
    routes = historyAction;
    if (!c3) {
      const activeRootSpan = routes(1023).getActiveRootSpan();
      if (activeRootSpan) {
        if ("pageload" === obj2.spanToJSON(activeRootSpan).op) {
          c4 = true;
        }
        obj2 = routes(693);
      }
      if (c4) {
        if ("POP" === historyAction.historyAction) {
          if (!c5) {
            c5 = true;
          }
        }
        c3 = true;
      }
      let obj = routes(1023);
    }
    if ("PUSH" === historyAction.historyAction) {
      const _location = historyAction.location;
      ({ search, pathname } = _location);
      if (!search) {
        search = "";
      }
      const _HermesInternal = HermesInternal;
      let combined = "" + pathname + search + _location.hash || "";
      if ("idle" !== historyAction.navigation.state) {
        if (combined !== combined) {
          combined = null;
        }
        if (null !== c6) {
          const WINDOW3 = routes(898).WINDOW;
          let _cancelAnimationFrame;
          if (WINDOW3 != null) {
            _cancelAnimationFrame = WINDOW3.cancelAnimationFrame;
          }
          if (_cancelAnimationFrame) {
            const WINDOW4 = tmp19(898).WINDOW;
            WINDOW4.cancelAnimationFrame(tmp17);
          } else {
            const _clearTimeout2 = clearTimeout;
            clearTimeout(tmp17);
          }
          tmp19 = routes;
        }
        const WINDOW5 = routes(898).WINDOW;
        let prop;
        if (WINDOW5 != null) {
          prop = WINDOW5.requestAnimationFrame;
        }
        function navigationHandler() {
          if (closure_7 !== combined) {
            closure_7 = combined;
            c6 = null;
            const obj = { location: routes.location, routes, navigationType: routes.historyAction, version, basename, allRoutes: null };
            const _Array = Array;
            obj.allRoutes = Array.from(set);
            handleNavigation(obj);
          }
        }
        if (prop) {
          const WINDOW6 = routes(898).WINDOW;
          let animationFrame = WINDOW6.requestAnimationFrame(navigationHandler);
        } else {
          const _setTimeout = setTimeout;
          animationFrame = setTimeout(navigationHandler, 0);
        }
        c6 = animationFrame;
      } else if (null === c6) {
        if (combined !== combined) {
          c6 = null;
          const obj3 = { location: historyAction.location, routes, navigationType: historyAction.historyAction, version: combined, basename, allRoutes: null };
          let _Array = Array;
          obj3.allRoutes = Array.from(set);
          handleNavigation(obj3);
        }
      } else {
        let WINDOW = routes;
        const WINDOW2 = routes(898).WINDOW;
        let _cancelAnimationFrame1;
        if (WINDOW2 != null) {
          _cancelAnimationFrame1 = WINDOW2.cancelAnimationFrame;
        }
        if (_cancelAnimationFrame1) {
          WINDOW = WINDOW(898).WINDOW;
          WINDOW.cancelAnimationFrame(tmp31);
        } else {
          const _clearTimeout = clearTimeout;
          clearTimeout(tmp31);
        }
        c6 = null;
      }
      const tmp8 = _location.hash || "";
    }
  });
}
function wrapPatchRoutesOnNavigation(patchRoutesOnNavigation, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let obj = patchRoutesOnNavigation;
  closure_1 = activeRootSpan;
  asyncGeneratorStep = undefined;
  patchRoutesOnNavigation = undefined;
  if (patchRoutesOnNavigation) {
    if ("patchRoutesOnNavigation" in obj) {
      if (typeof obj.patchRoutesOnNavigation === "function") {
        patchRoutesOnNavigation = obj.patchRoutesOnNavigation;
        let obj2 = {};
        const merged = Object.assign(obj);
        asyncGeneratorStep = asyncGeneratorStep(async (arg0) => {
          if (v3 === 2) {
            v3 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
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
              v3 = 2;
              if (arg0 === 1) {
                v3 = 3;
                throw value;
              } else if (arg0 === 2) {
                v3 = 3;
                let obj3 = { value, done: true };
                return obj3;
              } else {
                let path;
                if (closure_0 != null) {
                  path = closure_0.path;
                }
                activeRootSpan = closure_0(path[4]).getActiveRootSpan();
                path = activeRootSpan;
                closure_2 = path;
                if (!flag) {
                  let patch;
                  if (closure_0 != null) {
                    patch = closure_0.patch;
                  }
                  let matches;
                  if (closure_0 != null) {
                    matches = closure_0.matches;
                  }
                  if (patch) {
                    closure_0.patch = (arg0, arr) => {
                      closure_0 = arg0;
                      let item = arr.forEach((children) => {
                        set = new Set();
                        if (!set.has(children)) {
                          set.add(children);
                          if (tmp2) {
                            children = children.children;
                            const item = children.forEach((children) => {
                              set = closure_1_0;
                              if (closure_1_0 === undefined) {
                                let _Set = Set;
                                set = new Set();
                              }
                              if (!set.has(children)) {
                                set.add(children);
                                if (tmp5) {
                                  children = children.children;
                                  let item = children.forEach(() => { ... });
                                }
                                tmp5 = children.children && !children.index;
                              }
                              let item1 = set.forEach(() => { ... });
                            });
                          }
                          tmp2 = children.children && !children.index;
                        }
                        const item1 = set.forEach((item) => {
                          set.add(item);
                        });
                      });
                      if (matches) {
                        if (matches.length > 0) {
                          let route;
                          if (matches[matches.length - 1] != null) {
                            route = tmp25.route;
                          }
                          if (route) {
                            const _Array = Array;
                            const found = Array.from(set).find((id) => {
                              let tmp = undefined !== id.id;
                              if (tmp) {
                                tmp = id.id === closure_0;
                              }
                              if (!tmp) {
                                tmp = id === route;
                              }
                              if (!tmp) {
                                tmp = tmp4;
                              }
                              return tmp;
                            });
                            if (found) {
                              const tmp6 = found.children || [];
                              closure_0 = tmp6;
                              const found1 = arr.filter((item) => !item.some((path) => {
                                let tmp2 = path === item;
                                if (!tmp2) {
                                  tmp2 = item.path && path.path === item.path;
                                  const tmp3 = item.path && path.path === item.path;
                                }
                                if (!tmp2) {
                                  tmp2 = item.id && path.id === item.id;
                                  const tmp4 = item.id && path.id === item.id;
                                }
                                return tmp2;
                              }));
                              if (found1.length > 0) {
                                const items = [];
                                HermesBuiltin.arraySpread(found1, HermesBuiltin.arraySpread(tmp6, 0));
                                found.children = items;
                              }
                            }
                            const arr2 = Array.from(set);
                          }
                        }
                      }
                      if (closure_2) {
                        const spanToJSONResult = flag(path[6]).spanToJSON(closure_2);
                        const obj = flag(path[6]);
                      }
                      let tmp17 = path;
                      if (path) {
                        tmp17 = closure_2;
                      }
                      if (tmp17) {
                        tmp17 = spanToJSONResult;
                      }
                      if (tmp17) {
                        tmp17 = !spanToJSONResult.timestamp;
                      }
                      if (tmp17) {
                        tmp17 = "navigation" === spanToJSONResult.op;
                      }
                      if (tmp17) {
                        const obj2 = { pathname: path, search: "", hash: "", state: null, key: "default" };
                        const _Array2 = Array;
                        updateNavigationSpan(closure_2, obj2, Array.from(set), true, closure_3_8);
                      }
                      return patch(arg0, arr);
                    };
                  }
                }
                const tmp14 = v3(async () => {
                  if (c5 === 2) {
                    c5 = 3;
                    throw new TypeError("Generator functions may not be called on executing generators");
                  } else if (tmp7 === 3) {
                    if (arg0 === 1) {
                      throw value;
                    } else if (arg0 === 2) {
                      const obj2 = { value, done: true };
                      return obj2;
                    } else {
                      return { value: "IconComponent", done: null };
                    }
                  } else {
                    try {
                      c5 = 2;
                      if (0 === c4) {
                        if (arg0 === 1) {
                          c5 = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          c5 = 3;
                          const obj3 = { value, done: true };
                          return obj3;
                        } else {
                          closure_1 = tmp3;
                          closure_128_0 = undefined;
                          let navigationContext;
                          closure_128_2 = undefined;
                          navigationContext = tmp5(path[4]).setNavigationContext(path, closure_2);
                          let v0 = 1;
                          c4 = 2;
                          c5 = 1;
                          const obj5 = { value: v0(tmp5), done: false };
                          return obj5;
                        }
                      } else if (1 === tmp8) {
                        v0 = 0;
                        const result = tmp5(path[4]).clearNavigationContext(navigationContext);
                        if (closure_129_2) {
                          (function resolveDeferredLazyRoutePromise(__sentry_may_have_lazy_routes__) {
                            value = map.get(__sentry_may_have_lazy_routes__);
                            if (value) {
                              value();
                              map.delete(__sentry_may_have_lazy_routes__);
                              if (__sentry_may_have_lazy_routes__.__sentry_may_have_lazy_routes__) {
                                __sentry_may_have_lazy_routes__.__sentry_may_have_lazy_routes__ = false;
                              }
                            }
                          })(closure_129_2);
                        }
                        throw closure_2;
                      } else if (arg0 === 1) {
                        c5 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        v0 = 0;
                        const result1 = tmp5(path[4]).clearNavigationContext(navigationContext);
                        if (closure_129_2) {
                          (function resolveDeferredLazyRoutePromise(__sentry_may_have_lazy_routes__) {
                            value = map.get(__sentry_may_have_lazy_routes__);
                            if (value) {
                              value();
                              map.delete(__sentry_may_have_lazy_routes__);
                              if (__sentry_may_have_lazy_routes__.__sentry_may_have_lazy_routes__) {
                                __sentry_may_have_lazy_routes__.__sentry_may_have_lazy_routes__ = false;
                              }
                            }
                          })(closure_129_2);
                        }
                        c5 = 3;
                        const obj8 = { value, done: true };
                        return obj8;
                      } else {
                        closure_128_0 = value;
                        v0 = 0;
                        const result2 = tmp5(path[4]).clearNavigationContext(navigationContext);
                        if (closure_129_2) {
                          (function resolveDeferredLazyRoutePromise(__sentry_may_have_lazy_routes__) {
                            value = map.get(__sentry_may_have_lazy_routes__);
                            if (value) {
                              value();
                              map.delete(__sentry_may_have_lazy_routes__);
                              if (__sentry_may_have_lazy_routes__.__sentry_may_have_lazy_routes__) {
                                __sentry_may_have_lazy_routes__.__sentry_may_have_lazy_routes__ = false;
                              }
                            }
                          })(closure_129_2);
                        }
                        let spanToJSONResult;
                        if (closure_129_2) {
                          spanToJSONResult = tmp5(path[6]).spanToJSON(closure_129_2);
                          const obj = tmp5(path[6]);
                        }
                        closure_128_2 = spanToJSONResult;
                        let tmp21 = closure_129_2;
                        if (closure_129_2) {
                          tmp21 = closure_128_2;
                        }
                        if (tmp21) {
                          tmp21 = !closure_128_2.timestamp;
                        }
                        if (tmp21) {
                          tmp21 = "navigation" === closure_128_2.op;
                        }
                        if (tmp21) {
                          tmp21 = closure_129_1;
                        }
                        if (tmp21) {
                          const obj9 = { pathname: closure_129_1, search: "", hash: "", state: null, key: "default" };
                          const _Array = Array;
                          closure_2_22(closure_129_2, obj9, Array.from(closure_2_14), false, closure_2_8);
                        }
                        c5 = 3;
                        const obj10 = { value: closure_128_0, done: true };
                        return obj10;
                      }
                    } catch (tmp66) {
                      closure_2 = tmp66;
                      if (tmp4 === v0) {
                        c5 = tmp2;
                        throw tmp66;
                      } else {
                        c4 = tmp;
                      }
                    }
                  }
                })();
                if (path) {
                  trackLazyRouteLoad(tmp9, tmp14);
                }
                v3 = 3;
                const obj4 = { value: tmp14, done: true };
                return obj4;
              }
            } catch (tmp17) {
              v3 = tmp;
              throw tmp17;
            }
          }
        });
        obj2.patchRoutesOnNavigation = function patchRoutesOnNavigation(arg0) {
          const self = this;
          const apply = closure_2.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        };
        return obj2;
      }
    }
  }
  if (!obj) {
    obj = {};
  }
  return obj;
}
function handleNavigation(arg0) {
  ({ location: _location, routes, navigationType, matches, basename, allRoutes } = arg0);
  let tmp4Result = matches;
  if (!Array.isArray(matches)) {
    let tmp5 = allRoutes;
    if (!allRoutes) {
      tmp5 = routes;
    }
    tmp4Result = closure_8(tmp5, _location, basename);
  }
  const client = _mod693.getClient();
  if (client) {
    if (weakSet.has(client)) {
      const activeRootSpan = pickSplat.getActiveRootSpan();
      if (activeRootSpan) {
        const tmp6Result6 = _mod693;
      }
      if ("PUSH" === navigationType) {
        if (tmp4Result) {
          const tmp6Result7 = pickSplat;
          let tmp11 = allRoutes;
          if (!allRoutes) {
            tmp11 = routes;
          }
          if (!allRoutes) {
            allRoutes = routes;
          }
          [tmp20, tmp21] = tmp6Result7.resolveRouteNameAndSource(_location, tmp11, allRoutes, tmp4Result, basename);
          const tmp23 = computeLocationKey(_location);
          value = weakMap.get(client);
          let isPlaceholder = !value;
          if (value) {
            isPlaceholder = value.isPlaceholder;
          }
          let timestamp = !isPlaceholder;
          if (!isPlaceholder) {
            timestamp = _mod693.spanToJSON(value.span).timestamp;
            const tmp6Result8 = _mod693;
          }
          const tmp25Result = shouldSkipNavigation(value, tmp23, tmp20, timestamp);
          if (tmp25Result.skip) {
            if (tmp25Result.shouldUpdate) {
              if (value) {
                const routeName = value.routeName;
                if (value.isPlaceholder) {
                  value.routeName = tmp20;
                  if (_mod1016.DEBUG_BUILD) {
                    const debug3 = _mod693.debug;
                    const _HermesInternal4 = HermesInternal;
                    debug3.log("[Tracing] Updated placeholder navigation name from \"" + routeName + "\" to \"" + tmp20 + "\" (will apply to real span)");
                  }
                } else {
                  const span = value.span;
                  span.updateName(tmp20);
                  const span2 = value.span;
                  const attr = span2.setAttribute(_mod693.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, tmp21);
                  const result = _mod693.addNonEnumerableProperty(value.span, "__sentry_navigation_name_set__", true);
                  value.routeName = tmp20;
                  if (_mod1016.DEBUG_BUILD) {
                    const debug2 = _mod693.debug;
                    const _HermesInternal3 = HermesInternal;
                    debug2.log("[Tracing] Updated navigation span name from \"" + routeName + "\" to \"" + tmp20 + "\"");
                  }
                  const tmp6Result9 = _mod693;
                }
              }
            }
            if (_mod1016.DEBUG_BUILD) {
              const debug = _mod693.debug;
              const _HermesInternal2 = HermesInternal;
              debug.log("[Tracing] Skipping duplicate navigation for location: " + tmp23);
            }
          } else {
            const obj3 = { span: null, routeName: null, pathname: null, locationKey: null, isPlaceholder: true };
            const obj4 = {
              end() {

                        }
            };
            obj3.span = obj4;
            obj3.routeName = tmp20;
            obj3.pathname = _location.pathname;
            obj3.locationKey = tmp23;
            const result1 = weakMap.set(client, obj3);
            try {
              const obj5 = { name: obj3.routeName, attributes: null };
              const obj7 = {};
              obj7[_mod693.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = tmp21;
              obj7[_mod693.SEMANTIC_ATTRIBUTE_SENTRY_OP] = "navigation";
              const _HermesInternal = HermesInternal;
              obj7[_mod693.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.navigation.react.reactrouter_v" + tmp2;
              obj5.attributes = obj7;
              const result2 = feedbackAsyncIntegration.startBrowserTracingNavigationSpan(client, obj5);
              if (result2) {
                const obj8 = { span: result2, routeName: obj3.routeName, pathname: _location.pathname, locationKey: tmp23 };
                const result3 = weakMap.set(client, obj8);
                patchSpanEnd(result2, _location, routes, basename, "navigation");
              } else {
                weakMap.delete(client);
              }
              const tmp6Result10 = feedbackAsyncIntegration;
            } catch (tmp43) {
              obj.delete(tmp);
              throw tmp43;
            }
          }
          const tmp19 = _slicedToArray(tmp6Result7.resolveRouteNameAndSource(_location, tmp11, allRoutes, tmp4Result, basename), 2);
        }
      }
      const tmp6Result = pickSplat;
    }
  }
}
function addRoutesToAllRoutes(arr) {
  const item = arr.forEach((children) => {
    set = new Set();
    if (!set.has(children)) {
      set.add(children);
      if (tmp2) {
        children = children.children;
        const item = children.forEach((children) => {
          set = closure_1_0;
          if (closure_1_0 === undefined) {
            let _Set = Set;
            set = new Set();
          }
          if (!set.has(children)) {
            set.add(children);
            if (tmp5) {
              children = children.children;
              let item = children.forEach((children) => {
                set = closure_1_0;
                if (closure_1_0 === undefined) {
                  let _Set = Set;
                  set = new Set();
                }
                if (!set.has(children)) {
                  set.add(children);
                  if (tmp5) {
                    children = children.children;
                    let item = children.forEach((children) => {
                      set = closure_1_0;
                      if (closure_1_0 === undefined) {
                        let _Set = Set;
                        set = new Set();
                      }
                      if (!set.has(children)) {
                        set.add(children);
                        if (tmp5) {
                          children = children.children;
                          let item = children.forEach(() => { ... });
                        }
                        tmp5 = children.children && !children.index;
                      }
                      let item1 = set.forEach(() => { ... });
                    });
                  }
                  tmp5 = children.children && !children.index;
                }
                let item1 = set.forEach((item) => {
                  set.add(item);
                });
              });
            }
            tmp5 = children.children && !children.index;
          }
          let item1 = set.forEach((item) => {
            set.add(item);
          });
        });
      }
      tmp2 = children.children && !children.index;
    }
    const item1 = set.forEach((item) => {
      set.add(item);
    });
  });
}
function updatePageloadTransaction(arg0) {
  ({ activeRootSpan, location: _location, routes, matches, basename, allRoutes } = arg0);
  let tmp = matches;
  if (!Array.isArray(matches)) {
    let tmp3 = allRoutes;
    if (!allRoutes) {
      tmp3 = routes;
    }
    tmp = closure_8(tmp3, _location, basename);
  }
  if (tmp) {
    const obj2 = activeRootSpan(_location[4]);
    let tmp12 = allRoutes;
    if (!allRoutes) {
      tmp12 = routes;
    }
    if (!allRoutes) {
      allRoutes = routes;
    }
    [tmp21, tmp22] = basename(obj2.resolveRouteNameAndSource(_location, tmp12, allRoutes, tmp, basename), 2);
    const tmp20 = basename(obj2.resolveRouteNameAndSource(_location, tmp12, allRoutes, tmp, basename), 2);
    const currentScope = activeRootSpan(_location[6]).getCurrentScope();
    let str4 = tmp21;
    if (!tmp21) {
      str4 = "/";
    }
    currentScope.setTransactionName(str4);
    if (activeRootSpan) {
      activeRootSpan.updateName(tmp21);
      const attr = activeRootSpan.setAttribute(activeRootSpan(_location[6]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, tmp22);
      closure_129_0 = activeRootSpan;
      closure_129_1 = _location;
      closure_129_2 = routes;
      closure_129_3 = basename;
      closure_129_4 = "pageload";
      closure_129_5 = undefined;
      closure_129_6 = undefined;
      const _HermesInternal2 = HermesInternal;
      const combined = "__sentry_" + "pageload" + "_end_patched__";
      let tmp28;
      if (activeRootSpan != null) {
        tmp28 = activeRootSpan[combined];
      }
      if (!tmp28) {
        if (activeRootSpan.end) {
          const end2 = activeRootSpan.end;
          closure_129_5 = end2.bind(activeRootSpan);
          closure_129_6 = false;
          activeRootSpan.end = function patchedEnd() {
            const items = [...arguments];
            let first;
            let cleanupNavigationSpan;
            if (!c6) {
              c6 = true;
              if (items.length > 0) {
                first = items[0];
              } else {
                const _Date = Date;
                first = Date.now() / 1000;
              }
              let spanToJSONResult = closure_0(dependencyMap[6]).spanToJSON(first);
              ({ description, data } = spanToJSONResult);
              if (data != null) {
                data[closure_0(undefined, dependencyMap[6]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
              }
              cleanupNavigationSpan = function cleanupNavigationSpan() {

              };
              value = weakMap1.get(tmp5);
              if (!value) {
                tryUpdateSpanNameBeforeEnd(tmp5, spanToJSONResult, description, cleanupNavigationSpan, closure_2, closure_3, closure_4, set);
                let client = closure_0(dependencyMap[6]).getClient();
                if (client) {
                  if ("navigation" === closure_4) {
                    value3 = weakMap.get(client);
                    let tmp24 = value3;
                    if (value3) {
                      tmp24 = value3.span === tmp5;
                    }
                    if (tmp24) {
                      weakMap.delete(client);
                    }
                  }
                }
                closure_5(first);
                const tmp3Result = closure_0(dependencyMap[6]);
              }
              if (description) {
                if (0 === num) {
                  tryUpdateSpanNameBeforeEnd(tmp5, spanToJSONResult, description, cleanupNavigationSpan, closure_2, closure_3, closure_4, set);
                  const client1 = closure_0(dependencyMap[6]).getClient();
                  if (client1) {
                    if ("navigation" === closure_4) {
                      value4 = weakMap.get(client1);
                      let tmp46 = value4;
                      if (value4) {
                        tmp46 = value4.span === tmp5;
                      }
                      if (tmp46) {
                        weakMap.delete(client1);
                      }
                    }
                  }
                  closure_5(first);
                  const tmp3Result4 = closure_0(dependencyMap[6]);
                } else {
                  const promise2 = new Promise((arg0) => setTimeout(arg0, closure_1_11));
                  let promise = promise2;
                  if (value) {
                    promise = promise2;
                    if (value.size > 0) {
                      const nextPromise = Promise.allSettled(value).then(() => {

                      });
                      let racePromise = nextPromise;
                      if (num !== Infinity) {
                        const items1 = [nextPromise, promise2];
                        racePromise = Promise.race(items1);
                      }
                      promise = racePromise;
                      const allSettledResult = Promise.allSettled(value);
                    }
                  }
                  promise.then(() => {
                    const spanToJSONResult = _mod693.spanToJSON(closure_0);
                    tryUpdateSpanNameBeforeEnd(closure_0, spanToJSONResult, spanToJSONResult.description, closure_1, closure_2, closure_3, closure_4, set);
                    if (typeof cleanupNavigationSpan === "function") {
                      const client = _mod693.getClient();
                      if (client) {
                        if ("navigation" === closure_4) {
                          value = weakMap.get(client);
                          let tmp9 = value;
                          if (value) {
                            tmp9 = value.span === closure_0;
                          }
                          if (tmp9) {
                            weakMap.delete(client);
                          }
                        }
                      }
                      closure_5(first);
                      const tmpResult = _mod693;
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                  }).catch(() => {
                    if (typeof cleanupNavigationSpan === "function") {
                      const client = _mod693.getClient();
                      if (client) {
                        if ("navigation" === closure_4) {
                          value = weakMap.get(client);
                          let tmp6 = value;
                          if (value) {
                            tmp6 = value.span === closure_0;
                          }
                          if (tmp6) {
                            weakMap.delete(client);
                          }
                        }
                      }
                      closure_5(first);
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                  });
                  const nextPromise1 = promise.then(() => {
                    const spanToJSONResult = _mod693.spanToJSON(closure_0);
                    tryUpdateSpanNameBeforeEnd(closure_0, spanToJSONResult, spanToJSONResult.description, closure_1, closure_2, closure_3, closure_4, set);
                    if (typeof cleanupNavigationSpan === "function") {
                      const client = _mod693.getClient();
                      if (client) {
                        if ("navigation" === closure_4) {
                          value = weakMap.get(client);
                          let tmp9 = value;
                          if (value) {
                            tmp9 = value.span === closure_0;
                          }
                          if (tmp9) {
                            weakMap.delete(client);
                          }
                        }
                      }
                      closure_5(first);
                      const tmpResult = _mod693;
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                  });
                }
                const tmp3Result3 = closure_0(dependencyMap[4]);
              }
              let obj = closure_0(dependencyMap[6]);
            }
          };
          const result = activeRootSpan(_location[6]).addNonEnumerableProperty(activeRootSpan, combined, true);
          const tmp10Result2 = activeRootSpan(_location[6]);
        }
      }
    }
    const tmp10Result = activeRootSpan(_location[6]);
  } else if (activeRootSpan) {
    const pageload = "pageload";
    const _HermesInternal = HermesInternal;
    const combined1 = "__sentry_" + "pageload" + "_end_patched__";
    let tmp6;
    if (activeRootSpan != null) {
      tmp6 = activeRootSpan[combined1];
    }
    if (!tmp6) {
      if (activeRootSpan.end) {
        const end = activeRootSpan.end;
        closure_5 = end.bind(activeRootSpan);
        c6 = false;
        activeRootSpan.end = function patchedEnd() {
          const items = [...arguments];
          let first;
          let cleanupNavigationSpan;
          if (!c6) {
            c6 = true;
            if (items.length > 0) {
              first = items[0];
            } else {
              const _Date = Date;
              first = Date.now() / 1000;
            }
            let spanToJSONResult = closure_0(dependencyMap[6]).spanToJSON(first);
            ({ description, data } = spanToJSONResult);
            if (data != null) {
              data[closure_0(undefined, dependencyMap[6]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
            }
            cleanupNavigationSpan = function cleanupNavigationSpan() {

            };
            value = weakMap1.get(tmp5);
            if (!value) {
              tryUpdateSpanNameBeforeEnd(tmp5, spanToJSONResult, description, cleanupNavigationSpan, closure_2, closure_3, closure_4, set);
              let client = closure_0(dependencyMap[6]).getClient();
              if (client) {
                if ("navigation" === closure_4) {
                  value3 = weakMap.get(client);
                  let tmp24 = value3;
                  if (value3) {
                    tmp24 = value3.span === tmp5;
                  }
                  if (tmp24) {
                    weakMap.delete(client);
                  }
                }
              }
              closure_5(first);
              const tmp3Result = closure_0(dependencyMap[6]);
            }
            if (description) {
              if (0 === num) {
                tryUpdateSpanNameBeforeEnd(tmp5, spanToJSONResult, description, cleanupNavigationSpan, closure_2, closure_3, closure_4, set);
                const client1 = closure_0(dependencyMap[6]).getClient();
                if (client1) {
                  if ("navigation" === closure_4) {
                    value4 = weakMap.get(client1);
                    let tmp46 = value4;
                    if (value4) {
                      tmp46 = value4.span === tmp5;
                    }
                    if (tmp46) {
                      weakMap.delete(client1);
                    }
                  }
                }
                closure_5(first);
                const tmp3Result4 = closure_0(dependencyMap[6]);
              } else {
                const promise2 = new Promise((arg0) => setTimeout(arg0, closure_1_11));
                let promise = promise2;
                if (value) {
                  promise = promise2;
                  if (value.size > 0) {
                    const nextPromise = Promise.allSettled(value).then(() => {

                    });
                    let racePromise = nextPromise;
                    if (num !== Infinity) {
                      const items1 = [nextPromise, promise2];
                      racePromise = Promise.race(items1);
                    }
                    promise = racePromise;
                    const allSettledResult = Promise.allSettled(value);
                  }
                }
                promise.then(() => {
                  const spanToJSONResult = _mod693.spanToJSON(closure_0);
                  tryUpdateSpanNameBeforeEnd(closure_0, spanToJSONResult, spanToJSONResult.description, closure_1, closure_2, closure_3, closure_4, set);
                  if (typeof cleanupNavigationSpan === "function") {
                    const client = _mod693.getClient();
                    if (client) {
                      if ("navigation" === closure_4) {
                        value = weakMap.get(client);
                        let tmp9 = value;
                        if (value) {
                          tmp9 = value.span === closure_0;
                        }
                        if (tmp9) {
                          weakMap.delete(client);
                        }
                      }
                    }
                    closure_5(first);
                    const tmpResult = _mod693;
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                }).catch(() => {
                  if (typeof cleanupNavigationSpan === "function") {
                    const client = _mod693.getClient();
                    if (client) {
                      if ("navigation" === closure_4) {
                        value = weakMap.get(client);
                        let tmp6 = value;
                        if (value) {
                          tmp6 = value.span === closure_0;
                        }
                        if (tmp6) {
                          weakMap.delete(client);
                        }
                      }
                    }
                    closure_5(first);
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                });
                const nextPromise1 = promise.then(() => {
                  const spanToJSONResult = _mod693.spanToJSON(closure_0);
                  tryUpdateSpanNameBeforeEnd(closure_0, spanToJSONResult, spanToJSONResult.description, closure_1, closure_2, closure_3, closure_4, set);
                  if (typeof cleanupNavigationSpan === "function") {
                    const client = _mod693.getClient();
                    if (client) {
                      if ("navigation" === closure_4) {
                        value = weakMap.get(client);
                        let tmp9 = value;
                        if (value) {
                          tmp9 = value.span === closure_0;
                        }
                        if (tmp9) {
                          weakMap.delete(client);
                        }
                      }
                    }
                    closure_5(first);
                    const tmpResult = _mod693;
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                });
              }
              const tmp3Result3 = closure_0(dependencyMap[4]);
            }
            let obj = closure_0(dependencyMap[6]);
          }
        };
        const result1 = activeRootSpan(_location[6]).addNonEnumerableProperty(activeRootSpan, combined1, true);
        const obj = activeRootSpan(_location[6]);
      }
    }
  }
}
function tryUpdateSpanNameBeforeEnd(updateName, spanToJSONResult, description, _location, arg4, basename, arg6, set) {
  try {
    const data = spanToJSONResult.data;
    let tmp4;
    if (data != null) {
      tmp4 = data[_mod693.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
    }
    if ("route" === tmp4) {
      if (description) {
        pickSplat;
      }
    }
    let tmp15 = arg4;
    const _Array = Array;
    const arr = Array.from(set);
    if (arr.length > 0) {
      tmp15 = arr;
    }
    const tmp23 = closure_8(tmp15, _location, basename);
    if (tmp23) {
      let obj2 = pickSplat;
      [first] = obj2.resolveRouteNameAndSource(_location, tmp21, tmp21, tmp24, basename);
      let tmp46 = (function shouldUpdateWildcardSpanName(description, arg1, description, arg3, arg4) {
        let flag = arg4;
        if (arg4 === undefined) {
          flag = false;
        }
        let tmp = description;
        if (tmp) {
          let tmp3 = description;
          if (!description) {
            tmp3 = !flag;
          }
          let tmp5 = !tmp3;
          if (tmp3) {
            let result = !description;
            if (description) {
              result = !require("pickSplat").transactionNameHasWildcard(description);
              const obj = require("pickSplat");
            }
            if (!result) {
              result = "route" !== arg3;
            }
            if (!result) {
              result = require("pickSplat").transactionNameHasWildcard(description);
              const obj2 = require("pickSplat");
            }
            tmp5 = !result;
          }
          if (!tmp5) {
            tmp5 = "route" !== arg1 && "route" === arg3;
            const tmp12 = "route" !== arg1 && "route" === arg3;
          }
          tmp = tmp5;
        }
        return tmp;
      })(description, tmp10, first, tmp40, true);
      let tmp47 = "pageload" === arg6;
      if (!tmp47) {
        tmp47 = !spanToJSONResult.timestamp;
      }
      if (tmp46) {
        tmp46 = tmp47;
      }
      if (tmp46) {
        updateName.updateName(first);
        const attr = updateName.setAttribute(_mod693.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, tmp40);
      }
    }
    tmp10 = tmp4;
  } catch (tmp54) {
    if (_mod1016.DEBUG_BUILD) {
      const debug = _mod693.debug;
      const _HermesInternal = HermesInternal;
      debug.warn("Error updating span details before ending: " + tmp54);
    }
  }
}
function patchSpanEnd(result2, _location, routes, basename, navigation) {
  _require = result2;
  dependencyMap = _location;
  closure_2 = routes;
  closure_3 = basename;
  closure_4 = navigation;
  const combined = "__sentry_" + navigation + "_end_patched__";
  let tmp2;
  if (result2 != null) {
    tmp2 = result2[combined];
  }
  if (!tmp2) {
    if (result2.end) {
      const end = result2.end;
      closure_5 = end.bind(result2);
      c6 = false;
      result2.end = function patchedEnd() {
        const items = [...arguments];
        let first;
        let cleanupNavigationSpan;
        if (!c6) {
          c6 = true;
          if (items.length > 0) {
            first = items[0];
          } else {
            const _Date = Date;
            first = Date.now() / 1000;
          }
          let spanToJSONResult = closure_0(dependencyMap[6]).spanToJSON(first);
          ({ description, data } = spanToJSONResult);
          if (data != null) {
            data[closure_0(undefined, dependencyMap[6]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
          }
          cleanupNavigationSpan = function cleanupNavigationSpan() {

          };
          value = weakMap1.get(tmp5);
          if (!value) {
            tryUpdateSpanNameBeforeEnd(tmp5, spanToJSONResult, description, cleanupNavigationSpan, closure_2, closure_3, closure_4, set);
            let client = closure_0(dependencyMap[6]).getClient();
            if (client) {
              if ("navigation" === closure_4) {
                value3 = weakMap.get(client);
                let tmp24 = value3;
                if (value3) {
                  tmp24 = value3.span === tmp5;
                }
                if (tmp24) {
                  weakMap.delete(client);
                }
              }
            }
            closure_5(first);
            const tmp3Result = closure_0(dependencyMap[6]);
          }
          if (description) {
            if (0 === num) {
              tryUpdateSpanNameBeforeEnd(tmp5, spanToJSONResult, description, cleanupNavigationSpan, closure_2, closure_3, closure_4, set);
              const client1 = closure_0(dependencyMap[6]).getClient();
              if (client1) {
                if ("navigation" === closure_4) {
                  value4 = weakMap.get(client1);
                  let tmp46 = value4;
                  if (value4) {
                    tmp46 = value4.span === tmp5;
                  }
                  if (tmp46) {
                    weakMap.delete(client1);
                  }
                }
              }
              closure_5(first);
              const tmp3Result4 = closure_0(dependencyMap[6]);
            } else {
              const promise2 = new Promise((arg0) => setTimeout(arg0, closure_1_11));
              let promise = promise2;
              if (value) {
                promise = promise2;
                if (value.size > 0) {
                  const nextPromise = Promise.allSettled(value).then(() => {

                  });
                  let racePromise = nextPromise;
                  if (num !== Infinity) {
                    const items1 = [nextPromise, promise2];
                    racePromise = Promise.race(items1);
                  }
                  promise = racePromise;
                  const allSettledResult = Promise.allSettled(value);
                }
              }
              promise.then(() => {
                const spanToJSONResult = _mod693.spanToJSON(closure_0);
                tryUpdateSpanNameBeforeEnd(closure_0, spanToJSONResult, spanToJSONResult.description, closure_1, closure_2, closure_3, closure_4, set);
                if (typeof cleanupNavigationSpan === "function") {
                  const client = _mod693.getClient();
                  if (client) {
                    if ("navigation" === closure_4) {
                      value = weakMap.get(client);
                      let tmp9 = value;
                      if (value) {
                        tmp9 = value.span === closure_0;
                      }
                      if (tmp9) {
                        weakMap.delete(client);
                      }
                    }
                  }
                  closure_5(first);
                  const tmpResult = _mod693;
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              }).catch(() => {
                if (typeof cleanupNavigationSpan === "function") {
                  const client = _mod693.getClient();
                  if (client) {
                    if ("navigation" === closure_4) {
                      value = weakMap.get(client);
                      let tmp6 = value;
                      if (value) {
                        tmp6 = value.span === closure_0;
                      }
                      if (tmp6) {
                        weakMap.delete(client);
                      }
                    }
                  }
                  closure_5(first);
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              });
              const nextPromise1 = promise.then(() => {
                const spanToJSONResult = _mod693.spanToJSON(closure_0);
                tryUpdateSpanNameBeforeEnd(closure_0, spanToJSONResult, spanToJSONResult.description, closure_1, closure_2, closure_3, closure_4, set);
                if (typeof cleanupNavigationSpan === "function") {
                  const client = _mod693.getClient();
                  if (client) {
                    if ("navigation" === closure_4) {
                      value = weakMap.get(client);
                      let tmp9 = value;
                      if (value) {
                        tmp9 = value.span === closure_0;
                      }
                      if (tmp9) {
                        weakMap.delete(client);
                      }
                    }
                  }
                  closure_5(first);
                  const tmpResult = _mod693;
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              });
            }
            const tmp3Result3 = closure_0(dependencyMap[4]);
          }
          let obj = closure_0(dependencyMap[6]);
        }
      };
      const result = require("module_693").addNonEnumerableProperty(result2, combined, true);
      let obj = require("module_693");
    }
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_10 = false;
const weakSet = new WeakSet();
const weakMap = new WeakMap();
let set = new Set();
const weakMap1 = new WeakMap();
const weakMap2 = new WeakMap();

export const addResolvedRoutesToParent = function addResolvedRoutesToParent(arr, children) {
  const tmp = children.children || [];
  closure_0 = tmp;
  const found = arr.filter((item) => !item.some((path) => {
    let tmp2 = path === item;
    if (!tmp2) {
      tmp2 = item.path && path.path === item.path;
      const tmp3 = item.path && path.path === item.path;
    }
    if (!tmp2) {
      tmp2 = item.id && path.id === item.id;
      const tmp4 = item.id && path.id === item.id;
    }
    return tmp2;
  }));
  if (found.length > 0) {
    const items = [];
    HermesBuiltin.arraySpread(found, HermesBuiltin.arraySpread(tmp, 0));
    children.children = items;
  }
};
export { addRoutesToAllRoutes };
export const allRoutes = set;
export { computeLocationKey };
export const createReactRouterV6CompatibleTracingIntegration = function createReactRouterV6CompatibleTracingIntegration(instrumentPageLoad, _6) {
  _require = instrumentPageLoad;
  dependencyMap = _6;
  let obj2 = {};
  const merged = Object.assign(instrumentPageLoad);
  obj2.instrumentPageLoad = false;
  obj2.instrumentNavigation = false;
  let result = require("feedbackAsyncIntegration").browserTracingIntegration(obj2);
  asyncGeneratorStep = result;
  ({ useEffect: _slicedToArray, useLocation: closure_4, useNavigationType: closure_5, createRoutesFromChildren: closure_6, matchRoutes: closure_7, stripBasename: closure_8, enableAsyncRouteHandlers } = instrumentPageLoad);
  closure_9 = undefined !== enableAsyncRouteHandlers && enableAsyncRouteHandlers;
  instrumentPageLoad = instrumentPageLoad.instrumentPageLoad;
  closure_10 = undefined === instrumentPageLoad || instrumentPageLoad;
  const instrumentNavigation = instrumentPageLoad.instrumentNavigation;
  closure_11 = undefined === instrumentNavigation || instrumentNavigation;
  const lazyRouteTimeout = instrumentPageLoad.lazyRouteTimeout;
  const obj3 = {};
  const merged1 = Object.assign(result);
  obj3.setup = function setup(arg0) {
    result.setup(arg0);
    num = instrumentPageLoad.finalTimeout;
    if (num == null) {
      num = 30000;
    }
    let num2 = instrumentPageLoad.idleTimeout;
    if (num2 == null) {
      num2 = 1000;
    }
    result = 3 * num2;
    let tmp4 = lazyRouteTimeout;
    if (lazyRouteTimeout == null) {
      tmp4 = result;
    }
    if (tmp4 === Infinity) {
      if (_mod1016.DEBUG_BUILD) {
        const debug3 = _mod693.debug;
        debug3.log("[React Router] lazyRouteTimeout set to Infinity, capping at finalTimeout:", num, "ms to prevent indefinite hangs");
      }
    } else {
      const _Number = Number;
      if (Number.isNaN(tmp4)) {
        if (_mod1016.DEBUG_BUILD) {
          const debug2 = _mod693.debug;
          debug2.warn("[React Router] lazyRouteTimeout must be a number, falling back to default:", result);
        }
        num = result;
      } else if (tmp4 < 0) {
        if (_mod1016.DEBUG_BUILD) {
          const debug = _mod693.debug;
          debug.warn("[React Router] lazyRouteTimeout must be non-negative or Infinity, got:", tmp4, "falling back to:", result);
        }
        num = result;
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
    if (!closure_1_8) {
      flag = false;
    }
    const result1 = pickSplat.initializeRouterUtils(closure_1_7, flag);
  };
  obj3.afterAllSetup = function afterAllSetup(f143048) {
    result.afterAllSetup(f143048);
    const _location = feedbackAsyncIntegration.WINDOW.location;
    if (_location != null) {
      const pathname = _location.pathname;
    }
    let tmp4 = closure_10;
    if (closure_10) {
      tmp4 = pathname;
    }
    if (tmp4) {
      const obj = { name: pathname, attributes: null };
      const obj2 = {};
      obj2[_mod693.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = "url";
      obj2[_mod693.SEMANTIC_ATTRIBUTE_SENTRY_OP] = "pageload";
      const _HermesInternal = HermesInternal;
      obj2[_mod693.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.pageload.react.reactrouter_v" + closure_1;
      obj.attributes = obj2;
      result = feedbackAsyncIntegration.startBrowserTracingPageLoadSpan(f143048, obj);
      const tmp2Result = feedbackAsyncIntegration;
    }
    if (closure_11) {
      weakSet.add(f143048);
    }
  };
  return obj3;
};
export const createV6CompatibleWithSentryReactRouterRouting = function createV6CompatibleWithSentryReactRouterRouting(arg0, _6) {
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
                tmp3 = closure_1_4(() => { ... }, items);
                obj = {};
                merged = Object.assign(arg0);
                return closure_1_9.createElement(closure_0, obj);
              }
            }
            require("module_1014").hoistNonReactStatics(SentryRoutes, arg0);
            return SentryRoutes;
          }
        }
      }
    }
  }
  if (require("module_1016").DEBUG_BUILD) {
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
        tmp3 = closure_1_4(() => { ... }, items);
        obj = {};
        merged = Object.assign(arg0);
        return closure_1_9.createElement(closure_0, obj);
      }
    }
    const _HermesInternal = HermesInternal;
    obj.warn("reactRouterV6Instrumentation was unable to wrap Routes because of one or more missing parameters.\n      useEffect: " + closure_4 + ". useLocation: " + closure_5 + ". useNavigationType: " + closure_6 + ".\n      createRoutesFromChildren: " + closure_7 + ". matchRoutes: " + closure_8 + ".");
  }
  return arg0;
};
export const createV6CompatibleWrapCreateBrowserRouter = function createV6CompatibleWrapCreateBrowserRouter(arg0, _6) {
  _require = arg0;
  dependencyMap = _6;
  if (closure_4) {
    if (closure_5) {
      if (closure_6) {
        if (closure_8) {
          let fn = (routes, patchRoutesOnNavigation) => {
            addRoutesToAllRoutes(routes);
            if (closure_10) {
              const tmp3 = routes[Symbol.iterator]();
              while (tmp3 !== undefined) {
                let obj = _mod1024;
                let result = obj.checkRouteForAsyncHandler(tmp5, processResolvedRoutes);
                continue;
              }
            }
            const activeRootSpan = pickSplat.getActiveRootSpan();
            let tmp16 = patchRoutesOnNavigation;
            if (patchRoutesOnNavigation) {
              tmp16 = "patchRoutesOnNavigation" in patchRoutesOnNavigation;
            }
            if (tmp16) {
              tmp16 = typeof patchRoutesOnNavigation.patchRoutesOnNavigation === "function";
            }
            if (tmp16) {
              tmp16 = activeRootSpan;
            }
            if (tmp16) {
              const result1 = _mod693.addNonEnumerableProperty(activeRootSpan, "__sentry_may_have_lazy_routes__", true);
              createDeferredLazyRoutePromise(activeRootSpan);
              const tmp13Result = _mod693;
            }
            const tmp20 = closure_0(routes, wrapPatchRoutesOnNavigation(patchRoutesOnNavigation, false, activeRootSpan));
            let basename;
            if (patchRoutesOnNavigation != null) {
              basename = patchRoutesOnNavigation.basename;
            }
            if (tmp22) {
              const obj3 = { activeRootSpan, location: tmp20.state.location, routes, basename, allRoutes: null };
              const _Array = Array;
              obj3.allRoutes = Array.from(set);
              updatePageloadTransaction(obj3);
            }
            setupRouterSubscription(tmp20, routes, closure_1, basename, activeRootSpan);
            return tmp20;
          };
        }
        return fn;
      }
    }
  }
  fn = arg0;
  if (require("module_1016").DEBUG_BUILD) {
    const debug = tmp4(693).debug;
    const _HermesInternal = HermesInternal;
    debug.warn("reactRouterV" + _6 + "Instrumentation was unable to wrap the `createRouter` function because of one or more missing parameters.");
    fn = arg0;
  }
  tmp4 = _require;
};
export const createV6CompatibleWrapCreateMemoryRouter = function createV6CompatibleWrapCreateMemoryRouter(arg0, _6) {
  _require = arg0;
  dependencyMap = _6;
  if (closure_4) {
    if (closure_5) {
      if (closure_6) {
        if (closure_8) {
          let fn = (routes, patchRoutesOnNavigation) => {
            addRoutesToAllRoutes(routes);
            if (closure_10) {
              const tmp3 = routes[Symbol.iterator]();
              while (tmp3 !== undefined) {
                let obj = _mod1024;
                let result = obj.checkRouteForAsyncHandler(tmp5, processResolvedRoutes);
                continue;
              }
            }
            const activeRootSpan = pickSplat.getActiveRootSpan();
            let tmp18 = patchRoutesOnNavigation;
            if (patchRoutesOnNavigation) {
              tmp18 = "patchRoutesOnNavigation" in patchRoutesOnNavigation;
            }
            if (tmp18) {
              tmp18 = typeof patchRoutesOnNavigation.patchRoutesOnNavigation === "function";
            }
            if (tmp18) {
              tmp18 = activeRootSpan;
            }
            if (tmp18) {
              const result1 = _mod693.addNonEnumerableProperty(activeRootSpan, "__sentry_may_have_lazy_routes__", true);
              createDeferredLazyRoutePromise(activeRootSpan);
              const tmp14Result = _mod693;
            }
            const tmp24 = closure_0(routes, wrapPatchRoutesOnNavigation(patchRoutesOnNavigation, true, activeRootSpan));
            let basename;
            if (patchRoutesOnNavigation != null) {
              basename = patchRoutesOnNavigation.basename;
            }
            let initialEntries;
            if (patchRoutesOnNavigation != null) {
              initialEntries = patchRoutesOnNavigation.initialEntries;
            }
            let initialIndex;
            if (patchRoutesOnNavigation != null) {
              initialIndex = patchRoutesOnNavigation.initialIndex;
            }
            let tmp28 = initialEntries;
            if (initialEntries) {
              tmp28 = 1 === initialEntries.length;
            }
            if (tmp28) {
              let first = initialEntries[0];
            } else if (tmp29) {
              first = initialEntries[initialIndex];
            }
            if (first) {
              let tmp31 = first;
              if (typeof first === "string") {
                const obj3 = { pathname: first };
                tmp31 = obj3;
              }
              let _location = tmp31;
            } else {
              _location = tmp24.state.location;
            }
            tmp29 = undefined !== initialIndex && initialEntries && initialEntries[initialIndex];
            const activeRootSpan1 = pickSplat.getActiveRootSpan();
            if (tmp33) {
              const obj4 = { activeRootSpan: activeRootSpan1, location: _location, routes, basename, allRoutes: null };
              const _Array = Array;
              obj4.allRoutes = Array.from(set);
              updatePageloadTransaction(obj4);
            }
            setupRouterSubscription(tmp24, routes, closure_1, basename, activeRootSpan1);
            return tmp24;
          };
        }
        return fn;
      }
    }
  }
  fn = arg0;
  if (require("module_1016").DEBUG_BUILD) {
    const debug = tmp4(693).debug;
    const _HermesInternal = HermesInternal;
    debug.warn("reactRouterV" + _6 + "Instrumentation was unable to wrap the `createMemoryRouter` function because of one or more missing parameters.");
    fn = arg0;
  }
  tmp4 = _require;
};
export const createV6CompatibleWrapUseRoutes = function createV6CompatibleWrapUseRoutes(arg0, _6) {
  _require = arg0;
  dependencyMap = _6;
  if (closure_4) {
    if (closure_5) {
      if (closure_6) {
        if (closure_8) {
          function SentryRoutes(routes) {
            routes = routes.routes;
            let locationArg = routes.locationArg;
            const ref = React.useRef(true);
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
              let tmp2 = locationArg;
              if (typeof locationArg === "string") {
                const obj2 = { pathname: tmp };
                tmp2 = obj2;
              }
              if (ref.current) {
                const item = routes.forEach((children) => {
                  set = new Set();
                  if (!set.has(children)) {
                    set.add(children);
                    if (tmp2) {
                      children = children.children;
                      const item = children.forEach((children) => {
                        set = closure_1_0;
                        if (closure_1_0 === undefined) {
                          let _Set = Set;
                          set = new Set();
                        }
                        if (!set.has(children)) {
                          set.add(children);
                          if (tmp5) {
                            children = children.children;
                            let item = children.forEach(() => { ... });
                          }
                          tmp5 = children.children && !children.index;
                        }
                        let item1 = set.forEach(() => { ... });
                      });
                    }
                    tmp2 = children.children && !children.index;
                  }
                  const item1 = set.forEach((item) => {
                    set.add(item);
                  });
                });
                const obj4 = { activeRootSpan: pickSplat.getActiveRootSpan(), location: tmp2, routes, allRoutes: null };
                const _Array2 = Array;
                obj4.allRoutes = Array.from(set);
                updatePageloadTransaction(obj4);
                tmp3.current = false;
              } else {
                const obj = { location: tmp2, routes, navigationType, version, allRoutes: null };
                const _Array = Array;
                obj.allRoutes = Array.from(set);
                handleNavigation(obj);
              }
            }, items);
            return React.useRef(true)(routes, locationArg);
          }
          return (routes, locationArg) => <SentryRoutes routes={routes} locationArg={locationArg} />;
        }
      }
    }
  }
  if (require("module_1016").DEBUG_BUILD) {
    const debug = require("module_693").debug;
    debug.warn("reactRouterV6Instrumentation was unable to wrap `useRoutes` because of one or more missing parameters.");
  }
  return arg0;
};
export { handleNavigation };
export { processResolvedRoutes };
export { shouldSkipNavigation };
export { updateNavigationSpan };