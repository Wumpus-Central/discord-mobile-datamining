// discord_app/modules/conjure/publish/native/showConjurePublishSheet.tsx
import asyncRequireImpl from "../../../../../_runtime/02119_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const ConjurePublishSheet = "ConjurePublishSheet";
const result = size.fileFinishedImporting("modules/conjure/publish/native/showConjurePublishSheet.tsx");

export default function showConjurePublishSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(18255, dependencyMap.paths), ConjurePublishSheet, arg0);
}
export const CONJURE_PUBLISH_SHEET_KEY = "ConjurePublishSheet";
