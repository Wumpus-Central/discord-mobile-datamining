// discord_app/modules/favorites/hooks/useIsFavoritesGuildVisible.tsx
import getFavoritesAwareGuildName from "../FavoritesUtils.tsx";
import useFavoritesAccess from "../FavoritesHooks.tsx";
import hasOfferedFavoritesGuildOnboarding from "../onboarding/FavoritesGuildIntroPopover.tsx";
import handleConnectionOpen from "../../../stores/SelectedGuildStore.tsx";
import initializeFromUserSettings from "../FavoriteStore.tsx";

require = fn;
function computeIsFavoritesGuildVisible(closure_3, closure_2, isExperimentEnabled) {
  ({ isFreemium, hasAccess, isIntroPopoverShown, keepWhileViewing } = isExperimentEnabled);
  isExperimentEnabled = isExperimentEnabled.isExperimentEnabled;
  if (isExperimentEnabled) {
    let tmp2 = !keepWhileViewing;
    if (keepWhileViewing) {
      tmp2 = !getFavoritesAwareGuildName.isFavoritesGuildId(guildId.getGuildId());
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
const result = require("obj132").fileFinishedImporting("modules/favorites/hooks/useIsFavoritesGuildVisible.tsx");

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
  return flag(isExperimentEnabled[5]).useStateFromStores(items, () => isFavoritesIntroPopoverShown(hasAccess, isFreemium, { isExperimentEnabled, isFreemium, hasAccess, isIntroPopoverShown: isFavoritesIntroPopoverShown, keepWhileViewing: flag }), items1);
};
export const isFavoritesGuildVisible = function isFavoritesGuildVisible() {
  let obj = useFavoritesAccess;
  const favoritesAccess = obj.getFavoritesAccess();
  obj = { isExperimentEnabled: favoritesAccess.isExperimentEnabled, isFreemium: favoritesAccess.isFreemium, hasAccess: favoritesAccess.hasAccess, isIntroPopoverShown: hasOfferedFavoritesGuildOnboarding.isFavoritesIntroPopoverShown(), keepWhileViewing: true };
  return computeIsFavoritesGuildVisible(closure_3, closure_2, obj);
};