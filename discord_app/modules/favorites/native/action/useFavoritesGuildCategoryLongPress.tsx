// discord_app/modules/favorites/native/action/useFavoritesGuildCategoryLongPress.tsx
import noop from "noop";
import { ChannelTypes } from "ME";
import { getFavoritesAwareGuildName } from "../../FavoritesUtils.tsx";

let require = arg1;
const result = require("getFavoritesAwareGuildName").fileFinishedImporting("modules/favorites/native/action/useFavoritesGuildCategoryLongPress.tsx");

export default function useFavoritesGuildCategoryLongPress(getGuildId) {
  let isFavoritesGuildIdResult = getFavoritesAwareGuildName.isFavoritesGuildId(getGuildId.getGuildId());
  if (isFavoritesGuildIdResult) {
    isFavoritesGuildIdResult = getGuildId.type === ChannelTypes.GUILD_CATEGORY;
  }
  require = isFavoritesGuildIdResult;
  const id = getGuildId.id;
  const items = [isFavoritesGuildIdResult, id];
  return React.useMemo(() => {
    let tmp = null;
    if (closure_0) {
      const obj = { label: null, perform: null };
      const intl = isFavoritesGuildIdResult(outer1_2[3]).intl;
      obj[0] = intl.string(isFavoritesGuildIdResult(outer1_2[3]).t.Xm41aV);
      obj[1] = function perform() {
        return outer1_1(outer1_2[4])(closure_1);
      };
      tmp = obj;
    }
    return tmp;
  }, items);
};