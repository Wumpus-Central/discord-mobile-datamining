// === Module 20114: DeepLinkEventMapping ===

// Module 20114 (DeepLinkEventMapping)
import DeepLinkTypes from "DeepLinkTypes" /* 20111 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_startup/native/DeepLinkProcessor/DeepLinkEventMapping.tsx");

export function mapDeepLinkEvent(source, arg1, arg2) {
  let tmp = arg1;
  if (!arg1) {
    tmp = "appsflyer" === source.source && source.isColdStart;
    const tmp2 = "appsflyer" === source.source && source.isColdStart;
  }
  let AppsFlyer = DeepLinkTypes.DeeplinkSource.OS;
  if ("appsflyer" === source.source) {
    const DeeplinkSource = DeepLinkTypes.DeeplinkSource;
  } else {
    if (arg2) {
      AppsFlyer = DeepLinkTypes.DeeplinkSource.AppsFlyer;
    }
    const obj = { deeplink: null, isColdStart: null };
    const obj2 = { url: source.url, source: AppsFlyer };
    obj.deeplink = obj2;
    obj.isColdStart = tmp;
    return obj;
  }
}