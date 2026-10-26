// === Module 16683: useIsFavoritesGuildVisible ===

// Module 16683 (useIsFavoritesGuildVisible)
import FavoritesUtils from "FavoritesUtils" /* 4848 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5002 */;
import FavoriteStore from "FavoriteStore" /* 4826 */;

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/hooks/useIsFavoritesGuildVisible.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useIsFavoritesGuildVisible(arg0) {
  const cResult = require("c").c(4);
  _require = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FavoriteStore, SelectedGuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== (undefined === arg0 || arg0)) {
    const fn = function l() {
      let tmp2 = !closure_0;
      if (closure_0) {
        tmp2 = !FavoritesUtils.isFavoritesGuildId(SelectedGuildStore.getGuildId());
      }
      let favoriteGuildEnabled = !tmp2;
      if (tmp2) {
        favoriteGuildEnabled = FavoriteStore.favoriteGuildEnabled;
      }
      return favoriteGuildEnabled;
    };
    const items1 = [tmp4];
    cResult[1] = tmp4;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp9 = items1;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp8, tmp9);
}) : (function useIsFavoritesGuildVisible() {
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
});
export const isFavoritesGuildVisible = function isFavoritesGuildVisible() {
  const isFavoritesGuildIdResult = FavoritesUtils.isFavoritesGuildId(SelectedGuildStore.getGuildId());
  let favoriteGuildEnabled = isFavoritesGuildIdResult;
  if (!isFavoritesGuildIdResult) {
    favoriteGuildEnabled = FavoriteStore.favoriteGuildEnabled;
  }
  return favoriteGuildEnabled;
};