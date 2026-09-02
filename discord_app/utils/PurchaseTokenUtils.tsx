// discord_app/utils/PurchaseTokenUtils.tsx
import v1 from "../../_runtime/00511_v1.js";
import Storage3 from "../../discord_common/js/packages/storage/Storage.tsx";
import setDefault from "Durations.tsx";
import closure_2 from "../../_runtime/00005_asyncGeneratorStep.js";

require = arg1;
function getPurchaseToken() {
  const Storage = Storage3.Storage;
  const value = Storage.get(purchase_token);
  if (null != value) {
    const _Date = Date;
    if (value.expires >= Date.now()) {
      return value.purchaseToken;
    }
  }
  const v4Result = v1.v4();
  const Storage2 = tmp(592).Storage;
  const tmp3 = purchase_token;
  const tmpResult = v1;
  const result = Storage2.set(tmp3, { purchaseToken: v4Result, expires: Date.now() + closure_4 });
  return v4Result;
}
function _getPurchaseTokenHash() {
  const self = this;
  const tmp = callback(function* () {
    closure_1 = tmp2;
    const _Uint8Array2 = Uint8Array;
    const parts = closure_1_5().split("");
    const uint8Array = new Uint8Array(parts.map((str) => str.charCodeAt(0)));
    const _window = window;
    closure_0 = yield subtle.digest({ name: "SHA-256" }, uint8Array);
    const _btoa = btoa;
    const _String = String;
    closure_0 = 0;
    const _Uint8Array = Uint8Array;
    const uint8Array1 = new Uint8Array(closure_0);
    const items = [];
    closure_0 = HermesBuiltin.arraySpread(uint8Array1, closure_0);
    const _String2 = String;
    return btoa(HermesBuiltin.apply(items, String));
  });
  closure_6 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const purchase_token = "purchase_token";
let closure_4 = 60 * setDefault.Millis.DAY;
let result = require("set").fileFinishedImporting("utils/PurchaseTokenUtils.tsx");

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
