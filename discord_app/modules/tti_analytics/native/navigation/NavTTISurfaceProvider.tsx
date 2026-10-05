// discord_app/modules/tti_analytics/native/navigation/NavTTISurfaceProvider.tsx
import c from "../../../../../_runtime/00576_c.js";
import useComponentRenderSpan from "useComponentRenderSpan.tsx";
import NavigationSpanTrackerDefault from "NavigationSpanTracker.tsx";
import NavigationTTIRegionHierarchy from "debug/NavigationTTIRegionHierarchy.tsx";
import NavigationTTIRegionDebugOverlay from "debug/NavigationTTIRegionDebugOverlay.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import DevSettingsStore from "../../../devtools/dev_settings/DevSettingsStore.tsx";

const require = globalThis.__r;

require = fn;
let closure_3 = ["measurementProps", "onLayout", "children"];
let closure_4 = ["children"];
let closure_5 = ["children"];
let closure_6 = ["name", "navigationKey", "definition", "descendantTracking", "visibilityMode", "isVisible"];
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((children) => {
  const cResult = c.c(12);
  if (cResult[0] !== children) {
    ({ measurementProps, onLayout } = children);
    closure_0 = onLayout;
    children = children.children;
    const tmp8 = _objectWithoutProperties(children, closure_3);
    cResult[0] = children;
    cResult[1] = children;
    cResult[2] = measurementProps;
    cResult[3] = onLayout;
    cResult[4] = tmp8;
    let tmp5 = tmp8;
    let tmp4 = onLayout;
    let tmp3 = measurementProps;
    let tmp2 = children;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
    closure_0 = cResult[3];
    tmp5 = cResult[4];
  }
  const onLayout2 = tmp3.onLayout;
  if (cResult[5] === onLayout2) {
    if (cResult[6] === tmp4) {
      let tmp9 = cResult[7];
    }
    if (null != onLayout2) {
      tmp4 = tmp9;
    }
    if (cResult[8] === tmp2) {
      if (cResult[9] === tmp4) {
        if (cResult[10] === tmp5) {
          let tmp11 = cResult[11];
        }
        return tmp11;
      }
    }
    const obj2 = {};
    const merged = Object.assign(tmp5);
    obj2.onLayout = tmp4;
    obj2.children = tmp2;
    const tmp17 = closure_1_11(View, obj2);
    cResult[8] = tmp2;
    cResult[9] = tmp4;
    cResult[10] = tmp5;
    cResult[11] = tmp17;
    tmp11 = tmp17;
  }
  const fn = function y(arg0) {
    if (onLayout2 != null) {
      tmp(arg0);
    }
    if (closure_0 != null) {
      tmp3(arg0);
    }
  };
  cResult[5] = onLayout2;
  cResult[6] = tmp4;
  cResult[7] = fn;
  tmp9 = fn;
}) : ((onLayout) => {
  onLayout = onLayout.onLayout;
  ({ measurementProps, children } = onLayout);
  const merged = Object.assign(onLayout, Object.assign({ measurementProps: 0, onLayout: 0, children: 0 }));
  const onLayout2 = measurementProps.onLayout;
  const items = [onLayout2, onLayout];
  const obj = {};
  const callback = noop.useCallback((arg0) => {
    if (onLayout2 != null) {
      tmp(arg0);
    }
    if (onLayout != null) {
      tmp3(arg0);
    }
  }, items);
  const merged1 = Object.assign(merged);
  if (null != onLayout2) {
    onLayout = callback;
  }
  obj.onLayout = onLayout;
  obj.children = children;
  return closure_1_11(View, obj);
});
ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(23);
  ({ name, descendantTracking, viewProps } = arg0);
  if (cResult[0] !== viewProps) {
    const children = viewProps.children;
    const tmp8 = _objectWithoutProperties(viewProps, closure_4);
    cResult[0] = viewProps;
    cResult[1] = children;
    cResult[2] = tmp8;
    let tmp5 = tmp8;
    let tmp4 = children;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const Children = noop.Children;
  const tmp9 = Children.count(tmp4) > 0;
  if (cResult[3] === descendantTracking) {
    if (cResult[4] === name) {
      if (cResult[5] === tmp9) {
        let tmp10 = cResult[6];
      }
      const navigationTTIRegionHierarchy = NavigationTTIRegionHierarchy.useNavigationTTIRegionHierarchy(tmp10);
      const tmpResult = NavigationTTIRegionHierarchy;
      const navigationTTIRegionMeasurement = useComponentRenderSpan.useNavigationTTIRegionMeasurement("exclude", navigationTTIRegionHierarchy.regionId);
      if (cResult[7] === tmp4) {
        if (cResult[8] === navigationTTIRegionHierarchy.contextValue) {
          let tmp13 = cResult[9];
        }
        if (cResult[10] === descendantTracking) {
          if (cResult[11] === navigationTTIRegionHierarchy.depth) {
            if (cResult[12] === navigationTTIRegionHierarchy.excludedDescendants) {
              if (cResult[13] === navigationTTIRegionHierarchy.includedDescendants) {
                if (cResult[14] === navigationTTIRegionHierarchy.regionId) {
                  if (cResult[15] === navigationTTIRegionHierarchy.violation) {
                    if (cResult[16] === name) {
                      let tmp16 = cResult[17];
                    }
                    if (cResult[18] === navigationTTIRegionMeasurement) {
                      if (cResult[19] === tmp5) {
                        if (cResult[20] === tmp13) {
                          if (cResult[21] === tmp16) {
                            let tmp19 = cResult[22];
                          }
                          return tmp19;
                        }
                      }
                    }
                    const obj2 = {};
                    const merged = Object.assign(tmp5);
                    obj2.measurementProps = navigationTTIRegionMeasurement;
                    const items = [tmp13, tmp16];
                    obj2.children = items;
                    const tmp25 = __initData(closure_13, obj2);
                    cResult[18] = navigationTTIRegionMeasurement;
                    cResult[19] = tmp5;
                    cResult[20] = tmp13;
                    cResult[21] = tmp16;
                    cResult[22] = tmp25;
                    tmp19 = tmp25;
                  }
                }
              }
            }
          }
        }
        const obj3 = { name, regionId: navigationTTIRegionHierarchy.regionId, tracking: "exclude", descendantTracking, includedDescendants: null, excludedDescendants: null, hierarchyDepth: null, violation: null };
        ({ includedDescendants: obj6.includedDescendants, excludedDescendants: obj6.excludedDescendants, depth: obj6.hierarchyDepth, violation: obj6.violation } = navigationTTIRegionHierarchy);
        const tmp18 = closure_1_11(NavigationTTIRegionDebugOverlay.NavigationTTIRegionDebugOverlay, obj3);
        cResult[10] = descendantTracking;
        cResult[11] = navigationTTIRegionHierarchy.depth;
        cResult[12] = navigationTTIRegionHierarchy.excludedDescendants;
        cResult[13] = navigationTTIRegionHierarchy.includedDescendants;
        cResult[14] = navigationTTIRegionHierarchy.regionId;
        cResult[15] = navigationTTIRegionHierarchy.violation;
        cResult[16] = name;
        cResult[17] = tmp18;
        tmp16 = tmp18;
      }
      const obj4 = { value: navigationTTIRegionHierarchy.contextValue, children: tmp4 };
      const tmp15 = closure_1_11(NavigationTTIRegionHierarchy.NavigationTTIRegionHierarchyContext.Provider, obj4);
      cResult[7] = tmp4;
      cResult[8] = navigationTTIRegionHierarchy.contextValue;
      cResult[9] = tmp15;
      tmp13 = tmp15;
      const tmpResult2 = useComponentRenderSpan;
    }
  }
  const obj5 = { name, tracking: "exclude", descendantTracking, hasChildren: tmp9 };
  cResult[3] = descendantTracking;
  cResult[4] = name;
  cResult[5] = tmp9;
  cResult[6] = obj5;
  tmp10 = obj5;
}) : ((arg0) => {
  ({ name, descendantTracking, viewProps } = arg0);
  const children = viewProps.children;
  const tmp = _objectWithoutProperties(viewProps, closure_5);
  const obj2 = { name, tracking: "exclude", descendantTracking, hasChildren: null };
  const Children = noop.Children;
  obj2.hasChildren = Children.count(children) > 0;
  const navigationTTIRegionHierarchy = NavigationTTIRegionHierarchy.useNavigationTTIRegionHierarchy(obj2);
  const obj4 = {};
  const navigationTTIRegionMeasurement = useComponentRenderSpan.useNavigationTTIRegionMeasurement("exclude", navigationTTIRegionHierarchy.regionId);
  const merged = Object.assign(tmp);
  obj4.measurementProps = navigationTTIRegionMeasurement;
  const items = [closure_1_11(NavigationTTIRegionHierarchy.NavigationTTIRegionHierarchyContext.Provider, { value: navigationTTIRegionHierarchy.contextValue, children }), closure_1_11(NavigationTTIRegionDebugOverlay.NavigationTTIRegionDebugOverlay, { name, regionId: navigationTTIRegionHierarchy.regionId, tracking: "exclude", descendantTracking, includedDescendants: navigationTTIRegionHierarchy.includedDescendants, excludedDescendants: navigationTTIRegionHierarchy.excludedDescendants, hierarchyDepth: navigationTTIRegionHierarchy.depth, violation: navigationTTIRegionHierarchy.violation })];
  obj4.children = items;
  return __initData(closure_13, obj4);
});
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/NavTTISurfaceProvider.tsx");

export const NavTTISurfaceProvider = ReactCompilerGating.isReactCompilerEnabled() ? ((definition) => {
  const cResult = require("c").c(31);
  if (cResult[0] !== definition) {
    ({ name, navigationKey } = definition);
    importDefault = navigationKey;
    definition = definition.definition;
    _require = definition;
    ({ descendantTracking, visibilityMode, isVisible } = definition);
    const tmp13 = _objectWithoutProperties(definition, closure_6);
    cResult[0] = definition;
    cResult[1] = definition;
    cResult[2] = descendantTracking;
    class P {
      constructor(arg0) {
        if (closure_2) {
          tmp = definition;
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[11]);
          tmp4 = closure_0;
          tmp5 = closure_1;
          fn = obj.subscribe(closure_0, closure_1, definition);
        } else {
          fn = /* F146559 */ function() { ... };
        }
        return fn;
      }
    }
    cResult[4] = navigationKey;
    cResult[5] = isVisible;
    cResult[6] = tmp13;
    cResult[7] = visibilityMode;
    let tmp10 = visibilityMode;
    let tmp9 = tmp13;
    let tmp8 = isVisible;
    let tmp6 = name;
    let tmp5 = descendantTracking;
  } else {
    _require = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    importDefault = cResult[4];
    tmp8 = cResult[5];
    tmp9 = cResult[6];
    tmp10 = cResult[7];
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const result = tmp(16474).isNavigationTTIEnabled();
    cResult[8] = result;
    let tmp14 = result;
    const tmpResult = tmp(16474);
  } else {
    tmp14 = cResult[8];
  }
  dependencyMap = tmp14;
  let tmp16 = "immediate" === tmp10;
  if (!tmp16) {
    tmp16 = true === tmp8;
  }
  if (cResult[9] === tmp4) {
    if (cResult[12] === tmp4) {
      class N {
        constructor() {
          activeTraceId = null;
          if (closure_2) {
            tmp2 = closure_1;
            tmp3 = closure_2;
            obj = closure_1(closure_2[11]);
            tmp4 = closure_0;
            tmp5 = closure_1;
            activeTraceId = obj.getActiveTraceId(closure_0, closure_1);
          }
          return activeTraceId;
        }
      }
      if (cResult[15] === tmp20) {
        if (cResult[16] === tmp4) {
          if (cResult[17] === tmp16) {
            if (cResult[18] === navigationKey) {
              if (cResult[19] === tmp10) {
                let tmp21 = cResult[20];
              }
              const _Symbol = Symbol;
              class N {
                constructor() {
                  activeTraceId = null;
                  if (closure_2) {
                    tmp2 = closure_1;
                    tmp3 = closure_2;
                    obj = closure_1(closure_2[11]);
                    tmp4 = closure_0;
                    tmp5 = closure_1;
                    activeTraceId = obj.getActiveTraceId(closure_0, closure_1);
                  }
                  return activeTraceId;
                }
              }
              if (tmp22 === Symbol.for("react.memo_cache_sentinel")) {
                const items = [];
                class N {
                  constructor() {
                    activeTraceId = null;
                    if (closure_2) {
                      tmp2 = closure_1;
                      tmp3 = closure_2;
                      obj = closure_1(closure_2[11]);
                      tmp4 = closure_0;
                      tmp5 = closure_1;
                      activeTraceId = obj.getActiveTraceId(closure_0, closure_1);
                    }
                    return activeTraceId;
                  }
                }
                class E {
                  constructor() {
                    return closure_1_10.get("navigation_tti_visualizer");
                  }
                }
                cResult[21] = items;
                cResult[22] = E;
                let tmp24 = E;
                let tmp23 = items;
              } else {
                tmp23 = cResult[21];
                tmp24 = cResult[22];
              }
              const stateFromStores = tmp(504).useStateFromStores(tmp23, tmp24);
              if (cResult[23] === tmp5) {
                if (cResult[24] === tmp6) {
                  if (cResult[25] === tmp9) {
                    if (cResult[26] === stateFromStores) {
                      if (cResult[28] === cResult[27]) {
                        if (cResult[29] === tmp21) {
                          let tmp34 = cResult[30];
                        }
                        return tmp34;
                      }
                      class N {
                        constructor() {
                          activeTraceId = null;
                          if (closure_2) {
                            tmp2 = closure_1;
                            tmp3 = closure_2;
                            obj = closure_1(closure_2[11]);
                            tmp4 = closure_0;
                            tmp5 = closure_1;
                            activeTraceId = obj.getActiveTraceId(closure_0, closure_1);
                          }
                          return activeTraceId;
                        }
                      }
                      class E {
                        constructor() {
                          return closure_1_10.get("navigation_tti_visualizer");
                        }
                      }
                      tmp35[0] = tmp21;
                      tmp35[1] = cResult[27];
                      const tmp36 = closure_11(tmp(16481).NavTTISurfaceContext.Provider, tmp35);
                      cResult[28] = cResult[27];
                      cResult[29] = tmp21;
                      cResult[30] = tmp36;
                      tmp34 = tmp36;
                    }
                  }
                }
              }
              if (stateFromStores) {
                const obj2 = { name: null, descendantTracking: null, viewProps: null };
                class N {
                  constructor() {
                    activeTraceId = null;
                    if (closure_2) {
                      tmp2 = closure_1;
                      tmp3 = closure_2;
                      obj = closure_1(closure_2[11]);
                      tmp4 = closure_0;
                      tmp5 = closure_1;
                      activeTraceId = obj.getActiveTraceId(closure_0, closure_1);
                    }
                    return activeTraceId;
                  }
                }
                class E {
                  constructor() {
                    return closure_1_10.get("navigation_tti_visualizer");
                  }
                }
                obj2.viewProps = tmp9;
                let tmp28Result = closure_11(closure_14, obj2);
              } else {
                const obj3 = {};
                class N {
                  constructor() {
                    activeTraceId = null;
                    if (closure_2) {
                      tmp2 = closure_1;
                      tmp3 = closure_2;
                      obj = closure_1(closure_2[11]);
                      tmp4 = closure_0;
                      tmp5 = closure_1;
                      activeTraceId = obj.getActiveTraceId(closure_0, closure_1);
                    }
                    return activeTraceId;
                  }
                }
                class E {
                  constructor() {
                    return closure_1_10.get("navigation_tti_visualizer");
                  }
                }
                const merged = Object.assign(tmp9);
                obj3.measurementProps = {};
                tmp28Result = closure_11(closure_13, obj3);
              }
              cResult[23] = tmp5;
              cResult[24] = tmp6;
              cResult[25] = tmp9;
              cResult[26] = stateFromStores;
              class P {
                constructor(arg0) {
                  if (closure_2) {
                    tmp = definition;
                    tmp2 = closure_1;
                    tmp3 = closure_2;
                    obj = closure_1(closure_2[11]);
                    tmp4 = closure_0;
                    tmp5 = closure_1;
                    fn = obj.subscribe(closure_0, closure_1, definition);
                  } else {
                    fn = /* F146559 */ function() { ... };
                  }
                  return fn;
                }
              }
              const tmpResult2 = tmp(504);
            }
          }
        }
      }
      const obj4 = { definition: tmp4, navigationKey, activeTraceId: tmp20, visibilityMode: tmp10, isVisible: tmp16 };
      cResult[15] = tmp20;
      cResult[16] = tmp4;
      cResult[17] = tmp16;
      cResult[18] = navigationKey;
      class P {
        constructor(arg0) {
          if (closure_2) {
            tmp = definition;
            tmp2 = closure_1;
            tmp3 = closure_2;
            obj = closure_1(closure_2[11]);
            tmp4 = closure_0;
            tmp5 = closure_1;
            fn = obj.subscribe(closure_0, closure_1, definition);
          } else {
            fn = /* F146559 */ function() { ... };
          }
          return fn;
        }
      }
      cResult[19] = tmp10;
      cResult[20] = obj4;
      tmp21 = obj4;
    }
    class N {
      constructor() {
        activeTraceId = null;
        if (closure_2) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[11]);
          tmp4 = closure_0;
          tmp5 = closure_1;
          activeTraceId = obj.getActiveTraceId(closure_0, closure_1);
        }
        return activeTraceId;
      }
    }
    cResult[12] = tmp4;
    cResult[13] = navigationKey;
    cResult[14] = N;
  }
  class P {
    constructor(arg0) {
      if (closure_2) {
        tmp = definition;
        tmp2 = closure_1;
        tmp3 = closure_2;
        obj = closure_1(closure_2[11]);
        tmp4 = closure_0;
        tmp5 = closure_1;
        fn = obj.subscribe(closure_0, closure_1, definition);
      } else {
        fn = /* F146559 */ function() { ... };
      }
      return fn;
    }
  }
  cResult[9] = tmp4;
  cResult[10] = navigationKey;
  cResult[11] = P;
  let obj = require("c");
}) : ((navigationKey) => {
  navigationKey = navigationKey.navigationKey;
  const definition = navigationKey.definition;
  const visibilityMode = navigationKey.visibilityMode;
  ({ name, descendantTracking, isVisible } = navigationKey);
  const merged = Object.assign(navigationKey, Object.assign({ name: 0, navigationKey: 0, definition: 0, descendantTracking: 0, visibilityMode: 0, isVisible: 0 }));
  isVisible = undefined;
  let syncExternalStore;
  const result = navigationKey(visibilityMode[10]).isNavigationTTIEnabled();
  c3 = result;
  let tmp5 = "immediate" === visibilityMode;
  if (!tmp5) {
    tmp5 = true === isVisible;
  }
  isVisible = tmp5;
  const items = [definition, result, navigationKey];
  const items1 = [definition, result, navigationKey];
  const callback = noop.useCallback((arg0) => {
    if (c3) {
      let fn = NavigationSpanTrackerDefault.subscribe(definition, navigationKey, arg0);
    } else {
      fn = () => {

      };
    }
    return fn;
  }, items);
  const callback1 = noop.useCallback(() => {
    let activeTraceId = null;
    if (c3) {
      activeTraceId = NavigationSpanTrackerDefault.getActiveTraceId(definition, navigationKey);
    }
    return activeTraceId;
  }, items1);
  syncExternalStore = noop.useSyncExternalStore(callback, callback1, callback1);
  const items2 = [syncExternalStore, definition, tmp5, navigationKey, visibilityMode];
  value = noop.useMemo(() => ({ definition, navigationKey, activeTraceId: syncExternalStore, visibilityMode, isVisible }), items2);
  let obj = navigationKey(visibilityMode[10]);
  const items3 = [DevSettingsStore];
  if (tmp2Result.useStateFromStores(items3, () => DevSettingsStore.get("navigation_tti_visualizer"))) {
    const obj2 = { name, descendantTracking, viewProps: merged };
    let children = closure_11(closure_14, obj2);
    let tmp16 = closure_11;
  } else {
    const obj3 = {};
    const merged1 = Object.assign(merged);
    obj3.measurementProps = {};
    children = closure_11(closure_13, obj3);
    tmp16 = closure_11;
  }
  return tmp16(navigationKey(visibilityMode[13]).NavTTISurfaceContext.Provider, { value, children });
});