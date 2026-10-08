// === Module 7730: Upload ===

// Module 7730 (Upload)
import _modDef12 from "module_12" /* 12 */;
import _mod580 from "module_580" /* 580 */;
import v1 from "v1" /* 1278 */;
import UploadPlatform from "UploadPlatform" /* 7731 */;
import UploadUtils from "UploadUtils" /* 7732 */;
import FileUtilsAll from "FileUtils" /* 7737 */;
import size from "module_2" /* 2 */;

const EventEmitter = _mod580.EventEmitter;
class Upload extends EventEmitter {
  constructor(arg0) {
    tmp4 = new Upload(tmp3, tmp2, tmp);
    tmp4.allowOptimization = true;
    tmp4.item = global;
    tmp5 = closure_0;
    tmp6 = closure_3;
    if (global.platform === closure_0(closure_3[1]).UploadPlatform.REACT_NATIVE) {
      uri = global.id;
      tmp9 = null;
      if (uri == null) {
        uri = global.uri;
      }
      tmp4.id = uri;
      tmp5Result = tmp5(tmp6[2]);
      obj1 = { uri: null, overrideFilename: null, overrideType: null };
      ({ uri: obj4.uri, filename: obj4.overrideFilename, mimeType: obj4.overrideType } = global);
      file = tmp5Result.getFile(obj1);
      ({ filename: tmp4.filename, isImage: tmp4.isImage, isVideo: tmp4.isVideo, type: tmp4.mimeType } = file);
      ({ origin: tmp4.origin, durationSecs: tmp4.durationSecs, waveform: tmp4.waveform } = global);
    } else {
      id = global.id;
      tmp11 = null;
      if (id == null) {
        tmp7 = closure_1;
        obj = closure_1(tmp6[3]);
        str = "upload";
        id = obj.uniqueId("upload");
      }
      tmp4.id = id;
      tmp8 = closure_2;
      obj2 = closure_2(tmp6[4]);
      tmp4.classification = obj2.classifyFile(global.file);
      str2 = "image";
      tmp4.isImage = "image" === tmp4.classification;
      str3 = "video";
      tmp4.isVideo = "video" === tmp4.classification;
      tmp4.filename = global.file.name;
      tmp4.mimeType = global.file.type;
      tmp4.origin = global.origin;
    }
    ({ isThumbnail: tmp4.isThumbnail, clip: tmp4.clip } = global);
    tmp5Result1 = tmp5(tmp6[5]);
    tmp4.uniqueId = tmp5Result1.v4();
    tmp4.spoiler = false;
    tmp4.description = null;
    return tmp4;
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
export const isResolvedUpload = function isResolvedUpload(file) {
  return undefined !== file.isVideo && undefined !== file.isImage;
};
export const UploadOrigin = { FILE_ATTACHMENT: 0, [0]: "FILE_ATTACHMENT", IMAGE_PICKER: 1, [1]: "IMAGE_PICKER", IMAGE_EDITOR: 2, [2]: "IMAGE_EDITOR" };