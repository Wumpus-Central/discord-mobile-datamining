// === Module 16492: openDetailsActionSheet ===

// Module 16492 (openDetailsActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4527 */;
import _modDef8351 from "module_8351" /* 8351 */;

const result = set.fileFinishedImporting("modules/icymi/native/util/openDetailsActionSheet.tsx");

export const openDetailsActionSheet = function openDetailsActionSheet(arg0) {
  ({ id, type } = arg0);
  ({ guildId, channelId } = arg0);
  _modDef8351.itemInteracted(id, type, "overflow_menu");
  const obj = _modDef8351;
  _modDef8351.feedItemActioned({ itemId: id, itemType: type, actionParameters: { actionGestureType: "press", actionTargetElement: "overflow_menu_button", actionIntentType: "open", actionDestinationType: null } });
  const obj2 = _modDef8351;
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(16458, dependencyMap.paths), "ItemDetailsActionSheet", { guildId, channelId, id });
};