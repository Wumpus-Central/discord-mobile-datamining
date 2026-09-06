// === Module 16639: SearchTabsPage ===

// Module 16639 (SearchTabsPage)
import _modDef38 from "module_38" /* 38 */;
import useStateFromSharedValueDefault from "useStateFromSharedValue" /* 8265 */;
import GuildNSFWDefault from "GuildNSFW" /* 12665 */;
import ChannelSpoilerDefault from "ChannelSpoiler" /* 12667 */;
import RecentScreenDefault from "RecentScreen" /* 16640 */;
import PeopleScreenDefault from "PeopleScreen" /* 16682 */;
import MembersScreenDefault from "MembersScreen" /* 16684 */;
import ChannelsScreenDefault from "ChannelsScreen" /* 16691 */;
import MediaScreenDefault from "MediaScreen" /* 16692 */;
import FilesScreenDefault from "FilesScreen" /* 16700 */;
import LinksScreenDefault from "LinksScreen" /* 16702 */;
import MessagesScreenDefault from "MessagesScreen" /* 16709 */;
import messages_PinsScreenDefault from "messages/PinsScreen" /* 16716 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;

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
      const channelId = searchContext.channelId;
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
    } else if (SearchTabs.PEOPLE === tab) {
      const obj2 = { searchContext };
      return jsx(PeopleScreenDefault, { searchContext });
    } else if (SearchTabs.MEMBERS === tab) {
      const obj3 = { searchContext };
      return jsx(MembersScreenDefault, { searchContext });
    } else if (SearchTabs.GUILD_CHANNELS === tab) {
      const obj4 = { searchContext };
      return jsx(ChannelsScreenDefault, { searchContext });
    } else if (SearchTabs.MEDIA === tab) {
      const obj5 = { tab, searchContext, isFocused, width };
      return jsx(MediaScreenDefault, { tab, searchContext, isFocused, width });
    } else if (SearchTabs.FILES === tab) {
      const obj6 = { tab, searchContext, isFocused, width };
      return jsx(FilesScreenDefault, { tab, searchContext, isFocused, width });
    } else if (SearchTabs.LINKS === tab) {
      const obj7 = { tab, searchContext, isFocused, width };
      return jsx(LinksScreenDefault, { tab, searchContext, isFocused, width });
    } else if (SearchTabs.THREADS === tab) {
      const obj8 = { searchContext };
      return jsx(searchContext(16703).SearchTabsThreadScreen, { searchContext });
    } else if (SearchTabs.MESSAGES === tab) {
      const obj9 = { tab, searchContext, isFocused };
      return jsx(MessagesScreenDefault, { tab, searchContext, isFocused });
    } else if (SearchTabs.PINS === tab) {
      const obj10 = { tab, searchContext, isFocused };
      return jsx(messages_PinsScreenDefault, { tab, searchContext, isFocused });
    } else {
      return null;
    }
  } else {
    return null;
  }
  const tmp = _slicedToArray(noop.useState(isFocused), 2);
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
  obj = { isFocused: useStateFromSharedValueDefault(context.selectedTab) === tab, selectMediaTab: context.selectMediaTab, tab, searchContext, width };
  obj.children = <SearchTabsPage isFocused={useStateFromSharedValueDefault(context.selectedTab) === tab} selectMediaTab={context.selectMediaTab} tab={tab} searchContext={searchContext} width={width} />;
  return <View isFocused={useStateFromSharedValueDefault(context.selectedTab) === tab} selectMediaTab={context.selectMediaTab} tab={tab} searchContext={searchContext} width={width} />;
};
export const SearchTabsPageContext = context;