// === Module 13018: transformUploaderAttachments ===

// Module 13018 (transformUploaderAttachments)
import intl3 from "intl" /* 1126 */;
import MediaFormatTesters from "MediaFormatTesters" /* 5040 */;
import CloudUpload from "CloudUpload" /* 7268 */;
import RowGeneratorConstants from "RowGeneratorConstants" /* 7592 */;
import ExplicitMediaUtils from "ExplicitMediaUtils" /* 7808 */;
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
      let VIDEO;
      let num5;
      let num6;
      let str3;
      let str5;
      let string2Result;
      let stringResult;
      let tmp8;
      let tmp9;
      let uniqueId;
      let str = filename.filename;
      if (str == null) {
        str = "";
      }
      const item = filename.item;
      let str2 = item.originalUri;
      if (str2 == null) {
        str2 = "";
      }
      const obj = MediaFormatTesters;
      const isImageFileResult = obj.isImageFile(str);
      const obj2 = MediaFormatTesters;
      const isVideoFileResult = obj2.isVideoFile(str);
      let num = item.progress;
      const obj3 = MediaFormatTesters;
      const isAudioFileResult = obj3.isAudioFile(str);
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
        tmp8 = rounded;
      }
      const obj5 = { url: str2, videoUrl: tmp9, filename: str, size: str3, showDescription: false, width: num5, height: num6, hint: stringResult, role: string2Result, attachmentType: VIDEO, progress: tmp8, uploaderId: uploaderFile.id, uploaderItemId: str5, id: uniqueId };
      tmp9 = undefined;
      if (isVideoFileResult) {
        tmp9 = str2;
      }
      const tmpResult = ExplicitMediaUtils;
      const merged = Object.assign(tmpResult.getAttachmentObscurityDefaults());
      str3 = "";
      if (null != item.size) {
        const str4 = item.size;
        str3 = str4.toString();
      }
      num5 = 0;
      if (AttachmentType) {
        num5 = 0;
        if (null != item.width) {
          num5 = item.width;
        }
      }
      num6 = 0;
      if (AttachmentType) {
        num6 = 0;
        if (null != item.height) {
          num6 = item.height;
        }
      }
      const intl = intl3.intl;
      const string = intl.string;
      const t = intl3.t;
      if (isVideoFileResult) {
        stringResult = string(t["BEWw/7"]);
      } else {
        stringResult = string(t.IPzNKE);
      }
      const intl2 = intl3.intl;
      const string2 = intl2.string;
      const t2 = intl3.t;
      if (isVideoFileResult) {
        string2Result = string2(t2["/SCpvi"]);
      } else {
        string2Result = string2(t2.fKyfca);
      }
      if (isImageFileResult) {
        VIDEO = AttachmentType.IMAGE;
      } else if (isVideoFileResult) {
        VIDEO = AttachmentType.VIDEO;
      } else {
        VIDEO = isAudioFileResult ? AttachmentType.AUDIO : AttachmentType.OTHER;
      }
      str5 = filename.id;
      if (str5 == null) {
        str5 = "";
      }
      ({ durationSecs: obj4.durationSecs, waveform: obj4.waveform } = item);
      uniqueId = undefined;
      if (filename instanceof CloudUpload.CloudUpload) {
        uniqueId = filename.uniqueId;
      }
      return obj5;
    });
  }
  if (mapped == null) {
    mapped = [];
  }
  return mapped;
};