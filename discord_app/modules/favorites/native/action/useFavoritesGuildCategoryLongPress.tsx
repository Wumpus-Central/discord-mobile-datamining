// === Module 15697: useFavoritesGuildCategoryLongPress ===

// Module 15697 (useFavoritesGuildCategoryLongPress)
import getFavoritesAwareGuildName from "getFavoritesAwareGuildName" /* 1912 */;
import closure_3 from "noop" /* 19 */;
import { ChannelTypes } from "ME" /* 676 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/favorites/native/action/useFavoritesGuildCategoryLongPress.tsx");

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
      const intl = isFavoritesGuildIdResult(closure_1_2[3]).intl;
      obj[0] = intl.string(isFavoritesGuildIdResult(closure_1_2[3]).t.Xm41aV);
      obj[1] = function perform() {
        return closure_1_1(closure_1_2[4])(closure_1);
      };
      tmp = obj;
    }
    return tmp;
  }, items);
};