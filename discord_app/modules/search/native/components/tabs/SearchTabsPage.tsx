// discord_app/modules/search/native/components/tabs/SearchTabsPage.tsx
import _slicedToArray from "_slicedToArray";
import importAllResult from "module_15864";
import { View } from "module_15854";
import ensureGuildLoaded from "ensureGuildLoaded";
import { SearchTabs } from "MessageEmbedTypes";
import { SearchTypes } from "ME";
import { jsx } from "module_15871";
import createCacheKey from "createCacheKey";
import { 00038__ } from "../../../../../../_runtime/metro/00038__.js";
import { GuildNSFW } from "../../../../../components_native/warnings/GuildNSFW.tsx";
import { map } from "../../../../reanimated/native/useStateFromSharedValue.tsx";
import { ChannelSpoiler } from "../../../../spoiler_channels/native/ChannelSpoiler.tsx";
import { ChannelsScreen } from "pages/ChannelsScreen.tsx";
import { SearchableMembersScreen } from "pages/MembersScreen.tsx";
import { FilesScreen } from "pages/messages/FilesScreen.tsx";
import { LinksScreen } from "pages/messages/LinksScreen.tsx";
import { MediaScreen } from "pages/messages/MediaScreen.tsx";
import { MessagesScreen } from "pages/messages/MessagesScreen.tsx";
import { InitialPinsScreen } from "pages/messages/PinsScreen.tsx";
import { PeopleScreen } from "pages/PeopleScreen.tsx";
import { ClearAllHistory } from "pages/RecentScreen.tsx";

const require = arg1;
function SearchTabsPage(selectMediaTab) {
  let c1;
  let isFocused;
  let searchContext;
  let tab;
  let tmp2;
  let width;
  ({ tab, searchContext } = selectMediaTab);
  ({ isFocused, width } = selectMediaTab);
  let importDefault;
  [tmp2, c1] = callback(importAllResult.useState(isFocused), 2);
  const effect = importAllResult.useEffect(() => {
    const timerId = setTimeout(() => {
      callback(true);
    }, 10);
  }, []);
  let obj = searchContext(589);
  const items = [ensureGuildLoaded];
  const stateFromStores = obj.useStateFromStores(items, () => {
    if (searchContext.type === outer1_8.GUILD_CHANNEL) {
      const channelId = tmp2.channelId;
    }
    return outer1_6.getChannel(channelId);
  });
  let obj1 = searchContext(5987);
  const isChannelSpoilerGated = obj1.useIsChannelSpoilerGated(stateFromStores);
  searchContext(4558);
  if (tmp2) {
    if (tab !== SearchTabs.MEMBERS) {
      if (searchContext.type === SearchTypes.GUILD_CHANNEL) {
        if (tmp9) {
          obj = { guildId: null, channelId: null };
          ({ guildId: obj14[0], channelId: obj14[1] } = searchContext);
          return jsx(GuildNSFW, { guildId: null, channelId: null });
        } else if (isChannelSpoilerGated) {
          obj = { guildId: null, channelId: null };
          ({ guildId: obj13[0], channelId: obj13[1] } = searchContext);
          return jsx(ChannelSpoiler, { guildId: null, channelId: null });
        }
      }
    }
    if (SearchTabs.RECENT === tab) {
      obj1 = { onJumpToMedia: null, searchContext: null, width: null };
      obj1[0] = selectMediaTab.selectMediaTab;
      obj1[1] = searchContext;
      obj1[2] = width;
      return jsx(ClearAllHistory, { onJumpToMedia: null, searchContext: null, width: null });
    } else if (tmp11.PEOPLE === tab) {
      const obj2 = { searchContext: null };
      obj2[0] = searchContext;
      return jsx(PeopleScreen, { searchContext: null });
    } else if (tmp11.MEMBERS === tab) {
      const obj3 = { searchContext: null };
      obj3[0] = searchContext;
      return jsx(SearchableMembersScreen, { searchContext: null });
    } else if (tmp11.GUILD_CHANNELS === tab) {
      const obj4 = { searchContext: null };
      obj4[0] = searchContext;
      return jsx(ChannelsScreen, { searchContext: null });
    } else if (tmp11.MEDIA === tab) {
      const obj5 = { tab: null, searchContext: null, isFocused: null, width: null };
      obj5[0] = tab;
      obj5[1] = searchContext;
      obj5[2] = isFocused;
      obj5[3] = width;
      return jsx(MediaScreen, { tab: null, searchContext: null, isFocused: null, width: null });
    } else if (tmp11.FILES === tab) {
      const obj6 = { tab: null, searchContext: null, isFocused: null, width: null };
      obj6[0] = tab;
      obj6[1] = searchContext;
      obj6[2] = isFocused;
      obj6[3] = width;
      return jsx(FilesScreen, { tab: null, searchContext: null, isFocused: null, width: null });
    } else if (tmp11.LINKS === tab) {
      const obj7 = { tab: null, searchContext: null, isFocused: null, width: null };
      obj7[0] = tab;
      obj7[1] = searchContext;
      obj7[2] = isFocused;
      obj7[3] = width;
      return jsx(LinksScreen, { tab: null, searchContext: null, isFocused: null, width: null });
    } else if (tmp11.THREADS === tab) {
      const obj8 = { searchContext: null };
      obj8[0] = searchContext;
      return jsx(tmp4(15865).SearchTabsThreadScreen, { searchContext: null });
    } else if (tmp11.MESSAGES === tab) {
      const obj9 = { tab: null, searchContext: null, isFocused: null };
      obj9[0] = tab;
      obj9[1] = searchContext;
      obj9[2] = isFocused;
      return jsx(MessagesScreen, { tab: null, searchContext: null, isFocused: null });
    } else if (tmp11.PINS === tab) {
      const obj10 = { tab: null, searchContext: null, isFocused: null };
      obj10[0] = tab;
      obj10[1] = searchContext;
      obj10[2] = isFocused;
      return jsx(InitialPinsScreen, { tab: null, searchContext: null, isFocused: null });
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
const result = require("get ActivityIndicator").fileFinishedImporting("modules/search/native/components/tabs/SearchTabsPage.tsx");

export default function ConnectedSearchTabsPage(tab) {
  let searchContext;
  let width;
  tab = tab.tab;
  ({ searchContext, width } = tab);
  context = importAllResult.useContext(context);
  00038__(null != context, "[SearchTabsPageContext] Context should not be null.");
  let obj = { style: callback2().container, children: null };
  obj = { isFocused: map(context.selectedTab) === tab, selectMediaTab: context.selectMediaTab, tab, searchContext, width };
  obj[1] = <SearchTabsPage isFocused={map(context.selectedTab) === tab} selectMediaTab={context.selectMediaTab} tab={tab} searchContext={searchContext} width={width} />;
  return <View isFocused={map(context.selectedTab) === tab} selectMediaTab={context.selectMediaTab} tab={tab} searchContext={searchContext} width={width} />;
};
export const SearchTabsPageContext = context;