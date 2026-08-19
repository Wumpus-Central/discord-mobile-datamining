// discord_app/stores/UploadStore.tsx
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../Dispatcher.tsx";
import reinjectEphemerals from "MessageStore.tsx";

const re1 = /^(assets-library|ph|file):\/\//;
const re2 = /^content:\/\//;
let closure_3 = Object.freeze([]);
let closure_4 = {};
let closure_5 = {};
let closure_6 = {};
let closure_7 = {};
let closure_8 = {};
const Store = initializeDefault.Store;
class UploadStore extends Store {
}
const prototype = UploadStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_0);
};
prototype["getFiles"] = function getFiles(arg0) {
  let tmp = dependencyMap[arg0];
  if (tmp == null) {
    tmp = closure_3;
  }
  return tmp;
};
prototype["getMessageForFile"] = function getMessageForFile(id) {
  return dependencyMap3[id];
};
prototype["getUploaderFileForMessageId"] = function getUploaderFileForMessageId(id) {
  return dependencyMap4[id];
};
prototype["getUploadAttachments"] = function getUploadAttachments(nonce) {
  if (null != nonce) {
    return table[nonce];
  }
};
UploadStore.displayName = "UploadStore";
const uploadStore = new UploadStore(dispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen() {
    closure_8 = {};
  },
  LOGOUT: function handleLogout() {
    closure_8 = {};
  },
  UPLOAD_START: function handleUploadStart(arg0) {
    ({ channelId, file, uploader, message } = arg0);
    if (!uploader._aborted) {
      if (!uploader._errored) {
        let tmp2 = dependencyMap[channelId];
        if (tmp2 == null) {
          tmp2 = closure_3;
        }
        closure_5[file.id] = uploader;
        let items = [];
        items[HermesBuiltin.arraySpread(tmp2, 0)] = file;
        dependencyMap[channelId] = items;
        if (null != message) {
          closure_6[file.id] = message;
          items = file.items;
          if (null != items) {
            const obj = {};
            const merged = Object.assign(file);
            obj.items = items;
            closure_7[message.id] = obj;
          }
          let id = message.nonce;
          if (id == null) {
            id = message.id;
          }
          const items1 = file.items;
          let mapped;
          if (items1 != null) {
            mapped = items1.map((item, index) => {
              item = item.item;
              let num = item.width;
              if (num == null) {
                num = 0;
              }
              const obj = { width: num, height: null, localUri: null, uploaderId: null, uploaderItemId: null };
              let num2 = item.height;
              if (num2 == null) {
                num2 = 0;
              }
              obj[1] = num2;
              let str = item.originalUri;
              if (str == null) {
                str = "";
              }
              obj[2] = str;
              obj[3] = file.id;
              let str2 = item.id;
              if (str2 == null) {
                str2 = "";
              }
              obj[4] = str2;
              return obj;
            });
          }
          if (mapped == null) {
            mapped = [];
          }
          closure_8[id] = mapped;
        }
      }
    }
  },
  UPLOAD_COMPRESSION_PROGRESS: function handleUploadCompressionProgress(arg0) {
    ({ channelId, file } = arg0);
    if (null != dependencyMap[channelId]) {
      tmp[channelId] = arr.map((item, index) => {
        let tmp2 = item;
        if (item.id === file.id) {
          const obj = {};
          const merged = Object.assign(item);
          const merged1 = Object.assign(file);
          tmp2 = obj;
        }
        return tmp2;
      });
      let tmp4 = null != tmp3;
      if (tmp4) {
        tmp4 = null != dependencyMap4[tmp3.id];
      }
      if (tmp4) {
        const obj = {};
        const merged = Object.assign(dependencyMap4[tmp3.id]);
        const merged1 = Object.assign(file);
        dependencyMap4[tmp3.id] = obj;
      }
    }
  },
  UPLOAD_PROGRESS: function handleUploadProgress(arg0) {
    ({ channelId, file } = arg0);
    if (null != dependencyMap[channelId]) {
      tmp[channelId] = arr.map((item, index) => {
        let tmp2 = item;
        if (item.id === file.id) {
          const obj = {};
          const merged = Object.assign(item);
          const merged1 = Object.assign(file);
          tmp2 = obj;
        }
        return tmp2;
      });
      let tmp4 = null != tmp3;
      if (tmp4) {
        tmp4 = null != dependencyMap4[tmp3.id];
      }
      if (tmp4) {
        const obj = {};
        const merged = Object.assign(dependencyMap4[tmp3.id]);
        const merged1 = Object.assign(file);
        dependencyMap4[tmp3.id] = obj;
      }
    }
  },
  UPLOAD_COMPLETE: function handleUploadComplete(channelId) {
    channelId = channelId.channelId;
    const id = channelId.file.id;
    let tmp5 = null != arr;
    if (tmp5) {
      dependencyMap[channelId] = arr.filter((item, index) => item.id !== id);
      delete tmp3[tmp2];
      delete tmp[tmp2];
      tmp5 = arr.length !== dependencyMap[channelId].length;
    }
    return tmp5;
  },
  UPLOAD_FAIL: function handleUploadFail(channelId) {
    channelId = channelId.channelId;
    const id = channelId.file.id;
    let tmp5 = null != arr;
    if (tmp5) {
      dependencyMap[channelId] = arr.filter((item, index) => item.id !== id);
      delete tmp3[tmp2];
      delete tmp[tmp2];
      tmp5 = arr.length !== dependencyMap[channelId].length;
    }
    return tmp5;
  },
  UPLOAD_CANCEL_REQUEST: function handleUploadCancel(arg0) {
    closure_0 = tmp;
    if (null == dependencyMap2[arg0.file.id]) {
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
    closure_1 = tmp;
    if (null == dependencyMap2[itemId.file.id]) {
      return false;
    } else {
      const _setImmediate = setImmediate;
      setImmediate(() => closure_1.cancelItem(itemId));
    }
  },
  UPLOAD_FILE_UPDATE: function handleUploadFileUpdate(arg0) {
    ({ channelId, file } = arg0);
    if (null != dependencyMap3[file.id]) {
      let id = tmp2.nonce;
      if (id == null) {
        id = tmp2.id;
      }
      const items = file.items;
      let mapped;
      if (items != null) {
        mapped = items.map((item, index) => {
          item = item.item;
          let num = item.width;
          if (num == null) {
            num = 0;
          }
          const obj = { width: num, height: null, localUri: null, uploaderId: null, uploaderItemId: null };
          let num2 = item.height;
          if (num2 == null) {
            num2 = 0;
          }
          obj[1] = num2;
          let str = item.originalUri;
          if (str == null) {
            str = "";
          }
          obj[2] = str;
          obj[3] = file.id;
          let str2 = item.id;
          if (str2 == null) {
            str2 = "";
          }
          obj[4] = str2;
          return obj;
        });
      }
      if (mapped == null) {
        mapped = [];
      }
      closure_8[id] = mapped;
    }
    if (null != dependencyMap[channelId]) {
      tmp4[channelId] = arr3.map((item, index) => {
        let tmp2 = item;
        if (item.id === file.id) {
          const obj = {};
          const merged = Object.assign(item);
          const merged1 = Object.assign(file);
          tmp2 = obj;
        }
        return tmp2;
      });
      let tmp6 = null != tmp5;
      if (tmp6) {
        tmp6 = null != dependencyMap4[tmp5.id];
      }
      if (tmp6) {
        let obj = {};
        let merged = Object.assign(dependencyMap4[tmp5.id]);
        let merged1 = Object.assign(file);
        dependencyMap4[tmp5.id] = obj;
      }
    }
  },
  UPLOAD_RESTORE_FAILED_UPLOAD: function restoreFailedUpload(messageId) {
    closure_7[messageId.messageId] = messageId.file;
  }
});
const result = require("obj132").fileFinishedImporting("stores/UploadStore.tsx");

export default uploadStore;