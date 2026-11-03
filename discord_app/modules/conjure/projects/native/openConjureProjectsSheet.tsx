// === Module 13141: openConjureProjectsSheet ===

// Module 13141 (openConjureProjectsSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5381 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 11109 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6964 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/projects/native/openConjureProjectsSheet.tsx");

export default function openConjureProjectsSheet() {
  if ("success" === ConjureProjectStore.getOwnedProjectsFetchState()) {
    if (0 === ConjureProjectStore.getOwnedProjects().length) {
      if (0 === ConjureProjectStore.getSharedWithMeProjects().length) {
        openConjureHomeScreenDefault();
      }
    }
  }
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13142, dependencyMap.paths), "ConjureProjectsSheet");
};
export function openConjureProjectsSheetForGuild(guildId) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13142, dependencyMap.paths), "ConjureProjectsSheet", { guildId });
}