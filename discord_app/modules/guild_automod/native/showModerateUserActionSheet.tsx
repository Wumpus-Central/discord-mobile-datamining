// discord_app/modules/guild_automod/native/showModerateUserActionSheet.tsx
import asyncRequireImpl from "../../../../_runtime/02000_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(
    asyncRequireImpl(11390, dependencyMap.paths),
    "ModerateUserActionSheet",
    arg0,
  );
}
