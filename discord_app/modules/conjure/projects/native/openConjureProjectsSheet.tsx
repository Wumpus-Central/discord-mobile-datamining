// === Module 13659: openConjureProjectsSheet ===

// Module 13659 (openConjureProjectsSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5008 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 12168 */;
import useConjureProjectGroups from "useConjureProjectGroups" /* 13660 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6502 */;

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
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13663, dependencyMap.paths), "ConjureProjectsSheet");
};
export function showConjureProjectsSheet() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13663, dependencyMap.paths), "ConjureProjectsSheet");
}