// _runtime/10804_RNIapAmazonModule.js
import importDefaultResult from "00005_asyncGeneratorStep.js";

let closure_0 = arg1;
const RNIapAmazonModule = require("get ActivityIndicator").NativeModules.RNIapAmazonModule;
closure_0 = importDefaultResult((arg0) => {
  closure_0 = arg0;
  c3 = 0;
  c4 = 0;
  const iter = (function* (arg0) {
    c1 = tmp2;
    ({ developerSecret: c0, userId: c1, receiptId: c2, useSandbox } = c0);
    if (useSandbox === undefined) {
      useSandbox = true;
    }
    yield "PX_16";
    let str = "";
    if (c3) {
      str = "sandbox/";
    }
    const _HermesInternal = HermesInternal;
    const obj2 = callback(closure_1_1[2]);
    yield obj2.enhancedFetch(c4);
    return arg1;
  })();
  iter.next();
  return iter;
});
closure_0 = importDefaultResult(function* () {
  if (c0 === 2) {
    c0 = 3;
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
      c0 = 2;
      if (arg0 === 1) {
        c0 = 3;
        throw arg1;
      } else if (arg0 === 2) {
        c0 = 3;
        obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        c0 = 3;
        obj = { value: null, done: true };
        obj[0] = closure_1_2.verifyLicense();
        return obj;
      }
    } catch (tmp5) {
      c0 = tmp;
      throw tmp5;
    }
  }
});
closure_0 = importDefaultResult((arg0) => {
  closure_0 = arg0;
  c3 = 0;
  c4 = 0;
  const iter = (function* (arg0) {
    closure_2 = tmp5;
    closure_1 = tmp2;
    isAmazonDevice = isAmazonDevice.isAmazonDevice;
    yield "PX_16";
    return closure_1_2.deepLinkToSubscriptions(isAmazonDevice);
  })();
  iter.next();
  return iter;
});

export const AmazonModule = RNIapAmazonModule;
export const validateReceiptAmazon = function validateReceiptAmazon(arg0) {
  const self = this;
  const apply = closure_0.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const verifyLicense = function verifyLicense() {
  const self = this;
  const apply = closure_0.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const deepLinkToSubscriptionsAmazon = function deepLinkToSubscriptionsAmazon(arg0) {
  const self = this;
  const apply = closure_0.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
