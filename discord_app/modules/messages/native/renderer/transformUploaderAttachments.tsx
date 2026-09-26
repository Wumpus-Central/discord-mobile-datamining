// === Module 12753: transformUploaderAttachments ===

// Module 12753 (transformUploaderAttachments)
import util from "util" /* 1115 */;
import MediaFormatTesters from "MediaFormatTesters" /* 4986 */;
import CloudUpload from "CloudUpload" /* 5439 */;
import RowGeneratorConstants from "RowGeneratorConstants" /* 7375 */;
import ExplicitMediaUtils from "ExplicitMediaUtils" /* 7582 */;
import size from "module_2" /* 2 */;

const AttachmentType = RowGeneratorConstants.AttachmentType;
const result = size.fileFinishedImporting("modules/messages/native/renderer/transformUploaderAttachments.tsx");

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
      const isImageFileResult = MediaFormatTesters.isImageFile(str);
      const isVideoFileResult = MediaFormatTesters.isVideoFile(str);
      let num = item.progress;
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
      if (!dependencyMap) {
        const tmp7 = rounded;
      }
      const obj5 = { url: str2, videoUrl: null };
      let tmp8;
      if (isVideoFileResult) {
        tmp8 = str2;
      }
      obj5.videoUrl = tmp8;
      const isAudioFileResult = MediaFormatTesters.isAudioFile(str);
      const merged = Object.assign(ExplicitMediaUtils.getAttachmentObscurityDefaults());
      obj5.filename = str;
      let str3 = "";
      if (null != item.size) {
        str3 = item.size.toString();
      }
      obj5.size = str3;
      obj5.showDescription = false;
      let num5 = 0;
      if (closure_1_2) {
        num5 = 0;
        if (null != item.width) {
          num5 = item.width;
        }
      }
      obj5.width = num5;
      let num6 = 0;
      if (closure_1_2) {
        num6 = 0;
        if (null != item.height) {
          num6 = item.height;
        }
      }
      obj5.height = num6;
      const intl = util.intl;
      const string = intl.string;
      const t = util.t;
      if (isVideoFileResult) {
        let stringResult = string(t["BEWw/7"]);
      } else {
        stringResult = string(t.IPzNKE);
      }
      obj5.hint = stringResult;
      const intl2 = util.intl;
      const string2 = intl2.string;
      const t2 = util.t;
      if (isVideoFileResult) {
        let string2Result = string2(t2["/SCpvi"]);
      } else {
        string2Result = string2(t2.fKyfca);
      }
      obj5.role = string2Result;
      if (isImageFileResult) {
        let VIDEO = AttachmentType.IMAGE;
      } else if (isVideoFileResult) {
        VIDEO = AttachmentType.VIDEO;
      } else {
        VIDEO = isAudioFileResult ? AttachmentType.AUDIO : AttachmentType.OTHER;
      }
      obj5.attachmentType = VIDEO;
      obj5.progress = tmp7;
      obj5.uploaderId = uploaderFile.id;
      let str5 = filename.id;
      if (str5 == null) {
        str5 = "";
      }
      obj5.uploaderItemId = str5;
      ({ durationSecs: obj4.durationSecs, waveform: obj4.waveform } = item);
      let uniqueId;
      if (filename instanceof CloudUpload.CloudUpload) {
        uniqueId = filename.uniqueId;
      }
      obj5.id = uniqueId;
      return obj5;
    });
  }
  if (mapped == null) {
    mapped = [];
  }
  return mapped;
};