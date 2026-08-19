// === Module 1075: forceLoad ===

// Module 1075 (forceLoad)
import registerSpanErrorInstrumentation from "registerSpanErrorInstrumentation" /* 817 */;
import _isNativeReflectConstruct from "_isNativeReflectConstruct" /* 1030 */;
import makeFetchTransport from "makeFetchTransport" /* 1032 */;
import items2 from "items" /* 1073 */;
import _wrapTimeFunction from "_wrapTimeFunction" /* 1076 */;
import breadcrumbsIntegration from "breadcrumbsIntegration" /* 1077 */;
import _getUnhandledRejectionError from "_getUnhandledRejectionError" /* 1078 */;
import linkedErrorsIntegration from "linkedErrorsIntegration" /* 1079 */;
import httpContextIntegration from "httpContextIntegration" /* 1080 */;
import browserSessionIntegration from "browserSessionIntegration" /* 1081 */;
import checkAndWarnIfIsEmbeddedBrowserExtension from "checkAndWarnIfIsEmbeddedBrowserExtension" /* 1082 */;

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