// === Module 12657: ? ===

// Module 12657
import _mod12587 from "module_12587" /* 12587 */;
import _mod12589 from "module_12589" /* 12589 */;

const require = globalThis.__r;
let _require, dependencyMap, length;

function aggregateExceptionsFromError(fn, arg1, arg2, errors, source, arg5, mechanism, exception_id) {
  let closure_1;
  let closure_2;
  _require = fn;
  dependencyMap = arg1;
  aggregateExceptionsFromError = arg2;
  let closure_3 = source;
  if (arg5.length >= arg2 + 1) {
    return arg5;
  } else {
    let items = [];
    HermesBuiltin.arraySpread(items, arg5, 0);
    length = items;
    let obj3 = require("module_12587");
    const _Error = Error;
    if (obj3.isInstanceOf(errors[source], Error)) {
      mechanism.mechanism = mechanism.mechanism || { type: "generic", handled: true };
      let obj = { exception_id };
      const tmp2 = obj;
      let merged = Object.assign(mechanism.mechanism);
      const tmp4 = "AggregateError" === mechanism.type && { is_exception_group: true };
      let tmp6 = tmp4;
      let merged1 = Object.assign(tmp4);
      mechanism.mechanism = obj;
      const tmp8 = fn(arg1, errors[source]);
      length = length.length;
      tmp8.mechanism = tmp8.mechanism || { type: "generic", handled: true };
      let obj2 = { type: "chained", source, exception_id: length, parent_id: exception_id };
      let merged2 = Object.assign(tmp8.mechanism);
      tmp8.mechanism = obj2;
      const items1 = [tmp8];
      let tmp13 = errors[source];
      HermesBuiltin.arraySpread(items1, length, 1);
      length = aggregateExceptionsFromError(fn, arg1, arg2, tmp13, source, items1, tmp8, length);
    }
    const _Array = Array;
    if (Array.isArray(errors.errors)) {
      errors = errors.errors;
      const item = errors.forEach((item, index) => {
        const obj = _mod12587;
        if (obj.isInstanceOf(item, Error)) {
          mechanism.mechanism = mechanism.mechanism || { type: "generic", handled: true };
          const obj2 = { exception_id };
          const merged = Object.assign(tmp2.mechanism);
          const tmp6 = "AggregateError" === mechanism.type && { is_exception_group: true };
          const merged1 = Object.assign(tmp6);
          mechanism.mechanism = obj2;
          const tmp13 = fn(closure_1, item);
          length = length.length;
          const _HermesInternal = HermesInternal;
          mechanism = tmp13.mechanism;
          const combined = "errors[" + index + "]";
          if (!mechanism) {
            mechanism = { type: "generic", handled: true };
          }
          tmp13.mechanism = mechanism;
          const obj3 = { type: "chained", source: combined, exception_id: length, parent_id: exception_id };
          const merged2 = Object.assign(tmp13.mechanism);
          tmp13.mechanism = obj3;
          const items = [tmp13];
          HermesBuiltin.arraySpread(items, length, 1);
          length = aggregateExceptionsFromError(fn, closure_1, closure_2, item, source, items, tmp13, length);
        }
      });
    }
    return length;
  }
}

export const applyAggregateErrorsToEvent = function applyAggregateErrorsToEvent(exceptionFromError, stackParser) {
  let exception;
  let num = maxValueLength;
  if (maxValueLength === undefined) {
    num = 250;
  }
  if (exception.exception) {
    if (exception.exception.values) {
      const tmp = originalException;
      if (tmp) {
        let obj = num(12587);
        const _Error = Error;
        if (obj.isInstanceOf(originalException.originalException, Error)) {
          let tmp5;
          if (exception.exception.values.length > 0) {
            tmp5 = exception.exception.values[exception.exception.values.length - 1];
          }
          if (tmp5) {
            exception = exception.exception;
            const arr = aggregateExceptionsFromError(exceptionFromError, stackParser, arg4, originalException.originalException, arg3, exception.exception.values, tmp5, 0);
            exception.values = arr.map((value) => {
              if (value.value) {
                const obj = _mod12589;
                value.value = obj.truncate(value.value, num);
              }
              return value;
            });
          }
        }
      }
    }
  }
};