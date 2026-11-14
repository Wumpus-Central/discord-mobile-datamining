// discord_app/lib/uploader/native/CloudUploaderUtils.tsx
import applyDefault from "../../../../_runtime/00012_apply.js";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import UploadUtils from "../../../utils/UploadUtils.tsx";
import LocaleStore from "../../../modules/user_settings/LocaleStore.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import DeveloperOptionsStore from "../../../stores/DeveloperOptionsStore.tsx";

require = fn;
function getUploadPayload(self) {
  const obj = {
    filename: self.filename,
    file_size: self.currentSize,
    id: applyDefault.uniqueId(),
    original_content_type: "Path",
  };
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
    const obj2 = {
      Authorization,
      "X-Debug-Options": DeveloperOptionsStore.getDebugOptionsHeaderValue(),
      "Accept-Language": LocaleStore.locale,
    };
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
