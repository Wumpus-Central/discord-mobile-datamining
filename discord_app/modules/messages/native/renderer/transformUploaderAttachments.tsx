// discord_app/modules/messages/native/renderer/transformUploaderAttachments.tsx
import set from "set" /* 2 */;
import Changeset from "Changeset" /* 8158 */;

const AttachmentType = Changeset.AttachmentType;
const result = set.fileFinishedImporting("modules/messages/native/renderer/transformUploaderAttachments.tsx");

export default function createUploaderAttachments(uploaderFile) {
  uploaderFile = uploaderFile.uploaderFile;
  ({ isFailedMessage: dependencyMap, shouldInlineAttachmentMedia: AttachmentType } = uploaderFile);
  const items = uploaderFile.items;
  let mapped;
  if (items != null) {
    mapped = items.map((filename) => {
      let str = filename.filename;
      if (str == null) {
        str = "";
      }
      const item = filename.item;
      let str2 = item.originalUri;
      if (str2 == null) {
        str2 = "";
      }
      let obj = uploaderFile(closure_1_1[1]);
      const isImageFileResult = obj.isImageFile(str);
      const isVideoFileResult = uploaderFile(closure_1_1[1]).isVideoFile(str);
      const obj2 = uploaderFile(closure_1_1[1]);
      let num = item.progress;
      const obj3 = uploaderFile(closure_1_1[1]);
      if (num == null) {
        num = 0;
      }
      let num2 = item.compressionProgress;
      if (num2 == null) {
        num2 = 0;
      }
      let num3 = 0.7;
      if (0 === num2) {
        num3 = 0.7;
        if (num > 0) {
          num3 = 0;
        }
      }
      const rounded = Math.floor(num2 * num3 + num * (0.9 - num3) + 10);
      if (!closure_1) {
        const tmp7 = rounded;
      }
      obj = { url: str2, videoUrl: null };
      let tmp8;
      if (isVideoFileResult) {
        tmp8 = str2;
      }
      obj[1] = tmp8;
      const isAudioFileResult = uploaderFile(closure_1_1[1]).isAudioFile(str);
      const merged = Object.assign(uploaderFile(closure_1_1[2]).getAttachmentObscurityDefaults());
      obj.filename = str;
      let str3 = "";
      if (null != item.size) {
        str3 = item.size.toString();
        const str4 = item.size;
      }
      obj.size = str3;
      obj.showDescription = false;
      let num5 = 0;
      if (closure_2) {
        num5 = 0;
        if (null != item.width) {
          num5 = item.width;
        }
      }
      obj.width = num5;
      let num6 = 0;
      if (closure_2) {
        num6 = 0;
        if (null != item.height) {
          num6 = item.height;
        }
      }
      obj.height = num6;
      const intl = tmp(tmp2[3]).intl;
      const string = intl.string;
      const t = tmp(tmp2[3]).t;
      if (isVideoFileResult) {
        let stringResult = string(t["BEWw/7"]);
      } else {
        stringResult = string(t.IPzNKE);
      }
      obj.hint = stringResult;
      const intl2 = tmp(tmp2[3]).intl;
      const string2 = intl2.string;
      const t2 = tmp(tmp2[3]).t;
      if (isVideoFileResult) {
        let string2Result = string2(t2["/SCpvi"]);
      } else {
        string2Result = string2(t2.fKyfca);
      }
      obj.role = string2Result;
      if (isImageFileResult) {
        let VIDEO = tmp13.IMAGE;
      } else if (isVideoFileResult) {
        VIDEO = tmp13.VIDEO;
      } else {
        VIDEO = isAudioFileResult ? tmp13.AUDIO : tmp13.OTHER;
      }
      obj.attachmentType = VIDEO;
      obj.progress = tmp7;
      obj.uploaderId = uploaderFile.id;
      let str5 = filename.id;
      if (str5 == null) {
        str5 = "";
      }
      obj.uploaderItemId = str5;
      ({ durationSecs: obj4.durationSecs, waveform: obj4.waveform } = item);
      let uniqueId;
      if (filename instanceof uploaderFile(closure_1_1[4]).CloudUpload) {
        uniqueId = filename.uniqueId;
      }
      obj.id = uniqueId;
      return obj;
    });
  }
  if (mapped == null) {
    mapped = [];
  }
  return mapped;
};