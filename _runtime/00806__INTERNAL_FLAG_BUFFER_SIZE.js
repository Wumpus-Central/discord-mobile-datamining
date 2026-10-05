// === Module 806: _INTERNAL_FLAG_BUFFER_SIZE ===

// Module 806 (_INTERNAL_FLAG_BUFFER_SIZE)
import TRACE_FLAG_NONE from "TRACE_FLAG_NONE" /* 695 */;
import _mod699 from "module_699" /* 699 */;
import CONSOLE_LEVELS from "CONSOLE_LEVELS" /* 700 */;
import _mod724 from "module_724" /* 724 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let c2 = "flag.evaluation.";

export const _INTERNAL_FLAG_BUFFER_SIZE = 100;
export const _INTERNAL_MAX_FLAGS_PER_SPAN = 10;
export const _INTERNAL_addFeatureFlagToActiveSpan = function _INTERNAL_addFeatureFlagToActiveSpan(flagKey, value) {
  let num = arg2;
  if (arg2 === undefined) {
    num = 10;
  }
  if (typeof value === "boolean") {
    const obj2 = TRACE_FLAG_NONE;
    const activeSpan = obj2.getActiveSpan();
    if (activeSpan) {
      const tmp6Result = TRACE_FLAG_NONE;
      const data = tmp6Result.spanToJSON(activeSpan).data;
      const _HermesInternal = HermesInternal;
      if ("" + c2 + flagKey in data) {
        const _HermesInternal3 = HermesInternal;
        const attr = activeSpan.setAttribute("" + c2 + flagKey, value);
      } else {
        const _Object = Object;
        const keys = Object.keys(data);
        if (keys.filter((item) => item.startsWith(closure_1_2)).length < num) {
          const _HermesInternal2 = HermesInternal;
          const attr1 = activeSpan.setAttribute("" + c2 + flagKey, value);
        }
      }
    }
  }
};
export const _INTERNAL_copyFlagsFromScopeToEvent = function _INTERNAL_copyFlagsFromScopeToEvent(contexts) {
  let items;
  const obj = _mod724;
  const currentScope = obj.getCurrentScope();
  const flags = currentScope.getScopeData().contexts.flags;
  const arr = flags ? flags.values : [];
  if (arr.length) {
    if (undefined === contexts.contexts) {
      contexts.contexts = {};
    }
    const obj2 = { values: items };
    items = [];
    contexts = contexts.contexts;
    HermesBuiltin.arraySpread(items, arr, 0);
    contexts.flags = obj2;
  }
  return contexts;
};
export const _INTERNAL_insertFlagToScope = function _INTERNAL_insertFlagToScope(flagKey, value) {
  let num = arg2;
  if (arg2 === undefined) {
    num = 100;
  }
  const obj = _mod724;
  const currentScope = obj.getCurrentScope();
  const contexts = currentScope.getScopeData().contexts;
  if (!contexts.flags) {
    const obj2 = { values: [] };
    contexts.flags = obj2;
  }
  const values = contexts.flags.values;
  let closure_0 = flagKey;
  if (typeof value === "boolean") {
    if (values.length > num) {
      if (_mod699.DEBUG_BUILD) {
        const debug = CONSOLE_LEVELS.debug;
        const _HermesInternal = HermesInternal;
        debug.error("[Feature Flags] insertToFlagBuffer called on a buffer larger than maxSize=" + num);
      }
    } else {
      const findIndexResult = values.findIndex((flag) => flag.flag === closure_0);
      if (-1 !== findIndexResult) {
        values.splice(findIndexResult, 1);
      }
      if (values.length === num) {
        values.shift();
      }
      const obj3 = { flag: flagKey, result: value };
      values.push(obj3);
    }
  }
};
export const _INTERNAL_insertToFlagBuffer = function _INTERNAL_insertToFlagBuffer(arr, flag, result, arg3) {
  let closure_0 = flag;
  if (typeof result === "boolean") {
    if (arr.length > arg3) {
      if (_mod699.DEBUG_BUILD) {
        const debug = CONSOLE_LEVELS.debug;
        const _HermesInternal = HermesInternal;
        debug.error("[Feature Flags] insertToFlagBuffer called on a buffer larger than maxSize=" + arg3);
      }
    } else {
      const findIndexResult = arr.findIndex((flag) => flag.flag === closure_0);
      if (-1 !== findIndexResult) {
        arr.splice(findIndexResult, 1);
      }
      if (arr.length === arg3) {
        arr = arr.shift();
      }
      const obj = { flag, result };
      arr.push(obj);
    }
  }
};