// === Module 15928: openDetailsActionSheet ===

// Module 15928 (openDetailsActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4411 */;
import _modDef9128 from "module_9128" /* 9128 */;

const result = set.fileFinishedImporting("modules/icymi/native/util/openDetailsActionSheet.tsx");

export const openDetailsActionSheet = function openDetailsActionSheet(arg0) {
  ({ id, type } = arg0);
  ({ guildId, channelId } = arg0);
  _modDef9128.itemInteracted(id, type, "overflow_menu");
  const obj = _modDef9128;
  _modDef9128.feedItemActioned({ itemId: id, itemType: type, actionParameters: { actionGestureType: "press", actionTargetElement: "overflow_menu_button", actionIntentType: "open", actionDestinationType: null } });
  const obj2 = _modDef9128;
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(15894, dependencyMap.paths), "ItemDetailsActionSheet", { guildId, channelId, id });
};