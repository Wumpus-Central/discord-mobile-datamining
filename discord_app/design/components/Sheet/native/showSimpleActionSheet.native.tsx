// discord_app/design/components/Sheet/native/showSimpleActionSheet.native.tsx
import ActionSheetActionCreatorsDefault from "../../../../modules/action_sheet/native/ActionSheetActionCreators.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("design/components/Sheet/native/showSimpleActionSheet.native.tsx");

export const showSimpleActionSheet = function showSimpleActionSheet(key) {
  key = key.key;
  const merged = Object.assign(key, Object.assign({ key: 0, stackingBehavior: 0 }));
  const obj = {};
  const merged1 = Object.assign(merged);
  obj.hideActionSheet = function hideActionSheet() {
    ActionSheetActionCreatorsDefault.hideActionSheet(key);
  };
  obj.openLazy(key(1896)(7197, dependencyMap.paths), key, obj, key.stackingBehavior);
};
