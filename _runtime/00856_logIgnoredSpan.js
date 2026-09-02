// _runtime/00856_logIgnoredSpan.js
import __SENTRY_DEBUG__ from "metro/00820___SENTRY_DEBUG__.js";
import consoleSandbox from "00821_consoleSandbox.js";
import isMatchingPattern from "00829_isMatchingPattern.js";

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
        let tmp8 = nextResult;
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
          let tmp37 = nextResult;
          let _RegExp = RegExp;
          if (!(tmp9 instanceof RegExp)) {
            let tmp10 = nextResult;
            if (tmp8.name) {
              let tmp12 = nextResult;
              let name = tmp8.name;
              let isMatchingPatternResult = !name;
              if (name) {
                let tmp14 = require;
                let tmp15 = dependencyMap;
                let obj = isMatchingPattern;
                let tmp16 = nextResult;
                isMatchingPatternResult = obj.isMatchingPattern(result.description, tmp8.name);
              }
              let tmp18 = nextResult;
              let op = tmp8.op;
              let tmp19 = !op;
              let tmp17 = isMatchingPatternResult;
              if (op) {
                let op2 = result.op;
                if (op2) {
                  let tmp20 = require;
                  let tmp21 = dependencyMap;
                  let obj2 = isMatchingPattern;
                  let tmp22 = nextResult;
                  op2 = obj2.isMatchingPattern(result.op, tmp8.op);
                }
                tmp19 = op2;
              }
              let tmp24 = isMatchingPatternResult;
              if (tmp17) {
                let tmp25 = tmp19;
                if (tmp23) {
                  let tmp26 = require;
                  let tmp27 = dependencyMap;
                  if (__SENTRY_DEBUG__.DEBUG_BUILD) {
                    let tmp28 = logIgnoredSpan;
                    let tmp29 = logIgnoredSpan(result);
                  }
                  let tmp30 = iter;
                  iter.return();
                  let flag = true;
                  return true;
                }
              }
            } else {
              let tmp11 = nextResult;
            }
          }
          continue;
        }
        let tmp31 = require;
        let tmp32 = dependencyMap;
        let obj3 = isMatchingPattern;
        let tmp33 = nextResult;
        if (obj3.isMatchingPattern(result.description, tmp8)) {
          if (tmp31(820).DEBUG_BUILD) {
            let tmp34 = logIgnoredSpan;
            let tmp35 = logIgnoredSpan(result);
          }
          let tmp36 = iter;
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
