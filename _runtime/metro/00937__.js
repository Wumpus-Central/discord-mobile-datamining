// === Module 937: ? ===

// Module 937
import _mod681 from "module_681" /* 681 */;
import _mod892 from "module_892" /* 892 */;
import _mod894 from "module_894" /* 894 */;
import extractSafariExtensionDetails from "extractSafariExtensionDetails" /* 935 */;
import _wrapTimeFunction from "_wrapTimeFunction" /* 938 */;
import breadcrumbsIntegration from "breadcrumbsIntegration" /* 939 */;
import _getUnhandledRejectionError from "_getUnhandledRejectionError" /* 940 */;
import _mod941 from "module_941" /* 941 */;
import httpContextIntegration from "httpContextIntegration" /* 942 */;
import browserSessionIntegration from "browserSessionIntegration" /* 943 */;
import _mod944 from "module_944" /* 944 */;

require = arg1;
const dependencyMap = arg6;
function getDefaultIntegrations(arg0) {
  const items = [_mod681.inboundFiltersIntegration(), , , , , , , , , ];
  items[1] = _mod681.functionToStringIntegration();
  items[2] = _mod681.conversationIdIntegration();
  items[3] = _wrapTimeFunction.browserApiErrorsIntegration();
  items[4] = breadcrumbsIntegration.breadcrumbsIntegration();
  items[5] = _getUnhandledRejectionError.globalHandlersIntegration();
  items[6] = _mod941.linkedErrorsIntegration();
  items[7] = _mod681.dedupeIntegration();
  items[8] = httpContextIntegration.httpContextIntegration();
  items[9] = browserSessionIntegration.browserSessionIntegration();
  return items;
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export function forceLoad() {

}
export { getDefaultIntegrations };
export function init() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const skipBrowserExtensionCheck = obj.skipBrowserExtensionCheck;
  let result = !skipBrowserExtensionCheck;
  if (!skipBrowserExtensionCheck) {
    result = _mod944.checkAndWarnIfIsEmbeddedBrowserExtension();
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
  obj3.stackParser = _mod681.stackParserFromStackParserOptions(defaultStackParser);
  obj3.integrations = _mod681.getIntegrationsToSetup({ integrations: obj.integrations, defaultIntegrations });
  const obj5 = { integrations: obj.integrations, defaultIntegrations };
  const tmp6Result = _mod681;
  obj3.transport = obj.transport || _mod894.makeFetchTransport;
  const tmp8 = obj.transport || _mod894.makeFetchTransport;
  return _mod681.initAndBind(_mod892.BrowserClient, obj3);
}
export function onLoad(fn) {
  fn();
}