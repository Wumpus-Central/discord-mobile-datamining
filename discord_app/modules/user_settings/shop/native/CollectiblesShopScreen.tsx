// === Module 15805: CollectiblesShopScreen ===

// Module 15805 (CollectiblesShopScreen)
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 6994 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7182 */;
import useGiftCardMobileConsumptionHalfsheet from "useGiftCardMobileConsumptionHalfsheet" /* 7385 */;
import useShopOrientationLock from "useShopOrientationLock" /* 15806 */;
import CollectiblesShopV2 from "CollectiblesShopV2" /* 15807 */;
import noop from "module_19" /* 19 */;

require = fn;
const constants = fn(1076).CollectiblesMobileShopScreen;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/shop/native/CollectiblesShopScreen.tsx");

export default function CollectiblesShopScreen() {
  let obj = useSettingNavigationRoute;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  const shopOrientationLock = useShopOrientationLock.useShopOrientationLock();
  const giftCardMobileConsumptionHalfsheet = useGiftCardMobileConsumptionHalfsheet.useGiftCardMobileConsumptionHalfsheet();
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
    analyticsSource = AnalyticsLocationDefault.COLLECTIBLES_SHOP;
  }
  obj = { analyticsSource, screen, onNavigateAway: null };
  const params3 = settingNavigationRoute.params;
  let onNavigateAway;
  if (params3 != null) {
    onNavigateAway = params3.onNavigateAway;
  }
  obj.onNavigateAway = onNavigateAway;
  return jsx(CollectiblesShopV2.CollectiblesShopV2, { analyticsSource, screen, onNavigateAway: null });
};