// === Module 10463: openConjureProjectsSheet ===

// Module 10463 (openConjureProjectsSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import useConjureProjectGroups from "useConjureProjectGroups" /* 10464 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 10467 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6954 */;

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
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10468, dependencyMap.paths), "ConjureProjectsSheet");
};
export function showConjureProjectsSheet() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10468, dependencyMap.paths), "ConjureProjectsSheet");
}