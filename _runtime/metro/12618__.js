// _runtime/metro/12618__.js
import _mod12580 from "12580__.js";
import _mod12585 from "12585__.js";
import _mod12608 from "12608__.js";

export const logSpanEnd = function logSpanEnd(spanContext) {
  if (_mod12608.DEBUG_BUILD) {
    const tmpResult = _mod12585;
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
    const tmpResult2 = _mod12585;
    if (tmpResult2.getRootSpan(spanContext) === spanContext) {
      str3 = "root ";
    }
    const _HermesInternal = HermesInternal;
    const combined = '[Tracing] Finishing "' + str2 + '" ' + str3 + 'span "' + str + '" with ID ' + spanId;
    const logger = _mod12580.logger;
    logger.log(combined);
  }
};
export const logSpanStart = function logSpanStart(spanContext) {
  let description2;
  let op2;
  if (_mod12608.DEBUG_BUILD) {
    const tmpResult = _mod12585;
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
    const tmpResult4 = _mod12585;
    const spanIsSampledResult = tmpResult4.spanIsSampled(spanContext);
    const tmpResult5 = _mod12585;
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
      const tmpResult6 = _mod12585;
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
    const logger = _mod12580.logger;
    const _HermesInternal9 = HermesInternal;
    logger.log("" + combined + "\n  " + items.join("\n  "));
  }
};
