// === Module 16831: openDetailsActionSheet ===

// Module 16831 (openDetailsActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 8622 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/icymi/native/util/openDetailsActionSheet.tsx");

export const openDetailsActionSheet = function openDetailsActionSheet(arg0) {
  ({ id, type } = arg0);
  ({ guildId, channelId } = arg0);
  ICYMIActionCreatorsDefault.itemInteracted(id, type, "overflow_menu");
  ICYMIActionCreatorsDefault.feedItemActioned({ itemId: id, itemType: type, actionParameters: { actionGestureType: "press", actionTargetElement: "overflow_menu_button", actionIntentType: "open", actionDestinationType: null } });
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16797, dependencyMap.paths), "ItemDetailsActionSheet", { guildId, channelId, id });
};