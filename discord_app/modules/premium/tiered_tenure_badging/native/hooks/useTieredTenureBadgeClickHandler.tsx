// === Module 14081: useTieredTenureBadgeClickHandler ===

// Module 14081 (useTieredTenureBadgeClickHandler)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1255 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5008 */;
import openUserSettings from "openUserSettings" /* 8074 */;
import TieredTenureBadgeActionSheet from "TieredTenureBadgeActionSheet" /* 13899 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1386 */;

const require = globalThis.__r;

require = fn;
const PremiumTypes = fn(1388).PremiumTypes;
const DEFAULT_PREMIUM_BADGE_ID = fn(8019).DEFAULT_PREMIUM_BADGE_ID;
const Constants = fn(1071);
({ AnalyticEvents: metroImportDefault, UserSettingsSections: closure_8 } = Constants);
const UserProfileThemeTypes = fn(7444).UserProfileThemeTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/tiered_tenure_badging/native/hooks/useTieredTenureBadgeClickHandler.tsx");

export function useTieredTenureBadgeClickHandler(id, userId, themeType) {
  _require = id;
  dependencyMap = themeType;
  const isPremiumSubscriber = require("useIsPremiumSubscriber").useIsPremiumSubscriber(PremiumTypes.TIER_2);
  let obj = require("useIsPremiumSubscriber");
  let tmp5 = typeof id === "string";
  let canUseTenureBadge = require("useCanUseTenureBadge").useCanUseTenureBadge();
  if (typeof id === "string") {
    tmp5 = null != tmp(6844).getTieredTenureBadge(id);
    const tmpResult = tmp(6844);
  }
  let obj2 = require("useCanUseTenureBadge");
  items = [canUseTenureBadge];
  const stateFromStores = require("initialize").useStateFromStores(items, () => canUseTenureBadge.getCurrentUser());
  if (!tmp5) {
    let tmp8 = id === DEFAULT_PREMIUM_BADGE_ID;
    if (tmp8) {
      id = undefined;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      tmp8 = userId === id;
    }
    if (tmp8) {
      tmp8 = canUseTenureBadge;
    }
    tmp5 = tmp8;
  }
  canUseTenureBadge = tmp5;
  const items1 = [themeType, userId, tmp5, id, isPremiumSubscriber];
  let callback = null;
  if (tmp5) {
    callback = isPremiumSubscriber.useCallback(() => {
      if (closure_2 === UserProfileThemeTypes.YOU_SCREEN) {
        const obj2 = { screen: constants2.PREMIUM };
        openUserSettings.openUserSettings(obj2);
      } else {
        const obj = ActionSheetActionCreatorsDefault;
        const tmp4 = asyncRequireImpl(13899, dependencyMap.paths);
        const obj4 = { userId };
        obj.openLazy(tmp4, TieredTenureBadgeActionSheet.TIERED_TENURE_BADGE_ACTION_SHEET_KEY, obj4, "stack");
      }
      if (canUseTenureBadge) {
        const obj6 = { badge, viewed_user_id: userId, premium_type: isPremiumSubscriber };
        AnalyticsUtilsDefault.track(constants.TIERED_TENURE_BADGE_CLICKED, obj6);
      }
    }, items1);
  }
  return callback;
}