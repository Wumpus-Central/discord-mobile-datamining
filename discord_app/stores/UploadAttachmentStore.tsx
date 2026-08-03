import { DraftType } from "handleChanged";
import { MAX_UPLOAD_COUNT } from "ME";
import { Store } from "initialize";

let map = new Map();
let closure_6 = [];
class UploadAttachmentStore extends Store {
}
const prototype = UploadAttachmentStore.prototype;
prototype["getFirstUpload"] = function getFirstUpload(arg0, arg1) {
  map = map.get(arg0);
  if (map == null) {
    const _Map = Map;
    map = new Map();
  }
  let value;
  if (map != null) {
    value = map.get(arg1);
  }
  if (value == null) {
    value = closure_6;
  }
  let first = null;
  if (value.length > 0) {
    first = value[0];
  }
  return first;
};
prototype["hasAdditionalUploads"] = function hasAdditionalUploads(arg0, arg1) {
  map = map.get(arg0);
  if (map == null) {
    const _Map = Map;
    map = new Map();
  }
  let value;
  if (map != null) {
    value = map.get(arg1);
  }
  if (value == null) {
    value = closure_6;
  }
  let num = value.length;
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
  let value;
  if (map != null) {
    value = map.get(ChannelMessage);
  }
  if (value == null) {
    value = closure_6;
  }
  return value;
};
prototype["getUploadCount"] = function getUploadCount(channelId, draftType) {
  map = map.get(channelId);
  if (map == null) {
    const _Map = Map;
    map = new Map();
  }
  let value;
  if (map != null) {
    value = map.get(draftType);
  }
  if (value == null) {
    value = closure_6;
  }
  let num = value.length;
  if (num == null) {
    num = 0;
  }
  return num;
};
prototype["getUpload"] = function getUpload(channelId, id, ChannelMessage) {
  let closure_0 = id;
  map = map.get(channelId);
  if (map == null) {
    const _Map = Map;
    map = new Map();
  }
  let value;
  if (map != null) {
    value = map.get(ChannelMessage);
  }
  if (value == null) {
    value = closure_6;
  }
  return value.find((id) => id.id === closure_0);
};
prototype["findUpload"] = function findUpload(totalNumItems, ChannelMessage, closure_4) {
  map = map.get(totalNumItems);
  if (map == null) {
    const _Map = Map;
    map = new Map();
  }
  let value;
  if (map != null) {
    value = map.get(ChannelMessage);
  }
  if (value == null) {
    value = closure_6;
  }
  return value.find(closure_4);
};
UploadAttachmentStore.displayName = "UploadAttachmentStore";
const uploadAttachmentStore = new UploadAttachmentStore(require("dispatcher"), {
  UPLOAD_ATTACHMENT_POP_FILE: function handlePopFile(channelId) {
    channelId = channelId.channelId;
    map = map.get(channelId);
    if (map == null) {
      const _Map = Map;
      map = new Map();
    }
    let value;
    if (map != null) {
      value = map.get(DraftType.ChannelMessage);
    }
    if (value == null) {
      value = closure_6;
    }
    const items = [...value];
    items.shift();
    let value1 = obj.get(channelId);
    if (value1 == null) {
      const _Map2 = Map;
      value1 = new Map();
    }
    const result = value1.set(DraftType.ChannelMessage, items);
    const result1 = obj.set(channelId, value1);
  },
  UPLOAD_ATTACHMENT_ADD_FILES: function handleAddFiles(arg0) {
    let channelId;
    let draftType;
    let files;
    let importDefault;
    ({ files, channelId } = arg0);
    ({ draftType, allowOptimization: importDefault } = arg0);
    let items;
    let obj = map;
    map = map.get(channelId);
    if (map == null) {
      const _Map = Map;
      map = new Map();
    }
    let value;
    if (map != null) {
      value = map.get(draftType);
    }
    if (value == null) {
      value = closure_6;
    }
    items = [...value];
    if (items.length + files.length > MAX_UPLOAD_COUNT) {
      if (draftType !== DraftType.SlashCommand) {
        if (draftType !== DraftType.ApplicationLauncherCommand) {
          obj = { title: null, body: null };
          const intl = channelId(items[3]).intl;
          obj[0] = intl.string(channelId(items[3]).t.wOr6hB);
          const intl2 = channelId(items[3]).intl;
          obj = { limit: null };
          obj[0] = tmp5;
          obj[1] = intl2.formatToPlainString(channelId(items[3]).t["qqyp/e"], obj);
          importDefault(items[2]).show(obj);
          const obj4 = importDefault(items[2]);
        }
      }
    }
    const item = importDefault(items[4]).forEach(files, (file) => {
      const cloudUpload = new channelId(items[5]).CloudUpload(file, channelId, items.length, closure_1);
      items.push(cloudUpload);
    });
    let value1 = obj.get(channelId);
    if (value1 == null) {
      const _Map2 = Map;
      value1 = new Map();
    }
    const result = value1.set(draftType, items);
    const result1 = obj.set(channelId, value1);
  },
  UPLOAD_ATTACHMENT_UPDATE_FILE: function handleUpdateFile(arg0) {
    let DraftType;
    let MAX_UPLOAD_COUNT;
    let channelId;
    let dependencyMap;
    let draftType;
    let importDefault;
    let require;
    ({ channelId, id: require, filename: importDefault, description: dependencyMap, spoiler: DraftType, thumbnail: MAX_UPLOAD_COUNT, draftType } = arg0);
    map = map.get(channelId);
    if (map == null) {
      const _Map = Map;
      map = new Map();
    }
    let value;
    if (map != null) {
      value = map.get(draftType);
    }
    if (value == null) {
      value = closure_6;
    }
    const items = [...value];
    const mapped = items.map((id) => {
      if (id.id === closure_0) {
        if (undefined !== closure_1) {
          id.filename = closure_1;
        }
        if (undefined !== closure_3) {
          id.spoiler = closure_3;
        }
        if (undefined !== closure_2) {
          id.description = closure_2;
        }
        if (undefined !== closure_4) {
          id.isThumbnail = closure_4;
        }
      }
      return id;
    });
    let value1 = obj.get(channelId);
    if (value1 == null) {
      const _Map2 = Map;
      value1 = new Map();
    }
    const result = value1.set(draftType, mapped);
    const result1 = obj.set(channelId, value1);
  },
  UPLOAD_ATTACHMENT_REMOVE_FILE: function handleRemoveFile(id) {
    let channelId;
    let draftType;
    let require;
    ({ channelId, id: require, draftType } = id);
    map = map.get(channelId);
    if (map == null) {
      const _Map = Map;
      map = new Map();
    }
    let value;
    if (map != null) {
      value = map.get(draftType);
    }
    if (value == null) {
      value = closure_6;
    }
    const items = [...value];
    const findIndexResult = items.findIndex((closure_0) => {
      let obj = outer1_0(outer1_2[6]);
      obj = { uri: closure_0, filename: closure_0 };
      return obj.doesImageMatchUpload(obj, closure_0);
    });
    if (findIndexResult > -1) {
      const first = items.splice(findIndexResult, 1)[0];
      first.removeFromMsgDraft();
      let value1 = obj.get(channelId);
      if (value1 == null) {
        const _Map2 = Map;
        value1 = new Map();
      }
      const result = value1.set(draftType, items);
      const result1 = obj.set(channelId, value1);
    }
  },
  UPLOAD_ATTACHMENT_REMOVE_FILES: function handleRemoveFiles(arg0) {
    let attachmentIds;
    let channelId;
    let draftType;
    ({ channelId, attachmentIds, draftType } = arg0);
    let items;
    map = map.get(channelId);
    if (map == null) {
      const _Map = Map;
      map = new Map();
    }
    let value;
    if (map != null) {
      value = map.get(draftType);
    }
    if (value == null) {
      value = closure_6;
    }
    items = [...value];
    const item = attachmentIds.forEach((arg0) => {
      const items = arg0;
      const findIndexResult = items.findIndex((id) => closure_0 === id.id);
      if (findIndexResult > -1) {
        const first = items.splice(findIndexResult, 1)[0];
        first.removeFromMsgDraft();
      }
    });
    let value1 = obj.get(channelId);
    if (value1 == null) {
      const _Map2 = Map;
      value1 = new Map();
    }
    const result = value1.set(draftType, items);
    const result1 = obj.set(channelId, value1);
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
    let draftType;
    let uploads;
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
    let allowOptimization;
    let channelId;
    let draftType;
    let file;
    let require;
    ({ channelId, id: require, file, draftType, allowOptimization } = arg0);
    map = map.get(channelId);
    if (map == null) {
      const _Map = Map;
      map = new Map();
    }
    let value;
    if (map != null) {
      value = map.get(draftType);
    }
    if (value == null) {
      value = closure_6;
    }
    const items = [...value];
    const found = items.filter((id) => id.id !== closure_0);
    const cloudUpload = new require(4725) /* set */.CloudUpload(file, channelId, undefined, allowOptimization);
    found.push(cloudUpload);
    let value1 = obj.get(channelId);
    if (value1 == null) {
      const _Map2 = Map;
      value1 = new Map();
    }
    const result = value1.set(draftType, found);
    const result1 = obj.set(channelId, value1);
  }
});
let result = require("set").fileFinishedImporting("stores/UploadAttachmentStore.tsx");

export default uploadAttachmentStore;