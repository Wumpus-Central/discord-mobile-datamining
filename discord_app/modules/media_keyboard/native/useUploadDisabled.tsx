// discord_app/modules/media_keyboard/native/useUploadDisabled.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import handleChanged from "../../../stores/DraftStore.tsx";
import getUncachedChannelPermissions from "../../../stores/PermissionStore.tsx";
import map from "../../../stores/UploadAttachmentStore.tsx";
import ME from "../../../Constants.tsx";

const DraftType = handleChanged.DraftType;
({ MAX_UPLOAD_COUNT: c5, Permissions: closure_6 } = ME);
const result = obj132.fileFinishedImporting("modules/media_keyboard/native/useUploadDisabled.tsx");

export default function useUploadDisabled(arg0) {
  const _require = arg0;
  const items = [closure_3, closure_4];
  return require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    let tmp = closure_1_4.getUploads(lib.id, DraftType.ChannelMessage).length >= closure_1_5;
    if (!tmp) {
      let tmp4 = lib.id === lib(dependencyMap[5]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
      if (!tmp4) {
        let isPrivateResult = lib.isPrivate();
        if (!isPrivateResult) {
          isPrivateResult = closure_1_3.can(closure_1_6.ATTACH_FILES, lib);
        }
        tmp4 = !isPrivateResult;
      }
      tmp = tmp4;
    }
    return tmp;
  });
};