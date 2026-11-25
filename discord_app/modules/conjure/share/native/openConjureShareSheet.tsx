// discord_app/modules/conjure/share/native/openConjureShareSheet.tsx
import asyncRequireImpl from "../../../../../_runtime/02119_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/conjure/share/native/openConjureShareSheet.tsx");

export default function openConjureShareSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(18498, dependencyMap.paths), "ConjureShareSheet", arg0);
}
