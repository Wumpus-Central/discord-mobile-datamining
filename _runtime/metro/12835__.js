// _runtime/metro/12835__.js
import _mod12797 from "12797__.js";
import spanTimeInputToSeconds from "../12802_spanTimeInputToSeconds.js";
import _mod12825 from "12825__.js";

require = arg1;
const dependencyMap = arg6;

export const logSpanEnd = function logSpanEnd(spanContext) {
  if (_mod12825.DEBUG_BUILD) {
    let tmpResult = spanTimeInputToSeconds;
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
    tmpResult = spanTimeInputToSeconds;
    let str3 = "";
    if (tmpResult.getRootSpan(spanContext) === spanContext) {
      str3 = "root ";
    }
    const _HermesInternal = HermesInternal;
    const combined = '[Tracing] Finishing "' + str2 + '" ' + str3 + 'span "' + str + '" with ID ' + spanId;
    const logger = _mod12797.logger;
    logger.log(combined);
  }
};
export const logSpanStart = function logSpanStart(spanContext) {
  if (_mod12825.DEBUG_BUILD) {
    let tmpResult = spanTimeInputToSeconds;
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
    tmpResult = spanTimeInputToSeconds;
    const spanIsSampledResult = tmpResult.spanIsSampled(spanContext);
    const rootSpan = spanTimeInputToSeconds.getRootSpan(spanContext);
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
      const tmpResult2 = spanTimeInputToSeconds;
      ({ op: op2, description: description2 } = spanTimeInputToSeconds.spanToJSON(rootSpan));
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
      const spanToJSONResult1 = spanTimeInputToSeconds.spanToJSON(rootSpan);
    }
    const logger = _mod12797.logger;
    const _HermesInternal9 = HermesInternal;
    logger.log("" + combined + "\n  " + items.join("\n  "));
    const tmpResult1 = spanTimeInputToSeconds;
  }
};
