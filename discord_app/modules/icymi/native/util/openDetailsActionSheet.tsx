// === Module 15849: openDetailsActionSheet ===

// Module 15849 (openDetailsActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4347 */;
import _modDef9060 from "module_9060" /* 9060 */;

const result = set.fileFinishedImporting("modules/icymi/native/util/openDetailsActionSheet.tsx");

export const openDetailsActionSheet = function openDetailsActionSheet(arg0) {
  ({ id, type } = arg0);
  ({ guildId, channelId } = arg0);
  _modDef9060.itemInteracted(id, type, "overflow_menu");
  const obj = _modDef9060;
  _modDef9060.feedItemActioned({ itemId: id, itemType: type, actionParameters: { actionGestureType: "press", actionTargetElement: "overflow_menu_button", actionIntentType: "open", actionDestinationType: null } });
  const obj2 = _modDef9060;
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(15815, dependencyMap.paths), "ItemDetailsActionSheet", { guildId, channelId, id });
};