// === Module 13158: ? ===

// Module 13158
import ForumChannelCloseSearchButton from "ForumChannelCloseSearchButton" /* 13145 */;
import useIsForumChannelSearchActive from "useIsForumChannelSearchActive" /* 13159 */;
import GuildChannelMemberCountDefault from "GuildChannelMemberCount" /* 13160 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
let closure_5 = createCacheKey.createStyles({ search: { flex: 1, flexShrink: 1, flexDirection: "row", alignItems: "center", paddingStart: 4, height: require("MIN_HEADER_HEIGHT").MIN_HEADER_HEIGHT } });
const memoResult = importAllResult.memo((arg0) => {
  ({ channelId, guildId } = arg0);
  ({ screenIndex, pressable, isGuildMemberCountVisible, isNavigationScreen, searchPlaceholder } = arg0);
  let obj = useIsForumChannelSearchActive;
  if (obj.useIsForumChannelSearchActive(channelId)) {
    obj = { style: null, children: null };
    obj[0] = tmp.search;
    obj = { channelId: null, guildId: null, placeholder: null };
    obj[0] = channelId;
    obj[1] = guildId;
    obj[2] = searchPlaceholder;
    obj[1] = tmp4(ForumChannelCloseSearchButton.ForumChannelSearchInput, obj);
    let tmp4Result = tmp4(View, obj);
  } else {
    obj1 = { channelId: null, guildId: null, pressable: null, isGuildMemberCountVisible: null, isNavigationScreen: null, screenIndex: null };
    obj1[0] = channelId;
    obj1[1] = guildId;
    obj1[2] = pressable;
    obj1[3] = isGuildMemberCountVisible;
    obj1[4] = isNavigationScreen;
    obj1[5] = screenIndex;
    tmp4Result = tmp4(GuildChannelMemberCountDefault, obj1);
  }
  return tmp4Result;
});
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/channel/header/ForumChannelHeader.tsx");

export default memoResult;