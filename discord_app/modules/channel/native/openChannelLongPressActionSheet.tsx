// discord_app/modules/channel/native/openChannelLongPressActionSheet.tsx
const result = require("asyncRequireImpl").fileFinishedImporting("modules/channel/native/openChannelLongPressActionSheet.tsx");

export const openChannelLongPressActionSheet = function openChannelLongPressActionSheet(id) {
  const combined = "ChannelLongPress-" + id;
  let obj = require("../../action_sheet/native/ActionSheetActionCreators.tsx");
  obj = {
    channelId: id,
    onClose() {
      outer1_1(outer1_2[0]).hideActionSheet(combined);
    }
  };
  obj.openLazy(combined(1959)(9586, dependencyMap.paths), combined, obj);
};