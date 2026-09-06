// discord_app/modules/media_channel/native/useSetMediaPostThumbnail.tsx
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import UploadAttachmentActionCreatorsDefault from "../../../actions/UploadAttachmentActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UploadAttachmentStore from "../../../stores/UploadAttachmentStore.tsx";

const require = fn;
const DraftType = fn(4901).DraftType;
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_channel/native/useSetMediaPostThumbnail.tsx");

export default function useSetMediaPostThumbnail(arg0, arg1) {
  _require = arg0;
  const user = arg1;
  const items = [UploadAttachmentStore];
  stateFromStores = require("useStateFromStores").useStateFromStores(items, () => {
    const uploads = UploadAttachmentStore.getUploads(closure_0, DraftType.ChannelMessage);
    let found = uploads.find((item) => {
      let platform;
      if (item != null) {
        item = item.item;
        if (item != null) {
          platform = item.platform;
        }
      }
      let tmp2 = platform === closure_1_0(stateFromStores[4]).UploadPlatform.REACT_NATIVE;
      if (tmp2) {
        tmp2 = true === item.isThumbnail;
      }
      return tmp2;
    });
    if (found == null) {
      found = null;
    }
    return found;
  });
  const items1 = [stateFromStores, arg0, arg1];
  return noop.useCallback(() => {
    let id;
    if (user != null) {
      id = user.id;
    }
    if (null != id) {
      let tmp4 = null != stateFromStores;
      if (tmp4) {
        let id1;
        if (user != null) {
          id1 = user.id;
        }
        tmp4 = stateFromStores.id !== id1;
      }
      if (tmp4) {
        let obj = UploadAttachmentActionCreatorsDefault;
        obj.update(closure_0, stateFromStores.id, DraftType.ChannelMessage, { thumbnail: false });
      }
      let flag;
      if (user != null) {
        flag = user.isThumbnail;
      }
      if (flag == null) {
        flag = false;
      }
      const obj2 = UploadAttachmentActionCreatorsDefault;
      let id2;
      if (user != null) {
        id2 = user.id;
      }
      obj = { thumbnail: !flag, spoiler: false };
      obj2.update(closure_0, id2, DraftType.ChannelMessage, obj);
      ActionSheetActionCreatorsDefault.hideActionSheet();
    }
  }, items1);
}
