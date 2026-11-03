// === Module 18345: useFavoritesGuildCategories ===

// Module 18345 (useFavoritesGuildCategories)
import initialize from "initialize" /* 504 */;
import FavoritesHooks from "FavoritesHooks" /* 10962 */;
import FavoriteStore from "FavoriteStore" /* 4993 */;

require = fn;
function areCategoriesEqual(arr, arg1) {
  closure_0 = arg1;
  return arr.length === arg1.length && arr.every((id, index) => id.id === closure_0[index].id && id.name === tmp[index].name);
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildCategories.tsx");

export default function useFavoritesGuildCategories() {
  items = [FavoriteStore];
  return initialize.useStateFromStores(items, () => FavoritesHooks.getFavoritesCategories(favoriteChannels.getFavoriteChannels()), [], areCategoriesEqual);
};