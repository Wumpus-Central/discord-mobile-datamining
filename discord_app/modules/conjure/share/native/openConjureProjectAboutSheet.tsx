// discord_app/modules/conjure/share/native/openConjureProjectAboutSheet.tsx
import asyncRequireImpl from "../../../../../_runtime/02118_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const ConjureProjectAboutSheet = "ConjureProjectAboutSheet";
const result = size.fileFinishedImporting("modules/conjure/share/native/openConjureProjectAboutSheet.tsx");

export default function openConjureProjectAboutSheet(applicationId, source) {
  let tmp = arg2;
  if (arg2 === undefined) {
    tmp = null;
  }
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12998, dependencyMap.paths), ConjureProjectAboutSheet, {
    applicationId,
    source,
    ticket: tmp,
  });
}
export const CONJURE_PROJECT_ABOUT_SHEET_KEY = "ConjureProjectAboutSheet";
