// discord_app/modules/favorites/native/FavoritesGuildChannels.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import getFontScale from "../../screen/native/useFontScale.tsx";
import useScaledRowHeightDefault from "../../main_tabs_v2/native/shared_components/user_list/useScaledRowHeight.tsx";
import GuildChannels from "../../channel_list_v2/native/RedesignChannelList.tsx";
import ChannelListStickyHeaderDefault from "../../channel_list_v2/native/components/ChannelListStickyHeader.tsx";
import PX_8 from "FavoritesGuildSuggestedChannels.tsx";
import PX_8Default from "FavoritesGuildSuggestedChannels.tsx";
import ChannelListPanelBackdropDefault from "../../channel_list_v2/native/components/ChannelListPanelBackdrop.tsx";
import useShouldRenderChannelList from "../../guild_sidebar/native/useShouldRenderChannelList.tsx";
import getMissingFavoriteThreadIds from "../FavoritesGuildChannelList.tsx";
import FavoritesGuildSuggestionsLoaderInnerDefault from "../FavoritesGuildSuggestionsLoader.tsx";
import EmptyBodyDefault from "FavoritesGuildSidebarHeader.tsx";
import { useFavoritesGuildSuggestionCount as closure_3 } from "../FavoritesGuildSuggestionsStore.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";

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