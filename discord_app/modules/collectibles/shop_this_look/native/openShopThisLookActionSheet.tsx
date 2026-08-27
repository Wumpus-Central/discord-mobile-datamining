// discord_app/modules/collectibles/shop_this_look/native/openShopThisLookActionSheet.tsx
import set from "../../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../../_runtime/02009_asyncRequireImpl.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";

let c3 = "Shop This Look";
const result = set.fileFinishedImporting("modules/collectibles/shop_this_look/native/openShopThisLookActionSheet.tsx");

export const SHOP_THIS_LOOK_ACTION_SHEET_KEY = "Shop This Look";
export const openShopThisLookActionSheet = function openShopThisLookActionSheet(arg0) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(12513, dependencyMap.paths), c3, arg0, "stack");
};