// discord_app/modules/tti_analytics/native/navigation/NavTTIView.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../_runtime/00576_c.js";
import navigationTTIEnabled from "navigationTTIEnabled.tsx";
import useComponentRenderSpan from "useComponentRenderSpan.tsx";
import NavigationTTIRegionHierarchy from "debug/NavigationTTIRegionHierarchy.tsx";
import NavigationTTIRegionDebugOverlay from "debug/NavigationTTIRegionDebugOverlay.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import DevSettingsStore from "../../../devtools/dev_settings/DevSettingsStore.tsx";

require = fn;
let closure_2 = ["measurementProps", "onLayout", "children"];
let closure_3 = ["name"];
let closure_4 = ["tracking", "descendantTracking", "name"];
let closure_5 = ["tracking", "descendantTracking", "name"];
let closure_6 = ["tracking", "name", "descendantTracking"];
let closure_7 = ["tracking", "name"];
let closure_8 = ["tracking", "name", "descendantTracking"];
let closure_9 = ["tracking", "name"];
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? function NavTTIMeasuredView(children) {
      const cResult = c.c(12);
      if (cResult[0] !== children) {
        ({ measurementProps, onLayout } = children);
        closure_0 = onLayout;
        children = children.children;
        const tmp8 = _objectWithoutProperties(children, closure_2);
        cResult[0] = children;
        cResult[1] = children;
        class T {
          constructor(arg0) {
            if (onLayout != null) {
              tmpResult = tmp(children);
            }
            if (closure_0 != null) {
              tmp3Result = tmp3(children);
            }
            return;
          }
        }
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
        class T {
          constructor(arg0) {
            if (onLayout != null) {
              tmpResult = tmp(children);
            }
            if (closure_0 != null) {
              tmp3Result = tmp3(children);
            }
            return;
          }
        }
        const tmp17 = closure_1_14(View, obj2);
        cResult[8] = tmp2;
        cResult[9] = tmp4;
        cResult[10] = tmp5;
        cResult[11] = tmp17;
        tmp11 = tmp17;
      }
      class T {
        constructor(arg0) {
          if (onLayout != null) {
            tmpResult = tmp(children);
          }
          if (closure_0 != null) {
            tmp3Result = tmp3(children);
          }
          return;
        }
      }
      cResult[5] = onLayout2;
      cResult[6] = tmp4;
      cResult[7] = T;
      tmp9 = T;
    }
  : function NavTTIMeasuredView(onLayout) {
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
      return closure_1_14(View, obj);
    };
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? function IncludedNavTTIView(name) {
      const cResult = c.c(6);
      if (cResult[0] !== name) {
        name = name.name;
        const tmp8 = _objectWithoutProperties(name, closure_3);
        cResult[0] = name;
        cResult[1] = name;
        cResult[2] = tmp8;
        let tmp5 = tmp8;
        let tmp4 = name;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
      }
      const navigationTTIRegionMeasurement = useComponentRenderSpan.useNavigationTTIRegionMeasurement("include", tmp4);
      if (cResult[3] === navigationTTIRegionMeasurement) {
        if (cResult[4] === tmp5) {
          let tmp10 = cResult[5];
        }
        return tmp10;
      }
      const obj2 = {};
      const merged = Object.assign(tmp5);
      obj2.measurementProps = navigationTTIRegionMeasurement;
      const tmp12 = closure_1_14(closure_16, obj2);
      cResult[3] = navigationTTIRegionMeasurement;
      cResult[4] = tmp5;
      cResult[5] = tmp12;
      tmp10 = tmp12;
      const tmpResult = useComponentRenderSpan;
    }
  : function IncludedNavTTIView(name) {
      const merged = Object.assign(name, Object.assign({ name: 0 }));
      const obj2 = {};
      const navigationTTIRegionMeasurement = useComponentRenderSpan.useNavigationTTIRegionMeasurement(
        "include",
        name.name,
      );
      const merged1 = Object.assign(merged);
      obj2.measurementProps = navigationTTIRegionMeasurement;
      return closure_1_14(closure_16, obj2);
    };
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? function VisualizedNavTTIViewContent(arg0) {
      const cResult = c.c(23);
      ({ props, measurementProps, hierarchy } = arg0);
      if (cResult[0] !== props) {
        ({ tracking, descendantTracking, name } = props);
        const tmp9 = _objectWithoutProperties(props, closure_4);
        cResult[0] = props;
        cResult[1] = descendantTracking;
        cResult[2] = tmp9;
        cResult[3] = tracking;
        let tmp6 = tracking;
        let tmp5 = tmp9;
        let tmp4 = descendantTracking;
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
        let tmp10 = str;
      } else {
        tmp10 = cResult[5];
      }
      if (cResult[6] === hierarchy.contextValue) {
        if (cResult[7] === props.children) {
          let tmp12 = cResult[8];
        }
        if (cResult[9] === tmp4) {
          if (cResult[10] === hierarchy.depth) {
            if (cResult[11] === hierarchy.excludedDescendants) {
              if (cResult[12] === hierarchy.includedDescendants) {
                if (cResult[13] === hierarchy.regionId) {
                  if (cResult[14] === hierarchy.violation) {
                    if (cResult[15] === tmp10) {
                      if (cResult[16] === tmp6) {
                        let tmp14 = cResult[17];
                      }
                      if (cResult[18] === measurementProps) {
                        if (cResult[19] === tmp5) {
                          if (cResult[20] === tmp12) {
                            if (cResult[21] === tmp14) {
                              let tmp17 = cResult[22];
                            }
                            return tmp17;
                          }
                        }
                      }
                      const obj2 = {};
                      const merged = Object.assign(tmp5);
                      obj2.measurementProps = measurementProps;
                      const items = [tmp12, tmp14];
                      obj2.children = items;
                      const tmp23 = value2(closure_16, obj2);
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
        const obj4 = {
          name: tmp10,
          regionId: hierarchy.regionId,
          tracking: tmp6,
          descendantTracking: tmp4,
          includedDescendants: null,
          excludedDescendants: null,
          hierarchyDepth: null,
          violation: null,
        };
        ({
          includedDescendants: obj3.includedDescendants,
          excludedDescendants: obj3.excludedDescendants,
          depth: obj3.hierarchyDepth,
          violation: obj3.violation,
        } = hierarchy);
        const tmp16 = closure_1_14(NavigationTTIRegionDebugOverlay.NavigationTTIRegionDebugOverlay, obj4);
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
      const tmp13 = closure_1_14(NavigationTTIRegionHierarchy.NavigationTTIRegionHierarchyContext.Provider, {
        value: hierarchy.contextValue,
        children: props.children,
      });
      cResult[6] = hierarchy.contextValue;
      cResult[7] = props.children;
      cResult[8] = tmp13;
      tmp12 = tmp13;
      const obj7 = { value: hierarchy.contextValue, children: props.children };
    }
  : function VisualizedNavTTIViewContent(measurementProps) {
      ({ props, hierarchy } = measurementProps);
      ({ tracking, descendantTracking } = props);
      let str = props.name;
      if (str == null) {
        str = "(unnamed)";
      }
      const obj = {};
      const merged = Object.assign(_objectWithoutProperties(props, closure_5));
      obj.measurementProps = measurementProps.measurementProps;
      const items = [
        closure_1_14(NavigationTTIRegionHierarchy.NavigationTTIRegionHierarchyContext.Provider, {
          value: hierarchy.contextValue,
          children: props.children,
        }),
        closure_1_14(NavigationTTIRegionDebugOverlay.NavigationTTIRegionDebugOverlay, {
          name: str,
          regionId: hierarchy.regionId,
          tracking,
          descendantTracking,
          includedDescendants: hierarchy.includedDescendants,
          excludedDescendants: hierarchy.excludedDescendants,
          hierarchyDepth: hierarchy.depth,
          violation: hierarchy.violation,
        }),
      ];
      obj.children = items;
      return value2(closure_16, obj);
    };
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? function VisualizedIncludedNavTTIView(children) {
      const cResult = c.c(8);
      const Children = noop.Children;
      const tmp4 = Children.count(children.children) > 0;
      if (cResult[0] === children.name) {
        if (cResult[1] === children.tracking) {
          if (cResult[2] === tmp4) {
            let tmp5 = cResult[3];
          }
          const navigationTTIRegionHierarchy = NavigationTTIRegionHierarchy.useNavigationTTIRegionHierarchy(tmp5);
          const tmpResult = NavigationTTIRegionHierarchy;
          const navigationTTIRegionMeasurement = useComponentRenderSpan.useNavigationTTIRegionMeasurement(
            "include",
            children.name,
          );
          if (cResult[4] === navigationTTIRegionHierarchy) {
            if (cResult[5] === navigationTTIRegionMeasurement) {
              if (cResult[6] === children) {
                let tmp8 = cResult[7];
              }
              return tmp8;
            }
          }
          const obj2 = {
            props: children,
            measurementProps: navigationTTIRegionMeasurement,
            hierarchy: navigationTTIRegionHierarchy,
          };
          const tmp11 = closure_1_14(closure_18, obj2);
          cResult[4] = navigationTTIRegionHierarchy;
          cResult[5] = navigationTTIRegionMeasurement;
          cResult[6] = children;
          cResult[7] = tmp11;
          tmp8 = tmp11;
          const tmpResult2 = useComponentRenderSpan;
        }
      }
      const obj3 = { name: children.name, tracking: children.tracking, hasChildren: tmp4 };
      cResult[0] = children.name;
      cResult[1] = children.tracking;
      cResult[2] = tmp4;
      cResult[3] = obj3;
      tmp5 = obj3;
    }
  : function VisualizedIncludedNavTTIView(name) {
      const obj2 = { name: name.name, tracking: name.tracking, hasChildren: null };
      const Children = noop.Children;
      obj2.hasChildren = Children.count(name.children) > 0;
      const navigationTTIRegionHierarchy = NavigationTTIRegionHierarchy.useNavigationTTIRegionHierarchy(obj2);
      return closure_1_14(closure_18, {
        props: name,
        measurementProps: useComponentRenderSpan.useNavigationTTIRegionMeasurement("include", name.name),
        hierarchy: navigationTTIRegionHierarchy,
      });
    };
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? function VisualizedExcludedNavTTIView(name) {
      const cResult = c.c(11);
      if (cResult[0] !== name) {
        let str = name.name;
        if (str == null) {
          str = "(unnamed)";
        }
        cResult[0] = name;
        cResult[1] = str;
        let tmp4 = str;
      } else {
        tmp4 = cResult[1];
      }
      const Children = noop.Children;
      const tmp6 = Children.count(name.children) > 0;
      if (cResult[2] === tmp4) {
        if (cResult[3] === name.descendantTracking) {
          if (cResult[4] === name.tracking) {
            if (cResult[5] === tmp6) {
              let tmp7 = cResult[6];
            }
            const navigationTTIRegionHierarchy = NavigationTTIRegionHierarchy.useNavigationTTIRegionHierarchy(tmp7);
            const tmpResult = NavigationTTIRegionHierarchy;
            const navigationTTIRegionMeasurement = useComponentRenderSpan.useNavigationTTIRegionMeasurement(
              "exclude",
              navigationTTIRegionHierarchy.regionId,
            );
            if (cResult[7] === navigationTTIRegionHierarchy) {
              if (cResult[8] === navigationTTIRegionMeasurement) {
                if (cResult[9] === name) {
                  let tmp10 = cResult[10];
                }
                return tmp10;
              }
            }
            const obj2 = {
              props: name,
              measurementProps: navigationTTIRegionMeasurement,
              hierarchy: navigationTTIRegionHierarchy,
            };
            const tmp13 = closure_1_14(closure_18, obj2);
            cResult[7] = navigationTTIRegionHierarchy;
            cResult[8] = navigationTTIRegionMeasurement;
            cResult[9] = name;
            cResult[10] = tmp13;
            tmp10 = tmp13;
            const tmpResult2 = useComponentRenderSpan;
          }
        }
      }
      const obj3 = {
        name: tmp4,
        tracking: name.tracking,
        descendantTracking: name.descendantTracking,
        hasChildren: tmp6,
      };
      cResult[2] = tmp4;
      cResult[3] = name.descendantTracking;
      cResult[4] = name.tracking;
      cResult[5] = tmp6;
      cResult[6] = obj3;
      tmp7 = obj3;
    }
  : function VisualizedExcludedNavTTIView(name) {
      let str = name.name;
      if (str == null) {
        str = "(unnamed)";
      }
      const obj2 = {
        name: str,
        tracking: name.tracking,
        descendantTracking: name.descendantTracking,
        hasChildren: null,
      };
      const Children = noop.Children;
      obj2.hasChildren = Children.count(name.children) > 0;
      const navigationTTIRegionHierarchy = NavigationTTIRegionHierarchy.useNavigationTTIRegionHierarchy(obj2);
      return closure_1_14(closure_18, {
        props: name,
        measurementProps: useComponentRenderSpan.useNavigationTTIRegionMeasurement(
          "exclude",
          navigationTTIRegionHierarchy.regionId,
        ),
        hierarchy: navigationTTIRegionHierarchy,
      });
    };
ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled()
  ? function VisualizedNavTTIView(tracking) {
      const cResult = c.c(2);
      if (cResult[0] !== tracking) {
        if ("include" === tracking.tracking) {
          const obj2 = {};
          const merged = Object.assign(tracking);
          let tmp7 = closure_1_14(closure_19, obj2);
        } else {
          const obj3 = {};
          const merged1 = Object.assign(tracking);
          tmp7 = closure_1_14(closure_20, obj3);
        }
        cResult[0] = tracking;
        cResult[1] = tmp7;
      } else {
        return cResult[1];
      }
    }
  : function VisualizedNavTTIView(tracking) {
      if ("include" === tracking.tracking) {
        const obj2 = {};
        const merged = Object.assign(tracking);
        let tmp6 = closure_1_14(closure_19, obj2);
      } else {
        const obj = {};
        const merged1 = Object.assign(tracking);
        tmp6 = closure_1_14(closure_20, obj);
      }
      return tmp6;
    };
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/NavTTIView.tsx");

export const NavTTIView = ReactCompilerGating.isReactCompilerEnabled()
  ? function NavTTIView(tracking) {
      const cResult = c.c(16);
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
      if (tmpResult.useStateFromStores(tmp4, tmp5)) {
        if (cResult[2] !== tracking) {
          const obj2 = {};
          const merged = Object.assign(tracking);
          const tmp44 = closure_1_14(closure_21, obj2);
          cResult[2] = tracking;
          cResult[3] = tmp44;
          let tmp38 = tmp44;
        } else {
          tmp38 = cResult[3];
        }
        return tmp38;
      } else if ("exclude" === tracking.tracking) {
        if (cResult[4] !== tracking) {
          ({ tracking: tracking2, name: name2, descendantTracking } = tracking);
          const tmp30 = _objectWithoutProperties(tracking, closure_6);
          cResult[4] = tracking;
          cResult[5] = tmp30;
          let tmp27 = tmp30;
        } else {
          tmp27 = cResult[5];
        }
        if (cResult[6] !== tmp27) {
          const obj3 = {};
          const merged1 = Object.assign(tmp27);
          const tmp37 = closure_1_14(View, obj3);
          cResult[6] = tmp27;
          cResult[7] = tmp37;
          let tmp31 = tmp37;
        } else {
          tmp31 = cResult[7];
        }
        return tmp31;
      } else {
        if (cResult[8] !== tracking) {
          ({ tracking, name } = tracking);
          const tmp11 = _objectWithoutProperties(tracking, closure_7);
          cResult[8] = tracking;
          cResult[9] = name;
          cResult[10] = tmp11;
          let tmp8 = tmp11;
          let tmp7 = name;
        } else {
          tmp7 = cResult[9];
          tmp8 = cResult[10];
        }
        if (tmpResult2.isNavigationTTIEnabled()) {
          if (cResult[13] === tmp7) {
          }
          const obj4 = {};
          const merged2 = Object.assign(tmp8);
          obj4.name = tmp7;
          const tmp25 = closure_1_14(closure_17, obj4);
          cResult[13] = tmp7;
          cResult[14] = tmp8;
          cResult[15] = tmp25;
        } else {
          if (cResult[11] !== tmp8) {
            const obj5 = {};
            const merged3 = Object.assign(tmp8);
            const tmp18 = closure_1_14(View, obj5);
            cResult[11] = tmp8;
            cResult[12] = tmp18;
            let tmp12 = tmp18;
          } else {
            tmp12 = cResult[12];
          }
          return tmp12;
        }
        tmpResult2 = navigationTTIEnabled;
      }
      tmpResult = initialize;
    }
  : function NavTTIView(tracking) {
      const items = [DevSettingsStore];
      if (obj.useStateFromStores(items, () => DevSettingsStore.get("navigation_tti_visualizer"))) {
        const obj2 = {};
        const merged = Object.assign(tracking);
        return closure_1_14(closure_21, obj2);
      } else if ("exclude" === tracking.tracking) {
        ({ tracking: tracking2, name, descendantTracking } = tracking);
        const obj3 = {};
        const merged1 = Object.assign(_objectWithoutProperties(tracking, closure_8));
        return closure_1_14(View, obj3);
      } else {
        tracking = tracking.tracking;
        const tmp5 = _objectWithoutProperties(tracking, closure_9);
        if (tmpResult.isNavigationTTIEnabled()) {
          const obj4 = {};
          const merged2 = Object.assign(tmp5);
          obj4.name = tracking.name;
          let tmp6Result = closure_1_14(closure_17, obj4);
        } else {
          const obj5 = {};
          const merged3 = Object.assign(tmp5);
          tmp6Result = closure_1_14(View, obj5);
        }
        return tmp6Result;
      }
      obj = initialize;
    };
