// === Module 17579: useIsFavoritesGuildVisible ===

// Module 17579 (useIsFavoritesGuildVisible)
import FavoritesUtils from "FavoritesUtils" /* 5044 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5201 */;
import FavoriteStore from "FavoriteStore" /* 5022 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/hooks/useIsFavoritesGuildVisible.tsx");

export default function useIsFavoritesGuildVisible() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  items = [FavoriteStore, SelectedGuildStore];
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