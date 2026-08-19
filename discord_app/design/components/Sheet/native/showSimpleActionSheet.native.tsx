// === Module 7173: showSimpleActionSheet ===

// Module 7173 (showSimpleActionSheet)
import obj132 from "obj132" /* 2 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;

const result = obj132.fileFinishedImporting("design/components/Sheet/native/showSimpleActionSheet.native.tsx");

export const showSimpleActionSheet = function showSimpleActionSheet(key) {
  key = key.key;
  const merged = Object.assign(key, Object.create(null));
  const obj = {};
  const merged1 = Object.assign(merged);
  obj.hideActionSheet = function hideActionSheet() {
    ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet(key);
  };
  obj.openLazy(key(2007)(7174, dependencyMap.paths), key, obj, key.stackingBehavior);
};