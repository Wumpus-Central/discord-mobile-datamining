// === Module 5128: Upload ===

// Module 5128 (Upload)
import _modDef12 from "module_12" /* 12 */;
import _mod568 from "module_568" /* 568 */;
import v1 from "v1" /* 1256 */;
import UploadUtils from "UploadUtils" /* 5129 */;
import FileUtilsAll from "FileUtils" /* 5134 */;
import size from "module_2" /* 2 */;

const UploadPlatform = { REACT_NATIVE: 0, [0]: "REACT_NATIVE", WEB: 1, [1]: "WEB" };
const EventEmitter = _mod568.EventEmitter;
class Upload extends EventEmitter {
  constructor(arg0) {
    tmp5 = new Upload(tmp4, tmp3, tmp2, tmp);
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
      obj3 = closure_0(closure_3[1]);
      obj = { uri: null, overrideFilename: null, overrideType: null };
      ({ uri: obj4.uri, filename: obj4.overrideFilename, mimeType: obj4.overrideType } = global);
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
        obj = closure_1(closure_3[2]);
        str = "upload";
        id = obj.uniqueId("upload");
      }
      tmp5.id = id;
      tmp8 = closure_2;
      tmp9 = closure_3;
      obj2 = closure_2(closure_3[3]);
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
    obj5 = closure_0(tmp9[4]);
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
const result = size.fileFinishedImporting("lib/uploader/Upload.tsx");

export default Upload;
export { UploadPlatform };
export const isResolvedUpload = function isResolvedUpload(file) {
  return undefined !== file.isVideo && undefined !== file.isImage;
};
export const UploadOrigin = { FILE_ATTACHMENT: 0, [0]: "FILE_ATTACHMENT", IMAGE_PICKER: 1, [1]: "IMAGE_PICKER", IMAGE_EDITOR: 2, [2]: "IMAGE_EDITOR" };