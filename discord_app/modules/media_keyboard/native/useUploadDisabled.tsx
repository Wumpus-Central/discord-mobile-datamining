// === Module 11706: useUploadDisabled ===

// Module 11706 (useUploadDisabled)
import set from "set" /* 2 */;
import handleChanged from "handleChanged" /* 4807 */;
import closure_3 from "getUncachedChannelPermissions" /* 4089 */;
import closure_4 from "map" /* 4806 */;
import ME from "ME" /* 676 */;

const DraftType = handleChanged.DraftType;
({ MAX_UPLOAD_COUNT: c5, Permissions: closure_6 } = ME);
const result = set.fileFinishedImporting("modules/media_keyboard/native/useUploadDisabled.tsx");

export default function useUploadDisabled(arg0) {
  const _require = arg0;
  const items = [closure_3, closure_4];
  return _require(589).useStateFromStores(items, () => {
    let tmp = closure_1_4.getUploads(lib.id, closure_1_2.ChannelMessage).length >= closure_1_5;
    if (!tmp) {
      let tmp4 = obj.id === lib(closure_1_1[5]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
      if (!tmp4) {
        let isPrivateResult = obj.isPrivate();
        if (!isPrivateResult) {
          isPrivateResult = closure_1_3.can(closure_1_6.ATTACH_FILES, obj);
        }
        tmp4 = !isPrivateResult;
      }
      tmp = tmp4;
    }
    return tmp;
  });
};