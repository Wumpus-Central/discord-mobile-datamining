// discord_app/modules/favorites/native/FavoritesGuildChannels.tsx
import "noop";
import { useFavoritesGuildSuggestionCount as closure_3 } from "items";
import jsxProd from "jsxProd";
import { useShouldRenderChannelList } from "../../guild_sidebar/native/useShouldRenderChannelList.tsx";
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
  let tmp10Result = dependencyMap;
  let obj = getFontScale;
  const fontScale = obj.useFontScale();
  let obj1 = getMissingFavoriteThreadIds;
  obj = { withSuggestionsNotice: tmp > 0 };
  const favoritesGuildChannelList = obj1.useFavoritesGuildChannelList(obj);
  ({ shouldShowEmptyState, guildChannels, hasNoChannels } = favoritesGuildChannelList);
  let obj3 = useShouldRenderChannelList;
  if (!obj3.useShouldRenderChannelList()) {
    return null;
  } else {
    let guild = arg0;
    const items = [callback2(tmp2(15416), {}), ];
    if (hasNoChannels) {
      obj = { style: null, contentInset: null, children: null };
      ({ style: obj7[0], contentInset: obj7[1] } = guild);
      obj1 = { guild: null, showExtraButtons: false, canOpenGuildActionSheet: false };
      guild = guild.guild;
      obj1[0] = guild;
      const items1 = [tmp10(tmp2(15277), obj1), , ];
      tmp10Result = null;
      if (shouldShowEmptyState) {
        shouldShowEmptyState = {};
        tmp10Result = tmp10(tmp2(15417), shouldShowEmptyState);
      }
      items1[1] = tmp10Result;
      tmp2 = tmp2(15341);
      tmp10Result = tmp10(tmp2, {});
      items1[2] = tmp10Result;
      obj[2] = items1;
      let tmp10Result1 = tmp8(tmp2(15381), obj);
      const tmp2Result = tmp2(15381);
    } else {
      const obj2 = {};
      const merged = Object.assign(guild);
      obj2.guildChannels = guildChannels;
      obj2.guildChannelsVersion = 0;
      obj2.favoritesSuggestionsNoticeHeight = tmp5(15341).getFavoritesSuggestionsNoticeHeight(fontScale, tmp4, tmp);
      tmp10Result1 = tmp10(tmp5(15246).ChannelList, obj2);
      const tmp5Result = tmp5(15341);
    }
    obj3 = { children: null };
    items[1] = tmp10Result1;
    obj3[0] = items;
    closure_5(closure_6, obj3);
    const tmp9 = closure_6;
  }
};