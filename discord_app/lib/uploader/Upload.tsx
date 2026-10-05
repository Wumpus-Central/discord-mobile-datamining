// discord_app/lib/uploader/Upload.tsx
import _modDef12 from "../../../_runtime/metro/00012__.js";
import _mod580 from "../../../_runtime/metro/00580__.js";
import v1 from "../../../_runtime/01266_v1.js";
import UploadUtils from "../../utils/UploadUtils.tsx";
import UploadPlatform from "../../modules/media_uploads/UploadPlatform.tsx";
import FileUtilsAll from "../../utils/FileUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

const EventEmitter = _mod580.EventEmitter;
class Upload extends EventEmitter {
  constructor(item) {
    const tmp4 = new Upload(tmp3, tmp2, tmp);
    tmp4.allowOptimization = true;
    tmp4.item = item;
    if (item.platform === UploadPlatform.UploadPlatform.REACT_NATIVE) {
      let uri = item.id;
      if (uri == null) {
        uri = item.uri;
      }
      tmp4.id = uri;
      const obj3 = { uri: null, overrideFilename: null, overrideType: null };
      ({ uri: obj4.uri, filename: obj4.overrideFilename, mimeType: obj4.overrideType } = item);
      const tmp5Result = UploadUtils;
      const file = tmp5Result.getFile(obj3);
      ({ filename: tmp4.filename, isImage: tmp4.isImage, isVideo: tmp4.isVideo, type: tmp4.mimeType } = file);
      ({ origin: tmp4.origin, durationSecs: tmp4.durationSecs, waveform: tmp4.waveform } = item);
    } else {
      let id = item.id;
      if (id == null) {
        const obj = _modDef12;
        id = obj.uniqueId("upload");
      }
      tmp4.id = id;
      const obj2 = FileUtilsAll;
      tmp4.classification = obj2.classifyFile(item.file);
      tmp4.isImage = "image" === tmp4.classification;
      tmp4.isVideo = "video" === tmp4.classification;
      tmp4.filename = item.file.name;
      tmp4.mimeType = item.file.type;
      tmp4.origin = item.origin;
    }
    ({ isThumbnail: tmp4.isThumbnail, clip: tmp4.clip } = item);
    const tmp5Result2 = v1;
    tmp4.uniqueId = tmp5Result2.v4();
    tmp4.spoiler = false;
    tmp4.description = null;
    return tmp4;
  }
  cancel() {}
  resetState() {
    return this;
  }
}
const prototype = Upload.prototype;
const result = size.fileFinishedImporting("lib/uploader/Upload.tsx");

export default Upload;
export const isResolvedUpload = function isResolvedUpload(file) {
  return undefined !== file.isVideo && undefined !== file.isImage;
};
export const UploadOrigin = {
  FILE_ATTACHMENT: 0,
  [0]: "FILE_ATTACHMENT",
  IMAGE_PICKER: 1,
  [1]: "IMAGE_PICKER",
  IMAGE_EDITOR: 2,
  [2]: "IMAGE_EDITOR",
};
