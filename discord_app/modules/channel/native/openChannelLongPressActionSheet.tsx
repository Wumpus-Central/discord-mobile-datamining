// === Module 9816: openChannelLongPressActionSheet ===

// Module 9816 (openChannelLongPressActionSheet)
import set from "set" /* 2 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4347 */;

const result = set.fileFinishedImporting("modules/channel/native/openChannelLongPressActionSheet.tsx");

export const openChannelLongPressActionSheet = function openChannelLongPressActionSheet(id) {
  const combined = "ChannelLongPress-" + id;
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = {
    channelId: id,
    onClose() {
      closure_1_1(closure_1_2[0]).hideActionSheet(combined);
    }
  };
  obj.openLazy(combined(2009)(9817, dependencyMap.paths), combined, obj);
};