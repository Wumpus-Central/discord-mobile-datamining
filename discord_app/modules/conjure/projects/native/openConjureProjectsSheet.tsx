// === Module 14178: openConjureProjectsSheet ===

// Module 14178 (openConjureProjectsSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5211 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 10821 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6774 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/projects/native/openConjureProjectsSheet.tsx");

export default function openConjureProjectsSheet() {
  if ("success" === ConjureProjectStore.getOwnedProjectsFetchState()) {
    if (0 === ConjureProjectStore.getOwnedProjects().length) {
      openConjureHomeScreenDefault();
    }
  }
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14179, dependencyMap.paths), "ConjureProjectsSheet");
};