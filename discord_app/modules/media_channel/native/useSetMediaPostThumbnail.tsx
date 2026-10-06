// === Module 11046: useSetMediaPostThumbnail ===

// Module 11046 (useSetMediaPostThumbnail)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import DraftStore from "DraftStore" /* 7044 */;
import UploadAttachmentActionCreatorsDefault from "UploadAttachmentActionCreators" /* 8842 */;
import react from "react" /* 19 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 7280 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, item;

const DraftType = DraftStore.DraftType;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, id) => {
  let closure_0;
  let first;
  let stateFromStores;
  let tmp6;
  _require = arg0;
  const user = id;
  let tmp2 = stateFromStores;
  let obj = require("react");
  const cResult = obj.c(8);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UploadAttachmentStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      const uploads = UploadAttachmentStore.getUploads(closure_0, DraftType.ChannelMessage);
      let found = uploads.find((item) => {
        let platform;
        if (item != null) {
          item = item.item;
          if (item != null) {
            platform = item.platform;
          }
        }
        const tmp2 = platform === closure_1_0(stateFromStores[5]).UploadPlatform.REACT_NATIVE && true === item.isThumbnail;
        return tmp2;
      });
      if (found == null) {
        found = null;
      }
      return found;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(tmp2[6]);
  stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] === arg0) {
    if (cResult[4] === stateFromStores) {
      id = undefined;
      const tmp8 = cResult[5];
      if (id != null) {
        id = id.id;
      }
      if (tmp8 === id) {
        let tmp13;
        let isThumbnail;
        const tmp11 = cResult[6];
        if (id != null) {
          isThumbnail = id.isThumbnail;
        }
        if (tmp11 === isThumbnail) {
          tmp13 = cResult[7];
        }
        return tmp13;
      }
    }
  }
  cResult[3] = arg0;
  cResult[4] = stateFromStores;
  let id1;
  if (id != null) {
    id1 = id.id;
  }
  cResult[5] = id1;
  let isThumbnail1;
  if (id != null) {
    isThumbnail1 = id.isThumbnail;
  }
  const fn2 = function f() {
    let id1;
    if (user != null) {
      id1 = user.id;
    }
    if (null != id1) {
      let tmp4 = null != stateFromStores;
      if (tmp4) {
        let id2;
        const id = stateFromStores.id;
        if (user != null) {
          id2 = user.id;
        }
        tmp4 = id !== id2;
      }
      if (tmp4) {
        const obj = UploadAttachmentActionCreatorsDefault;
        obj.update(closure_0, stateFromStores.id, DraftType.ChannelMessage, { thumbnail: false });
      }
      let flag;
      if (user != null) {
        flag = user.isThumbnail;
      }
      if (flag == null) {
        flag = false;
      }
      let id3;
      const update = UploadAttachmentActionCreatorsDefault.update;
      if (user != null) {
        id3 = user.id;
      }
      const obj2 = { thumbnail: !flag, spoiler: false };
      update(closure_0, id3, DraftType.ChannelMessage, obj2);
      const obj3 = ActionSheetActionCreatorsDefault;
      obj3.hideActionSheet();
    }
  };
  cResult[6] = isThumbnail1;
  cResult[7] = fn2;
  tmp13 = fn2;
}) : ((arg0, arg1) => {
  let closure_0;
  let stateFromStores;
  _require = arg0;
  const user = arg1;
  let obj = require("useStateFromStores");
  const items = [UploadAttachmentStore];
  stateFromStores = obj.useStateFromStores(items, () => {
    const uploads = UploadAttachmentStore.getUploads(closure_0, DraftType.ChannelMessage);
    let found = uploads.find((item) => {
      let platform;
      if (item != null) {
        item = item.item;
        if (item != null) {
          platform = item.platform;
        }
      }
      const tmp2 = platform === closure_1_0(stateFromStores[5]).UploadPlatform.REACT_NATIVE && true === item.isThumbnail;
      return tmp2;
    });
    if (found == null) {
      found = null;
    }
    return found;
  });
  const items1 = [stateFromStores, arg0, arg1];
  return react.useCallback(() => {
    let id1;
    if (user != null) {
      id1 = user.id;
    }
    if (null != id1) {
      let tmp4 = null != stateFromStores;
      if (tmp4) {
        let id2;
        const id = stateFromStores.id;
        if (user != null) {
          id2 = user.id;
        }
        tmp4 = id !== id2;
      }
      if (tmp4) {
        const obj = UploadAttachmentActionCreatorsDefault;
        obj.update(closure_0, stateFromStores.id, DraftType.ChannelMessage, { thumbnail: false });
      }
      let flag;
      if (user != null) {
        flag = user.isThumbnail;
      }
      if (flag == null) {
        flag = false;
      }
      let id3;
      const update = UploadAttachmentActionCreatorsDefault.update;
      if (user != null) {
        id3 = user.id;
      }
      const obj2 = { thumbnail: !flag, spoiler: false };
      update(closure_0, id3, DraftType.ChannelMessage, obj2);
      const obj3 = ActionSheetActionCreatorsDefault;
      obj3.hideActionSheet();
    }
  }, items1);
});
const result = size.fileFinishedImporting("modules/media_channel/native/useSetMediaPostThumbnail.tsx");

export default tmp2;