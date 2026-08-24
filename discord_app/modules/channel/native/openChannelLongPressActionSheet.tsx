// discord_app/modules/channel/native/openChannelLongPressActionSheet.tsx
import set from "../../../../_runtime/00002_set.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";

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
  obj.openLazy(combined(2008)(9959, dependencyMap.paths), combined, obj);
};