// discord_app/modules/icymi/native/util/openDetailsActionSheet.tsx
import set from "../../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../../_runtime/02010_asyncRequireImpl.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import _modDef8568 from "../../ICYMIActionCreators.tsx";

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