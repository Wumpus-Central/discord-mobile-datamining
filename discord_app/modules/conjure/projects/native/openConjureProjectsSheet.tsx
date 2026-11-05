// === Module 13232: openConjureProjectsSheet ===

// Module 13232 (openConjureProjectsSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5384 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 11165 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6982 */;

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
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13233, dependencyMap.paths), "ConjureProjectsSheet");
};
export function openConjureProjectsSheetForGuild(guildId) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13233, dependencyMap.paths), "ConjureProjectsSheet", { guildId });
}