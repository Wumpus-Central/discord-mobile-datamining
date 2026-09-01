// discord_app/modules/clips/clipPOVOverlap.tsx
import set from "../../../_runtime/00002_set.js";
import ME from "../../Constants.tsx";
import hasFlag from "../../../discord_common/js/shared/utils/FlagUtils.tsx";
import result2 from "ClipsConstants.tsx";
import getPOVExportTargetDefault from "getPOVExportTarget.tsx";

const ClipType = result2.ClipType;
const MessageAttachmentFlags = ME.MessageAttachmentFlags;
const result = set.fileFinishedImporting("modules/clips/clipPOVOverlap.tsx");

export const getClipPOVWindow = function getClipPOVWindow(type) {
  if (type.type === ClipType.CLIP) {
    if (null != type.applicationId) {
      if (null != type.syncTimestamp) {
        const obj = { applicationId: null, startTimestamp: null, endTimestamp: null };
        obj[0] = type.applicationId;
        obj[1] = type.syncTimestamp - type.length;
        obj[2] = type.syncTimestamp;
        return obj;
      }
    }
  }
};
export const getClipAttachmentPOVWindow = function getClipAttachmentPOVWindow(nextResult) {
  let obj = hasFlag;
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
        obj = { applicationId: null, startTimestamp: null, endTimestamp: null };
        obj[0] = id;
        obj[1] = tmp4.syncTimestamp - 1000 * tmp4.duration;
        obj[2] = tmp4.syncTimestamp;
        return obj;
      }
    }
  }
};
export const getClipPOVOverlapMilliseconds = function getClipPOVOverlapMilliseconds(applicationId, applicationId2) {
  if (applicationId.applicationId === applicationId2.applicationId) {
    const _Math = Math;
    const _Math2 = Math;
    const bound = Math.min(applicationId.endTimestamp, applicationId2.endTimestamp);
    const diff = bound - Math.max(applicationId.startTimestamp, applicationId2.startTimestamp);
    let tmp4;
    if (diff > 5000) {
      tmp4 = diff;
    }
    return tmp4;
  }
};