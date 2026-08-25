// === Module 15079: route ===

// Module 15079 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import useStaffOrDeveloperSettingPredicate from "useStaffOrDeveloperSettingPredicate" /* 14297 */;
import createToggle from "createToggle" /* 10516 */;

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
    return require(15080) /* CollectiblesShopViewAllCategoryItemsScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/CollectiblesShopViewAllCategoryItemsSetting.tsx");

export default route;