// === Module 13224: openConjureProjectsSheet ===

// Module 13224 (openConjureProjectsSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 11157 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6979 */;

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
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13225, dependencyMap.paths), "ConjureProjectsSheet");
};
export function openConjureProjectsSheetForGuild(guildId) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13225, dependencyMap.paths), "ConjureProjectsSheet", { guildId });
}