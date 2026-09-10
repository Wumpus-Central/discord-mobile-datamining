// === Module 16353: FavoritesGuildChannels ===

// Module 16353 (FavoritesGuildChannels)
import useFontScale from "useFontScale" /* 5032 */;
import useScaledRowHeightDefault from "useScaledRowHeight" /* 7101 */;
import RedesignChannelList from "RedesignChannelList" /* 16185 */;
import FavoritesGuildSuggestedChannels from "FavoritesGuildSuggestedChannels" /* 16283 */;
import useShouldRenderChannelList from "useShouldRenderChannelList" /* 16345 */;
import FavoritesGuildChannelList from "FavoritesGuildChannelList" /* 16354 */;
import noop from "module_19" /* 19 */;

const ChannelListPanelBackdropDefault = tmp2(16133);
const ChannelListStickyHeaderDefault = tmp2(16217);
const FavoritesGuildSuggestedChannelsDefault = tmp2(16283);
const FavoritesGuildSuggestionsLoaderDefault = tmp2(16355);
const FavoritesGuildSidebarHeaderDefault = tmp2(16360);
require = fn;
let closure_3 = fn(16284).useFavoritesGuildSuggestionCount;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty, Fragment: metroRequire } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildChannels.tsx");

export default function FavoritesGuildChannels(arg0) {
  const tmp = closure_3();
  let tmp2 = importDefault;
  let obj1 = useFontScale;
  const fontScale = obj1.useFontScale();
  let obj2 = FavoritesGuildChannelList;
  let obj = { withSuggestionsNotice: tmp > 0 };
  const favoritesGuildChannelList = obj2.useFavoritesGuildChannelList(obj);
  ({ guildChannels, shouldShowEmptyState, hasNoChannels } = favoritesGuildChannelList);
  const tmp3 = useScaledRowHeightDefault();
  if (!obj5.useShouldRenderChannelList()) {
    return null;
  } else {
    let tmp2Result = arg0;
    const items = [React4(FavoritesGuildSuggestionsLoaderDefault, {}), ];
    if (hasNoChannels) {
      obj = { style: null, contentInset: null, children: null };
      ({ style: obj8.style, contentInset: obj8.contentInset } = tmp2Result);
      tmp2Result = ChannelListPanelBackdropDefault;
      obj1 = { guild: tmp2Result.guild, showExtraButtons: false, canOpenGuildActionSheet: false };
      const items1 = [React4(ChannelListStickyHeaderDefault, obj1), , ];
      tmp2Result = FavoritesGuildSuggestedChannelsDefault;
      items1[1] = React4(tmp2Result, {});
      let tmp10Result = null;
      if (shouldShowEmptyState) {
        tmp2 = FavoritesGuildSidebarHeaderDefault;
        obj = {};
        tmp10Result = React4(tmp2, obj);
      }
      items1[2] = tmp10Result;
      obj.children = items1;
      tmp10Result = hasOwnProperty(tmp2Result, obj);
    } else {
      obj2 = {};
      const merged = Object.assign(tmp2Result);
      obj2.guildChannels = guildChannels;
      obj2.guildChannelsVersion = 0;
      obj2.favoritesSuggestionsNoticeHeight = FavoritesGuildSuggestedChannels.getFavoritesSuggestionsNoticeHeight(fontScale, tmp3, tmp);
      tmp10Result = React4(RedesignChannelList.ChannelList, obj2);
      const tmp4Result = FavoritesGuildSuggestedChannels;
    }
    const obj3 = { children: null };
    items[1] = tmp10Result;
    obj3.children = items;
    hasOwnProperty(timestampProducer, obj3);
  }
  obj5 = useShouldRenderChannelList;
};