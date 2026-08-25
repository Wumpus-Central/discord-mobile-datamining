// === Module 10127: _openStickersPremiumUpsellAlert ===

// Module 10127 (_openStickersPremiumUpsellAlert)
import noopAll from "noop" /* 19 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import ME from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
function _openStickersPremiumUpsellAlert() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              obj1 = { type: null, location: null };
              obj1[0] = closure_1_5.STICKER_PREMIUM_TIER_2_UPSELL_MODAL;
              obj1[1] = callback;
              closure_1_1(closure_1_2[4]).track(constants.OPEN_MODAL, obj1);
              const obj7 = closure_1_1(closure_1_2[4]);
              const items = [callback(closure_1_2[5]).fetchPremiumSubscriptionPlans(), ];
              const obj9 = callback(closure_1_2[5]);
              items[1] = callback(closure_1_2[6]).fetchPaymentSources();
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
                closure_0 = arg0.default;
                return () => { ... };
              });
            };
            obj.openLazy(obj4);
            constants = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp11) {
          constants = tmp;
          throw tmp11;
        }
      }
    })();
  });
  closure_7 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
noopAll;
({ AnalyticEvents: c4, AnalyticsSections: c5 } = ME);
const result = require("set").fileFinishedImporting("modules/stickers/native/premium/openStickersPremiumUpsellAlert.tsx");

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