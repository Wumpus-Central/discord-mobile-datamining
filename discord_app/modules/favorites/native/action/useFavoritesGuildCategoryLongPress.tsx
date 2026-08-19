// discord_app/modules/favorites/native/action/useFavoritesGuildCategoryLongPress.tsx
import getFavoritesAwareGuildName from "../../FavoritesUtils.tsx";
import noop from "../../../../../_runtime/00019_noop.js";
import { ChannelTypes } from "../../../../Constants.tsx";

require = fn;
const result = require("obj132").fileFinishedImporting("modules/favorites/native/action/useFavoritesGuildCategoryLongPress.tsx");

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
      const intl = isFavoritesGuildIdResult(dependencyMap[3]).intl;
      obj[0] = intl.string(isFavoritesGuildIdResult(dependencyMap[3]).t.Xm41aV);
      obj[1] = function perform() {
        return id(closure_1_2[4])(closure_1);
      };
      tmp = obj;
    }
    return tmp;
  }, items);
};