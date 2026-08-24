// === Module 4829: cancel ===

// Module 4829 (cancel)
import set from "set" /* 2 */;
import applyDefault from "apply" /* 12 */;
import v1 from "v1" /* 514 */;
import EventEmitter2 from "EventEmitter" /* 652 */;
import items from "items" /* 4830 */;
import getUploadFileSizeSumAll from "getUploadFileSizeSum" /* 4834 */;

let obj = { REACT_NATIVE: 0, [0]: "REACT_NATIVE", WEB: 1, [1]: "WEB" };
const EventEmitter = EventEmitter2.EventEmitter;
class Upload extends EventEmitter {
  constructor(arg0) {
    tmp5 = new Upload(tmp4, tmp3, tmp2, tmp);
    // ThrowIfThisInitialized (0x7c)
    tmp5.allowOptimization = true;
    tmp5.item = global;
    if (global.platform === closure_4.REACT_NATIVE) {
      uri = global.id;
      tmp10 = null;
      if (uri == null) {
        uri = global.uri;
      }
      tmp5.id = uri;
      tmp11 = closure_0;
      tmp12 = closure_3;
      obj3 = require("items");
      obj = { uri: null, overrideFilename: null, overrideType: null };
      ({ uri: obj4[0], filename: obj4[1], mimeType: obj4[2] } = global);
      file = obj3.getFile(obj);
      ({ filename: tmp5.filename, isImage: tmp5.isImage, isVideo: tmp5.isVideo, type: tmp5.mimeType } = file);
      ({ origin: tmp5.origin, durationSecs: tmp5.durationSecs, waveform: tmp5.waveform } = global);
      tmp9 = closure_3;
    } else {
      id = global.id;
      tmp14 = null;
      if (id == null) {
        tmp6 = closure_1;
        tmp7 = closure_3;
        obj = require("apply");
        str = "upload";
        id = obj.uniqueId("upload");
      }
      tmp5.id = id;
      tmp8 = closure_2;
      tmp9 = closure_3;
      obj2 = require("getUploadFileSizeSum");
      tmp5.classification = obj2.classifyFile(global.file);
      str2 = "image";
      tmp5.isImage = "image" === tmp5.classification;
      str3 = "video";
      tmp5.isVideo = "video" === tmp5.classification;
      tmp5.filename = global.file.name;
      tmp5.mimeType = global.file.type;
      tmp5.origin = global.origin;
    }
    ({ isThumbnail: tmp5.isThumbnail, clip: tmp5.clip } = global);
    obj5 = require("v1");
    tmp5.uniqueId = obj5.v4();
    tmp5.spoiler = false;
    tmp5.description = null;
    return tmp5;
  }
}
const prototype = Upload.prototype;
prototype["cancel"] = function cancel() {

};
prototype["resetState"] = function resetState() {
  return this;
};
const result = set.fileFinishedImporting("lib/uploader/Upload.tsx");

export default Upload;
export const UploadPlatform = obj;
export const isResolvedUpload = function isResolvedUpload(file) {
  return undefined !== file.isVideo && undefined !== file.isImage;
};
export const UploadOrigin = { FILE_ATTACHMENT: 0, [0]: "FILE_ATTACHMENT", IMAGE_PICKER: 1, [1]: "IMAGE_PICKER", IMAGE_EDITOR: 2, [2]: "IMAGE_EDITOR" };