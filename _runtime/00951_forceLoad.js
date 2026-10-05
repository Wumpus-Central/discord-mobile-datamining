// === Module 951: forceLoad ===

// Module 951 (forceLoad)
import _mod693 from "module_693" /* 693 */;
import BrowserClient from "BrowserClient" /* 906 */;
import _mod908 from "module_908" /* 908 */;
import chromeStackLineParser from "chromeStackLineParser" /* 949 */;
import browserApiErrorsIntegration from "browserApiErrorsIntegration" /* 952 */;
import breadcrumbsIntegration from "breadcrumbsIntegration" /* 953 */;
import _eventFromRejectionWithPrimitive from "_eventFromRejectionWithPrimitive" /* 954 */;
import _mod955 from "module_955" /* 955 */;
import httpContextIntegration from "httpContextIntegration" /* 956 */;
import browserSessionIntegration from "browserSessionIntegration" /* 957 */;
import _mod958 from "module_958" /* 958 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export function forceLoad() {

}
export const getDefaultIntegrations = function getDefaultIntegrations(arg0) {
  const items = [, , , , , , , , ];
  const obj = _mod693;
  items[0] = obj.inboundFiltersIntegration();
  const obj2 = _mod693;
  items[1] = obj2.functionToStringIntegration();
  const obj3 = browserApiErrorsIntegration;
  items[2] = obj3.browserApiErrorsIntegration();
  const obj4 = breadcrumbsIntegration;
  items[3] = obj4.breadcrumbsIntegration();
  const obj5 = _eventFromRejectionWithPrimitive;
  items[4] = obj5.globalHandlersIntegration();
  const obj6 = _mod955;
  items[5] = obj6.linkedErrorsIntegration();
  const obj7 = _mod693;
  items[6] = obj7.dedupeIntegration();
  const obj8 = httpContextIntegration;
  items[7] = obj8.httpContextIntegration();
  const obj9 = browserSessionIntegration;
  items[8] = obj9.browserSessionIntegration();
  return items;
};
export const init = function init() {
  let defaultIntegrations;
  let defaultStackParser;
  let obj13;
  let stackParserFromStackParserOptions;
  let tmp7Result;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let result = !obj.skipBrowserExtensionCheck;
  if (result) {
    const obj2 = _mod958;
    result = obj2.checkAndWarnIfIsEmbeddedBrowserExtension();
  }
  if (null == obj.defaultIntegrations) {
    const items = [, , , , , , , , ];
    const obj3 = _mod693;
    items[0] = obj3.inboundFiltersIntegration();
    const obj4 = _mod693;
    items[1] = obj4.functionToStringIntegration();
    const obj5 = browserApiErrorsIntegration;
    items[2] = obj5.browserApiErrorsIntegration();
    const obj6 = breadcrumbsIntegration;
    items[3] = obj6.breadcrumbsIntegration();
    const obj7 = _eventFromRejectionWithPrimitive;
    items[4] = obj7.globalHandlersIntegration();
    const obj8 = _mod955;
    items[5] = obj8.linkedErrorsIntegration();
    const obj9 = _mod693;
    items[6] = obj9.dedupeIntegration();
    const obj10 = httpContextIntegration;
    items[7] = obj10.httpContextIntegration();
    const obj11 = browserSessionIntegration;
    items[8] = obj11.browserSessionIntegration();
    defaultIntegrations = items;
  } else {
    defaultIntegrations = obj.defaultIntegrations;
  }
  const obj12 = { enabled: !result && obj.enabled, stackParser: stackParserFromStackParserOptions(defaultStackParser), integrations: tmp7Result.getIntegrationsToSetup(obj13), transport: obj.transport || _mod908.makeFetchTransport };
  const merged = Object.assign(obj);
  defaultStackParser = obj.stackParser;
  stackParserFromStackParserOptions = _mod693.stackParserFromStackParserOptions;
  _mod693;
  if (!defaultStackParser) {
    defaultStackParser = chromeStackLineParser.defaultStackParser;
  }
  obj13 = { integrations: obj.integrations, defaultIntegrations };
  tmp7Result = _mod693;
  obj.transport || _mod908.makeFetchTransport;
  const tmp7Result2 = _mod693;
  return tmp7Result2.initAndBind(BrowserClient.BrowserClient, obj12);
};
export const onLoad = function onLoad(fn) {
  fn();
};