// === Module 16519: NavTTIView ===

// Module 16519 (NavTTIView)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import navigationTTIEnabled from "navigationTTIEnabled" /* 16514 */;
import useComponentRenderSpan from "useComponentRenderSpan" /* 16520 */;
import NavigationTTIRegionHierarchy from "NavigationTTIRegionHierarchy" /* 16527 */;
import NavigationTTIRegionDebugOverlay from "NavigationTTIRegionDebugOverlay" /* 16528 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import DevSettingsStore from "DevSettingsStore" /* 4895 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_14;
let closure_15;
let closure_2 = ["measurementProps", "onLayout", "children"];
let closure_3 = ["name"];
let closure_4 = ["tracking", "descendantTracking", "name"];
let closure_5 = ["tracking", "descendantTracking", "name"];
let closure_6 = ["tracking", "name", "descendantTracking"];
let closure_7 = ["tracking", "name"];
let closure_8 = ["tracking", "name", "descendantTracking"];
let closure_9 = ["tracking", "name"];
const View = react_native.View;
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((children) => {
  let measurementProps;
  let onLayout;
  let tmp2;
  let tmp3;
  let tmp4;
  let tmp5;
  let obj = react2;
  const cResult = obj.c(12);
  if (cResult[0] !== children) {
    ({ measurementProps, onLayout } = children);
    let closure_0 = onLayout;
    children = children.children;
    const tmp8 = _objectWithoutProperties(children, closure_2);
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
    let obj2 = { onLayout: tmp4, children: tmp2 };
    const merged = Object.assign(tmp5);
    const tmp17 = authStore2(View, obj2);
    cResult[8] = tmp2;
    cResult[9] = tmp4;
    cResult[10] = tmp5;
    cResult[11] = tmp17;
    tmp11 = tmp17;
  }
  const fn = function v(arg0) {
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
  return authStore2(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((name) => {
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(6);
  if (cResult[0] !== name) {
    name = name.name;
    const tmp8 = _objectWithoutProperties(name, closure_3);
    cResult[0] = name;
    cResult[1] = name;
    cResult[2] = tmp8;
    tmp5 = tmp8;
    tmp4 = name;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const tmpResult = useComponentRenderSpan;
  const navigationTTIRegionMeasurement = tmpResult.useNavigationTTIRegionMeasurement("include", tmp4);
  if (cResult[3] === navigationTTIRegionMeasurement) {
    let tmp10;
    if (cResult[4] === tmp5) {
      tmp10 = cResult[5];
    }
    return tmp10;
  }
  const obj2 = { measurementProps: navigationTTIRegionMeasurement };
  const merged = Object.assign(tmp5);
  const tmp12 = authStore2(closure_16, obj2);
  cResult[3] = navigationTTIRegionMeasurement;
  cResult[4] = tmp5;
  cResult[5] = tmp12;
  tmp10 = tmp12;
}) : ((name) => {
  let navigationTTIRegionMeasurement;
  name = name.name;
  const merged = Object.assign(name, Object.assign({ name: 0 }));
  const obj2 = { measurementProps: navigationTTIRegionMeasurement };
  const obj = useComponentRenderSpan;
  navigationTTIRegionMeasurement = obj.useNavigationTTIRegionMeasurement("include", name);
  const merged1 = Object.assign(merged);
  return authStore2(closure_16, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let descendantTracking;
  let hierarchy;
  let items;
  let measurementProps;
  let name;
  let props;
  let tmp10;
  let tmp4;
  let tmp5;
  let tmp6;
  let tracking;
  const obj = react2;
  const cResult = obj.c(23);
  ({ props, measurementProps, hierarchy } = arg0);
  if (cResult[0] !== props) {
    ({ tracking, descendantTracking, name } = props);
    const tmp9 = _objectWithoutProperties(props, closure_4);
    cResult[0] = props;
    cResult[1] = descendantTracking;
    cResult[2] = tmp9;
    cResult[3] = tracking;
    tmp6 = tracking;
    tmp5 = tmp9;
    tmp4 = descendantTracking;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
  }
  if (cResult[4] !== props) {
    let str = props.name;
    if (str == null) {
      str = "(unnamed)";
    }
    cResult[4] = props;
    cResult[5] = str;
    tmp10 = str;
  } else {
    tmp10 = cResult[5];
  }
  if (cResult[6] === hierarchy.contextValue) {
    let tmp12;
    if (cResult[7] === props.children) {
      tmp12 = cResult[8];
    }
    if (cResult[9] === tmp4) {
      if (cResult[10] === hierarchy.depth) {
        if (cResult[11] === hierarchy.excludedDescendants) {
          if (cResult[12] === hierarchy.includedDescendants) {
            if (cResult[13] === hierarchy.regionId) {
              if (cResult[14] === hierarchy.violation) {
                if (cResult[15] === tmp10) {
                  let tmp14;
                  if (cResult[16] === tmp6) {
                    tmp14 = cResult[17];
                  }
                  if (cResult[18] === measurementProps) {
                    if (cResult[19] === tmp5) {
                      if (cResult[20] === tmp12) {
                        let tmp17;
                        if (cResult[21] === tmp14) {
                          tmp17 = cResult[22];
                        }
                        return tmp17;
                      }
                    }
                  }
                  const obj2 = { measurementProps, children: items };
                  const merged = Object.assign(tmp5);
                  items = [tmp12, tmp14];
                  const tmp23 = closure_15(closure_16, obj2);
                  cResult[18] = measurementProps;
                  cResult[19] = tmp5;
                  cResult[20] = tmp12;
                  cResult[21] = tmp14;
                  cResult[22] = tmp23;
                  tmp17 = tmp23;
                }
              }
            }
          }
        }
      }
    }
    const obj4 = { name: tmp10, regionId: hierarchy.regionId, tracking: tmp6, descendantTracking: tmp4, includedDescendants: null, excludedDescendants: null, hierarchyDepth: null, violation: null };
    ({ includedDescendants: obj3.includedDescendants, excludedDescendants: obj3.excludedDescendants, depth: obj3.hierarchyDepth, violation: obj3.violation } = hierarchy);
    const tmp16 = authStore2(NavigationTTIRegionDebugOverlay.NavigationTTIRegionDebugOverlay, obj4);
    cResult[9] = tmp4;
    cResult[10] = hierarchy.depth;
    cResult[11] = hierarchy.excludedDescendants;
    cResult[12] = hierarchy.includedDescendants;
    cResult[13] = hierarchy.regionId;
    cResult[14] = hierarchy.violation;
    cResult[15] = tmp10;
    cResult[16] = tmp6;
    cResult[17] = tmp16;
    tmp14 = tmp16;
  }
  const obj7 = { value: hierarchy.contextValue, children: props.children };
  const tmp13 = authStore2(NavigationTTIRegionHierarchy.NavigationTTIRegionHierarchyContext.Provider, obj7);
  cResult[6] = hierarchy.contextValue;
  cResult[7] = props.children;
  cResult[8] = tmp13;
  tmp12 = tmp13;
}) : ((measurementProps) => {
  let descendantTracking;
  let hierarchy;
  let items;
  let props;
  let tracking;
  ({ props, hierarchy } = measurementProps);
  measurementProps = measurementProps.measurementProps;
  ({ tracking, descendantTracking } = props);
  let str = props.name;
  const tmp = _objectWithoutProperties(props, closure_5);
  if (str == null) {
    str = "(unnamed)";
  }
  const obj = { measurementProps, children: items };
  const merged = Object.assign(tmp);
  items = [, ];
  const obj2 = { value: hierarchy.contextValue, children: props.children };
  items[0] = authStore2(NavigationTTIRegionHierarchy.NavigationTTIRegionHierarchyContext.Provider, obj2);
  const obj3 = { name: str, regionId: hierarchy.regionId, tracking, descendantTracking, includedDescendants: hierarchy.includedDescendants, excludedDescendants: hierarchy.excludedDescendants, hierarchyDepth: hierarchy.depth, violation: hierarchy.violation };
  items[1] = authStore2(NavigationTTIRegionDebugOverlay.NavigationTTIRegionDebugOverlay, obj3);
  return closure_15(closure_16, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? ((children) => {
  const obj = react2;
  const cResult = obj.c(8);
  const Children = react.Children;
  const tmp4 = Children.count(children.children) > 0;
  if (cResult[0] === children.name) {
    if (cResult[1] === children.tracking) {
      let tmp5;
      if (cResult[2] === tmp4) {
        tmp5 = cResult[3];
      }
      const tmpResult = NavigationTTIRegionHierarchy;
      const navigationTTIRegionHierarchy = tmpResult.useNavigationTTIRegionHierarchy(tmp5);
      const tmpResult2 = useComponentRenderSpan;
      const navigationTTIRegionMeasurement = tmpResult2.useNavigationTTIRegionMeasurement("include", children.name);
      if (cResult[4] === navigationTTIRegionHierarchy) {
        if (cResult[5] === navigationTTIRegionMeasurement) {
          let tmp8;
          if (cResult[6] === children) {
            tmp8 = cResult[7];
          }
          return tmp8;
        }
      }
      const obj2 = { props: children, measurementProps: navigationTTIRegionMeasurement, hierarchy: navigationTTIRegionHierarchy };
      const tmp11 = authStore2(closure_18, obj2);
      cResult[4] = navigationTTIRegionHierarchy;
      cResult[5] = navigationTTIRegionMeasurement;
      cResult[6] = children;
      cResult[7] = tmp11;
      tmp8 = tmp11;
    }
  }
  const obj3 = { name: children.name, tracking: children.tracking, hasChildren: tmp4 };
  cResult[0] = children.name;
  cResult[1] = children.tracking;
  cResult[2] = tmp4;
  cResult[3] = obj3;
  tmp5 = obj3;
}) : ((name) => {
  let Children;
  const obj = { name: name.name, tracking: name.tracking, hasChildren: Children.count(name.children) > 0 };
  Children = react.Children;
  const useNavigationTTIRegionHierarchy = NavigationTTIRegionHierarchy.useNavigationTTIRegionHierarchy;
  NavigationTTIRegionHierarchy;
  const navigationTTIRegionHierarchy = useNavigationTTIRegionHierarchy(obj);
  const obj2 = useComponentRenderSpan;
  const obj3 = { props: name, measurementProps: obj2.useNavigationTTIRegionMeasurement("include", name.name), hierarchy: navigationTTIRegionHierarchy };
  return authStore2(closure_18, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? ((name) => {
  let tmp4;
  const obj = react2;
  const cResult = obj.c(11);
  if (cResult[0] !== name) {
    let str = name.name;
    if (str == null) {
      str = "(unnamed)";
    }
    cResult[0] = name;
    cResult[1] = str;
    tmp4 = str;
  } else {
    tmp4 = cResult[1];
  }
  const Children = react.Children;
  const tmp6 = Children.count(name.children) > 0;
  if (cResult[2] === tmp4) {
    if (cResult[3] === name.descendantTracking) {
      if (cResult[4] === name.tracking) {
        let tmp7;
        if (cResult[5] === tmp6) {
          tmp7 = cResult[6];
        }
        const tmpResult = NavigationTTIRegionHierarchy;
        const navigationTTIRegionHierarchy = tmpResult.useNavigationTTIRegionHierarchy(tmp7);
        const tmpResult2 = useComponentRenderSpan;
        const navigationTTIRegionMeasurement = tmpResult2.useNavigationTTIRegionMeasurement("exclude", navigationTTIRegionHierarchy.regionId);
        if (cResult[7] === navigationTTIRegionHierarchy) {
          if (cResult[8] === navigationTTIRegionMeasurement) {
            let tmp10;
            if (cResult[9] === name) {
              tmp10 = cResult[10];
            }
            return tmp10;
          }
        }
        const obj2 = { props: name, measurementProps: navigationTTIRegionMeasurement, hierarchy: navigationTTIRegionHierarchy };
        const tmp13 = authStore2(closure_18, obj2);
        cResult[7] = navigationTTIRegionHierarchy;
        cResult[8] = navigationTTIRegionMeasurement;
        cResult[9] = name;
        cResult[10] = tmp13;
        tmp10 = tmp13;
      }
    }
  }
  const obj3 = { name: tmp4, tracking: name.tracking, descendantTracking: name.descendantTracking, hasChildren: tmp6 };
  cResult[2] = tmp4;
  cResult[3] = name.descendantTracking;
  cResult[4] = name.tracking;
  cResult[5] = tmp6;
  cResult[6] = obj3;
  tmp7 = obj3;
}) : ((name) => {
  let Children;
  let str = name.name;
  if (str == null) {
    str = "(unnamed)";
  }
  const obj = { name: str, tracking: name.tracking, descendantTracking: name.descendantTracking, hasChildren: Children.count(name.children) > 0 };
  Children = react.Children;
  const useNavigationTTIRegionHierarchy = NavigationTTIRegionHierarchy.useNavigationTTIRegionHierarchy;
  NavigationTTIRegionHierarchy;
  const navigationTTIRegionHierarchy = useNavigationTTIRegionHierarchy(obj);
  const obj2 = useComponentRenderSpan;
  const obj3 = { props: name, measurementProps: obj2.useNavigationTTIRegionMeasurement("exclude", navigationTTIRegionHierarchy.regionId), hierarchy: navigationTTIRegionHierarchy };
  return authStore2(closure_18, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? ((tracking) => {
  let tmp2;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] !== tracking) {
    let tmp8;
    if ("include" === tracking.tracking) {
      const obj2 = {};
      const merged = Object.assign(tracking);
      tmp8 = authStore2(closure_19, obj2);
    } else {
      const obj3 = {};
      const merged1 = Object.assign(tracking);
      tmp8 = authStore2(closure_20, obj3);
    }
    cResult[0] = tracking;
    cResult[1] = tmp8;
    tmp2 = tmp8;
  } else {
    tmp2 = cResult[1];
  }
  return tmp2;
}) : ((tracking) => {
  let tmp6;
  if ("include" === tracking.tracking) {
    const obj2 = {};
    const merged = Object.assign(tracking);
    tmp6 = authStore2(closure_19, obj2);
  } else {
    const obj = {};
    const merged1 = Object.assign(tracking);
    tmp6 = authStore2(closure_20, obj);
  }
  return tmp6;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((tracking) => {
  let descendantTracking;
  let name;
  let name2;
  let tmp4;
  let tmp5;
  let tracking2;
  const obj = react2;
  const cResult = obj.c(16);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [DevSettingsStore];
    const fn = function c() {
      return DevSettingsStore.get("navigation_tti_visualizer");
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  if (tmpResult.useStateFromStores(tmp4, tmp5)) {
    let tmp37;
    if (cResult[2] !== tracking) {
      const obj2 = {};
      const merged = Object.assign(tracking);
      const tmp43 = authStore2(closure_21, obj2);
      cResult[2] = tracking;
      cResult[3] = tmp43;
      tmp37 = tmp43;
    } else {
      tmp37 = cResult[3];
    }
    return tmp37;
  } else if ("exclude" === tracking.tracking) {
    let tmp26;
    let tmp30;
    if (cResult[4] !== tracking) {
      ({ tracking: tracking2, name: name2, descendantTracking } = tracking);
      const tmp29 = _objectWithoutProperties(tracking, closure_6);
      cResult[4] = tracking;
      cResult[5] = tmp29;
      tmp26 = tmp29;
    } else {
      tmp26 = cResult[5];
    }
    if (cResult[6] !== tmp26) {
      const obj3 = {};
      const merged1 = Object.assign(tmp26);
      const tmp36 = authStore2(View, obj3);
      cResult[6] = tmp26;
      cResult[7] = tmp36;
      tmp30 = tmp36;
    } else {
      tmp30 = cResult[7];
    }
    return tmp30;
  } else {
    let tmp8;
    let tmp7;
    let tmp12;
    if (cResult[8] !== tracking) {
      ({ tracking, name } = tracking);
      const tmp11 = _objectWithoutProperties(tracking, closure_7);
      cResult[8] = tracking;
      cResult[9] = name;
      cResult[10] = tmp11;
      tmp8 = tmp11;
      tmp7 = name;
    } else {
      tmp7 = cResult[9];
      tmp8 = cResult[10];
    }
    const tmpResult2 = navigationTTIEnabled;
    if (tmpResult2.isNavigationTTIEnabled()) {
      if (cResult[13] === tmp7) {
        let tmp19;
        if (cResult[14] === tmp8) {
          tmp19 = cResult[15];
        }
        tmp12 = tmp19;
      }
      const obj4 = { name: tmp7 };
      const merged2 = Object.assign(tmp8);
      const tmp25 = authStore2(closure_17, obj4);
      cResult[13] = tmp7;
      cResult[14] = tmp8;
      cResult[15] = tmp25;
      tmp19 = tmp25;
    } else if (cResult[11] !== tmp8) {
      const obj5 = {};
      const merged3 = Object.assign(tmp8);
      const tmp18 = authStore2(View, obj5);
      cResult[11] = tmp8;
      cResult[12] = tmp18;
      tmp12 = tmp18;
    } else {
      tmp12 = cResult[12];
    }
    return tmp12;
  }
}) : ((tracking) => {
  let descendantTracking;
  let name2;
  let tracking2;
  const items = [DevSettingsStore];
  const obj = get_initialized;
  if (obj.useStateFromStores(items, () => DevSettingsStore.get("navigation_tti_visualizer"))) {
    const obj2 = {};
    const merged = Object.assign(tracking);
    return authStore2(closure_21, obj2);
  } else if ("exclude" === tracking.tracking) {
    ({ tracking: tracking2, name: name2, descendantTracking } = tracking);
    const obj3 = {};
    const merged1 = Object.assign(_objectWithoutProperties(tracking, closure_8));
    return authStore2(View, obj3);
  } else {
    let tmp6Result;
    tracking = tracking.tracking;
    const name = tracking.name;
    const tmp5 = _objectWithoutProperties(tracking, closure_9);
    const tmpResult = navigationTTIEnabled;
    if (tmpResult.isNavigationTTIEnabled()) {
      const obj4 = { name };
      const merged2 = Object.assign(tmp5);
      tmp6Result = authStore2(closure_17, obj4);
    } else {
      const obj5 = {};
      const merged3 = Object.assign(tmp5);
      tmp6Result = authStore2(View, obj5);
    }
    return tmp6Result;
  }
});
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/NavTTIView.tsx");

export const NavTTIView = tmp3;