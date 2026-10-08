// === Module 16499: useShouldRenderChannelList ===

// Module 16499 (useShouldRenderChannelList)
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1121 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4936 */;
import RootNavigationRef from "RootNavigationRef" /* 4937 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import CacheStore from "CacheStore" /* 7186 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5753 */;

require = fn;
const ComponentActions = fn(1085).ComponentActions;
let c7 = false;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_sidebar/native/useShouldRenderChannelList.tsx");

export const useShouldRenderChannelList = ReactCompilerGating.isReactCompilerEnabled() ? (function useShouldRenderChannelList() {
  const cResult = first(576).c(3);
  [first, dependencyMap] = noop.useState(c7);
  if (cResult[0] !== first) {
    const fn = function u() {
      if (!allowRender) {
        allowRender = function allowRender() {
          c7 = true;
          handleGatewayChange(true);
        };
        function handleGatewayChange() {
          if (GatewayConnectionStore.isConnected()) {
            if (typeof allowRender === "function") {
              c7 = true;
              handleGatewayChange(true);
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
        }
        function handleCacheChange() {
          if ("cache-loaded" === CacheStore.getLazyCacheStatus()) {
            if (typeof allowRender === "function") {
              c7 = true;
              handleGatewayChange(true);
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
        }
        function handleNavigationChange() {
          const obj = NavigationRouteUtils;
          const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
          let currentRoute;
          if (rootNavigationRef != null) {
            currentRoute = rootNavigationRef.getCurrentRoute();
          }
          if (null != obj.coerceGuildsRoute(currentRoute)) {
            if (typeof allowRender === "function") {
              c7 = true;
              handleGatewayChange(true);
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
        }
        let result = GatewayConnectionStore.addReactChangeListener(handleGatewayChange);
        let result1 = CacheStore.addReactChangeListener(handleCacheChange);
        let ComponentDispatch = first(1121).ComponentDispatch;
        const subscription = ComponentDispatch.subscribe(constants.BOTTOM_CHANNEL_SCREEN_DRAG_START, allowRender);
        let rootNavigationRef = first(4937).getRootNavigationRef();
        if (rootNavigationRef != null) {
          rootNavigationRef.addListener("state", handleNavigationChange);
        }
        return () => {
          const result = GatewayConnectionStore.removeReactChangeListener(handleGatewayChange);
          const result1 = CacheStore.addReactChangeListener(handleCacheChange);
          const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
          ComponentDispatch.unsubscribe(ComponentActions.BOTTOM_CHANNEL_SCREEN_DRAG_START, allowRender);
          const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
          if (rootNavigationRef != null) {
            rootNavigationRef.removeListener("state", handleNavigationChange);
          }
        };
      }
    };
    const items = [first];
    cResult[0] = first;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp5 = items;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const effect = noop.useEffect(tmp4, tmp5);
  return first;
}) : (function useShouldRenderChannelList() {
  [first, dependencyMap] = noop.useState(c7);
  const items = [first];
  const effect = noop.useEffect(() => {
    function allowRender() {
      c7 = true;
      handleGatewayChange(true);
    }
    function handleGatewayChange() {
      if (GatewayConnectionStore.isConnected()) {
        c7 = true;
        handleGatewayChange(true);
      }
    }
    function handleCacheChange() {
      if ("cache-loaded" === CacheStore.getLazyCacheStatus()) {
        c7 = true;
        handleGatewayChange(true);
      }
    }
    function handleNavigationChange() {
      const obj = first(handleGatewayChange[7]);
      const rootNavigationRef = first(handleGatewayChange[8]).getRootNavigationRef();
      let currentRoute;
      if (rootNavigationRef != null) {
        currentRoute = rootNavigationRef.getCurrentRoute();
      }
      if (null != obj.coerceGuildsRoute(currentRoute)) {
        c7 = true;
        handleGatewayChange(true);
      }
      const obj2 = first(handleGatewayChange[8]);
    }
    if (!allowRender) {
      let result = GatewayConnectionStore.addReactChangeListener(handleGatewayChange);
      let result1 = CacheStore.addReactChangeListener(handleCacheChange);
      let ComponentDispatch = first(1121).ComponentDispatch;
      const subscription = ComponentDispatch.subscribe(constants.BOTTOM_CHANNEL_SCREEN_DRAG_START, allowRender);
      let rootNavigationRef = first(4937).getRootNavigationRef();
      if (rootNavigationRef != null) {
        rootNavigationRef.addListener("state", handleNavigationChange);
      }
      return () => {
        const result = GatewayConnectionStore.removeReactChangeListener(handleGatewayChange);
        const result1 = CacheStore.addReactChangeListener(handleCacheChange);
        const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
        ComponentDispatch.unsubscribe(ComponentActions.BOTTOM_CHANNEL_SCREEN_DRAG_START, allowRender);
        const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
        if (rootNavigationRef != null) {
          rootNavigationRef.removeListener("state", handleNavigationChange);
        }
      };
    }
  }, items);
  return first;
});