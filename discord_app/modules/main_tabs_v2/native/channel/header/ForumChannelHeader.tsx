// discord_app/modules/main_tabs_v2/native/channel/header/ForumChannelHeader.tsx
import ForumChannelCloseSearchButton from "../../../../forums/native/ForumChannelSearch.tsx";
import useIsForumChannelSearchActive from "../../../../forums/native/hooks/useIsForumChannelSearchActive.tsx";
import GuildChannelMemberCountDefault from "GuildChannelHeader.tsx";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";
import importAllResult from "../../../../../../_runtime/00019_noop.js";

require = fn;
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
    obj[1] = jsx(ForumChannelCloseSearchButton.ForumChannelSearchInput, { channelId: null, guildId: null, placeholder: null });
    let tmp4Result = <View channelId={null} guildId={null} placeholder={null} />;
  } else {
    obj1 = { channelId: null, guildId: null, pressable: null, isGuildMemberCountVisible: null, isNavigationScreen: null, screenIndex: null };
    obj1[0] = channelId;
    obj1[1] = guildId;
    obj1[2] = pressable;
    obj1[3] = isGuildMemberCountVisible;
    obj1[4] = isNavigationScreen;
    obj1[5] = screenIndex;
    tmp4Result = jsx(GuildChannelMemberCountDefault, { channelId: null, guildId: null, pressable: null, isGuildMemberCountVisible: null, isNavigationScreen: null, screenIndex: null });
  }
  return tmp4Result;
});
const result = require("obj132").fileFinishedImporting("modules/main_tabs_v2/native/channel/header/ForumChannelHeader.tsx");

export default memoResult;