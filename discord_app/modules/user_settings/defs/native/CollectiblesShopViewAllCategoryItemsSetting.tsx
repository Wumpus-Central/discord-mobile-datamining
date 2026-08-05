// discord_app/modules/user_settings/defs/native/CollectiblesShopViewAllCategoryItemsSetting.tsx
import createToggle from "createToggle";
import { CollectiblesShopViewAllCategoryItemsScreen } from "../../shop/native/CollectiblesShopViewAllCategoryItemsScreen.tsx";

obj = {
  useTitle() {
    return "";
  },
  parent: null,
  usePredicate: require("useStaffOrDeveloperSettingPredicate").useStaffOrDeveloperSettingPredicate,
  unsearchable: true,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS,
  getComponent() {
    return CollectiblesShopViewAllCategoryItemsScreen /* CollectiblesShopViewAllCategoryItemsScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("useStaffOrDeveloperSettingPredicate").fileFinishedImporting("modules/user_settings/defs/native/CollectiblesShopViewAllCategoryItemsSetting.tsx");

export default route;