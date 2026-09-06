// discord_app/modules/user_settings/defs/native/CollectiblesShopViewAllCategoryItemsSetting.tsx
import Constants from "../../../../Constants.tsx";
import useIsStaffOrDeveloperSettingPredicate from "../../dev_tools/native/useIsStaffOrDeveloperSettingPredicate.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const route = SettingBuilders.createRoute({
  useTitle() {
    return "";
  },
  parent: null,
  usePredicate: useIsStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate,
  unsearchable: true,
  screen: {
    route: Constants.UserSettingsSections.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS,
    getComponent() {
      return require("CollectiblesShopViewAllCategoryItemsScreen").default;
    },
  },
});
const result = size.fileFinishedImporting(
  "modules/user_settings/defs/native/CollectiblesShopViewAllCategoryItemsSetting.tsx",
);

export default route;
