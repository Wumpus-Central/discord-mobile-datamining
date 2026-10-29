// === Module 14636: openConjureProjectsSheet ===

// Module 14636 (openConjureProjectsSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 10932 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6831 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/projects/native/openConjureProjectsSheet.tsx");

export default function openConjureProjectsSheet() {
  if ("success" === ConjureProjectStore.getOwnedProjectsFetchState()) {
    if (0 === ConjureProjectStore.getOwnedProjects().length) {
      openConjureHomeScreenDefault();
    }
  }
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14637, dependencyMap.paths), "ConjureProjectsSheet");
};