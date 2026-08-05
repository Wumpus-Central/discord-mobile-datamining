// discord_app/modules/icymi/native/util/openDetailsActionSheet.tsx
const result = require("ItemDetailsActionSheet").fileFinishedImporting("modules/icymi/native/util/openDetailsActionSheet.tsx");

export const openDetailsActionSheet = function openDetailsActionSheet(arg0) {
  let channelId;
  let guildId;
  let id;
  let type;
  ({ id, type } = arg0);
  ({ guildId, channelId } = arg0);
  require("../../ICYMIActionCreators.tsx").itemInteracted(id, type, "overflow_menu");
  const obj = require("../../ICYMIActionCreators.tsx");
  require("../../ICYMIActionCreators.tsx").feedItemActioned({ itemId: id, itemType: type, actionParameters: { actionGestureType: "press", actionTargetElement: "overflow_menu_button", actionIntentType: "open", actionDestinationType: null } });
  const obj2 = require("../../ICYMIActionCreators.tsx");
  require("../../../action_sheet/native/ActionSheetActionCreators.tsx").openLazy(require("../../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(15447, dependencyMap.paths), "ItemDetailsActionSheet", { guildId, channelId, id });
};