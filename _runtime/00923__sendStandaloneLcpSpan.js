// === Module 923: _sendStandaloneLcpSpan ===

// Module 923 (_sendStandaloneLcpSpan)
import _mod681 from "module_681" /* 681 */;
import _mod897 from "module_897" /* 897 */;
import extractNetworkProtocol from "extractNetworkProtocol" /* 921 */;

const require = globalThis.__r;

require = arg1;
let dependencyMap = arg6;
function _sendStandaloneLcpSpan(c1, startTime, sentry_pageload_span_id, sentry_report_event) {
  if (_mod897.DEBUG_BUILD) {
    const debug = _mod681.debug;
    const _HermesInternal = HermesInternal;
    debug.log("Sending LCP span (" + c1 + ")");
  }
  const tmpResult = extractNetworkProtocol;
  const tmpResult6 = _mod681;
  let num;
  if (startTime != null) {
    num = startTime.startTime;
  }
  if (!num) {
    num = 0;
  }
  const msToSecResult = tmpResult.msToSec((_mod681.browserPerformanceTimeOrigin() || 0) + num);
  const tmp5 = _mod681.browserPerformanceTimeOrigin() || 0;
  const currentScope = _mod681.getCurrentScope();
  let str3 = "Largest contentful paint";
  if (startTime) {
    str3 = _mod681.htmlTreeAsString(startTime.element);
    const tmpResult8 = _mod681;
  }
  const obj = { [_mod681.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.browser.lcp", [_mod681.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "ui.webvital.lcp", [_mod681.SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME]: 0, sentry.pageload.span_id, sentry.report_event };
  if (startTime) {
    if (startTime.element) {
      obj["lcp.element"] = _mod681.htmlTreeAsString(startTime.element);
      const tmpResult9 = _mod681;
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
  const tmpResult7 = _mod681;
  const result = extractNetworkProtocol.startStandaloneWebVitalSpan({ name: str3, transaction: currentScope.getScopeData().transactionName, attributes: obj, startTime: msToSecResult });
  if (result) {
    const obj2 = {};
    obj2[_mod681.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT] = "millisecond";
    obj2[_mod681.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE] = c1;
    result.addEvent("lcp", obj2);
    result.end(msToSecResult);
  }
  const tmpResult10 = extractNetworkProtocol;
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export { _sendStandaloneLcpSpan };
export function trackLcpAsStandaloneSpan(client) {
  dependencyMap = 0;
  if (obj.supportsWebVital("largest-contentful-paint")) {
    closure_2 = require("module_896").addLcpInstrumentationHandler((metric) => {
      const tmp = metric.metric.entries[metric.metric.entries.length - 1];
      if (tmp) {
        value = iter.value;
        closure_0 = tmp;
      }
    }, true);
    const tmpResult = require("module_896");
    const result = require("extractNetworkProtocol").listenForWebVitalReportEvents(client, (sentry_report_event, sentry_pageload_span_id) => {
      _sendStandaloneLcpSpan(c1, closure_0, sentry_pageload_span_id, sentry_report_event);
      closure_2();
    });
    const tmpResult2 = require("extractNetworkProtocol");
  }
  obj = require("extractNetworkProtocol");
}