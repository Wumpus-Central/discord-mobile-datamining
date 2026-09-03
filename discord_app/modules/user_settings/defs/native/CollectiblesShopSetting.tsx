// === Module 15646: route ===

// Module 15646 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import ShopIcon from "ShopIcon" /* 11938 */;
import createToggle from "createToggle" /* 11292 */;

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.pWG4ze);
  },
  parent: null,
  IconComponent: ShopIcon.ShopIcon,
  screen: obj,
  usePreNavigationAction() {
    return () => {
      let obj = callback(7296);
      obj = { analyticsLocations: null, analyticsSource: null };
      const items = [callback2(5982).USER_SETTINGS];
      obj[0] = items;
      obj[1] = callback2(5982).USER_SETTINGS;
      const result = obj.openCollectiblesShopMobile(obj);
      return false;
    };
  }
};
obj = {
  route: ME.UserSettingsSections.COLLECTIBLES_SHOP,
  getComponent() {
    return require(15647) /* CollectiblesShopScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
let result = set.fileFinishedImporting("modules/user_settings/defs/native/CollectiblesShopSetting.tsx");

export default route;