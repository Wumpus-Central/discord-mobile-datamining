// === Module 14279: openConjureProjectsSheet ===

// Module 14279 (openConjureProjectsSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 11487 */;
import useConjureProjectGroups from "useConjureProjectGroups" /* 14280 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6934 */;

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
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14283, dependencyMap.paths), "ConjureProjectsSheet");
};
export function showConjureProjectsSheet() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14283, dependencyMap.paths), "ConjureProjectsSheet");
}