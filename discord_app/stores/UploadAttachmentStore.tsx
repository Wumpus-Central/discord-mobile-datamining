// === Module 7280: UploadAttachmentStore ===

// Module 7280 (UploadAttachmentStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import DraftStore from "DraftStore" /* 7044 */;
import CloudUpload from "CloudUpload" /* 7281 */;
import uploader_UploadUtils from "uploader/UploadUtils" /* 7285 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let closure_4;
let hasOwnProperty;
const DraftType = DraftStore.DraftType;
({ AnalyticEvents: closure_4, MAX_UPLOAD_COUNT: hasOwnProperty } = Constants);
let map = new Map();
let closure_7 = [];
const Store = get_initializedDefault.Store;
class UploadAttachmentStore extends Store {
  getFirstUpload(arg0, arg1) {
    map = map.get(arg0);
    if (map == null) {
      const _Map = Map;
      const self = this;
      const self2 = this;
      map = new Map();
    }
    let value2;
    if (map != null) {
      value2 = map.get(arg1);
    }
    if (value2 == null) {
      value2 = closure_7;
    }
    let first = null;
    if (value2.length > 0) {
      first = value2[0];
    }
    return first;
  }
  hasAdditionalUploads(arg0, arg1) {
    map = map.get(arg0);
    if (map == null) {
      const _Map = Map;
      const self = this;
      const self2 = this;
      map = new Map();
    }
    let value2;
    if (map != null) {
      value2 = map.get(arg1);
    }
    if (value2 == null) {
      value2 = closure_7;
    }
    let num = value2.length;
    if (num == null) {
      num = 0;
    }
    return num > 1;
  }
  getUploads(id, ChannelMessage) {
    map = map.get(id);
    if (map == null) {
      const _Map = Map;
      const self = this;
      const self2 = this;
      map = new Map();
    }
    let value2;
    if (map != null) {
      value2 = map.get(ChannelMessage);
    }
    if (value2 == null) {
      value2 = closure_7;
    }
    return value2;
  }
  getUploadCount(channelId, draftType) {
    map = map.get(channelId);
    if (map == null) {
      const _Map = Map;
      const self = this;
      const self2 = this;
      map = new Map();
    }
    let value2;
    if (map != null) {
      value2 = map.get(draftType);
    }
    if (value2 == null) {
      value2 = closure_7;
    }
    let num = value2.length;
    if (num == null) {
      num = 0;
    }
    return num;
  }
  getUpload(channelId, id, ChannelMessage) {
    let closure_0 = id;
    map = map.get(channelId);
    if (map == null) {
      const _Map = Map;
      const self = this;
      const self2 = this;
      map = new Map();
    }
    let value2;
    if (map != null) {
      value2 = map.get(ChannelMessage);
    }
    if (value2 == null) {
      value2 = closure_7;
    }
    return value2.find((id) => id.id === closure_0);
  }
  findUpload(channelId, ChannelMessage, cResult) {
    map = map.get(channelId);
    if (map == null) {
      const _Map = Map;
      const self = this;
      const self2 = this;
      map = new Map();
    }
    let value2;
    if (map != null) {
      value2 = map.get(ChannelMessage);
    }
    if (value2 == null) {
      value2 = closure_7;
    }
    return value2.find(cResult);
  }
}
const prototype = UploadAttachmentStore.prototype;
UploadAttachmentStore.displayName = "UploadAttachmentStore";
let obj = {
  UPLOAD_ATTACHMENT_POP_FILE: function handlePopFile(channelId) {
    channelId = channelId.channelId;
    const ChannelMessage = DraftType.ChannelMessage;
    map = map.get(channelId);
    if (map == null) {
      const _Map = Map;
      const self2 = this;
      const self = this;
      map = new Map();
    }
    let value3;
    if (map != null) {
      value3 = map.get(ChannelMessage);
    }
    if (value3 == null) {
      value3 = closure_7;
    }
    const items = [...value3];
    items.shift();
    const ChannelMessage2 = DraftType.ChannelMessage;
    let value4 = obj.get(channelId);
    if (value4 == null) {
      const _Map2 = Map;
      const self3 = this;
      const self4 = this;
      value4 = new Map();
    }
    const result = value4.set(ChannelMessage2, items);
    const result1 = obj.set(channelId, value4);
  },
  UPLOAD_ATTACHMENT_ADD_FILES: function handleAddFiles(arg0) {
    let channelId;
    let draftType;
    let files;
    let intl;
    let intl2;
    let obj3;
    ({ files, channelId } = arg0);
    ({ draftType, allowOptimization: importDefault } = arg0);
    let items;
    map = map.get(channelId);
    if (map == null) {
      const _Map = Map;
      const self2 = this;
      const self = this;
      map = new Map();
    }
    let value3;
    if (map != null) {
      value3 = map.get(draftType);
    }
    if (value3 == null) {
      value3 = closure_7;
    }
    items = [...value3];
    if (items.length + files.length > closure_5) {
      if (draftType !== DraftType.SlashCommand) {
        if (draftType !== DraftType.ApplicationLauncherCommand) {
          const obj2 = { title: intl.string(channelId(items[3]).t.wOr6hB), body: intl2.formatToPlainString(channelId(items[3]).t["qqyp/e"], obj3) };
          const show = require("AlertActionCreators").show;
          require("AlertActionCreators");
          intl = channelId(items[3]).intl;
          intl2 = channelId(items[3]).intl;
          obj3 = { limit: tmp3 };
          show(obj2);
        }
      }
    }
    const arr2 = require("module_12");
    const item = arr2.forEach(files, (file) => {
      const cloudUpload = new CloudUpload.CloudUpload(file, channelId, items.length, importDefault);
      items.push(cloudUpload);
    });
    let value4 = obj.get(channelId);
    if (value4 == null) {
      const _Map2 = Map;
      const self3 = this;
      const self4 = this;
      value4 = new Map();
    }
    const result = value4.set(draftType, items);
    const result1 = obj.set(channelId, value4);
  },
  UPLOAD_ATTACHMENT_UPDATE_FILE: function handleUpdateFile(arg0) {
    let channelId;
    let closure_4;
    let draftType;
    let filename;
    let isThumbnail;
    ({ channelId, id: require, filename: importDefault, description: dependencyMap, spoiler: DraftType, thumbnail: closure_4, draftType } = arg0);
    let obj = map;
    map = map.get(channelId);
    if (map == null) {
      const _Map = Map;
      const self = this;
      const self2 = this;
      map = new Map();
    }
    let value3;
    if (map != null) {
      value3 = map.get(draftType);
    }
    if (value3 == null) {
      value3 = closure_7;
    }
    const mapped = value3.map((id) => {
      let tmp4;
      if (id.id === require) {
        let tmp3;
        if (null != DraftType) {
          if (DraftType !== id.spoiler) {
            tmp3 = DraftType;
          }
        }
        const obj = { spoilered: tmp3, has_alt_text: tmp4 };
        tmp4 = undefined;
        if (null != dependencyMap) {
          if (dependencyMap !== id.description) {
            tmp4 = dependencyMap.trim().length > 0;
          }
        }
        const tmp5 = null == obj.spoilered && null == obj.has_alt_text;
        if (!tmp5) {
          const obj2 = AnalyticsUtilsDefault;
          obj2.track(isThumbnail.MEDIA_DRAFT_EDITED, obj);
        }
        if (null != importDefault) {
          id.filename = importDefault;
        }
        if (null != DraftType) {
          id.spoiler = DraftType;
        }
        if (null != dependencyMap) {
          id.description = dependencyMap;
        }
        if (null != isThumbnail) {
          id.isThumbnail = isThumbnail;
        }
        return id;
      } else {
        return id;
      }
    });
    let value4 = obj.get(channelId);
    if (value4 == null) {
      let tmp4 = globalThis;
      const _Map2 = Map;
      const self3 = this;
      const self4 = this;
      value4 = new Map();
    }
    const result = value4.set(draftType, mapped);
    const result1 = obj.set(channelId, value4);
  },
  UPLOAD_ATTACHMENT_REMOVE_FILE: function handleRemoveFile(id) {
    let channelId;
    let draftType;
    ({ channelId, id: require, draftType } = id);
    let obj = map;
    map = map.get(channelId);
    if (map == null) {
      const _Map = Map;
      const self2 = this;
      const self = this;
      map = new Map();
    }
    let value3;
    if (map != null) {
      value3 = map.get(draftType);
    }
    if (value3 == null) {
      value3 = closure_7;
    }
    const items = [...value3];
    const findIndexResult = items.findIndex((item) => {
      const obj = uploader_UploadUtils;
      const obj2 = { uri: filename, filename };
      return obj.doesImageMatchUpload(obj2, item);
    });
    if (findIndexResult > -1) {
      const first = items.splice(findIndexResult, 1)[0];
      first.removeFromMsgDraft();
      let value4 = obj.get(channelId);
      if (value4 == null) {
        const _Map2 = Map;
        const self3 = this;
        const self4 = this;
        value4 = new Map();
      }
      const result = value4.set(draftType, items);
      const result1 = obj.set(channelId, value4);
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
      const self2 = this;
      const self = this;
      map = new Map();
    }
    let value3;
    if (map != null) {
      value3 = map.get(draftType);
    }
    if (value3 == null) {
      value3 = closure_7;
    }
    items = [...value3];
    const item = attachmentIds.forEach((item) => {
      let closure_0 = item;
      const findIndexResult = items.findIndex((id) => closure_0 === id.id);
      if (findIndexResult > -1) {
        const first = items.splice(findIndexResult, 1)[0];
        first.removeFromMsgDraft();
      }
    });
    let value4 = obj.get(channelId);
    if (value4 == null) {
      const _Map2 = Map;
      const self3 = this;
      const self4 = this;
      value4 = new Map();
    }
    const result = value4.set(draftType, items);
    const result1 = obj.set(channelId, value4);
  },
  UPLOAD_ATTACHMENT_CLEAR_ALL_FILES: function handleClearAllFiles(channelId) {
    channelId = channelId.channelId;
    const draftType = channelId.draftType;
    const obj = map;
    map = map.get(channelId);
    if (map == null) {
      const _Map = Map;
      const self = this;
      const self2 = this;
      map = new Map();
    }
    const result = map.set(draftType, []);
    const result1 = obj.set(channelId, map);
  },
  UPLOAD_ATTACHMENT_SET_UPLOADS: function handleSetUploads(channelId) {
    let draftType;
    let uploads;
    channelId = channelId.channelId;
    ({ uploads, draftType } = channelId);
    const obj = map;
    map = map.get(channelId);
    if (map == null) {
      const _Map = Map;
      const self = this;
      const self2 = this;
      map = new Map();
    }
    const result = map.set(draftType, uploads);
    const result1 = obj.set(channelId, map);
  },
  UPLOAD_ATTACHMENT_SET_FILE: function handleSetFile(arg0) {
    let allowOptimization;
    let channelId;
    let closure_129_0;
    let draftType;
    let file;
    ({ channelId, id: closure_129_0, file, draftType, allowOptimization } = arg0);
    map = map.get(channelId);
    if (map == null) {
      const _Map = Map;
      const self2 = this;
      const self = this;
      map = new Map();
    }
    let value3;
    if (map != null) {
      value3 = map.get(draftType);
    }
    if (value3 == null) {
      value3 = closure_7;
    }
    const items = [...value3];
    const found = items.filter((id) => id.id !== closure_1_0);
    const cloudUpload = new CloudUpload.CloudUpload(file, channelId, undefined, allowOptimization);
    found.push(cloudUpload);
    let value4 = obj.get(channelId);
    if (value4 == null) {
      const _Map2 = Map;
      const self3 = this;
      const self4 = this;
      value4 = new Map();
    }
    const result = value4.set(draftType, found);
    const result1 = obj.set(channelId, value4);
  }
};
const uploadAttachmentStore = new UploadAttachmentStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("stores/UploadAttachmentStore.tsx");

export default uploadAttachmentStore;