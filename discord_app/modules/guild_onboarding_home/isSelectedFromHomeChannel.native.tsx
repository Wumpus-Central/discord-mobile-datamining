// === Module 9763: isSelectedFromHomeChannel ===

// Module 9763 (isSelectedFromHomeChannel)
import NavigationRouteUtils from "NavigationRouteUtils" /* 4736 */;
import RootNavigationRef from "RootNavigationRef" /* 4737 */;
import ChannelSectionStore from "ChannelSectionStore" /* 6783 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;

require = fn;
const isGuildHomeChannel = fn(2058).isGuildHomeChannel;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding_home/isSelectedFromHomeChannel.native.tsx");

export default function isSelectedFromHomeChannel(id) {
  let coerceChannelRouteResult1;
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      const rootState = rootNavigationRef.getRootState();
      if (null == rootState) {
        return false;
      } else {
        const coerceMainRouteResult = NavigationRouteUtils.coerceMainRoute(rootState.routes[rootState.index]);
        if (null == coerceMainRouteResult) {
          return false;
        } else {
          state = coerceMainRouteResult.state;
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
              let tmp10 = coerceChannelRouteResult1.params.guildId === id.guild_id;
              if (tmp10) {
                tmp10 = isGuildHomeChannel(coerceChannelRouteResult1.params.channelId);
              }
              return tmp10;
            }
            return false;
          }
        }
        const tmpResult = NavigationRouteUtils;
      }
    }
  }
  return false;
};