// _runtime/07471_aggregateExceptionsFromError.js
const require = arg1;
let dependencyMap = arg6;
function aggregateExceptionsFromError(arg0, arg1, arg2, errors, source, arg5, mechanism, exception_id) {
  const _require = arg0;
  const dependencyMap = arg1;
  const aggregateExceptionsFromError = arg2;
  let closure_3 = source;
  let closure_4 = mechanism;
  let closure_5 = exception_id;
  if (arg5.length >= arg2 + 1) {
    return arg5;
  } else {
    let items = [];
    HermesBuiltin.arraySpread(arg5, 0);
    let length = items;
    const _Error = Error;
    if (obj3.isInstanceOf(errors[source], Error)) {
      mechanism.mechanism = mechanism.mechanism || { type: "generic", handled: true };
      let obj = {};
      let merged = Object.assign(mechanism.mechanism);
      const tmp3 = "AggregateError" === mechanism.type && { is_exception_group: true };
      let merged1 = Object.assign(tmp3);
      obj.exception_id = exception_id;
      mechanism.mechanism = obj;
      const tmp7 = arg0(arg1, errors[source]);
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
      length = aggregateExceptionsFromError(arg0, arg1, arg2, errors[source], source, items1, tmp7, length);
    }
    const _Array = Array;
    if (Array.isArray(errors.errors)) {
      errors = errors.errors;
      const item = errors.forEach((arg0, arg1) => {
        let obj = callback(table[0]);
        if (obj.isInstanceOf(arg0, Error)) {
          mechanism.mechanism = mechanism.mechanism || { type: "generic", handled: true };
          obj = {};
          const merged = Object.assign(tmp.mechanism);
          const tmp5 = "AggregateError" === mechanism.type && { is_exception_group: true };
          const merged1 = Object.assign(tmp5);
          obj.exception_id = closure_5;
          mechanism.mechanism = obj;
          const tmp12 = callback(table, arg0);
          length = length.length;
          const _HermesInternal = HermesInternal;
          mechanism = tmp12.mechanism;
          const combined = "errors[" + arg1 + "]";
          if (!mechanism) {
            mechanism = { type: "generic", handled: true };
          }
          tmp12.mechanism = mechanism;
          obj = {};
          const merged2 = Object.assign(tmp12.mechanism);
          obj.type = "chained";
          obj.source = combined;
          obj.exception_id = length;
          obj.parent_id = closure_5;
          tmp12.mechanism = obj;
          const items = [tmp12];
          HermesBuiltin.arraySpread(length, 1);
          length = callback2(tmp10, tmp11, callback2, arg0, closure_3, items, tmp12, length);
        }
      });
    }
    return length;
  }
}
arg5.applyAggregateErrorsToEvent = function applyAggregateErrorsToEvent(arg0, arg1, arg2, arg3, arg4, exception, originalException) {
  let num = arg2;
  if (arg2 === undefined) {
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
            exception.exception.values = aggregateExceptionsFromError(arg0, arg1, arg4, originalException.originalException, arg3, exception.exception.values, tmp5, 0).map((value) => {
              if (value.value) {
                value.value = num(outer1_1[1]).truncate(value.value, num);
                const obj = num(outer1_1[1]);
              }
              return value;
            });
            const arr = aggregateExceptionsFromError(arg0, arg1, arg4, originalException.originalException, arg3, exception.exception.values, tmp5, 0);
          }
        }
        obj = num(7401);
      }
    }
  }
};