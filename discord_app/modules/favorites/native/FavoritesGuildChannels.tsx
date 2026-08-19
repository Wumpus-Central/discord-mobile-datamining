// === Module 15534: FavoritesGuildChannels ===

// Module 15534 (FavoritesGuildChannels)
import noopAll from "noop" /* 19 */;
import getFontScale from "getFontScale" /* 4751 */;
import useScaledRowHeightDefault from "useScaledRowHeight" /* 8633 */;
import GuildChannels from "GuildChannels" /* 15366 */;
import ChannelListStickyHeaderDefault from "ChannelListStickyHeader" /* 15397 */;
import PX_8 from "PX_8" /* 15463 */;
import PX_8Default from "PX_8" /* 15463 */;
import ChannelListPanelBackdropDefault from "ChannelListPanelBackdrop" /* 15502 */;
import useShouldRenderChannelList from "useShouldRenderChannelList" /* 15526 */;
import getMissingFavoriteThreadIds from "getMissingFavoriteThreadIds" /* 15535 */;
import FavoritesGuildSuggestionsLoaderInnerDefault from "FavoritesGuildSuggestionsLoaderInner" /* 15536 */;
import EmptyBodyDefault from "EmptyBody" /* 15541 */;
import { useFavoritesGuildSuggestionCount as closure_3 } from "items" /* 15464 */;
import jsxProd from "jsxProd" /* 21 */;

require = fn;
noopAll;
({ jsx: c4, jsxs: c5, Fragment: closure_6 } = jsxProd);
const result = require("obj132").fileFinishedImporting("modules/favorites/native/FavoritesGuildChannels.tsx");

export default function FavoritesGuildChannels(arg0) {
  const tmp = callback();
  let tmp2 = importDefault;
  obj1 = getFontScale;
  const fontScale = obj1.useFontScale();
  let obj2 = getMissingFavoriteThreadIds;
  let obj = { withSuggestionsNotice: tmp > 0 };
  const favoritesGuildChannelList = obj2.useFavoritesGuildChannelList(obj);
  ({ guildChannels, shouldShowEmptyState, hasNoChannels } = favoritesGuildChannelList);
  const tmp3 = useScaledRowHeightDefault();
  if (!obj5.useShouldRenderChannelList()) {
    return null;
  } else {
    let tmp2Result = arg0;
    const items = [callback2(FavoritesGuildSuggestionsLoaderInnerDefault, {}), ];
    if (hasNoChannels) {
      obj = { style: null, contentInset: null, children: null };
      ({ style: obj8[0], contentInset: obj8[1] } = tmp2Result);
      tmp2Result = ChannelListPanelBackdropDefault;
      obj1 = { guild: null, showExtraButtons: false, canOpenGuildActionSheet: false };
      obj1[0] = tmp2Result.guild;
      const items1 = [callback2(ChannelListStickyHeaderDefault, obj1), , ];
      tmp2Result = PX_8Default;
      items1[1] = callback2(tmp2Result, {});
      let tmp10Result = null;
      if (shouldShowEmptyState) {
        tmp2 = EmptyBodyDefault;
        obj = {};
        tmp10Result = callback2(tmp2, obj);
      }
      items1[2] = tmp10Result;
      obj[2] = items1;
      tmp10Result = callback(tmp2Result, obj);
    } else {
      obj2 = {};
      const merged = Object.assign(tmp2Result);
      obj2.guildChannels = guildChannels;
      obj2.guildChannelsVersion = 0;
      obj2.favoritesSuggestionsNoticeHeight = PX_8.getFavoritesSuggestionsNoticeHeight(fontScale, tmp3, tmp);
      tmp10Result = callback2(GuildChannels.ChannelList, obj2);
      const tmp4Result = PX_8;
    }
    const obj3 = { children: null };
    items[1] = tmp10Result;
    obj3[0] = items;
    callback(closure_6, obj3);
  }
  obj5 = useShouldRenderChannelList;
};