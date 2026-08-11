// discord_app/design/components/Sheet/native/showSimpleActionSheet.native.tsx
import { ACTION_SHEET_HEIGHT_HALF } from "../../../../modules/action_sheet/native/ActionSheetActionCreators.tsx";
const result = require("asyncRequireImpl").fileFinishedImporting("design/components/Sheet/native/showSimpleActionSheet.native.tsx");

export const showSimpleActionSheet = function showSimpleActionSheet(key) {
  key = key.key;
  const merged = Object.assign(key, Object.create(null));
  let obj = ACTION_SHEET_HEIGHT_HALF;
  obj = {};
  const merged1 = Object.assign(merged);
  obj.hideActionSheet = function hideActionSheet() {
    outer1_1(outer1_2[0]).hideActionSheet(key);
  };
  obj.openLazy(key(2007)(5763, dependencyMap.paths), key, obj, key.stackingBehavior);
};