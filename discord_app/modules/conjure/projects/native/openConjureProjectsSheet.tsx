// === Module 13781: openConjureProjectsSheet ===

// Module 13781 (openConjureProjectsSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 12290 */;
import useConjureProjectGroups from "useConjureProjectGroups" /* 13782 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6621 */;

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
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13785, dependencyMap.paths), "ConjureProjectsSheet");
};
export function showConjureProjectsSheet() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13785, dependencyMap.paths), "ConjureProjectsSheet");
}