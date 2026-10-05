// === Module 7306: CloudUploaderUtils ===

// Module 7306 (CloudUploaderUtils)
import _modDef12 from "module_12" /* 12 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import UploadUtils from "UploadUtils" /* 7243 */;
import LocaleStore from "LocaleStore" /* 2116 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import DeveloperOptionsStore from "DeveloperOptionsStore" /* 1357 */;
import size from "module_2" /* 2 */;

function getUploadPayload(self) {
  let obj2;
  const obj = { filename: self.filename, file_size: self.currentSize, id: obj2.uniqueId(), original_content_type: "a" };
  obj2 = _modDef12;
  return obj;
}
let result = size.fileFinishedImporting("lib/uploader/native/CloudUploaderUtils.tsx");

export default { getUploadPayload };
export const prepareMessagePayload = function prepareMessagePayload(Authorization, arr, arg2, arg3) {
  const items = [];
  const item = arr.forEach((item, index) => {
    const push = items.push;
    const obj = UploadUtils;
    const obj2 = {};
    const merged = Object.assign(obj.getAttachmentPayload(item, index));
    push(obj2);
  });
  if (null != arg3) {
    let result;
    if (null != arg2) {
      let obj = {};
      let merged = Object.assign(arg2);
      const items1 = [];
      const obj3 = _modDef12;
      HermesBuiltin.arraySpread(items1, items, HermesBuiltin.arraySpread(items1, obj3.get(obj, arg3, []), 0));
      const obj4 = _modDef12;
      result = obj4.set(obj, arg3, items1);
    }
    let obj2 = { Authorization, "X-Debug-Options": DeveloperOptionsStore.getDebugOptionsHeaderValue(), "Accept-Language": LocaleStore.locale };
    const obj6 = AnalyticsUtilsDefault;
    const superPropertiesBase64 = obj6.getSuperPropertiesBase64();
    if (null != superPropertiesBase64) {
      obj2["X-Super-Properties"] = superPropertiesBase64;
    }
    const fingerprint = AuthenticationStore.getFingerprint();
    if (null != fingerprint) {
      obj2["X-Fingerprint"] = fingerprint;
    }
    return { headers: obj2, body: result };
  }
  result = { attachments: items };
  const merged1 = Object.assign(arg2);
};
export { getUploadPayload };