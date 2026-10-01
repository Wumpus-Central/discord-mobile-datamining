// _runtime/10723_RNIapAmazonModule.js
import asyncGeneratorStep from "00005_asyncGeneratorStep.js";

const RNIapAmazonModule = fn(17).NativeModules.RNIapAmazonModule;
asyncGeneratorStep(async (arg0) => {
  ({ developerSecret: closure_129_0, userId: closure_129_1, receiptId: closure_129_2, useSandbox } = closure_0);
  if (useSandbox === undefined) {
    useSandbox = true;
  }
  closure_129_3 = useSandbox;
  await "flex";
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
  await closure_0(tmp2[2]).enhancedFetch(closure_129_4);
  return value;
});
asyncGeneratorStep(async () => {
  if (c0 === 2) {
    c0 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
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
        const obj3 = { value, done: true };
        return obj3;
      } else {
        c0 = 3;
        const obj = { value: RNIapAmazonModule.verifyLicense(), done: true };
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
  const iter = (async (arg0) => {
    closure_1 = tmp2;
    const isAmazonDevice2 = isAmazonDevice.isAmazonDevice;
    await "flex";
    return tmp5.deepLinkToSubscriptions(isAmazonDevice2);
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
