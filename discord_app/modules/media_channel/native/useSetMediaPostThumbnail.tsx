// === Module 10400: useSetMediaPostThumbnail ===

// Module 10400 (useSetMediaPostThumbnail)
import closure_3 from "noop" /* 19 */;
import { DraftType } from "handleChanged" /* 4806 */;
import closure_5 from "map" /* 4805 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/media_channel/native/useSetMediaPostThumbnail.tsx");

export default function useSetMediaPostThumbnail(arg0, arg1) {
  const _require = arg0;
  closure_1 = arg1;
  const items = [closure_5];
  stateFromStores = _require(stateFromStores[3]).useStateFromStores(items, () => {
    const uploads = closure_1_5.getUploads(closure_0, closure_1_4.ChannelMessage);
    let found = uploads.find((item) => {
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
      id = tmp.id;
    }
    if (null != id) {
      let tmp4 = null != stateFromStores;
      if (tmp4) {
        let id1;
        if (tmp != null) {
          id1 = tmp.id;
        }
        tmp4 = tmp24.id !== id1;
      }
      if (tmp4) {
        let obj = callback(stateFromStores[5]);
        obj.update(closure_0, tmp24.id, closure_1_4.ChannelMessage, { thumbnail: false });
      }
      let flag;
      if (tmp != null) {
        flag = tmp.isThumbnail;
      }
      if (flag == null) {
        flag = false;
      }
      const obj2 = callback(stateFromStores[5]);
      let id2;
      if (tmp != null) {
        id2 = tmp.id;
      }
      obj = { thumbnail: null, spoiler: false };
      obj[0] = !flag;
      obj2.update(closure_0, id2, closure_1_4.ChannelMessage, obj);
      callback(stateFromStores[6]).hideActionSheet();
      const obj4 = callback(stateFromStores[6]);
    }
  }, items1);
};