// === Module 15325: useIsFavoritesGuildVisible ===

// Module 15325 (useIsFavoritesGuildVisible)
import FavoritesUtils from "FavoritesUtils" /* 1982 */;
import FavoritesHooks from "FavoritesHooks" /* 10224 */;
import FavoritesGuildIntroPopover from "FavoritesGuildIntroPopover" /* 10238 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4381 */;
import FavoriteStore from "FavoriteStore" /* 1960 */;

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
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/hooks/useIsFavoritesGuildVisible.tsx");

export default function useIsFavoritesGuildVisible() {
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
  return flag(isExperimentEnabled[5]).useStateFromStores(items, () => computeIsFavoritesGuildVisible(FavoriteStore, SelectedGuildStore, { isExperimentEnabled, isFreemium, hasAccess, isIntroPopoverShown: isFavoritesIntroPopoverShown, keepWhileViewing: flag }), items1);
};
export const isFavoritesGuildVisible = function isFavoritesGuildVisible() {
  let obj = FavoritesHooks;
  const favoritesAccess = obj.getFavoritesAccess();
  obj = { isExperimentEnabled: favoritesAccess.isExperimentEnabled, isFreemium: favoritesAccess.isFreemium, hasAccess: favoritesAccess.hasAccess, isIntroPopoverShown: FavoritesGuildIntroPopover.isFavoritesIntroPopoverShown(), keepWhileViewing: true };
  return computeIsFavoritesGuildVisible(FavoriteStore, SelectedGuildStore, obj);
};