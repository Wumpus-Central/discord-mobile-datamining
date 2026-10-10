// === Module 16704: FavoritesGuildChannels ===

// Module 16704 (FavoritesGuildChannels)
import c from "c" /* 576 */;
import useFontScale from "useFontScale" /* 5386 */;
import useScaledRowHeightDefault from "useScaledRowHeight" /* 6737 */;
import RedesignChannelList from "RedesignChannelList" /* 16517 */;
import FavoritesGuildSuggestedChannels from "FavoritesGuildSuggestedChannels" /* 16614 */;
import useShouldRenderChannelList from "useShouldRenderChannelList" /* 16685 */;
import FavoritesGuildChannelList from "FavoritesGuildChannelList" /* 16705 */;
import noop from "module_19" /* 19 */;

const ChannelListPanelBackdropDefault = tmp4(16515);
const ChannelListStickyHeaderDefault = tmp4(16549);
const FavoritesGuildSuggestedChannelsDefault = tmp4(16614);
const FavoritesGuildSuggestionsLoaderDefault = tmp4(16706);
const FavoritesGuildSidebarHeaderDefault = tmp4(16711);
require = fn;
let closure_3 = fn(16615).useFavoritesGuildSuggestionCount;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty, Fragment: metroRequire } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildChannels.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function FavoritesGuildChannels(guild) {
  let obj = dependencyMap;
  const cResult = c.c(11);
  const tmp3 = closure_3();
  let tmp4 = importDefault;
  const tmp5 = useScaledRowHeightDefault();
  const fontScale = useFontScale.useFontScale();
  if (cResult[0] !== tmp3 > 0) {
    const obj4 = { withSuggestionsNotice: tmp7 };
    cResult[0] = tmp7;
    cResult[1] = obj4;
    let tmp8 = obj4;
  } else {
    tmp8 = cResult[1];
  }
  const favoritesGuildChannelList = FavoritesGuildChannelList.useFavoritesGuildChannelList(tmp8);
  ({ guildChannels, shouldShowEmptyState, hasNoChannels } = favoritesGuildChannelList);
  const tmpResult = FavoritesGuildChannelList;
  if (!tmpResult3.useShouldRenderChannelList()) {
    return null;
  } else {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp13 = React4(FavoritesGuildSuggestionsLoaderDefault, {});
      cResult[2] = tmp13;
      let tmp11 = tmp13;
    } else {
      tmp11 = cResult[2];
    }
    const items = [tmp11, ];
    if (hasNoChannels) {
      const obj5 = { style: null, contentInset: null, children: null };
      ({ style: obj9.style, contentInset: obj9.contentInset } = guild);
      const obj6 = { guild: guild.guild, showExtraButtons: false, canOpenGuildActionSheet: false };
      const items1 = [React4(ChannelListStickyHeaderDefault, obj6), React4(FavoritesGuildSuggestedChannelsDefault, {}), ];
      let tmp23Result = null;
      if (shouldShowEmptyState) {
        tmp4 = FavoritesGuildSidebarHeaderDefault;
        obj = {};
        tmp23Result = React4(tmp4, obj);
      }
      items1[2] = tmp23Result;
      obj5.children = items1;
      let tmp15Result = hasOwnProperty(ChannelListPanelBackdropDefault, obj5);
      const tmp4Result = ChannelListPanelBackdropDefault;
    } else {
      const obj7 = {};
      const merged = Object.assign(guild);
      obj7.guildChannels = guildChannels;
      obj7.guildChannelsVersion = 0;
      obj7.favoritesSuggestionsNoticeHeight = FavoritesGuildSuggestedChannels.getFavoritesSuggestionsNoticeHeight(fontScale, tmp5, tmp3);
      tmp15Result = React4(RedesignChannelList.ChannelList, obj7);
      const tmpResult4 = FavoritesGuildSuggestedChannels;
    }
    const obj8 = { children: null };
    items[1] = tmp15Result;
    obj8.children = items;
    const tmp15Result2 = hasOwnProperty(timestampProducer, obj8);
    cResult[3] = fontScale;
    cResult[4] = guildChannels;
    cResult[5] = hasNoChannels;
    cResult[6] = guild;
    cResult[7] = shouldShowEmptyState;
    cResult[8] = tmp3;
    cResult[9] = tmp5;
    cResult[10] = tmp15Result2;
  }
  tmpResult3 = useShouldRenderChannelList;
}) : (function FavoritesGuildChannels(arg0) {
  const tmp = closure_3();
  let tmp2 = importDefault;
  let obj = dependencyMap;
  const tmp3 = useScaledRowHeightDefault();
  const fontScale = useFontScale.useFontScale();
  const favoritesGuildChannelList = FavoritesGuildChannelList.useFavoritesGuildChannelList({ withSuggestionsNotice: tmp > 0 });
  ({ guildChannels, shouldShowEmptyState, hasNoChannels } = favoritesGuildChannelList);
  const obj4 = { withSuggestionsNotice: tmp > 0 };
  if (!obj5.useShouldRenderChannelList()) {
    return null;
  } else {
    let tmp2Result2 = arg0;
    const items = [React4(FavoritesGuildSuggestionsLoaderDefault, {}), ];
    if (hasNoChannels) {
      const obj6 = { style: null, contentInset: null, children: null };
      ({ style: obj8.style, contentInset: obj8.contentInset } = tmp2Result2);
      const obj7 = { guild: tmp2Result2.guild, showExtraButtons: false, canOpenGuildActionSheet: false };
      const items1 = [React4(ChannelListStickyHeaderDefault, obj7), , ];
      tmp2Result2 = FavoritesGuildSuggestedChannelsDefault;
      items1[1] = React4(tmp2Result2, {});
      let tmp10Result = null;
      if (shouldShowEmptyState) {
        tmp2 = FavoritesGuildSidebarHeaderDefault;
        obj = {};
        tmp10Result = React4(tmp2, obj);
      }
      items1[2] = tmp10Result;
      obj6.children = items1;
      let tmp10Result1 = hasOwnProperty(ChannelListPanelBackdropDefault, obj6);
      const tmp2Result = ChannelListPanelBackdropDefault;
    } else {
      const obj9 = {};
      const merged = Object.assign(tmp2Result2);
      obj9.guildChannels = guildChannels;
      obj9.guildChannelsVersion = 0;
      obj9.favoritesSuggestionsNoticeHeight = FavoritesGuildSuggestedChannels.getFavoritesSuggestionsNoticeHeight(fontScale, tmp3, tmp);
      tmp10Result1 = React4(RedesignChannelList.ChannelList, obj9);
      const tmp4Result = FavoritesGuildSuggestedChannels;
    }
    const obj10 = { children: null };
    items[1] = tmp10Result1;
    obj10.children = items;
    hasOwnProperty(timestampProducer, obj10);
  }
  obj5 = useShouldRenderChannelList;
});