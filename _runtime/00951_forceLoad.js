// _runtime/00951_forceLoad.js
import _mod693 from "metro/00693__.js";
import _mod906 from "metro/00906__.js";
import _mod908 from "metro/00908__.js";
import extractSafariExtensionDetails from "00949_extractSafariExtensionDetails.js";
import _wrapTimeFunction from "00952__wrapTimeFunction.js";
import breadcrumbsIntegration from "00953_breadcrumbsIntegration.js";
import _getUnhandledRejectionError from "00954__getUnhandledRejectionError.js";
import _mod955 from "metro/00955__.js";
import httpContextIntegration from "00956_httpContextIntegration.js";
import browserSessionIntegration from "00957_browserSessionIntegration.js";
import _mod958 from "metro/00958__.js";

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export function forceLoad() {}
export const getDefaultIntegrations = function getDefaultIntegrations(arg0) {
  const items = [_mod693.inboundFiltersIntegration(), , , , , , , ,];
  items[1] = _mod693.functionToStringIntegration();
  items[2] = _wrapTimeFunction.browserApiErrorsIntegration();
  items[3] = breadcrumbsIntegration.breadcrumbsIntegration();
  items[4] = _getUnhandledRejectionError.globalHandlersIntegration();
  items[5] = _mod955.linkedErrorsIntegration();
  items[6] = _mod693.dedupeIntegration();
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
    result = _mod958.checkAndWarnIfIsEmbeddedBrowserExtension();
  }
  if (null == obj.defaultIntegrations) {
    const items = [_mod693.inboundFiltersIntegration(), , , , , , , ,];
    items[1] = _mod693.functionToStringIntegration();
    items[2] = _wrapTimeFunction.browserApiErrorsIntegration();
    items[3] = breadcrumbsIntegration.breadcrumbsIntegration();
    items[4] = _getUnhandledRejectionError.globalHandlersIntegration();
    items[5] = _mod955.linkedErrorsIntegration();
    items[6] = _mod693.dedupeIntegration();
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
  obj12.stackParser = _mod693.stackParserFromStackParserOptions(defaultStackParser);
  obj12.integrations = _mod693.getIntegrationsToSetup({ integrations: obj.integrations, defaultIntegrations });
  const obj14 = { integrations: obj.integrations, defaultIntegrations };
  const tmp7Result = _mod693;
  obj12.transport = obj.transport || _mod908.makeFetchTransport;
  const tmp9 = obj.transport || _mod908.makeFetchTransport;
  return _mod693.initAndBind(_mod906.BrowserClient, obj12);
};
export const onLoad = function onLoad(fn) {
  fn();
};
