// discord_app/modules/icymi/native/util/openDetailsActionSheet.tsx
import set from "../../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../../_runtime/02008_asyncRequireImpl.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import _modDef9094 from "../../ICYMIActionCreators.tsx";

const result = set.fileFinishedImporting("modules/icymi/native/util/openDetailsActionSheet.tsx");

export const openDetailsActionSheet = function openDetailsActionSheet(arg0) {
  ({ id, type } = arg0);
  ({ guildId, channelId } = arg0);
  _modDef9094.itemInteracted(id, type, "overflow_menu");
  const obj = _modDef9094;
  _modDef9094.feedItemActioned({ itemId: id, itemType: type, actionParameters: { actionGestureType: "press", actionTargetElement: "overflow_menu_button", actionIntentType: "open", actionDestinationType: null } });
  const obj2 = _modDef9094;
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(15783, dependencyMap.paths), "ItemDetailsActionSheet", { guildId, channelId, id });
};