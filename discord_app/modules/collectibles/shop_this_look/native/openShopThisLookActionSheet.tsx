// === Module 14817: openShopThisLookActionSheet ===

// Module 14817 (openShopThisLookActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import size from "module_2" /* 2 */;

let c3 = "Shop This Look";
const result = size.fileFinishedImporting("modules/collectibles/shop_this_look/native/openShopThisLookActionSheet.tsx");

export const SHOP_THIS_LOOK_ACTION_SHEET_KEY = "Shop This Look";
export function openShopThisLookActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14818, dependencyMap.paths), c3, arg0, "stack");
}