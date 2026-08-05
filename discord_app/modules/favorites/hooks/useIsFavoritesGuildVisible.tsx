// discord_app/modules/favorites/hooks/useIsFavoritesGuildVisible.tsx
import handleConnectionOpen from "handleConnectionOpen";
import initializeFromUserSettings from "initializeFromUserSettings";

const require = arg1;
let result = require("getFavoritesAwareGuildName").fileFinishedImporting("modules/favorites/hooks/useIsFavoritesGuildVisible.tsx");

export default function useIsFavoritesGuildVisible(FavoritesGuildChannelList) {
  const favoritesAccess = isExperimentEnabled(isFreemium[4]).useFavoritesAccess(FavoritesGuildChannelList);
  isExperimentEnabled = favoritesAccess.isExperimentEnabled;
  isFreemium = favoritesAccess.isFreemium;
  const hasAccess = favoritesAccess.hasAccess;
  const obj = isExperimentEnabled(isFreemium[4]);
  const isFavoritesIntroPopoverShown = isExperimentEnabled(isFreemium[5]).useIsFavoritesIntroPopoverShown();
  let obj2 = isExperimentEnabled(isFreemium[5]);
  const items = [isFavoritesIntroPopoverShown, hasAccess];
  const items1 = [isExperimentEnabled, isFreemium, hasAccess, isFavoritesIntroPopoverShown];
  return isExperimentEnabled(isFreemium[6]).useStateFromStores(items, () => {
    let tmp4 = isExperimentEnabled;
    if (tmp4) {
      let tmp5 = isFavoritesIntroPopoverShown;
      if (!tmp5) {
        let isFavoritesGuildIdResult = isExperimentEnabled(isFreemium[2]).isFavoritesGuildId(hasAccess.getGuildId());
        if (!isFavoritesGuildIdResult) {
          let isFavoritesGuildEnabled = tmp3;
          if (isFavoritesGuildEnabled) {
            isFavoritesGuildEnabled = tmp6(tmp7[3]).computeIsFavoritesGuildEnabled(tmp2, tmp);
            const tmp6Result = tmp6(tmp7[3]);
          }
          isFavoritesGuildIdResult = isFavoritesGuildEnabled;
        }
        tmp5 = isFavoritesGuildIdResult;
        const obj2 = isExperimentEnabled(isFreemium[2]);
        tmp6 = isExperimentEnabled;
        tmp7 = isFreemium;
      }
      tmp4 = tmp5;
    }
    return tmp4;
  }, items1);
};
export const isFavoritesGuildVisible = function isFavoritesGuildVisible() {
  let hasAccess;
  let isExperimentEnabled;
  let isFreemium;
  const favoritesAccess = require("../FavoritesHooks.tsx") /* useFavoritesAccess */.getFavoritesAccess();
  ({ isExperimentEnabled, isFreemium, hasAccess } = favoritesAccess);
  const obj = require("../FavoritesHooks.tsx") /* useFavoritesAccess */;
  const obj2 = handleConnectionOpen;
  const tmp4 = initializeFromUserSettings;
  let tmp5 = isExperimentEnabled;
  if (tmp5) {
    let result = obj3.isFavoritesIntroPopoverShown();
    if (!result) {
      let tmpResult = tmp(1865);
      let isFavoritesGuildIdResult = tmpResult.isFavoritesGuildId(obj2.getGuildId());
      if (!isFavoritesGuildIdResult) {
        let isFavoritesGuildEnabled = hasAccess;
        if (isFavoritesGuildEnabled) {
          tmpResult = tmp(9636);
          isFavoritesGuildEnabled = tmpResult.computeIsFavoritesGuildEnabled(isFreemium, tmp4);
        }
        isFavoritesGuildIdResult = isFavoritesGuildEnabled;
      }
      result = isFavoritesGuildIdResult;
    }
    tmp5 = result;
  }
  return tmp5;
};