// === Module 16195: useShouldRenderChannelList ===

// Module 16195 (useShouldRenderChannelList)
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1121 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4736 */;
import RootNavigationRef from "RootNavigationRef" /* 4737 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import CacheStore from "CacheStore" /* 6985 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5436 */;

require = fn;
const ComponentActions = fn(1085).ComponentActions;
let c7 = false;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_sidebar/native/useShouldRenderChannelList.tsx");

export const useShouldRenderChannelList = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = first(576).c(3);
  [first, dependencyMap] = noop.useState(c7);
  if (cResult[0] !== first) {
    class R {
      constructor() {
        if (allowRender) {
          return;
        } else {
          allowRender = function allowRender() { ... };
          handleGatewayChange = function handleGatewayChange() { ... };
          handleCacheChange = function handleCacheChange() { ... };
          handleNavigationChange = function handleNavigationChange() { ... };
          tmp = closure_1_5;
          result = closure_1_5.addReactChangeListener(handleGatewayChange);
          tmp3 = closure_1_4;
          result1 = closure_1_4.addReactChangeListener(handleCacheChange);
          tmp5 = closure_0;
          tmp6 = closure_1;
          ComponentDispatch = closure_0(closure_1[9]).ComponentDispatch;
          tmp7 = closure_1_6;
          subscription = ComponentDispatch.subscribe(closure_1_6.BOTTOM_CHANNEL_SCREEN_DRAG_START, allowRender);
          obj = closure_0(closure_1[8]);
          rootNavigationRef = obj.getRootNavigationRef();
          tmp9 = null;
          if (rootNavigationRef != null) {
            str = "state";
            addListenerResult = rootNavigationRef.addListener("state", handleNavigationChange);
          }
          return () => { ... };
        }
      }
    }
    const items = [first];
    cResult[0] = first;
    cResult[1] = R;
    cResult[2] = items;
    let tmp5 = items;
  } else {
    class R {
      constructor() {
        if (allowRender) {
          return;
        } else {
          allowRender = function allowRender() { ... };
          handleGatewayChange = function handleGatewayChange() { ... };
          handleCacheChange = function handleCacheChange() { ... };
          handleNavigationChange = function handleNavigationChange() { ... };
          tmp = closure_1_5;
          result = closure_1_5.addReactChangeListener(handleGatewayChange);
          tmp3 = closure_1_4;
          result1 = closure_1_4.addReactChangeListener(handleCacheChange);
          tmp5 = closure_0;
          tmp6 = closure_1;
          ComponentDispatch = closure_0(closure_1[9]).ComponentDispatch;
          tmp7 = closure_1_6;
          subscription = ComponentDispatch.subscribe(closure_1_6.BOTTOM_CHANNEL_SCREEN_DRAG_START, allowRender);
          obj = closure_0(closure_1[8]);
          rootNavigationRef = obj.getRootNavigationRef();
          tmp9 = null;
          if (rootNavigationRef != null) {
            str = "state";
            addListenerResult = rootNavigationRef.addListener("state", handleNavigationChange);
          }
          return () => { ... };
        }
      }
    }
    tmp5 = cResult[2];
  }
  const effect = noop.useEffect(R, tmp5);
  return first;
}) : (() => {
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
      let rootNavigationRef = first(4737).getRootNavigationRef();
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