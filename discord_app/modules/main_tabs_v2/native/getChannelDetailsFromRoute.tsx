// discord_app/modules/main_tabs_v2/native/getChannelDetailsFromRoute.tsx
import NavigationRouteUtils from "../helpers/NavigationRouteUtils.native.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/main_tabs_v2/native/getChannelDetailsFromRoute.tsx");

export default function getChannelDetailsFromRoute(currentRoute) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const obj = NavigationRouteUtils;
  const coerceChannelRouteResult = obj.coerceChannelRoute(currentRoute);
  if (null != coerceChannelRouteResult) {
    const items = [coerceChannelRouteResult.params.guildId, coerceChannelRouteResult.params.channelId];
    return items;
  } else if (flag) {
    let items2;
    const tmpResult = NavigationRouteUtils;
    const coerceGuildsRouteResult = tmpResult.coerceGuildsRoute(currentRoute);
    if (null != coerceGuildsRouteResult) {
      const params = coerceGuildsRouteResult.params;
      let guildId;
      if (params != null) {
        guildId = params.guildId;
      }
      const items1 = [guildId];
      const params2 = coerceGuildsRouteResult.params;
      let channelId;
      if (params2 != null) {
        channelId = params2.channelId;
      }
      items1[1] = channelId;
      items2 = items1;
    } else {
      items2 = [undefined, undefined];
    }
    return items2;
  } else {
    const items3 = [undefined, undefined];
    return items3;
  }
}
