// _runtime/metro/12874__.js
import _mod12804 from "12804__.js";
import _mod12806 from "12806__.js";

require = arg1;
let dependencyMap = arg6;
function aggregateExceptionsFromError(fn, value, arg2, errors, source, arg5, mechanism, exception_id) {
  _require = fn;
  dependencyMap = value;
  aggregateExceptionsFromError = arg2;
  closure_3 = source;
  if (arg5.length >= arg2 + 1) {
    return arg5;
  } else {
    let items = [];
    HermesBuiltin.arraySpread(arg5, 0);
    length = items;
    const _Error = Error;
    if (obj3.isInstanceOf(errors[source], Error)) {
      mechanism.mechanism = mechanism.mechanism || { type: "generic", handled: true };
      let obj = {};
      let merged = Object.assign(mechanism.mechanism);
      const tmp3 = "AggregateError" === mechanism.type && { is_exception_group: true };
      let merged1 = Object.assign(tmp3);
      obj.exception_id = exception_id;
      mechanism.mechanism = obj;
      const tmp7 = fn(value, errors[source]);
      length = length.length;
      tmp7.mechanism = tmp7.mechanism || { type: "generic", handled: true };
      obj = {};
      let merged2 = Object.assign(tmp7.mechanism);
      obj.type = "chained";
      obj.source = source;
      obj.exception_id = length;
      obj.parent_id = exception_id;
      tmp7.mechanism = obj;
      const items1 = [tmp7];
      HermesBuiltin.arraySpread(length, 1);
      length = aggregateExceptionsFromError(fn, value, arg2, errors[source], source, items1, tmp7, length);
    }
    const _Array = Array;
    if (Array.isArray(errors.errors)) {
      errors = errors.errors;
      const item = errors.forEach((item, index) => {
        let obj = _mod12804;
        if (obj.isInstanceOf(item, Error)) {
          mechanism.mechanism = mechanism.mechanism || { type: "generic", handled: true };
          obj = {};
          const merged = Object.assign(tmp.mechanism);
          const tmp5 = "AggregateError" === mechanism.type && { is_exception_group: true };
          const merged1 = Object.assign(tmp5);
          obj.exception_id = exception_id;
          mechanism.mechanism = obj;
          const tmp12 = closure_0(closure_1, item);
          length = length.length;
          const _HermesInternal = HermesInternal;
          mechanism = tmp12.mechanism;
          const combined = "errors[" + index + "]";
          if (!mechanism) {
            mechanism = { type: "generic", handled: true };
          }
          tmp12.mechanism = mechanism;
          obj = {};
          const merged2 = Object.assign(tmp12.mechanism);
          obj.type = "chained";
          obj.source = combined;
          obj.exception_id = length;
          obj.parent_id = exception_id;
          tmp12.mechanism = obj;
          const items = [tmp12];
          HermesBuiltin.arraySpread(length, 1);
          length = aggregateExceptionsFromError(closure_0, closure_1, closure_2, item, closure_3, items, tmp12, length);
        }
      });
    }
    return length;
  }
}

export const applyAggregateErrorsToEvent = function applyAggregateErrorsToEvent(exceptionFromError, stackParser) {
  let num = maxValueLength;
  if (maxValueLength === undefined) {
    num = 250;
  }
  if (exception.exception) {
    if (exception.exception.values) {
      if (originalException) {
        const _Error = Error;
        if (obj.isInstanceOf(originalException.originalException, Error)) {
          let tmp5;
          if (exception.exception.values.length > 0) {
            tmp5 = exception.exception.values[exception.exception.values.length - 1];
          }
          if (tmp5) {
            exception.exception.values = aggregateExceptionsFromError(
              exceptionFromError,
              stackParser,
              arg4,
              originalException.originalException,
              arg3,
              exception.exception.values,
              tmp5,
              0,
            ).map((value) => {
              if (value.value) {
                value.value = _mod12806.truncate(value.value, num);
              }
              return value;
            });
            const arr = aggregateExceptionsFromError(
              exceptionFromError,
              stackParser,
              arg4,
              originalException.originalException,
              arg3,
              exception.exception.values,
              tmp5,
              0,
            );
          }
        }
        obj = num(12804);
      }
    }
  }
};
