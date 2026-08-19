// _runtime/01075_forceLoad.js
import registerSpanErrorInstrumentation from "00817_registerSpanErrorInstrumentation.js";
import _isNativeReflectConstruct from "01030__isNativeReflectConstruct.js";
import makeFetchTransport from "01032_makeFetchTransport.js";
import items2 from "01073_items.js";
import _wrapTimeFunction from "01076__wrapTimeFunction.js";
import breadcrumbsIntegration from "01077_breadcrumbsIntegration.js";
import _getUnhandledRejectionError from "01078__getUnhandledRejectionError.js";
import linkedErrorsIntegration from "01079_linkedErrorsIntegration.js";
import httpContextIntegration from "01080_httpContextIntegration.js";
import browserSessionIntegration from "01081_browserSessionIntegration.js";
import checkAndWarnIfIsEmbeddedBrowserExtension from "01082_checkAndWarnIfIsEmbeddedBrowserExtension.js";

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.forceLoad = function forceLoad() {

};
arg5.getDefaultIntegrations = function getDefaultIntegrations(arg0) {
  const items = [registerSpanErrorInstrumentation.inboundFiltersIntegration(), , , , , , , , ];
  items[1] = registerSpanErrorInstrumentation.functionToStringIntegration();
  items[2] = _wrapTimeFunction.browserApiErrorsIntegration();
  items[3] = breadcrumbsIntegration.breadcrumbsIntegration();
  items[4] = _getUnhandledRejectionError.globalHandlersIntegration();
  items[5] = linkedErrorsIntegration.linkedErrorsIntegration();
  items[6] = registerSpanErrorInstrumentation.dedupeIntegration();
  items[7] = httpContextIntegration.httpContextIntegration();
  items[8] = browserSessionIntegration.browserSessionIntegration();
  return items;
};
arg5.init = function init() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const skipBrowserExtensionCheck = obj.skipBrowserExtensionCheck;
  let result = !skipBrowserExtensionCheck;
  if (!skipBrowserExtensionCheck) {
    result = checkAndWarnIfIsEmbeddedBrowserExtension.checkAndWarnIfIsEmbeddedBrowserExtension();
  }
  if (null == obj.defaultIntegrations) {
    const items = [registerSpanErrorInstrumentation.inboundFiltersIntegration(), , , , , , , , ];
    items[1] = registerSpanErrorInstrumentation.functionToStringIntegration();
    items[2] = _wrapTimeFunction.browserApiErrorsIntegration();
    items[3] = breadcrumbsIntegration.breadcrumbsIntegration();
    items[4] = _getUnhandledRejectionError.globalHandlersIntegration();
    items[5] = linkedErrorsIntegration.linkedErrorsIntegration();
    items[6] = registerSpanErrorInstrumentation.dedupeIntegration();
    items[7] = httpContextIntegration.httpContextIntegration();
    items[8] = browserSessionIntegration.browserSessionIntegration();
    let defaultIntegrations = items;
  } else {
    defaultIntegrations = obj.defaultIntegrations;
  }
  obj = {};
  const merged = Object.assign(obj);
  let enabled = !result;
  if (!result) {
    enabled = obj.enabled;
  }
  obj.enabled = enabled;
  let defaultStackParser = obj.stackParser;
  if (!defaultStackParser) {
    defaultStackParser = items2.defaultStackParser;
  }
  obj.stackParser = registerSpanErrorInstrumentation.stackParserFromStackParserOptions(defaultStackParser);
  let tmp7Result = registerSpanErrorInstrumentation;
  obj = { integrations: obj.integrations, defaultIntegrations };
  obj.integrations = tmp7Result.getIntegrationsToSetup(obj);
  obj.transport = obj.transport || makeFetchTransport.makeFetchTransport;
  tmp7Result = registerSpanErrorInstrumentation;
  return tmp7Result.initAndBind(_isNativeReflectConstruct.BrowserClient, obj);
};
arg5.onLoad = function onLoad(fn) {
  fn();
};