// === Module 15234: useShouldRenderChannelList ===

// Module 15234 (useShouldRenderChannelList)
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import handleClearCaches from "handleClearCaches";
import _handleConnectionOpen from "_handleConnectionOpen";
import { ComponentActions } from "ME";

const require = arg1;
let c7 = false;
let result = require("handleClearCaches").fileFinishedImporting("modules/guild_sidebar/native/useShouldRenderChannelList.tsx");

export const useShouldRenderChannelList = function useShouldRenderChannelList() {
  const tmp = callback(React.useState(c7), 2);
  const first = tmp[0];
  let closure_1 = tmp[1];
  const items = [first];
  const effect = React.useEffect(() => {
    function allowRender(arg0) {
      const outer1_7 = true;
      handleGatewayChange(true);
    }
    function handleGatewayChange(arg0) {
      if (outer1_5.isConnected()) {
        const outer1_7 = true;
        handleGatewayChange(true);
      }
    }
    function handleCacheChange() {
      if ("cache-loaded" === outer1_4.getLazyCacheStatus()) {
        const outer1_7 = true;
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
        const outer1_7 = true;
        handleGatewayChange(true);
      }
    }
    if (!allowRender) {
      let result = outer1_5.addReactChangeListener(handleGatewayChange);
      let result1 = outer1_4.addReactChangeListener(handleCacheChange);
      let ComponentDispatch = first(1231).ComponentDispatch;
      const subscription = ComponentDispatch.subscribe(outer1_6.BOTTOM_CHANNEL_SCREEN_DRAG_START, allowRender);
      let rootNavigationRef = first(4107).getRootNavigationRef();
      if (rootNavigationRef != null) {
        rootNavigationRef.addListener("state", handleNavigationChange);
      }
      return () => {
        const result = outer2_5.removeReactChangeListener(handleGatewayChange);
        const result1 = outer2_4.addReactChangeListener(handleCacheChange);
        const ComponentDispatch = first(handleGatewayChange[7]).ComponentDispatch;
        ComponentDispatch.unsubscribe(outer2_6.BOTTOM_CHANNEL_SCREEN_DRAG_START, allowRender);
        const rootNavigationRef = first(handleGatewayChange[6]).getRootNavigationRef();
        if (rootNavigationRef != null) {
          rootNavigationRef.removeListener("state", handleNavigationChange);
        }
      };
    }
  }, items);
  return first;
};