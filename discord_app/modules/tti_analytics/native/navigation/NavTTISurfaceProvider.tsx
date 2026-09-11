// discord_app/modules/tti_analytics/native/navigation/NavTTISurfaceProvider.tsx
import NavigationSpanTrackerDefault from "NavigationSpanTracker.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/NavTTISurfaceProvider.tsx");

export const NavTTISurfaceProvider = function NavTTISurfaceProvider(navigationKey) {
  navigationKey = navigationKey.navigationKey;
  const definition = navigationKey.definition;
  const merged = Object.assign(navigationKey, Object.assign({ navigationKey: 0, definition: 0, children: 0 }));
  let syncExternalStore;
  let obj = navigationKey(16609);
  const result = obj.isNavigationTTIEnabled();
  dependencyMap = result;
  const items = [definition, result, navigationKey];
  const items1 = [definition, result, navigationKey];
  const callback = syncExternalStore.useCallback((arg0) => {
    if (c2) {
      let fn = NavigationSpanTrackerDefault.subscribe(definition, navigationKey, arg0);
    } else {
      fn = () => {};
    }
    return fn;
  }, items);
  const callback1 = syncExternalStore.useCallback(() => {
    let activeTraceId = null;
    if (c2) {
      activeTraceId = NavigationSpanTrackerDefault.getActiveTraceId(definition, navigationKey);
    }
    return activeTraceId;
  }, items1);
  syncExternalStore = syncExternalStore.useSyncExternalStore(callback, callback1, callback1);
  const items2 = [syncExternalStore, definition, navigationKey];
  const memo = syncExternalStore.useMemo(
    () => ({ definition, navigationKey, activeTraceId: syncExternalStore }),
    items2,
  );
  obj = { value: memo, children: null };
  obj = {};
  const merged1 = Object.assign(merged);
  obj.children = navigationKey.children;
  obj.children = <View />;
  return jsx(navigationKey(16608).NavTTISurfaceContext.Provider, {});
};
