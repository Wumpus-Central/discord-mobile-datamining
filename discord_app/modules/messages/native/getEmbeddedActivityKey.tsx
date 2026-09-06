// discord_app/modules/messages/native/getEmbeddedActivityKey.tsx
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/messages/native/getEmbeddedActivityKey.tsx");

export default function getEmbeddedActivityKey(location) {
  return "" + location.location.id + ":" + location.applicationId + ":" + location.launchId;
}
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
