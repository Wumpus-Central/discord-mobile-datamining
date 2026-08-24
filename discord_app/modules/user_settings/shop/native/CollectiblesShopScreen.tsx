// === Module 14949: CollectiblesShopScreen ===

// Module 14949 (CollectiblesShopScreen)
import noopAll from "noop" /* 19 */;
import QUICK_SWITCHERDefault from "QUICK_SWITCHER" /* 7159 */;
import useGiftCardMobileConsumptionHalfsheet from "useGiftCardMobileConsumptionHalfsheet" /* 7363 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 7385 */;
import useShopOrientationLock from "useShopOrientationLock" /* 14950 */;
import CollectiblesShopInternal from "CollectiblesShopInternal" /* 14951 */;
import { CollectiblesMobileShopScreen as closure_3 } from "items" /* 678 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/user_settings/shop/native/CollectiblesShopScreen.tsx");

export default function CollectiblesShopScreen() {
  let obj = useSettingNavigationRoute;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  const shopOrientationLock = useShopOrientationLock.useShopOrientationLock();
  const obj2 = useShopOrientationLock;
  const tmp = require;
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
    analyticsSource = QUICK_SWITCHERDefault.COLLECTIBLES_SHOP;
  }
  obj = { analyticsSource, screen, onNavigateAway: null };
  const params3 = settingNavigationRoute.params;
  let onNavigateAway;
  if (params3 != null) {
    onNavigateAway = params3.onNavigateAway;
  }
  obj[2] = onNavigateAway;
  return jsx(CollectiblesShopInternal.CollectiblesShopV2, { analyticsSource, screen, onNavigateAway: null });
};