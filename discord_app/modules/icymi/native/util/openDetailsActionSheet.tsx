// discord_app/modules/icymi/native/util/openDetailsActionSheet.tsx
import set from "../../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../../_runtime/02009_asyncRequireImpl.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import _modDef9128 from "../../ICYMIActionCreators.tsx";

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