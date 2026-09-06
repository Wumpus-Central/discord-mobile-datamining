// _runtime/00795__INTERNAL_FLAG_BUFFER_SIZE.js
import spanToJSON from "00684_spanToJSON.js";
import _mod688 from "metro/00688__.js";
import consoleSandbox from "00689_consoleSandbox.js";
import _mod713 from "metro/00713__.js";

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
let c2 = "flag.evaluation.";

export const _INTERNAL_FLAG_BUFFER_SIZE = 100;
export const _INTERNAL_MAX_FLAGS_PER_SPAN = 10;
export const _INTERNAL_addFeatureFlagToActiveSpan = function _INTERNAL_addFeatureFlagToActiveSpan(flagKey, value) {
  let num = arg2;
  if (arg2 === undefined) {
    num = 10;
  }
  if (typeof value === "boolean") {
    const activeSpan = spanToJSON.getActiveSpan();
    if (activeSpan) {
      const data = spanToJSON.spanToJSON(activeSpan).data;
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
      const tmp6Result = spanToJSON;
    }
  }
};
export const _INTERNAL_copyFlagsFromScopeToEvent = function _INTERNAL_copyFlagsFromScopeToEvent(contexts) {
  let obj = _mod713;
  const currentScope = obj.getCurrentScope();
  const flags = currentScope.getScopeData().contexts.flags;
  const arr = flags ? flags.values : [];
  if (arr.length) {
    if (undefined === contexts.contexts) {
      contexts.contexts = {};
    }
    obj = { values: null };
    const items = [];
    HermesBuiltin.arraySpread(arr, 0);
    obj.values = items;
    contexts.contexts.flags = obj;
  }
  return contexts;
};
export const _INTERNAL_insertFlagToScope = function _INTERNAL_insertFlagToScope(flagKey, value) {
  let num = arg2;
  if (arg2 === undefined) {
    num = 100;
  }
  let obj = _mod713;
  const currentScope = obj.getCurrentScope();
  const contexts = currentScope.getScopeData().contexts;
  if (!contexts.flags) {
    obj = { values: [] };
    contexts.flags = obj;
  }
  const values = contexts.flags.values;
  closure_0 = flagKey;
  if (typeof value === "boolean") {
    if (values.length > num) {
      if (_mod688.DEBUG_BUILD) {
        const debug = consoleSandbox.debug;
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
      obj = { flag: flagKey, result: value };
      values.push(obj);
    }
  }
};
export const _INTERNAL_insertToFlagBuffer = function _INTERNAL_insertToFlagBuffer(arr, flag, result, arg3) {
  closure_0 = flag;
  if (typeof result === "boolean") {
    if (arr.length > arg3) {
      if (_mod688.DEBUG_BUILD) {
        const debug = consoleSandbox.debug;
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
      arr = arr.push(obj);
    }
  }
};
