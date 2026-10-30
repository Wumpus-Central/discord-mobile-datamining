// === Module 17248: useIsFavoritesGuildVisible ===

// Module 17248 (useIsFavoritesGuildVisible)
import FavoritesUtils from "FavoritesUtils" /* 4883 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5040 */;
import FavoriteStore from "FavoriteStore" /* 4861 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/hooks/useIsFavoritesGuildVisible.tsx");

export default function useIsFavoritesGuildVisible() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  const items = [FavoriteStore, SelectedGuildStore];
  const items1 = [flag];
  return flag(504).useStateFromStores(items, () => {
    let tmp2 = !flag;
    if (flag) {
      tmp2 = !FavoritesUtils.isFavoritesGuildId(SelectedGuildStore.getGuildId());
    }
    let favoriteGuildEnabled = !tmp2;
    if (tmp2) {
      favoriteGuildEnabled = FavoriteStore.favoriteGuildEnabled;
    }
    return favoriteGuildEnabled;
  }, items1);
};
export function isFavoritesGuildVisible() {
  const isFavoritesGuildIdResult = FavoritesUtils.isFavoritesGuildId(SelectedGuildStore.getGuildId());
  let favoriteGuildEnabled = isFavoritesGuildIdResult;
  if (!isFavoritesGuildIdResult) {
    favoriteGuildEnabled = FavoriteStore.favoriteGuildEnabled;
  }
  return favoriteGuildEnabled;
}