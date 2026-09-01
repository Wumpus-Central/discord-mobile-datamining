// discord_app/modules/user_settings/shop/native/CollectiblesShopScreen.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import QUICK_SWITCHERDefault from "../../../app_analytics/AnalyticsLocation.tsx";
import useGiftCardMobileConsumptionHalfsheet from "../../../checkout/native/useGiftCardMobileConsumptionHalfsheet.tsx";
import useSettingNavigationRoute from "../../core/native/useSettingNavigationRoute.tsx";
import useShopOrientationLock from "../../../collectibles/native/useShopOrientationLock.tsx";
import CollectiblesShopInternal from "../../../collectibles/native/CollectiblesShopV2.tsx";
import { CollectiblesMobileShopScreen as closure_3 } from "../../../collectibles/CollectiblesShopConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/user_settings/shop/native/CollectiblesShopScreen.tsx");

export default function CollectiblesShopScreen() {
  let obj = useSettingNavigationRoute;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  const shopOrientationLock = useShopOrientationLock.useShopOrientationLock();
  const obj2 = useShopOrientationLock;
  const tmp = require;
  const giftCardMobileConsumptionHalfsheet =
    useGiftCardMobileConsumptionHalfsheet.useGiftCardMobileConsumptionHalfsheet();
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
}
