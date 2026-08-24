// === Module 10475: releaseLongTermAccess ===

// Module 10475 (releaseLongTermAccess)
import importDefaultResult from "asyncGeneratorStep" /* 5 */;

let closure_0 = arg1;
closure_0 = importDefaultResult((arg0) => {
  closure_0 = arg0;
  c1 = 0;
  return (function*(arg0) {
    if (table === 2) {
      table = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        table = 2;
        if (arg0 === 1) {
          table = 3;
          throw arg1;
        } else if (arg0 === 2) {
          table = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          const NativeDocumentPicker = callback(table[1]).NativeDocumentPicker;
          table = 3;
          obj = { value: null, done: true };
          obj[0] = NativeDocumentPicker.releaseLongTermAccess(callback);
          return obj;
        }
      } catch (tmp7) {
        table = tmp;
        throw tmp7;
      }
    }
  })();
});
closure_0 = importDefaultResult((arg0) => {
  closure_0 = arg0;
  c1 = 0;
  return (function*(arg0) {
    if (table === 2) {
      table = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        table = 2;
        if (arg0 === 1) {
          table = 3;
          throw arg1;
        } else if (arg0 === 2) {
          table = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          const NativeDocumentPicker = callback(table[1]).NativeDocumentPicker;
          table = 3;
          obj = { value: null, done: true };
          obj[0] = NativeDocumentPicker.releaseSecureAccess(callback);
          return obj;
        }
      } catch (tmp7) {
        table = tmp;
        throw tmp7;
      }
    }
  })();
});

export const releaseLongTermAccess = function releaseLongTermAccess(closure_0) {
  const self = this;
  const apply = closure_0.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const releaseSecureAccess = function releaseSecureAccess(closure_0) {
  const self = this;
  const apply = closure_0.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};