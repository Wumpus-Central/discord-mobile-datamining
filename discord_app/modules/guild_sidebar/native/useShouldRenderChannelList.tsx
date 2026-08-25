// === Module 15623: useShouldRenderChannelList ===

// Module 15623 (useShouldRenderChannelList)
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "noop" /* 19 */;
import closure_4 from "handleClearCaches" /* 7082 */;
import closure_5 from "_handleConnectionOpen" /* 5102 */;
import { ComponentActions } from "ME" /* 676 */;

const require = arg1;
let c7 = false;
let result = require("set").fileFinishedImporting("modules/guild_sidebar/native/useShouldRenderChannelList.tsx");

export const useShouldRenderChannelList = function useShouldRenderChannelList() {
  const tmp = callback(React.useState(c7), 2);
  const first = tmp[0];
  closure_1 = tmp[1];
  const items = [first];
  const effect = React.useEffect(() => {
    function allowRender(arg0) {
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
    }
    if (!allowRender) {
      let result = closure_1_5.addReactChangeListener(handleGatewayChange);
      let result1 = closure_1_4.addReactChangeListener(handleCacheChange);
      let ComponentDispatch = first(1231).ComponentDispatch;
      const subscription = ComponentDispatch.subscribe(closure_1_6.BOTTOM_CHANNEL_SCREEN_DRAG_START, allowRender);
      let rootNavigationRef = first(4235).getRootNavigationRef();
      if (rootNavigationRef != null) {
        rootNavigationRef.addListener("state", handleNavigationChange);
      }
      return () => {
        const result = closure_2_5.removeReactChangeListener(handleGatewayChange);
        const result1 = closure_2_4.addReactChangeListener(handleCacheChange);
        const ComponentDispatch = first(handleGatewayChange[7]).ComponentDispatch;
        ComponentDispatch.unsubscribe(closure_2_6.BOTTOM_CHANNEL_SCREEN_DRAG_START, allowRender);
        const rootNavigationRef = first(handleGatewayChange[6]).getRootNavigationRef();
        if (rootNavigationRef != null) {
          rootNavigationRef.removeListener("state", handleNavigationChange);
        }
      };
    }
  }, items);
  return first;
};