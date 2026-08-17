// discord_app/modules/user_settings/defs/native/CollectiblesShopViewAllCategoryItemsSetting.tsx
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import useStaffOrDeveloperSettingPredicate from "useStaffOrDeveloperSettingPredicate" /* 14199 */;
import createToggle from "createToggle" /* 10669 */;
import { CollectiblesShopViewAllCategoryItemsScreen } from "../../shop/native/CollectiblesShopViewAllCategoryItemsScreen.tsx";

obj = {
  useTitle() {
    return "";
  },
  parent: null,
  usePredicate: useStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate,
  unsearchable: true,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS,
  getComponent() {
    return CollectiblesShopViewAllCategoryItemsScreen.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/CollectiblesShopViewAllCategoryItemsSetting.tsx");

export default route;