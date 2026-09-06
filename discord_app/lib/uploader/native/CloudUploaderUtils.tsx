// === Module 5173: CloudUploaderUtils ===

// Module 5173 (CloudUploaderUtils)
import _modDef12 from "module_12" /* 12 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import UploadUtils from "UploadUtils" /* 5129 */;
import LocaleStore from "LocaleStore" /* 2025 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import DeveloperOptionsStore from "DeveloperOptionsStore" /* 1347 */;

require = fn;
function getUploadPayload(self) {
  const obj = { filename: self.filename, file_size: self.currentSize, id: _modDef12.uniqueId(), original_content_type: "Array" };
  return obj;
}
const size = fn(2);
let result = size.fileFinishedImporting("lib/uploader/native/CloudUploaderUtils.tsx");

export default { getUploadPayload };
export const prepareMessagePayload = function prepareMessagePayload(Authorization, arr, arg2, arg3) {
  const items = [];
  const item = arr.forEach((item, index) => {
    const obj = {};
    const merged = Object.assign(obj.getAttachmentPayload(item, index));
    items.push(obj);
  });
  if (null != arg3) {
    if (null != arg2) {
      let obj = {};
      let merged = Object.assign(arg2);
      const items1 = [];
      HermesBuiltin.arraySpread(items, HermesBuiltin.arraySpread(_modDef12.get(obj, arg3, []), 0));
      let result = _modDef12.set(obj, arg3, items1);
    }
    obj = { Authorization, "X-Debug-Options": DeveloperOptionsStore.getDebugOptionsHeaderValue(), "Accept-Language": LocaleStore.locale };
    const superPropertiesBase64 = AnalyticsUtilsDefault.getSuperPropertiesBase64();
    if (null != superPropertiesBase64) {
      obj["X-Super-Properties"] = superPropertiesBase64;
    }
    const fingerprint = AuthenticationStore.getFingerprint();
    if (null != fingerprint) {
      obj["X-Fingerprint"] = fingerprint;
    }
    const obj1 = { headers: obj, body: result };
    return obj1;
  }
  result = {};
  const merged1 = Object.assign(arg2);
  result.attachments = items;
};
export { getUploadPayload };