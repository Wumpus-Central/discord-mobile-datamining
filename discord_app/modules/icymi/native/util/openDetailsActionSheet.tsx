// === Module 16311: openDetailsActionSheet ===

// Module 16311 (openDetailsActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4445 */;
import _modDef8637 from "module_8637" /* 8637 */;

const result = set.fileFinishedImporting("modules/icymi/native/util/openDetailsActionSheet.tsx");

export const openDetailsActionSheet = function openDetailsActionSheet(arg0) {
  ({ id, type } = arg0);
  ({ guildId, channelId } = arg0);
  _modDef8637.itemInteracted(id, type, "overflow_menu");
  const obj = _modDef8637;
  _modDef8637.feedItemActioned({ itemId: id, itemType: type, actionParameters: { actionGestureType: "press", actionTargetElement: "overflow_menu_button", actionIntentType: "open", actionDestinationType: null } });
  const obj2 = _modDef8637;
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(16277, dependencyMap.paths), "ItemDetailsActionSheet", { guildId, channelId, id });
};