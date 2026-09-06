// _runtime/00726_logSpanEnd.js
import spanToJSON from "00684_spanToJSON.js";
import _mod688 from "metro/00688__.js";
import consoleSandbox from "00689_consoleSandbox.js";

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const logSpanEnd = function logSpanEnd(spanContext) {
  if (_mod688.DEBUG_BUILD) {
    let tmpResult = spanToJSON;
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
    tmpResult = spanToJSON;
    let str3 = "";
    if (tmpResult.getRootSpan(spanContext) === spanContext) {
      str3 = "root ";
    }
    const _HermesInternal = HermesInternal;
    const combined = '[Tracing] Finishing "' + str2 + '" ' + str3 + 'span "' + str + '" with ID ' + spanId;
    const debug = consoleSandbox.debug;
    debug.log(combined);
  }
};
export const logSpanStart = function logSpanStart(spanContext) {
  if (_mod688.DEBUG_BUILD) {
    let tmpResult = spanToJSON;
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
    tmpResult = spanToJSON;
    const spanIsSampledResult = tmpResult.spanIsSampled(spanContext);
    const rootSpan = spanToJSON.getRootSpan(spanContext);
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
    items[2] = "ID: " + spanContext.spanContext().spanId;
    if (parent_span_id) {
      const _HermesInternal5 = HermesInternal;
      items.push("parent ID: " + parent_span_id);
    }
    if (rootSpan !== spanContext) {
      const tmpResult2 = spanToJSON;
      ({ op: op2, description: description2 } = spanToJSON.spanToJSON(rootSpan));
      const _HermesInternal6 = HermesInternal;
      items.push("root ID: " + rootSpan.spanContext().spanId);
      if (op2) {
        const _HermesInternal7 = HermesInternal;
        items.push("root op: " + op2);
      }
      if (description2) {
        const _HermesInternal8 = HermesInternal;
        items.push("root description: " + description2);
      }
      const spanToJSONResult1 = spanToJSON.spanToJSON(rootSpan);
    }
    const debug = consoleSandbox.debug;
    const _HermesInternal9 = HermesInternal;
    debug.log("" + combined + "\n  " + items.join("\n  "));
    const tmpResult1 = spanToJSON;
  }
};
