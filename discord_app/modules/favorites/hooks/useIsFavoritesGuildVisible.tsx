// === Module 14842: computeIsFavoritesGuildVisible ===

// Module 14842 (computeIsFavoritesGuildVisible)
import getFavoritesAwareGuildName from "getFavoritesAwareGuildName" /* 1913 */;
import useFavoritesAccess from "useFavoritesAccess" /* 9927 */;
import hasOfferedFavoritesGuildOnboarding from "hasOfferedFavoritesGuildOnboarding" /* 9936 */;
import closure_2 from "handleConnectionOpen" /* 4266 */;
import closure_3 from "initializeFromUserSettings" /* 1394 */;

require = arg1;
function computeIsFavoritesGuildVisible(closure_3, closure_2, isExperimentEnabled) {
  ({ isFreemium, hasAccess, isIntroPopoverShown, keepWhileViewing } = isExperimentEnabled);
  isExperimentEnabled = isExperimentEnabled.isExperimentEnabled;
  if (isExperimentEnabled) {
    let tmp2 = !keepWhileViewing;
    if (keepWhileViewing) {
      tmp2 = !getFavoritesAwareGuildName.isFavoritesGuildId(closure_2.getGuildId());
      const obj = getFavoritesAwareGuildName;
    }
    let tmp6 = !tmp2;
    if (tmp2) {
      let tmp8 = !hasAccess;
      if (hasAccess) {
        tmp8 = false === closure_3.favoriteGuildVisibleSetting;
      }
      let tmp9 = !tmp8;
      if (!tmp8) {
        let favoriteGuildEnabled = closure_3.favoriteGuildEnabled;
        if (!favoriteGuildEnabled) {
          if (isFreemium) {
            if (!isIntroPopoverShown) {
              isIntroPopoverShown = hasOfferedFavoritesGuildOnboarding.hasOfferedFavoritesGuildOnboarding();
              const obj2 = hasOfferedFavoritesGuildOnboarding;
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
const result = require("set").fileFinishedImporting("modules/favorites/hooks/useIsFavoritesGuildVisible.tsx");

export default function useIsFavoritesGuildVisible() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  let isExperimentEnabled;
  let isFreemium;
  let hasAccess;
  let isFavoritesIntroPopoverShown;
  const favoritesAccess = flag(isExperimentEnabled[4]).useFavoritesAccess();
  isExperimentEnabled = favoritesAccess.isExperimentEnabled;
  isFreemium = favoritesAccess.isFreemium;
  hasAccess = favoritesAccess.hasAccess;
  const obj = flag(isExperimentEnabled[4]);
  isFavoritesIntroPopoverShown = flag(isExperimentEnabled[3]).useIsFavoritesIntroPopoverShown();
  const obj2 = flag(isExperimentEnabled[3]);
  const items = [hasAccess, isFreemium];
  const items1 = [isExperimentEnabled, isFreemium, hasAccess, isFavoritesIntroPopoverShown, flag];
  return flag(isExperimentEnabled[5]).useStateFromStores(items, () => isFavoritesIntroPopoverShown(hasAccess, isFreemium, { isExperimentEnabled, isFreemium, hasAccess, isIntroPopoverShown: isFavoritesIntroPopoverShown, keepWhileViewing: flag }), items1);
};
export const isFavoritesGuildVisible = function isFavoritesGuildVisible() {
  let obj = useFavoritesAccess;
  const favoritesAccess = obj.getFavoritesAccess();
  obj = { isExperimentEnabled: favoritesAccess.isExperimentEnabled, isFreemium: favoritesAccess.isFreemium, hasAccess: favoritesAccess.hasAccess, isIntroPopoverShown: hasOfferedFavoritesGuildOnboarding.isFavoritesIntroPopoverShown(), keepWhileViewing: true };
  return computeIsFavoritesGuildVisible(closure_3, closure_2, obj);
};