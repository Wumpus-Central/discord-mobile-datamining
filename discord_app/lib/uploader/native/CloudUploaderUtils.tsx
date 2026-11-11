// === Module 8833: CloudUploaderUtils ===

// Module 8833 (CloudUploaderUtils)
import applyDefault from "apply" /* 12 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import UploadUtils from "UploadUtils" /* 8780 */;
import LocaleStore from "LocaleStore" /* 2186 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import DeveloperOptionsStore from "DeveloperOptionsStore" /* 1359 */;

require = fn;
function getUploadPayload(self) {
  const obj = { filename: self.filename, file_size: self.currentSize, id: applyDefault.uniqueId(), original_content_type: "Array" };
  return obj;
}
const size = fn(2);
let result = size.fileFinishedImporting("lib/uploader/native/CloudUploaderUtils.tsx");

export default { getUploadPayload };
export function prepareMessagePayload(Authorization, arr, arg2, arg3) {
  items = [];
  const item = arr.forEach((item, index) => {
    const merged = Object.assign(UploadUtils.getAttachmentPayload(item, index));
    items.push({});
  });
  if (null != arg3) {
    if (null != arg2) {
      const obj = {};
      let merged = Object.assign(arg2);
      const items1 = [];
      HermesBuiltin.arraySpread(items, HermesBuiltin.arraySpread(applyDefault.get(obj, arg3, []), 0));
      let result = applyDefault.set(obj, arg3, items1);
    }
    const obj2 = { Authorization, "X-Debug-Options": DeveloperOptionsStore.getDebugOptionsHeaderValue(), "Accept-Language": LocaleStore.locale };
    const superPropertiesBase64 = AnalyticsUtilsDefault.getSuperPropertiesBase64();
    if (null != superPropertiesBase64) {
      obj2["X-Super-Properties"] = superPropertiesBase64;
    }
    const fingerprint = AuthenticationStore.getFingerprint();
    if (null != fingerprint) {
      obj2["X-Fingerprint"] = fingerprint;
    }
    const obj5 = { headers: obj2, body: result };
    return obj5;
  }
  result = {};
  const merged1 = Object.assign(arg2);
  result.attachments = items;
}
export { getUploadPayload };