// === Module 13220: openConjureProjectsSheet ===

// Module 13220 (openConjureProjectsSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 11104 */;
import useConjureProjectGroups from "useConjureProjectGroups" /* 13221 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6899 */;

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
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13224, dependencyMap.paths), "ConjureProjectsSheet");
};
export function showConjureProjectsSheet() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13224, dependencyMap.paths), "ConjureProjectsSheet");
}