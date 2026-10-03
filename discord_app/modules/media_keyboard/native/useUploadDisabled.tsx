// === Module 11865: useUploadDisabled ===

// Module 11865 (useUploadDisabled)
import FakePlaceholderPrivateChannel from "FakePlaceholderPrivateChannel" /* 6722 */;
import DraftStore from "DraftStore" /* 7031 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 7267 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const DraftType = DraftStore.DraftType;
({ MAX_UPLOAD_COUNT: hasOwnProperty, Permissions: metroRequire } = Constants);
const result = size.fileFinishedImporting("modules/media_keyboard/native/useUploadDisabled.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore, UploadAttachmentStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
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
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp7);
}) : ((arg0) => {
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
});