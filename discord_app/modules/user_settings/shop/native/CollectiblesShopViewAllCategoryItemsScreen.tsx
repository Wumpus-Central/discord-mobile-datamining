// === Module 15844: CollectiblesShopViewAllCategoryItemsScreen ===

// Module 15844 (CollectiblesShopViewAllCategoryItemsScreen)
import _modDef15845 from "module_15845" /* 15845 */;
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/user_settings/shop/native/CollectiblesShopViewAllCategoryItemsScreen.tsx");

export default function CollectiblesShopViewAllCategoryItemsScreen() {
  let obj = stackNavigation(6994);
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  stackNavigation = stackNavigation(1483).useStackNavigation();
  const items = [stackNavigation];
  const layoutEffect = React.useLayoutEffect(() => {
    stackNavigation.setOptions({ headerShown: false });
  }, items);
  obj = {};
  const obj2 = stackNavigation(1483);
  const merged = Object.assign(settingNavigationRoute.params);
  return jsx(_modDef15845, {});
};