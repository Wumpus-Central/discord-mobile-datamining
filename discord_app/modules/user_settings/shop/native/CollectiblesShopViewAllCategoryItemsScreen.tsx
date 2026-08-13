// discord_app/modules/user_settings/shop/native/CollectiblesShopViewAllCategoryItemsScreen.tsx
import noop from "noop";
import { jsx } from "jsxProd";
import { CollectiblesShopViewAllCategoryItems } from "../../../collectibles/native/CollectiblesShopViewAllCategoryItems.tsx";

const require = arg1;
const result = require("useSettingNavigationRoute").fileFinishedImporting("modules/user_settings/shop/native/CollectiblesShopViewAllCategoryItemsScreen.tsx");

export default function CollectiblesShopViewAllCategoryItemsScreen() {
  let obj = stackNavigation(6925);
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  stackNavigation = stackNavigation(1499).useStackNavigation();
  const items = [stackNavigation];
  const layoutEffect = React.useLayoutEffect(() => {
    stackNavigation.setOptions({ headerShown: false });
  }, items);
  obj = {};
  const obj2 = stackNavigation(1499);
  const merged = Object.assign(settingNavigationRoute.params);
  return jsx(CollectiblesShopViewAllCategoryItems, {});
};