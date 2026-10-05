// discord_app/modules/tti_analytics/native/navigation/NavTTISurfaceProvider.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import useComponentRenderSpan from "useComponentRenderSpan.tsx";
import NavigationSpanTrackerDefault from "NavigationSpanTracker.tsx";
import NavigationTTIRegionHierarchy from "debug/NavigationTTIRegionHierarchy.tsx";
import NavigationTTIRegionDebugOverlay from "debug/NavigationTTIRegionDebugOverlay.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../../_runtime/00019_react.js";
import DevSettingsStore from "../../../devtools/dev_settings/DevSettingsStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap, importDefault;

let closure_12;
let unpackModuleId;
let closure_3 = ["measurementProps", "onLayout", "children"];
let closure_4 = ["children"];
let closure_5 = ["children"];
let closure_6 = ["name", "navigationKey", "definition", "descendantTracking", "visibilityMode", "isVisible"];
const View = react_native.View;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? (children) => {
      let measurementProps;
      let onLayout;
      let tmp2;
      let tmp3;
      let tmp4;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(12);
      if (cResult[0] !== children) {
        ({ measurementProps, onLayout } = children);
        let closure_0 = onLayout;
        children = children.children;
        const tmp8 = _objectWithoutProperties(children, closure_3);
        cResult[0] = children;
        cResult[1] = children;
        cResult[2] = measurementProps;
        cResult[3] = onLayout;
        cResult[4] = tmp8;
        tmp5 = tmp8;
        tmp4 = onLayout;
        tmp3 = measurementProps;
        tmp2 = children;
      } else {
        tmp2 = cResult[1];
        tmp3 = cResult[2];
        closure_0 = cResult[3];
        tmp5 = cResult[4];
      }
      const onLayout2 = tmp3.onLayout;
      if (cResult[5] === onLayout2) {
        let tmp9;
        if (cResult[6] === tmp4) {
          tmp9 = cResult[7];
        }
        if (null != onLayout2) {
          tmp4 = tmp9;
        }
        if (cResult[8] === tmp2) {
          if (cResult[9] === tmp4) {
            let tmp11;
            if (cResult[10] === tmp5) {
              tmp11 = cResult[11];
            }
            return tmp11;
          }
        }
        const obj2 = { onLayout: tmp4, children: tmp2 };
        const merged = Object.assign(tmp5);
        const tmp17 = unpackModuleId(View, obj2);
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
    }
  : (onLayout) => {
      let children;
      let measurementProps;
      onLayout = onLayout.onLayout;
      ({ measurementProps, children } = onLayout);
      const merged = Object.assign(onLayout, Object.assign({ measurementProps: 0, onLayout: 0, children: 0 }));
      const onLayout2 = measurementProps.onLayout;
      const items = [onLayout2, onLayout];
      const obj = { onLayout, children };
      const callback = react.useCallback((arg0) => {
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
      return unpackModuleId(View, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let descendantTracking;
      let items;
      let name;
      let tmp4;
      let tmp5;
      let viewProps;
      const obj = react2;
      const cResult = obj.c(23);
      ({ name, descendantTracking, viewProps } = arg0);
      if (cResult[0] !== viewProps) {
        const children = viewProps.children;
        const tmp8 = _objectWithoutProperties(viewProps, closure_4);
        cResult[0] = viewProps;
        cResult[1] = children;
        cResult[2] = tmp8;
        tmp5 = tmp8;
        tmp4 = children;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
      }
      const Children = react.Children;
      const tmp9 = Children.count(tmp4) > 0;
      if (cResult[3] === descendantTracking) {
        if (cResult[4] === name) {
          let tmp10;
          if (cResult[5] === tmp9) {
            tmp10 = cResult[6];
          }
          const tmpResult = NavigationTTIRegionHierarchy;
          const navigationTTIRegionHierarchy = tmpResult.useNavigationTTIRegionHierarchy(tmp10);
          const tmpResult2 = useComponentRenderSpan;
          const navigationTTIRegionMeasurement = tmpResult2.useNavigationTTIRegionMeasurement(
            "exclude",
            navigationTTIRegionHierarchy.regionId,
          );
          if (cResult[7] === tmp4) {
            let tmp13;
            if (cResult[8] === navigationTTIRegionHierarchy.contextValue) {
              tmp13 = cResult[9];
            }
            if (cResult[10] === descendantTracking) {
              if (cResult[11] === navigationTTIRegionHierarchy.depth) {
                if (cResult[12] === navigationTTIRegionHierarchy.excludedDescendants) {
                  if (cResult[13] === navigationTTIRegionHierarchy.includedDescendants) {
                    if (cResult[14] === navigationTTIRegionHierarchy.regionId) {
                      if (cResult[15] === navigationTTIRegionHierarchy.violation) {
                        let tmp16;
                        if (cResult[16] === name) {
                          tmp16 = cResult[17];
                        }
                        if (cResult[18] === navigationTTIRegionMeasurement) {
                          if (cResult[19] === tmp5) {
                            if (cResult[20] === tmp13) {
                              let tmp19;
                              if (cResult[21] === tmp16) {
                                tmp19 = cResult[22];
                              }
                              return tmp19;
                            }
                          }
                        }
                        const obj2 = { measurementProps: navigationTTIRegionMeasurement, children: items };
                        const merged = Object.assign(tmp5);
                        items = [tmp13, tmp16];
                        const tmp25 = closure_12(closure_13, obj2);
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
            const obj3 = {
              name,
              regionId: navigationTTIRegionHierarchy.regionId,
              tracking: "exclude",
              descendantTracking,
              includedDescendants: null,
              excludedDescendants: null,
              hierarchyDepth: null,
              violation: null,
            };
            ({
              includedDescendants: obj6.includedDescendants,
              excludedDescendants: obj6.excludedDescendants,
              depth: obj6.hierarchyDepth,
              violation: obj6.violation,
            } = navigationTTIRegionHierarchy);
            const tmp18 = unpackModuleId(NavigationTTIRegionDebugOverlay.NavigationTTIRegionDebugOverlay, obj3);
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
          const tmp15 = unpackModuleId(NavigationTTIRegionHierarchy.NavigationTTIRegionHierarchyContext.Provider, obj4);
          cResult[7] = tmp4;
          cResult[8] = navigationTTIRegionHierarchy.contextValue;
          cResult[9] = tmp15;
          tmp13 = tmp15;
        }
      }
      const obj5 = { name, tracking: "exclude", descendantTracking, hasChildren: tmp9 };
      cResult[3] = descendantTracking;
      cResult[4] = name;
      cResult[5] = tmp9;
      cResult[6] = obj5;
      tmp10 = obj5;
    }
  : (arg0) => {
      let Children;
      let descendantTracking;
      let items;
      let name;
      let navigationTTIRegionMeasurement;
      let viewProps;
      ({ name, descendantTracking, viewProps } = arg0);
      const children = viewProps.children;
      const tmp = _objectWithoutProperties(viewProps, closure_5);
      const obj = { name, tracking: "exclude", descendantTracking, hasChildren: Children.count(children) > 0 };
      Children = react.Children;
      const useNavigationTTIRegionHierarchy = NavigationTTIRegionHierarchy.useNavigationTTIRegionHierarchy;
      NavigationTTIRegionHierarchy;
      const navigationTTIRegionHierarchy = useNavigationTTIRegionHierarchy(obj);
      const obj3 = { measurementProps: navigationTTIRegionMeasurement, children: items };
      const obj2 = useComponentRenderSpan;
      navigationTTIRegionMeasurement = obj2.useNavigationTTIRegionMeasurement(
        "exclude",
        navigationTTIRegionHierarchy.regionId,
      );
      const merged = Object.assign(tmp);
      items = [,];
      const obj4 = { value: navigationTTIRegionHierarchy.contextValue, children };
      items[0] = unpackModuleId(NavigationTTIRegionHierarchy.NavigationTTIRegionHierarchyContext.Provider, obj4);
      const obj5 = {
        name,
        regionId: navigationTTIRegionHierarchy.regionId,
        tracking: "exclude",
        descendantTracking,
        includedDescendants: navigationTTIRegionHierarchy.includedDescendants,
        excludedDescendants: navigationTTIRegionHierarchy.excludedDescendants,
        hierarchyDepth: navigationTTIRegionHierarchy.depth,
        violation: navigationTTIRegionHierarchy.violation,
      };
      items[1] = unpackModuleId(NavigationTTIRegionDebugOverlay.NavigationTTIRegionDebugOverlay, obj5);
      return closure_12(closure_13, obj3);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (definition) => {
      let closure_0;
      let closure_1;
      let closure_2;
      let descendantTracking;
      let isVisible;
      let name;
      let navigationKey;
      let tmp10;
      let tmp14;
      let tmp5;
      let tmp6;
      let tmp8;
      let tmp9;
      let visibilityMode;
      let obj = require("react");
      const cResult = obj.c(31);
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
              fn = function () {
                /* body not rendered: F146559 */
              };
            }
            return fn;
          }
        }
        cResult[4] = navigationKey;
        cResult[5] = isVisible;
        cResult[6] = tmp13;
        cResult[7] = visibilityMode;
        tmp10 = visibilityMode;
        tmp9 = tmp13;
        tmp8 = isVisible;
        tmp6 = name;
        tmp5 = descendantTracking;
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
        const tmpResult = require("navigationTTIEnabled");
        const result = tmpResult.isNavigationTTIEnabled();
        cResult[8] = result;
        tmp14 = result;
      } else {
        tmp14 = cResult[8];
      }
      dependencyMap = tmp14;
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
              if (cResult[17] === ("immediate" === tmp10 || true === tmp8)) {
                if (cResult[18] === navigationKey) {
                  let tmp21;
                  let tmp24;
                  let tmp23;
                  let tmp28Result;
                  if (cResult[19] === tmp10) {
                    tmp21 = cResult[20];
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
                    tmp24 = E;
                    tmp23 = items;
                  } else {
                    tmp23 = cResult[21];
                    tmp24 = cResult[22];
                  }
                  const tmpResult2 = require("get initialized");
                  const stateFromStores = tmpResult2.useStateFromStores(tmp23, tmp24);
                  if (cResult[23] === tmp5) {
                    if (cResult[24] === tmp6) {
                      if (cResult[25] === tmp9) {
                        let tmp27;
                        if (cResult[26] === stateFromStores) {
                          tmp27 = cResult[27];
                        }
                        if (cResult[28] === tmp27) {
                          let tmp33;
                          if (cResult[29] === tmp21) {
                            tmp33 = cResult[30];
                          }
                          return tmp33;
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
                        tmp34[0] = tmp21;
                        tmp34[1] = tmp27;
                        const tmp35 = closure_11(require("NavTTISurfaceContext").NavTTISurfaceContext.Provider, tmp34);
                        cResult[28] = tmp27;
                        cResult[29] = tmp21;
                        cResult[30] = tmp35;
                        tmp33 = tmp35;
                      }
                    }
                  }
                  if (stateFromStores) {
                    const obj2 = { name: null, descendantTracking: null, viewProps: tmp9 };
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
                    tmp28Result = closure_11(closure_14, obj2);
                  } else {
                    const obj3 = { measurementProps: {} };
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
                        fn = function () {
                          /* body not rendered: F146559 */
                        };
                      }
                      return fn;
                    }
                  }
                  tmp27 = tmp28Result;
                }
              }
            }
          }
          const obj4 = {
            definition: tmp4,
            navigationKey,
            activeTraceId: tmp20,
            visibilityMode: tmp10,
            isVisible: "immediate" === tmp10 || true === tmp8,
          };
          cResult[15] = tmp20;
          cResult[16] = tmp4;
          cResult[17] = "immediate" === tmp10 || true === tmp8;
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
                fn = function () {
                  /* body not rendered: F146559 */
                };
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
            fn = function () {
              /* body not rendered: F146559 */
            };
          }
          return fn;
        }
      }
      cResult[9] = tmp4;
      cResult[10] = navigationKey;
      cResult[11] = P;
    }
  : (navigationKey) => {
      let children;
      let descendantTracking;
      let isVisible;
      let name;
      let tmp16;
      navigationKey = navigationKey.navigationKey;
      const definition = navigationKey.definition;
      const visibilityMode = navigationKey.visibilityMode;
      ({ name, descendantTracking, isVisible } = navigationKey);
      const merged = Object.assign(
        navigationKey,
        Object.assign({
          name: 0,
          navigationKey: 0,
          definition: 0,
          descendantTracking: 0,
          visibilityMode: 0,
          isVisible: 0,
        }),
      );
      let obj = navigationKey(visibilityMode[10]);
      const result = obj.isNavigationTTIEnabled();
      let c3 = result;
      isVisible = tmp5;
      const items = [definition, result, navigationKey];
      const items1 = [definition, result, navigationKey];
      const callback = react.useCallback((arg0) => {
        let fn;
        if (c3) {
          const obj = NavigationSpanTrackerDefault;
          fn = obj.subscribe(definition, navigationKey, arg0);
        } else {
          fn = () => {};
        }
        return fn;
      }, items);
      const callback1 = react.useCallback(() => {
        let activeTraceId = null;
        if (c3) {
          const obj = NavigationSpanTrackerDefault;
          activeTraceId = obj.getActiveTraceId(definition, navigationKey);
        }
        return activeTraceId;
      }, items1);
      const syncExternalStore = react.useSyncExternalStore(callback, callback1, callback1);
      const items2 = [syncExternalStore, definition, tmp5, navigationKey, visibilityMode];
      const value = react.useMemo(
        () => ({ definition, navigationKey, activeTraceId: syncExternalStore, visibilityMode, isVisible }),
        items2,
      );
      const items3 = [DevSettingsStore];
      const tmp2Result = navigationKey(visibilityMode[12]);
      if (tmp2Result.useStateFromStores(items3, () => DevSettingsStore.get("navigation_tti_visualizer"))) {
        const obj2 = { name, descendantTracking, viewProps: merged };
        children = closure_11(closure_14, obj2);
        tmp16 = closure_11;
      } else {
        const obj3 = { measurementProps: {} };
        const merged1 = Object.assign(merged);
        children = closure_11(closure_13, obj3);
        tmp16 = closure_11;
      }
      return tmp16(navigationKey(visibilityMode[13]).NavTTISurfaceContext.Provider, { value, children });
    };
let result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/NavTTISurfaceProvider.tsx");

export const NavTTISurfaceProvider = tmp3;
