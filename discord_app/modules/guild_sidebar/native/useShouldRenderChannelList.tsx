// === Module 17931: useShouldRenderChannelList ===

// Module 17931 (useShouldRenderChannelList)
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1107 */;
import RootNavigationRef from "RootNavigationRef" /* 5189 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import CacheStore from "CacheStore" /* 8208 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5818 */;

require = fn;
const ComponentActions = fn(1071).ComponentActions;
let c7 = false;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_sidebar/native/useShouldRenderChannelList.tsx");

export function useShouldRenderChannelList() {
  [first, dependencyMap] = noop.useState(c7);
  items = [first];
  const effect = noop.useEffect(() => {
    function allowRender() {
      c7 = true;
      checkGatewayConnection(true);
    }
    function checkGatewayConnection() {
      if (GatewayConnectionStore.isConnected()) {
        c7 = true;
        checkGatewayConnection(true);
      }
    }
    function checkCacheLoadStatus() {
      if ("cache-loaded" === CacheStore.getLazyCacheStatus()) {
        c7 = true;
        checkGatewayConnection(true);
      }
    }
    function checkNavigationState() {
      const obj = first(5188);
      const rootNavigationRef = first(5189).getRootNavigationRef();
      let currentRoute;
      if (rootNavigationRef != null) {
        currentRoute = rootNavigationRef.getCurrentRoute();
      }
      if (null != obj.coerceGuildsRoute(currentRoute)) {
        c7 = true;
        checkGatewayConnection(true);
      }
      const obj2 = first(5189);
    }
    if (!allowRender) {
      let result = GatewayConnectionStore.addReactChangeListener(checkGatewayConnection);
      let result1 = CacheStore.addReactChangeListener(checkCacheLoadStatus);
      let ComponentDispatch = first(1107).ComponentDispatch;
      const subscription = ComponentDispatch.subscribe(constants.BOTTOM_CHANNEL_SCREEN_DRAG_START, allowRender);
      let rootNavigationRef = first(5189).getRootNavigationRef();
      if (rootNavigationRef != null) {
        rootNavigationRef.addListener("state", checkNavigationState);
      }
      if (GatewayConnectionStore.isConnected()) {
        c7 = true;
        checkGatewayConnection(true);
      }
      if ("cache-loaded" === CacheStore.getLazyCacheStatus()) {
        c7 = true;
        checkGatewayConnection(true);
      }
      return () => {
        const result = GatewayConnectionStore.removeReactChangeListener(checkGatewayConnection);
        const result1 = CacheStore.removeReactChangeListener(checkCacheLoadStatus);
        const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
        ComponentDispatch.unsubscribe(ComponentActions.BOTTOM_CHANNEL_SCREEN_DRAG_START, allowRender);
        const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
        if (rootNavigationRef != null) {
          rootNavigationRef.removeListener("state", checkNavigationState);
        }
      };
    }
  }, items);
  return first;
}