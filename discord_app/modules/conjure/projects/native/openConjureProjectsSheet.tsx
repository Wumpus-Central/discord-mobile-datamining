// === Module 13708: openConjureProjectsSheet ===

// Module 13708 (openConjureProjectsSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5037 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 12243 */;
import useConjureProjectGroups from "useConjureProjectGroups" /* 13709 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6529 */;

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
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13712, dependencyMap.paths), "ConjureProjectsSheet");
};
export function showConjureProjectsSheet() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13712, dependencyMap.paths), "ConjureProjectsSheet");
}