// _runtime/01061__onElementTiming.js
import closure_2 from "metro/00032__slicedToArray.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
function _onElementTiming(arg0) {
  const entries = arg0.entries;
  let transactionName;
  const activeSpan = transactionName(814).getActiveSpan();
  let rootSpan;
  if (activeSpan) {
    let tmpResult = tmp(814);
    rootSpan = tmpResult.getRootSpan(activeSpan);
  }
  tmpResult = tmp(814);
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
        let tmpResult = tmp(tmp2[1]);
        const items = [tmpResult.msToSec(loadTime), "load-time"];
        let items2 = items;
      } else if (renderTime) {
        tmpResult = tmp(tmp2[1]);
        const items1 = [tmpResult.msToSec(renderTime), "render-time"];
        items2 = items1;
      } else {
        items2 = [tmp(tmp2[2]).timestampInSeconds(), "entry-emission"];
        const tmpResult1 = tmp(tmp2[2]);
      }
      const tmp4 = closure_1_2(items2, 2);
      const first = tmp4[0];
      let num3 = 0;
      if ("image-paint" === name) {
        let num4 = renderTime;
        if (renderTime == null) {
          num4 = 0;
        }
        let num5 = loadTime;
        if (loadTime == null) {
          num5 = 0;
        }
        num3 = transactionName(closure_1_1[1]).msToSec(Math.max(0, num4 - num5));
        const obj4 = transactionName(closure_1_1[1]);
      }
      let obj = {};
      obj[transactionName(closure_1_1[2]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.ui.browser.elementtiming";
      obj[transactionName(closure_1_1[2]).SEMANTIC_ATTRIBUTE_SENTRY_OP] = "ui.elementtiming";
      obj[transactionName(closure_1_1[2]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = "component";
      obj["sentry.span_start_time_source"] = tmp4[1];
      obj["sentry.transaction_name"] = first;
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
      obj[0] = "element[" + identifier.identifier + "]";
      obj[1] = obj;
      obj[2] = first;
      transactionName(closure_1_1[2]).startSpan(obj, (end) => {
        end.end(first + num3);
      });
      const obj6 = transactionName(closure_1_1[2]);
    }
  });
}

export { _onElementTiming };
export const startTrackingElementTiming = function startTrackingElementTiming() {
  if (obj.getBrowserPerformanceAPI()) {
    let tmpResult = tmp(814);
    if (tmpResult.browserPerformanceTimeOrigin()) {
      tmpResult = tmp(1031);
      let fn = tmpResult.addPerformanceInstrumentationHandler("element", _onElementTiming);
    }
    return fn;
  }
  fn = () => {};
};
