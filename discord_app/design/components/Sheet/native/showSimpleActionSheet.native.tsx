// === Module 5934: showSimpleActionSheet ===

// Module 5934 (showSimpleActionSheet)
import set from "set" /* 2 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4411 */;

const result = set.fileFinishedImporting("design/components/Sheet/native/showSimpleActionSheet.native.tsx");

export const showSimpleActionSheet = function showSimpleActionSheet(key) {
  key = key.key;
  const merged = Object.assign(key, Object.create(null));
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = {};
  const merged1 = Object.assign(merged);
  obj.hideActionSheet = function hideActionSheet() {
    closure_1_1(closure_1_2[0]).hideActionSheet(key);
  };
  obj.openLazy(key(2009)(5935, dependencyMap.paths), key, obj, key.stackingBehavior);
};