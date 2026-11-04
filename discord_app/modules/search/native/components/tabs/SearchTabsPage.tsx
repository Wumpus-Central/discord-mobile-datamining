// === Module 18979: SearchTabsPage ===

// Module 18979 (SearchTabsPage)
import _modDef38 from "module_38" /* 38 */;
import useStateFromSharedValueDefault from "useStateFromSharedValue" /* 8982 */;
import GuildNSFWDefault from "GuildNSFW" /* 11406 */;
import ChannelSpoilerDefault from "ChannelSpoiler" /* 11408 */;
import RecentScreenDefault from "RecentScreen" /* 18980 */;
import PeopleScreenDefault from "PeopleScreen" /* 19044 */;
import MembersScreenDefault from "MembersScreen" /* 19046 */;
import ChannelsScreenDefault from "ChannelsScreen" /* 19052 */;
import MediaScreenDefault from "MediaScreen" /* 19053 */;
import FilesScreenDefault from "FilesScreen" /* 19061 */;
import LinksScreenDefault from "LinksScreen" /* 19063 */;
import MessagesScreenDefault from "MessagesScreen" /* 19070 */;
import messages_PinsScreenDefault from "messages/PinsScreen" /* 19073 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 4990 */;

const require = fn;
function SearchTabsPage(selectMediaTab) {
  ({ tab, searchContext } = selectMediaTab);
  ({ isFocused, width } = selectMediaTab);
  importDefault = undefined;
  [tmp2, c1] = noop.useState(isFocused);
  const effect = noop.useEffect(() => {
    const timerId = setTimeout(() => {
      closure_1_1(true);
    }, 10);
  }, []);
  const tmp = _slicedToArray(noop.useState(isFocused), 2);
  items = [ChannelStore];
  const stateFromStores = searchContext(504).useStateFromStores(items, () => {
    if (searchContext.type === SearchTypes.GUILD_CHANNEL) {
      const channelId = searchContext.channelId;
    }
    return ChannelStore.getChannel(channelId);
  });
  const obj = searchContext(504);
  const isChannelSpoilerGated = searchContext(6888).useIsChannelSpoilerGated(stateFromStores);
  searchContext(6869);
  if (tmp2) {
    if (tab !== SearchTabs.MEMBERS) {
      if (searchContext.type === SearchTypes.GUILD_CHANNEL) {
        if (tmp9) {
          ({ guildId: obj14.guildId, channelId: obj14.channelId } = searchContext);
          return jsx(GuildNSFWDefault, { guildId: null, channelId: null });
        } else if (isChannelSpoilerGated) {
          ({ guildId: obj13.guildId, channelId: obj13.channelId } = searchContext);
          return jsx(ChannelSpoilerDefault, { guildId: null, channelId: null });
        }
      }
    }
    if (SearchTabs.RECENT === tab) {
      const obj5 = { onJumpToMedia: selectMediaTab.selectMediaTab, searchContext, width };
      return jsx(RecentScreenDefault, { onJumpToMedia: selectMediaTab.selectMediaTab, searchContext, width });
    } else if (SearchTabs.PEOPLE === tab) {
      const obj6 = { searchContext };
      return jsx(PeopleScreenDefault, { searchContext });
    } else if (SearchTabs.MEMBERS === tab) {
      const obj7 = { searchContext };
      return jsx(MembersScreenDefault, { searchContext });
    } else if (SearchTabs.GUILD_CHANNELS === tab) {
      const obj8 = { searchContext };
      return jsx(ChannelsScreenDefault, { searchContext });
    } else if (SearchTabs.MEDIA === tab) {
      const obj9 = { tab, searchContext, isFocused, width };
      return jsx(MediaScreenDefault, { tab, searchContext, isFocused, width });
    } else if (SearchTabs.FILES === tab) {
      const obj10 = { tab, searchContext, isFocused, width };
      return jsx(FilesScreenDefault, { tab, searchContext, isFocused, width });
    } else if (SearchTabs.LINKS === tab) {
      const obj11 = { tab, searchContext, isFocused, width };
      return jsx(LinksScreenDefault, { tab, searchContext, isFocused, width });
    } else if (SearchTabs.THREADS === tab) {
      const obj12 = { searchContext };
      return jsx(searchContext(19064).SearchTabsThreadScreen, { searchContext });
    } else if (SearchTabs.MESSAGES === tab) {
      const obj26 = { tab, searchContext, isFocused };
      return jsx(MessagesScreenDefault, { tab, searchContext, isFocused });
    } else if (SearchTabs.PINS === tab) {
      const obj27 = { tab, searchContext, isFocused };
      return jsx(messages_PinsScreenDefault, { tab, searchContext, isFocused });
    } else {
      return null;
    }
  } else {
    return null;
  }
  const obj2 = searchContext(6888);
}
const View = fn(17).View;
const SearchTabs = fn(9976).SearchTabs;
const SearchTypes = fn(1072).SearchTypes;
const jsx = fn(21).jsx;
const createStyles = fn(5141);
let closure_10 = createStyles.createStyles({ container: { flex: 1 } });
let context = noop.createContext(undefined);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/tabs/SearchTabsPage.tsx");

export default function ConnectedSearchTabsPage(tab) {
  tab = tab.tab;
  ({ searchContext, width } = tab);
  context = noop.useContext(context);
  _modDef38(null != context, "[SearchTabsPageContext] Context should not be null.");
  const obj = { style: closure_10().container, children: null };
  const tmp3 = closure_10();
  obj.children = <SearchTabsPage isFocused={useStateFromSharedValueDefault(context.selectedTab) === tab} selectMediaTab={context.selectMediaTab} tab={tab} searchContext={searchContext} width={width} />;
  return <View style={closure_10().container}>{null}</View>;
};
export const SearchTabsPageContext = context;