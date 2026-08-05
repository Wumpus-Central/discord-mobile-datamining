// discord_app/modules/user_settings/shop/native/CollectiblesShopScreen.tsx
import "noop";
import { CollectiblesMobileShopScreen as closure_3 } from "items";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/shop/native/CollectiblesShopScreen.tsx");

export default function CollectiblesShopScreen() {
  let obj = require("../../core/native/useSettingNavigationRoute.tsx") /* useSettingNavigationRoute */;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  const shopOrientationLock = require("../../../collectibles/native/useShopOrientationLock.tsx") /* useShopOrientationLock */.useShopOrientationLock();
  const obj2 = require("../../../collectibles/native/useShopOrientationLock.tsx") /* useShopOrientationLock */;
  const tmp = require;
  const giftCardMobileConsumptionHalfsheet = require("../../../checkout/native/useGiftCardMobileConsumptionHalfsheet.tsx") /* useGiftCardMobileConsumptionHalfsheet */.useGiftCardMobileConsumptionHalfsheet();
  const params = settingNavigationRoute.params;
  let screen;
  if (params != null) {
    screen = params.screen;
  }
  if (screen == null) {
    screen = constants.FEATURED_PAGE;
  }
  const params2 = settingNavigationRoute.params;
  let analyticsSource;
  if (params2 != null) {
    analyticsSource = params2.analyticsSource;
  }
  if (analyticsSource == null) {
    analyticsSource = require("../../../app_analytics/AnalyticsLocation.tsx").COLLECTIBLES_SHOP;
  }
  obj = { analyticsSource, screen, onNavigateAway: null };
  const params3 = settingNavigationRoute.params;
  let onNavigateAway;
  if (params3 != null) {
    onNavigateAway = params3.onNavigateAway;
  }
  obj[2] = onNavigateAway;
  return jsx(tmp(14723).CollectiblesShopV2, { analyticsSource, screen, onNavigateAway: null });
};