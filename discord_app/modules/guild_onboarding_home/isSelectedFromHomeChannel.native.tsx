// === Module 10980: isSelectedFromHomeChannel ===

// Module 10980 (isSelectedFromHomeChannel)
import handleConnectionOpenDefault from "handleConnectionOpen" /* 1981 */;
import coerceMainRoute from "coerceMainRoute" /* 4332 */;
import getRootNavigationRef from "getRootNavigationRef" /* 4333 */;
import handlePermissionsChangeDefault from "handlePermissionsChange" /* 6127 */;
import { isGuildHomeChannel } from "set" /* 1394 */;

require = arg1;
handlePermissionsChangeDefault;
handleConnectionOpenDefault;
const result = require("set").fileFinishedImporting("modules/guild_onboarding_home/isSelectedFromHomeChannel.native.tsx");

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
                let tmp5 = index;
                if (null != tmp4) {
                  let tmp6 = require;
                  let tmp7 = dependencyMap;
                  let obj3 = coerceMainRoute;
                  let coerceChannelRouteResult = obj3.coerceChannelRoute(tmp4);
                  if (null != coerceChannelRouteResult) {
                    if (coerceChannelRouteResult.params.channelId === id.id) {
                      let tmp6Result = tmp6(4332);
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