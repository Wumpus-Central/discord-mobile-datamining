// _runtime/01013_computeLocationKey.js
import _mod682 from "metro/00682__.js";
import feedbackAsyncIntegration from "00889_feedbackAsyncIntegration.js";
import _mod1007 from "metro/01007__.js";
import pickSplat from "01014_pickSplat.js";
import _mod1015 from "metro/01015__.js";
import asyncGeneratorStep from "00005_asyncGeneratorStep.js";
import _slicedToArray from "metro/00032__.js";
import noop from "metro/00019__.js";

function computeLocationKey(_location) {
  ({ search, pathname } = _location);
  if (!search) {
    search = "";
  }
  return "" + pathname + search + _location.hash || "";
}
function shouldSkipNavigation(locationKey, arg1, arr, arg3) {
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
        num = undefined;
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
      obj = { skip: true, shouldUpdate: !tmp16 };
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
  const item = arr.forEach((item) => {
    set.add(item);
    if (closure_1_10) {
      const result = closure_0(dependencyMap[5]).checkRouteForAsyncHandler(item, processResolvedRoutes);
      const obj = closure_0(dependencyMap[5]);
    }
  });
  if (children) {
    let tmp3 = children.children || [];
    closure_0 = tmp3;
    const found = arr.filter((item) => {
      closure_0 = item;
      return !closure_0.some((path) => {
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
      });
    });
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
    let obj1 = _mod682;
    const spanToJSONResult = obj1.spanToJSON(activeRootSpan);
    if (spanToJSONResult.timestamp) {
      if (tmp12(1007).DEBUG_BUILD) {
        const debug = tmp12(682).debug;
        debug.warn("[React Router] Lazy handler resolved after span ended - skipping update");
      }
    } else {
      const op = spanToJSONResult.op;
      let tmp15 = tmp;
      if (!tmp) {
        tmp15 = tmp;
        if (!activeRootSpan) {
          tmp15 = tmp;
          if (undefined !== tmp12(889).WINDOW) {
            const _location = tmp12(889).WINDOW.location;
            let pathname;
            if (_location != null) {
              pathname = _location.pathname;
            }
            tmp15 = tmp;
            if (pathname) {
              obj = { pathname: _location.pathname };
              tmp15 = obj;
            }
          }
        }
      }
      if (tmp15) {
        if ("pageload" === op) {
          obj = { activeRootSpan, location: null, routes: null, allRoutes: null };
          obj1 = { pathname: tmp15.pathname };
          obj.location = obj1;
          const _Array = Array;
          obj.routes = Array.from(set);
          const _Array2 = Array;
          obj.allRoutes = Array.from(set);
          updatePageloadTransaction(obj);
        } else if ("navigation" === op) {
          const _Array3 = Array;
          updateNavigationSpan(activeRootSpan, tmp15, Array.from(set), false, closure_8);
        }
      }
    }
  }
}
function updateNavigationSpan(activeRootSpan, _location, routes, arg3, fn) {
  let flag = arg3;
  if (arg3 === undefined) {
    flag = false;
  }
  const spanToJSONResult = _mod682.spanToJSON(activeRootSpan);
  const description = spanToJSONResult.description;
  let prop;
  if (activeRootSpan != null) {
    prop = activeRootSpan.__sentry_navigation_name_set__;
  }
  let result = description;
  if (description) {
    let tmpResult = tmp(1014);
    result = tmpResult.transactionNameHasWildcard(description);
  }
  if (!spanToJSONResult.timestamp) {
    const tmp9 = fn(routes, _location);
    tmpResult = tmp(1014);
    let items = tmp9;
    if (!tmp9) {
      items = [];
    }
    [tmp17, tmp18] = _slicedToArray(tmpResult.resolveRouteNameAndSource(_location, routes, routes, items, ""), 2);
    const data = spanToJSONResult.data;
    if (data != null) {
      const tmp19 = data[tmp(undefined, 682).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
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
      const attr = activeRootSpan.setAttribute(tmp(682).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, tmp18);
      let result1 = tmp(1014).transactionNameHasWildcard(tmp17);
      if (!result1) {
        result1 = "route" !== tmp18;
      }
      if (!result1) {
        const result2 = tmp(682).addNonEnumerableProperty(activeRootSpan, "__sentry_navigation_name_set__", true);
        const tmpResult2 = tmp(682);
      }
      const tmpResult1 = tmp(1014);
    }
    const tmp16 = _slicedToArray(tmpResult.resolveRouteNameAndSource(_location, routes, routes, items, ""), 2);
  }
}
function setupRouterSubscription(subscribe, routes, arg2, basename, activeRootSpan) {
  _require = routes;
  dependencyMap = arg2;
  c3 = false;
  let tmp = activeRootSpan;
  if (tmp) {
    tmp = "pageload" === require("metro/00682__.js").spanToJSON(activeRootSpan).op;
    let obj = require("metro/00682__.js");
  }
  closure_4 = tmp;
  c5 = false;
  c6 = null;
  closure_7 = null;
  const subscription = subscribe.subscribe((historyAction) => {
    routes = historyAction;
    if (!c3) {
      let obj = routes(1014);
      const activeRootSpan = obj.getActiveRootSpan();
      if (activeRootSpan) {
        if ("pageload" === obj2.spanToJSON(activeRootSpan).op) {
          c4 = true;
        }
        obj2 = routes(682);
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
          const WINDOW3 = routes(889).WINDOW;
          let _cancelAnimationFrame;
          if (WINDOW3 != null) {
            _cancelAnimationFrame = WINDOW3.cancelAnimationFrame;
          }
          if (_cancelAnimationFrame) {
            const WINDOW4 = tmp19(889).WINDOW;
            WINDOW4.cancelAnimationFrame(tmp17);
          } else {
            const _clearTimeout2 = clearTimeout;
            clearTimeout(tmp17);
          }
          tmp19 = routes;
        }
        const WINDOW5 = routes(889).WINDOW;
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
          const WINDOW6 = routes(889).WINDOW;
          let animationFrame = WINDOW6.requestAnimationFrame(navigationHandler);
        } else {
          const _setTimeout = setTimeout;
          animationFrame = setTimeout(navigationHandler, 0);
        }
        c6 = animationFrame;
      } else if (null === c6) {
        if (combined !== combined) {
          c6 = null;
          obj = { location: historyAction.location, routes, navigationType: historyAction.historyAction, version: combined, basename, allRoutes: null };
          let _Array = Array;
          obj.allRoutes = Array.from(set);
          handleNavigation(obj);
        }
      } else {
        let WINDOW = routes;
        const WINDOW2 = routes(889).WINDOW;
        let _cancelAnimationFrame1;
        if (WINDOW2 != null) {
          _cancelAnimationFrame1 = WINDOW2.cancelAnimationFrame;
        }
        if (_cancelAnimationFrame1) {
          WINDOW = WINDOW(889).WINDOW;
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
        closure_1 = patchRoutesOnNavigation(function*(arg0, value) {
          if (c1 === 2) {
            c1 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              let obj = { value, done: true };
              return obj;
            } else {
              return { value: "HermesInternal", done: null };
            }
          } else {
            try {
              c1 = 2;
              if (arg0 === 1) {
                c1 = 3;
                throw value;
              } else if (arg0 === 2) {
                c1 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                let path;
                if (closure_0 != null) {
                  path = tmp18.path;
                }
                obj = closure_0(c1[4]);
                let activeRootSpan = obj.getActiveRootSpan();
                if (!flag) {
                  let patch;
                  if (tmp18 != null) {
                    patch = tmp18.patch;
                  }
                  if (patch) {
                    tmp18.patch = (arg0, arr) => {
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
                      let obj = flag(path[4]);
                      activeRootSpan = obj.getActiveRootSpan();
                      let tmp6 = path;
                      if (path) {
                        tmp6 = activeRootSpan;
                      }
                      if (tmp6) {
                        tmp6 = "navigation" === flag(path[6]).spanToJSON(activeRootSpan).op;
                        const tmp2Result = flag(path[6]);
                      }
                      if (tmp6) {
                        obj = { pathname: path, search: "", hash: "", state: null, key: "default" };
                        const _Array = Array;
                        updateNavigationSpan(activeRootSpan, obj, Array.from(set), true, closure_3_8);
                      }
                      return patch(arg0, arr);
                    };
                  }
                }
                const tmp11 = patchRoutesOnNavigation(function*(arg0, value) {
                  if (c5 === 2) {
                    c5 = 3;
                    throw new TypeError("Generator functions may not be called on executing generators");
                  } else if (tmp7 === 3) {
                    if (arg0 === 1) {
                      throw value;
                    } else if (arg0 === 2) {
                      let obj = { value, done: true };
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
                          throw value;
                        } else if (arg0 === 2) {
                          c5 = 3;
                          obj = { value, done: true };
                          return obj;
                        } else {
                          closure_1 = tmp3;
                          closure_128_0 = undefined;
                          let navigationContext;
                          let activeRootSpan2;
                          closure_128_3 = undefined;
                          navigationContext = tmp5(path[4]).setNavigationContext(path, activeRootSpan);
                          c3 = 1;
                          c4 = 2;
                          c5 = 1;
                          const obj1 = { value: tmp50(tmp5), done: false };
                          return obj1;
                        }
                      } else if (1 === tmp8) {
                        c3 = 0;
                        const result = tmp5(path[4]).clearNavigationContext(navigationContext);
                        throw tmp50;
                      } else if (arg0 === 1) {
                        c5 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c3 = 0;
                        let obj3 = tmp5(path[4]);
                        const result1 = obj3.clearNavigationContext(navigationContext);
                        c5 = 3;
                        const obj2 = { value, done: true };
                        return obj2;
                      } else {
                        closure_128_0 = value;
                        c3 = 0;
                        const result2 = tmp5(path[4]).clearNavigationContext(navigationContext);
                        const obj11 = tmp5(path[4]);
                        activeRootSpan2 = tmp5(path[4]).getActiveRootSpan();
                        if (activeRootSpan2) {
                          obj = tmp5(path[6]);
                          if ("navigation" === obj.spanToJSON(activeRootSpan2).op) {
                            if (tmp5) {
                              let tmp14 = tmp72;
                            } else {
                              tmp14 = tmp72;
                              if (!tmp72) {
                                const _location = tmp5(path[3]).WINDOW.location;
                                let pathname;
                                if (_location != null) {
                                  pathname = _location.pathname;
                                }
                                tmp14 = pathname;
                              }
                            }
                            closure_128_3 = tmp14;
                            if (closure_128_3) {
                              obj3 = { pathname: closure_128_3, search: "", hash: "", state: null, key: "default" };
                              const _Array = Array;
                              closure_2_19(activeRootSpan2, obj3, Array.from(closure_2_14), false, closure_2_8);
                            }
                          }
                        }
                        c5 = 3;
                        const obj4 = { value: closure_128_0, done: true };
                        return obj4;
                      }
                    } catch (tmp50) {
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
                    value = closure_15.get(activeRootSpan);
                    if (!value) {
                      const _Set = Set;
                      set = new Set();
                      const result = closure_15.set(activeRootSpan, set);
                      value = set;
                    }
                    value.add(promise);
                    promise.finally(() => {
                      value = closure_2_15.get(closure_0);
                      if (value) {
                        value.delete(closure_1);
                      }
                    });
                  })(activeRootSpan, tmp11);
                }
                c1 = 3;
                let obj1 = { value: tmp11, done: true };
                return obj1;
              }
            } catch (tmp13) {
              c1 = tmp;
              throw tmp13;
            }
          }
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
    tmp4Result = closure_8(tmp5, _location, basename);
  }
  let obj1 = _mod682;
  const client = obj1.getClient();
  if (client) {
    if (weakSet.has(client)) {
      let tmp6Result = tmp6(1014);
      const activeRootSpan = tmp6Result.getActiveRootSpan();
      if (activeRootSpan) {
        tmp6Result = tmp6(682);
      }
      if ("PUSH" === navigationType) {
        if (tmp4Result) {
          const tmp6Result1 = tmp6(1014);
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
          value = weakMap.get(client);
          let isPlaceholder = !value;
          if (value) {
            isPlaceholder = value.isPlaceholder;
          }
          let timestamp = !isPlaceholder;
          if (!isPlaceholder) {
            timestamp = tmp6(682).spanToJSON(value.span).timestamp;
            const tmp6Result2 = tmp6(682);
          }
          const tmp26Result = shouldSkipNavigation(value, tmp24, tmp21, timestamp);
          if (tmp26Result.skip) {
            if (tmp26Result.shouldUpdate) {
              if (value) {
                const routeName = value.routeName;
                if (value.isPlaceholder) {
                  value.routeName = tmp21;
                  if (tmp6(1007).DEBUG_BUILD) {
                    const debug3 = tmp6(682).debug;
                    const _HermesInternal4 = HermesInternal;
                    debug3.log("[Tracing] Updated placeholder navigation name from \"" + routeName + "\" to \"" + tmp21 + "\" (will apply to real span)");
                  }
                } else {
                  const span = value.span;
                  span.updateName(tmp21);
                  const span2 = value.span;
                  const attr = span2.setAttribute(tmp6(682).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, tmp22);
                  const result = tmp6(682).addNonEnumerableProperty(value.span, "__sentry_navigation_name_set__", true);
                  value.routeName = tmp21;
                  if (tmp6(1007).DEBUG_BUILD) {
                    const debug2 = tmp6(682).debug;
                    const _HermesInternal3 = HermesInternal;
                    debug2.log("[Tracing] Updated navigation span name from \"" + routeName + "\" to \"" + tmp21 + "\"");
                  }
                  const tmp6Result3 = tmp6(682);
                }
              }
            }
            if (tmp6(1007).DEBUG_BUILD) {
              const debug = tmp6(682).debug;
              const _HermesInternal2 = HermesInternal;
              debug.log("[Tracing] Skipping duplicate navigation for location: " + tmp24);
            }
          } else {
            let obj = { span: null, routeName: null, pathname: null, locationKey: null, isPlaceholder: true };
            obj = {
              end() {

                        }
            };
            obj.span = obj;
            obj.routeName = tmp21;
            obj.pathname = _location.pathname;
            obj.locationKey = tmp24;
            const result1 = obj6.set(client, obj);
            try {
              obj1 = { name: obj.routeName, attributes: null };
              const obj2 = {};
              obj2[tmp6(682).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = tmp22;
              obj2[tmp6(682).SEMANTIC_ATTRIBUTE_SENTRY_OP] = "navigation";
              const _HermesInternal = HermesInternal;
              obj2[tmp6(682).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.navigation.react.reactrouter_v" + tmp2;
              obj1.attributes = obj2;
              const result2 = tmp6(889).startBrowserTracingNavigationSpan(client, obj1);
              if (result2) {
                const obj3 = { span: result2, routeName: obj.routeName, pathname: _location.pathname, locationKey: tmp24 };
                const result3 = obj6.set(client, obj3);
                patchSpanEnd(result2, _location, routes, basename, allRoutes, "navigation");
              } else {
                obj6.delete(client);
              }
              const tmp6Result4 = tmp6(889);
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
  let end = globalThis;
  let tmp = matches;
  if (!Array.isArray(matches)) {
    let tmp3 = allRoutes;
    if (!allRoutes) {
      tmp3 = routes;
    }
    tmp = closure_8(tmp3, _location, basename);
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
      set = flag;
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
            set = new end.Set(allRoutes);
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
              let spanToJSONResult = closure_0(dependencyMap[6]).spanToJSON(first);
              ({ description, data } = spanToJSONResult);
              if (data != null) {
                const tmp8 = data[tmp3(undefined, tmp4[6]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
              }
              cleanupNavigationSpan = function cleanupNavigationSpan() {

              };
              value = weakMap1.get(tmp5);
              if (value) {
                if (value.size > 0) {
                  if (description) {
                    let tmp3Result = tmp3(tmp4[4]);
                    if (0 === num) {
                      tryUpdateSpanNameBeforeEnd(tmp5, spanToJSONResult, description, cleanupNavigationSpan, closure_2, closure_3, closure_4, set);
                      tmp3Result = tmp3(tmp4[6]);
                      let client = tmp3Result.getClient();
                      if (client) {
                        if ("navigation" === closure_4) {
                          value = weakMap.get(client);
                          let tmp47 = value;
                          if (value) {
                            tmp47 = value.span === tmp5;
                          }
                          if (tmp47) {
                            obj6.delete(client);
                          }
                          obj6 = weakMap;
                        }
                      }
                      closure_6(first);
                    } else {
                      const nextPromise = Promise.allSettled(value).then(() => {

                      });
                      let racePromise = nextPromise;
                      if (num !== Infinity) {
                        const items1 = [nextPromise, ];
                        const promise = new Promise((arg0) => setTimeout(arg0, closure_1_11));
                        items1[1] = promise;
                        racePromise = Promise.race(items1);
                      }
                      const allSettledResult = Promise.allSettled(value);
                      racePromise.then(() => {
                        const spanToJSONResult = _mod682.spanToJSON(closure_0);
                        tryUpdateSpanNameBeforeEnd(closure_0, spanToJSONResult, spanToJSONResult.description, closure_1, closure_2, closure_3, closure_4, set);
                        if (typeof cleanupNavigationSpan === "function") {
                          const client = _mod682.getClient();
                          if (client) {
                            if ("navigation" === tmp5) {
                              value = weakMap.get(client);
                              let tmp9 = value;
                              if (value) {
                                tmp9 = value.span === tmp3;
                              }
                              if (tmp9) {
                                obj3.delete(client);
                              }
                              obj3 = weakMap;
                            }
                          }
                          closure_6(first);
                        } else {
                          throw new TypeError("Trying to call a non-function");
                        }
                        tmp3 = closure_0;
                        tmp5 = closure_4;
                      }).catch(() => {
                        if (typeof cleanupNavigationSpan === "function") {
                          const client = _mod682.getClient();
                          if (client) {
                            if ("navigation" === closure_4) {
                              value = weakMap.get(client);
                              let tmp6 = value;
                              if (value) {
                                tmp6 = value.span === closure_0;
                              }
                              if (tmp6) {
                                obj2.delete(client);
                              }
                              obj2 = weakMap;
                            }
                          }
                          closure_6(first);
                        } else {
                          throw new TypeError("Trying to call a non-function");
                        }
                      });
                      const nextPromise1 = racePromise.then(() => {
                        const spanToJSONResult = _mod682.spanToJSON(closure_0);
                        tryUpdateSpanNameBeforeEnd(closure_0, spanToJSONResult, spanToJSONResult.description, closure_1, closure_2, closure_3, closure_4, set);
                        if (typeof cleanupNavigationSpan === "function") {
                          const client = _mod682.getClient();
                          if (client) {
                            if ("navigation" === tmp5) {
                              value = weakMap.get(client);
                              let tmp9 = value;
                              if (value) {
                                tmp9 = value.span === tmp3;
                              }
                              if (tmp9) {
                                obj3.delete(client);
                              }
                              obj3 = weakMap;
                            }
                          }
                          closure_6(first);
                        } else {
                          throw new TypeError("Trying to call a non-function");
                        }
                        tmp3 = closure_0;
                        tmp5 = closure_4;
                      });
                    }
                  }
                }
              }
              tryUpdateSpanNameBeforeEnd(first, spanToJSONResult, description, cleanupNavigationSpan, closure_2, closure_3, closure_4, set);
              let obj = closure_0(dependencyMap[6]);
              const tmp15 = closure_4;
              const client1 = closure_0(dependencyMap[6]).getClient();
              if (client1) {
                if ("navigation" === tmp15) {
                  const value1 = weakMap.get(client1);
                  let tmp24 = value1;
                  if (value1) {
                    tmp24 = value1.span === tmp5;
                  }
                  if (tmp24) {
                    obj4.delete(client1);
                  }
                  obj4 = weakMap;
                }
              }
              closure_6(first);
              const tmp3Result1 = closure_0(dependencyMap[6]);
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
function tryUpdateSpanNameBeforeEnd(updateName, spanToJSONResult, description, _location, arg4, basename, arg6, set) {
  try {
    const data = spanToJSONResult.data;
    let tmp4;
    if (data != null) {
      tmp4 = data[_mod682.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
    }
    if ("route" === tmp4) {
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
        const attr = updateName.setAttribute(_mod682.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, tmp40);
      }
    }
    tmp10 = tmp4;
  } catch (tmp54) {
    if (_mod1007.DEBUG_BUILD) {
      const debug = tmp55(682).debug;
      const _HermesInternal = HermesInternal;
      debug.warn("Error updating span details before ending: " + tmp54);
    }
    tmp55 = require;
  }
}
function patchSpanEnd(result2, _location, routes, basename, allRoutes, navigation) {
  _require = result2;
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
          let spanToJSONResult = closure_0(dependencyMap[6]).spanToJSON(first);
          ({ description, data } = spanToJSONResult);
          if (data != null) {
            const tmp8 = data[tmp3(undefined, tmp4[6]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
          }
          cleanupNavigationSpan = function cleanupNavigationSpan() {

          };
          value = weakMap1.get(tmp5);
          if (value) {
            if (value.size > 0) {
              if (description) {
                let tmp3Result = tmp3(tmp4[4]);
                if (0 === num) {
                  tryUpdateSpanNameBeforeEnd(tmp5, spanToJSONResult, description, cleanupNavigationSpan, closure_2, closure_3, closure_4, set);
                  tmp3Result = tmp3(tmp4[6]);
                  let client = tmp3Result.getClient();
                  if (client) {
                    if ("navigation" === closure_4) {
                      value = weakMap.get(client);
                      let tmp47 = value;
                      if (value) {
                        tmp47 = value.span === tmp5;
                      }
                      if (tmp47) {
                        obj6.delete(client);
                      }
                      obj6 = weakMap;
                    }
                  }
                  closure_6(first);
                } else {
                  const nextPromise = Promise.allSettled(value).then(() => {

                  });
                  let racePromise = nextPromise;
                  if (num !== Infinity) {
                    const items1 = [nextPromise, ];
                    const promise = new Promise((arg0) => setTimeout(arg0, closure_1_11));
                    items1[1] = promise;
                    racePromise = Promise.race(items1);
                  }
                  const allSettledResult = Promise.allSettled(value);
                  racePromise.then(() => {
                    const spanToJSONResult = _mod682.spanToJSON(closure_0);
                    tryUpdateSpanNameBeforeEnd(closure_0, spanToJSONResult, spanToJSONResult.description, closure_1, closure_2, closure_3, closure_4, set);
                    if (typeof cleanupNavigationSpan === "function") {
                      const client = _mod682.getClient();
                      if (client) {
                        if ("navigation" === tmp5) {
                          value = weakMap.get(client);
                          let tmp9 = value;
                          if (value) {
                            tmp9 = value.span === tmp3;
                          }
                          if (tmp9) {
                            obj3.delete(client);
                          }
                          obj3 = weakMap;
                        }
                      }
                      closure_6(first);
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                    tmp3 = closure_0;
                    tmp5 = closure_4;
                  }).catch(() => {
                    if (typeof cleanupNavigationSpan === "function") {
                      const client = _mod682.getClient();
                      if (client) {
                        if ("navigation" === closure_4) {
                          value = weakMap.get(client);
                          let tmp6 = value;
                          if (value) {
                            tmp6 = value.span === closure_0;
                          }
                          if (tmp6) {
                            obj2.delete(client);
                          }
                          obj2 = weakMap;
                        }
                      }
                      closure_6(first);
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                  });
                  const nextPromise1 = racePromise.then(() => {
                    const spanToJSONResult = _mod682.spanToJSON(closure_0);
                    tryUpdateSpanNameBeforeEnd(closure_0, spanToJSONResult, spanToJSONResult.description, closure_1, closure_2, closure_3, closure_4, set);
                    if (typeof cleanupNavigationSpan === "function") {
                      const client = _mod682.getClient();
                      if (client) {
                        if ("navigation" === tmp5) {
                          value = weakMap.get(client);
                          let tmp9 = value;
                          if (value) {
                            tmp9 = value.span === tmp3;
                          }
                          if (tmp9) {
                            obj3.delete(client);
                          }
                          obj3 = weakMap;
                        }
                      }
                      closure_6(first);
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                    tmp3 = closure_0;
                    tmp5 = closure_4;
                  });
                }
              }
            }
          }
          tryUpdateSpanNameBeforeEnd(first, spanToJSONResult, description, cleanupNavigationSpan, closure_2, closure_3, closure_4, set);
          let obj = closure_0(dependencyMap[6]);
          const tmp15 = closure_4;
          const client1 = closure_0(dependencyMap[6]).getClient();
          if (client1) {
            if ("navigation" === tmp15) {
              const value1 = weakMap.get(client1);
              let tmp24 = value1;
              if (value1) {
                tmp24 = value1.span === tmp5;
              }
              if (tmp24) {
                obj4.delete(client1);
              }
              obj4 = weakMap;
            }
          }
          closure_6(first);
          const tmp3Result1 = closure_0(dependencyMap[6]);
        }
      };
      const result = require("metro/00682__.js").addNonEnumerableProperty(result2, combined, true);
      let obj = require("metro/00682__.js");
    }
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_10 = false;
const weakSet = new WeakSet();
const weakMap = new WeakMap();
let set = new Set();
const weakMap1 = new WeakMap();

export const addResolvedRoutesToParent = function addResolvedRoutesToParent(arr, children) {
  const tmp = children.children || [];
  closure_0 = tmp;
  const found = arr.filter((item) => {
    closure_0 = item;
    return !closure_0.some((path) => {
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
  _require = instrumentPageLoad;
  dependencyMap = _6;
  require("feedbackAsyncIntegration");
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
  closure_11 = undefined === instrumentNavigation || instrumentNavigation;
  const lazyRouteTimeout = instrumentPageLoad.lazyRouteTimeout;
  obj = {};
  const merged1 = Object.assign(result);
  obj.setup = function setup(arg0) {
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
      if (_mod1007.DEBUG_BUILD) {
        const debug3 = _mod682.debug;
        debug3.log("[React Router] lazyRouteTimeout set to Infinity, capping at finalTimeout:", num, "ms to prevent indefinite hangs");
      }
    } else {
      const _Number = Number;
      if (Number.isNaN(tmp4)) {
        if (_mod1007.DEBUG_BUILD) {
          const debug2 = _mod682.debug;
          debug2.warn("[React Router] lazyRouteTimeout must be a number, falling back to default:", result);
        }
        num = result;
      } else if (tmp4 < 0) {
        if (_mod1007.DEBUG_BUILD) {
          const debug = _mod682.debug;
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
  obj.afterAllSetup = function afterAllSetup(f108154) {
    result.afterAllSetup(f108154);
    const _location = feedbackAsyncIntegration.WINDOW.location;
    if (_location != null) {
      const pathname = _location.pathname;
    }
    let tmp4 = closure_10;
    if (closure_10) {
      tmp4 = pathname;
    }
    if (tmp4) {
      let obj = { name: pathname, attributes: null };
      obj = {};
      obj[tmp2(682).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = "url";
      obj[tmp2(682).SEMANTIC_ATTRIBUTE_SENTRY_OP] = "pageload";
      const _HermesInternal = HermesInternal;
      obj[tmp2(682).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.pageload.react.reactrouter_v" + closure_1;
      obj.attributes = obj;
      result = tmp2(889).startBrowserTracingPageLoadSpan(f108154, obj);
      const tmp2Result = tmp2(889);
    }
    if (closure_11) {
      weakSet.add(f108154);
    }
  };
  return obj;
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
            require("metro/01005__.js").hoistNonReactStatics(SentryRoutes, arg0);
            return SentryRoutes;
          }
        }
      }
    }
  }
  if (require("metro/01007__.js").DEBUG_BUILD) {
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
          let fn = (routes, basename) => {
            addRoutesToAllRoutes(routes);
            if (closure_10) {
              const tmp3 = routes[Symbol.iterator]();
              while (tmp3 !== undefined) {
                let obj = _mod1015;
                let result = obj.checkRouteForAsyncHandler(tmp5, processResolvedRoutes);
                continue;
              }
            }
            const tmp11 = closure_0(routes, wrapPatchRoutesOnNavigation(basename));
            basename = undefined;
            if (basename != null) {
              basename = basename.basename;
            }
            const activeRootSpan = pickSplat.getActiveRootSpan();
            if (tmp14) {
              obj = { activeRootSpan, location: tmp11.state.location, routes, basename, allRoutes: null };
              const _Array = Array;
              obj.allRoutes = Array.from(set);
              updatePageloadTransaction(obj);
            }
            setupRouterSubscription(tmp11, routes, closure_1, basename, activeRootSpan);
            return tmp11;
          };
        }
        return fn;
      }
    }
  }
  fn = arg0;
  if (require("metro/01007__.js").DEBUG_BUILD) {
    const debug = require("metro/00682__.js").debug;
    const _HermesInternal = HermesInternal;
    debug.warn("reactRouterV" + _6 + "Instrumentation was unable to wrap the `createRouter` function because of one or more missing parameters.");
    fn = arg0;
  }
};
export const createV6CompatibleWrapCreateMemoryRouter = function createV6CompatibleWrapCreateMemoryRouter(arg0, _6) {
  _require = arg0;
  dependencyMap = _6;
  if (closure_4) {
    if (closure_5) {
      if (closure_6) {
        if (closure_8) {
          let fn = (routes, basename) => {
            addRoutesToAllRoutes(routes);
            if (closure_10) {
              const tmp3 = routes[Symbol.iterator]();
              while (tmp3 !== undefined) {
                let obj = _mod1015;
                let result = obj.checkRouteForAsyncHandler(tmp5, processResolvedRoutes);
                continue;
              }
            }
            const tmp11 = closure_0(routes, wrapPatchRoutesOnNavigation(basename, true));
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
                obj = { pathname: first };
                tmp18 = obj;
              }
              let _location = tmp18;
            } else {
              _location = tmp11.state.location;
            }
            const activeRootSpan = pickSplat.getActiveRootSpan();
            if (tmp20) {
              obj = { activeRootSpan, location: _location, routes, basename, allRoutes: null };
              const _Array = Array;
              obj.allRoutes = Array.from(set);
              updatePageloadTransaction(obj);
            }
            setupRouterSubscription(tmp11, routes, closure_1, basename, activeRootSpan);
            return tmp11;
          };
        }
        return fn;
      }
    }
  }
  fn = arg0;
  if (require("metro/01007__.js").DEBUG_BUILD) {
    const debug = require("metro/00682__.js").debug;
    const _HermesInternal = HermesInternal;
    debug.warn("reactRouterV" + _6 + "Instrumentation was unable to wrap the `createMemoryRouter` function because of one or more missing parameters.");
    fn = arg0;
  }
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
                let obj = { pathname: tmp };
                tmp2 = obj;
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
                obj = { activeRootSpan: pickSplat.getActiveRootSpan(), location: tmp2, routes, allRoutes: null };
                const _Array2 = Array;
                obj.allRoutes = Array.from(set);
                updatePageloadTransaction(obj);
                tmp3.current = false;
              } else {
                obj = { location: tmp2, routes, navigationType, version, allRoutes: null };
                const _Array = Array;
                obj.allRoutes = Array.from(set);
                handleNavigation(obj);
              }
            }, items);
            return React.useRef(true)(routes, locationArg);
          }
          return (routes, locationArg) => <SentryRoutes routes={arg0} locationArg={arg1} />;
        }
      }
    }
  }
  if (require("metro/01007__.js").DEBUG_BUILD) {
    const debug = require("metro/00682__.js").debug;
    debug.warn("reactRouterV6Instrumentation was unable to wrap `useRoutes` because of one or more missing parameters.");
  }
  return arg0;
};
export { handleNavigation };
export { processResolvedRoutes };
export { shouldSkipNavigation };
export { updateNavigationSpan };