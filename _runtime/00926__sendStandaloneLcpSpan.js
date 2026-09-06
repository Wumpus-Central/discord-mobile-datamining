// _runtime/00926__sendStandaloneLcpSpan.js
import _mod682 from "metro/00682__.js";
import _mod900 from "metro/00900__.js";
import extractNetworkProtocol from "00924_extractNetworkProtocol.js";

require = arg1;
let dependencyMap = arg6;
function _sendStandaloneLcpSpan(c1, startTime, sentry_pageload_span_id, sentry_report_event) {
  if (_mod900.DEBUG_BUILD) {
    const debug = _mod682.debug;
    const _HermesInternal = HermesInternal;
    debug.log("Sending LCP span (" + c1 + ")");
  }
  const tmpResult = _mod682;
  let num;
  if (startTime != null) {
    num = startTime.startTime;
  }
  if (!num) {
    num = 0;
  }
  const msToSecResult = tmpResult.msToSec((tmpResult.browserPerformanceTimeOrigin() || 0) + num);
  const tmp5 = tmpResult.browserPerformanceTimeOrigin() || 0;
  const currentScope = _mod682.getCurrentScope();
  let str3 = "Largest contentful paint";
  if (startTime) {
    str3 = _mod682.htmlTreeAsString(startTime.element);
    const tmpResult2 = _mod682;
  }
  let obj = { [_mod682.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.browser.lcp", [_mod682.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "ui.webvital.lcp", [_mod682.SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME]: 0, sentry.pageload.span_id, sentry.report_event };
  if (startTime) {
    if (startTime.element) {
      obj["lcp.element"] = _mod682.htmlTreeAsString(startTime.element);
      const tmpResult3 = _mod682;
    }
    if (startTime.id) {
      obj["lcp.id"] = startTime.id;
    }
    if (startTime.url) {
      obj["lcp.url"] = startTime.url;
    }
    if (null != startTime.loadTime) {
      obj["lcp.loadTime"] = startTime.loadTime;
    }
    if (null != startTime.renderTime) {
      obj["lcp.renderTime"] = startTime.renderTime;
    }
    if (null != startTime.size) {
      obj["lcp.size"] = startTime.size;
    }
  }
  const tmpResult1 = _mod682;
  const result = extractNetworkProtocol.startStandaloneWebVitalSpan({ name: str3, transaction: currentScope.getScopeData().transactionName, attributes: obj, startTime: msToSecResult });
  if (result) {
    obj = {};
    obj[_mod682.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT] = "millisecond";
    obj[_mod682.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE] = c1;
    result.addEvent("lcp", obj);
    result.end(msToSecResult);
  }
  const tmpResult4 = extractNetworkProtocol;
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export { _sendStandaloneLcpSpan };
export const trackLcpAsStandaloneSpan = function trackLcpAsStandaloneSpan(client) {
  dependencyMap = 0;
  if (obj.supportsWebVital("largest-contentful-paint")) {
    let tmpResult = require("metro/00899__.js");
    closure_2 = tmpResult.addLcpInstrumentationHandler((metric) => {
      const tmp = metric.metric.entries[metric.metric.entries.length - 1];
      if (tmp) {
        value = iter.value;
        closure_0 = tmp;
      }
    }, true);
    tmpResult = require("extractNetworkProtocol");
    const result = tmpResult.listenForWebVitalReportEvents(client, (sentry_report_event, sentry_pageload_span_id) => {
      _sendStandaloneLcpSpan(c1, closure_0, sentry_pageload_span_id, sentry_report_event);
      closure_2();
    });
  }
  obj = require("extractNetworkProtocol");
};