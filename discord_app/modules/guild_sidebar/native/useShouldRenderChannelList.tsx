// discord_app/modules/guild_sidebar/native/useShouldRenderChannelList.tsx
import Constants from "../../../Constants.tsx";
import ComponentDispatchUtils from "../../../utils/ComponentDispatchUtils.tsx";
import NavigationRouteUtils from "../../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import RootNavigationRef from "../../main_tabs_v2/RootNavigationRef.native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import CacheStore from "../../cache/CacheStore.tsx";
import GatewayConnectionStore from "../../gateway/GatewayConnectionStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let addListenerResult, str, tmp10, tmp4, tmp6, tmp7, tmp8;

const ComponentActions = Constants.ComponentActions;
let c7 = false;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let closure_1;
      let first;
      let tmp5;
      let obj = first(576);
      const cResult = obj.c(3);
      [first, dependencyMap] = react.useState(c7);
      if (cResult[0] !== first) {
        class R {
          constructor() {
            tmp = allowRender;
            if (tmp) {
              return;
            } else {
              allowRender = function allowRender() {
                /* body not rendered: F145610 */
              };
              handleGatewayChange = function handleGatewayChange() {
                /* body not rendered: F145611 */
              };
              handleCacheChange = function handleCacheChange() {
                /* body not rendered: F145612 */
              };
              handleNavigationChange = function handleNavigationChange() {
                /* body not rendered: F145613 */
              };
              tmp2 = closure_1_5;
              result = closure_1_5.addReactChangeListener(handleGatewayChange);
              tmp4 = closure_1_4;
              result1 = closure_1_4.addReactChangeListener(handleCacheChange);
              tmp6 = closure_0;
              tmp7 = closure_1;
              ComponentDispatch = closure_0(closure_1[9]).ComponentDispatch;
              tmp8 = closure_1_6;
              subscription = ComponentDispatch.subscribe(closure_1_6.BOTTOM_CHANNEL_SCREEN_DRAG_START, allowRender);
              obj = closure_0(closure_1[8]);
              rootNavigationRef = obj.getRootNavigationRef();
              tmp10 = null;
              if (rootNavigationRef != null) {
                str = "state";
                addListenerResult = rootNavigationRef.addListener("state", handleNavigationChange);
              }
              return () => {
                /* body not rendered: F145614 */
              };
            }
          }
        }
        const items = [first];
        cResult[0] = first;
        cResult[1] = R;
        cResult[2] = items;
        tmp5 = items;
      } else {
        class R {
          constructor() {
            tmp = allowRender;
            if (tmp) {
              return;
            } else {
              allowRender = function allowRender() {
                /* body not rendered: F145610 */
              };
              handleGatewayChange = function handleGatewayChange() {
                /* body not rendered: F145611 */
              };
              handleCacheChange = function handleCacheChange() {
                /* body not rendered: F145612 */
              };
              handleNavigationChange = function handleNavigationChange() {
                /* body not rendered: F145613 */
              };
              tmp2 = closure_1_5;
              result = closure_1_5.addReactChangeListener(handleGatewayChange);
              tmp4 = closure_1_4;
              result1 = closure_1_4.addReactChangeListener(handleCacheChange);
              tmp6 = closure_0;
              tmp7 = closure_1;
              ComponentDispatch = closure_0(closure_1[9]).ComponentDispatch;
              tmp8 = closure_1_6;
              subscription = ComponentDispatch.subscribe(closure_1_6.BOTTOM_CHANNEL_SCREEN_DRAG_START, allowRender);
              obj = closure_0(closure_1[8]);
              rootNavigationRef = obj.getRootNavigationRef();
              tmp10 = null;
              if (rootNavigationRef != null) {
                str = "state";
                addListenerResult = rootNavigationRef.addListener("state", handleNavigationChange);
              }
              return () => {
                /* body not rendered: F145614 */
              };
            }
          }
        }
        tmp5 = cResult[2];
      }
      const effect = react.useEffect(R, tmp5);
      return first;
    }
  : () => {
      let closure_1;
      let first;
      [first, closure_1] = react.useState(c7);
      const items = [first];
      const effect = react.useEffect(() => {
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
          const coerceGuildsRoute = first(handleGatewayChange[7]).coerceGuildsRoute;
          first(handleGatewayChange[7]);
          const obj = first(handleGatewayChange[8]);
          const rootNavigationRef = obj.getRootNavigationRef();
          let currentRoute;
          if (rootNavigationRef != null) {
            currentRoute = rootNavigationRef.getCurrentRoute();
          }
          if (null != coerceGuildsRoute(currentRoute)) {
            c7 = true;
            handleGatewayChange(true);
          }
        }
        const tmp = allowRender;
        if (!tmp) {
          let result = GatewayConnectionStore.addReactChangeListener(handleGatewayChange);
          let result1 = CacheStore.addReactChangeListener(handleCacheChange);
          let ComponentDispatch = first(handleGatewayChange[9]).ComponentDispatch;
          const subscription = ComponentDispatch.subscribe(constants.BOTTOM_CHANNEL_SCREEN_DRAG_START, allowRender);
          let obj = first(handleGatewayChange[8]);
          let rootNavigationRef = obj.getRootNavigationRef();
          if (rootNavigationRef != null) {
            rootNavigationRef.addListener("state", handleNavigationChange);
          }
          return () => {
            const result = GatewayConnectionStore.removeReactChangeListener(handleGatewayChange);
            const result1 = CacheStore.addReactChangeListener(handleCacheChange);
            const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
            ComponentDispatch.unsubscribe(ComponentActions.BOTTOM_CHANNEL_SCREEN_DRAG_START, allowRender);
            const obj = RootNavigationRef;
            const rootNavigationRef = obj.getRootNavigationRef();
            if (rootNavigationRef != null) {
              rootNavigationRef.removeListener("state", handleNavigationChange);
            }
          };
        }
      }, items);
      return first;
    };
let result = size.fileFinishedImporting("modules/guild_sidebar/native/useShouldRenderChannelList.tsx");

export const useShouldRenderChannelList = tmp2;
