// discord_app/modules/guild_sidebar/native/useShouldRenderChannelList.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../_runtime/00019_noop.js";
import handleClearCaches from "../../cache/CacheStore.tsx";
import _handleConnectionOpen from "../../gateway/GatewayConnectionStore.tsx";
import { ComponentActions } from "../../../Constants.tsx";

const require = fn;
let c7 = false;
let result = require("obj132").fileFinishedImporting("modules/guild_sidebar/native/useShouldRenderChannelList.tsx");

export const useShouldRenderChannelList = function useShouldRenderChannelList() {
  const tmp = callback(React.useState(c7), 2);
  const first = tmp[0];
  closure_1 = tmp[1];
  const items = [first];
  const effect = React.useEffect(() => {
    function allowRender(handleGatewayChange) {
      c7 = true;
      handleGatewayChange(true);
    }
    function handleGatewayChange(arg0) {
      if (closure_1_5.isConnected()) {
        c7 = true;
        handleGatewayChange(true);
      }
    }
    function handleCacheChange() {
      if ("cache-loaded" === closure_1_4.getLazyCacheStatus()) {
        c7 = true;
        handleGatewayChange(true);
      }
    }
    function handleNavigationChange() {
      const obj = allowRender(handleGatewayChange[5]);
      const rootNavigationRef = allowRender(handleGatewayChange[6]).getRootNavigationRef();
      let currentRoute;
      if (rootNavigationRef != null) {
        currentRoute = rootNavigationRef.getCurrentRoute();
      }
      if (null != obj.coerceGuildsRoute(currentRoute)) {
        c7 = true;
        handleGatewayChange(true);
      }
      const obj2 = allowRender(handleGatewayChange[6]);
    }
    if (!allowRender) {
      let result = closure_1_5.addReactChangeListener(handleGatewayChange);
      let result1 = closure_1_4.addReactChangeListener(handleCacheChange);
      let ComponentDispatch = first(1231).ComponentDispatch;
      const subscription = ComponentDispatch.subscribe(ComponentActions.BOTTOM_CHANNEL_SCREEN_DRAG_START, allowRender);
      let rootNavigationRef = first(4230).getRootNavigationRef();
      if (rootNavigationRef != null) {
        rootNavigationRef.addListener("state", handleNavigationChange);
      }
      return () => {
        const result = closure_2_5.removeReactChangeListener(handleGatewayChange);
        const result1 = closure_2_4.addReactChangeListener(handleCacheChange);
        const ComponentDispatch = first(handleGatewayChange[7]).ComponentDispatch;
        ComponentDispatch.unsubscribe(ComponentActions.BOTTOM_CHANNEL_SCREEN_DRAG_START, allowRender);
        const rootNavigationRef = first(handleGatewayChange[6]).getRootNavigationRef();
        if (rootNavigationRef != null) {
          rootNavigationRef.removeListener("state", handleNavigationChange);
        }
        const obj = first(handleGatewayChange[6]);
      };
    }
  }, items);
  return first;
};