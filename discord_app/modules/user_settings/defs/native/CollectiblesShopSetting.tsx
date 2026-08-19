// === Module 14948: route ===

// Module 14948 (route)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import ShopIcon from "ShopIcon" /* 11316 */;
import createToggle from "createToggle" /* 10669 */;

let obj = {
  route: ME.UserSettingsSections.COLLECTIBLES_SHOP,
  getComponent() {
    return require(14949) /* CollectiblesShopScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
let result = obj132.fileFinishedImporting("modules/user_settings/defs/native/CollectiblesShopSetting.tsx");

export default route;