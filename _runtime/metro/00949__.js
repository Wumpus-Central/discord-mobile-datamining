// _runtime/metro/00949__.js
import _mod693 from "00693__.js";
import _mod904 from "00904__.js";
import _mod906 from "00906__.js";
import extractSafariExtensionDetails from "../00947_extractSafariExtensionDetails.js";
import _wrapTimeFunction from "../00950__wrapTimeFunction.js";
import breadcrumbsIntegration from "../00951_breadcrumbsIntegration.js";
import _getUnhandledRejectionError from "../00952__getUnhandledRejectionError.js";
import _mod953 from "00953__.js";
import httpContextIntegration from "../00954_httpContextIntegration.js";
import browserSessionIntegration from "../00955_browserSessionIntegration.js";
import _mod956 from "00956__.js";

require = arg1;
const dependencyMap = arg6;
function getDefaultIntegrations(arg0) {
  const items = [_mod693.inboundFiltersIntegration(), , , , , , , , ,];
  items[1] = _mod693.functionToStringIntegration();
  items[2] = _mod693.conversationIdIntegration();
  items[3] = _wrapTimeFunction.browserApiErrorsIntegration();
  items[4] = breadcrumbsIntegration.breadcrumbsIntegration();
  items[5] = _getUnhandledRejectionError.globalHandlersIntegration();
  items[6] = _mod953.linkedErrorsIntegration();
  items[7] = _mod693.dedupeIntegration();
  items[8] = httpContextIntegration.httpContextIntegration();
  items[9] = browserSessionIntegration.browserSessionIntegration();
  return items;
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export function forceLoad() {}
export { getDefaultIntegrations };
export const init = function init() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const skipBrowserExtensionCheck = obj.skipBrowserExtensionCheck;
  let result = !skipBrowserExtensionCheck;
  if (!skipBrowserExtensionCheck) {
    result = _mod956.checkAndWarnIfIsEmbeddedBrowserExtension();
  }
  if (null == obj.defaultIntegrations) {
    let defaultIntegrations = getDefaultIntegrations();
  } else {
    defaultIntegrations = obj.defaultIntegrations;
  }
  const obj3 = {};
  const merged = Object.assign(obj);
  let enabled = !result;
  if (!result) {
    enabled = obj.enabled;
  }
  obj3.enabled = enabled;
  let defaultStackParser = obj.stackParser;
  if (!defaultStackParser) {
    defaultStackParser = extractSafariExtensionDetails.defaultStackParser;
  }
  obj3.stackParser = _mod693.stackParserFromStackParserOptions(defaultStackParser);
  obj3.integrations = _mod693.getIntegrationsToSetup({ integrations: obj.integrations, defaultIntegrations });
  const obj5 = { integrations: obj.integrations, defaultIntegrations };
  const tmp6Result = _mod693;
  obj3.transport = obj.transport || _mod906.makeFetchTransport;
  const tmp8 = obj.transport || _mod906.makeFetchTransport;
  return _mod693.initAndBind(_mod904.BrowserClient, obj3);
};
export const onLoad = function onLoad(fn) {
  fn();
};
