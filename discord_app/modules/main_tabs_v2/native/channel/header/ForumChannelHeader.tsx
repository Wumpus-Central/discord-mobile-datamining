// === Module 13273: ForumChannelHeader ===

// Module 13273 (ForumChannelHeader)
import ForumChannelSearch from "ForumChannelSearch" /* 13257 */;
import useIsForumChannelSearchActive from "useIsForumChannelSearchActive" /* 13274 */;
import GuildChannelHeaderDefault from "GuildChannelHeader" /* 13275 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_5 = createStyles.createStyles({ search: { flex: 1, flexShrink: 1, flexDirection: "row", alignItems: "center", paddingStart: 4, height: fn(7864).MIN_HEADER_HEIGHT } });
let obj = { search: { flex: 1, flexShrink: 1, flexDirection: "row", alignItems: "center", paddingStart: 4, height: fn(7864).MIN_HEADER_HEIGHT } };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/header/ForumChannelHeader.tsx");

export default noop.memo((arg0) => {
  ({ channelId, guildId } = arg0);
  ({ screenIndex, pressable, isGuildMemberCountVisible, isNavigationScreen, searchPlaceholder } = arg0);
  let obj = useIsForumChannelSearchActive;
  if (obj.useIsForumChannelSearchActive(channelId)) {
    obj = { style: tmp.search, children: null };
    obj = { channelId, guildId, placeholder: searchPlaceholder };
    obj.children = jsx(ForumChannelSearch.ForumChannelSearchInput, { channelId, guildId, placeholder: searchPlaceholder });
    let tmp4Result = <View channelId={channelId} guildId={guildId} placeholder={searchPlaceholder} />;
  } else {
    const obj1 = { channelId, guildId, pressable, isGuildMemberCountVisible, isNavigationScreen, screenIndex };
    tmp4Result = jsx(GuildChannelHeaderDefault, { channelId, guildId, pressable, isGuildMemberCountVisible, isNavigationScreen, screenIndex });
  }
  return tmp4Result;
});