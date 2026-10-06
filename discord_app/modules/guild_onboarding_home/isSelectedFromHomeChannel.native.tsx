// === Module 9776: isSelectedFromHomeChannel ===

// Module 9776 (isSelectedFromHomeChannel)
import ChannelConstants from "ChannelConstants" /* 2058 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4742 */;
import RootNavigationRef from "RootNavigationRef" /* 4743 */;
import ChannelSectionStore from "ChannelSectionStore" /* 6793 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import size from "module_2" /* 2 */;

const isGuildHomeChannel = ChannelConstants.isGuildHomeChannel;
const result = size.fileFinishedImporting("modules/guild_onboarding_home/isSelectedFromHomeChannel.native.tsx");

export default function isSelectedFromHomeChannel(id) {
  let coerceChannelRouteResult1;
  const obj = RootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      const rootState = rootNavigationRef.getRootState();
      if (null == rootState) {
        return false;
      } else {
        const tmpResult = NavigationRouteUtils;
        const coerceMainRouteResult = tmpResult.coerceMainRoute(rootState.routes[rootState.index]);
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
                  let obj3 = NavigationRouteUtils;
                  let coerceChannelRouteResult = obj3.coerceChannelRoute(tmp4);
                  if (null != coerceChannelRouteResult) {
                    if (coerceChannelRouteResult.params.channelId === id.id) {
                      let tmp6Result = NavigationRouteUtils;
                      coerceChannelRouteResult1 = tmp6Result.coerceChannelRoute(state.routes[index - 1]);
                      if (null != coerceChannelRouteResult1) {
                        break;
                      }
                    }
                  }
                }
                index = index - 1;
              }
              const tmp10 = coerceChannelRouteResult1.params.guildId === id.guild_id && isGuildHomeChannel(coerceChannelRouteResult1.params.channelId);
              return tmp10;
            }
            return false;
          }
        }
      }
    }
  }
  return false;
};