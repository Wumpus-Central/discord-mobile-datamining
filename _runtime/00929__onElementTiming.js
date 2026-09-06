// === Module 929: _onElementTiming ===

// Module 929 (_onElementTiming)
import _mod682 from "module_682" /* 682 */;
import extractNetworkProtocol from "extractNetworkProtocol" /* 924 */;
import _slicedToArray from "module_32" /* 32 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
function _onElementTiming(arg0) {
  const entries = arg0.entries;
  let transactionName;
  const activeSpan = transactionName(682).getActiveSpan();
  let rootSpan;
  if (activeSpan) {
    let tmpResult = tmp(682);
    rootSpan = tmpResult.getRootSpan(activeSpan);
  }
  tmpResult = tmp(682);
  if (rootSpan) {
    transactionName = tmpResult.spanToJSON(rootSpan).description;
  } else {
    const currentScope = tmpResult.getCurrentScope();
    transactionName = currentScope.getScopeData().transactionName;
  }
  const item = entries.forEach((identifier) => {
    if (identifier.identifier) {
      ({ name, renderTime, loadTime } = identifier);
      if (loadTime) {
        let tmpResult = tmp(924);
        const items = [tmpResult.msToSec(loadTime), "load-time"];
        let items2 = items;
      } else if (renderTime) {
        tmpResult = tmp(924);
        const items1 = [tmpResult.msToSec(renderTime), "render-time"];
        items2 = items1;
      } else {
        items2 = [tmp(682).timestampInSeconds(), "entry-emission"];
        const tmpResult1 = tmp(682);
      }
      const tmp4 = _slicedToArray(items2, 2);
      const startTime = tmp4[0];
      if ("image-paint" === name) {
        let num4 = renderTime;
        if (renderTime == null) {
          num4 = 0;
        }
        let num5 = loadTime;
        if (loadTime == null) {
          num5 = 0;
        }
        const num3 = extractNetworkProtocol.msToSec(Math.max(0, num4 - num5));
      }
      let obj = {};
      obj[_mod682.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.ui.browser.elementtiming";
      obj[_mod682.SEMANTIC_ATTRIBUTE_SENTRY_OP] = "ui.elementtiming";
      obj[_mod682.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = "component";
      obj["sentry.span_start_time_source"] = tmp4[1];
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
      obj = { name: null, attributes: null, startTime: null, onlyIfParent: true };
      const _HermesInternal2 = HermesInternal;
      obj.name = "element[" + identifier.identifier + "]";
      obj.attributes = obj;
      obj.startTime = startTime;
      _mod682.startSpan(obj, (end) => {
        end.end(first + num3);
      });
    }
  });
}

export { _onElementTiming };
export const startTrackingElementTiming = function startTrackingElementTiming() {
  if (obj.getBrowserPerformanceAPI()) {
    let tmpResult = tmp(682);
    if (tmpResult.browserPerformanceTimeOrigin()) {
      tmpResult = tmp(899);
      let fn = tmpResult.addPerformanceInstrumentationHandler("element", _onElementTiming);
    }
    return fn;
  }
  fn = () => {

  };
};