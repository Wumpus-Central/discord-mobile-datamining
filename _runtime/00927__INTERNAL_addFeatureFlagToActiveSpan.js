// _runtime/00927__INTERNAL_addFeatureFlagToActiveSpan.js
import spanToJSON from "00816_spanToJSON.js";
import getClient from "00845_getClient.js";
import { getClient } from "00845_getClient.js";

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
let c2 = "flag.evaluation.";
arg5._INTERNAL_FLAG_BUFFER_SIZE = 100;
arg5._INTERNAL_MAX_FLAGS_PER_SPAN = 10;
arg5._INTERNAL_addFeatureFlagToActiveSpan = function _INTERNAL_addFeatureFlagToActiveSpan(first, value) {
  let num = arg2;
  if (arg2 === undefined) {
    num = 10;
  }
  if (typeof value === "boolean") {
    const activeSpan = spanToJSON.getActiveSpan();
    if (activeSpan) {
      const data = tmp6(816).spanToJSON(activeSpan).data;
      const _HermesInternal = HermesInternal;
      if ("" + c2 + first in data) {
        const _HermesInternal3 = HermesInternal;
        const attr = activeSpan.setAttribute("" + tmp2 + first, value);
      } else {
        const _Object = Object;
        const keys = Object.keys(data);
        if (keys.filter((str) => str.startsWith(closure_2)).length < num) {
          const _HermesInternal2 = HermesInternal;
          const attr1 = activeSpan.setAttribute("" + tmp2 + first, value);
        }
      }
      const tmp6Result = tmp6(816);
    }
    const obj2 = spanToJSON;
    tmp6 = require;
  }
};
arg5._INTERNAL_copyFlagsFromScopeToEvent = function _INTERNAL_copyFlagsFromScopeToEvent(contexts) {
  let obj = getClient;
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
    obj[0] = items;
    contexts.contexts.flags = obj;
  }
  return contexts;
};
arg5._INTERNAL_insertFlagToScope = function _INTERNAL_insertFlagToScope(first, value) {
  let num = arg2;
  if (arg2 === undefined) {
    num = 100;
  }
  let obj = getClient;
  const currentScope = obj.getCurrentScope();
  const contexts = currentScope.getScopeData().contexts;
  if (!contexts.flags) {
    obj = { values: null };
    obj[0] = [];
    contexts.flags = obj;
  }
  const values = contexts.flags.values;
  _require = first;
  if (typeof value === "boolean") {
    if (values.length > num) {
      if (tmp(820).DEBUG_BUILD) {
        const debug = tmp(821).debug;
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
      obj = { flag: null, result: null };
      obj[0] = first;
      obj[1] = value;
      values.push(obj);
    }
  }
};
arg5._INTERNAL_insertToFlagBuffer = function _INTERNAL_insertToFlagBuffer(arr, arg1, flag) {
  const _require = arg1;
  if (typeof flag === "boolean") {
    if (arr.length > arg3) {
      if (require("metro/00820___SENTRY_DEBUG__.js").DEBUG_BUILD) {
        const debug = tmp5(821).debug;
        const _HermesInternal = HermesInternal;
        debug.error("[Feature Flags] insertToFlagBuffer called on a buffer larger than maxSize=" + arg3);
      }
      tmp5 = _require;
    } else {
      const findIndexResult = arr.findIndex((flag) => flag.flag === closure_0);
      if (-1 !== findIndexResult) {
        arr.splice(findIndexResult, 1);
      }
      if (arr.length === arg3) {
        arr.shift();
      }
      const obj = { flag: null, result: null };
      obj[0] = arg1;
      obj[1] = flag;
      arr.push(obj);
    }
  }
};
