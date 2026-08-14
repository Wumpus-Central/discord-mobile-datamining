// discord_app/modules/channel/native/openChannelLongPressActionSheet.tsx
import { ACTION_SHEET_HEIGHT_HALF } from "../../action_sheet/native/ActionSheetActionCreators.tsx";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/channel/native/openChannelLongPressActionSheet.tsx");

export const openChannelLongPressActionSheet = function openChannelLongPressActionSheet(id) {
  const combined = "ChannelLongPress-" + id;
  let obj = ACTION_SHEET_HEIGHT_HALF;
  obj = {
    channelId: id,
    onClose() {
      outer1_1(outer1_2[0]).hideActionSheet(combined);
    }
  };
  obj.openLazy(combined(2007)(9727, dependencyMap.paths), combined, obj);
};