// === Module 10256: redirectToSlayerStorefrontWeb ===

// Module 10256 (redirectToSlayerStorefrontWeb)
import LoggerDefault from "Logger" /* 3 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = fn;
let closure_6 = async function _redirectToSlayerStorefrontWeb(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp7;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          ({ applicationId: closure_129_0, skuId: closure_129_1, source: closure_129_2 } = closure_0);
          closure_129_3 = undefined;
          c5 = 1;
          c6 = 1;
          return { value: "flex", done: true };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else if (null == closure_129_0) {
          const obj8 = { key: "SHOP_ITEM_HANDOFF_ERROR", content: null };
          const intl2 = closure_130_0(closure_130_2[4]).intl;
          obj8.content = intl2.string(closure_130_0(closure_130_2[4]).t["rTU7/z"]);
          closure_130_1(closure_130_2[3]).open(obj8);
          c6 = 3;
          return { value: false, done: true };
        } else {
          c4 = 1;
          closure_129_3 = closure_130_4.COLLECTIBLES_SHOP_GAME_SHOP(closure_129_0, undefined, closure_129_1);
          c5 = 3;
          c6 = 1;
          const obj10 = { value: closure_130_1(closure_130_2[5]).redirectWithHandoffToken(closure_129_3, { forceExternalBrowser: true }), done: false };
          return obj10;
        }
      } else if (2 === tmp7) {
        c4 = 0;
        closure_129_4 = closure_3;
        const _JSON = JSON;
        const _HermesInternal = HermesInternal;
        closure_130_5.error("Error performing web handoff: " + JSON.stringify(closure_129_4));
        const obj11 = { tags: null };
        const obj12 = { source: closure_129_2, skuId: closure_129_1 };
        obj11.tags = obj12;
        const result = closure_130_0(closure_130_2[6]).captureBillingException(closure_129_4, obj11);
        const obj2 = closure_130_0(closure_130_2[6]);
        const obj13 = { key: "SHOP_ITEM_HANDOFF_ERROR", content: null };
        const intl = closure_130_0(closure_130_2[4]).intl;
        obj13.content = intl.string(closure_130_0(closure_130_2[4]).t["rTU7/z"]);
        closure_130_1(closure_130_2[3]).open(obj13);
        c6 = 3;
        return { value: false, done: true };
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj = { value, done: true };
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
        c5 = tmp;
      }
    }
  }
};
const Routes = fn(1074).Routes;
let closure_5 = new LoggerDefault("redirectToSlayerStorefrontWeb");
const size = fn(2);
let result = size.fileFinishedImporting("modules/slayer_storefront/native/redirectToSlayerStorefrontWeb.tsx");

export default function redirectToSlayerStorefrontWeb() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};