// === Module 14985: route ===

// Module 14985 (route)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import useStaffOrDeveloperSettingPredicate from "useStaffOrDeveloperSettingPredicate" /* 14199 */;
import createToggle from "createToggle" /* 10669 */;

const obj = {
  route: ME.UserSettingsSections.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS,
  getComponent() {
    return require(14986) /* CollectiblesShopViewAllCategoryItemsScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/CollectiblesShopViewAllCategoryItemsSetting.tsx");

export default route;