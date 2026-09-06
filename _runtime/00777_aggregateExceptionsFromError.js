// === Module 777: aggregateExceptionsFromError ===

// Module 777 (aggregateExceptionsFromError)
import _mod692 from "module_692" /* 692 */;

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
      let obj = { handled: true, type: "auto.core.linked_errors" };
      let merged = Object.assign(mechanism.mechanism);
      const tmp3 = "AggregateError" === mechanism.type && { is_exception_group: true };
      let merged1 = Object.assign(tmp3);
      obj.exception_id = exception_id;
      mechanism.mechanism = obj;
      const tmp7 = fn(value, errors[source]);
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
      length = aggregateExceptionsFromError(fn, value, arg2, errors[source], source, items1, tmp7, length);
    }
    const _Array = Array;
    if (Array.isArray(errors.errors)) {
      errors = errors.errors;
      const item = errors.forEach((item, index) => {
        let obj = _mod692;
        if (obj.isInstanceOf(item, Error)) {
          obj = { handled: true, type: "auto.core.linked_errors" };
          const merged = Object.assign(mechanism.mechanism);
          const tmp5 = "AggregateError" === mechanism.type && { is_exception_group: true };
          const merged1 = Object.assign(tmp5);
          obj.exception_id = exception_id;
          mechanism.mechanism = obj;
          const tmp12 = closure_0(closure_1, item);
          length = length.length;
          const _HermesInternal = HermesInternal;
          obj = { handled: true };
          const combined = "errors[" + index + "]";
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
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const applyAggregateErrorsToEvent = function applyAggregateErrorsToEvent(exceptionFromError, stackParser, arg2, arg3, exception, originalException) {
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
          exception.exception.values = aggregateExceptionsFromError(exceptionFromError, stackParser, arg3, originalException.originalException, arg2, exception.exception.values, tmp6, 0);
        }
      }
      obj = _mod692;
    }
  }
};