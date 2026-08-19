// === Module 15748: openDetailsActionSheet ===

// Module 15748 (openDetailsActionSheet)
import obj132 from "obj132" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;
import _modDef9057 from "module_9057" /* 9057 */;

const result = obj132.fileFinishedImporting("modules/icymi/native/util/openDetailsActionSheet.tsx");

export const openDetailsActionSheet = function openDetailsActionSheet(arg0) {
  ({ id, type } = arg0);
  ({ guildId, channelId } = arg0);
  _modDef9057.itemInteracted(id, type, "overflow_menu");
  _modDef9057.feedItemActioned({ itemId: id, itemType: type, actionParameters: { actionGestureType: "press", actionTargetElement: "overflow_menu_button", actionIntentType: "open", actionDestinationType: null } });
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(15714, dependencyMap.paths), "ItemDetailsActionSheet", { guildId, channelId, id });
};