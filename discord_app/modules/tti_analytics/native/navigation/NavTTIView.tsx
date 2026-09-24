// === Module 16961: NavTTIView ===

// Module 16961 (NavTTIView)
import initialize from "initialize" /* 504 */;
import useComponentRenderSpan from "useComponentRenderSpan" /* 16962 */;
import NavigationTTIRegionHierarchy from "NavigationTTIRegionHierarchy" /* 16968 */;
import NavigationTTIRegionDebugOverlay from "NavigationTTIRegionDebugOverlay" /* 16969 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import DevSettingsStore from "DevSettingsStore" /* 4828 */;

require = fn;
function NavTTIMeasuredView(onLayout) {
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
  return React7(View, obj);
}
function IncludedNavTTIView(name) {
  const merged = Object.assign(name, Object.assign({ name: 0 }));
  const obj2 = {};
  const navigationTTIRegionMeasurement = useComponentRenderSpan.useNavigationTTIRegionMeasurement("include", name.name);
  const merged1 = Object.assign(merged);
  obj2.measurementProps = navigationTTIRegionMeasurement;
  return React7(NavTTIMeasuredView, obj2);
}
function VisualizedNavTTIViewContent(measurementProps) {
  ({ props, hierarchy } = measurementProps);
  ({ tracking, descendantTracking } = props);
  let str = props.name;
  if (str == null) {
    str = "(unnamed)";
  }
  const obj = {};
  const merged = Object.assign(_objectWithoutProperties(props, closure_2));
  obj.measurementProps = measurementProps.measurementProps;
  const items = [React7(NavigationTTIRegionHierarchy.NavigationTTIRegionHierarchyContext.Provider, { value: hierarchy.contextValue, children: props.children }), React7(NavigationTTIRegionDebugOverlay.NavigationTTIRegionDebugOverlay, { name: str, regionId: hierarchy.regionId, tracking, descendantTracking, includedDescendants: hierarchy.includedDescendants, excludedDescendants: hierarchy.excludedDescendants, hierarchyDepth: hierarchy.depth, violation: hierarchy.violation })];
  obj.children = items;
  return closure_1_10(NavTTIMeasuredView, obj);
}
function VisualizedIncludedNavTTIView(name) {
  const obj2 = { name: name.name, tracking: name.tracking, hasChildren: null };
  const Children = noop.Children;
  obj2.hasChildren = Children.count(name.children) > 0;
  const navigationTTIRegionHierarchy = NavigationTTIRegionHierarchy.useNavigationTTIRegionHierarchy(obj2);
  return React7(VisualizedNavTTIViewContent, { props: name, measurementProps: useComponentRenderSpan.useNavigationTTIRegionMeasurement("include", name.name), hierarchy: navigationTTIRegionHierarchy });
}
function VisualizedExcludedNavTTIView(name) {
  let str = name.name;
  if (str == null) {
    str = "(unnamed)";
  }
  const obj2 = { name: str, tracking: name.tracking, descendantTracking: name.descendantTracking, hasChildren: null };
  const Children = noop.Children;
  obj2.hasChildren = Children.count(name.children) > 0;
  const navigationTTIRegionHierarchy = NavigationTTIRegionHierarchy.useNavigationTTIRegionHierarchy(obj2);
  return React7(VisualizedNavTTIViewContent, { props: name, measurementProps: useComponentRenderSpan.useNavigationTTIRegionMeasurement("exclude", navigationTTIRegionHierarchy.regionId), hierarchy: navigationTTIRegionHierarchy });
}
function VisualizedNavTTIView(tracking) {
  if ("include" === tracking.tracking) {
    const obj2 = {};
    const merged = Object.assign(tracking);
    let tmp6 = React7(VisualizedIncludedNavTTIView, obj2);
  } else {
    const obj = {};
    const merged1 = Object.assign(tracking);
    tmp6 = React7(VisualizedExcludedNavTTIView, obj);
  }
  return tmp6;
}
let closure_2 = ["tracking", "descendantTracking", "name"];
let closure_3 = ["tracking", "name", "descendantTracking"];
let closure_4 = ["tracking", "name"];
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/NavTTIView.tsx");

export const NavTTIView = function NavTTIView(tracking) {
  const items = [DevSettingsStore];
  if (obj.useStateFromStores(items, () => DevSettingsStore.get("navigation_tti_visualizer"))) {
    const obj2 = {};
    const merged = Object.assign(tracking);
    return React7(VisualizedNavTTIView, obj2);
  } else if ("exclude" === tracking.tracking) {
    ({ tracking: tracking2, name, descendantTracking } = tracking);
    const obj3 = {};
    const merged1 = Object.assign(_objectWithoutProperties(tracking, closure_3));
    return React7(View, obj3);
  } else {
    tracking = tracking.tracking;
    const tmp5 = _objectWithoutProperties(tracking, closure_4);
    if (tmpResult.isNavigationTTIEnabled()) {
      const obj4 = {};
      const merged2 = Object.assign(tmp5);
      obj4.name = tracking.name;
      let tmp6Result = React7(IncludedNavTTIView, obj4);
    } else {
      const obj5 = {};
      const merged3 = Object.assign(tmp5);
      tmp6Result = React7(View, obj5);
    }
    return tmp6Result;
  }
  obj = initialize;
};