// discord_app/modules/search/native/components/tabs/SearchTabsPage.tsx
import _modDef38 from "../../../../../../_runtime/metro/00038__.js";
import useStateFromSharedValueDefault from "../../../../reanimated/native/useStateFromSharedValue.tsx";
import GuildNSFWDefault from "../../../../../components_native/warnings/GuildNSFW.tsx";
import ChannelSpoilerDefault from "../../../../spoiler_channels/native/ChannelSpoiler.tsx";
import RecentScreenDefault from "pages/RecentScreen.tsx";
import PeopleScreenDefault from "pages/PeopleScreen.tsx";
import MembersScreenDefault from "pages/MembersScreen.tsx";
import ChannelsScreenDefault from "pages/ChannelsScreen.tsx";
import MediaScreenDefault from "pages/messages/MediaScreen.tsx";
import FilesScreenDefault from "pages/messages/FilesScreen.tsx";
import LinksScreenDefault from "pages/messages/LinksScreen.tsx";
import MessagesScreenDefault from "pages/messages/MessagesScreen.tsx";
import messages_PinsScreenDefault from "pages/messages/PinsScreen.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";

const require = fn;
function SearchTabsPage(selectMediaTab) {
  ({ tab, searchContext } = selectMediaTab);
  ({ isFocused, width } = selectMediaTab);
  importDefault = undefined;
  [tmp2, c1] = _slicedToArray(noop.useState(isFocused), 2);
  const effect = noop.useEffect(() => {
    const timerId = setTimeout(() => {
      closure_1_1(true);
    }, 10);
  }, []);
  let obj = searchContext(504);
  const items = [ChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    if (searchContext.type === SearchTypes.GUILD_CHANNEL) {
      const channelId = tmp2.channelId;
    }
    return ChannelStore.getChannel(channelId);
  });
  let obj1 = searchContext(7329);
  const isChannelSpoilerGated = obj1.useIsChannelSpoilerGated(stateFromStores);
  searchContext(4771);
  if (tmp2) {
    if (tab !== SearchTabs.MEMBERS) {
      if (searchContext.type === SearchTypes.GUILD_CHANNEL) {
        if (tmp9) {
          obj = { guildId: null, channelId: null };
          ({ guildId: obj14.guildId, channelId: obj14.channelId } = searchContext);
          return jsx(GuildNSFWDefault, { guildId: null, channelId: null });
        } else if (isChannelSpoilerGated) {
          obj = { guildId: null, channelId: null };
          ({ guildId: obj13.guildId, channelId: obj13.channelId } = searchContext);
          return jsx(ChannelSpoilerDefault, { guildId: null, channelId: null });
        }
      }
    }
    if (SearchTabs.RECENT === tab) {
      obj1 = { onJumpToMedia: selectMediaTab.selectMediaTab, searchContext, width };
      return jsx(RecentScreenDefault, { onJumpToMedia: selectMediaTab.selectMediaTab, searchContext, width });
    } else if (tmp11.PEOPLE === tab) {
      const obj2 = { searchContext };
      return jsx(PeopleScreenDefault, { searchContext });
    } else if (tmp11.MEMBERS === tab) {
      const obj3 = { searchContext };
      return jsx(MembersScreenDefault, { searchContext });
    } else if (tmp11.GUILD_CHANNELS === tab) {
      const obj4 = { searchContext };
      return jsx(ChannelsScreenDefault, { searchContext });
    } else if (tmp11.MEDIA === tab) {
      const obj5 = { tab, searchContext, isFocused, width };
      return jsx(MediaScreenDefault, { tab, searchContext, isFocused, width });
    } else if (tmp11.FILES === tab) {
      const obj6 = { tab, searchContext, isFocused, width };
      return jsx(FilesScreenDefault, { tab, searchContext, isFocused, width });
    } else if (tmp11.LINKS === tab) {
      const obj7 = { tab, searchContext, isFocused, width };
      return jsx(LinksScreenDefault, { tab, searchContext, isFocused, width });
    } else if (tmp11.THREADS === tab) {
      const obj8 = { searchContext };
      return jsx(tmp4(16703).SearchTabsThreadScreen, { searchContext });
    } else if (tmp11.MESSAGES === tab) {
      const obj9 = { tab, searchContext, isFocused };
      return jsx(MessagesScreenDefault, { tab, searchContext, isFocused });
    } else if (tmp11.PINS === tab) {
      const obj10 = { tab, searchContext, isFocused };
      return jsx(messages_PinsScreenDefault, { tab, searchContext, isFocused });
    } else {
      return null;
    }
  } else {
    return null;
  }
  const tmp = _slicedToArray(noop.useState(isFocused), 2);
  tmp4 = searchContext;
}
const View = fn(17).View;
const SearchTabs = fn(7878).SearchTabs;
const SearchTypes = fn(1074).SearchTypes;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_10 = createStyles.createStyles({ container: { flex: 1 } });
let context = noop.createContext(undefined);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/tabs/SearchTabsPage.tsx");

export default function ConnectedSearchTabsPage(tab) {
  tab = tab.tab;
  ({ searchContext, width } = tab);
  context = noop.useContext(context);
  _modDef38(null != context, "[SearchTabsPageContext] Context should not be null.");
  let obj = { style: closure_10().container, children: null };
  obj = {
    isFocused: useStateFromSharedValueDefault(context.selectedTab) === tab,
    selectMediaTab: context.selectMediaTab,
    tab,
    searchContext,
    width,
  };
  obj.children = (
    <SearchTabsPage
      isFocused={useStateFromSharedValueDefault(context.selectedTab) === tab}
      selectMediaTab={context.selectMediaTab}
      tab={tab}
      searchContext={searchContext}
      width={width}
    />
  );
  return (
    <View
      isFocused={useStateFromSharedValueDefault(context.selectedTab) === tab}
      selectMediaTab={context.selectMediaTab}
      tab={tab}
      searchContext={searchContext}
      width={width}
    />
  );
}
export const SearchTabsPageContext = context;
