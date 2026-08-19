// discord_app/modules/main_tabs_v2/navigator/useGuildsRouteGuildId.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import createStandardNavigationFactories from "../../../../_runtime/01501_createStandardNavigationFactories.js";

const result = obj132.fileFinishedImporting("modules/main_tabs_v2/navigator/useGuildsRouteGuildId.tsx");

export default function useGuildsRouteGuildId() {
  const params = createStandardNavigationFactories.useRoute().params;
  let guildId;
  if (params != null) {
    guildId = params.guildId;
  }
  return guildId;
};
export const useGuildsRouteGuildAndChannelId = function useGuildsRouteGuildAndChannelId() {
  const route = createStandardNavigationFactories.useRoute();
  let guildId;
  if (route != null) {
    const params = route.params;
    if (params != null) {
      guildId = params.guildId;
    }
  }
  const items = [guildId, ];
  let channelId;
  if (route != null) {
    const params2 = route.params;
    if (params2 != null) {
      channelId = params2.channelId;
    }
  }
  items[1] = channelId;
  return items;
};