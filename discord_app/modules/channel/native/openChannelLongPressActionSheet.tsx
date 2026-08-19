// === Module 9919: openChannelLongPressActionSheet ===

// Module 9919 (openChannelLongPressActionSheet)
import obj132 from "obj132" /* 2 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;

const result = obj132.fileFinishedImporting("modules/channel/native/openChannelLongPressActionSheet.tsx");

export const openChannelLongPressActionSheet = function openChannelLongPressActionSheet(id) {
  const combined = "ChannelLongPress-" + id;
  const obj = {
    channelId: id,
    onClose() {
      ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet(combined);
    }
  };
  obj.openLazy(combined(2007)(9920, dependencyMap.paths), combined, obj);
};