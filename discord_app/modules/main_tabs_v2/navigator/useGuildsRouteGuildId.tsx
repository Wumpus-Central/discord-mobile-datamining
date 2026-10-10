// === Module 16431: useGuildsRouteGuildId ===

// Module 16431 (useGuildsRouteGuildId)
import c from "c" /* 576 */;
import Link from "Link" /* 1504 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
let ReactCompilerGating = ReactCompilerGating_mod;
function useGuildsRouteGuildId() {
  const params = Link.useRoute().params;
  let guildId;
  if (params != null) {
    guildId = params.guildId;
  }
  return guildId;
}
const result1 = size.fileFinishedImporting("modules/main_tabs_v2/navigator/useGuildsRouteGuildId.tsx");

export default useGuildsRouteGuildId;
export const useGuildsRouteGuildAndChannelId = ReactCompilerGating.isReactCompilerEnabled() ? (function useGuildsRouteGuildAndChannelId() {
  const cResult = c.c(3);
  const route = Link.useRoute();
  let guildId;
  if (route != null) {
    const params = route.params;
    if (params != null) {
      guildId = params.guildId;
    }
  }
  let channelId;
  if (route != null) {
    const params2 = route.params;
    if (params2 != null) {
      channelId = params2.channelId;
    }
  }
  if (cResult[0] === guildId) {
    if (cResult[1] === channelId) {
      let tmp5 = cResult[2];
    }
    return tmp5;
  }
  const items = [guildId, channelId];
  cResult[0] = guildId;
  cResult[1] = channelId;
  cResult[2] = items;
  tmp5 = items;
}) : (function useGuildsRouteGuildAndChannelId() {
  const route = Link.useRoute();
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
});