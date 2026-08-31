// === Module 16045: openDetailsActionSheet ===

// Module 16045 (openDetailsActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4415 */;
import _modDef8590 from "module_8590" /* 8590 */;

const result = set.fileFinishedImporting("modules/icymi/native/util/openDetailsActionSheet.tsx");

export const openDetailsActionSheet = function openDetailsActionSheet(arg0) {
  ({ id, type } = arg0);
  ({ guildId, channelId } = arg0);
  _modDef8590.itemInteracted(id, type, "overflow_menu");
  const obj = _modDef8590;
  _modDef8590.feedItemActioned({ itemId: id, itemType: type, actionParameters: { actionGestureType: "press", actionTargetElement: "overflow_menu_button", actionIntentType: "open", actionDestinationType: null } });
  const obj2 = _modDef8590;
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(16011, dependencyMap.paths), "ItemDetailsActionSheet", { guildId, channelId, id });
};