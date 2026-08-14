// discord_app/modules/favorites/hooks/useIsFavoritesGuildVisible.tsx
import handleConnectionOpen from "handleConnectionOpen";
import initializeFromUserSettings from "initializeFromUserSettings";
import { useFavoritesAccess } from "../FavoritesHooks.tsx";
import { getFavoritesAwareGuildName } from "../FavoritesUtils.tsx";
import { hasOfferedFavoritesGuildOnboarding } from "../onboarding/FavoritesGuildIntroPopover.tsx";

const require = arg1;
function computeIsFavoritesGuildVisible(initializeFromUserSettings, handleConnectionOpen, isExperimentEnabled) {
  let hasAccess;
  let isFreemium;
  let isIntroPopoverShown;
  let keepWhileViewing;
  ({ isFreemium, hasAccess, isIntroPopoverShown, keepWhileViewing } = isExperimentEnabled);
  isExperimentEnabled = isExperimentEnabled.isExperimentEnabled;
  if (isExperimentEnabled) {
    let tmp2 = !keepWhileViewing;
    if (keepWhileViewing) {
      tmp2 = !getFavoritesAwareGuildName.isFavoritesGuildId(handleConnectionOpen.getGuildId());
      const obj = getFavoritesAwareGuildName;
    }
    let tmp6 = !tmp2;
    if (tmp2) {
      let tmp8 = !hasAccess;
      if (hasAccess) {
        tmp8 = false === initializeFromUserSettings.favoriteGuildVisibleSetting;
      }
      let tmp9 = !tmp8;
      if (!tmp8) {
        let favoriteGuildEnabled = initializeFromUserSettings.favoriteGuildEnabled;
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
const result = require("getFavoritesAwareGuildName").fileFinishedImporting("modules/favorites/hooks/useIsFavoritesGuildVisible.tsx");

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
  obj = { isExperimentEnabled: favoritesAccess.isExperimentEnabled, isFreemium: favoritesAccess.isFreemium, hasAccess: favoritesAccess.hasAccess, isIntroPopoverShown: null, keepWhileViewing: true };
  obj[3] = hasOfferedFavoritesGuildOnboarding.isFavoritesIntroPopoverShown();
  return computeIsFavoritesGuildVisible(initializeFromUserSettings, handleConnectionOpen, obj);
};