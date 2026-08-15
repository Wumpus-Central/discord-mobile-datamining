// discord_app/modules/favorites/native/FavoritesGuildChannels.tsx
import "noop";
import { useFavoritesGuildSuggestionCount as closure_3 } from "items";
import jsxProd from "jsxProd";
import { useScaledRowHeight } from "../../main_tabs_v2/native/shared_components/user_list/useScaledRowHeight.tsx";
import { getFontScale } from "../../screen/native/useFontScale.tsx";
import { getMissingFavoriteThreadIds } from "../FavoritesGuildChannelList.tsx";

let c4;
let c5;
let closure_6;
const require = arg1;
({ jsx: c4, jsxs: c5, Fragment: closure_6 } = jsxProd);
const result = require("jsxProd").fileFinishedImporting("modules/favorites/native/FavoritesGuildChannels.tsx");

export default function FavoritesGuildChannels(arg0) {
  let guildChannels;
  let hasNoChannels;
  let shouldShowEmptyState;
  const tmp = callback();
  let tmp2 = importDefault;
  let obj = dependencyMap;
  let obj1 = getFontScale;
  const fontScale = obj1.useFontScale();
  let obj2 = getMissingFavoriteThreadIds;
  obj = { withSuggestionsNotice: tmp > 0 };
  const favoritesGuildChannelList = obj2.useFavoritesGuildChannelList(obj);
  ({ guildChannels, shouldShowEmptyState, hasNoChannels } = favoritesGuildChannelList);
  const tmp3 = useScaledRowHeight();
  if (!obj5.useShouldRenderChannelList()) {
    return null;
  } else {
    let tmp2Result = arg0;
    const items = [callback2(tmp2(15536), {}), ];
    if (hasNoChannels) {
      obj = { style: null, contentInset: null, children: null };
      ({ style: obj8[0], contentInset: obj8[1] } = tmp2Result);
      tmp2Result = tmp2(15502);
      obj1 = { guild: null, showExtraButtons: false, canOpenGuildActionSheet: false };
      obj1[0] = tmp2Result.guild;
      const items1 = [tmp10(tmp2(15397), obj1), , ];
      tmp2Result = tmp2(15463);
      items1[1] = tmp10(tmp2Result, {});
      let tmp10Result = null;
      if (shouldShowEmptyState) {
        tmp2 = tmp2(15541);
        obj = {};
        tmp10Result = tmp10(tmp2, obj);
      }
      items1[2] = tmp10Result;
      obj[2] = items1;
      tmp10Result = tmp8(tmp2Result, obj);
    } else {
      obj2 = {};
      const merged = Object.assign(tmp2Result);
      obj2.guildChannels = guildChannels;
      obj2.guildChannelsVersion = 0;
      obj2.favoritesSuggestionsNoticeHeight = tmp4(15463).getFavoritesSuggestionsNoticeHeight(fontScale, tmp3, tmp);
      tmp10Result = tmp10(tmp4(15366).ChannelList, obj2);
      const tmp4Result = tmp4(15463);
    }
    const obj3 = { children: null };
    items[1] = tmp10Result;
    obj3[0] = items;
    closure_5(closure_6, obj3);
    const tmp9 = closure_6;
  }
};