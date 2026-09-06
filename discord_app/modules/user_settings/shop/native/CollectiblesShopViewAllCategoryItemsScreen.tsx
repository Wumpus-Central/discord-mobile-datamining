// discord_app/modules/user_settings/shop/native/CollectiblesShopViewAllCategoryItemsScreen.tsx
import useNavigation from "../../../../design/components/Navigator/native/useNavigation.native.tsx";
import useSettingNavigationRoute from "../../core/native/useSettingNavigationRoute.tsx";
import CollectiblesShopViewAllCategoryItemsDefault from "../../../collectibles/native/CollectiblesShopViewAllCategoryItems.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/shop/native/CollectiblesShopViewAllCategoryItemsScreen.tsx",
);

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
}
