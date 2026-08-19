// discord_app/modules/icymi/native/util/openDetailsActionSheet.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import asyncRequireImpl from "../../../../../_runtime/02007_asyncRequireImpl.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import _modDef9057 from "../../ICYMIActionCreators.tsx";

const result = obj132.fileFinishedImporting("modules/icymi/native/util/openDetailsActionSheet.tsx");

export const openDetailsActionSheet = function openDetailsActionSheet(arg0) {
  ({ id, type } = arg0);
  ({ guildId, channelId } = arg0);
  _modDef9057.itemInteracted(id, type, "overflow_menu");
  _modDef9057.feedItemActioned({ itemId: id, itemType: type, actionParameters: { actionGestureType: "press", actionTargetElement: "overflow_menu_button", actionIntentType: "open", actionDestinationType: null } });
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(15714, dependencyMap.paths), "ItemDetailsActionSheet", { guildId, channelId, id });
};