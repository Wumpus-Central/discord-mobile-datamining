// discord_app/modules/main_tabs_v2/native/getChannelDetailsFromRoute.tsx
import set from "set" /* 2 */;
import coerceMainRoute from "coerceMainRoute" /* 4229 */;

const result = set.fileFinishedImporting("modules/main_tabs_v2/native/getChannelDetailsFromRoute.tsx");

export default function getChannelDetailsFromRoute(currentRoute) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const coerceChannelRouteResult = coerceMainRoute.coerceChannelRoute(currentRoute);
  if (null != coerceChannelRouteResult) {
    const items = [coerceChannelRouteResult.params.guildId, coerceChannelRouteResult.params.channelId];
    return items;
  } else if (flag) {
    const coerceGuildsRouteResult = coerceMainRoute.coerceGuildsRoute(currentRoute);
    if (null != coerceGuildsRouteResult) {
      const params = coerceGuildsRouteResult.params;
      let guildId;
      if (params != null) {
        guildId = params.guildId;
      }
      const items1 = [guildId, ];
      const params2 = coerceGuildsRouteResult.params;
      let channelId;
      if (params2 != null) {
        channelId = params2.channelId;
      }
      items1[1] = channelId;
      let items2 = items1;
    } else {
      items2 = [undefined, undefined];
    }
    return items2;
  } else {
    const items3 = [undefined, undefined];
    return items3;
  }
  const obj = coerceMainRoute;
  const tmp = require;
};