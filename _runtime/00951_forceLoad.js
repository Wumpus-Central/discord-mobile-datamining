// _runtime/00951_forceLoad.js
import _mod693 from "metro/00693__.js";
import BrowserClient from "00906_BrowserClient.js";
import _mod908 from "metro/00908__.js";
import chromeStackLineParser from "00949_chromeStackLineParser.js";
import browserApiErrorsIntegration from "00952_browserApiErrorsIntegration.js";
import breadcrumbsIntegration from "00953_breadcrumbsIntegration.js";
import _eventFromRejectionWithPrimitive from "00954__eventFromRejectionWithPrimitive.js";
import _mod955 from "metro/00955__.js";
import httpContextIntegration from "00956_httpContextIntegration.js";
import browserSessionIntegration from "00957_browserSessionIntegration.js";
import _mod958 from "metro/00958__.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export function forceLoad() {}
export const getDefaultIntegrations = function getDefaultIntegrations(arg0) {
  const items = [, , , , , , , ,];
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
    const items = [, , , , , , , ,];
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
  const obj12 = {
    enabled: !result && obj.enabled,
    stackParser: stackParserFromStackParserOptions(defaultStackParser),
    integrations: tmp7Result.getIntegrationsToSetup(obj13),
    transport: obj.transport || _mod908.makeFetchTransport,
  };
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
