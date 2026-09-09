// === Module 14017: clipPOVOverlap ===

// Module 14017 (clipPOVOverlap)
import Constants from "Constants" /* 1074 */;
import FlagUtils from "FlagUtils" /* 1384 */;
import ClipsConstants from "ClipsConstants" /* 5146 */;
import getPOVExportTargetDefault from "getPOVExportTarget" /* 14018 */;
import size from "module_2" /* 2 */;

const ClipType = ClipsConstants.ClipType;
const MessageAttachmentFlags = Constants.MessageAttachmentFlags;
const result = size.fileFinishedImporting("modules/clips/clipPOVOverlap.tsx");

export const getClipPOVWindow = function getClipPOVWindow(type) {
  if (type.type === ClipType.CLIP) {
    if (null != type.applicationId) {
      if (null != type.syncTimestamp) {
        const obj = { applicationId: type.applicationId, startTimestamp: type.syncTimestamp - type.length, endTimestamp: type.syncTimestamp };
        return obj;
      }
    }
  }
};
export const getClipAttachmentPOVWindow = function getClipAttachmentPOVWindow(nextResult) {
  let obj = FlagUtils;
  let num = nextResult.flags;
  if (num == null) {
    num = 0;
  }
  const application = nextResult.application;
  let id;
  if (application != null) {
    id = application.id;
  }
  const tmp4 = getPOVExportTargetDefault(nextResult);
  if (null != id) {
    if (null != tmp4) {
      if (hasFlagResult) {
        obj = { applicationId: id, startTimestamp: tmp4.syncTimestamp - 1000 * tmp4.duration, endTimestamp: tmp4.syncTimestamp };
        return obj;
      }
    }
  }
  hasFlagResult = obj.hasFlag(num, MessageAttachmentFlags.IS_CLIP);
};
export const getClipPOVOverlapMilliseconds = function getClipPOVOverlapMilliseconds(applicationId, nextResult1) {
  if (applicationId.applicationId === nextResult1.applicationId) {
    const _Math = Math;
    const _Math2 = Math;
    const bound = Math.min(applicationId.endTimestamp, nextResult1.endTimestamp);
    const diff = bound - Math.max(applicationId.startTimestamp, nextResult1.startTimestamp);
    let tmp4;
    if (diff > 5000) {
      tmp4 = diff;
    }
    return tmp4;
  }
};