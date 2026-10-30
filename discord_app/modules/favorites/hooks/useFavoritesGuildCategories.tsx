// discord_app/modules/favorites/hooks/useFavoritesGuildCategories.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import FavoritesHooks from "../FavoritesHooks.tsx";
import FavoriteStore from "../FavoriteStore.tsx";

require = fn;
function areCategoriesEqual(arr, arg1) {
  closure_0 = arg1;
  return (
    arr.length === arg1.length && arr.every((id, index) => id.id === closure_0[index].id && id.name === tmp[index].name)
  );
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildCategories.tsx");

export default function useFavoritesGuildCategories() {
  const items = [FavoriteStore];
  return initialize.useStateFromStores(
    items,
    () => FavoritesHooks.getFavoritesCategories(favoriteChannels.getFavoriteChannels()),
    [],
    areCategoriesEqual,
  );
}
