// _runtime/01059__sendStandaloneClsSpan.js
const require = arg1;
let dependencyMap = arg6;
function _sendStandaloneClsSpan(arg0, startTime, sentry_pageload_span_id, sentry_report_event) {
  if (obj(1032).DEBUG_BUILD) {
    const debug = tmp(814).debug;
    const _HermesInternal = HermesInternal;
    debug.log("Sending CLS span (" + arg0 + ")");
  }
  if (startTime) {
    let tmpResult = tmp(1056);
    tmpResult = tmp(814);
    let msToSecResult = tmpResult.msToSec((tmpResult.browserPerformanceTimeOrigin() || 0) + startTime.startTime);
    const tmp6 = tmpResult.browserPerformanceTimeOrigin() || 0;
  } else {
    msToSecResult = tmp(814).timestampInSeconds();
    const tmpResult1 = tmp(814);
  }
  const currentScope = obj(814).getCurrentScope();
  let str3 = "Layout shift";
  if (startTime) {
    const first = startTime.sources[0];
    let node;
    if (first != null) {
      node = first.node;
    }
    str3 = tmp(814).htmlTreeAsString(node);
    const tmpResult3 = tmp(814);
  }
  obj = { [tmp(814).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.browser.cls", [tmp(814).SEMANTIC_ATTRIBUTE_SENTRY_OP]: "ui.webvital.cls", [tmp(814).SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME]: 0, sentry.pageload.span_id, sentry.report_event };
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
  const tmpResult2 = obj(814);
  const result = obj(1056).startStandaloneWebVitalSpan({ name: str3, transaction: currentScope.getScopeData().transactionName, attributes: obj, startTime: msToSecResult });
  if (result) {
    obj = {};
    obj[tmp(814).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT] = "";
    obj[tmp(814).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE] = arg0;
    result.addEvent("cls", obj);
    result.end(msToSecResult);
  }
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5._sendStandaloneClsSpan = _sendStandaloneClsSpan;
arg5.trackClsAsStandaloneSpan = function trackClsAsStandaloneSpan(client) {
  dependencyMap = 0;
  if (obj.supportsWebVital("layout-shift")) {
    let tmpResult = tmp(1031);
    closure_2 = tmpResult.addClsInstrumentationHandler((metric) => {
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