// === Module 15897: CollectiblesShopSetting ===

// Module 15897 (CollectiblesShopSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7285 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7644 */;
import ShopIcon from "ShopIcon" /* 12268 */;
import SettingBuilders from "SettingBuilders" /* 11602 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

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
      const obj2 = { analyticsLocations: null, analyticsSource: null };
      const items = [AnalyticsLocationDefault.USER_SETTINGS];
      obj2.analyticsLocations = items;
      obj2.analyticsSource = AnalyticsLocationDefault.USER_SETTINGS;
      const result = CollectiblesActionCreators.openCollectiblesShopMobile(obj2);
      return false;
    };
  }
});
let result = size.fileFinishedImporting("modules/user_settings/defs/native/CollectiblesShopSetting.tsx");

export default route;