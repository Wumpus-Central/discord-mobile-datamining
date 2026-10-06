// === Module 16251: FavoritesGuildChannels ===

// Module 16251 (FavoritesGuildChannels)
import react2 from "react" /* 576 */;
import useFontScale from "useFontScale" /* 5609 */;
import useScaledRowHeightDefault from "useScaledRowHeight" /* 6553 */;
import ChannelListPanelBackdropDefault from "ChannelListPanelBackdrop" /* 16066 */;
import RedesignChannelList from "RedesignChannelList" /* 16068 */;
import ChannelListStickyHeaderDefault from "ChannelListStickyHeader" /* 16100 */;
import FavoritesGuildSuggestedChannels from "FavoritesGuildSuggestedChannels" /* 16165 */;
import FavoritesGuildSuggestionsStore from "FavoritesGuildSuggestionsStore" /* 16166 */;
import useShouldRenderChannelList from "useShouldRenderChannelList" /* 16239 */;
import FavoritesGuildChannelList from "FavoritesGuildChannelList" /* 16252 */;
import FavoritesGuildSuggestionsLoaderDefault from "FavoritesGuildSuggestionsLoader" /* 16253 */;
import FavoritesGuildSidebarHeaderDefault from "FavoritesGuildSidebarHeader" /* 16258 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const FavoritesGuildSuggestedChannelsDefault = FavoritesGuildSuggestedChannels;

let closure_4;
let hasOwnProperty;
let metroRequire;
let closure_3 = FavoritesGuildSuggestionsStore.useFavoritesGuildSuggestionCount;
({ jsx: closure_4, jsxs: hasOwnProperty, Fragment: metroRequire } = Fragment);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  let guildChannels;
  let hasNoChannels;
  let items1;
  let shouldShowEmptyState;
  let tmp9;
  let tmpResult4;
  const obj = react2;
  const cResult = obj.c(11);
  const tmp4 = closure_3();
  const tmp6 = useScaledRowHeightDefault();
  const obj2 = useFontScale;
  const fontScale = obj2.useFontScale();
  if (cResult[0] !== tmp4 > 0) {
    const obj3 = { withSuggestionsNotice: tmp4 > 0 };
    cResult[0] = tmp4 > 0;
    cResult[1] = obj3;
    tmp9 = obj3;
  } else {
    tmp9 = cResult[1];
  }
  const tmpResult = FavoritesGuildChannelList;
  const favoritesGuildChannelList = tmpResult.useFavoritesGuildChannelList(tmp9);
  ({ guildChannels, shouldShowEmptyState, hasNoChannels } = favoritesGuildChannelList);
  let tmp11 = null;
  const tmpResult3 = useShouldRenderChannelList;
  if (tmpResult3.useShouldRenderChannelList()) {
    let tmp13;
    let tmp18Result;
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp15 = React3(FavoritesGuildSuggestionsLoaderDefault, {});
      cResult[2] = tmp15;
      tmp13 = tmp15;
    } else {
      tmp13 = cResult[2];
    }
    if (cResult[3] === fontScale) {
      if (cResult[4] === guildChannels) {
        if (cResult[5] === hasNoChannels) {
          if (cResult[6] === guild) {
            if (cResult[7] === shouldShowEmptyState) {
              if (cResult[8] === tmp4) {
                let tmp17;
                if (cResult[9] === tmp6) {
                  tmp17 = cResult[10];
                }
                tmp11 = tmp17;
              }
            }
          }
        }
      }
    }
    const items = [tmp13, ];
    if (hasNoChannels) {
      const obj4 = { style: null, contentInset: null, children: items1 };
      ({ style: obj8.style, contentInset: obj8.contentInset } = guild);
      items1 = [, , ];
      const obj5 = { guild: guild.guild, showExtraButtons: false, canOpenGuildActionSheet: false };
      const tmp5Result = ChannelListPanelBackdropDefault;
      items1[0] = React3(ChannelListStickyHeaderDefault, obj5);
      items1[1] = React3(FavoritesGuildSuggestedChannelsDefault, {});
      let tmp26Result = null;
      if (shouldShowEmptyState) {
        tmp26Result = React3(FavoritesGuildSidebarHeaderDefault, {});
      }
      items1[2] = tmp26Result;
      tmp18Result = hasOwnProperty(tmp5Result, obj4);
    } else {
      const obj6 = { guildChannels, guildChannelsVersion: 0, favoritesSuggestionsNoticeHeight: tmpResult4.getFavoritesSuggestionsNoticeHeight(fontScale, tmp6, tmp4) };
      const ChannelList = RedesignChannelList.ChannelList;
      const merged = Object.assign(guild);
      tmpResult4 = FavoritesGuildSuggestedChannels;
      tmp18Result = React3(ChannelList, obj6);
    }
    const obj7 = { children: items };
    items[1] = tmp18Result;
    const tmp18Result2 = hasOwnProperty(metroRequire, obj7);
    cResult[3] = fontScale;
    cResult[4] = guildChannels;
    cResult[5] = hasNoChannels;
    cResult[6] = guild;
    cResult[7] = shouldShowEmptyState;
    cResult[8] = tmp4;
    cResult[9] = tmp6;
    cResult[10] = tmp18Result2;
    tmp17 = tmp18Result2;
  }
  return tmp11;
}) : ((guild) => {
  let guildChannels;
  let hasNoChannels;
  let items1;
  let shouldShowEmptyState;
  let tmp5Result;
  const tmp = closure_3();
  const tmp4 = useScaledRowHeightDefault();
  const obj = useFontScale;
  const fontScale = obj.useFontScale();
  const obj2 = FavoritesGuildChannelList;
  const obj3 = { withSuggestionsNotice: tmp > 0 };
  const favoritesGuildChannelList = obj2.useFavoritesGuildChannelList(obj3);
  ({ guildChannels, shouldShowEmptyState, hasNoChannels } = favoritesGuildChannelList);
  let tmp10Result2 = null;
  const obj4 = useShouldRenderChannelList;
  if (obj4.useShouldRenderChannelList()) {
    let tmp12Result1;
    const items = [React3(FavoritesGuildSuggestionsLoaderDefault, {}), ];
    if (hasNoChannels) {
      const obj5 = { style: null, contentInset: null, children: items1 };
      ({ style: obj7.style, contentInset: obj7.contentInset } = guild);
      items1 = [, , ];
      const obj6 = { guild: guild.guild, showExtraButtons: false, canOpenGuildActionSheet: false };
      const tmp2Result = ChannelListPanelBackdropDefault;
      items1[0] = React3(ChannelListStickyHeaderDefault, obj6);
      items1[1] = React3(FavoritesGuildSuggestedChannelsDefault, {});
      let tmp12Result = null;
      if (shouldShowEmptyState) {
        tmp12Result = React3(FavoritesGuildSidebarHeaderDefault, {});
      }
      items1[2] = tmp12Result;
      tmp12Result1 = hasOwnProperty(tmp2Result, obj5);
    } else {
      const obj8 = { guildChannels, guildChannelsVersion: 0, favoritesSuggestionsNoticeHeight: tmp5Result.getFavoritesSuggestionsNoticeHeight(fontScale, tmp4, tmp) };
      const ChannelList = RedesignChannelList.ChannelList;
      const merged = Object.assign(guild);
      tmp5Result = FavoritesGuildSuggestedChannels;
      tmp12Result1 = React3(ChannelList, obj8);
    }
    const obj9 = { children: items };
    items[1] = tmp12Result1;
    tmp10Result2 = hasOwnProperty(metroRequire, obj9);
  }
  return tmp10Result2;
});
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildChannels.tsx");

export default tmp4;