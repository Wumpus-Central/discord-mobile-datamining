// === Module 927: _sendStandaloneClsSpan ===

// Module 927 (_sendStandaloneClsSpan)
const require = arg1;
let dependencyMap = arg6;
function _sendStandaloneClsSpan(arg0, startTime, sentry_pageload_span_id, sentry_report_event) {
  if (obj(900).DEBUG_BUILD) {
    const debug = tmp(682).debug;
    const _HermesInternal = HermesInternal;
    debug.log("Sending CLS span (" + arg0 + ")");
  }
  if (startTime) {
    let tmpResult = tmp(924);
    tmpResult = tmp(682);
    let msToSecResult = tmpResult.msToSec((tmpResult.browserPerformanceTimeOrigin() || 0) + startTime.startTime);
    const tmp6 = tmpResult.browserPerformanceTimeOrigin() || 0;
  } else {
    msToSecResult = tmp(682).timestampInSeconds();
    const tmpResult1 = tmp(682);
  }
  const currentScope = obj(682).getCurrentScope();
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
  obj = { [tmp(682).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.browser.cls", [tmp(682).SEMANTIC_ATTRIBUTE_SENTRY_OP]: "ui.webvital.cls", [tmp(682).SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME]: 0, sentry.pageload.span_id, sentry.report_event };
  let sources;
  if (startTime != null) {
    sources = startTime.sources;
  }
  if (sources) {
    const sources1 = startTime.sources;
    const item = sources1.forEach((node) => {
      const combined = "cls.source." + arg1 + 1;
      obj = obj(closure_1_1[3]);
      obj[combined] = obj.htmlTreeAsString(node.node);
    });
  }
  const tmpResult2 = obj(682);
  const result = obj(924).startStandaloneWebVitalSpan({ name: str3, transaction: currentScope.getScopeData().transactionName, attributes: obj, startTime: msToSecResult });
  if (result) {
    obj = {};
    obj[tmp(682).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT] = "";
    obj[tmp(682).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE] = arg0;
    result.addEvent("cls", obj);
    result.end(msToSecResult);
  }
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5._sendStandaloneClsSpan = _sendStandaloneClsSpan;
arg5.trackClsAsStandaloneSpan = function trackClsAsStandaloneSpan(client) {
  dependencyMap = 0;
  if (obj.supportsWebVital("layout-shift")) {
    let tmpResult = tmp(899);
    closure_2 = tmpResult.addClsInstrumentationHandler((metric) => {
      const tmp = metric.metric.entries[metric.metric.entries.length - 1];
      if (tmp) {
        const value = iter.value;
        closure_0 = tmp;
      }
    }, true);
    tmpResult = tmp(924);
    const result = tmpResult.listenForWebVitalReportEvents(client, (arg0, arg1) => {
      callback(c1, closure_0, arg1, arg0);
      callback();
    });
  }
};