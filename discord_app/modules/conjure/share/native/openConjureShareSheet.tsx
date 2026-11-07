// discord_app/modules/conjure/share/native/openConjureShareSheet.tsx
import asyncRequireImpl from "../../../../../_runtime/02118_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/conjure/share/native/openConjureShareSheet.tsx");

export default function openConjureShareSheet(projectId) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12412, dependencyMap.paths), "ConjureShareSheet", {
    projectId,
  });
}
