// === Module 937: _sendStandaloneLcpSpan ===

// Module 937 (_sendStandaloneLcpSpan)
import _mod693 from "module_693" /* 693 */;
import _mod911 from "module_911" /* 911 */;
import extractNetworkProtocol from "extractNetworkProtocol" /* 935 */;

const require = globalThis.__r;
let closure_0, dependencyMap;

function _sendStandaloneLcpSpan(c1, startTime, sentry_pageload_span_id, sentry_report_event) {
  if (_mod911.DEBUG_BUILD) {
    const debug = _mod693.debug;
    const _HermesInternal = HermesInternal;
    debug.log("Sending LCP span (" + c1 + ")");
  }
  const msToSec = extractNetworkProtocol.msToSec;
  extractNetworkProtocol;
  let num;
  const tmpResult6 = _mod693;
  const tmp6 = tmpResult6.browserPerformanceTimeOrigin() || 0;
  if (startTime != null) {
    num = startTime.startTime;
  }
  if (!num) {
    num = 0;
  }
  const msToSecResult = msToSec(tmp6 + num);
  const tmpResult7 = _mod693;
  const currentScope = tmpResult7.getCurrentScope();
  let str3 = "Largest contentful paint";
  const transactionName = currentScope.getScopeData().transactionName;
  if (startTime) {
    const tmpResult8 = _mod693;
    str3 = tmpResult8.htmlTreeAsString(startTime.element);
  }
  const obj = { [_mod693.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.browser.lcp", [_mod693.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "ui.webvital.lcp", [_mod693.SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME]: 0, "sentry.pageload.span_id": sentry_pageload_span_id, "sentry.report_event": sentry_report_event };
  if (startTime) {
    if (startTime.element) {
      const tmpResult9 = _mod693;
      obj["lcp.element"] = tmpResult9.htmlTreeAsString(startTime.element);
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
  const tmpResult10 = extractNetworkProtocol;
  const result = tmpResult10.startStandaloneWebVitalSpan({ name: str3, transaction: transactionName, attributes: obj, startTime: msToSecResult });
  if (result) {
    const obj2 = {};
    obj2[_mod693.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT] = "millisecond";
    obj2[_mod693.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE] = c1;
    result.addEvent("lcp", obj2);
    result.end(msToSecResult);
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export { _sendStandaloneLcpSpan };
export const trackLcpAsStandaloneSpan = function trackLcpAsStandaloneSpan(client) {
  let c1;
  dependencyMap = 0;
  const obj = require("extractNetworkProtocol");
  if (obj.supportsWebVital("largest-contentful-paint")) {
    const tmpResult = require("module_910");
    let closure_2 = tmpResult.addLcpInstrumentationHandler((metric) => {
      const tmp = metric.metric.entries[metric.metric.entries.length - 1];
      if (tmp) {
        const value = iter.value;
        closure_0 = tmp;
      }
    }, true);
    const tmpResult2 = require("extractNetworkProtocol");
    const result = tmpResult2.listenForWebVitalReportEvents(client, (sentry_report_event, sentry_pageload_span_id) => {
      _sendStandaloneLcpSpan(c1, closure_0, sentry_pageload_span_id, sentry_report_event);
      closure_2();
    });
  }
};