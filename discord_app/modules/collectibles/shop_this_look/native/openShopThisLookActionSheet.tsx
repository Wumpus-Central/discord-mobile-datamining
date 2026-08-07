// discord_app/modules/collectibles/shop_this_look/native/openShopThisLookActionSheet.tsx
import { asyncRequireImpl } from "../../../../../_runtime/01988_asyncRequireImpl.js";
import { ACTION_SHEET_HEIGHT_HALF } from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
let c3 = "Shop This Look";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/collectibles/shop_this_look/native/openShopThisLookActionSheet.tsx");

export const SHOP_THIS_LOOK_ACTION_SHEET_KEY = "Shop This Look";
export const openShopThisLookActionSheet = function openShopThisLookActionSheet(arg0) {
  ACTION_SHEET_HEIGHT_HALF.openLazy(asyncRequireImpl(12435, dependencyMap.paths), c3, arg0, "stack");
};