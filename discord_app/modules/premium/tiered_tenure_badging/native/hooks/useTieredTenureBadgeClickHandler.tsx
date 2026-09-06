// discord_app/modules/premium/tiered_tenure_badging/native/hooks/useTieredTenureBadgeClickHandler.tsx
import AnalyticsUtilsDefault from "../../../../../utils/AnalyticsUtils.tsx";
import asyncRequireImpl from "../../../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import openUserSettings from "../../../../user_settings/core/native/openUserSettings.tsx";
import TieredTenureBadgeActionSheet from "../TieredTenureBadgeActionSheet.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../../stores/UserStore.tsx";

require = fn;
const PremiumTypes = fn(1373).PremiumTypes;
const DEFAULT_PREMIUM_BADGE_ID = fn(8194).DEFAULT_PREMIUM_BADGE_ID;
const Constants = fn(1074);
({ AnalyticEvents: closure_7, UserSettingsSections: closure_8 } = Constants);
const UserProfileThemeTypes = fn(7208).UserProfileThemeTypes;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/premium/tiered_tenure_badging/native/hooks/useTieredTenureBadgeClickHandler.tsx",
);

export const useTieredTenureBadgeClickHandler = function useTieredTenureBadgeClickHandler(id, userId, themeType) {
  _require = id;
  dependencyMap = themeType;
  let isPremiumSubscriber = require("useIsPremiumSubscriber").useIsPremiumSubscriber(PremiumTypes.TIER_2);
  let tmp4 = typeof id === "string";
  if (typeof id === "string") {
    let tmpResult = tmp(7634);
    tmp4 = null != tmpResult.getTieredTenureBadge(id);
  }
  tmpResult = tmp(504);
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
      if (closure_2 === UserProfileThemeTypes.YOU_SCREEN) {
        let obj = { screen: constants2.PREMIUM };
        openUserSettings.openUserSettings(obj);
      } else {
        const tmp4 = asyncRequireImpl(11157, dependencyMap.paths);
        obj = { userId };
        obj.openLazy(tmp4, TieredTenureBadgeActionSheet.TIERED_TENURE_BADGE_ACTION_SHEET_KEY, obj, "stack");
      }
      if (isPremiumSubscriber) {
        const obj1 = { badge, viewed_user_id: userId, premium_type: isPremiumSubscriber };
        AnalyticsUtilsDefault.track(constants.TIERED_TENURE_BADGE_CLICKED, obj1);
      }
    }, items1);
  }
  return callback;
};
