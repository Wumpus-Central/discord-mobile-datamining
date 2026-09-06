// _runtime/11057_RNIapAmazonModule.js
import asyncGeneratorStep from "00005_asyncGeneratorStep.js";

const RNIapAmazonModule = fn(17).NativeModules.RNIapAmazonModule;
asyncGeneratorStep(async (arg0, value) => {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
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
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp5;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          ({ developerSecret: closure_129_0, userId: closure_129_1, receiptId: closure_129_2, useSandbox } = closure_0);
          if (useSandbox === undefined) {
            useSandbox = true;
          }
          closure_129_3 = useSandbox;
          closure_129_4 = undefined;
          c3 = 1;
          c4 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else {
          let str = "";
          if (closure_129_3) {
            str = "sandbox/";
          }
          const _HermesInternal = HermesInternal;
          closure_129_4 =
            "https://appstore-sdk.amazon.com/" +
            str +
            "version/1.0/verifyReceiptId/developer/" +
            closure_129_0 +
            "/user/" +
            closure_129_1 +
            "/receiptId/" +
            closure_129_2;
          let obj2 = closure_0(tmp2[2]);
          c3 = 2;
          c4 = 1;
          obj2 = { value: null, done: false };
          obj2.value = obj2.enhancedFetch(closure_129_4);
          return obj2;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj3 = { value, done: true };
        return obj3;
      } else {
        c4 = 3;
        obj = { value, done: true };
        return obj;
      }
    } catch (tmp16) {
      c4 = tmp;
      throw tmp16;
    }
  }
});
asyncGeneratorStep(async (arg0, value) => {
  if (c0 === 2) {
    c0 = 3;
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
      c0 = 2;
      if (arg0 === 1) {
        c0 = 3;
        throw value;
      } else if (arg0 === 2) {
        c0 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        c0 = 3;
        obj = { value: RNIapAmazonModule.verifyLicense(), done: true };
        return obj;
      }
    } catch (tmp5) {
      c0 = tmp;
      throw tmp5;
    }
  }
});
let closure_0 = asyncGeneratorStep(async (arg0) => {
  const isAmazonDevice = arg0;
  c3 = 0;
  c4 = 0;
  const iter = (async (arg0, value) => {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
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
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_1 = tmp2;
            let isAmazonDevice2;
            isAmazonDevice2 = isAmazonDevice.isAmazonDevice;
            c3 = 1;
            c4 = 1;
            return { value: "PX_16", done: true };
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else {
          c4 = 3;
          obj = { value: tmp5.deepLinkToSubscriptions(isAmazonDevice2), done: true };
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
