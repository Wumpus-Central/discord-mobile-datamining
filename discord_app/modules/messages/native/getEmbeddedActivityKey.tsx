// === Module 10731: getEmbeddedActivityKey ===

// Module 10731 (getEmbeddedActivityKey)
import obj132 from "obj132" /* 2 */;

const result = obj132.fileFinishedImporting("modules/messages/native/getEmbeddedActivityKey.tsx");

export default function getEmbeddedActivityKey(location) {
  return "" + location.location.id + ":" + location.applicationId + ":" + location.launchId;
};
export const parseEmbeddedActivityKey = function parseEmbeddedActivityKey(str) {
  const parts = str.split(":");
  let tmp = null;
  if (parts.length >= 3) {
    const obj = { channelId: null, applicationId: null, instanceId: null };
    [obj[0], obj[1], obj[2]] = parts;
    tmp = obj;
  }
  return tmp;
};