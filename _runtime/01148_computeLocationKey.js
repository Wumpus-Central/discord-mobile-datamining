// _runtime/01148_computeLocationKey.js
import asyncGeneratorStep from "createAsyncHandlerProxy";
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { registerSpanErrorInstrumentation } from "00817_registerSpanErrorInstrumentation.js";
import { feedbackAsyncIntegration } from "01024_feedbackAsyncIntegration.js";
import { getStatics } from "01140_getStatics.js";
import { pickSplat } from "01149_pickSplat.js";
import { __SENTRY_DEBUG__ } from "metro/01142___SENTRY_DEBUG__.js";

function computeLocationKey(_location) {
  let pathname;
  let search;
  ({ search, pathname } = _location);
  if (!search) {
    search = "";
  }
  return "" + pathname + search + _location.hash || "";
}
function shouldSkipNavigation(locationKey, arg1, arr) {
  if (locationKey) {
    if (locationKey.locationKey === arg1) {
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
  const item = arr.forEach((item10034) => {
    set.add(item10034);
    if (closure_10) {
      const result = table(table[5]).checkRouteForAsyncHandler(item10034, closure_18);
      const obj = table(table[5]);
    }
  });
  if (children) {
    let tmp3 = children.children || [];
    const require = tmp3;
    const found = arr.filter((arg0) => !arg0.some((path) => {
      let tmp2 = path === closure_0;
      if (!tmp2) {
        tmp2 = tmp.path && path.path === tmp.path;
        const tmp3 = tmp.path && path.path === tmp.path;
      }
      if (!tmp2) {
        tmp2 = tmp.id && path.id === tmp.id;
        const tmp4 = tmp.id && path.id === tmp.id;
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
    let obj = pickSplat;
    activeRootSpan = obj.getActiveRootSpan();
  }
  if (activeRootSpan) {
    let obj1 = registerSpanErrorInstrumentation;
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
function updateNavigationSpan(activeRootSpan, _location, arg2, arg3, closure_8) {
  let tmp17;
  let tmp18;
  let flag = arg3;
  if (arg3 === undefined) {
    flag = false;
  }
  const spanToJSONResult = registerSpanErrorInstrumentation.spanToJSON(activeRootSpan);
  const description = spanToJSONResult.description;
  let prop;
  if (activeRootSpan != null) {
    prop = activeRootSpan.__sentry_navigation_name_set__;
  }
  let result = description;
  if (description) {
    let tmpResult = tmp(1149);
    result = tmpResult.transactionNameHasWildcard(description);
  }
  if (!spanToJSONResult.timestamp) {
    const tmp9 = closure_8(arg2, _location);
    tmpResult = tmp(1149);
    let items = tmp9;
    if (!tmp9) {
      items = [];
    }
    [tmp17, tmp18] = _slicedToArray(tmpResult.resolveRouteNameAndSource(_location, arg2, arg2, items, ""), 2);
    const data = spanToJSONResult.data;
    if (data != null) {
      const tmp19 = data[tmp(undefined, 817).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
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
      const attr = activeRootSpan.setAttribute(tmp(817).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, tmp18);
      let result1 = tmp(1149).transactionNameHasWildcard(tmp17);
      if (!result1) {
        result1 = "route" !== tmp18;
      }
      if (!result1) {
        const result2 = tmp(817).addNonEnumerableProperty(activeRootSpan, "__sentry_navigation_name_set__", true);
        const tmpResult2 = tmp(817);
      }
      const tmpResult1 = tmp(1149);
    }
    const tmp16 = _slicedToArray(tmpResult.resolveRouteNameAndSource(_location, arg2, arg2, items, ""), 2);
  }
}
function setupRouterSubscription(subscribe) {
  const _require = arg1;
  const dependencyMap = arg2;
  let closure_2 = arg3;
  let c3 = false;
  let tmp = arg4;
  if (tmp) {
    tmp = "pageload" === _registerSpanErrorInstrumentation.spanToJSON(arg4).op;
    let obj = _registerSpanErrorInstrumentation;
  }
  let closure_4 = tmp;
  let c5 = false;
  let c6 = null;
  let c7 = null;
  const subscription = subscribe.subscribe((historyAction) => {
    let pathname;
    let search;
    const callback = historyAction;
    if (!c3) {
      let obj = callback(1149);
      const activeRootSpan = obj.getActiveRootSpan();
      if (activeRootSpan) {
        if ("pageload" === obj2.spanToJSON(activeRootSpan).op) {
          let c4 = true;
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
      let combined = "" + pathname + search + _location.hash || "";
      if ("idle" !== historyAction.navigation.state) {
        if (combined !== combined) {
          combined = null;
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
          if (combined !== combined) {
            let c6 = null;
            const obj = { location: null, routes: null, navigationType: null, version: null, basename: null, allRoutes: null };
            obj[0] = historyAction.location;
            obj[1] = historyAction;
            obj[2] = historyAction.historyAction;
            obj[3] = combined;
            obj[4] = outer1_2;
            const _Array = Array;
            obj[5] = Array.from(outer2_14);
            outer2_22(obj);
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
        if (combined !== combined) {
          c6 = null;
          obj = { location: null, routes: null, navigationType: null, version: null, basename: null, allRoutes: null };
          obj[0] = historyAction.location;
          obj[1] = callback;
          obj[2] = historyAction.historyAction;
          obj[3] = combined;
          obj[4] = closure_2;
          let _Array = Array;
          obj[5] = Array.from(outer1_14);
          outer1_22(obj);
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
      const tmp8 = _location.hash || "";
    }
  });
}
function wrapPatchRoutesOnNavigation(arg0) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let obj = arg0;
  let closure_1;
  let patchRoutesOnNavigation;
  if (arg0) {
    if ("patchRoutesOnNavigation" in obj) {
      if (typeof obj.patchRoutesOnNavigation === "function") {
        patchRoutesOnNavigation = obj.patchRoutesOnNavigation;
        obj = {};
        const merged = Object.assign(obj);
        closure_1 = patchRoutesOnNavigation((arg0) => {
          let closure_0 = arg0;
          let c1 = 0;
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
                return { value: "HermesInternal", done: null };
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
                    path = tmp19.path;
                  }
                  table = path;
                  obj = callback(table[4]);
                  let activeRootSpan = obj.getActiveRootSpan();
                  if (!callback) {
                    let patch;
                    if (tmp19 != null) {
                      patch = tmp19.patch;
                    }
                    if (patch) {
                      tmp19.patch = (arg0, arr) => {
                        let item = arr.forEach((children) => {
                          const set = new Set();
                          if (!set.has(children)) {
                            set.add(children);
                            if (tmp2) {
                              children = children.children;
                              const item = children.forEach(() => { ... });
                            }
                            tmp2 = children.children && !children.index;
                          }
                          const item1 = set.forEach(() => { ... });
                        });
                        let obj = callback(table[4]);
                        const activeRootSpan = obj.getActiveRootSpan();
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
                          outer2_19(activeRootSpan, obj, Array.from(outer2_14), true, outer2_8);
                        }
                        return patch(arg0, arr);
                      };
                    }
                  }
                  const tmp11 = outer1_2(function*() {
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
                        return { value: "HermesInternal", done: null };
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
                            let c3;
                            navigationContext = callback(1149).setNavigationContext(outer1_1, outer1_2);
                            c3 = 1;
                            c4 = 2;
                            c5 = 1;
                            const obj1 = { value: null, done: false };
                            obj1[0] = outer1_2(outer1_0);
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
                              if (outer1_0) {
                                let tmp14 = tmp73;
                              } else {
                                tmp14 = tmp73;
                                if (!tmp73) {
                                  const _location = callback(1024).WINDOW.location;
                                  let pathname;
                                  if (_location != null) {
                                    pathname = _location.pathname;
                                  }
                                  tmp14 = pathname;
                                }
                              }
                              const patch = tmp14;
                              if (patch) {
                                obj3 = { pathname: null, search: "", hash: "", state: null, key: "default" };
                                obj3[0] = patch;
                                const _Array = Array;
                                outer2_19(activeRootSpan, obj3, Array.from(outer2_14), false, outer2_8);
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
                      let closure_0 = activeRootSpan;
                      let closure_1 = promise;
                      let value = closure_15.get(activeRootSpan);
                      if (!value) {
                        const _Set = Set;
                        const set = new Set();
                        const result = closure_15.set(activeRootSpan, set);
                        value = set;
                      }
                      value.add(promise);
                      promise.finally(() => {
                        const value = outer1_15.get(closure_0);
                        if (value) {
                          value.delete(closure_1);
                        }
                      });
                    })(activeRootSpan, tmp11);
                  }
                  table = 3;
                  let obj1 = { value: null, done: true };
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
  let _location;
  let allRoutes;
  let basename;
  let matches;
  let navigationType;
  let routes;
  let tmp21;
  let tmp22;
  ({ location: _location, routes, navigationType, matches, basename, allRoutes } = arg0);
  let tmp4Result = matches;
  if (!Array.isArray(matches)) {
    let tmp5 = allRoutes;
    if (!allRoutes) {
      tmp5 = routes;
    }
    tmp4Result = closure_8(tmp5, _location, basename);
    const tmp4 = closure_8;
  }
  let obj1 = registerSpanErrorInstrumentation;
  const client = obj1.getClient();
  if (client) {
    if (weakSet.has(client)) {
      let tmp6Result = tmp6(1149);
      const activeRootSpan = tmp6Result.getActiveRootSpan();
      if (activeRootSpan) {
        tmp6Result = tmp6(817);
      }
      if ("PUSH" === navigationType) {
        if (tmp4Result) {
          const tmp6Result1 = tmp6(1149);
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
            timestamp = tmp6(817).spanToJSON(value.span).timestamp;
            const tmp6Result2 = tmp6(817);
          }
          const tmp26Result = shouldSkipNavigation(value, tmp24, tmp21, timestamp);
          if (tmp26Result.skip) {
            if (tmp26Result.shouldUpdate) {
              if (value) {
                const routeName = value.routeName;
                if (value.isPlaceholder) {
                  value.routeName = tmp21;
                  if (tmp6(1142).DEBUG_BUILD) {
                    const debug3 = tmp6(817).debug;
                    const _HermesInternal4 = HermesInternal;
                    debug3.log("[Tracing] Updated placeholder navigation name from \"" + routeName + "\" to \"" + tmp21 + "\" (will apply to real span)");
                  }
                } else {
                  const span = value.span;
                  span.updateName(tmp21);
                  const span2 = value.span;
                  const attr = span2.setAttribute(tmp6(817).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, tmp22);
                  const result = tmp6(817).addNonEnumerableProperty(value.span, "__sentry_navigation_name_set__", true);
                  value.routeName = tmp21;
                  if (tmp6(1142).DEBUG_BUILD) {
                    const debug2 = tmp6(817).debug;
                    const _HermesInternal3 = HermesInternal;
                    debug2.log("[Tracing] Updated navigation span name from \"" + routeName + "\" to \"" + tmp21 + "\"");
                  }
                  const tmp6Result3 = tmp6(817);
                }
              }
            }
            if (tmp6(1142).DEBUG_BUILD) {
              const debug = tmp6(817).debug;
              const _HermesInternal2 = HermesInternal;
              debug.log("[Tracing] Skipping duplicate navigation for location: " + tmp24);
            }
          } else {
            let obj = { span: null, routeName: null, pathname: null, locationKey: null, isPlaceholder: true };
            obj = { end: null };
            obj[0] = function end() {

            };
            obj[0] = obj;
            obj[1] = tmp21;
            obj[2] = _location.pathname;
            obj[3] = tmp24;
            const result1 = obj6.set(client, obj);
            try {
              obj1 = { name: null, attributes: null };
              obj1[0] = obj.routeName;
              const obj2 = {};
              obj2[tmp6(817).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = tmp22;
              obj2[tmp6(817).SEMANTIC_ATTRIBUTE_SENTRY_OP] = "navigation";
              const _HermesInternal = HermesInternal;
              obj2[tmp6(817).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.navigation.react.reactrouter_v" + tmp2;
              obj1[1] = obj2;
              const result2 = tmp6(1024).startBrowserTracingNavigationSpan(client, obj1);
              if (result2) {
                const obj3 = { span: null, routeName: null, pathname: null, locationKey: null };
                obj3[0] = result2;
                obj3[1] = obj.routeName;
                obj3[2] = _location.pathname;
                obj3[3] = tmp24;
                const result3 = obj6.set(client, obj3);
                patchSpanEnd(result2, _location, routes, basename, allRoutes, "navigation");
              } else {
                obj6.delete(client);
              }
              const tmp6Result4 = tmp6(1024);
            } catch (tmp45) {
              obj.delete(tmp);
              throw tmp45;
            }
          }
          const tmp20 = _slicedToArray(tmp6Result1.resolveRouteNameAndSource(_location, tmp11, tmp12, tmp4Result, basename), 2);
          const tmp26 = shouldSkipNavigation;
        }
      }
    }
  }
}
function addRoutesToAllRoutes(arr) {
  const item = arr.forEach((children) => {
    const set = new Set();
    if (!set.has(children)) {
      set.add(children);
      if (tmp2) {
        children = children.children;
        const item = children.forEach((children) => {
          if (set === undefined) {
            let _Set = Set;
            set = new Set();
          }
          if (!set.has(children)) {
            set.add(children);
            if (tmp5) {
              children = children.children;
              let item = children.forEach((children) => {
                if (set === undefined) {
                  let _Set = Set;
                  set = new Set();
                }
                if (!set.has(children)) {
                  set.add(children);
                  if (tmp5) {
                    children = children.children;
                    let item = children.forEach((children) => {
                      if (set === undefined) {
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
                let item1 = set.forEach((arg0) => {
                  set.add(arg0);
                });
              });
            }
            tmp5 = children.children && !children.index;
          }
          let item1 = set.forEach((arg0) => {
            set.add(arg0);
          });
        });
      }
      tmp2 = children.children && !children.index;
    }
    const item1 = set.forEach((arg0) => {
      set.add(arg0);
    });
  });
}
function updatePageloadTransaction(arg0) {
  let _location;
  let activeRootSpan;
  let allRoutes;
  let basename;
  let matches;
  let routes;
  let tmp15;
  let tmp16;
  ({ activeRootSpan, location: _location, routes, matches, basename, allRoutes } = arg0);
  let end = globalThis;
  let tmp = matches;
  if (!Array.isArray(matches)) {
    let tmp3 = allRoutes;
    if (!allRoutes) {
      tmp3 = routes;
    }
    tmp = closure_8(tmp3, _location, basename);
    const tmp2 = closure_8;
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
      let set = flag;
      let closure_6 = flag;
      let c7 = flag;
      const _HermesInternal = HermesInternal;
      const combined = "__sentry_" + "pageload" + "_end_patched__";
      let tmp22;
      if (activeRootSpan != null) {
        tmp22 = activeRootSpan[combined];
      }
      if (!tmp22) {
        if (activeRootSpan.end) {
          if (allRoutes) {
            set = new end.Set(allRoutes);
          }
          end = activeRootSpan.end;
          closure_6 = end.bind(activeRootSpan);
          c7 = false;
          activeRootSpan.end = function patchedEnd() {
            let data;
            let description;
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
                const tmp8 = data[tmp3(undefined, tmp4[6]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
              }
              cleanupNavigationSpan = function cleanupNavigationSpan() {

              };
              let value = outer1_15.get(tmp5);
              if (value) {
                if (value.size > 0) {
                  if (description) {
                    let tmp3Result = tmp3(tmp4[4]);
                    if (0 === outer1_11) {
                      outer1_25(tmp5, spanToJSONResult, description, cleanupNavigationSpan, closure_2, closure_3, closure_4, set);
                      tmp3Result = tmp3(tmp4[6]);
                      let client = tmp3Result.getClient();
                      if (client) {
                        if ("navigation" === closure_4) {
                          value = outer1_13.get(client);
                          let tmp47 = value;
                          if (value) {
                            tmp47 = value.span === tmp5;
                          }
                          if (tmp47) {
                            obj6.delete(client);
                          }
                          obj6 = outer1_13;
                        }
                      }
                      callback2(first);
                    } else {
                      const nextPromise = Promise.allSettled(value).then(() => {

                      });
                      let racePromise = nextPromise;
                      if (outer1_11 !== Infinity) {
                        const items1 = [nextPromise, ];
                        const promise = new Promise((arg0) => setTimeout(arg0, closure_11));
                        items1[1] = promise;
                        racePromise = Promise.race(items1);
                      }
                      const allSettledResult = Promise.allSettled(value);
                      racePromise.then(() => {
                        const spanToJSONResult = callback(817).spanToJSON(first);
                        outer2_25(first, spanToJSONResult, spanToJSONResult.description, cleanupNavigationSpan, outer1_2, outer1_3, outer1_4, outer1_5);
                        if (typeof cleanupNavigationSpan !== "function") {
                          HermesBuiltin.throwTypeError();
                        }
                        const obj = callback(817);
                        const tmp = callback;
                        const tmp3 = first;
                        const tmp5 = outer1_4;
                        const client = callback(817).getClient();
                        if (client) {
                          if ("navigation" === tmp5) {
                            const value = outer2_13.get(client);
                            let tmp9 = value;
                            if (value) {
                              tmp9 = value.span === tmp3;
                            }
                            if (tmp9) {
                              obj3.delete(client);
                            }
                            obj3 = outer2_13;
                          }
                        }
                        outer1_6(first);
                      }).catch(() => {
                        if (typeof cleanupNavigationSpan !== "function") {
                          HermesBuiltin.throwTypeError();
                        }
                        const client = callback(817).getClient();
                        if (client) {
                          if ("navigation" === outer1_4) {
                            const value = outer2_13.get(client);
                            let tmp4 = value;
                            if (value) {
                              tmp4 = value.span === first;
                            }
                            if (tmp4) {
                              obj2.delete(client);
                            }
                            obj2 = outer2_13;
                          }
                        }
                        outer1_6(first);
                      });
                      const nextPromise1 = racePromise.then(() => {
                        const spanToJSONResult = callback(817).spanToJSON(first);
                        outer2_25(first, spanToJSONResult, spanToJSONResult.description, cleanupNavigationSpan, outer1_2, outer1_3, outer1_4, outer1_5);
                        if (typeof cleanupNavigationSpan !== "function") {
                          HermesBuiltin.throwTypeError();
                        }
                        const obj = callback(817);
                        const tmp = callback;
                        const tmp3 = first;
                        const tmp5 = outer1_4;
                        const client = callback(817).getClient();
                        if (client) {
                          if ("navigation" === tmp5) {
                            const value = outer2_13.get(client);
                            let tmp9 = value;
                            if (value) {
                              tmp9 = value.span === tmp3;
                            }
                            if (tmp9) {
                              obj3.delete(client);
                            }
                            obj3 = outer2_13;
                          }
                        }
                        outer1_6(first);
                      });
                    }
                  }
                }
              }
              outer1_25(first, spanToJSONResult, description, cleanupNavigationSpan, closure_2, closure_3, closure_4, set);
              let obj = callback(table[6]);
              const tmp15 = closure_4;
              const client1 = callback(table[6]).getClient();
              if (client1) {
                if ("navigation" === tmp15) {
                  const value1 = outer1_13.get(client1);
                  let tmp24 = value1;
                  if (value1) {
                    tmp24 = value1.span === tmp5;
                  }
                  if (tmp24) {
                    obj4.delete(client1);
                  }
                  obj4 = outer1_13;
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
function tryUpdateSpanNameBeforeEnd(updateName, data, description, _location, arg4, basename) {
  try {
    data = data.data;
    let tmp4;
    if (data != null) {
      tmp4 = data[require(undefined, 817) /* registerSpanErrorInstrumentation */.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
    }
    if ("route" === tmp4) {
      if (description) {
        let obj = pickSplat;
      }
    }
    let tmp15 = arg4;
    const _Array = Array;
    const arr = Array.from(arg7);
    if (arr.length > 0) {
      tmp15 = arr;
    }
    const tmp23 = callback(tmp15, _location, basename);
    if (tmp23) {
      let obj2 = pickSplat;
      const tmp37 = _slicedToArray(obj2.resolveRouteNameAndSource(_location, tmp21, tmp21, tmp24, basename), 2);
      const first = tmp37[0];
      let tmp46 = (function shouldUpdateWildcardSpanName(description, arg1, first, arg3, arg4) {
        let flag = arg4;
        if (arg4 === undefined) {
          flag = false;
        }
        let tmp = first;
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
              result = callback(1149).transactionNameHasWildcard(first);
              const obj2 = callback(1149);
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
      const debug = tmp55(817).debug;
      const _HermesInternal = HermesInternal;
      debug.warn("Error updating span details before ending: " + tmp54);
    }
    tmp55 = require;
  }
}
function patchSpanEnd(result2, _location, routes, basename, allRoutes, navigation) {
  const _require = result2;
  const dependencyMap = _location;
  let closure_2 = routes;
  let closure_3 = basename;
  let closure_4 = navigation;
  let end = globalThis;
  const combined = "__sentry_" + navigation + "_end_patched__";
  let tmp2;
  if (result2 != null) {
    tmp2 = result2[combined];
  }
  if (!tmp2) {
    if (result2.end) {
      if (allRoutes) {
        const set = new end.Set(allRoutes);
      }
      end = result2.end;
      let closure_6 = end.bind(result2);
      let c7 = false;
      result2.end = function patchedEnd() {
        let data;
        let description;
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
            const tmp8 = data[tmp3(undefined, tmp4[6]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
          }
          cleanupNavigationSpan = function cleanupNavigationSpan() {

          };
          let value = outer1_15.get(tmp5);
          if (value) {
            if (value.size > 0) {
              if (description) {
                let tmp3Result = tmp3(tmp4[4]);
                if (0 === outer1_11) {
                  outer1_25(tmp5, spanToJSONResult, description, cleanupNavigationSpan, closure_2, closure_3, closure_4, set);
                  tmp3Result = tmp3(tmp4[6]);
                  let client = tmp3Result.getClient();
                  if (client) {
                    if ("navigation" === closure_4) {
                      value = outer1_13.get(client);
                      let tmp47 = value;
                      if (value) {
                        tmp47 = value.span === tmp5;
                      }
                      if (tmp47) {
                        obj6.delete(client);
                      }
                      obj6 = outer1_13;
                    }
                  }
                  callback2(first);
                } else {
                  const nextPromise = Promise.allSettled(value).then(() => {

                  });
                  let racePromise = nextPromise;
                  if (outer1_11 !== Infinity) {
                    const items1 = [nextPromise, ];
                    const promise = new Promise((arg0) => setTimeout(arg0, closure_11));
                    items1[1] = promise;
                    racePromise = Promise.race(items1);
                  }
                  const allSettledResult = Promise.allSettled(value);
                  racePromise.then(() => {
                    const spanToJSONResult = callback(817).spanToJSON(first);
                    outer2_25(first, spanToJSONResult, spanToJSONResult.description, cleanupNavigationSpan, outer1_2, outer1_3, outer1_4, outer1_5);
                    if (typeof cleanupNavigationSpan !== "function") {
                      HermesBuiltin.throwTypeError();
                    }
                    const obj = callback(817);
                    const tmp = callback;
                    const tmp3 = first;
                    const tmp5 = outer1_4;
                    const client = callback(817).getClient();
                    if (client) {
                      if ("navigation" === tmp5) {
                        const value = outer2_13.get(client);
                        let tmp9 = value;
                        if (value) {
                          tmp9 = value.span === tmp3;
                        }
                        if (tmp9) {
                          obj3.delete(client);
                        }
                        obj3 = outer2_13;
                      }
                    }
                    outer1_6(first);
                  }).catch(() => {
                    if (typeof cleanupNavigationSpan !== "function") {
                      HermesBuiltin.throwTypeError();
                    }
                    const client = callback(817).getClient();
                    if (client) {
                      if ("navigation" === outer1_4) {
                        const value = outer2_13.get(client);
                        let tmp4 = value;
                        if (value) {
                          tmp4 = value.span === first;
                        }
                        if (tmp4) {
                          obj2.delete(client);
                        }
                        obj2 = outer2_13;
                      }
                    }
                    outer1_6(first);
                  });
                  const nextPromise1 = racePromise.then(() => {
                    const spanToJSONResult = callback(817).spanToJSON(first);
                    outer2_25(first, spanToJSONResult, spanToJSONResult.description, cleanupNavigationSpan, outer1_2, outer1_3, outer1_4, outer1_5);
                    if (typeof cleanupNavigationSpan !== "function") {
                      HermesBuiltin.throwTypeError();
                    }
                    const obj = callback(817);
                    const tmp = callback;
                    const tmp3 = first;
                    const tmp5 = outer1_4;
                    const client = callback(817).getClient();
                    if (client) {
                      if ("navigation" === tmp5) {
                        const value = outer2_13.get(client);
                        let tmp9 = value;
                        if (value) {
                          tmp9 = value.span === tmp3;
                        }
                        if (tmp9) {
                          obj3.delete(client);
                        }
                        obj3 = outer2_13;
                      }
                    }
                    outer1_6(first);
                  });
                }
              }
            }
          }
          outer1_25(first, spanToJSONResult, description, cleanupNavigationSpan, closure_2, closure_3, closure_4, set);
          let obj = callback(table[6]);
          const tmp15 = closure_4;
          const client1 = callback(table[6]).getClient();
          if (client1) {
            if ("navigation" === tmp15) {
              const value1 = outer1_13.get(client1);
              let tmp24 = value1;
              if (value1) {
                tmp24 = value1.span === tmp5;
              }
              if (tmp24) {
                obj4.delete(client1);
              }
              obj4 = outer1_13;
            }
          }
          callback2(first);
          const tmp3Result1 = callback(table[6]);
        }
      };
      const result = _registerSpanErrorInstrumentation.addNonEnumerableProperty(result2, combined, true);
      let obj = _registerSpanErrorInstrumentation;
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
  const require = tmp;
  const found = arr.filter((arg0) => !arg0.some((path) => {
    let tmp2 = path === closure_0;
    if (!tmp2) {
      tmp2 = tmp.path && path.path === tmp.path;
      const tmp3 = tmp.path && path.path === tmp.path;
    }
    if (!tmp2) {
      tmp2 = tmp.id && path.id === tmp.id;
      const tmp4 = tmp.id && path.id === tmp.id;
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
  let _slicedToArray;
  let closure_4;
  let closure_5;
  let closure_6;
  let closure_7;
  let closure_8;
  let enableAsyncRouteHandlers;
  const _require = instrumentPageLoad;
  const dependencyMap = _6;
  let obj = _feedbackAsyncIntegration;
  obj = {};
  const merged = Object.assign(instrumentPageLoad);
  obj.instrumentPageLoad = false;
  obj.instrumentNavigation = false;
  let result = obj.browserTracingIntegration(obj);
  const asyncGeneratorStep = result;
  ({ useEffect: _slicedToArray, useLocation: closure_4, useNavigationType: closure_5, createRoutesFromChildren: closure_6, matchRoutes: closure_7, stripBasename: closure_8, enableAsyncRouteHandlers } = instrumentPageLoad);
  let closure_9 = undefined !== enableAsyncRouteHandlers && enableAsyncRouteHandlers;
  instrumentPageLoad = instrumentPageLoad.instrumentPageLoad;
  let closure_10 = undefined === instrumentPageLoad || instrumentPageLoad;
  const instrumentNavigation = instrumentPageLoad.instrumentNavigation;
  let closure_11 = undefined === instrumentNavigation || instrumentNavigation;
  const lazyRouteTimeout = instrumentPageLoad.lazyRouteTimeout;
  obj = {};
  const merged1 = Object.assign(result);
  obj.setup = function setup(arg0) {
    closure_2.setup(arg0);
    let num = instrumentPageLoad.finalTimeout;
    if (num == null) {
      num = 30000;
    }
    let num2 = instrumentPageLoad.idleTimeout;
    if (num2 == null) {
      num2 = 1000;
    }
    const result = 3 * num2;
    let tmp4 = lazyRouteTimeout;
    if (lazyRouteTimeout == null) {
      tmp4 = result;
    }
    if (tmp4 === Infinity) {
      let closure_11 = num;
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
        closure_11 = result;
      } else if (tmp4 < 0) {
        if (instrumentPageLoad(1142).DEBUG_BUILD) {
          const debug = instrumentPageLoad(817).debug;
          debug.warn("[React Router] lazyRouteTimeout must be non-negative or Infinity, got:", tmp4, "falling back to:", result);
        }
        closure_11 = result;
      } else {
        closure_11 = tmp4;
      }
    }
    const outer1_4 = closure_3;
    const outer1_5 = closure_4;
    const outer1_6 = closure_5;
    const outer1_8 = closure_7;
    const outer1_7 = closure_6;
    let closure_10 = closure_9;
    let flag = closure_8;
    if (!closure_8) {
      flag = false;
    }
    const result1 = instrumentPageLoad(1149).initializeRouterUtils(closure_7, flag);
  };
  obj.afterAllSetup = function afterAllSetup(f103283) {
    closure_2.afterAllSetup(f103283);
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
      obj[tmp2(817).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = "url";
      obj[tmp2(817).SEMANTIC_ATTRIBUTE_SENTRY_OP] = "pageload";
      const _HermesInternal = HermesInternal;
      obj[tmp2(817).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.pageload.react.reactrouter_v" + dependencyMap;
      obj[1] = obj;
      const result = tmp2(1024).startBrowserTracingPageLoadSpan(f103283, obj);
      const tmp2Result = tmp2(1024);
    }
    if (closure_11) {
      lazyRouteTimeout.add(f103283);
    }
  };
  return obj;
};
export const createV6CompatibleWithSentryReactRouterRouting = function createV6CompatibleWithSentryReactRouterRouting(arg0, _6) {
  const _require = arg0;
  const dependencyMap = _6;
  if (closure_4) {
    if (closure_5) {
      if (closure_6) {
        if (closure_7) {
          if (closure_8) {
            class SentryRoutes {
              constructor(arg0) {
                closure_0 = arg0;
                useRef = outer1_9.useRef(true);
                tmp = outer1_5();
                closure_2 = tmp;
                tmp2 = outer1_6();
                closure_3 = tmp2;
                items = [, ];
                items[0] = tmp;
                items[1] = tmp2;
                tmp3 = outer1_4(() => { ... }, items);
                obj = {};
                merged = Object.assign(arg0);
                return outer1_9.createElement(closure_0, obj);
              }
            }
            _getStatics.hoistNonReactStatics(SentryRoutes, arg0);
            return SentryRoutes;
          }
        }
      }
    }
  }
  if (___SENTRY_DEBUG__.DEBUG_BUILD) {
    class SentryRoutes {
      constructor(arg0) {
        closure_0 = arg0;
        useRef = outer1_9.useRef(true);
        tmp = outer1_5();
        closure_2 = tmp;
        tmp2 = outer1_6();
        closure_3 = tmp2;
        items = [, ];
        items[0] = tmp;
        items[1] = tmp2;
        tmp3 = outer1_4(() => { ... }, items);
        obj = {};
        merged = Object.assign(arg0);
        return outer1_9.createElement(closure_0, obj);
      }
    }
    const _HermesInternal = HermesInternal;
    obj.warn("reactRouterV6Instrumentation was unable to wrap Routes because of one or more missing parameters.\n      useEffect: " + closure_4 + ". useLocation: " + closure_5 + ". useNavigationType: " + closure_6 + ".\n      createRoutesFromChildren: " + closure_7 + ". matchRoutes: " + closure_8 + ".");
  }
  return arg0;
};
export const createV6CompatibleWrapCreateBrowserRouter = function createV6CompatibleWrapCreateBrowserRouter(arg0, _6) {
  const _require = arg0;
  const dependencyMap = _6;
  if (closure_4) {
    if (closure_5) {
      if (closure_6) {
        if (closure_8) {
          let fn = (arg0, basename) => {
            outer1_23(arg0);
            if (outer1_10) {
              const tmp3 = arg0[Symbol.iterator]();
              while (tmp3 !== undefined) {
                let tmp7 = callback;
                let tmp8 = dependencyMap;
                let obj = callback(1150);
                let tmp9 = outer1_18;
                let result = obj.checkRouteForAsyncHandler(tmp5, outer1_18);
                continue;
              }
            }
            const tmp11 = callback(arg0, outer1_21(basename));
            basename = undefined;
            if (basename != null) {
              basename = basename.basename;
            }
            const activeRootSpan = callback(1149).getActiveRootSpan();
            if (tmp14) {
              obj = { activeRootSpan: null, location: null, routes: null, basename: null, allRoutes: null };
              obj[0] = activeRootSpan;
              obj[1] = tmp11.state.location;
              obj[2] = arg0;
              obj[3] = basename;
              const _Array = Array;
              obj[4] = Array.from(outer1_14);
              outer1_24(obj);
            }
            outer1_20(tmp11, arg0, dependencyMap, basename, activeRootSpan);
            return tmp11;
          };
        }
        return fn;
      }
    }
  }
  fn = arg0;
  if (___SENTRY_DEBUG__.DEBUG_BUILD) {
    const debug = _registerSpanErrorInstrumentation.debug;
    const _HermesInternal = HermesInternal;
    debug.warn("reactRouterV" + _6 + "Instrumentation was unable to wrap the `createRouter` function because of one or more missing parameters.");
    fn = arg0;
  }
};
export const createV6CompatibleWrapCreateMemoryRouter = function createV6CompatibleWrapCreateMemoryRouter(arg0, _6) {
  const _require = arg0;
  const dependencyMap = _6;
  if (closure_4) {
    if (closure_5) {
      if (closure_6) {
        if (closure_8) {
          let fn = (arg0, basename) => {
            outer1_23(arg0);
            if (outer1_10) {
              const tmp3 = arg0[Symbol.iterator]();
              while (tmp3 !== undefined) {
                let tmp7 = callback;
                let tmp8 = dependencyMap;
                let obj = callback(1150);
                let tmp9 = outer1_18;
                let result = obj.checkRouteForAsyncHandler(tmp5, outer1_18);
                continue;
              }
            }
            const tmp11 = callback(arg0, outer1_21(basename, true));
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
              obj[2] = arg0;
              obj[3] = basename;
              const _Array = Array;
              obj[4] = Array.from(outer1_14);
              outer1_24(obj);
            }
            outer1_20(tmp11, arg0, dependencyMap, basename, activeRootSpan);
            return tmp11;
          };
        }
        return fn;
      }
    }
  }
  fn = arg0;
  if (___SENTRY_DEBUG__.DEBUG_BUILD) {
    const debug = _registerSpanErrorInstrumentation.debug;
    const _HermesInternal = HermesInternal;
    debug.warn("reactRouterV" + _6 + "Instrumentation was unable to wrap the `createMemoryRouter` function because of one or more missing parameters.");
    fn = arg0;
  }
};
export const createV6CompatibleWrapUseRoutes = function createV6CompatibleWrapUseRoutes(arg0, _6) {
  const _require = arg0;
  const dependencyMap = _6;
  if (closure_4) {
    if (closure_5) {
      if (closure_6) {
        if (closure_8) {
          function SentryRoutes(routes) {
            const callback = outer1_9.useRef(true);
            routes = routes.routes;
            const locationArg = routes.locationArg;
            let tmp2 = outer1_5();
            const tmp3 = outer1_6();
            const SentryRoutes = tmp3;
            if (typeof locationArg === "string") {
              tmp2 = locationArg;
            } else {
              let pathname;
              if (locationArg != null) {
                pathname = locationArg.pathname;
              }
            }
            let closure_3 = tmp2;
            const items = [tmp3, tmp2];
            outer1_4(() => {
              let tmp2 = closure_3;
              if (typeof closure_3 === "string") {
                let obj = { pathname: null };
                obj[0] = tmp;
                tmp2 = obj;
              }
              if (ref.current) {
                const item = routes.forEach((children) => {
                  const set = new Set();
                  if (!set.has(children)) {
                    set.add(children);
                    if (tmp2) {
                      children = children.children;
                      const item = children.forEach((children) => {
                        if (set === undefined) {
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
                  const item1 = set.forEach((arg0) => {
                    set.add(arg0);
                  });
                });
                obj = { activeRootSpan: null, location: null, routes: null, allRoutes: null };
                obj[0] = ref(table[4]).getActiveRootSpan();
                obj[1] = tmp2;
                obj[2] = routes;
                const _Array2 = Array;
                obj[3] = Array.from(outer2_14);
                outer2_24(obj);
                tmp3.current = false;
                const obj3 = ref(table[4]);
              } else {
                obj = { location: null, routes: null, navigationType: null, version: null, allRoutes: null };
                obj[0] = tmp2;
                obj[1] = routes;
                obj[2] = closure_2;
                obj[3] = routes;
                const _Array = Array;
                obj[4] = Array.from(outer2_14);
                outer2_22(obj);
              }
            }, items);
            return callback(routes, locationArg);
          }
          return (routes, locationArg) => <SentryRoutes routes={arg0} locationArg={arg1} />;
        }
      }
    }
  }
  if (___SENTRY_DEBUG__.DEBUG_BUILD) {
    const debug = _registerSpanErrorInstrumentation.debug;
    debug.warn("reactRouterV6Instrumentation was unable to wrap `useRoutes` because of one or more missing parameters.");
  }
  return arg0;
};
export { handleNavigation };
export { processResolvedRoutes };
export { shouldSkipNavigation };
export { updateNavigationSpan };