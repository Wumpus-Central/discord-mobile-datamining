// _runtime/01075_forceLoad.js
import { registerSpanErrorInstrumentation } from "00817_registerSpanErrorInstrumentation.js";
import { _isNativeReflectConstruct } from "01030__isNativeReflectConstruct.js";
import { makeFetchTransport } from "01032_makeFetchTransport.js";
import { _wrapTimeFunction } from "01076__wrapTimeFunction.js";
import { breadcrumbsIntegration } from "01077_breadcrumbsIntegration.js";
import { _getUnhandledRejectionError } from "01078__getUnhandledRejectionError.js";
import { linkedErrorsIntegration } from "01079_linkedErrorsIntegration.js";
import { httpContextIntegration } from "01080_httpContextIntegration.js";
import { browserSessionIntegration } from "01081_browserSessionIntegration.js";
import { checkAndWarnIfIsEmbeddedBrowserExtension } from "01082_checkAndWarnIfIsEmbeddedBrowserExtension.js";
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.forceLoad = function forceLoad() {

};
arg5.getDefaultIntegrations = function getDefaultIntegrations(arg0) {
  const items = [registerSpanErrorInstrumentation /* registerSpanErrorInstrumentation */.inboundFiltersIntegration(), , , , , , , , ];
  const obj = registerSpanErrorInstrumentation /* registerSpanErrorInstrumentation */;
  items[1] = registerSpanErrorInstrumentation /* registerSpanErrorInstrumentation */.functionToStringIntegration();
  const obj2 = registerSpanErrorInstrumentation /* registerSpanErrorInstrumentation */;
  items[2] = _wrapTimeFunction /* _wrapTimeFunction */.browserApiErrorsIntegration();
  const obj3 = _wrapTimeFunction /* _wrapTimeFunction */;
  items[3] = breadcrumbsIntegration /* breadcrumbsIntegration */.breadcrumbsIntegration();
  const obj4 = breadcrumbsIntegration /* breadcrumbsIntegration */;
  items[4] = _getUnhandledRejectionError /* _getUnhandledRejectionError */.globalHandlersIntegration();
  const obj5 = _getUnhandledRejectionError /* _getUnhandledRejectionError */;
  items[5] = linkedErrorsIntegration /* linkedErrorsIntegration */.linkedErrorsIntegration();
  const obj6 = linkedErrorsIntegration /* linkedErrorsIntegration */;
  items[6] = registerSpanErrorInstrumentation /* registerSpanErrorInstrumentation */.dedupeIntegration();
  const obj7 = registerSpanErrorInstrumentation /* registerSpanErrorInstrumentation */;
  items[7] = httpContextIntegration /* httpContextIntegration */.httpContextIntegration();
  const obj8 = httpContextIntegration /* httpContextIntegration */;
  items[8] = browserSessionIntegration /* browserSessionIntegration */.browserSessionIntegration();
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
    result = checkAndWarnIfIsEmbeddedBrowserExtension /* checkAndWarnIfIsEmbeddedBrowserExtension */.checkAndWarnIfIsEmbeddedBrowserExtension();
    const obj2 = checkAndWarnIfIsEmbeddedBrowserExtension /* checkAndWarnIfIsEmbeddedBrowserExtension */;
  }
  if (null == obj.defaultIntegrations) {
    const items = [registerSpanErrorInstrumentation /* registerSpanErrorInstrumentation */.inboundFiltersIntegration(), , , , , , , , ];
    const obj3 = registerSpanErrorInstrumentation /* registerSpanErrorInstrumentation */;
    items[1] = registerSpanErrorInstrumentation /* registerSpanErrorInstrumentation */.functionToStringIntegration();
    const obj4 = registerSpanErrorInstrumentation /* registerSpanErrorInstrumentation */;
    items[2] = _wrapTimeFunction /* _wrapTimeFunction */.browserApiErrorsIntegration();
    const obj5 = _wrapTimeFunction /* _wrapTimeFunction */;
    items[3] = breadcrumbsIntegration /* breadcrumbsIntegration */.breadcrumbsIntegration();
    const obj6 = breadcrumbsIntegration /* breadcrumbsIntegration */;
    items[4] = _getUnhandledRejectionError /* _getUnhandledRejectionError */.globalHandlersIntegration();
    const obj7 = _getUnhandledRejectionError /* _getUnhandledRejectionError */;
    items[5] = linkedErrorsIntegration /* linkedErrorsIntegration */.linkedErrorsIntegration();
    const obj8 = linkedErrorsIntegration /* linkedErrorsIntegration */;
    items[6] = registerSpanErrorInstrumentation /* registerSpanErrorInstrumentation */.dedupeIntegration();
    const obj9 = registerSpanErrorInstrumentation /* registerSpanErrorInstrumentation */;
    items[7] = httpContextIntegration /* httpContextIntegration */.httpContextIntegration();
    const obj10 = httpContextIntegration /* httpContextIntegration */;
    items[8] = browserSessionIntegration /* browserSessionIntegration */.browserSessionIntegration();
    let defaultIntegrations = items;
    const obj11 = browserSessionIntegration /* browserSessionIntegration */;
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
    defaultStackParser = tmp7(1073).defaultStackParser;
  }
  obj.stackParser = registerSpanErrorInstrumentation /* registerSpanErrorInstrumentation */.stackParserFromStackParserOptions(defaultStackParser);
  let tmp7Result = tmp7(817);
  obj = { integrations: obj.integrations, defaultIntegrations };
  obj.integrations = tmp7Result.getIntegrationsToSetup(obj);
  const obj13 = registerSpanErrorInstrumentation /* registerSpanErrorInstrumentation */;
  obj.transport = obj.transport || makeFetchTransport /* makeFetchTransport */.makeFetchTransport;
  tmp7Result = tmp7(817);
  return tmp7Result.initAndBind(_isNativeReflectConstruct /* _isNativeReflectConstruct */.BrowserClient, obj);
};
arg5.onLoad = function onLoad(arg0) {
  arg0();
};