// discord_app/modules/favorites/hooks/useIsFavoritesGuildVisible.tsx
import FavoritesUtils from "../FavoritesUtils.tsx";
import SelectedGuildStore from "../../../stores/SelectedGuildStore.tsx";
import FavoriteStore from "../FavoriteStore.tsx";

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
  return flag(504).useStateFromStores(
    items,
    () => {
      let tmp2 = !flag;
      if (flag) {
        tmp2 = !FavoritesUtils.isFavoritesGuildId(SelectedGuildStore.getGuildId());
      }
      let favoriteGuildEnabled = !tmp2;
      if (tmp2) {
        favoriteGuildEnabled = FavoriteStore.favoriteGuildEnabled;
      }
      return favoriteGuildEnabled;
    },
    items1,
  );
}
export function isFavoritesGuildVisible() {
  const isFavoritesGuildIdResult = FavoritesUtils.isFavoritesGuildId(SelectedGuildStore.getGuildId());
  let favoriteGuildEnabled = isFavoritesGuildIdResult;
  if (!isFavoritesGuildIdResult) {
    favoriteGuildEnabled = FavoriteStore.favoriteGuildEnabled;
  }
  return favoriteGuildEnabled;
}
