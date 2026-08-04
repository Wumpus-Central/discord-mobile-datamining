// _runtime/01075_forceLoad.js
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.forceLoad = function forceLoad() {

};
arg5.getDefaultIntegrations = function getDefaultIntegrations(arg0) {
  const items = [require(817) /* registerSpanErrorInstrumentation */.inboundFiltersIntegration(), , , , , , , , ];
  const obj = require(817) /* registerSpanErrorInstrumentation */;
  items[1] = require(817) /* registerSpanErrorInstrumentation */.functionToStringIntegration();
  const obj2 = require(817) /* registerSpanErrorInstrumentation */;
  items[2] = require(1076) /* _wrapTimeFunction */.browserApiErrorsIntegration();
  const obj3 = require(1076) /* _wrapTimeFunction */;
  items[3] = require(1077) /* breadcrumbsIntegration */.breadcrumbsIntegration();
  const obj4 = require(1077) /* breadcrumbsIntegration */;
  items[4] = require(1078) /* _getUnhandledRejectionError */.globalHandlersIntegration();
  const obj5 = require(1078) /* _getUnhandledRejectionError */;
  items[5] = require(1079) /* linkedErrorsIntegration */.linkedErrorsIntegration();
  const obj6 = require(1079) /* linkedErrorsIntegration */;
  items[6] = require(817) /* registerSpanErrorInstrumentation */.dedupeIntegration();
  const obj7 = require(817) /* registerSpanErrorInstrumentation */;
  items[7] = require(1080) /* httpContextIntegration */.httpContextIntegration();
  const obj8 = require(1080) /* httpContextIntegration */;
  items[8] = require(1081) /* browserSessionIntegration */.browserSessionIntegration();
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
    result = require(1082) /* checkAndWarnIfIsEmbeddedBrowserExtension */.checkAndWarnIfIsEmbeddedBrowserExtension();
    const obj2 = require(1082) /* checkAndWarnIfIsEmbeddedBrowserExtension */;
  }
  if (null == obj.defaultIntegrations) {
    const items = [require(817) /* registerSpanErrorInstrumentation */.inboundFiltersIntegration(), , , , , , , , ];
    const obj3 = require(817) /* registerSpanErrorInstrumentation */;
    items[1] = require(817) /* registerSpanErrorInstrumentation */.functionToStringIntegration();
    const obj4 = require(817) /* registerSpanErrorInstrumentation */;
    items[2] = require(1076) /* _wrapTimeFunction */.browserApiErrorsIntegration();
    const obj5 = require(1076) /* _wrapTimeFunction */;
    items[3] = require(1077) /* breadcrumbsIntegration */.breadcrumbsIntegration();
    const obj6 = require(1077) /* breadcrumbsIntegration */;
    items[4] = require(1078) /* _getUnhandledRejectionError */.globalHandlersIntegration();
    const obj7 = require(1078) /* _getUnhandledRejectionError */;
    items[5] = require(1079) /* linkedErrorsIntegration */.linkedErrorsIntegration();
    const obj8 = require(1079) /* linkedErrorsIntegration */;
    items[6] = require(817) /* registerSpanErrorInstrumentation */.dedupeIntegration();
    const obj9 = require(817) /* registerSpanErrorInstrumentation */;
    items[7] = require(1080) /* httpContextIntegration */.httpContextIntegration();
    const obj10 = require(1080) /* httpContextIntegration */;
    items[8] = require(1081) /* browserSessionIntegration */.browserSessionIntegration();
    let defaultIntegrations = items;
    const obj11 = require(1081) /* browserSessionIntegration */;
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
  obj.stackParser = require(817) /* registerSpanErrorInstrumentation */.stackParserFromStackParserOptions(defaultStackParser);
  let tmp7Result = tmp7(817);
  obj = { integrations: obj.integrations, defaultIntegrations };
  obj.integrations = tmp7Result.getIntegrationsToSetup(obj);
  const obj13 = require(817) /* registerSpanErrorInstrumentation */;
  obj.transport = obj.transport || require(1032) /* makeFetchTransport */.makeFetchTransport;
  tmp7Result = tmp7(817);
  return tmp7Result.initAndBind(require(1030) /* _isNativeReflectConstruct */.BrowserClient, obj);
};
arg5.onLoad = function onLoad(arg0) {
  arg0();
};