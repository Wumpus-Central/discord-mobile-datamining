// discord_app/modules/user_settings/defs/native/CollectiblesShopSetting.tsx
import set from "../../../../../_runtime/00002_set.js";
import ME from "../../../../Constants.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import ShopIcon from "../../../../design/components/Icon/native/redesign/generated/ShopIcon.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
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
      let obj = callback(7213);
      obj = { analyticsLocations: null, analyticsSource: null };
      const items = [callback2(5920).USER_SETTINGS];
      obj[0] = items;
      obj[1] = callback2(5920).USER_SETTINGS;
      const result = obj.openCollectiblesShopMobile(obj);
      return false;
    };
  }
};
obj = {
  route: ME.UserSettingsSections.COLLECTIBLES_SHOP,
  getComponent() {
    return CollectiblesShopScreen /* CollectiblesShopScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
let result = set.fileFinishedImporting("modules/user_settings/defs/native/CollectiblesShopSetting.tsx");

export default route;