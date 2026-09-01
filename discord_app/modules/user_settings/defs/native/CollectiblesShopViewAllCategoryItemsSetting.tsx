// discord_app/modules/user_settings/defs/native/CollectiblesShopViewAllCategoryItemsSetting.tsx
import set from "../../../../../_runtime/00002_set.js";
import ME from "../../../../Constants.tsx";
import useStaffOrDeveloperSettingPredicate from "../../dev_tools/native/useIsStaffOrDeveloperSettingPredicate.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { CollectiblesShopViewAllCategoryItemsScreen } from "../../shop/native/CollectiblesShopViewAllCategoryItemsScreen.tsx";

obj = {
  useTitle() {
    return "";
  },
  parent: null,
  usePredicate: useStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate,
  unsearchable: true,
  screen: obj,
};
obj = {
  route: ME.UserSettingsSections.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS,
  getComponent() {
    return CollectiblesShopViewAllCategoryItemsScreen /* CollectiblesShopViewAllCategoryItemsScreen */.default;
  },
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting(
  "modules/user_settings/defs/native/CollectiblesShopViewAllCategoryItemsSetting.tsx",
);

export default route;
