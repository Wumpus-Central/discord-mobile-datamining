const result = require("ItemDetailsActionSheet").fileFinishedImporting("modules/icymi/native/util/openDetailsActionSheet.tsx");

export const openDetailsActionSheet = function openDetailsActionSheet(arg0) {
  let channelId;
  let guildId;
  let id;
  let type;
  ({ id, type } = arg0);
  ({ guildId, channelId } = arg0);
  importDefault(8189).itemInteracted(id, type, "overflow_menu");
  const obj = importDefault(8189);
  importDefault(8189).feedItemActioned({ itemId: id, itemType: type, actionParameters: { actionGestureType: "press", actionTargetElement: "overflow_menu_button", actionIntentType: "open", actionDestinationType: null } });
  const obj2 = importDefault(8189);
  importDefault(4161).openLazy(require(1959) /* asyncRequireImpl */(15350, dependencyMap.paths), "ItemDetailsActionSheet", { guildId, channelId, id });
};