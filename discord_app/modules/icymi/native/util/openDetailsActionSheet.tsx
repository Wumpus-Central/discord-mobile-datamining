// discord_app/modules/icymi/native/util/openDetailsActionSheet.tsx
import asyncRequire from "../../../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import ICYMIActionCreatorsDefault from "../../ICYMIActionCreators.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/icymi/native/util/openDetailsActionSheet.tsx");

export const openDetailsActionSheet = function openDetailsActionSheet(arg0) {
  let channelId;
  let guildId;
  let id;
  let type;
  ({ id, type } = arg0);
  ({ guildId, channelId } = arg0);
  const obj = ICYMIActionCreatorsDefault;
  obj.itemInteracted(id, type, "overflow_menu");
  const obj2 = ICYMIActionCreatorsDefault;
  obj2.feedItemActioned({
    itemId: id,
    itemType: type,
    actionParameters: {
      actionGestureType: "press",
      actionTargetElement: "overflow_menu_button",
      actionIntentType: "open",
      actionDestinationType: null,
    },
  });
  const obj3 = ActionSheetActionCreatorsDefault;
  obj3.openLazy(asyncRequire(16402, dependencyMap.paths), "ItemDetailsActionSheet", { guildId, channelId, id });
};
