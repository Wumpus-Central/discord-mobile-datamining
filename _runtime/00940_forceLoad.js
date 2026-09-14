// === Module 940: forceLoad ===

// Module 940 (forceLoad)
import _mod682 from "module_682" /* 682 */;
import _mod895 from "module_895" /* 895 */;
import _mod897 from "module_897" /* 897 */;
import extractSafariExtensionDetails from "extractSafariExtensionDetails" /* 938 */;
import _wrapTimeFunction from "_wrapTimeFunction" /* 941 */;
import breadcrumbsIntegration from "breadcrumbsIntegration" /* 942 */;
import _getUnhandledRejectionError from "_getUnhandledRejectionError" /* 943 */;
import _mod944 from "module_944" /* 944 */;
import httpContextIntegration from "httpContextIntegration" /* 945 */;
import browserSessionIntegration from "browserSessionIntegration" /* 946 */;
import _mod947 from "module_947" /* 947 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export function forceLoad() {

}
export const getDefaultIntegrations = function getDefaultIntegrations(arg0) {
  const items = [_mod682.inboundFiltersIntegration(), , , , , , , , ];
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
    const items = [_mod682.inboundFiltersIntegration(), , , , , , , , ];
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