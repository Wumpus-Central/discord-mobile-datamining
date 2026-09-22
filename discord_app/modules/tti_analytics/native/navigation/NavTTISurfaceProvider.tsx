// === Module 17104: NavTTISurfaceProvider ===

// Module 17104 (NavTTISurfaceProvider)
import useComponentRenderSpan from "useComponentRenderSpan" /* 16886 */;
import NavigationSpanTrackerDefault from "NavigationSpanTracker" /* 16889 */;
import NavigationTTIRegionHierarchy from "NavigationTTIRegionHierarchy" /* 16892 */;
import NavigationTTIRegionDebugOverlay from "NavigationTTIRegionDebugOverlay" /* 16893 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import DevSettingsStore from "DevSettingsStore" /* 4756 */;

require = fn;
function NavTTISurfaceView(onLayout) {
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
  return React6(View, obj);
}
function VisualizedNavTTISurfaceView(arg0) {
  ({ name, descendantTracking, viewProps } = arg0);
  const children = viewProps.children;
  const tmp = _objectWithoutProperties(viewProps, closure_3);
  const obj2 = { name, tracking: "exclude", descendantTracking, hasChildren: null };
  const Children = noop.Children;
  obj2.hasChildren = Children.count(children) > 0;
  const navigationTTIRegionHierarchy = NavigationTTIRegionHierarchy.useNavigationTTIRegionHierarchy(obj2);
  const obj4 = {};
  const navigationTTIRegionMeasurement = useComponentRenderSpan.useNavigationTTIRegionMeasurement("exclude", navigationTTIRegionHierarchy.regionId);
  const merged = Object.assign(tmp);
  obj4.measurementProps = navigationTTIRegionMeasurement;
  const items = [React6(NavigationTTIRegionHierarchy.NavigationTTIRegionHierarchyContext.Provider, { value: navigationTTIRegionHierarchy.contextValue, children }), React6(NavigationTTIRegionDebugOverlay.NavigationTTIRegionDebugOverlay, { name, regionId: navigationTTIRegionHierarchy.regionId, tracking: "exclude", descendantTracking, includedDescendants: navigationTTIRegionHierarchy.includedDescendants, excludedDescendants: navigationTTIRegionHierarchy.excludedDescendants, hierarchyDepth: navigationTTIRegionHierarchy.depth, violation: navigationTTIRegionHierarchy.violation })];
  obj4.children = items;
  return React7(NavTTISurfaceView, obj4);
}
let closure_3 = ["children"];
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/NavTTISurfaceProvider.tsx");

export const NavTTISurfaceProvider = function NavTTISurfaceProvider(navigationKey) {
  navigationKey = navigationKey.navigationKey;
  const definition = navigationKey.definition;
  const visibilityMode = navigationKey.visibilityMode;
  ({ name, descendantTracking, isVisible } = navigationKey);
  const merged = Object.assign(navigationKey, Object.assign({ name: 0, navigationKey: 0, definition: 0, descendantTracking: 0, visibilityMode: 0, isVisible: 0 }));
  isVisible = undefined;
  let syncExternalStore;
  const result = navigationKey(visibilityMode[8]).isNavigationTTIEnabled();
  c3 = result;
  let tmp5 = "immediate" === visibilityMode;
  if (!tmp5) {
    tmp5 = true === isVisible;
  }
  isVisible = tmp5;
  const items = [definition, result, navigationKey];
  const items1 = [definition, result, navigationKey];
  const callback = syncExternalStore.useCallback((arg0) => {
    if (c3) {
      let fn = NavigationSpanTrackerDefault.subscribe(definition, navigationKey, arg0);
    } else {
      fn = () => {

      };
    }
    return fn;
  }, items);
  const callback1 = syncExternalStore.useCallback(() => {
    let activeTraceId = null;
    if (c3) {
      activeTraceId = NavigationSpanTrackerDefault.getActiveTraceId(definition, navigationKey);
    }
    return activeTraceId;
  }, items1);
  syncExternalStore = syncExternalStore.useSyncExternalStore(callback, callback1, callback1);
  const items2 = [syncExternalStore, definition, tmp5, navigationKey, visibilityMode];
  value = syncExternalStore.useMemo(() => ({ definition, navigationKey, activeTraceId: syncExternalStore, visibilityMode, isVisible }), items2);
  let obj = navigationKey(visibilityMode[8]);
  const items3 = [DevSettingsStore];
  if (tmp2Result.useStateFromStores(items3, () => DevSettingsStore.get("navigation_tti_visualizer"))) {
    const obj2 = { name, descendantTracking, viewProps: merged };
    let children = closure_8(VisualizedNavTTISurfaceView, obj2);
    let tmp16 = closure_8;
  } else {
    const obj3 = {};
    const merged1 = Object.assign(merged);
    obj3.measurementProps = {};
    children = closure_8(NavTTISurfaceView, obj3);
    tmp16 = closure_8;
  }
  return tmp16(navigationKey(visibilityMode[11]).NavTTISurfaceContext.Provider, { value, children });
};