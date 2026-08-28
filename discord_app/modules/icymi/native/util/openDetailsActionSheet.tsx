// === Module 16011: openDetailsActionSheet ===

// Module 16011 (openDetailsActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2010 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4413 */;
import _modDef8568 from "module_8568" /* 8568 */;

const result = set.fileFinishedImporting("modules/icymi/native/util/openDetailsActionSheet.tsx");

export const openDetailsActionSheet = function openDetailsActionSheet(arg0) {
  ({ id, type } = arg0);
  ({ guildId, channelId } = arg0);
  _modDef8568.itemInteracted(id, type, "overflow_menu");
  const obj = _modDef8568;
  _modDef8568.feedItemActioned({ itemId: id, itemType: type, actionParameters: { actionGestureType: "press", actionTargetElement: "overflow_menu_button", actionIntentType: "open", actionDestinationType: null } });
  const obj2 = _modDef8568;
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(15977, dependencyMap.paths), "ItemDetailsActionSheet", { guildId, channelId, id });
};