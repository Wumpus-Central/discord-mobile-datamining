// discord_app/modules/user_settings/defs/native/CollectiblesShopSetting.tsx
import Constants from "../../../../Constants.tsx";
import util from "../../../../intl/index.native.tsx";
import AnalyticsLocationDefault from "../../../app_analytics/AnalyticsLocation.tsx";
import CollectiblesActionCreators from "../../../collectibles/CollectiblesActionCreators.tsx";
import ShopIcon from "../../../../design/components/Icon/native/redesign/generated/ShopIcon.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

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
    },
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
  },
});
let result = size.fileFinishedImporting("modules/user_settings/defs/native/CollectiblesShopSetting.tsx");

export default route;
