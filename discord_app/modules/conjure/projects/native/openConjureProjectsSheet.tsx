// === Module 14104: openConjureProjectsSheet ===

// Module 14104 (openConjureProjectsSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5131 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 11341 */;
import useConjureProjectGroups from "useConjureProjectGroups" /* 14105 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6808 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/projects/native/openConjureProjectsSheet.tsx");

export default function openConjureProjectsSheet() {
  if ("success" === ConjureProjectStore.getOwnedProjectsFetchState()) {
    if (0 === obj.getListedConjureProjects().length) {
      openConjureHomeScreenDefault();
    }
    obj = useConjureProjectGroups;
  }
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14108, dependencyMap.paths), "ConjureProjectsSheet");
};
export function showConjureProjectsSheet() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14108, dependencyMap.paths), "ConjureProjectsSheet");
}