// === Module 15817: openDetailsActionSheet ===

// Module 15817 (openDetailsActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4346 */;
import _modDef9094 from "module_9094" /* 9094 */;

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