// === Module 10549: isSelectedFromHomeChannel ===

// Module 10549 (isSelectedFromHomeChannel)
import handleConnectionOpenDefault from "handleConnectionOpen" /* 1979 */;
import coerceMainRoute from "coerceMainRoute" /* 4229 */;
import getRootNavigationRef from "getRootNavigationRef" /* 4230 */;
import handlePermissionsChangeDefault from "handlePermissionsChange" /* 4970 */;
import { isGuildHomeChannel } from "set" /* 1398 */;

require = fn;
handlePermissionsChangeDefault;
handleConnectionOpenDefault;
const result = require("obj132").fileFinishedImporting("modules/guild_onboarding_home/isSelectedFromHomeChannel.native.tsx");

export default function isSelectedFromHomeChannel(id) {
  let coerceChannelRouteResult1;
  const rootNavigationRef = getRootNavigationRef.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      const rootState = rootNavigationRef.getRootState();
      if (null == rootState) {
        return false;
      } else {
        const coerceMainRouteResult = coerceMainRoute.coerceMainRoute(rootState.routes[rootState.index]);
        if (null == coerceMainRouteResult) {
          return false;
        } else {
          const state = coerceMainRouteResult.state;
          if (null == state) {
            return false;
          } else {
            let index = state.index;
            if (index >= 0) {
              while (true) {
                let tmp4 = state.routes[index];
                if (null != tmp4) {
                  let obj3 = coerceMainRoute;
                  let coerceChannelRouteResult = obj3.coerceChannelRoute(tmp4);
                  if (null != coerceChannelRouteResult) {
                    if (coerceChannelRouteResult.params.channelId === id.id) {
                      let tmp6Result = coerceMainRoute;
                      coerceChannelRouteResult1 = tmp6Result.coerceChannelRoute(state.routes[index - 1]);
                      if (null != coerceChannelRouteResult1) {
                        break;
                      }
                    }
                  }
                }
                index = index - 1;
              }
              let tmp10 = coerceChannelRouteResult1.params.guildId === id.guild_id;
              if (tmp10) {
                tmp10 = isGuildHomeChannel(coerceChannelRouteResult1.params.channelId);
              }
              return tmp10;
            }
            return false;
          }
        }
        const tmpResult = coerceMainRoute;
      }
    }
  }
  return false;
};