// discord_app/modules/icymi/native/util/openDetailsActionSheet.tsx
import { asyncRequireImpl } from "../../../../../_runtime/02007_asyncRequireImpl.js";
import { ACTION_SHEET_HEIGHT_HALF } from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import { ICYMIActionCreators } from "../../ICYMIActionCreators.tsx";
const result = require("ItemDetailsActionSheet").fileFinishedImporting("modules/icymi/native/util/openDetailsActionSheet.tsx");

export const openDetailsActionSheet = function openDetailsActionSheet(arg0) {
  let channelId;
  let guildId;
  let id;
  let type;
  ({ id, type } = arg0);
  ({ guildId, channelId } = arg0);
  ICYMIActionCreators.itemInteracted(id, type, "overflow_menu");
  const obj = ICYMIActionCreators;
  ICYMIActionCreators.feedItemActioned({ itemId: id, itemType: type, actionParameters: { actionGestureType: "press", actionTargetElement: "overflow_menu_button", actionIntentType: "open", actionDestinationType: null } });
  const obj2 = ICYMIActionCreators;
  ACTION_SHEET_HEIGHT_HALF.openLazy(asyncRequireImpl(15664, dependencyMap.paths), "ItemDetailsActionSheet", { guildId, channelId, id });
};