// === Module 10803: _redirectToSlayerStorefrontWeb ===

// Module 10803 (_redirectToSlayerStorefrontWeb)
import timestampDefault from "timestamp" /* 3 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import { Routes } from "ME" /* 1074 */;

const require = arg1;
function _redirectToSlayerStorefrontWeb() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
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
          c6 = 2;
          if (0 === logger) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              dependencyMap = tmp3;
              let callback2 = tmp7;
              let callback;
              callback2 = undefined;
              dependencyMap = undefined;
              ({ applicationId: c0, skuId: c1, source: c2 } = callback);
              closure_3 = undefined;
              logger = 1;
              c6 = 1;
              return { value: "PX_16", done: true };
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else if (null == callback) {
              const obj2 = { key: "SHOP_ITEM_HANDOFF_ERROR", content: null };
              const intl2 = callback(1114).intl;
              obj2[1] = intl2.string(callback(1114).t["rTU7/z"]);
              callback2(4259).open(obj2);
              c6 = 3;
              return { value: false, done: true };
            } else {
              c4 = 1;
              closure_3 = c4.COLLECTIBLES_SHOP_GAME_SHOP(callback, undefined, callback2);
              let obj6 = callback2(7316);
              logger = 3;
              c6 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = obj6.redirectWithHandoffToken(closure_3, { forceExternalBrowser: true });
              return obj3;
            }
          } else if (2 === tmp7) {
            c4 = 0;
            c4 = closure_3;
            const _JSON = JSON;
            const _HermesInternal = HermesInternal;
            logger.error("Error performing web handoff: " + JSON.stringify(c4));
            obj1 = callback(4233);
            let obj4 = { tags: null };
            const obj5 = { source: null, skuId: null };
            obj5[0] = dependencyMap;
            obj5[1] = callback2;
            obj4[0] = obj5;
            const result = obj1.captureBillingException(c4, obj4);
            obj4 = callback2(4259);
            obj6 = { key: "SHOP_ITEM_HANDOFF_ERROR", content: null };
            const intl = callback(1114).intl;
            obj6[1] = intl.string(callback(1114).t["rTU7/z"]);
            obj4.open(obj6);
            c6 = 3;
            return { value: false, done: true };
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c4 = 0;
            c6 = 3;
            return { value: true, done: true };
          }
        } catch (tmp45) {
          closure_3 = tmp45;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp45;
          } else {
            logger = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
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
let closure_5 = new timestampDefault("redirectToSlayerStorefrontWeb");
const tmp2 = new timestampDefault("redirectToSlayerStorefrontWeb");
let result = require("set").fileFinishedImporting("modules/slayer_storefront/native/redirectToSlayerStorefrontWeb.tsx");

export default function redirectToSlayerStorefrontWeb() {
  const self = this;
  const apply = _redirectToSlayerStorefrontWeb.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};