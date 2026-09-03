// === Module 16330: openDetailsActionSheet ===

// Module 16330 (openDetailsActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4445 */;
import _modDef8641 from "module_8641" /* 8641 */;

const result = set.fileFinishedImporting("modules/icymi/native/util/openDetailsActionSheet.tsx");

export const openDetailsActionSheet = function openDetailsActionSheet(arg0) {
  ({ id, type } = arg0);
  ({ guildId, channelId } = arg0);
  _modDef8641.itemInteracted(id, type, "overflow_menu");
  const obj = _modDef8641;
  _modDef8641.feedItemActioned({ itemId: id, itemType: type, actionParameters: { actionGestureType: "press", actionTargetElement: "overflow_menu_button", actionIntentType: "open", actionDestinationType: null } });
  const obj2 = _modDef8641;
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(16296, dependencyMap.paths), "ItemDetailsActionSheet", { guildId, channelId, id });
};