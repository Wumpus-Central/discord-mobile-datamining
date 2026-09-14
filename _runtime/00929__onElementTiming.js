// _runtime/00929__onElementTiming.js
import _mod682 from "metro/00682__.js";
import _mod899 from "metro/00899__.js";
import extractNetworkProtocol from "00924_extractNetworkProtocol.js";
import _slicedToArray from "metro/00032__.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
function _onElementTiming(arg0) {
  const entries = arg0.entries;
  let transactionName;
  const activeSpan = transactionName(682).getActiveSpan();
  let rootSpan;
  if (activeSpan) {
    rootSpan = tmp(682).getRootSpan(activeSpan);
    let tmpResult = tmp(682);
  }
  const tmpResult2 = transactionName(682);
  if (rootSpan) {
    transactionName = tmpResult2.spanToJSON(rootSpan).description;
  } else {
    const currentScope = tmpResult2.getCurrentScope();
    transactionName = currentScope.getScopeData().transactionName;
  }
  const item = entries.forEach((identifier) => {
    if (identifier.identifier) {
      ({ name, renderTime, loadTime } = identifier);
      if (loadTime) {
        const items = [extractNetworkProtocol.msToSec(loadTime), "load-time"];
        let items2 = items;
        const tmpResult = extractNetworkProtocol;
      } else if (renderTime) {
        const items1 = [extractNetworkProtocol.msToSec(renderTime), "render-time"];
        items2 = items1;
        const tmpResult3 = extractNetworkProtocol;
      } else {
        items2 = [_mod682.timestampInSeconds(), "entry-emission"];
        const tmpResult4 = _mod682;
      }
      [startTime, obj["sentry.span_start_time_source"]] = items2;
      if ("image-paint" === name) {
        let num4 = renderTime;
        if (renderTime == null) {
          num4 = 0;
        }
        let num5 = loadTime;
        if (loadTime == null) {
          num5 = 0;
        }
        extractNetworkProtocol.msToSec(Math.max(0, num4 - num5));
      }
      const obj = {};
      obj[_mod682.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.ui.browser.elementtiming";
      obj[_mod682.SEMANTIC_ATTRIBUTE_SENTRY_OP] = "ui.elementtiming";
      obj[_mod682.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = "component";
      obj["sentry.transaction_name"] = transactionName;
      ({ id: obj5["element.id"], element } = identifier);
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
      if (identifier.naturalWidth) {
        if (identifier.naturalHeight) {
          const _HermesInternal = HermesInternal;
          combined = "" + identifier.naturalWidth + "x" + identifier.naturalHeight;
        }
      }
      obj["element.size"] = combined;
      obj["element.render_time"] = renderTime;
      obj["element.load_time"] = loadTime;
      obj["element.url"] = identifier.url || undefined;
      obj["element.identifier"] = identifier.identifier;
      obj["element.paint_type"] = name;
      const obj2 = { name: null, attributes: null, startTime: null, onlyIfParent: true };
      const _HermesInternal2 = HermesInternal;
      obj2.name = "element[" + identifier.identifier + "]";
      obj2.attributes = obj;
      obj2.startTime = startTime;
      _mod682.startSpan(obj2, (end) => {
        end.end(first + num3);
      });
    }
  });
  let obj = transactionName(682);
}

export { _onElementTiming };
export const startTrackingElementTiming = function startTrackingElementTiming() {
  if (obj.getBrowserPerformanceAPI()) {
    if (tmpResult.browserPerformanceTimeOrigin()) {
      let fn = _mod899.addPerformanceInstrumentationHandler("element", _onElementTiming);
      const tmpResult2 = _mod899;
    }
    return fn;
  }
  fn = () => {};
  obj = extractNetworkProtocol;
};
