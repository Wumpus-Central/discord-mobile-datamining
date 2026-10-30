// === Module 14669: openConjureProjectsSheet ===

// Module 14669 (openConjureProjectsSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 10957 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6838 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/projects/native/openConjureProjectsSheet.tsx");

export default function openConjureProjectsSheet() {
  if ("success" === ConjureProjectStore.getOwnedProjectsFetchState()) {
    if (0 === ConjureProjectStore.getOwnedProjects().length) {
      openConjureHomeScreenDefault();
    }
  }
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14670, dependencyMap.paths), "ConjureProjectsSheet");
};