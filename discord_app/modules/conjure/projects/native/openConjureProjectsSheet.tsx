// === Module 13197: openConjureProjectsSheet ===

// Module 13197 (openConjureProjectsSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5404 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 11118 */;
import useConjureProjectGroups from "useConjureProjectGroups" /* 13198 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6924 */;

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
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13201, dependencyMap.paths), "ConjureProjectsSheet");
};
export function showConjureProjectsSheet() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13201, dependencyMap.paths), "ConjureProjectsSheet");
}