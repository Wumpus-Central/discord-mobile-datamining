// discord_app/modules/user_settings/defs/native/CollectiblesShopViewAllCategoryItemsSetting.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import ME from "../../../../Constants.tsx";
import useStaffOrDeveloperSettingPredicate from "../../dev_tools/native/useIsStaffOrDeveloperSettingPredicate.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { CollectiblesShopViewAllCategoryItemsScreen } from "../../shop/native/CollectiblesShopViewAllCategoryItemsScreen.tsx";

const obj = {
  route: ME.UserSettingsSections.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS,
  getComponent() {
    return CollectiblesShopViewAllCategoryItemsScreen /* CollectiblesShopViewAllCategoryItemsScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/CollectiblesShopViewAllCategoryItemsSetting.tsx");

export default route;