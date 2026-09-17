// === Module 16865: NavTTISurfaceProvider ===

// Module 16865 (NavTTISurfaceProvider)
import NavigationSpanTrackerDefault from "NavigationSpanTracker" /* 16697 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/NavTTISurfaceProvider.tsx");

export const NavTTISurfaceProvider = function NavTTISurfaceProvider(navigationKey) {
  navigationKey = navigationKey.navigationKey;
  const definition = navigationKey.definition;
  const visibilityMode = navigationKey.visibilityMode;
  ({ isVisible, children } = navigationKey);
  const merged = Object.assign(navigationKey, Object.assign({ navigationKey: 0, definition: 0, visibilityMode: 0, isVisible: 0, children: 0 }));
  isVisible = undefined;
  let syncExternalStore;
  const result = navigationKey(visibilityMode[3]).isNavigationTTIEnabled();
  noop = result;
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
  const memo = noop.useMemo(() => ({ definition, navigationKey, activeTraceId: syncExternalStore, visibilityMode, isVisible }), items2);
  const obj2 = { value: memo, children: null };
  const obj3 = {};
  const merged1 = Object.assign(merged);
  obj3.children = children;
  obj2.children = syncExternalStore(isVisible, obj3);
  return syncExternalStore(navigationKey(visibilityMode[5]).NavTTISurfaceContext.Provider, obj2);
};