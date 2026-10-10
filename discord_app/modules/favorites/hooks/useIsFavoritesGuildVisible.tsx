// === Module 15597: useIsFavoritesGuildVisible ===

// Module 15597 (useIsFavoritesGuildVisible)
import FavoritesUtils from "FavoritesUtils" /* 2090 */;
import FavoritesHooks from "FavoritesHooks" /* 10312 */;
import FavoritesGuildIntroPopover from "FavoritesGuildIntroPopover" /* 10326 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4939 */;
import FavoriteStore from "FavoriteStore" /* 2068 */;

const require = globalThis.__r;

require = fn;
function computeIsFavoritesGuildVisible(FavoriteStore, SelectedGuildStore, isExperimentEnabled) {
  ({ isFreemium, hasAccess, isIntroPopoverShown, keepWhileViewing } = isExperimentEnabled);
  isExperimentEnabled = isExperimentEnabled.isExperimentEnabled;
  if (isExperimentEnabled) {
    let tmp2 = !keepWhileViewing;
    if (keepWhileViewing) {
      tmp2 = !FavoritesUtils.isFavoritesGuildId(SelectedGuildStore.getGuildId());
    }
    let tmp6 = !tmp2;
    if (tmp2) {
      let tmp8 = !hasAccess;
      if (hasAccess) {
        tmp8 = false === FavoriteStore.favoriteGuildVisibleSetting;
      }
      let tmp9 = !tmp8;
      if (!tmp8) {
        let favoriteGuildEnabled = FavoriteStore.favoriteGuildEnabled;
        if (!favoriteGuildEnabled) {
          if (isFreemium) {
            if (!isIntroPopoverShown) {
              isIntroPopoverShown = FavoritesGuildIntroPopover.hasOfferedFavoritesGuildOnboarding();
            }
            isFreemium = isIntroPopoverShown;
          }
          favoriteGuildEnabled = isFreemium;
        }
        tmp9 = favoriteGuildEnabled;
      }
      tmp6 = tmp9;
    }
    isExperimentEnabled = tmp6;
  }
  return isExperimentEnabled;
}
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/hooks/useIsFavoritesGuildVisible.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useIsFavoritesGuildVisible(arg0) {
  const cResult = require("c").c(8);
  _require = tmp4;
  const obj = require("c");
  const favoritesAccess = require("FavoritesHooks").useFavoritesAccess();
  isExperimentEnabled = favoritesAccess.isExperimentEnabled;
  const isFreemium = favoritesAccess.isFreemium;
  const hasAccess = favoritesAccess.hasAccess;
  const tmpResult = require("FavoritesHooks");
  const isFavoritesIntroPopoverShown = require("FavoritesGuildIntroPopover").useIsFavoritesIntroPopoverShown();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [hasAccess, isFreemium];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === hasAccess) {
    if (cResult[2] === isExperimentEnabled) {
      if (cResult[3] === isFreemium) {
        if (cResult[4] === isFavoritesIntroPopoverShown) {
          if (cResult[5] === tmp4) {
            let tmp10 = cResult[6];
            let tmp11 = cResult[7];
          }
          return tmp(tmp2[7]).useStateFromStores(first, tmp10, tmp11);
        }
      }
    }
  }
  const fn = function u() {
    return computeIsFavoritesGuildVisible(FavoriteStore, SelectedGuildStore, { isExperimentEnabled, isFreemium, hasAccess, isIntroPopoverShown: isFavoritesIntroPopoverShown, keepWhileViewing });
  };
  const items1 = [isExperimentEnabled, isFreemium, hasAccess, isFavoritesIntroPopoverShown, undefined === arg0 || arg0];
  cResult[1] = hasAccess;
  cResult[2] = isExperimentEnabled;
  cResult[3] = isFreemium;
  cResult[4] = isFavoritesIntroPopoverShown;
  cResult[5] = undefined === arg0 || arg0;
  cResult[6] = fn;
  cResult[7] = items1;
  tmp11 = items1;
  tmp10 = fn;
}) : (function useIsFavoritesGuildVisible() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  let isExperimentEnabled;
  const favoritesAccess = flag(isExperimentEnabled[4]).useFavoritesAccess();
  isExperimentEnabled = favoritesAccess.isExperimentEnabled;
  const isFreemium = favoritesAccess.isFreemium;
  const hasAccess = favoritesAccess.hasAccess;
  const obj = flag(isExperimentEnabled[4]);
  const isFavoritesIntroPopoverShown = flag(isExperimentEnabled[3]).useIsFavoritesIntroPopoverShown();
  const obj2 = flag(isExperimentEnabled[3]);
  const items = [hasAccess, isFreemium];
  const items1 = [isExperimentEnabled, isFreemium, hasAccess, isFavoritesIntroPopoverShown, flag];
  return flag(isExperimentEnabled[7]).useStateFromStores(items, () => computeIsFavoritesGuildVisible(FavoriteStore, SelectedGuildStore, { isExperimentEnabled, isFreemium, hasAccess, isIntroPopoverShown: isFavoritesIntroPopoverShown, keepWhileViewing: flag }), items1);
});
export const isFavoritesGuildVisible = function isFavoritesGuildVisible() {
  const favoritesAccess = FavoritesHooks.getFavoritesAccess();
  const obj2 = { isExperimentEnabled: favoritesAccess.isExperimentEnabled, isFreemium: favoritesAccess.isFreemium, hasAccess: favoritesAccess.hasAccess, isIntroPopoverShown: null, keepWhileViewing: true };
  obj2.isIntroPopoverShown = FavoritesGuildIntroPopover.isFavoritesIntroPopoverShown();
  return computeIsFavoritesGuildVisible(FavoriteStore, SelectedGuildStore, obj2);
};