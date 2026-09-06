// === Module 11539: getEmbeddedActivityKey ===

// Module 11539 (getEmbeddedActivityKey)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/getEmbeddedActivityKey.tsx");

export default function getEmbeddedActivityKey(location) {
  return "" + location.location.id + ":" + location.applicationId + ":" + location.launchId;
};
export const parseEmbeddedActivityKey = function parseEmbeddedActivityKey(str) {
  const parts = str.split(":");
  let tmp = null;
  if (parts.length >= 3) {
    const obj = { channelId: null, applicationId: null, instanceId: null };
    [obj.channelId, obj.applicationId, obj.instanceId] = parts;
    tmp = obj;
  }
  return tmp;
};