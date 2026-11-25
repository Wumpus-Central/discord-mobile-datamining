// === Module 18001: FavoritesGuildChannels ===

// Module 18001 (FavoritesGuildChannels)
import useFontScale from "useFontScale" /* 5618 */;
import useScaledRowHeightDefault from "useScaledRowHeight" /* 7374 */;
import RedesignChannelList from "RedesignChannelList" /* 17774 */;
import FavoritesGuildSuggestedChannels from "FavoritesGuildSuggestedChannels" /* 17866 */;
import useShouldRenderChannelList from "useShouldRenderChannelList" /* 17931 */;
import FavoritesGuildChannelList from "FavoritesGuildChannelList" /* 18002 */;
import useFavoritesPruneInactiveThreadsDefault from "useFavoritesPruneInactiveThreads" /* 18003 */;
import noop from "module_19" /* 19 */;

const ChannelListPanelBackdropDefault = tmp2(17721);
const ChannelListStickyHeaderDefault = tmp2(17804);
const FavoritesGuildSuggestedChannelsDefault = tmp2(17866);
const FavoritesGuildSuggestionsLoaderDefault = tmp2(18004);
const FavoritesGuildSidebarHeaderDefault = tmp2(18009);
require = fn;
let closure_3 = fn(17867).useFavoritesGuildSuggestionCount;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty, Fragment: closure_6 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildChannels.tsx");

export default function FavoritesGuildChannels(arg0) {
  const tmp = closure_3();
  let tmp2 = importDefault;
  let obj = dependencyMap;
  const tmp3 = useScaledRowHeightDefault();
  const fontScale = useFontScale.useFontScale();
  const favoritesGuildChannelList = FavoritesGuildChannelList.useFavoritesGuildChannelList({ withSuggestionsNotice: tmp > 0 });
  ({ guildChannels, shouldShowEmptyState, hasNoChannels } = favoritesGuildChannelList);
  useFavoritesPruneInactiveThreadsDefault();
  const obj4 = { withSuggestionsNotice: tmp > 0 };
  if (!obj5.useShouldRenderChannelList()) {
    return null;
  } else {
    let tmp2Result2 = arg0;
    items = [React4(FavoritesGuildSuggestionsLoaderDefault, {}), ];
    if (hasNoChannels) {
      const obj6 = { style: null, contentInset: null, children: null };
      ({ style: obj8.style, contentInset: obj8.contentInset } = tmp2Result2);
      const obj7 = { guild: tmp2Result2.guild, showExtraButtons: false, canOpenGuildActionSheet: false };
      const items1 = [React4(ChannelListStickyHeaderDefault, obj7), , ];
      tmp2Result2 = FavoritesGuildSuggestedChannelsDefault;
      items1[1] = React4(tmp2Result2, {});
      let tmp11Result = null;
      if (shouldShowEmptyState) {
        tmp2 = FavoritesGuildSidebarHeaderDefault;
        obj = {};
        tmp11Result = React4(tmp2, obj);
      }
      items1[2] = tmp11Result;
      obj6.children = items1;
      let tmp11Result1 = hasOwnProperty(ChannelListPanelBackdropDefault, obj6);
      const tmp2Result = ChannelListPanelBackdropDefault;
    } else {
      const obj9 = {};
      const merged = Object.assign(tmp2Result2);
      obj9.guildChannels = guildChannels;
      obj9.guildChannelsVersion = 0;
      obj9.favoritesSuggestionsNoticeHeight = FavoritesGuildSuggestedChannels.getFavoritesSuggestionsNoticeHeight(fontScale, tmp3, tmp);
      tmp11Result1 = React4(RedesignChannelList.ChannelList, obj9);
      const tmp4Result = FavoritesGuildSuggestedChannels;
    }
    const obj10 = { children: null };
    items[1] = tmp11Result1;
    obj10.children = items;
    hasOwnProperty(timestampProducer, obj10);
  }
  obj5 = useShouldRenderChannelList;
};