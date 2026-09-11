// === Module 15871: CollectiblesShopSetting ===

// Module 15871 (CollectiblesShopSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7255 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7614 */;
import ShopIcon from "ShopIcon" /* 12231 */;
import SettingBuilders from "SettingBuilders" /* 11562 */;
import size from "module_2" /* 2 */;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.pWG4ze);
  },
  parent: null,
  IconComponent: ShopIcon.ShopIcon,
  screen: {
    route: Constants.UserSettingsSections.COLLECTIBLES_SHOP,
    getComponent() {
      return require("CollectiblesShopScreen").default;
    }
  },
  usePreNavigationAction() {
    return () => {
      const obj = { analyticsLocations: null, analyticsSource: null };
      const items = [AnalyticsLocationDefault.USER_SETTINGS];
      obj.analyticsLocations = items;
      obj.analyticsSource = AnalyticsLocationDefault.USER_SETTINGS;
      const result = obj.openCollectiblesShopMobile(obj);
      return false;
    };
  }
});
let result = size.fileFinishedImporting("modules/user_settings/defs/native/CollectiblesShopSetting.tsx");

export default route;