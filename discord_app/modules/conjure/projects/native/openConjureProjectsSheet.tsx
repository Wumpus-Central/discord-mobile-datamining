// === Module 15020: openConjureProjectsSheet ===

// Module 15020 (openConjureProjectsSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5546 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 12956 */;
import useConjureProjectGroups from "useConjureProjectGroups" /* 15021 */;
import ConjureProjectStore from "ConjureProjectStore" /* 7025 */;

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
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(15024, dependencyMap.paths), "ConjureProjectsSheet");
};
export function showConjureProjectsSheet() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(15024, dependencyMap.paths), "ConjureProjectsSheet");
}