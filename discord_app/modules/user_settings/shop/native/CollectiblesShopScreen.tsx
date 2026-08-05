// discord_app/modules/user_settings/shop/native/CollectiblesShopScreen.tsx
import "noop";
import { CollectiblesMobileShopScreen as closure_3 } from "items";
import { jsx } from "jsxProd";
import { QUICK_SWITCHER } from "../../../app_analytics/AnalyticsLocation.tsx";
import { useGiftCardMobileConsumptionHalfsheet } from "../../../checkout/native/useGiftCardMobileConsumptionHalfsheet.tsx";
import { useShopOrientationLock } from "../../../collectibles/native/useShopOrientationLock.tsx";
import { useSettingNavigationRoute } from "../../core/native/useSettingNavigationRoute.tsx";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/shop/native/CollectiblesShopScreen.tsx");

export default function CollectiblesShopScreen() {
  let obj = useSettingNavigationRoute /* useSettingNavigationRoute */;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  const shopOrientationLock = useShopOrientationLock /* useShopOrientationLock */.useShopOrientationLock();
  const obj2 = useShopOrientationLock /* useShopOrientationLock */;
  const tmp = require;
  const giftCardMobileConsumptionHalfsheet = useGiftCardMobileConsumptionHalfsheet /* useGiftCardMobileConsumptionHalfsheet */.useGiftCardMobileConsumptionHalfsheet();
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
    analyticsSource = QUICK_SWITCHER.COLLECTIBLES_SHOP;
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