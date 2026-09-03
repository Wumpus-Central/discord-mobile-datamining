// === Module 16454: getFrameLaunchContextQueryParams ===

// Module 16454 (getFrameLaunchContextQueryParams)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/frames/utils/getFrameLaunchContextQueryParams.tsx");

export default function getFrameLaunchContextQueryParams(customId) {
  const obj = {};
  if (null != customId.customId) {
    obj.custom_id = customId.customId;
  }
  if (null != customId.referrerId) {
    obj.referrer_id = customId.referrerId;
  }
  return obj;
};