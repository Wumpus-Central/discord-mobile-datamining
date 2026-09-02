// === Module 15672: CollectiblesShopViewAllCategoryItemsScreen ===

// Module 15672 (CollectiblesShopViewAllCategoryItemsScreen)
import _modDef15673 from "module_15673" /* 15673 */;
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/user_settings/shop/native/CollectiblesShopViewAllCategoryItemsScreen.tsx");

export default function CollectiblesShopViewAllCategoryItemsScreen() {
  let obj = stackNavigation(7168);
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  stackNavigation = stackNavigation(1498).useStackNavigation();
  const items = [stackNavigation];
  const layoutEffect = React.useLayoutEffect(() => {
    stackNavigation.setOptions({ headerShown: false });
  }, items);
  obj = {};
  const obj2 = stackNavigation(1498);
  const merged = Object.assign(settingNavigationRoute.params);
  return jsx(_modDef15673, {});
};