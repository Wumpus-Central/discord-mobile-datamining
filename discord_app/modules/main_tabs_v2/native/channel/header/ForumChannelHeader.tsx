// === Module 13681: ForumChannelHeader ===

// Module 13681 (ForumChannelHeader)
import ForumChannelSearch from "ForumChannelSearch" /* 13664 */;
import GuildChannelHeaderDefault from "GuildChannelHeader" /* 13683 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4829);
let closure_5 = createStyles.createStyles({ search: { flex: 1, flexShrink: 1, flexDirection: "row", alignItems: "center", paddingStart: 4, height: fn(8195).MIN_HEADER_HEIGHT } });
const obj = { search: { flex: 1, flexShrink: 1, flexDirection: "row", alignItems: "center", paddingStart: 4, height: fn(8195).MIN_HEADER_HEIGHT } };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/header/ForumChannelHeader.tsx");

export default noop.memo((arg0) => {
  ({ channelId, guildId } = arg0);
  ({ screenIndex, pressable, isGuildMemberCountVisible, isNavigationScreen, searchPlaceholder } = arg0);
  const tmp = closure_5();
  if (obj.useIsForumChannelSearchActive(channelId)) {
    const obj2 = { style: tmp.search, children: null };
    const obj3 = { channelId, guildId, placeholder: searchPlaceholder };
    obj2.children = jsx(ForumChannelSearch.ForumChannelSearchInput, { channelId, guildId, placeholder: searchPlaceholder });
    let tmp4Result = <View style={tmp.search}>{null}</View>;
  } else {
    const obj4 = { channelId, guildId, pressable, isGuildMemberCountVisible, isNavigationScreen, screenIndex };
    tmp4Result = jsx(GuildChannelHeaderDefault, { channelId, guildId, pressable, isGuildMemberCountVisible, isNavigationScreen, screenIndex });
  }
  return tmp4Result;
});