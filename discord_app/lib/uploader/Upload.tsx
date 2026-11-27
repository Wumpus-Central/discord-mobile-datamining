// === Module 8126: Upload ===

// Module 8126 (Upload)
import applyDefault from "apply" /* 12 */;
import _mod568 from "module_568" /* 568 */;
import v1 from "v1" /* 1269 */;
import UploadPlatform from "UploadPlatform" /* 8127 */;
import UploadUtils from "UploadUtils" /* 8128 */;
import FileUtilsAll from "FileUtils" /* 8133 */;
import size from "module_2" /* 2 */;

const EventEmitter = _mod568.EventEmitter;
class Upload extends EventEmitter {
  constructor(arg0) {
    tmp5 = new Upload(tmp4, tmp3, tmp2, tmp);
    tmp5.isPreparing = false;
    tmp5.allowOptimization = true;
    tmp5.item = global;
    tmp6 = closure_0;
    tmp7 = closure_3;
    if (global.platform === closure_0(closure_3[1]).UploadPlatform.REACT_NATIVE) {
      uri = global.id;
      tmp10 = null;
      if (uri == null) {
        uri = global.uri;
      }
      tmp5.id = uri;
      tmp6Result = tmp6(tmp7[2]);
      obj1 = { uri: null, overrideFilename: null, overrideType: null };
      ({ uri: obj4.uri, filename: obj4.overrideFilename, mimeType: obj4.overrideType } = global);
      file = tmp6Result.getFile(obj1);
      ({ filename: tmp5.filename, isImage: tmp5.isImage, isVideo: tmp5.isVideo, type: tmp5.mimeType } = file);
      ({ origin: tmp5.origin, durationSecs: tmp5.durationSecs, waveform: tmp5.waveform } = global);
    } else {
      id = global.id;
      tmp12 = null;
      if (id == null) {
        tmp8 = closure_1;
        obj = closure_1(tmp7[3]);
        str = "upload";
        id = obj.uniqueId("upload");
      }
      tmp5.id = id;
      tmp9 = closure_2;
      obj2 = closure_2(tmp7[4]);
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
    tmp6Result1 = tmp6(tmp7[5]);
    tmp5.uniqueId = tmp6Result1.v4();
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
const result = size.fileFinishedImporting("lib/uploader/Upload.tsx");

export default Upload;
export function isResolvedUpload(file) {
  return undefined !== file.isVideo && undefined !== file.isImage;
}
export const UploadOrigin = { FILE_ATTACHMENT: 0, [0]: "FILE_ATTACHMENT", IMAGE_PICKER: 1, [1]: "IMAGE_PICKER", IMAGE_EDITOR: 2, [2]: "IMAGE_EDITOR" };