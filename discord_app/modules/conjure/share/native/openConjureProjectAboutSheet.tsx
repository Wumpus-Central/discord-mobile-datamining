// === Module 12997: openConjureProjectAboutSheet ===

// Module 12997 (openConjureProjectAboutSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import size from "module_2" /* 2 */;

const ConjureProjectAboutSheet = "ConjureProjectAboutSheet";
const result = size.fileFinishedImporting("modules/conjure/share/native/openConjureProjectAboutSheet.tsx");

export default function openConjureProjectAboutSheet(applicationId, source) {
  let tmp = arg2;
  if (arg2 === undefined) {
    tmp = null;
  }
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12998, dependencyMap.paths), ConjureProjectAboutSheet, { applicationId, source, ticket: tmp });
};
export const CONJURE_PROJECT_ABOUT_SHEET_KEY = "ConjureProjectAboutSheet";