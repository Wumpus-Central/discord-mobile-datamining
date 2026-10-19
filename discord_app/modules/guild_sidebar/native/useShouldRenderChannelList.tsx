// === Module 17389: useShouldRenderChannelList ===

// Module 17389 (useShouldRenderChannelList)
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1123 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5072 */;
import RootNavigationRef from "RootNavigationRef" /* 5073 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import CacheStore from "CacheStore" /* 7464 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 6013 */;

require = fn;
const ComponentActions = fn(1087).ComponentActions;
let c7 = false;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_sidebar/native/useShouldRenderChannelList.tsx");

export const useShouldRenderChannelList = ReactCompilerGating.isReactCompilerEnabled() ? (function useShouldRenderChannelList() {
  const cResult = first(576).c(3);
  [first, dependencyMap] = noop.useState(c7);
  if (cResult[0] !== first) {
    class R {
      constructor() {
        if (allowRender) {
          return;
        } else {
          allowRender = function allowRender() { ... };
          checkGatewayConnection = function checkGatewayConnection() { ... };
          checkCacheLoadStatus = function checkCacheLoadStatus() { ... };
          checkNavigationState = function checkNavigationState() { ... };
          obj = closure_1_5;
          result = closure_1_5.addReactChangeListener(checkGatewayConnection);
          obj2 = closure_1_4;
          result1 = closure_1_4.addReactChangeListener(checkCacheLoadStatus);
          tmp3 = closure_0;
          tmp4 = closure_1;
          ComponentDispatch = closure_0(closure_1[9]).ComponentDispatch;
          tmp5 = closure_1_6;
          subscription = ComponentDispatch.subscribe(closure_1_6.BOTTOM_CHANNEL_SCREEN_DRAG_START, allowRender);
          obj3 = closure_0(closure_1[8]);
          rootNavigationRef = obj3.getRootNavigationRef();
          tmp7 = null;
          if (rootNavigationRef != null) {
            str = "state";
            addListenerResult = rootNavigationRef.addListener("state", checkNavigationState);
          }
          if (obj.isConnected()) {
            flag = true;
            c7 = true;
            tmp9 = checkGatewayConnection;
            tmp10 = checkGatewayConnection(true);
          }
          str2 = "cache-loaded";
          if ("cache-loaded" === obj2.getLazyCacheStatus()) {
            flag2 = true;
            c7 = true;
            tmp11 = checkGatewayConnection;
            tmp12 = checkGatewayConnection(true);
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
          checkGatewayConnection = function checkGatewayConnection() { ... };
          checkCacheLoadStatus = function checkCacheLoadStatus() { ... };
          checkNavigationState = function checkNavigationState() { ... };
          obj = closure_1_5;
          result = closure_1_5.addReactChangeListener(checkGatewayConnection);
          obj2 = closure_1_4;
          result1 = closure_1_4.addReactChangeListener(checkCacheLoadStatus);
          tmp3 = closure_0;
          tmp4 = closure_1;
          ComponentDispatch = closure_0(closure_1[9]).ComponentDispatch;
          tmp5 = closure_1_6;
          subscription = ComponentDispatch.subscribe(closure_1_6.BOTTOM_CHANNEL_SCREEN_DRAG_START, allowRender);
          obj3 = closure_0(closure_1[8]);
          rootNavigationRef = obj3.getRootNavigationRef();
          tmp7 = null;
          if (rootNavigationRef != null) {
            str = "state";
            addListenerResult = rootNavigationRef.addListener("state", checkNavigationState);
          }
          if (obj.isConnected()) {
            flag = true;
            c7 = true;
            tmp9 = checkGatewayConnection;
            tmp10 = checkGatewayConnection(true);
          }
          str2 = "cache-loaded";
          if ("cache-loaded" === obj2.getLazyCacheStatus()) {
            flag2 = true;
            c7 = true;
            tmp11 = checkGatewayConnection;
            tmp12 = checkGatewayConnection(true);
          }
          return () => { ... };
        }
      }
    }
    tmp5 = cResult[2];
  }
  const effect = noop.useEffect(R, tmp5);
  return first;
}) : (function useShouldRenderChannelList() {
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
      const obj = first(5072);
      const rootNavigationRef = first(5073).getRootNavigationRef();
      let currentRoute;
      if (rootNavigationRef != null) {
        currentRoute = rootNavigationRef.getCurrentRoute();
      }
      if (null != obj.coerceGuildsRoute(currentRoute)) {
        c7 = true;
        checkGatewayConnection(true);
      }
      const obj2 = first(5073);
    }
    if (!allowRender) {
      let result = GatewayConnectionStore.addReactChangeListener(checkGatewayConnection);
      let result1 = CacheStore.addReactChangeListener(checkCacheLoadStatus);
      let ComponentDispatch = first(1123).ComponentDispatch;
      const subscription = ComponentDispatch.subscribe(constants.BOTTOM_CHANNEL_SCREEN_DRAG_START, allowRender);
      let rootNavigationRef = first(5073).getRootNavigationRef();
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
});