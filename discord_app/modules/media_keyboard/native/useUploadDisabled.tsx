// === Module 11951: useUploadDisabled ===

// Module 11951 (useUploadDisabled)
import FakePlaceholderPrivateChannel from "FakePlaceholderPrivateChannel" /* 6910 */;
import DraftStore from "DraftStore" /* 7232 */;
import PermissionStore from "PermissionStore" /* 4707 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 7880 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const DraftType = DraftStore.DraftType;
({ MAX_UPLOAD_COUNT: hasOwnProperty, Permissions: metroRequire } = Constants);
const result = size.fileFinishedImporting("modules/media_keyboard/native/useUploadDisabled.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useUploadDisabled(arg0) {
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
    class A {
      constructor() {
        obj = closure_0;
        tmp = closure_4.getUploads(closure_0.id, DraftType.ChannelMessage).length >= MAX_UPLOAD_COUNT;
        if (!tmp) {
          tmp2 = closure_0;
          tmp3 = closure_1;
          tmp4 = obj.id === closure_0(closure_1[6]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
          if (!tmp4) {
            isPrivateResult = obj.isPrivate();
            if (!isPrivateResult) {
              tmp6 = closure_3;
              tmp7 = Permissions;
              isPrivateResult = closure_3.can(Permissions.ATTACH_FILES, obj);
            }
            tmp4 = !isPrivateResult;
          }
          tmp = tmp4;
        }
        return tmp;
      }
    }
    cResult[1] = arg0;
    cResult[2] = A;
  } else {
    class A {
      constructor() {
        obj = closure_0;
        tmp = closure_4.getUploads(closure_0.id, DraftType.ChannelMessage).length >= MAX_UPLOAD_COUNT;
        if (!tmp) {
          tmp2 = closure_0;
          tmp3 = closure_1;
          tmp4 = obj.id === closure_0(closure_1[6]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
          if (!tmp4) {
            isPrivateResult = obj.isPrivate();
            if (!isPrivateResult) {
              tmp6 = closure_3;
              tmp7 = Permissions;
              isPrivateResult = closure_3.can(Permissions.ATTACH_FILES, obj);
            }
            tmp4 = !isPrivateResult;
          }
          tmp = tmp4;
        }
        return tmp;
      }
    }
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, A);
}) : (function useUploadDisabled(arg0) {
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