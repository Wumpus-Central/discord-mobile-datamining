// _runtime/00737_logSpanEnd.js
import TRACE_FLAG_NONE from "00695_TRACE_FLAG_NONE.js";
import _mod699 from "metro/00699__.js";
import CONSOLE_LEVELS from "00700_CONSOLE_LEVELS.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const logSpanEnd = function logSpanEnd(spanContext) {
  if (_mod699.DEBUG_BUILD) {
    const tmpResult = TRACE_FLAG_NONE;
    const spanToJSONResult = tmpResult.spanToJSON(spanContext);
    const description = spanToJSONResult.description;
    let str = "< unknown name >";
    if (undefined !== description) {
      str = description;
    }
    const op = spanToJSONResult.op;
    let str2 = "< unknown op >";
    if (undefined !== op) {
      str2 = op;
    }
    const spanId = spanContext.spanContext().spanId;
    let str3 = "";
    const tmpResult2 = TRACE_FLAG_NONE;
    if (tmpResult2.getRootSpan(spanContext) === spanContext) {
      str3 = "root ";
    }
    const _HermesInternal = HermesInternal;
    const combined = '[Tracing] Finishing "' + str2 + '" ' + str3 + 'span "' + str + '" with ID ' + spanId;
    const debug = CONSOLE_LEVELS.debug;
    debug.log(combined);
  }
};
export const logSpanStart = function logSpanStart(spanContext) {
  let description2;
  let op2;
  if (_mod699.DEBUG_BUILD) {
    const tmpResult = TRACE_FLAG_NONE;
    const spanToJSONResult = tmpResult.spanToJSON(spanContext);
    const description = spanToJSONResult.description;
    let str = "< unknown name >";
    if (undefined !== description) {
      str = description;
    }
    const op = spanToJSONResult.op;
    let str2 = "< unknown op >";
    if (undefined !== op) {
      str2 = op;
    }
    const parent_span_id = spanToJSONResult.parent_span_id;
    const spanId = spanContext.spanContext().spanId;
    const tmpResult4 = TRACE_FLAG_NONE;
    const spanIsSampledResult = tmpResult4.spanIsSampled(spanContext);
    const tmpResult5 = TRACE_FLAG_NONE;
    const rootSpan = tmpResult5.getRootSpan(spanContext);
    let str3 = "unsampled";
    if (spanIsSampledResult) {
      str3 = "sampled";
    }
    let str5 = "";
    if (rootSpan === spanContext) {
      str5 = "root ";
    }
    const _HermesInternal = HermesInternal;
    const _HermesInternal2 = HermesInternal;
    const combined = "[Tracing] Starting " + str3 + " " + str5 + "span";
    const items = ["op: " + str2, ,];
    const _HermesInternal3 = HermesInternal;
    items[1] = "name: " + str;
    const _HermesInternal4 = HermesInternal;
    items[2] = "ID: " + spanId;
    if (parent_span_id) {
      const _HermesInternal5 = HermesInternal;
      items.push("parent ID: " + parent_span_id);
    }
    if (rootSpan !== spanContext) {
      const tmpResult6 = TRACE_FLAG_NONE;
      ({ op: op2, description: description2 } = tmpResult6.spanToJSON(rootSpan));
      const _HermesInternal6 = HermesInternal;
      tmpResult6.spanToJSON(rootSpan);
      items.push("root ID: " + rootSpan.spanContext().spanId);
      if (op2) {
        const _HermesInternal7 = HermesInternal;
        items.push("root op: " + op2);
      }
      if (description2) {
        const _HermesInternal8 = HermesInternal;
        items.push("root description: " + description2);
      }
    }
    const debug = CONSOLE_LEVELS.debug;
    const _HermesInternal9 = HermesInternal;
    debug.log("" + combined + "\n  " + items.join("\n  "));
  }
};
