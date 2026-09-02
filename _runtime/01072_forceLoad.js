// _runtime/01072_forceLoad.js
import registerSpanErrorInstrumentation from "00814_registerSpanErrorInstrumentation.js";
import _isNativeReflectConstruct from "01027__isNativeReflectConstruct.js";
import makeFetchTransport from "01029_makeFetchTransport.js";
import _wrapTimeFunction from "01073__wrapTimeFunction.js";
import breadcrumbsIntegration from "01074_breadcrumbsIntegration.js";
import _getUnhandledRejectionError from "01075__getUnhandledRejectionError.js";
import linkedErrorsIntegration from "01076_linkedErrorsIntegration.js";
import httpContextIntegration from "01077_httpContextIntegration.js";
import browserSessionIntegration from "01078_browserSessionIntegration.js";
import checkAndWarnIfIsEmbeddedBrowserExtension from "01079_checkAndWarnIfIsEmbeddedBrowserExtension.js";

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.forceLoad = function forceLoad() {};
arg5.getDefaultIntegrations = function getDefaultIntegrations(arg0) {
  const items = [registerSpanErrorInstrumentation.inboundFiltersIntegration(), , , , , , , ,];
  const obj = registerSpanErrorInstrumentation;
  items[1] = registerSpanErrorInstrumentation.functionToStringIntegration();
  const obj2 = registerSpanErrorInstrumentation;
  items[2] = _wrapTimeFunction.browserApiErrorsIntegration();
  const obj3 = _wrapTimeFunction;
  items[3] = breadcrumbsIntegration.breadcrumbsIntegration();
  const obj4 = breadcrumbsIntegration;
  items[4] = _getUnhandledRejectionError.globalHandlersIntegration();
  const obj5 = _getUnhandledRejectionError;
  items[5] = linkedErrorsIntegration.linkedErrorsIntegration();
  const obj6 = linkedErrorsIntegration;
  items[6] = registerSpanErrorInstrumentation.dedupeIntegration();
  const obj7 = registerSpanErrorInstrumentation;
  items[7] = httpContextIntegration.httpContextIntegration();
  const obj8 = httpContextIntegration;
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
    const obj2 = checkAndWarnIfIsEmbeddedBrowserExtension;
  }
  if (null == obj.defaultIntegrations) {
    const items = [registerSpanErrorInstrumentation.inboundFiltersIntegration(), , , , , , , ,];
    const obj3 = registerSpanErrorInstrumentation;
    items[1] = registerSpanErrorInstrumentation.functionToStringIntegration();
    const obj4 = registerSpanErrorInstrumentation;
    items[2] = _wrapTimeFunction.browserApiErrorsIntegration();
    const obj5 = _wrapTimeFunction;
    items[3] = breadcrumbsIntegration.breadcrumbsIntegration();
    const obj6 = breadcrumbsIntegration;
    items[4] = _getUnhandledRejectionError.globalHandlersIntegration();
    const obj7 = _getUnhandledRejectionError;
    items[5] = linkedErrorsIntegration.linkedErrorsIntegration();
    const obj8 = linkedErrorsIntegration;
    items[6] = registerSpanErrorInstrumentation.dedupeIntegration();
    const obj9 = registerSpanErrorInstrumentation;
    items[7] = httpContextIntegration.httpContextIntegration();
    const obj10 = httpContextIntegration;
    items[8] = browserSessionIntegration.browserSessionIntegration();
    let defaultIntegrations = items;
    const obj11 = browserSessionIntegration;
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
    defaultStackParser = tmp7(1070).defaultStackParser;
  }
  obj.stackParser = registerSpanErrorInstrumentation.stackParserFromStackParserOptions(defaultStackParser);
  let tmp7Result = tmp7(814);
  obj = { integrations: obj.integrations, defaultIntegrations };
  obj.integrations = tmp7Result.getIntegrationsToSetup(obj);
  const obj13 = registerSpanErrorInstrumentation;
  obj.transport = obj.transport || makeFetchTransport.makeFetchTransport;
  tmp7Result = tmp7(814);
  return tmp7Result.initAndBind(_isNativeReflectConstruct.BrowserClient, obj);
};
arg5.onLoad = function onLoad(arg0) {
  arg0();
};
