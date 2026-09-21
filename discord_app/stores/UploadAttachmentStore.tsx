// === Module 5104: UploadAttachmentStore ===

// Module 5104 (UploadAttachmentStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import Constants from "Constants" /* 1074 */;
import DraftStore from "DraftStore" /* 5105 */;
import CloudUpload from "CloudUpload" /* 5343 */;
import uploader_UploadUtils from "uploader/UploadUtils" /* 5352 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const DraftType = DraftStore.DraftType;
const MAX_UPLOAD_COUNT = Constants.MAX_UPLOAD_COUNT;
let map = new Map();
let closure_6 = [];
const Store = initializeDefault.Store;
class UploadAttachmentStore extends Store {
}
const prototype = UploadAttachmentStore.prototype;
prototype["getFirstUpload"] = function getFirstUpload(arg0, arg1) {
  map = map.get(arg0);
  if (map == null) {
    const _Map = Map;
    map = new Map();
  }
  value2 = undefined;
  if (map != null) {
    value2 = map.get(arg1);
  }
  if (value2 == null) {
    value2 = closure_6;
  }
  let first = null;
  if (value2.length > 0) {
    first = value2[0];
  }
  return first;
};
prototype["hasAdditionalUploads"] = function hasAdditionalUploads(arg0, arg1) {
  map = map.get(arg0);
  if (map == null) {
    const _Map = Map;
    map = new Map();
  }
  value2 = undefined;
  if (map != null) {
    value2 = map.get(arg1);
  }
  if (value2 == null) {
    value2 = closure_6;
  }
  let num = value2.length;
  if (num == null) {
    num = 0;
  }
  return num > 1;
};
prototype["getUploads"] = function getUploads(id, ChannelMessage) {
  map = map.get(id);
  if (map == null) {
    const _Map = Map;
    map = new Map();
  }
  value2 = undefined;
  if (map != null) {
    value2 = map.get(ChannelMessage);
  }
  if (value2 == null) {
    value2 = closure_6;
  }
  return value2;
};
prototype["getUploadCount"] = function getUploadCount(c1, ChannelMessage) {
  map = map.get(c1);
  if (map == null) {
    const _Map = Map;
    map = new Map();
  }
  value2 = undefined;
  if (map != null) {
    value2 = map.get(ChannelMessage);
  }
  if (value2 == null) {
    value2 = closure_6;
  }
  let num = value2.length;
  if (num == null) {
    num = 0;
  }
  return num;
};
prototype["getUpload"] = function getUpload(channelId, id, ChannelMessage) {
  closure_0 = id;
  map = map.get(channelId);
  if (map == null) {
    const _Map = Map;
    map = new Map();
  }
  value2 = undefined;
  if (map != null) {
    value2 = map.get(ChannelMessage);
  }
  if (value2 == null) {
    value2 = closure_6;
  }
  return value2.find((id) => id.id === closure_0);
};
prototype["findUpload"] = function findUpload(id, ChannelMessage, _messages) {
  map = map.get(id);
  if (map == null) {
    const _Map = Map;
    map = new Map();
  }
  value2 = undefined;
  if (map != null) {
    value2 = map.get(ChannelMessage);
  }
  if (value2 == null) {
    value2 = closure_6;
  }
  return value2.find(_messages);
};
UploadAttachmentStore.displayName = "UploadAttachmentStore";
const uploadAttachmentStore = new UploadAttachmentStore(DispatcherDefault, {
  UPLOAD_ATTACHMENT_POP_FILE: function handlePopFile(channelId) {
    channelId = channelId.channelId;
    map = map.get(channelId);
    if (map == null) {
      const _Map = Map;
      map = new Map();
    }
    let value3;
    if (map != null) {
      value3 = map.get(DraftType.ChannelMessage);
    }
    if (value3 == null) {
      value3 = closure_6;
    }
    const items = [...value3];
    items.shift();
    let value4 = obj.get(channelId);
    if (value4 == null) {
      const _Map2 = Map;
      value4 = new Map();
    }
    const result = value4.set(DraftType.ChannelMessage, items);
    const result1 = obj.set(channelId, value4);
  },
  UPLOAD_ATTACHMENT_ADD_FILES: function handleAddFiles(arg0) {
    ({ files, channelId } = arg0);
    ({ draftType, allowOptimization: importDefault } = arg0);
    let items;
    map = map.get(channelId);
    if (map == null) {
      const _Map = Map;
      map = new Map();
    }
    let value3;
    if (map != null) {
      value3 = map.get(draftType);
    }
    if (value3 == null) {
      value3 = closure_6;
    }
    items = [...value3];
    if (items.length + files.length > MAX_UPLOAD_COUNT) {
      if (draftType !== DraftType.SlashCommand) {
        if (draftType !== DraftType.ApplicationLauncherCommand) {
          const obj2 = { title: null, body: null };
          const intl = channelId(items[3]).intl;
          obj2.title = intl.string(channelId(items[3]).t.wOr6hB);
          const intl2 = channelId(items[3]).intl;
          const obj3 = { limit: tmp5 };
          obj2.body = intl2.formatToPlainString(channelId(items[3]).t["qqyp/e"], obj3);
          require("AlertActionCreators").show(obj2);
          const obj4 = require("AlertActionCreators");
        }
      }
    }
    const item = require("module_12").forEach(files, (file) => {
      const cloudUpload = new CloudUpload.CloudUpload(file, channelId, items.length, importDefault);
      items.push(cloudUpload);
    });
    let value4 = obj.get(channelId);
    if (value4 == null) {
      const _Map2 = Map;
      value4 = new Map();
    }
    const result = value4.set(draftType, items);
    const result1 = obj.set(channelId, value4);
    const arr2 = require("module_12");
  },
  UPLOAD_ATTACHMENT_UPDATE_FILE: function handleUpdateFile(arg0) {
    ({ channelId, id: require, filename: importDefault, description: dependencyMap, spoiler: DraftType, thumbnail: MAX_UPLOAD_COUNT, draftType } = arg0);
    map = map.get(channelId);
    if (map == null) {
      const _Map = Map;
      map = new Map();
    }
    let value3;
    if (map != null) {
      value3 = map.get(draftType);
    }
    if (value3 == null) {
      value3 = closure_6;
    }
    const items = [...value3];
    const mapped = items.map((id) => {
      if (id.id === require) {
        if (undefined !== filename) {
          id.filename = filename;
        }
        if (undefined !== spoiler) {
          id.spoiler = spoiler;
        }
        if (undefined !== description) {
          id.description = description;
        }
        if (undefined !== isThumbnail) {
          id.isThumbnail = isThumbnail;
        }
      }
      return id;
    });
    let value4 = obj.get(channelId);
    if (value4 == null) {
      const _Map2 = Map;
      value4 = new Map();
    }
    const result = value4.set(draftType, mapped);
    const result1 = obj.set(channelId, value4);
  },
  UPLOAD_ATTACHMENT_REMOVE_FILE: function handleRemoveFile(id) {
    ({ channelId, id: require, draftType } = id);
    map = map.get(channelId);
    if (map == null) {
      const _Map = Map;
      map = new Map();
    }
    let value3;
    if (map != null) {
      value3 = map.get(draftType);
    }
    if (value3 == null) {
      value3 = closure_6;
    }
    const items = [...value3];
    const findIndexResult = items.findIndex((item) => uploader_UploadUtils.doesImageMatchUpload({ uri: filename, filename }, item));
    if (findIndexResult > -1) {
      const first = items.splice(findIndexResult, 1)[0];
      first.removeFromMsgDraft();
      let value4 = obj.get(channelId);
      if (value4 == null) {
        const _Map2 = Map;
        value4 = new Map();
      }
      const result = value4.set(draftType, items);
      const result1 = obj.set(channelId, value4);
    }
  },
  UPLOAD_ATTACHMENT_REMOVE_FILES: function handleRemoveFiles(arg0) {
    ({ channelId, attachmentIds, draftType } = arg0);
    let items;
    map = map.get(channelId);
    if (map == null) {
      const _Map = Map;
      map = new Map();
    }
    let value3;
    if (map != null) {
      value3 = map.get(draftType);
    }
    if (value3 == null) {
      value3 = closure_6;
    }
    items = [...value3];
    const item = attachmentIds.forEach((item) => {
      closure_0 = item;
      const findIndexResult = items.findIndex((id) => closure_0 === id.id);
      if (findIndexResult > -1) {
        const first = items.splice(findIndexResult, 1)[0];
        first.removeFromMsgDraft();
      }
    });
    let value4 = obj.get(channelId);
    if (value4 == null) {
      const _Map2 = Map;
      value4 = new Map();
    }
    const result = value4.set(draftType, items);
    const result1 = obj.set(channelId, value4);
  },
  UPLOAD_ATTACHMENT_CLEAR_ALL_FILES: function handleClearAllFiles(channelId) {
    channelId = channelId.channelId;
    map = map.get(channelId);
    if (map == null) {
      const _Map = Map;
      map = new Map();
    }
    const result = map.set(channelId.draftType, []);
    const result1 = map.set(channelId, map);
  },
  UPLOAD_ATTACHMENT_SET_UPLOADS: function handleSetUploads(channelId) {
    channelId = channelId.channelId;
    ({ uploads, draftType } = channelId);
    map = map.get(channelId);
    if (map == null) {
      const _Map = Map;
      map = new Map();
    }
    const result = map.set(draftType, uploads);
    const result1 = map.set(channelId, map);
  },
  UPLOAD_ATTACHMENT_SET_FILE: function handleSetFile(arg0) {
    ({ channelId, id: require, file, draftType, allowOptimization } = arg0);
    map = map.get(channelId);
    if (map == null) {
      const _Map = Map;
      map = new Map();
    }
    let value3;
    if (map != null) {
      value3 = map.get(draftType);
    }
    if (value3 == null) {
      value3 = closure_6;
    }
    const items = [...value3];
    const found = items.filter((id) => id.id !== require);
    const cloudUpload = new CloudUpload.CloudUpload(file, channelId, undefined, allowOptimization);
    found.push(cloudUpload);
    let value4 = obj.get(channelId);
    if (value4 == null) {
      const _Map2 = Map;
      value4 = new Map();
    }
    const result = value4.set(draftType, found);
    const result1 = obj.set(channelId, value4);
  }
});
let result = size.fileFinishedImporting("stores/UploadAttachmentStore.tsx");

export default uploadAttachmentStore;