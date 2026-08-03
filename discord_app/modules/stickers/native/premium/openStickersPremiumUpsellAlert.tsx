// === Module 9802: _openStickersPremiumUpsellAlert ===

// Module 9802 (_openStickersPremiumUpsellAlert)
import fetchSubscriptionPlansForSKU from "fetchSubscriptionPlansForSKU";
import "noop";
import ME from "ME";
import { jsx } from "jsxProd";

let c4;
let c5;
const require = arg1;
function _openStickersPremiumUpsellAlert() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    return (function*(arg0) {
      if (constants === 2) {
        constants = 3;
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
          constants = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              constants = 3;
              throw arg1;
            } else if (arg0 === 2) {
              constants = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const table = tmp2;
              const callback2 = tmp5;
              const obj1 = { type: null, location: null };
              obj1[0] = outer1_5.STICKER_PREMIUM_TIER_2_UPSELL_MODAL;
              obj1[1] = callback;
              outer1_1(outer1_2[4]).track(constants.OPEN_MODAL, obj1);
              const obj7 = outer1_1(outer1_2[4]);
              const items = [callback(outer1_2[5]).fetchPremiumSubscriptionPlans(), ];
              const obj9 = callback(outer1_2[5]);
              items[1] = callback(outer1_2[6]).fetchPaymentSources();
              c3 = 1;
              constants = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = Promise.all(items);
              return obj2;
            }
          } else if (arg0 === 1) {
            constants = 3;
            throw arg1;
          } else if (arg0 === 2) {
            constants = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            obj = callback2(table[7]);
            const obj4 = { importer: null };
            obj4[0] = function importer() {
              return callback(tmp2[9])(tmp2[8], tmp2.paths).then((arg0) => {
                let closure_0 = arg0.default;
                return () => { ... };
              });
            };
            obj.openLazy(obj4);
            constants = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp11) {
          constants = tmp;
          throw tmp11;
        }
      }
    })();
  });
  const _openStickersPremiumUpsellAlert = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ AnalyticEvents: c4, AnalyticsSections: c5 } = ME);
const result = require("ME").fileFinishedImporting("modules/stickers/native/premium/openStickersPremiumUpsellAlert.tsx");

export default function openStickersPremiumUpsellAlert() {
  const self = this;
  const apply = _openStickersPremiumUpsellAlert.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};