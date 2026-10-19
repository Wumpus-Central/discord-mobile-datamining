// === Module 11368: getAndroidWebViewShellConfig ===

// Module 11368 (getAndroidWebViewShellConfig)
import size from "module_2" /* 2 */;

let c0 = "https://discord.com";
let c1 = "__discord-activity-shell";
const result = size.fileFinishedImporting("modules/embedded_apps/native/utils/getAndroidWebViewShellConfig.tsx");

export const getAndroidWebViewShellConfig = function getAndroidWebViewShellConfig(arg0) {
  ({ iframeUrl, shellFilePath } = arg0);
  const lastIndexOfResult = shellFilePath.lastIndexOf("/");
  const obj = { uri: "" + c0 + "/" + c1 + "/" + shellFilePath.substring(lastIndexOfResult + 1), assetLoaderConfig: null, allowMixedContent: null, documentStartOriginRules: null };
  const obj2 = { domain: null, httpAllowed: false, pathHandlers: null };
  const uRL = new URL(c0);
  obj2.domain = uRL.host;
  const items = [{ type: "internal", path: "/" + c1 + "/", directory: shellFilePath.substring(0, lastIndexOfResult) }];
  obj2.pathHandlers = items;
  obj.assetLoaderConfig = obj2;
  obj.allowMixedContent = "http:" === iframeUrl.protocol;
  const items1 = [iframeUrl.origin];
  obj.documentStartOriginRules = items1;
  return obj;
};