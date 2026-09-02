// _runtime/00909_aggregateExceptionsFromError.js
import isInstanceOf from "00824_isInstanceOf.js";

require = arg1;
let dependencyMap = arg6;
function aggregateExceptionsFromError(arg0, arg1, arg2, errors, source, arg5, mechanism, exception_id) {
  const _require = arg0;
  dependencyMap = arg1;
  aggregateExceptionsFromError = arg2;
  closure_3 = source;
  closure_4 = mechanism;
  closure_5 = exception_id;
  if (arg5.length >= arg2 + 1) {
    return arg5;
  } else {
    let items = [];
    HermesBuiltin.arraySpread(arg5, 0);
    let length = items;
    const _Error = Error;
    if (obj3.isInstanceOf(errors[source], Error)) {
      let obj = { handled: true, type: "auto.core.linked_errors" };
      let merged = Object.assign(mechanism.mechanism);
      const tmp3 = "AggregateError" === mechanism.type && { is_exception_group: true };
      let merged1 = Object.assign(tmp3);
      obj.exception_id = exception_id;
      mechanism.mechanism = obj;
      const tmp7 = arg0(arg1, errors[source]);
      length = length.length;
      obj = { handled: true };
      let merged2 = Object.assign(tmp7.mechanism);
      obj.type = "chained";
      obj.source = source;
      obj.exception_id = length;
      obj.parent_id = exception_id;
      tmp7.mechanism = obj;
      const items1 = [tmp7];
      HermesBuiltin.arraySpread(length, 1);
      length = aggregateExceptionsFromError(arg0, arg1, arg2, errors[source], source, items1, tmp7, length);
    }
    const _Array = Array;
    if (Array.isArray(errors.errors)) {
      errors = errors.errors;
      const item = errors.forEach((arg0, arg1) => {
        let obj = callback(table[0]);
        if (obj.isInstanceOf(arg0, Error)) {
          obj = { handled: true, type: "auto.core.linked_errors" };
          const merged = Object.assign(mechanism.mechanism);
          const tmp5 = "AggregateError" === mechanism.type && { is_exception_group: true };
          const merged1 = Object.assign(tmp5);
          obj.exception_id = closure_5;
          mechanism.mechanism = obj;
          const tmp12 = callback(table, arg0);
          length = length.length;
          const _HermesInternal = HermesInternal;
          obj = { handled: true };
          const combined = "errors[" + arg1 + "]";
          const merged2 = Object.assign(tmp12.mechanism);
          obj.type = "chained";
          obj.source = combined;
          obj.exception_id = length;
          obj.parent_id = closure_5;
          tmp12.mechanism = obj;
          const items = [tmp12];
          HermesBuiltin.arraySpread(length, 1);
          length = callback2(callback, table, callback2, arg0, closure_3, items, tmp12, length);
          const tmp = mechanism;
        }
      });
    }
    return length;
  }
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.applyAggregateErrorsToEvent = function applyAggregateErrorsToEvent(
  arg0,
  arg1,
  arg2,
  arg3,
  exception,
  originalException,
) {
  exception = exception.exception;
  let values;
  if (exception != null) {
    values = exception.values;
  }
  if (values) {
    if (originalException) {
      const _Error = Error;
      if (obj.isInstanceOf(originalException.originalException, Error)) {
        let tmp6;
        if (exception.exception.values.length > 0) {
          tmp6 = exception.exception.values[exception.exception.values.length - 1];
        }
        if (tmp6) {
          exception.exception.values = aggregateExceptionsFromError(
            arg0,
            arg1,
            arg3,
            originalException.originalException,
            arg2,
            exception.exception.values,
            tmp6,
            0,
          );
        }
      }
      obj = isInstanceOf;
    }
  }
};
