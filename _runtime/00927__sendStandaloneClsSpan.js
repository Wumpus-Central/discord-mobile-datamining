// _runtime/00927__sendStandaloneClsSpan.js
import _mod682 from "metro/00682__.js";

require = arg1;
let dependencyMap = arg6;
function _sendStandaloneClsSpan(c1, startTime, sentry_pageload_span_id, sentry_report_event) {
  if (attributes(900).DEBUG_BUILD) {
    const debug = tmp(682).debug;
    const _HermesInternal = HermesInternal;
    debug.log("Sending CLS span (" + c1 + ")");
  }
  if (startTime) {
    tmp(924);
    const tmpResult = tmp(682);
    let msToSecResult = tmpResult.msToSec((tmpResult.browserPerformanceTimeOrigin() || 0) + startTime.startTime);
    const tmp6 = tmpResult.browserPerformanceTimeOrigin() || 0;
  } else {
    msToSecResult = tmp(682).timestampInSeconds();
    const tmpResult1 = tmp(682);
  }
  const currentScope = attributes(682).getCurrentScope();
  let str3 = "Layout shift";
  if (startTime) {
    const first = startTime.sources[0];
    let node;
    if (first != null) {
      node = first.node;
    }
    str3 = tmp(682).htmlTreeAsString(node);
    const tmpResult3 = tmp(682);
  }
  attributes = { [tmp(682).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.browser.cls", [tmp(682).SEMANTIC_ATTRIBUTE_SENTRY_OP]: "ui.webvital.cls", [tmp(682).SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME]: 0, sentry.pageload.span_id, sentry.report_event };
  let sources;
  if (startTime != null) {
    sources = startTime.sources;
  }
  if (sources) {
    const sources1 = startTime.sources;
    const item = sources1.forEach((node, index) => {
      const combined = "cls.source." + index + 1;
      const obj = _mod682;
      obj[combined] = obj.htmlTreeAsString(node.node);
    });
  }
  const tmpResult2 = attributes(682);
  const result = attributes(924).startStandaloneWebVitalSpan({ name: str3, transaction: currentScope.getScopeData().transactionName, attributes, startTime: msToSecResult });
  if (result) {
    attributes = {};
    attributes[tmp(682).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT] = "";
    attributes[tmp(682).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE] = c1;
    result.addEvent("cls", attributes);
    result.end(msToSecResult);
  }
  const tmpResult4 = attributes(924);
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export { _sendStandaloneClsSpan };
export const trackClsAsStandaloneSpan = function trackClsAsStandaloneSpan(client) {
  dependencyMap = 0;
  if (obj.supportsWebVital("layout-shift")) {
    let tmpResult = require("metro/00899__.js");
    closure_2 = tmpResult.addClsInstrumentationHandler((metric) => {
      const tmp = metric.metric.entries[metric.metric.entries.length - 1];
      if (tmp) {
        value = iter.value;
        closure_0 = tmp;
      }
    }, true);
    tmpResult = require("extractNetworkProtocol");
    const result = tmpResult.listenForWebVitalReportEvents(client, (sentry_report_event, sentry_pageload_span_id) => {
      _sendStandaloneClsSpan(c1, closure_0, sentry_pageload_span_id, sentry_report_event);
      closure_2();
    });
  }
  obj = require("extractNetworkProtocol");
};