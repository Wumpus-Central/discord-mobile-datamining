// === Module 11879: useUploadDisabled ===

// Module 11879 (useUploadDisabled)
import FakePlaceholderPrivateChannel from "FakePlaceholderPrivateChannel" /* 6736 */;
import DraftStore from "DraftStore" /* 7044 */;
import PermissionStore from "PermissionStore" /* 4515 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 7280 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let hasOwnProperty;
let metroRequire;
const DraftType = DraftStore.DraftType;
({ MAX_UPLOAD_COUNT: hasOwnProperty, Permissions: metroRequire } = Constants);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let first;
  let id;
  let tmp7;
  _require = arg0;
  let tmp = _require;
  const obj = require("react");
  const cResult = obj.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore, UploadAttachmentStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      let tmp = UploadAttachmentStore.getUploads(id.id, DraftType.ChannelMessage).length >= hasOwnProperty;
      if (!tmp) {
        let tmp4 = id.id === FakePlaceholderPrivateChannel.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
        if (!tmp4) {
          tmp4 = !(id.isPrivate() || PermissionStore.can(metroRequire.ATTACH_FILES, id));
          const isPrivateResult = id.isPrivate() || PermissionStore.can(metroRequire.ATTACH_FILES, id);
        }
        tmp = tmp4;
      }
      return tmp;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp7);
}) : ((arg0) => {
  let id;
  _require = arg0;
  const items = [PermissionStore, UploadAttachmentStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    let tmp = UploadAttachmentStore.getUploads(id.id, DraftType.ChannelMessage).length >= hasOwnProperty;
    if (!tmp) {
      let tmp4 = id.id === FakePlaceholderPrivateChannel.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
      if (!tmp4) {
        tmp4 = !(id.isPrivate() || PermissionStore.can(metroRequire.ATTACH_FILES, id));
        const isPrivateResult = id.isPrivate() || PermissionStore.can(metroRequire.ATTACH_FILES, id);
      }
      tmp = tmp4;
    }
    return tmp;
  });
});
const result = size.fileFinishedImporting("modules/media_keyboard/native/useUploadDisabled.tsx");

export default tmp3;