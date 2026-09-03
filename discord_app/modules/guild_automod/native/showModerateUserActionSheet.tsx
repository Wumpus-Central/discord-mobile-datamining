// discord_app/modules/guild_automod/native/showModerateUserActionSheet.tsx
import set from "../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../_runtime/02008_asyncRequireImpl.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";

const result = set.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(
    asyncRequireImpl(11635, dependencyMap.paths),
    "ModerateUserActionSheet",
    arg0,
  );
}
