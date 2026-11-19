// === Module 13690: openConjureProjectsSheet ===

// Module 13690 (openConjureProjectsSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5006 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 12226 */;
import useConjureProjectGroups from "useConjureProjectGroups" /* 13691 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6500 */;

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
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13694, dependencyMap.paths), "ConjureProjectsSheet");
};
export function showConjureProjectsSheet() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13694, dependencyMap.paths), "ConjureProjectsSheet");
}