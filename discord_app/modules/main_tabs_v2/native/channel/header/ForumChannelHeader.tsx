import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

const require = arg1;
let closure_5 = createCacheKey.createStyles({ search: { flex: 1, flexShrink: 1, flexDirection: "row", alignItems: "center", paddingStart: 4, height: require("MIN_HEADER_HEIGHT").MIN_HEADER_HEIGHT } });
const memoResult = require("noop").memo((arg0) => {
  let channelId;
  let guildId;
  let isGuildMemberCountVisible;
  let isNavigationScreen;
  let pressable;
  let screenIndex;
  let searchPlaceholder;
  ({ channelId, guildId } = arg0);
  ({ screenIndex, pressable, isGuildMemberCountVisible, isNavigationScreen, searchPlaceholder } = arg0);
  let obj = require(10300) /* useIsForumChannelSearchActive */;
  if (obj.useIsForumChannelSearchActive(channelId)) {
    obj = { style: null, children: null };
    obj[0] = tmp.search;
    obj = { channelId: null, guildId: null, placeholder: null };
    obj[0] = channelId;
    obj[1] = guildId;
    obj[2] = searchPlaceholder;
    obj[1] = tmp4(require(10278) /* ForumChannelCloseSearchButton */.ForumChannelSearchInput, obj);
    let tmp4Result = tmp4(View, obj);
  } else {
    const obj1 = { channelId: null, guildId: null, pressable: null, isGuildMemberCountVisible: null, isNavigationScreen: null, screenIndex: null };
    obj1[0] = channelId;
    obj1[1] = guildId;
    obj1[2] = pressable;
    obj1[3] = isGuildMemberCountVisible;
    obj1[4] = isNavigationScreen;
    obj1[5] = screenIndex;
    tmp4Result = tmp4(importDefault(10301), obj1);
  }
  return tmp4Result;
});
const result = require("MIN_HEADER_HEIGHT").fileFinishedImporting("modules/main_tabs_v2/native/channel/header/ForumChannelHeader.tsx");

export default memoResult;