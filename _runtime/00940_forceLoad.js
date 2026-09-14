// _runtime/00940_forceLoad.js
import _mod682 from "metro/00682__.js";
import _mod895 from "metro/00895__.js";
import _mod897 from "metro/00897__.js";
import extractSafariExtensionDetails from "00938_extractSafariExtensionDetails.js";
import _wrapTimeFunction from "00941__wrapTimeFunction.js";
import breadcrumbsIntegration from "00942_breadcrumbsIntegration.js";
import _getUnhandledRejectionError from "00943__getUnhandledRejectionError.js";
import _mod944 from "metro/00944__.js";
import httpContextIntegration from "00945_httpContextIntegration.js";
import browserSessionIntegration from "00946_browserSessionIntegration.js";
import _mod947 from "metro/00947__.js";

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export function forceLoad() {}
export const getDefaultIntegrations = function getDefaultIntegrations(arg0) {
  const items = [_mod682.inboundFiltersIntegration(), , , , , , , ,];
  items[1] = _mod682.functionToStringIntegration();
  items[2] = _wrapTimeFunction.browserApiErrorsIntegration();
  items[3] = breadcrumbsIntegration.breadcrumbsIntegration();
  items[4] = _getUnhandledRejectionError.globalHandlersIntegration();
  items[5] = _mod944.linkedErrorsIntegration();
  items[6] = _mod682.dedupeIntegration();
  items[7] = httpContextIntegration.httpContextIntegration();
  items[8] = browserSessionIntegration.browserSessionIntegration();
  return items;
};
export const init = function init() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const skipBrowserExtensionCheck = obj.skipBrowserExtensionCheck;
  let result = !skipBrowserExtensionCheck;
  if (!skipBrowserExtensionCheck) {
    result = _mod947.checkAndWarnIfIsEmbeddedBrowserExtension();
  }
  if (null == obj.defaultIntegrations) {
    const items = [_mod682.inboundFiltersIntegration(), , , , , , , ,];
    items[1] = _mod682.functionToStringIntegration();
    items[2] = _wrapTimeFunction.browserApiErrorsIntegration();
    items[3] = breadcrumbsIntegration.breadcrumbsIntegration();
    items[4] = _getUnhandledRejectionError.globalHandlersIntegration();
    items[5] = _mod944.linkedErrorsIntegration();
    items[6] = _mod682.dedupeIntegration();
    items[7] = httpContextIntegration.httpContextIntegration();
    items[8] = browserSessionIntegration.browserSessionIntegration();
    let defaultIntegrations = items;
  } else {
    defaultIntegrations = obj.defaultIntegrations;
  }
  const obj12 = {};
  const merged = Object.assign(obj);
  let enabled = !result;
  if (!result) {
    enabled = obj.enabled;
  }
  obj12.enabled = enabled;
  let defaultStackParser = obj.stackParser;
  if (!defaultStackParser) {
    defaultStackParser = extractSafariExtensionDetails.defaultStackParser;
  }
  obj12.stackParser = _mod682.stackParserFromStackParserOptions(defaultStackParser);
  obj12.integrations = _mod682.getIntegrationsToSetup({ integrations: obj.integrations, defaultIntegrations });
  const obj14 = { integrations: obj.integrations, defaultIntegrations };
  const tmp7Result = _mod682;
  obj12.transport = obj.transport || _mod897.makeFetchTransport;
  const tmp9 = obj.transport || _mod897.makeFetchTransport;
  return _mod682.initAndBind(_mod895.BrowserClient, obj12);
};
export const onLoad = function onLoad(fn) {
  fn();
};
