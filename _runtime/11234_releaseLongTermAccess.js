// === Module 11234: releaseLongTermAccess ===

// Module 11234 (releaseLongTermAccess)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

asyncGeneratorStep(async (arg0) => {
  if (dependencyMap === 2) {
    dependencyMap = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      dependencyMap = 2;
      if (arg0 === 1) {
        dependencyMap = 3;
        throw value;
      } else if (arg0 === 2) {
        dependencyMap = 3;
        obj = { value, done: true };
        return obj;
      } else {
        const NativeDocumentPicker = closure_0(dependencyMap[1]).NativeDocumentPicker;
        dependencyMap = 3;
        obj = { value: NativeDocumentPicker.releaseLongTermAccess(closure_0), done: true };
        return obj;
      }
    } catch (tmp7) {
      dependencyMap = tmp;
      throw tmp7;
    }
  }
});
let closure_0 = asyncGeneratorStep(async (arg0) => {
  if (dependencyMap === 2) {
    dependencyMap = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      dependencyMap = 2;
      if (arg0 === 1) {
        dependencyMap = 3;
        throw value;
      } else if (arg0 === 2) {
        dependencyMap = 3;
        obj = { value, done: true };
        return obj;
      } else {
        const NativeDocumentPicker = closure_0(dependencyMap[1]).NativeDocumentPicker;
        dependencyMap = 3;
        obj = { value: NativeDocumentPicker.releaseSecureAccess(closure_0), done: true };
        return obj;
      }
    } catch (tmp7) {
      dependencyMap = tmp;
      throw tmp7;
    }
  }
});

export const releaseLongTermAccess = function releaseLongTermAccess(arg0) {
  const self = this;
  const apply = closure_0.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const releaseSecureAccess = function releaseSecureAccess(arg0) {
  const self = this;
  const apply = closure_0.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};