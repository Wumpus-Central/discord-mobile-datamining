// _runtime/00724_logIgnoredSpan.js
import _mod688 from "metro/00688__.js";
import consoleSandbox from "00689_consoleSandbox.js";
import _mod697 from "metro/00697__.js";

require = arg1;
const dependencyMap = arg6;
function logIgnoredSpan(op) {
  const debug = consoleSandbox.debug;
  debug.log("Ignoring span " + op.op + " - " + op.description + " because it matches `ignoreSpans`.");
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const reparentChildSpans = function reparentChildSpans(spans, parent_span_id) {
  parent_span_id = parent_span_id.parent_span_id;
  if (parent_span_id) {
    const iter = spans[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      if (nextResult.parent_span_id === tmp) {
        tmp7.parent_span_id = parent_span_id;
      }
      continue;
    }
  }
};
export const shouldIgnoreSpan = function shouldIgnoreSpan(timestamp, ignoreSpans) {
  let length;
  if (ignoreSpans != null) {
    length = ignoreSpans.length;
  }
  if (length) {
    if (timestamp.description) {
      const iter = ignoreSpans[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp8 = nextResult;
        if (typeof nextResult !== "string") {
          let _RegExp = RegExp;
          if (!(tmp9 instanceof RegExp)) {
            if (tmp8.name) {
              let name = tmp8.name;
              let isMatchingPatternResult = !name;
              if (name) {
                let obj = _mod697;
                isMatchingPatternResult = obj.isMatchingPattern(timestamp.description, tmp8.name);
              }
              let op = tmp8.op;
              let tmp19 = !op;
              let tmp17 = isMatchingPatternResult;
              if (op) {
                let op2 = timestamp.op;
                if (op2) {
                  let obj2 = _mod697;
                  op2 = obj2.isMatchingPattern(timestamp.op, tmp8.op);
                }
              }
              if (tmp17) {
                if (tmp23) {
                  if (_mod688.DEBUG_BUILD) {
                    let tmp29 = logIgnoredSpan(timestamp);
                  }
                  iter.return();
                  let flag = true;
                  return true;
                }
              }
            }
          }
          continue;
        }
        let tmp31 = require;
        let obj3 = _mod697;
        if (obj3.isMatchingPattern(timestamp.description, tmp8)) {
          if (tmp31(688).DEBUG_BUILD) {
            let tmp35 = logIgnoredSpan(timestamp);
          }
          iter.return();
          let flag2 = true;
          return true;
        }
      }
      return false;
    }
  }
  return false;
};
