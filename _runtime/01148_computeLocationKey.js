// === Module 1148: computeLocationKey ===

// Module 1148 (computeLocationKey)
import registerSpanErrorInstrumentation from "registerSpanErrorInstrumentation" /* 817 */;
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 1024 */;
import __SENTRY_DEBUG__ from "__SENTRY_DEBUG__" /* 1142 */;
import pickSplat from "pickSplat" /* 1149 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;

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
        let obj = pickSplat;
        result = obj.transactionNameHasWildcard(locationKey.routeName);
      }
      const result1 = pickSplat.transactionNameHasWildcard(arr);
      let routeName = locationKey.routeName;
      if (routeName) {
        routeName = locationKey.routeName;
        let hasItem = routeName.includes(":");
        if (!hasItem) {
          hasItem = routeName.includes("*");
        }
        routeName = hasItem;
      }
      let hasItem1 = arr.includes(":");
      if (!hasItem1) {
        hasItem1 = arr.includes("*");
      }
      if (result) {
        result = !result1;
      }
      let tmp13 = !routeName;
      if (!routeName) {
        tmp13 = hasItem1;
      }
      let tmp14 = arr !== locationKey.routeName;
      if (tmp14) {
        routeName = locationKey.routeName;
        let num;
        if (routeName != null) {
          num = routeName.length;
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
      obj = { skip: true, shouldUpdate: null };
      obj[1] = !tmp16;
      return obj;
    }
    return { skip: false, shouldUpdate: false };
  } else {
    return { skip: false, shouldUpdate: false };
  }
}
function processResolvedRoutes(arr, children, arg2, activeRootSpan) {
  let tmp = arg2;
  if (arg2 === undefined) {
    tmp = null;
  }
  const item = arr.forEach((item, index) => {
    set.add(item);
    if (closure_10) {
      const result = lib(table[5]).checkRouteForAsyncHandler(item, closure_18);
      const obj = lib(table[5]);
    }
  });
  if (children) {
    let tmp3 = children.children || [];
    const _require = tmp3;
    const found = arr.filter((item, index) => {
      const lib = item;
      return !lib.some((item, index) => {
        let tmp2 = item === item;
        if (!tmp2) {
          tmp2 = item.path && item.path === item.path;
        }
        if (!tmp2) {
          tmp2 = item.id && item.id === item.id;
        }
        return tmp2;
      });
    });
    if (found.length > 0) {
      const items = [];
      HermesBuiltin.arraySpread(found, HermesBuiltin.arraySpread(tmp3, 0));
      children.children = items;
    }
  }
  if (activeRootSpan == null) {
    let obj = _require(1149);
    activeRootSpan = obj.getActiveRootSpan();
  }
  if (activeRootSpan) {
    obj1 = _require(817);
    const spanToJSONResult = obj1.spanToJSON(activeRootSpan);
    if (spanToJSONResult.timestamp) {
      if (tmp12(1142).DEBUG_BUILD) {
        const debug = tmp12(817).debug;
        debug.warn("[React Router] Lazy handler resolved after span ended - skipping update");
      }
    } else {
      const op = spanToJSONResult.op;
      let tmp15 = tmp;
      if (!tmp) {
        tmp15 = tmp;
        if (!activeRootSpan) {
          tmp15 = tmp;
          if (undefined !== tmp12(1024).WINDOW) {
            const _location = tmp12(1024).WINDOW.location;
            let pathname;
            if (_location != null) {
              pathname = _location.pathname;
            }
            tmp15 = tmp;
            if (pathname) {
              obj = { pathname: null };
              obj[0] = _location.pathname;
              tmp15 = obj;
            }
          }
        }
      }
      if (tmp15) {
        if ("pageload" === op) {
          obj = { activeRootSpan: null, location: null, routes: null, allRoutes: null };
          obj[0] = activeRootSpan;
          obj1 = { pathname: null };
          obj1[0] = tmp15.pathname;
          obj[1] = obj1;
          const _Array = Array;
          obj[2] = Array.from(set);
          const _Array2 = Array;
          obj[3] = Array.from(set);
          updatePageloadTransaction(obj);
        } else if ("navigation" === op) {
          const _Array3 = Array;
          updateNavigationSpan(activeRootSpan, tmp15, Array.from(set), false, closure_8);
        }
      }
    }
  }
}
function updateNavigationSpan(activeRootSpan, _location, routes, arg3, closure_8) {
  const spanToJSONResult = registerSpanErrorInstrumentation.spanToJSON(activeRootSpan);
  const description = spanToJSONResult.description;
  let prop;
  if (activeRootSpan != null) {
    prop = activeRootSpan.__sentry_navigation_name_set__;
  }
  let result = description;
  if (description) {
    let tmpResult = pickSplat;
    result = tmpResult.transactionNameHasWildcard(description);
  }
  if (!spanToJSONResult.timestamp) {
    const tmp9 = callback(routes, _location);
    tmpResult = pickSplat;
    let items = tmp9;
    if (!tmp9) {
      items = [];
    }
    [tmp17, tmp18] = _slicedToArray(tmpResult.resolveRouteNameAndSource(_location, routes, routes, items, ""), 2);
    const data = spanToJSONResult.data;
    if (data != null) {
      const tmp19 = data[registerSpanErrorInstrumentation.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
    }
    let tmp20 = tmp17;
    if (tmp17) {
      let tmp21 = !description;
      if (description) {
        let tmp22 = !prop;
        if (!prop) {
          tmp22 = "route" !== tmp19 || "route" === tmp18;
        }
        tmp21 = tmp22;
      }
      if (!tmp21) {
        tmp21 = "route" !== tmp19 && "route" === tmp18;
      }
      if (!tmp21) {
        tmp21 = "route" === tmp19 && "route" === tmp18 && result;
      }
      tmp20 = tmp21;
    }
    if (tmp20) {
      activeRootSpan.updateName(tmp17);
      const attr = activeRootSpan.setAttribute(registerSpanErrorInstrumentation.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, tmp18);
      let result1 = pickSplat.transactionNameHasWildcard(tmp17);
      if (!result1) {
        result1 = "route" !== tmp18;
      }
      if (!result1) {
        const result2 = registerSpanErrorInstrumentation.addNonEnumerableProperty(activeRootSpan, "__sentry_navigation_name_set__", true);
        const tmpResult2 = registerSpanErrorInstrumentation;
      }
      const tmpResult1 = pickSplat;
    }
    const tmp16 = _slicedToArray(tmpResult.resolveRouteNameAndSource(_location, routes, routes, items, ""), 2);
  }
}
function setupRouterSubscription(subscribe, arr, dependencyMap, basename, activeRootSpan) {
  const _require = arr;
  closure_2 = basename;
  c3 = false;
  let tmp = activeRootSpan;
  if (tmp) {
    tmp = "pageload" === _require(817).spanToJSON(activeRootSpan).op;
    let obj = _require(817);
  }
  closure_4 = tmp;
  c5 = false;
  c6 = null;
  c7 = null;
  const subscription = subscribe.subscribe((historyAction) => {
    const callback = historyAction;
    if (!c3) {
      let obj = callback(1149);
      const activeRootSpan = obj.getActiveRootSpan();
      if (activeRootSpan) {
        if ("pageload" === obj2.spanToJSON(activeRootSpan).op) {
          c4 = true;
        }
        obj2 = callback(817);
      }
      if (c4) {
        if ("POP" === historyAction.historyAction) {
          if (!c5) {
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
      const combined = "" + pathname + search + _location.hash || "";
      if ("idle" !== historyAction.navigation.state) {
        if (closure_7 !== combined) {
          closure_7 = null;
        }
        if (null !== c6) {
          const WINDOW3 = callback(1024).WINDOW;
          let _cancelAnimationFrame;
          if (WINDOW3 != null) {
            _cancelAnimationFrame = WINDOW3.cancelAnimationFrame;
          }
          if (_cancelAnimationFrame) {
            const WINDOW4 = tmp19(1024).WINDOW;
            WINDOW4.cancelAnimationFrame(tmp17);
          } else {
            const _clearTimeout2 = clearTimeout;
            clearTimeout(tmp17);
          }
          tmp19 = callback;
        }
        const WINDOW5 = callback(1024).WINDOW;
        let prop;
        if (WINDOW5 != null) {
          prop = WINDOW5.requestAnimationFrame;
        }
        function navigationHandler() {
          if (closure_7 !== combined) {
            closure_7 = combined;
            c6 = null;
            const obj = { location: null, routes: null, navigationType: null, version: null, basename: null, allRoutes: null };
            obj[0] = historyAction.location;
            obj[1] = historyAction;
            obj[2] = historyAction.historyAction;
            obj[3] = combined;
            obj[4] = basename;
            const _Array = Array;
            obj[5] = Array.from(set);
            handleNavigation(obj);
          }
        }
        if (prop) {
          const WINDOW6 = callback(1024).WINDOW;
          let animationFrame = WINDOW6.requestAnimationFrame(navigationHandler);
        } else {
          const _setTimeout = setTimeout;
          animationFrame = setTimeout(navigationHandler, 0);
        }
        c6 = animationFrame;
      } else if (null === c6) {
        if (closure_7 !== combined) {
          closure_7 = combined;
          c6 = null;
          obj = { location: null, routes: null, navigationType: null, version: null, basename: null, allRoutes: null };
          obj[0] = historyAction.location;
          obj[1] = callback;
          obj[2] = historyAction.historyAction;
          obj[3] = combined;
          obj[4] = closure_2;
          let _Array = Array;
          obj[5] = Array.from(set);
          handleNavigation(obj);
        }
      } else {
        let WINDOW = callback;
        const WINDOW2 = callback(1024).WINDOW;
        let _cancelAnimationFrame1;
        if (WINDOW2 != null) {
          _cancelAnimationFrame1 = WINDOW2.cancelAnimationFrame;
        }
        if (_cancelAnimationFrame1) {
          WINDOW = WINDOW(1024).WINDOW;
          WINDOW.cancelAnimationFrame(tmp31);
        } else {
          const _clearTimeout = clearTimeout;
          clearTimeout(tmp31);
        }
        c6 = null;
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
  closure_1 = undefined;
  let patchRoutesOnNavigation;
  if (basename) {
    if ("patchRoutesOnNavigation" in obj) {
      if (typeof obj.patchRoutesOnNavigation === "function") {
        patchRoutesOnNavigation = obj.patchRoutesOnNavigation;
        obj = {};
        const merged = Object.assign(obj);
        closure_1 = patchRoutesOnNavigation((arg0) => {
          closure_0 = arg0;
          c1 = 0;
          return (function*(arg0) {
            if (table === 2) {
              table = 3;
              HermesBuiltin.throwTypeError();
            } else if (tmp3 === 3) {
              if (arg0 === 1) {
                throw arg1;
              } else if (arg0 === 2) {
                let obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                return { value: "HermesInternal", done: "HermesInternal" };
              }
            } else {
              try {
                table = 2;
                if (arg0 === 1) {
                  table = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  table = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  let path;
                  if (callback != null) {
                    path = callback.path;
                  }
                  table = path;
                  obj = callback(table[4]);
                  let activeRootSpan = obj.getActiveRootSpan();
                  if (!callback) {
                    let patch;
                    if (callback != null) {
                      patch = callback.patch;
                    }
                    let pathname = patch;
                    if (patch) {
                      callback.patch = (arg0, arr) => {
                        let item = arr.forEach((item, index) => {
                          set = new Set();
                          if (!set.has(item)) {
                            set.add(item);
                            if (tmp2) {
                              const children = item.children;
                              item = children.forEach(() => { ... });
                            }
                            tmp2 = item.children && !item.index;
                          }
                          const item1 = set.forEach(() => { ... });
                        });
                        let obj = callback(table[4]);
                        activeRootSpan = obj.getActiveRootSpan();
                        let tmp6 = table;
                        if (table) {
                          tmp6 = activeRootSpan;
                        }
                        if (tmp6) {
                          tmp6 = "navigation" === callback(table[6]).spanToJSON(activeRootSpan).op;
                          const tmp2Result = callback(table[6]);
                        }
                        if (tmp6) {
                          obj = { pathname: null, search: "", hash: "", state: null, key: "default" };
                          obj[0] = table;
                          const _Array = Array;
                          closure_2_19(activeRootSpan, obj, Array.from(closure_2_14), true, closure_2_8);
                        }
                        return pathname(arg0, arr);
                      };
                    }
                  }
                  const tmp11 = patchRoutesOnNavigation(function*() {
                    if (c5 === 2) {
                      c5 = 3;
                      HermesBuiltin.throwTypeError();
                    } else if (tmp7 === 3) {
                      if (arg0 === 1) {
                        throw arg1;
                      } else if (arg0 === 2) {
                        let obj = { value: null, done: true };
                        obj[0] = arg1;
                        return obj;
                      } else {
                        return { value: "HermesInternal", done: "HermesInternal" };
                      }
                    } else {
                      try {
                        c5 = 2;
                        if (0 === c4) {
                          if (arg0 === 1) {
                            c5 = 3;
                            throw arg1;
                          } else if (arg0 === 2) {
                            c5 = 3;
                            obj = { value: null, done: true };
                            obj[0] = arg1;
                            return obj;
                          } else {
                            let navigationContext = tmp3;
                            let callback = tmp5;
                            callback = undefined;
                            navigationContext = undefined;
                            let activeRootSpan2;
                            c3 = undefined;
                            navigationContext = callback(1149).setNavigationContext(closure_1_1, closure_1_2);
                            c3 = 1;
                            c4 = 2;
                            c5 = 1;
                            obj1 = { value: null, done: false };
                            obj1[0] = closure_1_2(closure_1_0);
                            return obj1;
                          }
                        } else if (1 === tmp8) {
                          c3 = 0;
                          const result = callback(1149).clearNavigationContext(dependencyMap);
                          throw activeRootSpan2;
                        } else if (arg0 === 1) {
                          c5 = 3;
                          throw arg1;
                        } else if (arg0 === 2) {
                          c3 = 0;
                          let obj3 = callback(1149);
                          const result1 = obj3.clearNavigationContext(dependencyMap);
                          c5 = 3;
                          const obj2 = { value: null, done: true };
                          obj2[0] = arg1;
                          return obj2;
                        } else {
                          callback = arg1;
                          c3 = 0;
                          const result2 = callback(1149).clearNavigationContext(navigationContext);
                          const obj11 = callback(1149);
                          activeRootSpan2 = callback(1149).getActiveRootSpan();
                          if (activeRootSpan2) {
                            obj = callback(817);
                            if ("navigation" === obj.spanToJSON(activeRootSpan2).op) {
                              if (closure_1_0) {
                                let tmp14 = tmp73;
                              } else {
                                tmp14 = tmp73;
                                if (!tmp73) {
                                  const _location = callback(1024).WINDOW.location;
                                  pathname = undefined;
                                  if (_location != null) {
                                    pathname = _location.pathname;
                                  }
                                  tmp14 = pathname;
                                }
                              }
                              pathname = tmp14;
                              if (pathname) {
                                obj3 = { pathname: null, search: "", hash: "", state: null, key: "default" };
                                obj3[0] = pathname;
                                const _Array = Array;
                                closure_2_19(activeRootSpan, obj3, Array.from(closure_2_14), false, closure_2_8);
                              }
                            }
                          }
                          c5 = 3;
                          const obj4 = { value: null, done: true };
                          obj4[0] = callback;
                          return obj4;
                        }
                      } catch (tmp50) {
                        activeRootSpan2 = tmp50;
                        if (tmp4 === c3) {
                          c5 = tmp2;
                          throw tmp50;
                        } else {
                          c4 = tmp;
                        }
                      }
                    }
                  })();
                  if (activeRootSpan) {
                    (function trackLazyRouteLoad(activeRootSpan, promise) {
                      closure_0 = activeRootSpan;
                      closure_1 = promise;
                      let value = store.get(activeRootSpan);
                      if (!value) {
                        const _Set = Set;
                        set = new Set();
                        const result = store.set(activeRootSpan, set);
                        value = set;
                      }
                      value.add(promise);
                      promise.finally(() => {
                        const value = closure_1_15.get(closure_0);
                        if (value) {
                          value.delete(closure_1);
                        }
                      });
                    })(activeRootSpan, tmp11);
                  }
                  table = 3;
                  obj1 = { value: null, done: true };
                  obj1[0] = tmp11;
                  return obj1;
                }
              } catch (tmp13) {
                table = tmp;
                throw tmp13;
              }
            }
          })();
        });
        obj.patchRoutesOnNavigation = function patchRoutesOnNavigation(arg0) {
          const self = this;
          const apply = closure_1.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        };
        return obj;
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
    tmp4Result = callback(tmp5, _location, basename);
  }
  obj1 = registerSpanErrorInstrumentation;
  const client = obj1.getClient();
  if (client) {
    if (weakSet.has(client)) {
      let tmp6Result = pickSplat;
      const activeRootSpan = tmp6Result.getActiveRootSpan();
      if (activeRootSpan) {
        tmp6Result = registerSpanErrorInstrumentation;
      }
      if ("PUSH" === navigationType) {
        if (tmp4Result) {
          const tmp6Result1 = pickSplat;
          let tmp11 = allRoutes;
          if (!allRoutes) {
            tmp11 = routes;
          }
          let tmp12 = allRoutes;
          if (!allRoutes) {
            tmp12 = routes;
          }
          [tmp21, tmp22] = _slicedToArray(tmp6Result1.resolveRouteNameAndSource(_location, tmp11, tmp12, tmp4Result, basename), 2);
          const tmp24 = computeLocationKey(_location);
          const value = weakMap.get(client);
          let isPlaceholder = !value;
          if (value) {
            isPlaceholder = value.isPlaceholder;
          }
          let timestamp = !isPlaceholder;
          if (!isPlaceholder) {
            timestamp = registerSpanErrorInstrumentation.spanToJSON(value.span).timestamp;
            const tmp6Result2 = registerSpanErrorInstrumentation;
          }
          const tmp26Result = shouldSkipNavigation(value, tmp24, tmp21, timestamp);
          if (tmp26Result.skip) {
            if (tmp26Result.shouldUpdate) {
              if (value) {
                const routeName = value.routeName;
                if (value.isPlaceholder) {
                  value.routeName = tmp21;
                  if (__SENTRY_DEBUG__.DEBUG_BUILD) {
                    const debug3 = registerSpanErrorInstrumentation.debug;
                    const _HermesInternal4 = HermesInternal;
                    debug3.log("[Tracing] Updated placeholder navigation name from \"" + routeName + "\" to \"" + tmp21 + "\" (will apply to real span)");
                  }
                } else {
                  const span = value.span;
                  span.updateName(tmp21);
                  const span2 = value.span;
                  const attr = span2.setAttribute(registerSpanErrorInstrumentation.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, tmp22);
                  const result = registerSpanErrorInstrumentation.addNonEnumerableProperty(value.span, "__sentry_navigation_name_set__", true);
                  value.routeName = tmp21;
                  if (__SENTRY_DEBUG__.DEBUG_BUILD) {
                    const debug2 = registerSpanErrorInstrumentation.debug;
                    const _HermesInternal3 = HermesInternal;
                    debug2.log("[Tracing] Updated navigation span name from \"" + routeName + "\" to \"" + tmp21 + "\"");
                  }
                  const tmp6Result3 = registerSpanErrorInstrumentation;
                }
              }
            }
            if (__SENTRY_DEBUG__.DEBUG_BUILD) {
              const debug = registerSpanErrorInstrumentation.debug;
              const _HermesInternal2 = HermesInternal;
              debug.log("[Tracing] Skipping duplicate navigation for location: " + tmp24);
            }
          } else {
            const obj = { end: null };
            obj[0] = function end() {

            };
            obj[0] = obj;
            obj[1] = tmp21;
            obj[2] = _location.pathname;
            obj[3] = tmp24;
            const result1 = weakMap.set(client, obj);
            try {
              obj1 = { name: null, attributes: null };
              obj1[0] = obj.routeName;
              const obj2 = {};
              obj2[registerSpanErrorInstrumentation.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = tmp22;
              obj2[registerSpanErrorInstrumentation.SEMANTIC_ATTRIBUTE_SENTRY_OP] = "navigation";
              const _HermesInternal = HermesInternal;
              obj2[registerSpanErrorInstrumentation.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.navigation.react.reactrouter_v" + tmp2;
              obj1[1] = obj2;
              const result2 = feedbackAsyncIntegration.startBrowserTracingNavigationSpan(client, obj1);
              if (result2) {
                const obj3 = { span: null, routeName: null, pathname: null, locationKey: null };
                obj3[0] = result2;
                obj3[1] = obj.routeName;
                obj3[2] = _location.pathname;
                obj3[3] = tmp24;
                const result3 = weakMap.set(client, obj3);
                patchSpanEnd(result2, _location, routes, basename, allRoutes, "navigation");
              } else {
                weakMap.delete(client);
              }
              const tmp6Result4 = feedbackAsyncIntegration;
            } catch (tmp45) {
              obj.delete(tmp);
              throw tmp45;
            }
          }
          const tmp20 = _slicedToArray(tmp6Result1.resolveRouteNameAndSource(_location, tmp11, tmp12, tmp4Result, basename), 2);
        }
      }
    }
  }
}
function addRoutesToAllRoutes(arr) {
  const item = arr.forEach((item, index) => {
    set = new Set();
    if (!set.has(item)) {
      set.add(item);
      if (tmp2) {
        const children = item.children;
        item = children.forEach((item, index) => {
          if (set === undefined) {
            let _Set = Set;
            set = new Set();
          }
          if (!set.has(item)) {
            set.add(item);
            if (tmp5) {
              let children = item.children;
              item = children.forEach((item, index) => {
                if (set === undefined) {
                  let _Set = Set;
                  set = new Set();
                }
                if (!set.has(item)) {
                  set.add(item);
                  if (tmp5) {
                    let children = item.children;
                    item = children.forEach((item, index) => {
                      if (set === undefined) {
                        let _Set = Set;
                        set = new Set();
                      }
                      if (!set.has(item)) {
                        set.add(item);
                        if (tmp5) {
                          let children = item.children;
                          item = children.forEach(() => { ... });
                        }
                        tmp5 = item.children && !item.index;
                      }
                      let item1 = set.forEach(() => { ... });
                    });
                  }
                  tmp5 = item.children && !item.index;
                }
                let item1 = set.forEach((item, index) => {
                  set.add(item);
                });
              });
            }
            tmp5 = item.children && !item.index;
          }
          let item1 = set.forEach((item, index) => {
            set.add(item);
          });
        });
      }
      tmp2 = item.children && !item.index;
    }
    const item1 = set.forEach((item, index) => {
      set.add(item);
    });
  });
}
function updatePageloadTransaction(arg0) {
  ({ activeRootSpan, location: _location, routes, matches, basename, allRoutes } = arg0);
  let end = globalThis;
  let tmp = matches;
  if (!Array.isArray(matches)) {
    let tmp3 = allRoutes;
    if (!allRoutes) {
      tmp3 = routes;
    }
    tmp = callback(tmp3, _location, basename);
  }
  if (tmp) {
    let obj = activeRootSpan;
    let result = _location;
    let flag;
    const obj2 = activeRootSpan(_location[4]);
    let tmp5 = allRoutes;
    if (!allRoutes) {
      tmp5 = routes;
    }
    let tmp6 = allRoutes;
    if (!allRoutes) {
      tmp6 = routes;
    }
    [tmp15, tmp16] = basename(obj2.resolveRouteNameAndSource(_location, tmp5, tmp6, tmp, basename), 2);
    const tmp14 = basename(obj2.resolveRouteNameAndSource(_location, tmp5, tmp6, tmp, basename), 2);
    const currentScope = obj(result[6]).getCurrentScope();
    let str = tmp15;
    if (!tmp15) {
      str = "/";
    }
    currentScope.setTransactionName(str);
    if (activeRootSpan) {
      activeRootSpan.updateName(tmp15);
      const attr = activeRootSpan.setAttribute(obj(result[6]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, tmp16);
      const pageload = "pageload";
      closure_6 = flag;
      c7 = flag;
      const _HermesInternal = HermesInternal;
      const combined = "__sentry_" + "pageload" + "_end_patched__";
      let tmp22;
      if (activeRootSpan != null) {
        tmp22 = activeRootSpan[combined];
      }
      if (!tmp22) {
        if (activeRootSpan.end) {
          if (allRoutes) {
            new end.Set(allRoutes);
          }
          end = activeRootSpan.end;
          closure_6 = end.bind(activeRootSpan);
          c7 = false;
          activeRootSpan.end = function patchedEnd() {
            const items = [...arguments];
            let first;
            let cleanupNavigationSpan;
            if (!c7) {
              c7 = true;
              if (items.length > 0) {
                first = items[0];
              } else {
                const _Date = Date;
                first = Date.now() / 1000;
              }
              let spanToJSONResult = callback(table[6]).spanToJSON(first);
              ({ description, data } = spanToJSONResult);
              if (data != null) {
                data[callback(undefined, table[6]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
              }
              cleanupNavigationSpan = function cleanupNavigationSpan() {

              };
              let value = weakMap1.get(tmp5);
              if (value) {
                if (value.size > 0) {
                  if (description) {
                    let tmp3Result = callback(table[4]);
                    if (0 === closure_1_11) {
                      tryUpdateSpanNameBeforeEnd(tmp5, spanToJSONResult, description, cleanupNavigationSpan, closure_2, closure_3, closure_4, set);
                      tmp3Result = callback(table[6]);
                      let client = tmp3Result.getClient();
                      if (client) {
                        if ("navigation" === closure_4) {
                          value = weakMap.get(client);
                          let tmp47 = value;
                          if (value) {
                            tmp47 = value.span === tmp5;
                          }
                          if (tmp47) {
                            weakMap.delete(client);
                          }
                        }
                      }
                      callback2(first);
                    } else {
                      const nextPromise = Promise.allSettled(value).then((result) => {

                      });
                      let racePromise = nextPromise;
                      if (closure_1_11 !== Infinity) {
                        const items1 = [nextPromise, ];
                        const promise = new Promise((arg0) => setTimeout(arg0, closure_11));
                        items1[1] = promise;
                        racePromise = Promise.race(items1);
                      }
                      const allSettledResult = Promise.allSettled(value);
                      racePromise.then((result) => {
                        const spanToJSONResult = callback(817).spanToJSON(first);
                        tryUpdateSpanNameBeforeEnd(first, spanToJSONResult, spanToJSONResult.description, cleanupNavigationSpan, routes, basename, navigation, set);
                        if (typeof cleanupNavigationSpan !== "function") {
                          HermesBuiltin.throwTypeError();
                        }
                        const obj = callback(817);
                        const client = callback(817).getClient();
                        if (client) {
                          if ("navigation" === navigation) {
                            const value = weakMap.get(client);
                            let tmp9 = value;
                            if (value) {
                              tmp9 = value.span === first;
                            }
                            if (tmp9) {
                              weakMap.delete(client);
                            }
                          }
                        }
                        closure_1_6(first);
                        const tmpResult = callback(817);
                      }).catch((error) => {
                        if (typeof cleanupNavigationSpan !== "function") {
                          HermesBuiltin.throwTypeError();
                        }
                        const client = callback(817).getClient();
                        if (client) {
                          if ("navigation" === navigation) {
                            const value = weakMap.get(client);
                            let tmp4 = value;
                            if (value) {
                              tmp4 = value.span === first;
                            }
                            if (tmp4) {
                              weakMap.delete(client);
                            }
                          }
                        }
                        closure_1_6(first);
                        const obj = callback(817);
                      });
                      const nextPromise1 = racePromise.then((result) => {
                        const spanToJSONResult = callback(817).spanToJSON(first);
                        tryUpdateSpanNameBeforeEnd(first, spanToJSONResult, spanToJSONResult.description, cleanupNavigationSpan, routes, basename, navigation, set);
                        if (typeof cleanupNavigationSpan !== "function") {
                          HermesBuiltin.throwTypeError();
                        }
                        const obj = callback(817);
                        const client = callback(817).getClient();
                        if (client) {
                          if ("navigation" === navigation) {
                            const value = weakMap.get(client);
                            let tmp9 = value;
                            if (value) {
                              tmp9 = value.span === first;
                            }
                            if (tmp9) {
                              weakMap.delete(client);
                            }
                          }
                        }
                        closure_1_6(first);
                        const tmpResult = callback(817);
                      });
                    }
                  }
                }
              }
              tryUpdateSpanNameBeforeEnd(first, spanToJSONResult, description, cleanupNavigationSpan, closure_2, closure_3, closure_4, set);
              let obj = callback(table[6]);
              const client1 = callback(table[6]).getClient();
              if (client1) {
                if ("navigation" === closure_4) {
                  const value1 = weakMap.get(client1);
                  let tmp24 = value1;
                  if (value1) {
                    tmp24 = value1.span === tmp5;
                  }
                  if (tmp24) {
                    weakMap.delete(client1);
                  }
                }
              }
              callback2(first);
              const tmp3Result1 = callback(table[6]);
            }
          };
          obj = obj(result[6]);
          flag = true;
          result = obj.addNonEnumerableProperty(activeRootSpan, combined, true);
        }
      }
    }
    const objResult = obj(result[6]);
  }
}
function tryUpdateSpanNameBeforeEnd(updateName, data, description, _location, closure_2, basename, closure_4, set) {
  try {
    data = data.data;
    let tmp4;
    if (data != null) {
      tmp4 = data[registerSpanErrorInstrumentation.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
    }
    if ("route" === tmp4) {
      if (description) {
        pickSplat;
      }
    }
    let tmp15 = closure_2;
    const _Array = Array;
    const arr = Array.from(set);
    if (arr.length > 0) {
      tmp15 = arr;
    }
    const tmp23 = callback(tmp15, _location, basename);
    if (tmp23) {
      let obj2 = pickSplat;
      const tmp37 = _slicedToArray(obj2.resolveRouteNameAndSource(_location, tmp21, tmp21, tmp24, basename), 2);
      const first = tmp37[0];
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
              result = !callback(1149).transactionNameHasWildcard(description);
              const obj = callback(1149);
            }
            if (!result) {
              result = "route" !== arg3;
            }
            if (!result) {
              result = callback(1149).transactionNameHasWildcard(description);
              const obj2 = callback(1149);
            }
            tmp5 = !result;
          }
          if (!tmp5) {
            tmp5 = "route" !== arg1 && "route" === arg3;
          }
          tmp = tmp5;
        }
        return tmp;
      })(description, tmp10, first, tmp40, true);
      let tmp47 = "pageload" === closure_4;
      if (!tmp47) {
        tmp47 = !data.timestamp;
      }
      if (tmp46) {
        tmp46 = tmp47;
      }
      if (tmp46) {
        updateName.updateName(first);
        const attr = updateName.setAttribute(registerSpanErrorInstrumentation.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, tmp40);
      }
    }
    tmp10 = tmp4;
  } catch (tmp54) {
    if (__SENTRY_DEBUG__.DEBUG_BUILD) {
      const debug = registerSpanErrorInstrumentation.debug;
      const _HermesInternal = HermesInternal;
      debug.warn("Error updating span details before ending: " + tmp54);
    }
  }
}
function patchSpanEnd(result2, _location, routes, basename, allRoutes, navigation) {
  const _require = result2;
  dependencyMap = _location;
  closure_2 = routes;
  closure_3 = basename;
  closure_4 = navigation;
  let end = globalThis;
  const combined = "__sentry_" + navigation + "_end_patched__";
  let tmp2;
  if (result2 != null) {
    tmp2 = result2[combined];
  }
  if (!tmp2) {
    if (result2.end) {
      if (allRoutes) {
        set = new end.Set(allRoutes);
      }
      end = result2.end;
      closure_6 = end.bind(result2);
      c7 = false;
      result2.end = function patchedEnd() {
        const items = [...arguments];
        let first;
        let cleanupNavigationSpan;
        if (!c7) {
          c7 = true;
          if (items.length > 0) {
            first = items[0];
          } else {
            const _Date = Date;
            first = Date.now() / 1000;
          }
          let spanToJSONResult = callback(table[6]).spanToJSON(first);
          ({ description, data } = spanToJSONResult);
          if (data != null) {
            data[callback(undefined, table[6]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
          }
          cleanupNavigationSpan = function cleanupNavigationSpan() {

          };
          let value = weakMap1.get(tmp5);
          if (value) {
            if (value.size > 0) {
              if (description) {
                let tmp3Result = callback(table[4]);
                if (0 === closure_1_11) {
                  tryUpdateSpanNameBeforeEnd(tmp5, spanToJSONResult, description, cleanupNavigationSpan, closure_2, closure_3, closure_4, set);
                  tmp3Result = callback(table[6]);
                  let client = tmp3Result.getClient();
                  if (client) {
                    if ("navigation" === closure_4) {
                      value = weakMap.get(client);
                      let tmp47 = value;
                      if (value) {
                        tmp47 = value.span === tmp5;
                      }
                      if (tmp47) {
                        weakMap.delete(client);
                      }
                    }
                  }
                  callback2(first);
                } else {
                  const nextPromise = Promise.allSettled(value).then((result) => {

                  });
                  let racePromise = nextPromise;
                  if (closure_1_11 !== Infinity) {
                    const items1 = [nextPromise, ];
                    const promise = new Promise((arg0) => setTimeout(arg0, closure_11));
                    items1[1] = promise;
                    racePromise = Promise.race(items1);
                  }
                  const allSettledResult = Promise.allSettled(value);
                  racePromise.then((result) => {
                    const spanToJSONResult = callback(817).spanToJSON(first);
                    tryUpdateSpanNameBeforeEnd(first, spanToJSONResult, spanToJSONResult.description, cleanupNavigationSpan, routes, basename, navigation, set);
                    if (typeof cleanupNavigationSpan !== "function") {
                      HermesBuiltin.throwTypeError();
                    }
                    const obj = callback(817);
                    const client = callback(817).getClient();
                    if (client) {
                      if ("navigation" === navigation) {
                        const value = weakMap.get(client);
                        let tmp9 = value;
                        if (value) {
                          tmp9 = value.span === first;
                        }
                        if (tmp9) {
                          weakMap.delete(client);
                        }
                      }
                    }
                    closure_1_6(first);
                    const tmpResult = callback(817);
                  }).catch((error) => {
                    if (typeof cleanupNavigationSpan !== "function") {
                      HermesBuiltin.throwTypeError();
                    }
                    const client = callback(817).getClient();
                    if (client) {
                      if ("navigation" === navigation) {
                        const value = weakMap.get(client);
                        let tmp4 = value;
                        if (value) {
                          tmp4 = value.span === first;
                        }
                        if (tmp4) {
                          weakMap.delete(client);
                        }
                      }
                    }
                    closure_1_6(first);
                    const obj = callback(817);
                  });
                  const nextPromise1 = racePromise.then((result) => {
                    const spanToJSONResult = callback(817).spanToJSON(first);
                    tryUpdateSpanNameBeforeEnd(first, spanToJSONResult, spanToJSONResult.description, cleanupNavigationSpan, routes, basename, navigation, set);
                    if (typeof cleanupNavigationSpan !== "function") {
                      HermesBuiltin.throwTypeError();
                    }
                    const obj = callback(817);
                    const client = callback(817).getClient();
                    if (client) {
                      if ("navigation" === navigation) {
                        const value = weakMap.get(client);
                        let tmp9 = value;
                        if (value) {
                          tmp9 = value.span === first;
                        }
                        if (tmp9) {
                          weakMap.delete(client);
                        }
                      }
                    }
                    closure_1_6(first);
                    const tmpResult = callback(817);
                  });
                }
              }
            }
          }
          tryUpdateSpanNameBeforeEnd(first, spanToJSONResult, description, cleanupNavigationSpan, closure_2, closure_3, closure_4, set);
          let obj = callback(table[6]);
          const client1 = callback(table[6]).getClient();
          if (client1) {
            if ("navigation" === closure_4) {
              const value1 = weakMap.get(client1);
              let tmp24 = value1;
              if (value1) {
                tmp24 = value1.span === tmp5;
              }
              if (tmp24) {
                weakMap.delete(client1);
              }
            }
          }
          callback2(first);
          const tmp3Result1 = callback(table[6]);
        }
      };
      const result = _require(817).addNonEnumerableProperty(result2, combined, true);
      let obj = _require(817);
    }
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let c10 = false;
let c11 = 3000;
const weakSet = new WeakSet();
const weakMap = new WeakMap();
let set = new Set();
const weakMap1 = new WeakMap();

export const addResolvedRoutesToParent = function addResolvedRoutesToParent(arr, children) {
  const tmp = children.children || [];
  closure_0 = tmp;
  const found = arr.filter((item, index) => {
    const lib = item;
    return !lib.some((item, index) => {
      let tmp2 = item === item;
      if (!tmp2) {
        tmp2 = item.path && item.path === item.path;
      }
      if (!tmp2) {
        tmp2 = item.id && item.id === item.id;
      }
      return tmp2;
    });
  });
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
  const _require = instrumentPageLoad;
  dependencyMap = _6;
  _require(1024);
  let obj = {};
  const merged = Object.assign(instrumentPageLoad);
  obj.instrumentPageLoad = false;
  obj.instrumentNavigation = false;
  let result = obj.browserTracingIntegration(obj);
  asyncGeneratorStep = result;
  ({ useEffect: _slicedToArray, useLocation: closure_4, useNavigationType: closure_5, createRoutesFromChildren: closure_6, matchRoutes: closure_7, stripBasename: closure_8, enableAsyncRouteHandlers } = instrumentPageLoad);
  closure_9 = undefined !== enableAsyncRouteHandlers && enableAsyncRouteHandlers;
  instrumentPageLoad = instrumentPageLoad.instrumentPageLoad;
  closure_10 = undefined === instrumentPageLoad || instrumentPageLoad;
  const instrumentNavigation = instrumentPageLoad.instrumentNavigation;
  const lazyRouteTimeout = instrumentPageLoad.lazyRouteTimeout;
  obj = {};
  const merged1 = Object.assign(result);
  obj.setup = function setup(arg0) {
    closure_2.setup(arg0);
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
      if (instrumentPageLoad(1142).DEBUG_BUILD) {
        const debug3 = instrumentPageLoad(817).debug;
        debug3.log("[React Router] lazyRouteTimeout set to Infinity, capping at finalTimeout:", num, "ms to prevent indefinite hangs");
      }
    } else {
      const _Number = Number;
      if (Number.isNaN(tmp4)) {
        if (instrumentPageLoad(1142).DEBUG_BUILD) {
          const debug2 = instrumentPageLoad(817).debug;
          debug2.warn("[React Router] lazyRouteTimeout must be a number, falling back to default:", result);
        }
        num = result;
      } else if (tmp4 < 0) {
        if (instrumentPageLoad(1142).DEBUG_BUILD) {
          const debug = instrumentPageLoad(817).debug;
          debug.warn("[React Router] lazyRouteTimeout must be non-negative or Infinity, got:", tmp4, "falling back to:", result);
        }
        num = result;
      } else {
        num = tmp4;
      }
    }
    closure_4 = closure_3;
    closure_5 = closure_4;
    closure_6 = closure_5;
    closure_8 = closure_7;
    closure_7 = closure_6;
    closure_10 = closure_9;
    let flag = closure_8;
    if (!closure_8) {
      flag = false;
    }
    const result1 = instrumentPageLoad(1149).initializeRouterUtils(closure_7, flag);
    const obj = instrumentPageLoad(1149);
  };
  obj.afterAllSetup = function afterAllSetup(f103592) {
    closure_2.afterAllSetup(f103592);
    const _location = instrumentPageLoad(1024).WINDOW.location;
    if (_location != null) {
      const pathname = _location.pathname;
    }
    let tmp4 = closure_10;
    if (closure_10) {
      tmp4 = pathname;
    }
    if (tmp4) {
      let obj = { name: null, attributes: null };
      obj[0] = pathname;
      obj = {};
      obj[instrumentPageLoad(817).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = "url";
      obj[instrumentPageLoad(817).SEMANTIC_ATTRIBUTE_SENTRY_OP] = "pageload";
      const _HermesInternal = HermesInternal;
      obj[instrumentPageLoad(817).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.pageload.react.reactrouter_v" + dependencyMap;
      obj[1] = obj;
      result = instrumentPageLoad(1024).startBrowserTracingPageLoadSpan(f103592, obj);
      const tmp2Result = instrumentPageLoad(1024);
    }
    if (num) {
      lazyRouteTimeout.add(f103592);
    }
  };
  return obj;
};
export const createV6CompatibleWithSentryReactRouterRouting = function createV6CompatibleWithSentryReactRouterRouting(arg0, _6) {
  const _require = arg0;
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
            _require(1140).hoistNonReactStatics(SentryRoutes, arg0);
            return SentryRoutes;
          }
        }
      }
    }
  }
  if (_require(1142).DEBUG_BUILD) {
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
  const _require = arg0;
  dependencyMap = _6;
  if (closure_4) {
    if (closure_5) {
      if (closure_6) {
        if (closure_8) {
          let fn = (arr, basename) => {
            addRoutesToAllRoutes(arr);
            if (closure_1_10) {
              const tmp3 = arr[Symbol.iterator]();
              while (tmp3 !== undefined) {
                let obj = callback(1150);
                let result = obj.checkRouteForAsyncHandler(tmp5, processResolvedRoutes);
                continue;
              }
            }
            const tmp11 = callback(arr, wrapPatchRoutesOnNavigation(basename));
            basename = undefined;
            if (basename != null) {
              basename = basename.basename;
            }
            const activeRootSpan = callback(1149).getActiveRootSpan();
            if (tmp14) {
              obj = { activeRootSpan: null, location: null, routes: null, basename: null, allRoutes: null };
              obj[0] = activeRootSpan;
              obj[1] = tmp11.state.location;
              obj[2] = arr;
              obj[3] = basename;
              const _Array = Array;
              obj[4] = Array.from(set);
              updatePageloadTransaction(obj);
            }
            setupRouterSubscription(tmp11, arr, dependencyMap, basename, activeRootSpan);
            return tmp11;
          };
        }
        return fn;
      }
    }
  }
  fn = arg0;
  if (_require(1142).DEBUG_BUILD) {
    const debug = tmp4(817).debug;
    const _HermesInternal = HermesInternal;
    debug.warn("reactRouterV" + _6 + "Instrumentation was unable to wrap the `createRouter` function because of one or more missing parameters.");
    fn = arg0;
  }
  tmp4 = _require;
};
export const createV6CompatibleWrapCreateMemoryRouter = function createV6CompatibleWrapCreateMemoryRouter(arg0, _6) {
  const _require = arg0;
  dependencyMap = _6;
  if (closure_4) {
    if (closure_5) {
      if (closure_6) {
        if (closure_8) {
          let fn = (arr, basename) => {
            addRoutesToAllRoutes(arr);
            if (closure_1_10) {
              const tmp3 = arr[Symbol.iterator]();
              while (tmp3 !== undefined) {
                let obj = callback(1150);
                let result = obj.checkRouteForAsyncHandler(tmp5, processResolvedRoutes);
                continue;
              }
            }
            const tmp11 = callback(arr, wrapPatchRoutesOnNavigation(basename, true));
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
            let tmp15 = initialEntries;
            if (initialEntries) {
              tmp15 = 1 === initialEntries.length;
            }
            if (tmp15) {
              let first = initialEntries[0];
            } else if (tmp16) {
              first = initialEntries[initialIndex];
            }
            if (first) {
              let tmp18 = first;
              if (typeof first === "string") {
                obj = { pathname: null };
                obj[0] = first;
                tmp18 = obj;
              }
              let _location = tmp18;
            } else {
              _location = tmp11.state.location;
            }
            const activeRootSpan = callback(1149).getActiveRootSpan();
            if (tmp20) {
              obj = { activeRootSpan: null, location: null, routes: null, basename: null, allRoutes: null };
              obj[0] = activeRootSpan;
              obj[1] = _location;
              obj[2] = arr;
              obj[3] = basename;
              const _Array = Array;
              obj[4] = Array.from(set);
              updatePageloadTransaction(obj);
            }
            setupRouterSubscription(tmp11, arr, dependencyMap, basename, activeRootSpan);
            return tmp11;
          };
        }
        return fn;
      }
    }
  }
  fn = arg0;
  if (_require(1142).DEBUG_BUILD) {
    const debug = tmp4(817).debug;
    const _HermesInternal = HermesInternal;
    debug.warn("reactRouterV" + _6 + "Instrumentation was unable to wrap the `createMemoryRouter` function because of one or more missing parameters.");
    fn = arg0;
  }
  tmp4 = _require;
};
export const createV6CompatibleWrapUseRoutes = function createV6CompatibleWrapUseRoutes(arg0, _6) {
  const _require = arg0;
  dependencyMap = _6;
  if (closure_4) {
    if (closure_5) {
      if (closure_6) {
        if (closure_8) {
          function SentryRoutes(routes) {
            const callback = noop.useRef(true);
            routes = routes.routes;
            let locationArg = routes.locationArg;
            let tmp2 = closure_1_5();
            const tmp3 = closure_1_6();
            closure_2 = tmp3;
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
                let obj = { pathname: null };
                obj[0] = tmp;
                tmp2 = obj;
              }
              if (ref.current) {
                const item = routes.forEach((item, index) => {
                  set = new Set();
                  if (!set.has(item)) {
                    set.add(item);
                    if (tmp2) {
                      const children = item.children;
                      item = children.forEach((item, index) => {
                        if (set === undefined) {
                          let _Set = Set;
                          set = new Set();
                        }
                        if (!set.has(item)) {
                          set.add(item);
                          if (tmp5) {
                            let children = item.children;
                            item = children.forEach(() => { ... });
                          }
                          tmp5 = item.children && !item.index;
                        }
                        let item1 = set.forEach(() => { ... });
                      });
                    }
                    tmp2 = item.children && !item.index;
                  }
                  const item1 = set.forEach((item, index) => {
                    set.add(item);
                  });
                });
                obj = { activeRootSpan: null, location: null, routes: null, allRoutes: null };
                obj[0] = ref(table[4]).getActiveRootSpan();
                obj[1] = tmp2;
                obj[2] = routes;
                const _Array2 = Array;
                obj[3] = Array.from(set);
                updatePageloadTransaction(obj);
                tmp3.current = false;
                const obj3 = ref(table[4]);
              } else {
                obj = { location: null, routes: null, navigationType: null, version: null, allRoutes: null };
                obj[0] = tmp2;
                obj[1] = routes;
                obj[2] = closure_2;
                obj[3] = routes;
                const _Array = Array;
                obj[4] = Array.from(set);
                handleNavigation(obj);
              }
            }, items);
            return callback(routes, locationArg);
          }
          return (routes, locationArg) => <SentryRoutes routes={routes} locationArg={locationArg} />;
        }
      }
    }
  }
  if (_require(1142).DEBUG_BUILD) {
    const debug = _require(817).debug;
    debug.warn("reactRouterV6Instrumentation was unable to wrap `useRoutes` because of one or more missing parameters.");
  }
  return arg0;
};
export { handleNavigation };
export { processResolvedRoutes };
export { shouldSkipNavigation };
export { updateNavigationSpan };