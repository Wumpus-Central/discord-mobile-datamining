// === Module 17569: useFavoritesGuildCategories ===

// Module 17569 (useFavoritesGuildCategories)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import FavoritesHooks from "FavoritesHooks" /* 10845 */;
import FavoriteStore from "FavoriteStore" /* 4826 */;

require = fn;
function areCategoriesEqual(arr, arg1) {
  closure_0 = arg1;
  return arr.length === arg1.length && arr.every((id, index) => id.id === closure_0[index].id && id.name === tmp[index].name);
}
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildCategories.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useFavoritesGuildCategories() {
  const cResult = c.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FavoriteStore];
    const fn = function s() {
      return FavoritesHooks.getFavoritesCategories(favoriteChannels.getFavoriteChannels());
    };
    const items1 = [];
    cResult[0] = items;
    cResult[1] = fn;
    cResult[2] = items1;
    tmp4 = items;
    tmp5 = fn;
    tmp6 = items1;
  } else {
    [tmp4, tmp5, tmp6] = cResult;
  }
  return initialize.useStateFromStores(tmp4, tmp5, tmp6, areCategoriesEqual);
}) : (function useFavoritesGuildCategories() {
  const items = [FavoriteStore];
  return initialize.useStateFromStores(items, () => FavoritesHooks.getFavoritesCategories(favoriteChannels.getFavoriteChannels()), [], areCategoriesEqual);
});