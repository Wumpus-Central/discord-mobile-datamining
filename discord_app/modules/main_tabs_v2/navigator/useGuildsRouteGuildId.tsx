// === Module 15946: useGuildsRouteGuildId ===

// Module 15946 (useGuildsRouteGuildId)
import react from "react" /* 576 */;
import Link from "Link" /* 1491 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
const fn = () => {
  const obj = Link;
  const params = obj.useRoute().params;
  let guildId;
  if (params != null) {
    guildId = params.guildId;
  }
  return guildId;
};
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const obj = react;
  const cResult = obj.c(3);
  const obj2 = Link;
  const route = obj2.useRoute();
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
    let tmp5;
    if (cResult[1] === channelId) {
      tmp5 = cResult[2];
    }
    return tmp5;
  }
  const items = [guildId, channelId];
  cResult[0] = guildId;
  cResult[1] = channelId;
  cResult[2] = items;
  tmp5 = items;
}) : (() => {
  const obj = Link;
  const route = obj.useRoute();
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
const result1 = size.fileFinishedImporting("modules/main_tabs_v2/navigator/useGuildsRouteGuildId.tsx");

export default fn;
export const useGuildsRouteGuildAndChannelId = tmp3;