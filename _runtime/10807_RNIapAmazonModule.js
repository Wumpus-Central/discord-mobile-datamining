// _runtime/10807_RNIapAmazonModule.js
import react_native from "00017_react-native.js";
import _asyncToGenerator from "metro/00005__asyncToGenerator.js";

const RNIapAmazonModule = react_native.NativeModules.RNIapAmazonModule;
_asyncToGenerator(async (arg0) => {
  let c0;
  let c1;
  let c2;
  let obj3;
  let useSandbox;
  closure_0 = arg0;
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: null };
    }
  } else {
    try {
      let closure_1;
      let closure_4;
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          let closure_2 = tmp4;
          closure_1 = tmp;
          c0 = undefined;
          c1 = undefined;
          c2 = undefined;
          useSandbox = undefined;
          ({ developerSecret: c0, userId: c1, receiptId: c2, useSandbox } = closure_0);
          if (useSandbox === undefined) {
            useSandbox = true;
          }
          closure_4 = undefined;
          c3 = 1;
          c4 = 1;
          return { value: "Reflect", done: true };
        }
      } else if (1 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          let str = "";
          if (useSandbox) {
            str = "sandbox/";
          }
          const _HermesInternal = HermesInternal;
          closure_4 =
            "https://appstore-sdk.amazon.com/" +
            str +
            "version/1.0/verifyReceiptId/developer/" +
            c0 +
            "/user/" +
            c1 +
            "/receiptId/" +
            c2;
          c3 = 2;
          c4 = 1;
          const obj6 = { value: obj3.enhancedFetch(closure_4), done: false };
          obj3 = closure_0(closure_1[2]);
          return obj6;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj7 = { value, done: true };
        return obj7;
      } else {
        c4 = 3;
        const obj = { value, done: true };
        return obj;
      }
    } catch (tmp15) {
      c4 = 3;
      throw tmp15;
    }
  }
});
_asyncToGenerator(async () => {
  if (c0 === 2) {
    c0 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp2 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: null };
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
    } catch (tmp4) {
      c0 = 3;
      throw tmp4;
    }
  }
});
let closure_0 = _asyncToGenerator(async (arg0) => {
  let closure_2;
  let isAmazonDevice = arg0;
  let c3 = 0;
  let c4 = 0;
  const iter = (async (arg0) => {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        return { value, done: true };
      } else {
        return { value: "IconComponent", done: null };
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
            return { value, done: true };
          } else {
            closure_1 = tmp;
            isAmazonDevice = undefined;
            isAmazonDevice = isAmazonDevice.isAmazonDevice;
            c3 = 1;
            c4 = 1;
            return { value: "Reflect", done: true };
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          return { value, done: true };
        } else {
          c4 = 3;
          const obj = { value: tmp4.deepLinkToSubscriptions(isAmazonDevice), done: true };
          return obj;
        }
      } catch (tmp10) {
        c4 = 3;
        throw tmp10;
      }
    }
  })();
  iter.next();
  return iter;
});

export const AmazonModule = RNIapAmazonModule;
export const validateReceiptAmazon = function validateReceiptAmazon(arg0) {
  return closure_0(...arguments);
};
export const verifyLicense = function verifyLicense() {
  return closure_0(...arguments);
};
export const deepLinkToSubscriptionsAmazon = function deepLinkToSubscriptionsAmazon(arg0) {
  return closure_0(...arguments);
};
