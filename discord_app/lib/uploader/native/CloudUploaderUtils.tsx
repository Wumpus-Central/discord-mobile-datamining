// === Module 5173: getUploadPayload ===

// Module 5173 (getUploadPayload)
import applyDefault from "apply" /* 12 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 1242 */;
import closure_3 from "_getSystemLocale" /* 2025 */;
import closure_4 from "fetchFingerprint" /* 502 */;
import closure_5 from "refreshSourceMapCookie" /* 1347 */;

const require = arg1;
function getUploadPayload(c0) {
  const obj = { filename: c0.filename, file_size: c0.currentSize, id: applyDefault.uniqueId(), original_content_type: "Array" };
  return obj;
}
let result = require("set").fileFinishedImporting("lib/uploader/native/CloudUploaderUtils.tsx");

export default { getUploadPayload };
export const prepareMessagePayload = function prepareMessagePayload(arg0, arr) {
  const items = [];
  const item = arr.forEach((closure_0, closure_1) => {
    let obj = items(closure_1_2[3]);
    obj = {};
    const merged = Object.assign(obj.getAttachmentPayload(closure_0, closure_1));
    items.push(obj);
  });
  if (null != arg3) {
    if (null != arg2) {
      let obj = {};
      let merged = Object.assign(arg2);
      const items1 = [];
      HermesBuiltin.arraySpread(items, HermesBuiltin.arraySpread(applyDefault.get(obj, arg3, []), 0));
      const obj3 = applyDefault;
      let result = applyDefault.set(obj, arg3, items1);
      const obj4 = applyDefault;
    }
    obj = { Authorization: null, "X-Debug-Options": null, "Accept-Language": null };
    obj[0] = arg0;
    obj[1] = debugOptionsHeaderValue.getDebugOptionsHeaderValue();
    obj[2] = locale.locale;
    const superPropertiesBase64 = expandEventPropertiesDefault.getSuperPropertiesBase64();
    if (null != superPropertiesBase64) {
      obj["X-Super-Properties"] = superPropertiesBase64;
    }
    fingerprint = fingerprint.getFingerprint();
    if (null != fingerprint) {
      obj["X-Fingerprint"] = fingerprint;
    }
    obj1 = { headers: null, body: null };
    obj1[0] = obj;
    obj1[1] = result;
    return obj1;
  }
  result = {};
  const merged1 = Object.assign(arg2);
  result.attachments = items;
};
export { getUploadPayload };