// _runtime/01075_forceLoad.js
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.forceLoad = function forceLoad() {

};
arg5.getDefaultIntegrations = function getDefaultIntegrations(arg0) {
  const items = [require("00817_registerSpanErrorInstrumentation.js") /* registerSpanErrorInstrumentation */.inboundFiltersIntegration(), , , , , , , , ];
  const obj = require("00817_registerSpanErrorInstrumentation.js") /* registerSpanErrorInstrumentation */;
  items[1] = require("00817_registerSpanErrorInstrumentation.js") /* registerSpanErrorInstrumentation */.functionToStringIntegration();
  const obj2 = require("00817_registerSpanErrorInstrumentation.js") /* registerSpanErrorInstrumentation */;
  items[2] = require("01076__wrapTimeFunction.js") /* _wrapTimeFunction */.browserApiErrorsIntegration();
  const obj3 = require("01076__wrapTimeFunction.js") /* _wrapTimeFunction */;
  items[3] = require("01077_breadcrumbsIntegration.js") /* breadcrumbsIntegration */.breadcrumbsIntegration();
  const obj4 = require("01077_breadcrumbsIntegration.js") /* breadcrumbsIntegration */;
  items[4] = require("01078__getUnhandledRejectionError.js") /* _getUnhandledRejectionError */.globalHandlersIntegration();
  const obj5 = require("01078__getUnhandledRejectionError.js") /* _getUnhandledRejectionError */;
  items[5] = require("01079_linkedErrorsIntegration.js") /* linkedErrorsIntegration */.linkedErrorsIntegration();
  const obj6 = require("01079_linkedErrorsIntegration.js") /* linkedErrorsIntegration */;
  items[6] = require("00817_registerSpanErrorInstrumentation.js") /* registerSpanErrorInstrumentation */.dedupeIntegration();
  const obj7 = require("00817_registerSpanErrorInstrumentation.js") /* registerSpanErrorInstrumentation */;
  items[7] = require("01080_httpContextIntegration.js") /* httpContextIntegration */.httpContextIntegration();
  const obj8 = require("01080_httpContextIntegration.js") /* httpContextIntegration */;
  items[8] = require("01081_browserSessionIntegration.js") /* browserSessionIntegration */.browserSessionIntegration();
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
    result = require("01082_checkAndWarnIfIsEmbeddedBrowserExtension.js") /* checkAndWarnIfIsEmbeddedBrowserExtension */.checkAndWarnIfIsEmbeddedBrowserExtension();
    const obj2 = require("01082_checkAndWarnIfIsEmbeddedBrowserExtension.js") /* checkAndWarnIfIsEmbeddedBrowserExtension */;
  }
  if (null == obj.defaultIntegrations) {
    const items = [require("00817_registerSpanErrorInstrumentation.js") /* registerSpanErrorInstrumentation */.inboundFiltersIntegration(), , , , , , , , ];
    const obj3 = require("00817_registerSpanErrorInstrumentation.js") /* registerSpanErrorInstrumentation */;
    items[1] = require("00817_registerSpanErrorInstrumentation.js") /* registerSpanErrorInstrumentation */.functionToStringIntegration();
    const obj4 = require("00817_registerSpanErrorInstrumentation.js") /* registerSpanErrorInstrumentation */;
    items[2] = require("01076__wrapTimeFunction.js") /* _wrapTimeFunction */.browserApiErrorsIntegration();
    const obj5 = require("01076__wrapTimeFunction.js") /* _wrapTimeFunction */;
    items[3] = require("01077_breadcrumbsIntegration.js") /* breadcrumbsIntegration */.breadcrumbsIntegration();
    const obj6 = require("01077_breadcrumbsIntegration.js") /* breadcrumbsIntegration */;
    items[4] = require("01078__getUnhandledRejectionError.js") /* _getUnhandledRejectionError */.globalHandlersIntegration();
    const obj7 = require("01078__getUnhandledRejectionError.js") /* _getUnhandledRejectionError */;
    items[5] = require("01079_linkedErrorsIntegration.js") /* linkedErrorsIntegration */.linkedErrorsIntegration();
    const obj8 = require("01079_linkedErrorsIntegration.js") /* linkedErrorsIntegration */;
    items[6] = require("00817_registerSpanErrorInstrumentation.js") /* registerSpanErrorInstrumentation */.dedupeIntegration();
    const obj9 = require("00817_registerSpanErrorInstrumentation.js") /* registerSpanErrorInstrumentation */;
    items[7] = require("01080_httpContextIntegration.js") /* httpContextIntegration */.httpContextIntegration();
    const obj10 = require("01080_httpContextIntegration.js") /* httpContextIntegration */;
    items[8] = require("01081_browserSessionIntegration.js") /* browserSessionIntegration */.browserSessionIntegration();
    let defaultIntegrations = items;
    const obj11 = require("01081_browserSessionIntegration.js") /* browserSessionIntegration */;
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
  obj.stackParser = require("00817_registerSpanErrorInstrumentation.js") /* registerSpanErrorInstrumentation */.stackParserFromStackParserOptions(defaultStackParser);
  let tmp7Result = tmp7(817);
  obj = { integrations: obj.integrations, defaultIntegrations };
  obj.integrations = tmp7Result.getIntegrationsToSetup(obj);
  const obj13 = require("00817_registerSpanErrorInstrumentation.js") /* registerSpanErrorInstrumentation */;
  obj.transport = obj.transport || require("01032_makeFetchTransport.js") /* makeFetchTransport */.makeFetchTransport;
  tmp7Result = tmp7(817);
  return tmp7Result.initAndBind(require("01030__isNativeReflectConstruct.js") /* _isNativeReflectConstruct */.BrowserClient, obj);
};
arg5.onLoad = function onLoad(arg0) {
  arg0();
};