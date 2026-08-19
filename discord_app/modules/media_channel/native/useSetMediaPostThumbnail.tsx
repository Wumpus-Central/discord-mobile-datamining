// discord_app/modules/media_channel/native/useSetMediaPostThumbnail.tsx
import noop from "../../../../_runtime/00019_noop.js";
import { DraftType } from "../../../stores/DraftStore.tsx";
import map from "../../../stores/UploadAttachmentStore.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/media_channel/native/useSetMediaPostThumbnail.tsx");

export default function useSetMediaPostThumbnail(arg0, arg1) {
  const _require = arg0;
  closure_1 = arg1;
  const items = [closure_5];
  stateFromStores = _require(stateFromStores[3]).useStateFromStores(items, () => {
    const uploads = closure_1_5.getUploads(closure_0, DraftType.ChannelMessage);
    let found = uploads.find((item, index) => {
      let platform;
      if (item != null) {
        item = item.item;
        if (item != null) {
          platform = item.platform;
        }
      }
      let tmp2 = platform === callback(table[4]).UploadPlatform.REACT_NATIVE;
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
  return React.useCallback(() => {
    let id;
    if (callback != null) {
      id = callback.id;
    }
    if (null != id) {
      let tmp4 = null != stateFromStores;
      if (tmp4) {
        let id1;
        if (callback != null) {
          id1 = callback.id;
        }
        tmp4 = stateFromStores.id !== id1;
      }
      if (tmp4) {
        let obj = callback(stateFromStores[5]);
        obj.update(closure_0, stateFromStores.id, DraftType.ChannelMessage, { thumbnail: false });
      }
      let flag;
      if (callback != null) {
        flag = callback.isThumbnail;
      }
      if (flag == null) {
        flag = false;
      }
      const obj2 = callback(stateFromStores[5]);
      let id2;
      if (callback != null) {
        id2 = callback.id;
      }
      obj = { thumbnail: null, spoiler: false };
      obj[0] = !flag;
      obj2.update(closure_0, id2, DraftType.ChannelMessage, obj);
      callback(stateFromStores[6]).hideActionSheet();
      const obj4 = callback(stateFromStores[6]);
    }
  }, items1);
};