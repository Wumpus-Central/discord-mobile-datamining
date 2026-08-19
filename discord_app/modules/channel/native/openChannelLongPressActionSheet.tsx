// discord_app/modules/channel/native/openChannelLongPressActionSheet.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";

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