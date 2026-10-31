// === Module 14707: openConjureProjectsSheet ===

// Module 14707 (openConjureProjectsSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 10976 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6844 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/projects/native/openConjureProjectsSheet.tsx");

export default function openConjureProjectsSheet() {
  if ("success" === ConjureProjectStore.getOwnedProjectsFetchState()) {
    if (0 === ConjureProjectStore.getOwnedProjects().length) {
      openConjureHomeScreenDefault();
    }
  }
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14708, dependencyMap.paths), "ConjureProjectsSheet");
};