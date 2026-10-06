// === Module 5429: PurchaseTokenUtils ===

// Module 5429 (PurchaseTokenUtils)
import Storage3 from "Storage" /* 510 */;
import DurationsDefault from "Durations" /* 1102 */;
import v1 from "v1" /* 1266 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

function getPurchaseToken() {
  const Storage = Storage3.Storage;
  const value = Storage.get(purchase_token);
  if (null != value) {
    const _Date = Date;
    if (value.expires >= Date.now()) {
      return value.purchaseToken;
    }
  }
  const tmpResult = v1;
  const v4Result = tmpResult.v4();
  const Storage2 = Storage3.Storage;
  obj = { purchaseToken: v4Result, expires: Date.now() + closure_4 };
  const result = Storage2.set(purchase_token, obj);
  return v4Result;
}
let obj = function _getPurchaseTokenHash() {
  obj = _asyncToGenerator(async function() {
    let c2;
    let c3;
    let closure_1;
    const _Uint8Array2 = Uint8Array;
    const str2 = getPurchaseToken();
    const parts = str2.split("");
    const self3 = this;
    const self4 = this;
    const uint8Array = new Uint8Array(parts.map((item) => item.charCodeAt(0)));
    const _window = window;
    await subtle.digest({ name: "SHA-256" }, uint8Array);
    const _btoa = btoa;
    const _String = String;
    let closure_0 = 0;
    const _Uint8Array = Uint8Array;
    const self = this;
    const self2 = this;
    const uint8Array1 = new Uint8Array(closure_0);
    const items = [];
    closure_0 = HermesBuiltin.arraySpread(items, uint8Array1, closure_0);
    const _String2 = String;
    return btoa(HermesBuiltin.apply(fromCharCode, items, String));
  });
  return obj(...arguments);
};
const purchase_token = "purchase_token";
let closure_4 = 60 * DurationsDefault.Millis.DAY;
let result = size.fileFinishedImporting("utils/PurchaseTokenUtils.tsx");

export { getPurchaseToken };
export const getPurchaseTokenHash = function getPurchaseTokenHash() {
  return obj(...arguments);
};