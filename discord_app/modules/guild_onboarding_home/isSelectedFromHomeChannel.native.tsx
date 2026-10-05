// discord_app/modules/guild_onboarding_home/isSelectedFromHomeChannel.native.tsx
import ChannelConstants from "../channel/ChannelConstants.tsx";
import NavigationRouteUtils from "../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import RootNavigationRef from "../main_tabs_v2/RootNavigationRef.native.tsx";
import ChannelSectionStore from "../../stores/ChannelSectionStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
              const tmp10 =
                coerceChannelRouteResult1.params.guildId === id.guild_id &&
                isGuildHomeChannel(coerceChannelRouteResult1.params.channelId);
              return tmp10;
            }
            return false;
          }
        }
      }
    }
  }
  return false;
}
