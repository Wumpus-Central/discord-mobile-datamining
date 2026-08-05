// discord_app/modules/user_settings/defs/native/CollectiblesShopSetting.tsx
import createToggle from "createToggle";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { CollectiblesShopScreen } from "../../shop/native/CollectiblesShopScreen.tsx";

obj = {
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t.pWG4ze);
  },
  parent: null,
  IconComponent: require("ShopIcon").ShopIcon,
  screen: obj,
  usePreNavigationAction() {
    return () => {
      let obj = callback(6909);
      obj = { analyticsLocations: null, analyticsSource: null };
      const items = [callback2(5630).USER_SETTINGS];
      obj[0] = items;
      obj[1] = callback2(5630).USER_SETTINGS;
      const result = obj.openCollectiblesShopMobile(obj);
      return false;
    };
  }
};
obj = {
  route: require("ME").UserSettingsSections.COLLECTIBLES_SHOP,
  getComponent() {
    return CollectiblesShopScreen /* CollectiblesShopScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
let result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/CollectiblesShopSetting.tsx");

export default route;