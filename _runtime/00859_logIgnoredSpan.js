// === Module 859: logIgnoredSpan ===

// Module 859 (logIgnoredSpan)
import __SENTRY_DEBUG__ from "__SENTRY_DEBUG__" /* 823 */;
import consoleSandbox from "consoleSandbox" /* 824 */;
import isMatchingPattern from "isMatchingPattern" /* 832 */;

require = arg1;
const dependencyMap = arg6;
function logIgnoredSpan(op) {
  const debug = consoleSandbox.debug;
  debug.log("Ignoring span " + op.op + " - " + op.description + " because it matches `ignoreSpans`.");
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.reparentChildSpans = function reparentChildSpans(spans, parent_span_id) {
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
arg5.shouldIgnoreSpan = function shouldIgnoreSpan(result, ignoreSpans) {
  let length;
  if (ignoreSpans != null) {
    length = ignoreSpans.length;
  }
  if (length) {
    if (result.description) {
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
                let obj = isMatchingPattern;
                isMatchingPatternResult = obj.isMatchingPattern(result.description, tmp8.name);
              }
              let op = tmp8.op;
              let tmp17 = isMatchingPatternResult;
              if (op) {
                let op2 = result.op;
                if (op2) {
                  let obj2 = isMatchingPattern;
                  op2 = obj2.isMatchingPattern(result.op, tmp8.op);
                }
              }
              if (tmp17) {
                if (tmp23) {
                  if (__SENTRY_DEBUG__.DEBUG_BUILD) {
                    let tmp29 = logIgnoredSpan(result);
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
        let obj3 = isMatchingPattern;
        if (obj3.isMatchingPattern(result.description, tmp8)) {
          if (__SENTRY_DEBUG__.DEBUG_BUILD) {
            let tmp35 = logIgnoredSpan(result);
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