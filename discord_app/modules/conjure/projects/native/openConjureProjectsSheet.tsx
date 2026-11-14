// === Module 10532: openConjureProjectsSheet ===

// Module 10532 (openConjureProjectsSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import useConjureProjectGroups from "useConjureProjectGroups" /* 10533 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 10536 */;
import ConjureProjectStore from "ConjureProjectStore" /* 7017 */;

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
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10537, dependencyMap.paths), "ConjureProjectsSheet");
};
export function showConjureProjectsSheet() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10537, dependencyMap.paths), "ConjureProjectsSheet");
}