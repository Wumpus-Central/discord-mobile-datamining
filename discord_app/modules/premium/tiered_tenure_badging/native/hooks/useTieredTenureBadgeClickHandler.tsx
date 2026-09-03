// === Module 8955: useTieredTenureBadgeClickHandler ===

// Module 8955 (useTieredTenureBadgeClickHandler)
import closure_3 from "noop" /* 19 */;
import closure_4 from "mergeGuildAvatar" /* 1921 */;
import { PremiumTypes } from "GuildFeatures" /* 1923 */;
import { DEFAULT_PREMIUM_BADGE_ID } from "DEFAULT_PREMIUM_BADGE_ID" /* 8579 */;
import ME from "ME" /* 673 */;
import { UserProfileThemeTypes } from "ARBITRARY_LARGE_OFFSET" /* 6010 */;

const require = arg1;
({ AnalyticEvents: error, UserSettingsSections: closure_8 } = ME);
const result = require("set").fileFinishedImporting("modules/premium/tiered_tenure_badging/native/hooks/useTieredTenureBadgeClickHandler.tsx");

export const useTieredTenureBadgeClickHandler = function useTieredTenureBadgeClickHandler(id, userId, themeType) {
  const _require = id;
  closure_1 = userId;
  dependencyMap = themeType;
  let isPremiumSubscriber = _require(8956).useIsPremiumSubscriber(PremiumTypes.TIER_2);
  let tmp4 = typeof id === "string";
  if (typeof id === "string") {
    let tmpResult = tmp(7389);
    tmp4 = null != tmpResult.getTieredTenureBadge(id);
  }
  tmpResult = tmp(586);
  const items = [isPremiumSubscriber];
  const stateFromStores = tmpResult.useStateFromStores(items, () => isPremiumSubscriber.getCurrentUser());
  if (!tmp4) {
    let tmp7 = id === DEFAULT_PREMIUM_BADGE_ID;
    if (tmp7) {
      id = undefined;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      tmp7 = userId === id;
    }
    if (tmp7) {
      tmp7 = isPremiumSubscriber;
    }
    tmp4 = tmp7;
  }
  isPremiumSubscriber = tmp4;
  const items1 = [themeType, userId, tmp4, id, isPremiumSubscriber];
  let callback = null;
  if (tmp4) {
    callback = isPremiumSubscriber.useCallback(() => {
      if (themeType === closure_1_9.YOU_SCREEN) {
        let obj = { screen: null };
        obj[0] = closure_1_8.PREMIUM;
        id(themeType[9]).openUserSettings(obj);
        let tmp2 = themeType;
        const obj3 = id(themeType[9]);
      } else {
        tmp2 = themeType;
        obj = userId(themeType[10]);
        const tmp4 = id(themeType[12])(themeType[11], themeType.paths);
        obj = { userId: null };
        obj[0] = userId;
        obj.openLazy(tmp4, id(themeType[13]).TIERED_TENURE_BADGE_ACTION_SHEET_KEY, obj, "stack");
      }
      if (isPremiumSubscriber) {
        obj1 = { badge: null, viewed_user_id: null, premium_type: null };
        obj1[0] = id;
        obj1[1] = userId;
        obj1[2] = isPremiumSubscriber;
        userId(tmp2[14]).track(closure_1_7.TIERED_TENURE_BADGE_CLICKED, obj1);
        const obj5 = userId(tmp2[14]);
      }
    }, items1);
  }
  return callback;
};