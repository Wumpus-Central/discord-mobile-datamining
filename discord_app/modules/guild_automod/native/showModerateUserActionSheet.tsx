import { asyncRequireImpl } from "../../../../_runtime/01959_asyncRequireImpl.js";
import { ACTION_SHEET_HEIGHT_HALF } from "../../action_sheet/native/ActionSheetActionCreators.tsx";
// discord_app/modules/guild_automod/native/showModerateUserActionSheet.tsx
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  ACTION_SHEET_HEIGHT_HALF.openLazy(asyncRequireImpl /* asyncRequireImpl */(11145, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};