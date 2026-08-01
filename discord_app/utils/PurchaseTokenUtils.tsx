// === Module 4522: getPurchaseToken ===

// Module 4522 (getPurchaseToken)
import asyncGeneratorStep from "asyncGeneratorStep";

const require = arg1;
function getPurchaseToken() {
  const Storage = require(595) /* Storage */.Storage;
  const value = Storage.get(purchase_token);
  if (null != value) {
    const _Date = Date;
    if (value.expires >= Date.now()) {
      return value.purchaseToken;
    }
  }
  const v4Result = require(514) /* v1 */.v4();
  const Storage2 = tmp(595).Storage;
  const tmp3 = purchase_token;
  const tmpResult = require(514) /* v1 */;
  const result = Storage2.set(tmp3, { purchaseToken: v4Result, expires: Date.now() + closure_4 });
  return v4Result;
}
function _getPurchaseTokenHash() {
  const self = this;
  const tmp = callback(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
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
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_1 = tmp2;
            let closure_0;
            const _Uint8Array2 = Uint8Array;
            const parts = outer1_5().split("");
            const uint8Array = new Uint8Array(parts.map((str) => str.charCodeAt(0)));
            const _window = window;
            c2 = 1;
            c3 = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = subtle.digest({ name: "SHA-256" }, uint8Array);
            return obj1;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj2 = { value: null, done: true };
          obj2[0] = arg1;
          return obj2;
        } else {
          closure_0 = arg1;
          const _btoa = btoa;
          const _String = String;
          closure_0 = 0;
          const _Uint8Array = Uint8Array;
          const uint8Array1 = new Uint8Array(closure_0);
          const items = [];
          closure_0 = HermesBuiltin.arraySpread(uint8Array1, closure_0);
          const _String2 = String;
          c3 = 3;
          obj = { value: null, done: true };
          obj[0] = btoa(HermesBuiltin.apply(items, String));
          return obj;
        }
      } catch (tmp17) {
        c3 = tmp;
        throw tmp17;
      }
    }
  });
  const _getPurchaseTokenHash = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const purchase_token = "purchase_token";
let closure_4 = 60 * require("set").Millis.DAY;
let result = require("Storage").fileFinishedImporting("utils/PurchaseTokenUtils.tsx");

export { getPurchaseToken };
export const getPurchaseTokenHash = function getPurchaseTokenHash() {
  const self = this;
  const apply = _getPurchaseTokenHash.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};