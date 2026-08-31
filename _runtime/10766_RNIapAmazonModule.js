// === Module 10766: RNIapAmazonModule ===

// Module 10766 (RNIapAmazonModule)
import importDefaultResult from "asyncGeneratorStep" /* 5 */;

let closure_0 = arg1;
const RNIapAmazonModule = require("get ActivityIndicator").NativeModules.RNIapAmazonModule;
closure_0 = importDefaultResult((arg0) => {
  closure_0 = arg0;
  c3 = 0;
  c4 = 0;
  const iter = (function*(arg0) {
    if (c4 === 2) {
      c4 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c2 = tmp5;
            c1 = tmp2;
            c0 = undefined;
            c1 = undefined;
            c2 = undefined;
            c3 = undefined;
            ({ developerSecret: c0, userId: c1, receiptId: c2, useSandbox } = c0);
            if (useSandbox === undefined) {
              useSandbox = true;
            }
            c3 = useSandbox;
            c4 = undefined;
            c3 = 1;
            c4 = 1;
            return { value: "Object", done: true };
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj1 = { value: null, done: true };
            obj1[0] = arg1;
            return obj1;
          } else {
            let str = "";
            if (c3) {
              str = "sandbox/";
            }
            const _HermesInternal = HermesInternal;
            c4 = "https://appstore-sdk.amazon.com/" + str + "version/1.0/verifyReceiptId/developer/" + c0 + "/user/" + c1 + "/receiptId/" + c2;
            let obj2 = callback(closure_1_1[2]);
            c3 = 2;
            c4 = 1;
            obj2 = { value: null, done: false };
            obj2[0] = obj2.enhancedFetch(c4);
            return obj2;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj3 = { value: null, done: true };
          obj3[0] = arg1;
          return obj3;
        } else {
          c4 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
      } catch (tmp16) {
        c4 = tmp;
        throw tmp16;
      }
    }
  })();
  iter.next();
  return iter;
});
closure_0 = importDefaultResult(function*() {
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
      return { value: "HermesInternal", done: "HermesInternal" };
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
  const iter = (function*(arg0) {
    if (c4 === 2) {
      c4 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_2 = tmp5;
            closure_1 = tmp2;
            let isAmazonDevice;
            isAmazonDevice = isAmazonDevice.isAmazonDevice;
            c3 = 1;
            c4 = 1;
            return { value: "Object", done: true };
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c4 = 3;
          obj1 = { value: null, done: true };
          obj1[0] = arg1;
          return obj1;
        } else {
          c4 = 3;
          obj = { value: null, done: true };
          obj[0] = closure_1_2.deepLinkToSubscriptions(isAmazonDevice);
          return obj;
        }
      } catch (tmp11) {
        c4 = tmp;
        throw tmp11;
      }
    }
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