// discord_app/stores/UploadStore.tsx
import get_initializedDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import MessageStore from "MessageStore.tsx";
import size_mod from "../../_runtime/metro/00002__.js";

let cancel, closure_8, item;

const re1 = /^(assets-library|ph|file):\/\//;
const re2 = /^content:\/\//;
let closure_3 = Object.freeze([]);
const React3 = {};
let closure_5 = {};
const metroRequire = {};
const metroImportDefault = {};
const metroImportAll = {};
const Store = get_initializedDefault.Store;
class UploadStore extends Store {
  initialize() {
    this.waitFor(MessageStore);
  }
  getFiles(arg0) {
    let tmp = closure_4[arg0];
    if (tmp == null) {
      tmp = closure_3;
    }
    return tmp;
  }
  getMessageForFile(id) {
    return closure_6[id];
  }
  getUploaderFileForMessageId(id) {
    return closure_7[id];
  }
  getUploadAttachments(nonce) {
    if (null != nonce) {
      return closure_8[nonce];
    }
  }
}
const prototype = UploadStore.prototype;
UploadStore.displayName = "UploadStore";
let obj = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    closure_8 = {};
  },
  LOGOUT: function handleLogout() {
    closure_8 = {};
  },
  UPLOAD_START: function handleUploadStart(arg0) {
    let channelId;
    let file;
    let message;
    let uploader;
    ({ channelId, file, uploader, message } = arg0);
    if (!uploader._aborted) {
      if (!uploader._errored) {
        let tmp3 = closure_4[channelId];
        if (tmp3 == null) {
          tmp3 = closure_3;
        }
        closure_5[file.id] = uploader;
        const items1 = [];
        items1[HermesBuiltin.arraySpread(items1, tmp3, 0)] = file;
        closure_4[channelId] = items1;
        if (null != message) {
          closure_6[file.id] = message;
          const items = file.items;
          if (null != items) {
            const id = message.id;
            const obj = { items };
            const merged = Object.assign(file);
            closure_7[id] = obj;
          }
          let id2 = message.nonce;
          if (id2 == null) {
            id2 = message.id;
          }
          const items2 = file.items;
          let mapped;
          if (items2 != null) {
            mapped = items2.map((item) => {
              let num2;
              let str;
              let str2;
              item = item.item;
              let num = item.width;
              if (num == null) {
                num = 0;
              }
              size = { width: num, height: num2, localUri: str, uploaderId: file.id, uploaderItemId: str2 };
              num2 = item.height;
              if (num2 == null) {
                num2 = 0;
              }
              str = item.originalUri;
              if (str == null) {
                str = "";
              }
              str2 = item.id;
              if (str2 == null) {
                str2 = "";
              }
              return size;
            });
          }
          if (mapped == null) {
            mapped = [];
          }
          closure_8[id2] = mapped;
        }
      }
    }
  },
  UPLOAD_COMPRESSION_PROGRESS: function handleUploadCompressionProgress(arg0) {
    let channelId;
    let file;
    ({ channelId, file } = arg0);
    if (null != closure_4[channelId]) {
      tmp[channelId] = closure_4[channelId].map((id) => {
        let tmp2 = id;
        if (id.id === file.id) {
          const obj = {};
          const merged = Object.assign(id);
          const merged1 = Object.assign(file);
          tmp2 = obj;
        }
        return tmp2;
      });
      const tmp4 = null != tmp3 && null != closure_7[tmp3.id];
      if (tmp4) {
        const id = tmp3.id;
        const obj = {};
        const merged = Object.assign(closure_7[tmp3.id]);
        const merged1 = Object.assign(file);
        closure_7[id] = obj;
      }
    }
  },
  UPLOAD_PROGRESS: function handleUploadProgress(arg0) {
    let channelId;
    let file;
    ({ channelId, file } = arg0);
    if (null != closure_4[channelId]) {
      tmp[channelId] = closure_4[channelId].map((id) => {
        let tmp2 = id;
        if (id.id === file.id) {
          const obj = {};
          const merged = Object.assign(id);
          const merged1 = Object.assign(file);
          tmp2 = obj;
        }
        return tmp2;
      });
      const tmp4 = null != tmp3 && null != closure_7[tmp3.id];
      if (tmp4) {
        const id = tmp3.id;
        const obj = {};
        const merged = Object.assign(closure_7[tmp3.id]);
        const merged1 = Object.assign(file);
        closure_7[id] = obj;
      }
    }
  },
  UPLOAD_COMPLETE: function handleUploadComplete(channelId) {
    channelId = channelId.channelId;
    const id = channelId.file.id;
    let tmp2 = null != arr;
    if (tmp2) {
      closure_4[channelId] = closure_4[channelId].filter((id) => id.id !== id);
      delete closure_5[id];
      delete closure_6[id];
      tmp2 = arr.length !== closure_4[channelId].length;
    }
    return tmp2;
  },
  UPLOAD_FAIL: function handleUploadFail(channelId) {
    channelId = channelId.channelId;
    const id = channelId.file.id;
    let tmp2 = null != arr;
    if (tmp2) {
      closure_4[channelId] = closure_4[channelId].filter((id) => id.id !== id);
      delete closure_5[id];
      delete closure_6[id];
      tmp2 = arr.length !== closure_4[channelId].length;
    }
    return tmp2;
  },
  UPLOAD_CANCEL_REQUEST: function handleUploadCancel(arg0) {
    let closure_0 = tmp;
    if (null == closure_5[arg0.file.id]) {
      return false;
    } else {
      const _setImmediate = setImmediate;
      setImmediate(() => {
        cancel = cancel.cancel;
        let cancelResult;
        if (cancel != null) {
          cancelResult = cancel();
        }
        return cancelResult;
      });
    }
  },
  UPLOAD_ITEM_CANCEL_REQUEST: function handleUploadItemCancel(itemId) {
    itemId = itemId.itemId;
    let closure_1 = tmp;
    if (null == closure_5[itemId.file.id]) {
      return false;
    } else {
      const _setImmediate = setImmediate;
      setImmediate(() => closure_1.cancelItem(itemId));
    }
  },
  UPLOAD_FILE_UPDATE: function handleUploadFileUpdate(arg0) {
    let channelId;
    let file;
    ({ channelId, file } = arg0);
    let tmp2 = closure_6[file.id];
    if (null != tmp2) {
      let id = tmp2.nonce;
      if (id == null) {
        id = tmp2.id;
      }
      const items = file.items;
      let mapped;
      if (items != null) {
        mapped = items.map((item) => {
          let num2;
          let str;
          let str2;
          item = item.item;
          let num = item.width;
          if (num == null) {
            num = 0;
          }
          size = { width: num, height: num2, localUri: str, uploaderId: file.id, uploaderItemId: str2 };
          num2 = item.height;
          if (num2 == null) {
            num2 = 0;
          }
          str = item.originalUri;
          if (str == null) {
            str = "";
          }
          str2 = item.id;
          if (str2 == null) {
            str2 = "";
          }
          return size;
        });
      }
      if (mapped == null) {
        mapped = [];
      }
      closure_8[id] = mapped;
    }
    if (null != closure_4[channelId]) {
      tmp4[channelId] = closure_4[channelId].map((id) => {
        let tmp2 = id;
        if (id.id === file.id) {
          const obj = {};
          const merged = Object.assign(id);
          const merged1 = Object.assign(file);
          tmp2 = obj;
        }
        return tmp2;
      });
      const tmp6 = null != tmp5 && null != closure_7[tmp5.id];
      if (tmp6) {
        let obj = {};
        const id2 = tmp5.id;
        let merged = Object.assign(closure_7[tmp5.id]);
        let merged1 = Object.assign(file);
        closure_7[id2] = obj;
      }
    }
  },
  UPLOAD_RESTORE_FAILED_UPLOAD: function restoreFailedUpload(messageId) {
    closure_7[messageId.messageId] = messageId.file;
  },
};
const uploadStore = new UploadStore(DispatcherDefault, obj);
let size = size_mod;
const result = size.fileFinishedImporting("stores/UploadStore.tsx");

export default uploadStore;
