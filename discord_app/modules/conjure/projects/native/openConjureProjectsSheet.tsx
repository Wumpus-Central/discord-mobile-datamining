// === Module 13234: openConjureProjectsSheet ===

// Module 13234 (openConjureProjectsSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5376 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 11113 */;
import useConjureProjectGroups from "useConjureProjectGroups" /* 13235 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6902 */;

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
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13238, dependencyMap.paths), "ConjureProjectsSheet");
};
export function showConjureProjectsSheet() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13238, dependencyMap.paths), "ConjureProjectsSheet");
}