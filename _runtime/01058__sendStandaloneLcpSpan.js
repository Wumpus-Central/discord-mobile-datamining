// === Module 1058: _sendStandaloneLcpSpan ===

// Module 1058 (_sendStandaloneLcpSpan)
import registerSpanErrorInstrumentation from "registerSpanErrorInstrumentation" /* 814 */;
import __SENTRY_DEBUG__ from "__SENTRY_DEBUG__" /* 1032 */;
import extractNetworkProtocol from "extractNetworkProtocol" /* 1056 */;

require = arg1;
let dependencyMap = arg6;
function _sendStandaloneLcpSpan(arg0, startTime, sentry_pageload_span_id, sentry_report_event) {
  if (__SENTRY_DEBUG__.DEBUG_BUILD) {
    const debug = tmp(814).debug;
    const _HermesInternal = HermesInternal;
    debug.log("Sending LCP span (" + arg0 + ")");
  }
  let tmpResult = tmp(1056);
  tmpResult = tmp(814);
  let num;
  if (startTime != null) {
    num = startTime.startTime;
  }
  if (!num) {
    num = 0;
  }
  const msToSecResult = tmpResult.msToSec((tmpResult.browserPerformanceTimeOrigin() || 0) + num);
  const tmp5 = tmpResult.browserPerformanceTimeOrigin() || 0;
  const currentScope = registerSpanErrorInstrumentation.getCurrentScope();
  let str3 = "Largest contentful paint";
  if (startTime) {
    str3 = tmp(814).htmlTreeAsString(startTime.element);
    const tmpResult2 = tmp(814);
  }
  let obj = { [tmp(814).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.browser.lcp", [tmp(814).SEMANTIC_ATTRIBUTE_SENTRY_OP]: "ui.webvital.lcp", [tmp(814).SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME]: 0, sentry.pageload.span_id, sentry.report_event };
  if (startTime) {
    if (startTime.element) {
      obj["lcp.element"] = tmp(814).htmlTreeAsString(startTime.element);
      const tmpResult3 = tmp(814);
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
  const tmpResult1 = registerSpanErrorInstrumentation;
  const result = extractNetworkProtocol.startStandaloneWebVitalSpan({ name: str3, transaction: currentScope.getScopeData().transactionName, attributes: obj, startTime: msToSecResult });
  if (result) {
    obj = {};
    obj[tmp(814).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT] = "millisecond";
    obj[tmp(814).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE] = arg0;
    result.addEvent("lcp", obj);
    result.end(msToSecResult);
  }
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5._sendStandaloneLcpSpan = _sendStandaloneLcpSpan;
arg5.trackLcpAsStandaloneSpan = function trackLcpAsStandaloneSpan(client) {
  dependencyMap = 0;
  if (obj.supportsWebVital("largest-contentful-paint")) {
    let tmpResult = tmp(1031);
    closure_2 = tmpResult.addLcpInstrumentationHandler((metric) => {
      const tmp = metric.metric.entries[metric.metric.entries.length - 1];
      if (tmp) {
        const value = iter.value;
        closure_0 = tmp;
      }
    }, true);
    tmpResult = tmp(1056);
    const result = tmpResult.listenForWebVitalReportEvents(client, (arg0, arg1) => {
      callback(c1, closure_0, arg1, arg0);
      callback();
    });
  }
};