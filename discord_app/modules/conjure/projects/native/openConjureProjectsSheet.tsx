// === Module 14402: openConjureProjectsSheet ===

// Module 14402 (openConjureProjectsSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5246 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 10856 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6808 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/projects/native/openConjureProjectsSheet.tsx");

export default function openConjureProjectsSheet() {
  if ("success" === ConjureProjectStore.getOwnedProjectsFetchState()) {
    if (0 === ConjureProjectStore.getOwnedProjects().length) {
      openConjureHomeScreenDefault();
    }
  }
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14403, dependencyMap.paths), "ConjureProjectsSheet");
};