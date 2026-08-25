// discord_app/modules/search/native/components/tabs/SearchTabsPage.tsx
import _modDef38 from "../../../../../../_runtime/metro/00038__.js";
import mapDefault from "../../../../reanimated/native/useStateFromSharedValue.tsx";
import GuildNSFWDefault from "../../../../../components_native/warnings/GuildNSFW.tsx";
import ChannelSpoilerDefault from "../../../../spoiler_channels/native/ChannelSpoiler.tsx";
import ClearAllHistoryDefault from "pages/RecentScreen.tsx";
import _modDef16035 from "pages/PeopleScreen.tsx";
import SearchableMembersScreenDefault from "pages/MembersScreen.tsx";
import _modDef16041 from "pages/ChannelsScreen.tsx";
import _modDef16042 from "pages/messages/MediaScreen.tsx";
import _modDef16050 from "pages/messages/FilesScreen.tsx";
import _modDef16052 from "pages/messages/LinksScreen.tsx";
import _modDef16059 from "pages/messages/MessagesScreen.tsx";
import InitialPinsScreenDefault from "pages/messages/PinsScreen.tsx";
import closure_3 from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_6 from "../../../../../stores/ChannelStore.tsx";
import { SearchTabs } from "../../../SearchConstants.tsx";
import { SearchTypes } from "../../../../../Constants.tsx";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
function SearchTabsPage(selectMediaTab) {
  ({ tab, searchContext } = selectMediaTab);
  ({ isFocused, width } = selectMediaTab);
  importDefault = undefined;
  [tmp2, c1] = callback(importAllResult.useState(isFocused), 2);
  const effect = importAllResult.useEffect(() => {
    const timerId = setTimeout(() => {
      callback(true);
    }, 10);
  }, []);
  let obj = searchContext(589);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => {
    if (searchContext.type === closure_1_8.GUILD_CHANNEL) {
      const channelId = tmp2.channelId;
    }
    return closure_1_6.getChannel(channelId);
  });
  obj1 = searchContext(6053);
  const isChannelSpoilerGated = obj1.useIsChannelSpoilerGated(stateFromStores);
  searchContext(4619);
  if (tmp2) {
    if (tab !== SearchTabs.MEMBERS) {
      if (searchContext.type === SearchTypes.GUILD_CHANNEL) {
        if (tmp9) {
          obj = { guildId: null, channelId: null };
          ({ guildId: obj14[0], channelId: obj14[1] } = searchContext);
          return jsx(GuildNSFWDefault, { guildId: null, channelId: null });
        } else if (isChannelSpoilerGated) {
          obj = { guildId: null, channelId: null };
          ({ guildId: obj13[0], channelId: obj13[1] } = searchContext);
          return jsx(ChannelSpoilerDefault, { guildId: null, channelId: null });
        }
      }
    }
    if (SearchTabs.RECENT === tab) {
      obj1 = { onJumpToMedia: null, searchContext: null, width: null };
      obj1[0] = selectMediaTab.selectMediaTab;
      obj1[1] = searchContext;
      obj1[2] = width;
      return jsx(ClearAllHistoryDefault, { onJumpToMedia: null, searchContext: null, width: null });
    } else if (tmp11.PEOPLE === tab) {
      const obj2 = { searchContext: null };
      obj2[0] = searchContext;
      return jsx(_modDef16035, { searchContext: null });
    } else if (tmp11.MEMBERS === tab) {
      const obj3 = { searchContext: null };
      obj3[0] = searchContext;
      return jsx(SearchableMembersScreenDefault, { searchContext: null });
    } else if (tmp11.GUILD_CHANNELS === tab) {
      const obj4 = { searchContext: null };
      obj4[0] = searchContext;
      return jsx(_modDef16041, { searchContext: null });
    } else if (tmp11.MEDIA === tab) {
      const obj5 = { tab: null, searchContext: null, isFocused: null, width: null };
      obj5[0] = tab;
      obj5[1] = searchContext;
      obj5[2] = isFocused;
      obj5[3] = width;
      return jsx(_modDef16042, { tab: null, searchContext: null, isFocused: null, width: null });
    } else if (tmp11.FILES === tab) {
      const obj6 = { tab: null, searchContext: null, isFocused: null, width: null };
      obj6[0] = tab;
      obj6[1] = searchContext;
      obj6[2] = isFocused;
      obj6[3] = width;
      return jsx(_modDef16050, { tab: null, searchContext: null, isFocused: null, width: null });
    } else if (tmp11.LINKS === tab) {
      const obj7 = { tab: null, searchContext: null, isFocused: null, width: null };
      obj7[0] = tab;
      obj7[1] = searchContext;
      obj7[2] = isFocused;
      obj7[3] = width;
      return jsx(_modDef16052, { tab: null, searchContext: null, isFocused: null, width: null });
    } else if (tmp11.THREADS === tab) {
      const obj8 = { searchContext: null };
      obj8[0] = searchContext;
      return jsx(tmp4(16053).SearchTabsThreadScreen, { searchContext: null });
    } else if (tmp11.MESSAGES === tab) {
      const obj9 = { tab: null, searchContext: null, isFocused: null };
      obj9[0] = tab;
      obj9[1] = searchContext;
      obj9[2] = isFocused;
      return jsx(_modDef16059, { tab: null, searchContext: null, isFocused: null });
    } else if (tmp11.PINS === tab) {
      const obj10 = { tab: null, searchContext: null, isFocused: null };
      obj10[0] = tab;
      obj10[1] = searchContext;
      obj10[2] = isFocused;
      return jsx(InitialPinsScreenDefault, { tab: null, searchContext: null, isFocused: null });
    } else {
      return null;
    }
  } else {
    return null;
  }
  const tmp = callback(importAllResult.useState(isFocused), 2);
  tmp4 = searchContext;
}
let c4 = importAllResult;
let closure_10 = createCacheKey.createStyles({ container: { flex: 1 } });
let context = importAllResult.createContext(undefined);
const result = require("set").fileFinishedImporting("modules/search/native/components/tabs/SearchTabsPage.tsx");

export default function ConnectedSearchTabsPage(tab) {
  tab = tab.tab;
  ({ searchContext, width } = tab);
  context = importAllResult.useContext(context);
  _modDef38(null != context, "[SearchTabsPageContext] Context should not be null.");
  let obj = { style: callback2().container, children: null };
  obj = { isFocused: mapDefault(context.selectedTab) === tab, selectMediaTab: context.selectMediaTab, tab, searchContext, width };
  obj[1] = <SearchTabsPage isFocused={mapDefault(context.selectedTab) === tab} selectMediaTab={context.selectMediaTab} tab={tab} searchContext={searchContext} width={width} />;
  return <View isFocused={mapDefault(context.selectedTab) === tab} selectMediaTab={context.selectMediaTab} tab={tab} searchContext={searchContext} width={width} />;
};
export const SearchTabsPageContext = context;