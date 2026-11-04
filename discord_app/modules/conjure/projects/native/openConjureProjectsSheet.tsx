// discord_app/modules/conjure/projects/native/openConjureProjectsSheet.tsx
import asyncRequireImpl from "../../../../../_runtime/02123_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import openConjureHomeScreenDefault from "../../home/native/openConjureHomeScreen.tsx";
import ConjureProjectStore from "../ConjureProjectStore.tsx";

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
}
export function openConjureProjectsSheetForGuild(guildId) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13225, dependencyMap.paths), "ConjureProjectsSheet", {
    guildId,
  });
}
