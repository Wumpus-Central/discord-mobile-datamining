// === Module 14227: openConjureProjectsSheet ===

// Module 14227 (openConjureProjectsSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 11440 */;
import useConjureProjectGroups from "useConjureProjectGroups" /* 14228 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6903 */;

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
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14231, dependencyMap.paths), "ConjureProjectsSheet");
};
export function showConjureProjectsSheet() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14231, dependencyMap.paths), "ConjureProjectsSheet");
}