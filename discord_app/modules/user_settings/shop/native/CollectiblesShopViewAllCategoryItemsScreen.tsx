// === Module 14986: CollectiblesShopViewAllCategoryItemsScreen ===

// Module 14986 (CollectiblesShopViewAllCategoryItemsScreen)
import _modDef14987 from "module_14987" /* 14987 */;
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/user_settings/shop/native/CollectiblesShopViewAllCategoryItemsScreen.tsx");

export default function CollectiblesShopViewAllCategoryItemsScreen() {
  let obj = stackNavigation(7385);
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  stackNavigation = stackNavigation(1500).useStackNavigation();
  const items = [stackNavigation];
  const layoutEffect = React.useLayoutEffect(() => {
    stackNavigation.setOptions({ headerShown: false });
  }, items);
  obj = {};
  const obj2 = stackNavigation(1500);
  const merged = Object.assign(settingNavigationRoute.params);
  return jsx(_modDef14987, {});
};