// _runtime/01064__onElementTiming.js
import registerSpanErrorInstrumentation from "00817_registerSpanErrorInstrumentation.js";
import triggerHandlers from "01034_triggerHandlers.js";
import extractNetworkProtocol from "01059_extractNetworkProtocol.js";
import _slicedToArray from "metro/00032__slicedToArray.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
function _onElementTiming(arg0) {
  const entries = arg0.entries;
  let transactionName;
  const activeSpan = transactionName(817).getActiveSpan();
  let rootSpan;
  if (activeSpan) {
    let tmpResult = tmp(817);
    rootSpan = tmpResult.getRootSpan(activeSpan);
  }
  tmpResult = tmp(817);
  if (rootSpan) {
    transactionName = tmpResult.spanToJSON(rootSpan).description;
  } else {
    const currentScope = tmpResult.getCurrentScope();
    transactionName = currentScope.getScopeData().transactionName;
  }
  const item = entries.forEach((item, index) => {
    if (item.identifier) {
      ({ name, renderTime, loadTime } = item);
      if (loadTime) {
        let tmpResult = transactionName(dependencyMap[1]);
        const items = [tmpResult.msToSec(loadTime), "load-time"];
        let items2 = items;
      } else if (renderTime) {
        tmpResult = transactionName(dependencyMap[1]);
        const items1 = [tmpResult.msToSec(renderTime), "render-time"];
        items2 = items1;
      } else {
        items2 = [transactionName(dependencyMap[2]).timestampInSeconds(), "entry-emission"];
        const tmpResult1 = transactionName(dependencyMap[2]);
      }
      const tmp4 = _slicedToArray(items2, 2);
      const first = tmp4[0];
      if ("image-paint" === name) {
        let num4 = renderTime;
        if (renderTime == null) {
          num4 = 0;
        }
        let num5 = loadTime;
        if (loadTime == null) {
          num5 = 0;
        }
        transactionName(dependencyMap[1]).msToSec(Math.max(0, num4 - num5));
        const obj4 = transactionName(dependencyMap[1]);
      }
      let obj = {};
      obj[transactionName(dependencyMap[2]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.ui.browser.elementtiming";
      obj[transactionName(dependencyMap[2]).SEMANTIC_ATTRIBUTE_SENTRY_OP] = "ui.elementtiming";
      obj[transactionName(dependencyMap[2]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = "component";
      obj["sentry.span_start_time_source"] = tmp4[1];
      obj["sentry.transaction_name"] = first;
      ({ id: obj5["element.id"], element } = item);
      let str8;
      if (element != null) {
        if (element.tagName != null) {
          str8 = str9.toLowerCase();
        }
      }
      if (!str8) {
        str8 = "unknown";
      }
      obj["element.type"] = str8;
      let combined;
      if (item.naturalWidth) {
        if (item.naturalHeight) {
          const _HermesInternal = HermesInternal;
          combined = "" + item.naturalWidth + "x" + item.naturalHeight;
        }
      }
      obj["element.size"] = combined;
      obj["element.render_time"] = renderTime;
      obj["element.load_time"] = loadTime;
      obj["element.url"] = item.url || undefined;
      obj["element.identifier"] = item.identifier;
      obj["element.paint_type"] = name;
      obj = { name: null, attributes: null, startTime: null, onlyIfParent: true };
      const _HermesInternal2 = HermesInternal;
      obj[0] = "element[" + item.identifier + "]";
      obj[1] = obj;
      obj[2] = first;
      transactionName(dependencyMap[2]).startSpan(obj, (end) => {
        end.end(first + num3);
      });
      const obj6 = transactionName(dependencyMap[2]);
    }
  });
  let obj = transactionName(817);
}

export { _onElementTiming };
export const startTrackingElementTiming = function startTrackingElementTiming() {
  if (obj.getBrowserPerformanceAPI()) {
    let tmpResult = registerSpanErrorInstrumentation;
    if (tmpResult.browserPerformanceTimeOrigin()) {
      tmpResult = triggerHandlers;
      let fn = tmpResult.addPerformanceInstrumentationHandler("element", _onElementTiming);
    }
    return fn;
  }
  fn = () => {

  };
  obj = extractNetworkProtocol;
};