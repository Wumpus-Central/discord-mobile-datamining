// === Module 12236: useUploadDisabled ===

// Module 12236 (useUploadDisabled)
import DraftStore from "DraftStore" /* 4901 */;
import FakePlaceholderPrivateChannel from "FakePlaceholderPrivateChannel" /* 7221 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 4900 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const DraftType = DraftStore.DraftType;
({ MAX_UPLOAD_COUNT: hasOwnProperty, Permissions: metroRequire } = Constants);
const result = size.fileFinishedImporting("modules/media_keyboard/native/useUploadDisabled.tsx");

export default function useUploadDisabled(arg0) {
  _require = arg0;
  const items = [PermissionStore, UploadAttachmentStore];
  return require("initialize").useStateFromStores(items, () => {
    let tmp = UploadAttachmentStore.getUploads(id.id, DraftType.ChannelMessage).length >= hasOwnProperty;
    if (!tmp) {
      let tmp4 = id.id === FakePlaceholderPrivateChannel.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
      if (!tmp4) {
        let isPrivateResult = id.isPrivate();
        if (!isPrivateResult) {
          isPrivateResult = PermissionStore.can(constants.ATTACH_FILES, id);
        }
        tmp4 = !isPrivateResult;
      }
      tmp = tmp4;
    }
    return tmp;
  });
};