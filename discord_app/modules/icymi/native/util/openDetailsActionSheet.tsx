// discord_app/modules/icymi/native/util/openDetailsActionSheet.tsx
import asyncRequireImpl from "../../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import ICYMIActionCreatorsDefault from "../../ICYMIActionCreators.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/icymi/native/util/openDetailsActionSheet.tsx");

export const openDetailsActionSheet = function openDetailsActionSheet(arg0) {
  ({ id, type } = arg0);
  ({ guildId, channelId } = arg0);
  ICYMIActionCreatorsDefault.itemInteracted(id, type, "overflow_menu");
  ICYMIActionCreatorsDefault.feedItemActioned({
    itemId: id,
    itemType: type,
    actionParameters: {
      actionGestureType: "press",
      actionTargetElement: "overflow_menu_button",
      actionIntentType: "open",
      actionDestinationType: null,
    },
  });
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16458, dependencyMap.paths), "ItemDetailsActionSheet", {
    guildId,
    channelId,
    id,
  });
};
