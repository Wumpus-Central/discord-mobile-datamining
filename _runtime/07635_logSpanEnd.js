// === Module 7635: logSpanEnd ===

// Module 7635 (logSpanEnd)
import __SENTRY_DEBUG__ from "__SENTRY_DEBUG__" /* 7625 */;

require = arg1;
const dependencyMap = arg6;
arg5.logSpanEnd = function logSpanEnd(spanContext) {
  if (__SENTRY_DEBUG__.DEBUG_BUILD) {
    let tmpResult = tmp(7602);
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
    tmpResult = tmp(7602);
    let str3 = "";
    if (tmpResult.getRootSpan(spanContext) === spanContext) {
      str3 = "root ";
    }
    const _HermesInternal = HermesInternal;
    const combined = "[Tracing] Finishing \"" + str2 + "\" " + str3 + "span \"" + str + "\" with ID " + spanId;
    const logger = tmp(7597).logger;
    logger.log(combined);
  }
};
arg5.logSpanStart = function logSpanStart(spanContext) {
  if (__SENTRY_DEBUG__.DEBUG_BUILD) {
    let tmpResult = tmp(7602);
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
    tmpResult = tmp(7602);
    const spanIsSampledResult = tmpResult.spanIsSampled(spanContext);
    const rootSpan = tmp(7602).getRootSpan(spanContext);
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
    const items = ["op: " + str2, , ];
    const _HermesInternal3 = HermesInternal;
    items[1] = "name: " + str;
    const _HermesInternal4 = HermesInternal;
    items[2] = "ID: " + spanContext.spanContext().spanId;
    if (parent_span_id) {
      const _HermesInternal5 = HermesInternal;
      items.push("parent ID: " + parent_span_id);
    }
    if (rootSpan !== spanContext) {
      const tmpResult2 = tmp(7602);
      ({ op: op2, description: description2 } = tmp(7602).spanToJSON(rootSpan));
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
      const spanToJSONResult1 = tmp(7602).spanToJSON(rootSpan);
    }
    const logger = tmp(7597).logger;
    const _HermesInternal9 = HermesInternal;
    logger.log("" + combined + "\n  " + items.join("\n  "));
    const tmpResult1 = tmp(7602);
  }
};