// === Module 4870: getUploadPayload ===

// Module 4870 (getUploadPayload)
import applyDefault from "apply" /* 12 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import _getSystemLocale from "_getSystemLocale" /* 1994 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import refreshSourceMapCookie from "refreshSourceMapCookie" /* 706 */;

const require = fn;
function getUploadPayload(closure_0) {
  const obj = { filename: _require.filename, file_size: _require.currentSize, id: applyDefault.uniqueId(), original_content_type: "Array" };
  return obj;
}
let result = require("obj132").fileFinishedImporting("lib/uploader/native/CloudUploaderUtils.tsx");

export default { getUploadPayload };
export const prepareMessagePayload = function prepareMessagePayload(arg0, arr) {
  const items = [];
  const item = arr.forEach((item, index) => {
    items(dependencyMap[3]);
    const obj = {};
    const merged = Object.assign(obj.getAttachmentPayload(item, index));
    items.push(obj);
  });
  if (null != arg3) {
    if (null != arg2) {
      let obj = {};
      let merged = Object.assign(arg2);
      const items1 = [];
      HermesBuiltin.arraySpread(items, HermesBuiltin.arraySpread(applyDefault.get(obj, arg3, []), 0));
      let result = applyDefault.set(obj, arg3, items1);
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