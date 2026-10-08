// === Module 16736: openDetailsActionSheet ===

// Module 16736 (openDetailsActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 8447 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/icymi/native/util/openDetailsActionSheet.tsx");

export const openDetailsActionSheet = function openDetailsActionSheet(arg0) {
  ({ id, type } = arg0);
  ({ guildId, channelId } = arg0);
  ICYMIActionCreatorsDefault.itemInteracted(id, type, "overflow_menu");
  ICYMIActionCreatorsDefault.feedItemActioned({ itemId: id, itemType: type, actionParameters: { actionGestureType: "press", actionTargetElement: "overflow_menu_button", actionIntentType: "open", actionDestinationType: null } });
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16702, dependencyMap.paths), "ItemDetailsActionSheet", { guildId, channelId, id });
};