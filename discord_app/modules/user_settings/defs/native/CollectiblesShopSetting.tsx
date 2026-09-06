// === Module 15804: CollectiblesShopSetting ===

// Module 15804 (CollectiblesShopSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7182 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7541 */;
import ShopIcon from "ShopIcon" /* 12138 */;
import SettingBuilders from "SettingBuilders" /* 11468 */;
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