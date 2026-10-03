// === Module 951: forceLoad ===

// Module 951 (forceLoad)
import _mod693 from "module_693" /* 693 */;
import _mod906 from "module_906" /* 906 */;
import _mod908 from "module_908" /* 908 */;
import extractSafariExtensionDetails from "extractSafariExtensionDetails" /* 949 */;
import _wrapTimeFunction from "_wrapTimeFunction" /* 952 */;
import breadcrumbsIntegration from "breadcrumbsIntegration" /* 953 */;
import _getUnhandledRejectionError from "_getUnhandledRejectionError" /* 954 */;
import _mod955 from "module_955" /* 955 */;
import httpContextIntegration from "httpContextIntegration" /* 956 */;
import browserSessionIntegration from "browserSessionIntegration" /* 957 */;
import _mod958 from "module_958" /* 958 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export function forceLoad() {

}
export const getDefaultIntegrations = function getDefaultIntegrations(arg0) {
  const items = [_mod693.inboundFiltersIntegration(), , , , , , , , ];
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
    const items = [_mod693.inboundFiltersIntegration(), , , , , , , , ];
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