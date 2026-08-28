// discord_app/modules/user_settings/shop/native/CollectiblesShopViewAllCategoryItemsScreen.tsx
import _modDef15376 from "../../../collectibles/native/CollectiblesShopViewAllCategoryItems.tsx";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/user_settings/shop/native/CollectiblesShopViewAllCategoryItemsScreen.tsx");

export default function CollectiblesShopViewAllCategoryItemsScreen() {
  let obj = stackNavigation(7106);
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  stackNavigation = stackNavigation(1500).useStackNavigation();
  const items = [stackNavigation];
  const layoutEffect = React.useLayoutEffect(() => {
    stackNavigation.setOptions({ headerShown: false });
  }, items);
  obj = {};
  const obj2 = stackNavigation(1500);
  const merged = Object.assign(settingNavigationRoute.params);
  return jsx(_modDef15376, {});
};