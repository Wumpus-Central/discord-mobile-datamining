// discord_app/modules/main_tabs_v2/navigator/useGuildsRouteGuildId.tsx
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/navigator/useGuildsRouteGuildId.tsx");

export default function useGuildsRouteGuildId() {
  const params = require("../../../../_runtime/01481_Link.js") /* Link */.useRoute().params;
  let guildId;
  if (params != null) {
    guildId = params.guildId;
  }
  return guildId;
};
export const useGuildsRouteGuildAndChannelId = function useGuildsRouteGuildAndChannelId() {
  const route = require("../../../../_runtime/01481_Link.js") /* Link */.useRoute();
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