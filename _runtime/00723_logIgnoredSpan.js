// === Module 723: logIgnoredSpan ===

// Module 723 (logIgnoredSpan)
import _mod687 from "module_687" /* 687 */;
import consoleSandbox from "consoleSandbox" /* 688 */;
import _mod696 from "module_696" /* 696 */;

require = arg1;
const dependencyMap = arg6;
function logIgnoredSpan(op) {
  const debug = consoleSandbox.debug;
  debug.log("Ignoring span " + op.op + " - " + op.description + " because it matches `ignoreSpans`.");
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export function reparentChildSpans(spans, parent_span_id) {
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
}
export function shouldIgnoreSpan(timestamp, ignoreSpans) {
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
                let obj = _mod696;
                isMatchingPatternResult = obj.isMatchingPattern(timestamp.description, tmp8.name);
              }
              let op = tmp8.op;
              let tmp19 = !op;
              let tmp17 = isMatchingPatternResult;
              if (op) {
                let op2 = timestamp.op;
                if (op2) {
                  let obj2 = _mod696;
                  op2 = obj2.isMatchingPattern(timestamp.op, tmp8.op);
                }
              }
              if (tmp17) {
                if (tmp23) {
                  if (_mod687.DEBUG_BUILD) {
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
        let obj3 = _mod696;
        if (obj3.isMatchingPattern(timestamp.description, tmp8)) {
          if (_mod687.DEBUG_BUILD) {
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
}