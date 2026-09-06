// === Module 15844: CollectiblesShopViewAllCategoryItemsScreen ===

// Module 15844 (CollectiblesShopViewAllCategoryItemsScreen)
import useNavigation from "useNavigation" /* 1483 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 6994 */;
import CollectiblesShopViewAllCategoryItemsDefault from "CollectiblesShopViewAllCategoryItems" /* 15845 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/shop/native/CollectiblesShopViewAllCategoryItemsScreen.tsx");

export default function CollectiblesShopViewAllCategoryItemsScreen() {
  let obj = useSettingNavigationRoute;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  const stackNavigation = useNavigation.useStackNavigation();
  const items = [stackNavigation];
  const layoutEffect = noop.useLayoutEffect(() => {
    stackNavigation.setOptions({ headerShown: false });
  }, items);
  obj = {};
  const merged = Object.assign(settingNavigationRoute.params);
  return jsx(CollectiblesShopViewAllCategoryItemsDefault, {});
};