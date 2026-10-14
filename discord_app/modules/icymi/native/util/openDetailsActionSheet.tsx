// === Module 17291: openDetailsActionSheet ===

// Module 17291 (openDetailsActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5060 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 8479 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/icymi/native/util/openDetailsActionSheet.tsx");

export const openDetailsActionSheet = function openDetailsActionSheet(arg0) {
  ({ id, type } = arg0);
  ({ guildId, channelId } = arg0);
  ICYMIActionCreatorsDefault.itemInteracted(id, type, "overflow_menu");
  ICYMIActionCreatorsDefault.feedItemActioned({ itemId: id, itemType: type, actionParameters: { actionGestureType: "press", actionTargetElement: "overflow_menu_button", actionIntentType: "open", actionDestinationType: null } });
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(17259, dependencyMap.paths), "ItemDetailsActionSheet", { guildId, channelId, id });
};