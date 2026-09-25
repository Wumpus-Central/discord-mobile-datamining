// discord_app/modules/favorites/native/FavoritesGuildChannels.tsx
import useFontScale from "../../screen/native/useFontScale.tsx";
import useScaledRowHeightDefault from "../../main_tabs_v2/native/shared_components/user_list/useScaledRowHeight.tsx";
import RedesignChannelList from "../../channel_list_v2/native/RedesignChannelList.tsx";
import FavoritesGuildSuggestedChannels from "FavoritesGuildSuggestedChannels.tsx";
import useShouldRenderChannelList from "../../guild_sidebar/native/useShouldRenderChannelList.tsx";
import FavoritesGuildChannelList from "../FavoritesGuildChannelList.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const ChannelListPanelBackdropDefault = tmp2(15658);
const ChannelListStickyHeaderDefault = tmp2(15741);
const FavoritesGuildSuggestedChannelsDefault = tmp2(15807);
const FavoritesGuildSuggestionsLoaderDefault = tmp2(15883);
const FavoritesGuildSidebarHeaderDefault = tmp2(15888);
require = fn;
let closure_3 = fn(15808).useFavoritesGuildSuggestionCount;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty, Fragment: metroRequire } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildChannels.tsx");

export default function FavoritesGuildChannels(arg0) {
  const tmp = closure_3();
  let tmp2 = importDefault;
  let obj = dependencyMap;
  const tmp3 = useScaledRowHeightDefault();
  const fontScale = useFontScale.useFontScale();
  const favoritesGuildChannelList = FavoritesGuildChannelList.useFavoritesGuildChannelList({
    withSuggestionsNotice: tmp > 0,
  });
  ({ guildChannels, shouldShowEmptyState, hasNoChannels } = favoritesGuildChannelList);
  const obj4 = { withSuggestionsNotice: tmp > 0 };
  if (!obj5.useShouldRenderChannelList()) {
    return null;
  } else {
    let tmp2Result2 = arg0;
    const items = [React4(FavoritesGuildSuggestionsLoaderDefault, {})];
    if (hasNoChannels) {
      const obj6 = { style: null, contentInset: null, children: null };
      ({ style: obj8.style, contentInset: obj8.contentInset } = tmp2Result2);
      const obj7 = { guild: tmp2Result2.guild, showExtraButtons: false, canOpenGuildActionSheet: false };
      const items1 = [React4(ChannelListStickyHeaderDefault, obj7), ,];
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
      obj9.favoritesSuggestionsNoticeHeight = FavoritesGuildSuggestedChannels.getFavoritesSuggestionsNoticeHeight(
        fontScale,
        tmp3,
        tmp,
      );
      tmp10Result1 = React4(RedesignChannelList.ChannelList, obj9);
      const tmp4Result = FavoritesGuildSuggestedChannels;
    }
    const obj10 = { children: null };
    items[1] = tmp10Result1;
    obj10.children = items;
    hasOwnProperty(timestampProducer, obj10);
  }
  obj5 = useShouldRenderChannelList;
}
