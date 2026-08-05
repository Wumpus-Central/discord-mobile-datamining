import { apply } from "../../../../_runtime/00012_apply.js";
import { expandEventProperties } from "../../../utils/AnalyticsUtils.tsx";
// discord_app/lib/uploader/native/CloudUploaderUtils.tsx
import _getSystemLocale from "_getSystemLocale";
import fetchFingerprint from "fetchFingerprint";
import refreshSourceMapCookie from "refreshSourceMapCookie";

const require = arg1;
function getUploadPayload(outer1_0) {
  const obj = { filename: outer1_0.filename, file_size: outer1_0.currentSize, id: null, original_content_type: "Array" };
  obj[2] = apply.uniqueId();
  return obj;
}
let result = require("refreshSourceMapCookie").fileFinishedImporting("lib/uploader/native/CloudUploaderUtils.tsx");

export default { getUploadPayload };
export const prepareMessagePayload = function prepareMessagePayload(arg0, arr) {
  const items = [];
  const item = arr.forEach((closure_0, closure_1) => {
    let obj = items(outer1_2[3]);
    obj = {};
    const merged = Object.assign(obj.getAttachmentPayload(closure_0, closure_1));
    items.push(obj);
  });
  if (null != arg3) {
    if (null != arg2) {
      let obj = {};
      let merged = Object.assign(arg2);
      const items1 = [];
      HermesBuiltin.arraySpread(items, HermesBuiltin.arraySpread(apply.get(obj, arg3, []), 0));
      const obj3 = apply;
      let result = apply.set(obj, arg3, items1);
      const obj4 = apply;
    }
    obj = { Authorization: null, "X-Debug-Options": null, "Accept-Language": null };
    obj[0] = arg0;
    obj[1] = debugOptionsHeaderValue.getDebugOptionsHeaderValue();
    obj[2] = locale.locale;
    const superPropertiesBase64 = expandEventProperties.getSuperPropertiesBase64();
    if (null != superPropertiesBase64) {
      obj["X-Super-Properties"] = superPropertiesBase64;
    }
    fingerprint = fingerprint.getFingerprint();
    if (null != fingerprint) {
      obj["X-Fingerprint"] = fingerprint;
    }
    const obj1 = { headers: null, body: null };
    obj1[0] = obj;
    obj1[1] = result;
    return obj1;
  }
  result = {};
  const merged1 = Object.assign(arg2);
  result.attachments = items;
};
export { getUploadPayload };