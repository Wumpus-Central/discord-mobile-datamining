// discord_app/modules/user_settings/defs/native/CollectiblesShopSetting.tsx
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import ShopIcon from "ShopIcon" /* 11316 */;
import createToggle from "createToggle" /* 10669 */;
import { CollectiblesShopScreen } from "../../shop/native/CollectiblesShopScreen.tsx";

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
      let obj = callback(5300);
      obj = { analyticsLocations: null, analyticsSource: null };
      const items = [callback2(7159).USER_SETTINGS];
      obj[0] = items;
      obj[1] = callback2(7159).USER_SETTINGS;
      const result = obj.openCollectiblesShopMobile(obj);
      return false;
    };
  }
};
obj = {
  route: ME.UserSettingsSections.COLLECTIBLES_SHOP,
  getComponent() {
    return CollectiblesShopScreen.default;
  }
};
const route = createToggle.createRoute(obj);
let result = set.fileFinishedImporting("modules/user_settings/defs/native/CollectiblesShopSetting.tsx");

export default route;