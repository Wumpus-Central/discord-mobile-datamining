// discord_app/modules/guild_sidebar/native/useShouldRenderChannelList.tsx
import ComponentDispatchUtils from "../../../utils/ComponentDispatchUtils.tsx";
import RootNavigationRef from "../../main_tabs_v2/RootNavigationRef.native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import CacheStore from "../../cache/CacheStore.tsx";
import GatewayConnectionStore from "../../gateway/GatewayConnectionStore.tsx";

require = fn;
const ComponentActions = fn(1072).ComponentActions;
let c7 = false;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_sidebar/native/useShouldRenderChannelList.tsx");

export function useShouldRenderChannelList() {
  [first, dependencyMap] = noop.useState(c7);
  const items = [first];
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
      const obj = first(5198);
      const rootNavigationRef = first(5199).getRootNavigationRef();
      let currentRoute;
      if (rootNavigationRef != null) {
        currentRoute = rootNavigationRef.getCurrentRoute();
      }
      if (null != obj.coerceGuildsRoute(currentRoute)) {
        c7 = true;
        checkGatewayConnection(true);
      }
      const obj2 = first(5199);
    }
    if (!allowRender) {
      let result = GatewayConnectionStore.addReactChangeListener(checkGatewayConnection);
      let result1 = CacheStore.addReactChangeListener(checkCacheLoadStatus);
      let ComponentDispatch = first(1108).ComponentDispatch;
      const subscription = ComponentDispatch.subscribe(constants.BOTTOM_CHANNEL_SCREEN_DRAG_START, allowRender);
      let rootNavigationRef = first(5199).getRootNavigationRef();
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
