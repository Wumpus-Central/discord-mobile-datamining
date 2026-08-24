// discord_app/design/components/Sheet/native/showSimpleActionSheet.native.tsx
import set from "../../../../../_runtime/00002_set.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../../../modules/action_sheet/native/ActionSheetActionCreators.tsx";

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
  obj.openLazy(key(2008)(7212, dependencyMap.paths), key, obj, key.stackingBehavior);
};